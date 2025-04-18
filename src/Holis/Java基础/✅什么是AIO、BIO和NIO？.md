# ✅什么是AIO、BIO和NIO？
<!--page header-->

<a name="XunUK"></a>
# 典型回答

BIO （Blocking I/O）：**同步阻塞I/O**，是JDK1.4之前的传统IO模型。 线程发起IO请求后，一直阻塞，直到缓冲区数据就绪后，再进入下一步操作。

NIO （Non-Blocking I/O）：**同步非阻塞IO**，线程发起IO请求后，不需要阻塞，立即返回。用户线程不原地等待IO缓冲区，可以先做一些其他操作，只需要定时轮询检查IO缓冲区数据是否就绪即可。

AIO （ Asynchronous I/O）：**异步非阻塞I/O模型**。线程发起IO请求后，不需要阻塞，立即返回，也不需要定时轮询检查结果，异步IO操作之后会回调通知调用方。

![](./img/ScPjpF6ABCFFePwu/1705133708567-49955e01-446a-4fef-b441-4356180eac5c-158986.png)

<a name="tyOCM"></a>
# 知识扩展
<a name="byi2D"></a>
## Java中BIO、NIO、AIO分别适用哪些场景？
BIO方式适用于连接数目比较小且固定的架构，这种方式对服务器资源要求比较高，并发局限于应用中，JDK1.4以前的唯一选择，但程序直观简单易理解。

NIO方式适用于连接数目多且连接比较短（轻操作）的架构，比如聊天服务器，并发局限于应用中，编程比较复杂，JDK1.4开始支持。

AIO方式适用于连接数目多且连接比较长（重操作）的架构，比如相册服务器，充分调用OS参与并发操作，编程比较复杂，JDK7开始支持。
<a name="yV1me"></a>
## 同步，异步，阻塞，非阻塞的区别
[同步、异步、阻塞、非阻塞怎么理解？](https://www.yuque.com/hollis666/axzrte/bhoto944106qfong)

<a name="DjU5m"></a>
## 操作系统的IO模型有哪五种？

[操作系统的IO模型有哪些？](https://www.yuque.com/hollis666/axzrte/rilxns8rh8gdxs78?view=doc_embed)


<!--page footer-->
- 原文: <https://www.yuque.com/hollis666/axzrte/qzdgo2>