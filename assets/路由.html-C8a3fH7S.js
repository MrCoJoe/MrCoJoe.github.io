import{_ as n,o as a,c as i,d as e}from"./app-C-SlHR5I.js";const l={};function p(r,s){return a(),i("div",null,s[0]||(s[0]=[e(`<h1 id="网关-路由" tabindex="-1"><a class="header-anchor" href="#网关-路由"><span>网关-路由</span></a></h1><blockquote><h4 id="如何使用" tabindex="-1"><a class="header-anchor" href="#如何使用"><span>如何使用</span></a></h4></blockquote><p><strong>基础路由</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>基础的路由是不需要额外引用的</span></span>
<span class="line"><span>配置文件如下，主要看15-40行</span></span>
<span class="line"><span>    id：路由标记，唯一，一般写服务名</span></span>
<span class="line"><span>    uri：一般使用lb协议，表示负载均衡模式，也可以直接使用http，指定某个具体地址（比如三方）。</span></span>
<span class="line"><span>    predicates：Path指的是路径匹配，Header是根据头信息匹配，注意这里多个配置是与的关系，并不是符合其中一个</span></span>
<span class="line"><span>    filters: 过滤器配置，这里配料熔断相关</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>yaml</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>spring:</span></span>
<span class="line"><span>application:</span></span>
<span class="line"><span>name: pangu-gateway</span></span>
<span class="line"><span>cloud:</span></span>
<span class="line"><span># 动态路由</span></span>
<span class="line"><span>gateway:</span></span>
<span class="line"><span>discovery:</span></span>
<span class="line"><span>locator:</span></span>
<span class="line"><span># 开启服务发现让gateway可以发现注册中心的服务，解析微服务名称为主机名和端口，实现动态路由</span></span>
<span class="line"><span>enabled: true</span></span>
<span class="line"><span># lowerCaseServiceId: true  # 请求服务是小写的时候改成true（默认为false轻微服务必须是大写）</span></span>
<span class="line"><span># default-filters:</span></span>
<span class="line"><span># - PgHystrix</span></span>
<span class="line"><span># 路线</span></span>
<span class="line"><span>routes:</span></span>
<span class="line"><span>        - id: pangu-frame-simple</span></span>
<span class="line"><span>uri: lb://pangu-frame-simple-local</span></span>
<span class="line"><span>predicates:</span></span>
<span class="line"><span>            - Path=/pangu-xdev/**</span></span>
<span class="line"><span># - Header=branchCode, 111</span></span>
<span class="line"><span>filters:</span></span>
<span class="line"><span>            - name: PgHystrix</span></span>
<span class="line"><span>args:</span></span>
<span class="line"><span>fallbackUri: forward:/fallback</span></span>
<span class="line"><span>timeout:</span></span>
<span class="line"><span>                  - &#39;/pangu-xdev/**=4000&#39;</span></span>
<span class="line"><span>                  - &#39;/kk-xdev/**=3000&#39;</span></span>
<span class="line"><span>fallback:</span></span>
<span class="line"><span># - &#39;/pangu-xdev/**=forward:/fallback2&#39;</span></span>
<span class="line"><span>                  - &#39;/pangu-xdev/ee/**=forward:/fallback3&#39;</span></span>
<span class="line"><span>        - id: pangu-frame-test</span></span>
<span class="line"><span>uri: lb://pangu-frame-test</span></span>
<span class="line"><span>predicates:</span></span>
<span class="line"><span>            - Path=/pangu-test/**</span></span>
<span class="line"><span>filters:</span></span>
<span class="line"><span>            - name: PgHystrix</span></span>
<span class="line"><span>args:</span></span>
<span class="line"><span>fallbackUri: /abcdvvvvv</span></span>
<span class="line"><span>timeout:</span></span>
<span class="line"><span>                  - &#39;/abc/sss=7450&#39;</span></span>
<span class="line"><span>                  - &#39;/ab2/*=7000&#39;</span></span>
<span class="line"><span>                  - &#39;/pangu-xdev/**=7000&#39;</span></span>
<span class="line"><span># 处理跨域请求</span></span>
<span class="line"><span>globalcors:</span></span>
<span class="line"><span>corsConfigurations:</span></span>
<span class="line"><span>&#39;[/**]&#39;:</span></span>
<span class="line"><span>allowedHeaders: &quot;*&quot;</span></span>
<span class="line"><span>allowedOriginPatterns: &quot;*&quot;</span></span>
<span class="line"><span>allowCredentials: true</span></span>
<span class="line"><span>allowedMethods:</span></span>
<span class="line"><span>              - GET</span></span>
<span class="line"><span>              - POST</span></span>
<span class="line"><span>              - DELETE</span></span>
<span class="line"><span>              - PUT</span></span>
<span class="line"><span>              - OPTION</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>动态路由</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>引入如下模块</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>xml</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>    &lt;groupId&gt;com.kingtsoft.pangu&lt;/groupId&gt;</span></span>
<span class="line"><span>    &lt;artifactId&gt;pangu-gate-router&lt;/artifactId&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>配置文件配置</span></span>
<span class="line"><span>    source-extra：表示可以获取动态路由数据的地址</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>yaml</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>pangu:</span></span>
<span class="line"><span>gateway:</span></span>
<span class="line"><span>router:</span></span>
<span class="line"><span>source-extra:</span></span>
<span class="line"><span>        - &#39;http://127.0.0.1:10260/pangu-xdev/test/router/get&#39;</span></span>
<span class="line"><span>        - &#39;http://127.0.0.1:10260/pangu-xdev/getRouter&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>获取到的信息结构体规范如下</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>json</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>&quot;code&quot;: 200</span></span>
<span class="line"><span>&quot;data&quot;: [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>&quot;id&quot;: &quot;pangu-frame-simple&quot;,</span></span>
<span class="line"><span>&quot;uri&quot;: &quot;&quot;,</span></span>
<span class="line"><span>#匹配表达式</span></span>
<span class="line"><span>&quot;predicates&quot;: [&quot;Path=/pangu-xdev/**&quot;],</span></span>
<span class="line"><span>#这个是过滤器简写模式</span></span>
<span class="line"><span>&quot;filtersString&quot;: [&quot;AddRequestHeader=X-Request-Foo, Bar&quot;],</span></span>
<span class="line"><span>#这个是标准过滤器格式</span></span>
<span class="line"><span>&quot;filters&quot;: [</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>&quot;name&quot;: &quot;PgHystrix&quot;,</span></span>
<span class="line"><span>&quot;args&quot;: {</span></span>
<span class="line"><span>&quot;fallbackUri&quot;: &quot;/abcdvvvvv&quot;</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      ],</span></span>
<span class="line"><span>#自定义数据</span></span>
<span class="line"><span>&quot;metadata&quot;: {}</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><h4 id="技术原理" tabindex="-1"><a class="header-anchor" href="#技术原理"><span>技术原理</span></a></h4></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    默认的路由生成是网关自带的，这里是通过集成nacos进行loadbalance，不做过多赘述。</span></span>
<span class="line"><span>自身的刷新是通过一个自定义刷新器实现的。这个方法中，网关会调用配置的http接口，获取到</span></span>
<span class="line"><span>路由相关数据并转换为指定的数据结构。</span></span>
<span class="line"><span>57行会执行DefaultRouteDefinitionOperator的refreshRoute方法</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.gate.router.route;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Title: &lt;br&gt;</span></span>
<span class="line"><span> * Description: &lt;br&gt;</span></span>
<span class="line"><span> * Company: KingTang &lt;br&gt;</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * @author 金炀</span></span>
<span class="line"><span> * @version 1.0</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@Slf4j</span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>public class  PgCusRouterFlusher {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final   RouteDefinitionOperator routeDefinitionOperator;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final   PgRouterProperties pgRouterProperties;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicPgCusRouterFlusher(PgRouterProperties pgRouterProperties,</span></span>
<span class="line"><span>                              RouteDefinitionOperator routeDefinitionOperator) {</span></span>
<span class="line"><span>this.pgRouterProperties = pgRouterProperties;</span></span>
<span class="line"><span>this.routeDefinitionOperator = routeDefinitionOperator;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public Mono&lt;String&gt; flushRouter() {</span></span>
<span class="line"><span>        List&lt;String&gt; routerAddrList = pgRouterProperties.getSourceExtra();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (CollectionUtils.isEmpty(routerAddrList)) {</span></span>
<span class="line"><span>return Mono.just(&quot;无拓展路由配置！&quot;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        StringBuilder msg =newStringBuilder();</span></span>
<span class="line"><span>        List&lt;RouteModel&gt; allRouteModels =new ArrayList&lt;&gt;();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>return Flux.fromIterable(routerAddrList).flatMap(</span></span>
<span class="line"><span>                routerAddr -&gt; {</span></span>
<span class="line"><span>                    System.out.println(routerAddr);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                    URI uri = URI.create(routerAddr);</span></span>
<span class="line"><span>                    WebClient.RequestBodyUriSpec webClient = WebClient.builder().build().post();</span></span>
<span class="line"><span>return webClient.uri(uri).retrieve().bodyToMono(JsonResult.class).onErrorResume(d -&gt; {</span></span>
<span class="line"><span>                        log.error(&quot;失败信息: &quot;, d);</span></span>
<span class="line"><span>                        msg.append(&quot;失败的地址：&quot;).append(routerAddr);</span></span>
<span class="line"><span>return Mono.just(JsonResult.ERROR);</span></span>
<span class="line"><span>                    });</span></span>
<span class="line"><span>                }).collectList().flatMap(d -&gt; {</span></span>
<span class="line"><span>                    d.forEach(ret -&gt; {</span></span>
<span class="line"><span>if (ret !=null&amp;&amp; ret.getCode() == ResCodeEnum.SUCCESS.getCode()) {</span></span>
<span class="line"><span>if (ret.getData() !=null) {</span></span>
<span class="line"><span>                                List&lt;RouteModel&gt; routeModels = JsonUtil.convertListValue(ret.getData(), RouteModel.class);</span></span>
<span class="line"><span>                                allRouteModels.addAll(routeModels);</span></span>
<span class="line"><span>                            }</span></span>
<span class="line"><span>                        }</span></span>
<span class="line"><span>                    });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                    List&lt;RouteModel&gt; finRouteModels = allRouteModels.stream().filter(distinctByKey(RouteModel::getId)).collect(Collectors.toList());</span></span>
<span class="line"><span>                    routeDefinitionOperator.refreshRoute(finRouteModels);</span></span>
<span class="line"><span>return Mono.just(msg.toString());</span></span>
<span class="line"><span>                });</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicstatic &lt;T&gt; Predicate&lt;T&gt; distinctByKey(Function&lt;?superT, ?&gt; keyExtractor) {</span></span>
<span class="line"><span>        Map&lt;Object, boolean  &gt; seen =new ConcurrentHashMap&lt;&gt;(16);</span></span>
<span class="line"><span>return t -&gt; seen.putIfAbsent(keyExtractor.apply(t), boolean  .TRUE) ==null;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.gate.common.model;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import lombok.Data;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import java.io.Serializable;</span></span>
<span class="line"><span>import java.util.HashMap;</span></span>
<span class="line"><span>import java.util.List;</span></span>
<span class="line"><span>import java.util.Map;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * @author JasonKin</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@Data</span></span>
<span class="line"><span>public class  RouteModelimplementsSerializable {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /** ID唯一标记 */</span></span>
<span class="line"><span>private String id;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /** 路由地址 */</span></span>
<span class="line"><span>private String uri;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /** 匹配规则简易配置 */</span></span>
<span class="line"><span>private List&lt;String&gt; predicates;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /** 过滤器简易配置 */</span></span>
<span class="line"><span>private List&lt;String&gt; filtersString;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /** 过滤器详细配置 */</span></span>
<span class="line"><span>private List&lt;PgFilterDefinition&gt; filters;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /** 附加属性 */</span></span>
<span class="line"><span>private Map&lt;String, Object&gt; metadata =new HashMap&lt;&gt;();</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    这里主要是对自定数据结构与网关内部路由所需数据结构进行适配转换，然后调用</span></span>
<span class="line"><span>RepositoryRefresh进行路由率刷新</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.gate.router.route;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import com.kingtsoft.pangu.gate.base.api.RouteDefinitionOperator;</span></span>
<span class="line"><span>import com.kingtsoft.pangu.gate.common.model.PgFilterDefinition;</span></span>
<span class="line"><span>import com.kingtsoft.pangu.gate.common.model.RouteModel;</span></span>
<span class="line"><span>import com.kingtsoft.pangu.util.ability.CopyUtil;</span></span>
<span class="line"><span>import org.springframework.cloud.gateway.filter.FilterDefinition;</span></span>
<span class="line"><span>import org.springframework.cloud.gateway.handler.predicate.PredicateDefinition;</span></span>
<span class="line"><span>import org.springframework.cloud.gateway.route.RouteDefinition;</span></span>
<span class="line"><span>import org.springframework.stereotype.Component;</span></span>
<span class="line"><span>import org.springframework.util.CollectionUtils;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import java.net.URI;</span></span>
<span class="line"><span>import java.net.URISyntaxException;</span></span>
<span class="line"><span>import java.util.ArrayList;</span></span>
<span class="line"><span>import java.util.List;</span></span>
<span class="line"><span>import java.util.stream.Collectors;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>public class  DefaultRouteDefinitionOperatorimplementsRouteDefinitionOperator {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final   RepositoryRefresh refresher;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicDefaultRouteDefinitionOperator(RepositoryRefresh refresher) {</span></span>
<span class="line"><span>this.refresher = refresher;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>private void   refreshRoute(List&lt;RouteModel&gt; routes) {</span></span>
<span class="line"><span>if (routes ==null) {</span></span>
<span class="line"><span>return;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        List&lt;RouteDefinition&gt; list =new ArrayList&lt;&gt;();</span></span>
<span class="line"><span>if (!CollectionUtils.isEmpty(routes)) {</span></span>
<span class="line"><span>for (RouteModel data : routes) {</span></span>
<span class="line"><span>                list.add(getRouteDefinition(data));</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        refresher.refresh(list);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private RouteDefinition getRouteDefinition(RouteModel rtmd) {</span></span>
<span class="line"><span>        RouteDefinition routeDefinition =newRouteDefinition();</span></span>
<span class="line"><span>        routeDefinition.setId(rtmd.getId());</span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>            routeDefinition.setUri(newURI(rtmd.getUri()));</span></span>
<span class="line"><span>        } catch (URISyntaxException e) {</span></span>
<span class="line"><span>            e.printStackTrace();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>initPredicate(routeDefinition, rtmd.getPredicates());</span></span>
<span class="line"><span>initFilter(routeDefinition, rtmd.getFiltersString(), rtmd.getFilters());</span></span>
<span class="line"><span>        routeDefinition.setMetadata(rtmd.getMetadata());</span></span>
<span class="line"><span>return routeDefinition;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private void  initPredicate(RouteDefinition routeDefinition, List&lt;String&gt; entries) {</span></span>
<span class="line"><span>if (entries ==null) {</span></span>
<span class="line"><span>return;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        entries.parallelStream().forEach(predicate -&gt; {</span></span>
<span class="line"><span>            PredicateDefinition predicateDefinition =newPredicateDefinition(predicate);</span></span>
<span class="line"><span>            routeDefinition.getPredicates().add(predicateDefinition);</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private void  initFilter(RouteDefinition routeDefinition, List&lt;String&gt; entries, List&lt;PgFilterDefinition&gt; filters) {</span></span>
<span class="line"><span>if (!CollectionUtils.isEmpty(filters)) {</span></span>
<span class="line"><span>            List&lt;FilterDefinition&gt; filterDefinitions =new ArrayList&lt;&gt;();</span></span>
<span class="line"><span>for (PgFilterDefinition filterDefinition : filters) {</span></span>
<span class="line"><span>                FilterDefinition definition =newFilterDefinition();</span></span>
<span class="line"><span>                CopyUtil.copy(filterDefinition, definition);</span></span>
<span class="line"><span>                filterDefinitions.add(definition);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            routeDefinition.getFilters().addAll(filterDefinitions);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>if (!CollectionUtils.isEmpty(entries)) {</span></span>
<span class="line"><span>            routeDefinition.getFilters().addAll(</span></span>
<span class="line"><span>                    entries.parallelStream().map(FilterDefinition::new).collect(Collectors.toList()));</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    通过实现ApplicationEventPublisherAware接口获取路由刷新事件发布者，</span></span>
<span class="line"><span>然后执行事件发布，以RefreshRoutesEvent对象进行自身封装，达到刷新路由效果</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package  com.kingtsoft.pangu.gate.router.route;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import org.springframework.cloud.gateway.event.RefreshRoutesEvent;</span></span>
<span class="line"><span>import org.springframework.cloud.gateway.route.RouteDefinition;</span></span>
<span class="line"><span>import org.springframework.cloud.gateway.route.RouteDefinitionRepository;</span></span>
<span class="line"><span>import org.springframework.context.ApplicationEventPublisher;</span></span>
<span class="line"><span>import org.springframework.context.ApplicationEventPublisherAware;</span></span>
<span class="line"><span>import org.springframework.stereotype.Component;</span></span>
<span class="line"><span>import org.springframework.util.StringUtils;</span></span>
<span class="line"><span>import reactor.core.publisher.Flux;</span></span>
<span class="line"><span>import reactor.core.publisher.Mono;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import java.util.Collections;</span></span>
<span class="line"><span>import java.util.LinkedHashMap;</span></span>
<span class="line"><span>import java.util.List;</span></span>
<span class="line"><span>import java.util.Map;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * RouteDefinitionRepository -&gt;完成从存储器（例如：内存/Redis/MySQL等） 读取、保存，删除。此处在routes 内容</span></span>
<span class="line"><span> * RepositoryRefresh 自定义接口，刷新路由信息。会把历史的清除掉，进行重新发布</span></span>
<span class="line"><span> * ApplicationEventPublisherAware  这边引入是为了拿到publisher 这个对象</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>public class  AgentRouteDefinitionRepositoryimplements</span></span>
<span class="line"><span>RouteDefinitionRepository,</span></span>
<span class="line"><span>RepositoryRefresh,</span></span>
<span class="line"><span>ApplicationEventPublisherAware {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private ApplicationEventPublisher publisher;</span></span>
<span class="line"><span>private final   Map&lt;String, RouteDefinition&gt; routes = Collections.synchronizedMap(</span></span>
<span class="line"><span>new LinkedHashMap&lt;&gt;());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>public Flux&lt;RouteDefinition&gt; getRouteDefinitions() {</span></span>
<span class="line"><span>return Flux.fromIterable(routes.values());</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * RouteDefinitionWriter</span></span>
<span class="line"><span>     * 保存路由配置配置</span></span>
<span class="line"><span>     * @paramroute 路由配置</span></span>
<span class="line"><span>     * @return</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>public Mono&lt;Void&gt; save(Mono&lt;RouteDefinition&gt; route) {</span></span>
<span class="line"><span>return route.flatMap(r -&gt; {</span></span>
<span class="line"><span>if (StringUtils.isEmpty(r.getId())) {</span></span>
<span class="line"><span>return Mono.error(newIllegalArgumentException(&quot;id may not be empty&quot;));</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            routes.put(r.getId(), r);</span></span>
<span class="line"><span>return Mono.empty();</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * RouteDefinitionWriter  删除路由配置</span></span>
<span class="line"><span>     * @paramrouteId</span></span>
<span class="line"><span>     * @return</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>public Mono&lt;Void&gt; delete(Mono&lt;String&gt; routeId) {</span></span>
<span class="line"><span>return routeId.flatMap(id -&gt; {</span></span>
<span class="line"><span>if (routes.containsKey(id)) {</span></span>
<span class="line"><span>                routes.remove(id);</span></span>
<span class="line"><span>return Mono.empty();</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>return Mono.error(newRuntimeException (&quot;RouteDefinition not found: &quot;+ routeId));</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 事件发布到 RefreshRoutesEvent 类，这个是自动加载</span></span>
<span class="line"><span>     * @paramrds</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>private void   refresh(List&lt;RouteDefinition&gt; rds) {</span></span>
<span class="line"><span>        routes.clear();</span></span>
<span class="line"><span>for (RouteDefinition rd : rds) {</span></span>
<span class="line"><span>            routes.put(rd.getId(), rd);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>this.publisher.publishEvent(newRefreshRoutesEvent(this));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>private void   setApplicationEventPublisher(ApplicationEventPublisher applicationEventPublisher) {</span></span>
<span class="line"><span>this.publisher = applicationEventPublisher;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28)]))}const d=n(l,[["render",p],["__file","路由.html.vue"]]),c=JSON.parse('{"path":"/%E7%9B%98%E5%8F%A4/%E7%BD%91%E5%85%B3/%E8%B7%AF%E7%94%B1.html","title":"网关-路由","lang":"zh-CN","frontmatter":{"description":"网关-路由 如何使用 基础路由 yaml 动态路由 xml yaml json 技术原理 java java java java","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/%E7%9B%98%E5%8F%A4/%E7%BD%91%E5%85%B3/%E8%B7%AF%E7%94%B1.html"}],["meta",{"property":"og:title","content":"网关-路由"}],["meta",{"property":"og:description","content":"网关-路由 如何使用 基础路由 yaml 动态路由 xml yaml json 技术原理 java java java java"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-18T07:25:41.000Z"}],["meta",{"property":"article:author","content":"Cotton Eye Joe"}],["meta",{"property":"article:modified_time","content":"2024-11-18T07:25:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"网关-路由\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-18T07:25:41.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cotton Eye Joe\\",\\"url\\":\\"https://github.com/ToDreamr\\"}]}"]]},"headers":[],"git":{"createdTime":1731914741000,"updatedTime":1731914741000,"contributors":[{"name":"九歌天上有","email":"aruixrain@gmail.com","commits":1}]},"readingTime":{"minutes":4.35,"words":1304},"filePathRelative":"盘古/网关/路由.md","localizedDate":"2024年11月18日","excerpt":"","autoDesc":true}');export{d as comp,c as data};
