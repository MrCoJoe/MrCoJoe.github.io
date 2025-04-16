# ✅Mybatis 是否支持延迟加载？实现原理是什么？
<!--page header-->

<a name="rn28V"></a>
# 典型回答

**延迟加载允许在需要时按需加载关联对象，而不是在查询主对象时立即加载所有关联对象。这样做可以提高查询性能和减少不必要的数据库访问。**

假设，我们有两张表，分别是订单表和商品项表，一个订单中可以关联多个商品项。

```java
public class Order {
  private int id;
  private String orderNumber;
  private List<Item> items; // 关联的商品项列表

  // 省略构造函数和getter/setter方法
}

public class Item {
  private int id;
  private int orderId;
  private String itemName;
  private BigDecimal price;

  // 省略构造函数和getter/setter方法
}
```

当我们从数据库中查询Order的时候，如果同时把关联的Item都返回，这就不是延迟加载，如果在后面真正要用到Item的时候再查询加载，这就是延迟加载。

延迟加载的主要原理就是当开启了延迟加载功能时，当查询主对象时，MyBatis会生成一个**代理对**象，并将代理对象返回给调用者。

当后面需要访问这些关联对象时，代理对象会检查关联对象是否已加载。如果未加载，则触发额外的查询。

查询结果返回后，MyBatis会将关联对象的数据填充到代理对象中，使代理对象持有关联对象的引用。这样，下次访问关联对象时，就可以直接从代理对象中获取数据，而无需再次查询数据库。



<!--page footer-->
- 原文: <https://www.yuque.com/hollis666/axzrte/cirnfyonf1bwg8dy>