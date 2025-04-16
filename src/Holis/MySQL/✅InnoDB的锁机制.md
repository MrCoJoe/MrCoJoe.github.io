# ✅InnoDB的锁机制
<!--page header-->

<a name="XqpD5"></a>
# 典型回答

锁是MySQL中并发控制的重要手段，InnoDB作为一种最常用的执行引擎，他支持很多种锁的类型。InnoDB中的锁根据不同的分类方式也有很多种分法。主要由以下这些：

按**操作**划分，可分为DML锁、DDL锁
按**锁的粒度**划分，可分为表级锁、行级锁、页级锁
按**锁的级别**划分，可分为共享锁、排他锁  详见
[✅什么是排他锁和共享锁？](https://www.yuque.com/hollis666/axzrte/ec5yhfon858vcq5p?view=doc_embed)

按**加锁方式**划分，可分为自动锁、显示锁
按**使用方式**划分，可分为乐观锁、悲观锁  详见 
[✅乐观锁与悲观锁如何实现？](https://www.yuque.com/hollis666/axzrte/ionc18?view=doc_embed)

按**锁的对象**划分，可分为记录锁、间隙锁、临键锁  详见
[✅MySQL的行级锁锁的到底是什么？](https://www.yuque.com/hollis666/axzrte/kfygzw?view=doc_embed)


<a name="R21Pm"></a>
# 扩展知识

<a name="gaZ1M"></a>
## 字典锁
[✅什么是MySQL的字典锁？](https://www.yuque.com/hollis666/axzrte/ru6eaoolefdo0lor?view=doc_embed)

<a name="ioNFr"></a>
## 意向锁

[✅什么是意向锁？](https://www.yuque.com/hollis666/axzrte/zf7nalngrigml547?view=doc_embed)

<a name="tE0sx"></a>
## 行级锁、表级锁、页

<a name="B2P7z"></a>
## 行级锁、表级锁、页级锁

<a name="gdz1R"></a>
### 行级锁
行级锁是Mysql中锁定粒度最细的一种锁，表示只针对当前操作的行进行加锁。行级锁能大大减少数据库操作的冲突。其加锁粒度最小，但加锁的开销也最大。行级锁分为共享锁 和 排他锁。

他的特点是开销大，加锁慢；会出现死锁；优点是锁定粒度最小，发生锁冲突的概率最低，并发度也最高。

<a name="kJLSC"></a>
### 表级锁
表级锁是MySQL中锁定粒度最大的一种锁，表示对当前操作的整张表加锁，它实现简单，资源消耗较少，被大部分MySQL引擎支持。最常使用的MYISAM与INNODB都支持表级锁定。

他的优点是开销小，加锁快；不会出现死锁；缺点是锁定粒度大，发出锁冲突的概率最高，并发度最低。

<a name="A56TK"></a>
### 页级锁
页级锁是MySQL中锁定粒度介于行级锁和表级锁中间的一种锁。表级锁速度快，但冲突多，行级冲突少，但速度慢。所以取了折衷的页级，一次锁定相邻的一组记录。BDB支持页级锁

他的特点是开销和加锁时间界于表锁和行锁之间；会出现死锁；锁定粒度界于表锁和行锁之间，并发度一般

<a name="tPlyb"></a>
### InnoDB中的行锁与表锁

InnoDB行锁是通过给索引上的索引项加锁来实现的，这一点MySQL与Oracle不同，后者是通过在数据块中对相应数据行加锁来实现的。InnoDB这种行锁实现特点意味着：只有通过索引条件检索数据，InnoDB才使用行级锁，否则，InnoDB将使用表锁！

在实际应用中，要特别注意InnoDB行锁的这一特性，不然的话，可能导致大量的锁冲突，从而影响并发性能。

- 在不通过索引条件查询的时候,InnoDB 确实使用的是表锁,而不是行锁。
- 由于 MySQL 的行锁是针对索引加的锁,不是针对记录加的锁,所以虽然是访问不同行 的记录,但是如果是使用相同的索引键,是会出现锁冲突的。应用设计的时候要注意这一点。（参考：[https://www.yuque.com/hollis666/axzrte/yywypm](https://www.yuque.com/hollis666/axzrte/yywypm) ）
- 当表有多个索引的时候,不同的事务可以使用不同的索引锁定不同的行,另外,不论 是使用主键索引、唯一索引或普通索引,InnoDB 都会使用行锁来对数据加锁。
- 即便在条件中使用了索引字段,但是否使用索引来检索数据是由 MySQL 通过判断不同 执行计划的代价来决定的,如果 MySQL 认为全表扫 效率更高,比如对一些很小的表,它 就不会使用索引,这种情况下 InnoDB 将使用表锁,而不是行锁。因此,在分析锁冲突时, 别忘了检查 SQL 的执行计划,以确认是否真正使用了索引。

[✅MySQL会默认添加主键索引，为啥还会有锁表的情况？](https://www.yuque.com/hollis666/axzrte/vef33zs32vyylktv?view=doc_embed)


<!--page footer-->
- 原文: <https://www.yuque.com/hollis666/axzrte/rgdoek>