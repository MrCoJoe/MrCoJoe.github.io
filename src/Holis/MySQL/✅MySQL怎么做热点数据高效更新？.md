# ✅MySQL怎么做热点数据高效更新？
<!--page header-->

<a name="XiHnv"></a>
# 典型回答

MySQL的热点数据更新问题，一直都是行业内的一个难题，对于秒杀场景至关重要。一旦处理不好，就可能会导致数据库被打垮。

那么，如果一定要在MySQL这个层面上，抗住高并发的热点数据并发更新，有什么方案呢？拿库存扣减举例

1、库存拆分，把一个大的库存拆分成多个小库存，拆分后，一次扣减动作就可以分散到不同的库、表中进行，降低锁粒度提升并发。
优点：实现较简单
缺点：存在碎片问题、库存调控不方便
2、请求合并，把多个库存扣减请求，合并成一个，进行批量更新。
优点：简单
缺点：适用于异步场景，或者经过分析后认为可以合并的场景
3、把update转换成insert，直接插入一次占用记录，然后异步统计剩余库存，或者通过SQL统计流水方式计算剩余库存。
优点：没有update，无锁冲突
缺点：insert时控制不好容易超卖、insert后剩余库存不好统计

除了上面这三个方案外，重点介绍一个我们公司内部在用的，扛了双十一的高并发的秒杀的方案。

那就是**改造MySQL**

主要思路就是，针对于频繁更新或秒杀类业务场景，大幅度优化对于热点行数据的update操作的性能。当开启热点更新自动探测时，系统会自动探测是否有单行的热点更新，如果有，则会让大量的并发 update 排队执行，以减少大量行锁造成的并发性能下降。

也就是说，他们改造了MySQL数据库，让同一个热点行的更新语句，在执行层进行排队。这样的排队相比update的排队，要轻量级很多，因为他不需要自旋，不需要抢锁。

这个方案的好处就是开发不需要做额外的事情，只需要开启热点检测就行了。缺点就是改造MySQL数据库有成本。不过现在很多云上数据库都支持了。如：

腾讯云数据库MySQL热点更新： [https://cloud.tencent.com/document/product/236/63239](https://cloud.tencent.com/document/product/236/63239)
阿里云数据库Inventory Hint： [https://www.alibabacloud.com/help/zh/apsaradb-for-rds/latest/inventory-hint](https://www.alibabacloud.com/help/zh/apsaradb-for-rds/latest/inventory-hint)


具体原理见：

[✅阿里的数据库能抗秒杀的原理](https://www.yuque.com/hollis666/axzrte/gwg64tg0g107wgz3?view=doc_embed)



<!--page footer-->
- 原文: <https://www.yuque.com/hollis666/axzrte/rfqcbz190k9egley>