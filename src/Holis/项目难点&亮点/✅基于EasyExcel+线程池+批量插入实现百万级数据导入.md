# ✅基于EasyExcel+线程池+批量插入实现百万级数据导入
<!--page header-->


这个问题是[https://www.yuque.com/hollis666/axzrte/pq601cwrcmznni0x](https://www.yuque.com/hollis666/axzrte/pq601cwrcmznni0x) 的衍生，内容基本上是来自这篇的，不是为了凑数，是很多人不知道这种其实可以当做项目亮点来用的，所以在这里单独再加一下。

<a name="HId3q"></a>
### 背景

项目中有一个数据迁移，原来的数据存储在旧的系统，现在系统做了重构，需要迁移到新的系统中，老系统的数据被加工到Excel中了，需要基于Excel实现文件的导入，同时需要避免内存溢出以及性能太低的问题。

<a name="WLemP"></a>
### 技术选型

在大文件的读取方面，EasyExcel更合适，因为他不会像POI一样耗内存，可以大大的减少内存占用。因为他并不会一次性把整个Excel都加载到内存中，而是逐行读取的。

同时考虑使用多线程来读取，这里就需要用到线程池的技术，直接用ExecutorService就行了。

因为还涉及到数据的批量写入，需要依赖mybatis或者mybatis-plus。

<a name="ZciCj"></a>
### 具体实现

直接参考下面这篇就行了，代码都有的：

[✅如何实现百万级数据从Excel导入到数据库？](https://www.yuque.com/hollis666/axzrte/pq601cwrcmznni0x?view=doc_embed&inner=oiW1h)

<a name="Z8ngb"></a>
### 学习资料

[✅如何针对大Excel做文件读取？](https://www.yuque.com/hollis666/axzrte/fqevsshv4hxvtx69?view=doc_embed)

[✅什么是线程池，如何实现的？](https://www.yuque.com/hollis666/axzrte/fb5th6?view=doc_embed)

[✅基于EasyExcel+线程池解决POI文件导出时的内存溢出及超时问题](https://www.yuque.com/hollis666/axzrte/wcm6xqvp0z004ing?view=doc_embed)


<!--page footer-->
- 原文: <https://www.yuque.com/hollis666/axzrte/iekgungvgtyb06zh>