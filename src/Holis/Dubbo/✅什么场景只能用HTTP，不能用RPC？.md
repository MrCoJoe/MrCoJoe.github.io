# ✅什么场景只能用HTTP，不能用RPC？
<!--page header-->

<a name="kbpLo"></a>
# 典型回答

1、在异构系统（跨语言和跨平台），HTTP具有更好的兼容性，因为HTTP是一种通用的协议，几乎所有的编程语言和操作系统都支持HTTP协议，而不是所有的编程语言和操作系统都支持相同的RPC协议。

2、RPC适合用在企业内部，要求使用同一套注册中心进行服务治理，如果是跨组织，或者跨公司，这种情况只能用更加通用的HTTP进行通信。

<a name="jNm8D"></a>
# 扩展知识

<a name="eEANH"></a>
## RPC有什么好处？

性能好：RPC在传输效率上通常比HTTP更高，此外，RPC可以使用更紧凑的数据格式，如Protocol Buffers和Thrift，可以更有效地利用网络带宽和存储空间。

安全性：目前，Dubbo等RPC框架主要应用在企业内部之间的系统调用，而内部系统之间调用的话安全性就更有保障一些。

调用简单：RPC可以帮我们像调用本地方法一样调用远程代码，而HTTP调用需要拼接Body、Header等等，过于复杂。



<!--page footer-->
- 原文: <https://www.yuque.com/hollis666/axzrte/whuui0r5r6kaauc7>