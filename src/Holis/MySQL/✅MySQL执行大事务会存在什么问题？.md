# ✅MySQL执行大事务会存在什么问题？
<!--page header-->

<a name="RRfrY"></a>
# 典型回答

所谓大事务，一般是指事务中要执行的SQL很多，事务的时间比较长。

这样的事务，会带来很多问题。

1、占用数据库连接：这个很容易理解，SQL多了，执行的就会很慢，那么大的事务就会很长时间占用数据库链接，但是因为数据库连接是有限的，被长事务占用后，就会导致其他事务可能无法获取连接，导致应用的吞吐量下降， 影响系统可用性。

2、难以回滚：由于大事务涉及的数据量较大，执行回滚操作可能会变得非常耗时。如果事务需要回滚或失败，可能需要花费很长时间才能完全回滚所有修改，这会对数据库的可用性和性能造成负面影响。

3、锁竞争：大事务的话，写操作多了就可能要锁定许多数据。这可能导致其他并发事务在访问相同资源时遇到锁竞争，从而导致性能下降和延迟增加。长时间的锁定还可能导致其他事务的等待和阻塞。

4、日志空间占用：大事务会生成大量的日志，尤其是binlog，当单个事务最大允许使用的Binlog文件的大小超过了max_binlog_cache_size时，会导致报错：Multi-statement transaction required more than 'max_binlog_cache_size' bytes of storage; increase this mysqld variable and try again


解决方案：

拆分，把一个大事务，拆成多个事务。把不需要在事务中的操作，如读操作，内存计算操作、IO操作，远程调用等，放到事务外处理。


<!--page footer-->
- 原文: <https://www.yuque.com/hollis666/axzrte/ucgnyqsgubgrar7c>