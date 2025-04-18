# ✅如何用setnx实现一个可重入锁？
<!--page header-->

<a name="Ubunj"></a>
# 典型回答

可重入锁是一种多线程同步机制，允许**同一线程**多次获取同一个锁而不会导致死锁。

[✅什么是可重入锁，怎么实现可重入锁？](https://www.yuque.com/hollis666/axzrte/zvx2w5h9sr7trle7?view=doc_embed)

在Redis中，最简单的方式就是使用setnx来实现一个分布式锁了，但是如果我想要实现一个具有重入功能的锁，那么用setnx如何实现呢？

首先，我们需要有一个标识来识别出一个线程，这里可以是线程ID，分布式的traceId（[https://www.yuque.com/hollis666/axzrte/nnl88aqknhx2v76c](https://www.yuque.com/hollis666/axzrte/nnl88aqknhx2v76c) ），或者是一个唯一的业务ID都可以。

有了这个唯一标识之后，我们加锁的时候，就可以用这个标识来判断当前持有锁的线程是不是自己，如果是的话，就可以直接重入。否则就无法重入。

为了保证重入几次之后，需要同时解锁几次，那么我们也需要维护一个重入次数的字段。因为每一次重入其实就是一个加锁动作，避免出现加锁2次，但是1次解锁动作就把锁给解了的情况。

有了以上基础之后，加锁和解锁的逻辑如下：

**加锁的逻辑**：

   - 当线程尝试获取锁时，它首先检查锁是否已经存在。
   - 如果锁不存在（即 **SETNX** 返回成功），线程设置锁，存储自己的标识符和计数器（初始化为1）。
   - 如果锁已存在，线程检查锁中的标识符是否与自己的相同。
      - 如果是，线程已经持有锁，只需增加计数器的值。
      - 如果不是，获取锁失败，因为锁已被其他线程持有。

**解锁的逻辑**：

   - 当线程释放锁时，它会减少计数器的值。
   - 如果计数器降至0，这意味着线程已完成对锁的所有获取请求，可以完全释放锁。
   - 如果计数器大于0，锁仍被视为被该线程持有。

代码实现如下：

```java
import redis.clients.jedis.Jedis;

public class ReentrantRedisLock {

    public synchronized boolean tryLock(Jedis jedis,String lockKey) {
        String currentThreadId = String.valueOf(Thread.currentThread().getId());

        // 尝试获取锁
        String lockValue = jedis.get(lockKey);
        if (lockValue == null) {
            // 锁不存在，尝试设置锁
            jedis.set(lockKey, currentThreadId + ":1", "NX", "EX", 30);
            return true;
        }

        // 锁存在，检查是否由当前线程持有
        String[] parts = lockValue.split(":");

        //加锁线程是当前线程，则增加次数，进行重入加锁
        if (parts.length == 2 && parts[0].equals(currentThreadId)) {
            int count = Integer.parseInt(parts[1]) + 1;
            jedis.set(lockKey, currentThreadId + ":" + count, "XX", "EX", 30);
            return true;
        }

        //加锁失败
        return false;
    }

    public synchronized void unlock(Jedis jedis,String lockKey) {
        String currentThreadId = String.valueOf(Thread.currentThread().getId());

        String lockValue = jedis.get(lockKey);
        if (lockValue != null) {
            String[] parts = lockValue.split(":");
            if (parts.length == 2 && parts[0].equals(currentThreadId)) {
                int count = Integer.parseInt(parts[1]);
                //减少重入次数
                if (count > 1) {
                    jedis.set(lockKey, currentThreadId + ":" + (count - 1), "XX", "EX", 30);
                } else {
                    //解锁
                    jedis.del(lockKey);
                }
            }
        }
    }
}

```

在这个实现中，锁的值是一个由线程 ID 和锁的获取次数组成的字符串，格式为 `线程ID:次数`。当一个线程尝试获取锁时，它会检查当前的锁值。

如果锁由相同的线程持有，则增加计数器；否则，尝试设置新的锁。释放锁时，它会递减计数器，当计数器为零时，锁被完全释放。


<!--page footer-->
- 原文: <https://www.yuque.com/hollis666/axzrte/ponw7kdrqasbrgoz>