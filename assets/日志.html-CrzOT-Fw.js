import{_ as n,o as a,c as e,d as i}from"./app-TmqSDitQ.js";const l={};function p(t,s){return a(),e("div",null,s[0]||(s[0]=[i(`<h1 id="网关-日志" tabindex="-1"><a class="header-anchor" href="#网关-日志"><span>网关-日志</span></a></h1><blockquote><h4 id="如何使用" tabindex="-1"><a class="header-anchor" href="#如何使用"><span>如何使用</span></a></h4></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>引入如下模块</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>xml</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>  &lt;groupId&gt;com.kingtsoft.pangu&lt;/groupId&gt;</span></span>
<span class="line"><span>  &lt;artifactId&gt;pangu-gate-trace&lt;/artifactId&gt;</span></span>
<span class="line"><span>  &lt;version&gt;\${pangu.version}&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>配置文件，定义的headers或cookies需要记录的信息，以逗号分隔</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>yaml</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>pangu:</span></span>
<span class="line"><span>gateway:</span></span>
<span class="line"><span>tarce:</span></span>
<span class="line"><span>req-params: &#39;WD_CORE_EMPID,WD_CORE_BRANCHCODE,Authorization&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><h4 id="技术原理" tabindex="-1"><a class="header-anchor" href="#技术原理"><span>技术原理</span></a></h4></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    定义一个全局过滤器TraceFilterFactory，然后根据配置的跟踪内容，将请求信息</span></span>
<span class="line"><span>进行选择性抓取。转换成结构化数据TraceEntity，并且选择在了</span></span>
<span class="line"><span>ReactiveLoadBalancerClientFilter.LOAD_BALANCER_CLIENT_FILTER_ORDER</span></span>
<span class="line"><span>之后执行，顺序加了10代表降低了优先级，这样就可以知道跳转的具体IP是什么。然后通过</span></span>
<span class="line"><span>kafka进行消息发送。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.gate.trace.filter;</span></span>
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
<span class="line"><span>public class  TraceFilterFactoryimplementsGlobalFilter, Ordered {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final   String keys;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicstaticfinal ExecutorService LOG_POOL = PanguThreadPoolExecutor.getPanguExecutor(</span></span>
<span class="line"><span>8, 12, 15, TimeUnit.MINUTES, 10).build();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final   KafkaTemplate&lt;String, Object&gt; kafkaTemplate;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicTraceFilterFactory(KafkaTemplate&lt;String, Object&gt; kafkaTemplate, Environment environment) {</span></span>
<span class="line"><span>this.kafkaTemplate = kafkaTemplate;</span></span>
<span class="line"><span>        keys = environment.getProperty(&quot;pangu.gateway.tarce.req-params&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>publicintgetOrder() {</span></span>
<span class="line"><span>return ReactiveLoadBalancerClientFilter.LOAD_BALANCER_CLIENT_FILTER_ORDER +10;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>public Mono&lt;Void&gt; filter(ServerWebExchange exchange, GatewayFilterChain chain) {</span></span>
<span class="line"><span>        ServerHttpRequest request = exchange.getRequest();</span></span>
<span class="line"><span>        String path = request.getPath().pathWithinApplication().value();</span></span>
<span class="line"><span>        TraceEntity traceEntity =newTraceEntity();</span></span>
<span class="line"><span>        String traceId = request.getHeaders().getFirst(HttpConst.Header.PG_LOG_TRACE);</span></span>
<span class="line"><span>if (traceId ==null) {</span></span>
<span class="line"><span>            traceId = request.getId();</span></span>
<span class="line"><span>            request.getHeaders().set(HttpConst.Header.PG_LOG_TRACE, traceId);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        traceEntity.setId(traceId);</span></span>
<span class="line"><span>        traceEntity.setUrl(path);</span></span>
<span class="line"><span>        traceEntity.setAddr(getIpAddress(request));</span></span>
<span class="line"><span>setParams(traceEntity, request);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        URI targetUri = exchange.getRequiredAttribute(ServerWebExchangeUtils.GATEWAY_REQUEST_URL_ATTR);</span></span>
<span class="line"><span>        traceEntity.setRouterAddr(targetUri.getHost() +&quot;:&quot;+ targetUri.getPort());</span></span>
<span class="line"><span>long  startTime = System.currentTimeMillis();</span></span>
<span class="line"><span>return chain.filter(exchange).then(</span></span>
<span class="line"><span>                Mono.fromRunnable(() -&gt; {</span></span>
<span class="line"><span>                    traceEntity.setCost(newBigDecimal(System.currentTimeMillis() - startTime));</span></span>
<span class="line"><span>                    LOG_POOL.execute(() -&gt;sendMsg(traceEntity));</span></span>
<span class="line"><span>                })</span></span>
<span class="line"><span>        );</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private void  setParams(TraceEntity traceEntity, ServerHttpRequest request) {</span></span>
<span class="line"><span>        Map&lt;String, Object&gt; objectMap =new HashMap&lt;&gt;(8);</span></span>
<span class="line"><span>if (StringUtils.hasText(keys)) {</span></span>
<span class="line"><span>            MultiValueMap&lt;String, HttpCookie&gt; cookies = request.getCookies();</span></span>
<span class="line"><span>            HttpHeaders httpHeaders = request.getHeaders();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>String[] paramArr = keys.split(&quot;,&quot;);</span></span>
<span class="line"><span>for (String param : paramArr) {</span></span>
<span class="line"><span>                String value = httpHeaders.getFirst(param);</span></span>
<span class="line"><span>if (value !=null) {</span></span>
<span class="line"><span>                    objectMap.put(param, value);</span></span>
<span class="line"><span>continue;</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                HttpCookie c = cookies.getFirst(param);</span></span>
<span class="line"><span>if (c ==null) {</span></span>
<span class="line"><span>continue;</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                objectMap.put(param, c.getValue());</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        traceEntity.setMetadata(objectMap);</span></span>
<span class="line"><span>        traceEntity.setRecordTime(LocalDateTime.now());</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private void  sendMsg(TraceEntity traceEntity) {</span></span>
<span class="line"><span>        Map&lt;String, Object&gt; map =new HashMap&lt;&gt;(4);</span></span>
<span class="line"><span>        map.put(KafkaHeaders.TOPIC, PgGateConst.GATE_TOPIC_TRACE);</span></span>
<span class="line"><span>        map.put(KafkaHeaders.KEY, traceEntity.getId());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>            Message&lt;String&gt; message =new GenericMessage&lt;&gt;(JsonUtil.toJson(traceEntity), newMessageHeaders(map));</span></span>
<span class="line"><span>            kafkaTemplate.send(message);</span></span>
<span class="line"><span>        } catch (Exception e) {</span></span>
<span class="line"><span>            e.printStackTrace();</span></span>
<span class="line"><span>            log.error(&quot;消息发送失败！&quot;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>同理会有个server端对消息进行监听，模块为，内部执行原理同frame-log-server模块</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>xml</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>  &lt;groupId&gt;com.kingtsoft.pangu&lt;/groupId&gt;</span></span>
<span class="line"><span>  &lt;artifactId&gt;pangu-gate-trace-server&lt;/artifactId&gt;</span></span>
<span class="line"><span>  &lt;version&gt;\${pangu.version}&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15)]))}const d=n(l,[["render",p],["__file","日志.html.vue"]]),c=JSON.parse('{"path":"/%E7%9B%98%E5%8F%A4/%E7%BD%91%E5%85%B3/%E6%97%A5%E5%BF%97.html","title":"网关-日志","lang":"zh-CN","frontmatter":{"description":"网关-日志 如何使用 xml yaml 技术原理 java xml","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/%E7%9B%98%E5%8F%A4/%E7%BD%91%E5%85%B3/%E6%97%A5%E5%BF%97.html"}],["meta",{"property":"og:title","content":"网关-日志"}],["meta",{"property":"og:description","content":"网关-日志 如何使用 xml yaml 技术原理 java xml"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-18T07:25:41.000Z"}],["meta",{"property":"article:author","content":"Cotton Eye Joe"}],["meta",{"property":"article:modified_time","content":"2024-11-18T07:25:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"网关-日志\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-18T07:25:41.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cotton Eye Joe\\",\\"url\\":\\"https://github.com/ToDreamr\\"}]}"]]},"headers":[],"git":{"createdTime":1731914741000,"updatedTime":1731914741000,"contributors":[{"name":"九歌天上有","email":"aruixrain@gmail.com","commits":1}]},"readingTime":{"minutes":1.42,"words":426},"filePathRelative":"盘古/网关/日志.md","localizedDate":"2024年11月18日","excerpt":"","autoDesc":true}');export{d as comp,c as data};
