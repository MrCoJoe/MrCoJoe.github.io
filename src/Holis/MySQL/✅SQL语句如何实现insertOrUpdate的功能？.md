# ✅SQL语句如何实现insertOrUpdate的功能？
<!--page header-->

<a name="biqe2"></a>
# 典型回答

在 MySQL 中，可以使用` INSERT INTO ... ON DUPLICATE KEY UPDATE `语句实现 insertOrUpdate 功能。

> 需要**注意**：在on duplicate key时，会在前一个索引值到当前值加临键锁，极容易造成死锁。


要使用` INSERT INTO ... ON DUPLICATE KEY UPDATE` 语句，需要满足以下条件：

1. 表必须有主键或唯一索引；
2. 插入的数据必须包含主键或唯一索引列；
3. 主键或唯一索引列的值不能为 NULL。

举个栗子：

假设有一个 student 表，包含 id、name 和 age 三列，其中 id 是主键。现在要插入一条数据，如果该数据的主键已经存在，则更新该数据的姓名和年龄，否则插入该数据。

```
INSERT INTO student (id, name, age) VALUES (1, 'Alice', 20)
ON DUPLICATE KEY UPDATE name='Alice', age=20;
```

<a name="mwEwk"></a>
# 扩展知识

<a name="gF5n3"></a>
## 类似SQL

除了INSERT INTO ... ON DUPLICATE KEY UPDATE，还有一些类似的 SQL 语句，比如：

1. REPLACE INTO: 如果存在唯一索引冲突，则先删除旧记录，再插入新记录。

2. INSERT IGNORE INTO: 如果唯一索引冲突，则忽略该条插入操作，不报错。


<!--page footer-->
- 原文: <https://www.yuque.com/hollis666/axzrte/gal4lxk8ug9g2bwk>