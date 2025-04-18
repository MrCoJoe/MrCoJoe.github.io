# ✅InnoDB和MyISAM有什么区别？
<!--page header-->

<a name="TDvTH"></a>
# 典型回答

InnoDB和MyISAM是MySQL中比较常用的两个执行引擎，MySQL 在 5.5 之前版本默认存储引擎是 MyISAM，5.5 之后版本默认存储引擎是 InnoDB，MyISAM适合查询以及插入为主的应用，InnoDB适合频繁修改以及涉及到安全性较高的应用。

> - 如果应用需要高度的数据完整性和事务支持，那么InnoDB是更好的选择。所以频繁修改及数据安全性的情况适合。
> - 如果应用主要是读取操作，或者需要高效的全文搜索功能，那么MyISAM可能更适合。所以查询频繁的适合。


他们主要有以下区别：

- 一、**InnoDB支持事务**，MyISAM不支持
- 二、**InnoDB 是聚集索引**，MyISAM 是非聚集索引。MyISAM是采用了一种索引和数据分离的存储方式，Innodb的聚簇索引中索引和数据在一起。
- 三、**InnoDB支持外键**，MyISAM不支持
- 四、**InnoDB 最小的锁粒度是行锁**，MyISAM 最小的锁粒度是表锁。
- 五、**InnoDB不支持FULLTEXT类型的索引（5.6之前不支持全文索引）**
- 六、**InnoDB中不保存表的行数**，但是MyISAM只要简单的读出保存好的行数即可
- 七、对于自增长的字段，InnoDB中必须包含只有该字段的索引，但是在MyISAM表中可以和其他字段一起建立联合索引
- 八、清空整个表时，InnoDB是一行一行的删除，效率非常慢。MyISAM则会重建表

| 
 | **InnoDB** | **MyISAM** |
| --- | --- | --- |
| **事务** | 支持 | 不支持 |
| **外键** | 支持 | 不支持 |
| **聚簇索引** | 支持 | 不支持 |
| **锁级别** | 支持行级锁、表级锁 | 表级锁 |
| **行数保存** | 不支持 | 支持 |
| **清空方式** | 逐行删除 | 重建表 |
| **默认版本** | 5.5 之后 | 5.5 之前 |
| **全文索引** | 5.6以后支持 | 支持 |


<a name="UzMm0"></a>
# 扩展知识

<a name="zrwBL"></a>
## 索引结构区别

[✅MyISAM 的索引结构是怎么样的，它存在的问题是什么？](https://www.yuque.com/hollis666/axzrte/mcl4sn8mcutieesz?view=doc_embed)

 


<!--page footer-->
- 原文: <https://www.yuque.com/hollis666/axzrte/adeg5m>