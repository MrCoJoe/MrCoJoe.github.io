# ✅MySQL千万级大表如何做数据清理？
<!--page header-->

<a name="JPmyC"></a>
# 典型回答

当我们要清理表中的历史数据时，一般都是通过时间来进行判断的，执行delete的语句如下：

```java
DELETE FROM table_hollis WHERE `gmt_create` < SUBDATE(CURDATE(),INTERVAL 300 DAY);
```

如上SQL，就是删除300天之前的数据，如果是小表的话，执行这个SQL没啥问题，但是如果是大表，如果表中的数据量达到千万级别的话，就会有问题了。

像以上这样的SQL，如果没有在gmt_create字段上创建索引，那么delete操作就会导致**锁表**，而锁表给业务带来的影响就是业务都无法进行写操作了，这肯定是无法接受的。

而且，即使业务说我可以允许锁表，上面的操作也有可能会失败，因为**数据库会对单条SQL产生的bin_log有大小是有限制的**，删除这么大量的数据，产生的日志大小如果超过该阈值，最终还是会失败！

> max_binlog_cache_size参数指定了单个事务最大允许使用的Binlog，当超出这个值时，会出现报错：Multi-statement transaction required more than 'max_binlog_cache_size' bytes of storage; increase this mysqld variable and try again


而且，删除操作还涉及到磁盘IO，如果要删除的数据太多，就会导致频繁的IO，对数据也会造成一定的压力。

还有就是，数据的删除过程，也会伴随着索引更新，大量的数据删除操作，会因为频繁的索引重建而导致业务无法进行写操作。

那么，怎么解决呢？如何实现高效、安全的大表的批量删除呢？

这里可以参考阿里云DMS的数据清理功能的方案（我司内部的数据库用的就是你这个方案——[https://help.aliyun.com/document_detail/162507.html](https://help.aliyun.com/document_detail/162507.html) ）

他的做法总结一句话就是：DMS在清理数据时会扫描全表，根据主键或非空唯一键分批执行。

1、获取要做数据清理的表的主键，或者非空唯一键的最大值和最小值。

如：
```java
select min(id) as min_id,max(id) as max_id from table_hollis;
```

假如我们得到min_id = 100，max_id = 100000；

2、分段取出第一个区间的所有数据，默认区间可能是1000，也可以根据binlog配置等进行调整。

```sql
select id,( //查出符合条件的数据
            select 1 from (
              //查出第一个区间的所有gmt_create
              select gmt_create from table_hollis
              where id >= 100 and id <= 100000 
              order by id asc limit 1000
            ) t where gmt_create < SUBDATE(CURDATE(),INTERVAL 300 DAY) limit 1
          )  as hasNeedDelItem
from table_hollis
where id >= 100 and id <= 100000 
order by id asc limit 1000;
```

以上SQL（SQL看不懂的多看几遍就懂了，主要就是尽可能用到索引和减少扫描的数据量，然后确定命中的ID），如果在100，到1100这个范围内，存在符合条件的数据，那么得到结果中hasNeedDelItem就是1 ，否则就是null。

最终我们只需要把所有hasNeedDelItem=1的id都删除掉就行了。

这样，在按照ID删除的时候，就可以用到主键索引，进行删除，而且因为做了分批，也不会一次性删除大量数据。

在阿里云MDS的数据清理功能中，还可以设置开始执行时间和结束执行时间，只有在这个时间范围内才会执行，如果超过了这个时间，就不再执行了。也可以避免数据清理导致线上数据库不可用！


<!--page footer-->
- 原文: <https://www.yuque.com/hollis666/axzrte/lgzsefg9r220alma>