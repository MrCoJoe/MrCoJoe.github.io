# ✅jstat命令的作用是什么？
<!--page header-->

<a name="oH883"></a>
# 典型回答

jstat(JVM Statistics Monitoring Tool)是用于监控虚拟机各种运行状态信息的命令行工具。他可以显示本地或远程虚拟机进程中的类装载、内存、垃圾收集、JIT编译等运行数据，在没有GUI图形的服务器上，它是运行期定位虚拟机性能问题的首选工具。

jstat位于java的bin目录下，主要利用JVM内建的指令对Java应用程序的资源和性能进行实时的命令行的监控，包括了对Heap size和垃圾回收状况的监控。可见，Jstat是轻量级的、专门针对JVM的工具，非常适用。

jstat 命令格式：

```c
 jstat -<option> [-t] [-h<lines>] <vmid> [<interval> [<count>]]
```

> option — 选项，我们一般使用 -gcutil 查看gc情况
> vmid — VM的进程号，即当前运行的java进程号
> interval– 间隔时间，单位为秒或者毫秒
> count — 打印次数，如果缺省则打印无数次


<a name="m3ctR"></a>
# 扩展知识

<a name="pqJAR"></a>
## 使用

参数interval和count代表查询间隔和次数，如果省略这两个参数，说明只查询一次。假设需要每250毫秒查询一次进程5828垃圾收集状况，一共查询5次，那命令行如下：

```c
jstat -gc 5828 250 5
```

<a name="q3DvH"></a>
## 常见用法
<a name="Y4qLQ"></a>
#### 1、jstat –class<pid> : 显示加载class的数量，及所占空间等信息。
<a name="BCAgg"></a>
#### 2、jstat -compiler <pid>显示VM实时编译的数量等信息。
<a name="XdTzF"></a>
#### 3、jstat -gc <pid>: 可以显示gc的信息，查看gc的次数，及时间。
<a name="tSKd1"></a>
#### 4、jstat -gccapacity <pid>:可以显示，VM内存中三代（young,old,perm）对象的使用和占用大小
<a name="qLm27"></a>
#### 5、jstat -gcutil <pid>:统计gc信息
<a name="OkAaC"></a>
#### 6、jstat -gcnew <pid>:年轻代对象的信息。
<a name="ZOp0n"></a>
#### 7、jstat -gcnewcapacity<pid>: 年轻代对象的信息及其占用量。
<a name="O6ZzQ"></a>
#### 8、jstat -gcold <pid>：old代对象的信息。
<a name="yGpjt"></a>
#### 9、stat -gcoldcapacity <pid>: old代对象的信息及其占用量。
<a name="HKHZ7"></a>
#### 10、jstat -gcpermcapacity<pid>: perm对象的信息及其占用量。
<a name="jhFAQ"></a>
#### 11、jstat -printcompilation <pid>：当前VM执行的信息。


<!--page footer-->
- 原文: <https://www.yuque.com/hollis666/axzrte/nl7i1d66zs9g3lgb>