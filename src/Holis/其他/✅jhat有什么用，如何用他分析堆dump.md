# ✅jhat有什么用，如何用他分析堆dump
<!--page header-->

<a name="Htk48"></a>
# 典型回答

jhat(Java Heap Analysis Tool),是一个用来分析java的堆情况的命令。使用jmap生成的Java堆的Dump文件可以用jhat命令将其转成html的形式，然后通过http访问可以查看堆情况。

jhat命令解析会Java堆dump并启动一个web服务器，然后就可以在浏览器中查看堆的dump文件了。

<a name="z8sLN"></a>
# 扩展知识

<a name="PlJc0"></a>
## 使用

使用jmap命令生成dump：

```c
$ jmap -dump:format=b,file=heapDump 62247
Dumping heap to /Users/hollis/workspace/test/heapDump ...
Heap dump file created
```

以上命令可以将进程6900的堆dump文件导出到heapDump文件中。查看当前目录就能看到heapDump文件。

接下来，解析Java堆转储文件,并启动一个 web server：

```c
$ jhat heapDump

Reading from heapDump...
Dump file created Thu Jan 21 18:59:51 CST 2016
Snapshot read, resolving...
Resolving 341297 objects...
Chasing references, expect 68 dots....................................................................
Eliminating duplicate references....................................................................
Snapshot resolved.
Started HTTP server on port 7000
Server is ready.
```

使用jhat命令，就启动了一个http服务，端口是7000 ，然后在访问http://localhost:7000/
页面如下：
[![](./img/skaUoAeey2j66ZST/1696856886268-0af6bd97-9507-4900-972b-48f25f7e4302-452413.png)](http://www.hollischuang.com/wp-content/uploads/2016/01/QQ20160121-1.png)

接下来，就可以在浏览器里面看到dump文件之后就可以进行分析了。这个页面会列出当前进程中的所有对像情况。

该页面提供了几个查询功能可供使用：

```c
All classes including platform//
Show all members of the rootset
Show instance counts for all classes (including platform)
Show instance counts for all classes (excluding platform)
Show heap histogram
Show finalizer summary
Execute Object Query Language (OQL) query
```

一般查看堆异常情况主要看这个两个部分：
**Show instance counts for all classes (excluding platform)**，平台外的所有对象信息。如下图：
[![](./img/skaUoAeey2j66ZST/1696856921301-88ef08f2-5d89-4424-bf15-0b1dbdd9857a-661588.png)](http://www.hollischuang.com/wp-content/uploads/2016/01/QQ20160121-3.png)
**Show heap histogram** 以树状图形式展示堆情况。如下图：
[![](./img/skaUoAeey2j66ZST/1696856921573-1ea1be3a-4149-4208-bbfd-11cbacb2a3c5-128756.png)](http://www.hollischuang.com/wp-content/uploads/2016/01/QQ20160121-2.png)
具体排查时需要结合代码，观察是否大量应该被回收的对象在一直被引用或者是否有占用内存特别大的对象无法被回收。


<!--page footer-->
- 原文: <https://www.yuque.com/hollis666/axzrte/nhd29y82stcf64bi>