import{_ as n,o as a,c as e,d as i}from"./app-ux1ElDeN.js";const l={};function p(r,s){return a(),e("div",null,s[0]||(s[0]=[i(`<h1 id="网关-熔断" tabindex="-1"><a class="header-anchor" href="#网关-熔断"><span>网关-熔断</span></a></h1><blockquote><h4 id="如何使用" tabindex="-1"><a class="header-anchor" href="#如何使用"><span>如何使用</span></a></h4></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>引入如下模块</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>xml</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>  &lt;groupId&gt;com.kingtsoft.pangu&lt;/groupId&gt;</span></span>
<span class="line"><span>  &lt;artifactId&gt;pangu-gate-hystrix&lt;/artifactId&gt;</span></span>
<span class="line"><span>  &lt;version&gt;\${pangu.version}&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>fallbackUri：为降级方法后缀。假如原先地址为http://127.0.0.1/pangu-dev/abc，</span></span>
<span class="line"><span>    配置开头带forward:时，降级地址会变为http://fallback，若配置不带forward:，降级地址会变为</span></span>
<span class="line"><span>    http://127.0.0.1/pangu-dev/abc/fallback。</span></span>
<span class="line"><span>timeout：为降级超时时间。</span></span>
<span class="line"><span>breakerThreshold：表示在滑动窗口中，至少有多少个请求，才可能触发断路</span></span>
<span class="line"><span>breakerErrorPercentage：表示异常比例达到多少，才会触发断路，默认值是 50(%)</span></span>
<span class="line"><span>breakerSleepMs：断路开启，也就是由 close 转换到 open 状态（close -&gt; open）。那么之后在 </span></span>
<span class="line"><span>    SleepWindowInMilliseconds 时间内，所有经过该断路器的请求全部都会被断路，不调用后端服务，</span></span>
<span class="line"><span>    直接走 fallback 降级机制。而在该参数时间过后，断路器会变为 half-open 半开闭状态，尝试让</span></span>
<span class="line"><span>    一条请求经过断路器，看能不能正常调用。如果调用成功了，那么就自动恢复，断路器转为 close 状态。</span></span>
<span class="line"><span>spring.cloud:.gateway:routes下可以配置各自路由的PgHystrix熔断，并且配置各自的熔断参数，</span></span>
<span class="line"><span>路由内配置的熔断参数优先级高于pangu.hystrix全局配置的熔断数据。/abc/sss=3450代表路径/abc/sss</span></span>
<span class="line"><span>超时时间为3450</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>yaml</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>pangu:</span></span>
<span class="line"><span>hystrix:</span></span>
<span class="line"><span>id: &#39;pangu&#39;</span></span>
<span class="line"><span>fallbackUri: &#39;forward:/fallback&#39;</span></span>
<span class="line"><span>breakerThreshold: 12</span></span>
<span class="line"><span>breakerErrorPercentage: 60</span></span>
<span class="line"><span>breakerSleepMs: 6000</span></span>
<span class="line"><span>timeout:</span></span>
<span class="line"><span>      - &#39;/abc/sss=2450&#39;</span></span>
<span class="line"><span>      - &#39;/ab2/*=2000&#39;</span></span>
<span class="line"><span>      - &#39;/pangu-xdev/**=4000&#39;</span></span>
<span class="line"><span>      - &#39;/gb-xdev/**=3000&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>spring:</span></span>
<span class="line"><span>cloud:</span></span>
<span class="line"><span># 动态路由</span></span>
<span class="line"><span>gateway:</span></span>
<span class="line"><span>discovery:</span></span>
<span class="line"><span>locator:</span></span>
<span class="line"><span># 开启服务发现让gateway可以发现注册中心的服务，解析微服务名称为主机名和端口，实现动态路由</span></span>
<span class="line"><span>enabled: true</span></span>
<span class="line"><span># default-filters:</span></span>
<span class="line"><span># - PgHystrix</span></span>
<span class="line"><span># 路线</span></span>
<span class="line"><span>routes:</span></span>
<span class="line"><span># 路由Id，没有规则限制，但要唯一</span></span>
<span class="line"><span>        - id: pangu-frame-simple</span></span>
<span class="line"><span>uri: lb://pangu-frame-simple-local</span></span>
<span class="line"><span>predicates:</span></span>
<span class="line"><span># 断言规则，注意需要和 tomcat servlet容器上下文路径对应</span></span>
<span class="line"><span>            - Path=/pangu-xdev/**</span></span>
<span class="line"><span># 路由Id，没有规则限制，但要唯一</span></span>
<span class="line"><span>filters: </span></span>
<span class="line"><span>            - name: PgHystrix</span></span>
<span class="line"><span>args:</span></span>
<span class="line"><span>fallbackUri: forward:/fallback</span></span>
<span class="line"><span>timeout:</span></span>
<span class="line"><span>                  - &#39;/abc/sss=3450&#39;</span></span>
<span class="line"><span>                  - &#39;/ab2/*=3000&#39;</span></span>
<span class="line"><span>                  - &#39;/pangu-xdev/**=3000&#39;</span></span>
<span class="line"><span>                  - &#39;/kk-xdev/**=3000&#39;</span></span>
<span class="line"><span>        - id: pangu-frame-test</span></span>
<span class="line"><span>uri: lb://pangu-frame-test</span></span>
<span class="line"><span>predicates:</span></span>
<span class="line"><span>            - Path=/pangu-test/**</span></span>
<span class="line"><span>filters: </span></span>
<span class="line"><span>            - name: PgHystrix</span></span>
<span class="line"><span>args:</span></span>
<span class="line"><span>fallbackUri: /abcdvvvvv</span></span>
<span class="line"><span>timeout:</span></span>
<span class="line"><span>                  - &#39;/abc/sss=7450&#39;</span></span>
<span class="line"><span>                  - &#39;/ab2/*=7000&#39;</span></span>
<span class="line"><span>                  - &#39;/pangu-xdev/**=7000&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><h4 id="技术原理" tabindex="-1"><a class="header-anchor" href="#技术原理"><span>技术原理</span></a></h4></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    配置一个过滤器，首先排除了带有HttpConst.Header.SP_REQ标记的请求，这个涉及</span></span>
<span class="line"><span>后续的降级重发，防止重复进入的可能。然后getTimeout方法根据路径匹配定义的超时时间，</span></span>
<span class="line"><span>匹配规则使用antPathMatcher，也就是说可以模糊匹配相关地址。</span></span>
<span class="line"><span>    内部定义了PgHystrixCommand熔断类, 然后会在执行过程中将command的响应订阅</span></span>
<span class="line"><span>与外部事件做绑定</span></span>
<span class="line"><span>Subscription sub = command.toObservable().subscribe(s::success, s::error, s::success);</span></span>
<span class="line"><span>    PgHystrixCommand类中的construct方法与resumeWithFallback都参与正常回调，</span></span>
<span class="line"><span>为的是外部onErrorResume可以捕捉到异常，进而进行降级处理，若直接在内部resumeWithFallback</span></span>
<span class="line"><span>进行处理，会导致外部异常无法正常捕捉，使降级及正常流程一起执行下去。</span></span>
<span class="line"><span>    resumeWithFallback中处理的降级逻辑为首先从headers中去找Pg-Fallback标记，</span></span>
<span class="line"><span>为1代表降级，为0代表直接抛异常。若明确了要走自定义降级，则Pg-Fallback-Path头重的</span></span>
<span class="line"><span>数据就是自定义降级地址。若配了，就会直接降级走此地址，若没配，则降级地址就会是请求地址</span></span>
<span class="line"><span>+配置文件配置的降级后缀。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.gate.hystrix.filter;</span></span>
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
<span class="line"><span>public class  HystrixFilterFactoryextendsAbstractGatewayFilterFactory&lt;HystrixFilterFactory.Config&gt; implementsOrdered {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>privatestaticfinal String FORWARD_KEY =&quot;forward&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>privatestaticfinal String NAME =&quot;PgHystrix&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>privatestaticfinalint TIMEOUT_MS =5000;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private PgHystrixProperties pgHystrixProperties;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final   AntPathMatcher antPathMatcher =newAntPathMatcher();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicHystrixFilterFactory(PgHystrixProperties pgHystrixProperties) {</span></span>
<span class="line"><span>super(Config.class);</span></span>
<span class="line"><span>initFilterConfig(pgHystrixProperties);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private void  initFilterConfig(PgHystrixProperties pgHystrixProperties) {</span></span>
<span class="line"><span>this.pgHystrixProperties = pgHystrixProperties;</span></span>
<span class="line"><span>        Map&lt;String, String&gt; args =new LinkedHashMap&lt;&gt;();</span></span>
<span class="line"><span>        args.put(&quot;id&quot;, pgHystrixProperties.getId());</span></span>
<span class="line"><span>        args.put(&quot;fallbackUri&quot;, pgHystrixProperties.getFallbackUri());</span></span>
<span class="line"><span>        String timeout = JsonUtil.toJson(pgHystrixProperties.getTimeout());</span></span>
<span class="line"><span>        args.put(&quot;timeout&quot;, timeout);</span></span>
<span class="line"><span>        args.put(&quot;breakerThreshold&quot;, pgHystrixProperties.getBreakerThreshold().toString());</span></span>
<span class="line"><span>        args.put(&quot;breakerErrorPercentage&quot;, pgHystrixProperties.getBreakerErrorPercentage().toString());</span></span>
<span class="line"><span>        args.put(&quot;breakerSleepMs&quot;, pgHystrixProperties.getBreakerSleepMs().toString());</span></span>
<span class="line"><span>        GateFilterContext.registerFilter(name(), args);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>public List&lt;String&gt; shortcutFieldOrder() {</span></span>
<span class="line"><span>return Collections.singletonList(NAME_KEY);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>public GatewayFilter apply(Config config) {</span></span>
<span class="line"><span>mergedConfig(config, pgHystrixProperties);</span></span>
<span class="line"><span>return (exchange, chain) -&gt; {</span></span>
<span class="line"><span>            ServerHttpRequest request = exchange.getRequest();</span></span>
<span class="line"><span>            String path = request.getPath().pathWithinApplication().value();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (Objects.equals(request.getHeaders().getFirst(HttpConst.Header.SP_REQ), &quot;1&quot;)) {</span></span>
<span class="line"><span>return chain.filter(exchange);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int timeout =getTimeout(config.getTimeout(), path);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>return Mono.deferContextual(context -&gt; Mono.create(s -&gt; {</span></span>
<span class="line"><span>                PgHystrixCommand command =newPgHystrixCommand(</span></span>
<span class="line"><span>                        exchange,</span></span>
<span class="line"><span>                        chain,</span></span>
<span class="line"><span>                        timeout,</span></span>
<span class="line"><span>                        config.getBreakerThreshold(),</span></span>
<span class="line"><span>                        config.getBreakerErrorPercentage(),</span></span>
<span class="line"><span>                        config.getBreakerSleepMs(),</span></span>
<span class="line"><span>                        path,</span></span>
<span class="line"><span>                        context);</span></span>
<span class="line"><span>                Subscription sub = command.toObservable().subscribe(s::success, s::error, s::success);</span></span>
<span class="line"><span>                s.onCancel(sub::unsubscribe);</span></span>
<span class="line"><span>            }).onErrorResume((Function&lt;Throwable, Mono&lt;Void&gt;&gt;) throwable -&gt; {</span></span>
<span class="line"><span>if (!(throwable instanceof HystrixRuntimeException)) {</span></span>
<span class="line"><span>return Mono.error(throwable);</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                HystrixRuntimeException ex = (HystrixRuntimeException) throwable;</span></span>
<span class="line"><span>if (log.isDebugEnabled()) {</span></span>
<span class="line"><span>                    log.debug(ex.getFallbackException().toString());</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                String fallback = exchange.getRequest().getHeaders().getFirst(HttpConst.Header.HEADER_FALLBACK);</span></span>
<span class="line"><span>if (fallback !=null&amp;&amp; Integer.parseInt(fallback) ==0) {</span></span>
<span class="line"><span>                    HystrixRuntimeException.FailureType failureType = ex.getFailureType();</span></span>
<span class="line"><span>switch (failureType) {</span></span>
<span class="line"><span>case TIMEOUT:</span></span>
<span class="line"><span>return Mono.error(newTimeoutException());</span></span>
<span class="line"><span>case COMMAND_EXCEPTION: {</span></span>
<span class="line"><span>                            Throwable cause = ex.getCause();</span></span>
<span class="line"><span>if (cause instanceof ResponseStatusException || AnnotatedElementUtils</span></span>
<span class="line"><span>                                    .findMergedAnnotation(cause.getClass(), ResponseStatus.class) !=null) {</span></span>
<span class="line"><span>return Mono.error(cause);</span></span>
<span class="line"><span>                            }</span></span>
<span class="line"><span>break;</span></span>
<span class="line"><span>                        }</span></span>
<span class="line"><span>default:</span></span>
<span class="line"><span>break;</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>return Mono.error(ex.getFallbackException());</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                String fallbackPath = exchange.getRequest().getHeaders().getFirst(HttpConst.Header.HEADER_FALLBACK_PATH);</span></span>
<span class="line"><span>                URI fallbackUri =getFallbackUri(config.getFallbackUri(), request, fallbackPath);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                URI requestUrl = UriComponentsBuilder.fromHttpRequest(exchange.getRequest())</span></span>
<span class="line"><span>                        .uri(fallbackUri)</span></span>
<span class="line"><span>                        .build()</span></span>
<span class="line"><span>                        .toUri();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                ServerHttpRequest.Builder builder = exchange.getRequest().mutate().uri(requestUrl)</span></span>
<span class="line"><span>                        .header(HttpConst.Header.SP_REQ, &quot;1&quot;);</span></span>
<span class="line"><span>                ServerWebExchange mutated = exchange.mutate()</span></span>
<span class="line"><span>                        .request(builder.build())</span></span>
<span class="line"><span>                        .build();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                exchange.getAttributes().put(GATEWAY_ALREADY_ROUTED_ATTR, false);</span></span>
<span class="line"><span>return chain.filter(mutated).contextWrite(context);</span></span>
<span class="line"><span>            }).then());</span></span>
<span class="line"><span>        };</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private void  mergedConfig(Config config, PgHystrixProperties pgHystrixProperties) {</span></span>
<span class="line"><span>if (config.getBreakerSleepMs() ==null) {</span></span>
<span class="line"><span>            config.setBreakerSleepMs(pgHystrixProperties.getBreakerSleepMs());</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>if (config.getId() ==null) {</span></span>
<span class="line"><span>            config.setId(pgHystrixProperties.getId());</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>if (config.getFallbackUri() ==null) {</span></span>
<span class="line"><span>            config.setFallbackUri(pgHystrixProperties.getFallbackUri());</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>if (config.getBreakerThreshold() ==null) {</span></span>
<span class="line"><span>            config.setBreakerThreshold(pgHystrixProperties.getBreakerThreshold());</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>if (config.getBreakerErrorPercentage() ==null) {</span></span>
<span class="line"><span>            config.setBreakerErrorPercentage(pgHystrixProperties.getBreakerErrorPercentage());</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        Map&lt;String, Integer&gt; routerTimeout = config.getTimeout();</span></span>
<span class="line"><span>if (routerTimeout ==null) {</span></span>
<span class="line"><span>            routerTimeout =new LinkedHashMap&lt;&gt;(8);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        Map&lt;String, Integer&gt; globalTimeout = pgHystrixProperties.getTimeout();</span></span>
<span class="line"><span>if (globalTimeout !=null) {</span></span>
<span class="line"><span>for (String k : globalTimeout.keySet()) {</span></span>
<span class="line"><span>if (routerTimeout.get(k) ==null) {</span></span>
<span class="line"><span>                    routerTimeout.put(k, globalTimeout.get(k));</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        config.setTimeoutAll(routerTimeout);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @SneakyThrows</span></span>
<span class="line"><span>private URI getFallbackUri(String fallbackUri, ServerHttpRequest request, String fallbackPath) {</span></span>
<span class="line"><span>        URI old = request.getURI();</span></span>
<span class="line"><span>        String relFallbackPath;</span></span>
<span class="line"><span>if (fallbackPath ==null) {</span></span>
<span class="line"><span>if (fallbackUri ==null) {</span></span>
<span class="line"><span>                relFallbackPath = old.getPath() +&quot;/fallback&quot;;</span></span>
<span class="line"><span>            } else {</span></span>
<span class="line"><span>if (fallbackUri.startsWith(&quot;forward:&quot;)) {</span></span>
<span class="line"><span>                    relFallbackPath = fallbackUri.substring(8);</span></span>
<span class="line"><span>                } else {</span></span>
<span class="line"><span>                    relFallbackPath = old.getPath() + fallbackUri;</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            relFallbackPath = fallbackPath;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>returnnewURI(</span></span>
<span class="line"><span>                FORWARD_KEY,</span></span>
<span class="line"><span>                old.getUserInfo(),</span></span>
<span class="line"><span>                old.getHost(),</span></span>
<span class="line"><span>                old.getPort(),</span></span>
<span class="line"><span>                relFallbackPath,</span></span>
<span class="line"><span>                old.getQuery(),</span></span>
<span class="line"><span>                old.getFragment());</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>privateintgetTimeout(Map&lt;String, Integer&gt; timeout, String path) {</span></span>
<span class="line"><span>if (timeout ==null) {</span></span>
<span class="line"><span>return TIMEOUT_MS;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>for (String s : timeout.keySet()) {</span></span>
<span class="line"><span>if (antPathMatcher.match(s, path)) {</span></span>
<span class="line"><span>return timeout.get(s);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>return TIMEOUT_MS;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>public String name() {</span></span>
<span class="line"><span>return NAME;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>publicintgetOrder() {</span></span>
<span class="line"><span>return ReactiveLoadBalancerClientFilter.LOAD_BALANCER_CLIENT_FILTER_ORDER +9;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>privatestaticclassPgHystrixCommandextendsHystrixObservableCommand&lt;Void&gt; {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final   ServerWebExchange exchange;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final   GatewayFilterChain chain;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final   ContextView contextView;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicPgHystrixCommand(ServerWebExchange exchange,</span></span>
<span class="line"><span>                                GatewayFilterChain chain,</span></span>
<span class="line"><span>inttimeout,</span></span>
<span class="line"><span>intbreakerThreshold,</span></span>
<span class="line"><span>intbreakerErrorPercentage,</span></span>
<span class="line"><span>intbreakerSleepMs,</span></span>
<span class="line"><span>                                String key,</span></span>
<span class="line"><span>                                ContextView contextView) {</span></span>
<span class="line"><span>super(Setter.withGroupKey(HystrixCommandGroupKey.Factory.asKey(key))</span></span>
<span class="line"><span>                            .andCommandKey(HystrixCommandKey.Factory.asKey(key))</span></span>
<span class="line"><span>                            .andCommandPropertiesDefaults(HystrixCommandProperties.Setter()</span></span>
<span class="line"><span>//                                    .withExecutionTimeoutEnabled(true)</span></span>
<span class="line"><span>                                    .withExecutionTimeoutInMilliseconds(timeout)</span></span>
<span class="line"><span>// .withCircuitBreakerForceOpen(true)</span></span>
<span class="line"><span>// 配置时间窗口内达到此数量的失败后进行短路</span></span>
<span class="line"><span>                                    .withCircuitBreakerRequestVolumeThreshold(breakerThreshold)</span></span>
<span class="line"><span>// 错误率</span></span>
<span class="line"><span>                                    .withCircuitBreakerErrorThresholdPercentage(breakerErrorPercentage)</span></span>
<span class="line"><span>// 熔断器打开到关闭的时间窗长度</span></span>
<span class="line"><span>                                    .withCircuitBreakerSleepWindowInMilliseconds(breakerSleepMs))</span></span>
<span class="line"><span>            );</span></span>
<span class="line"><span>this.exchange = exchange;</span></span>
<span class="line"><span>this.chain = chain;</span></span>
<span class="line"><span>this.contextView = contextView;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        @Override</span></span>
<span class="line"><span>protected Observable&lt;Void&gt; construct() {</span></span>
<span class="line"><span>return RxReactiveStreams.toObservable(this.chain.filter(exchange).contextWrite(contextView));</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        @Override</span></span>
<span class="line"><span>protected Observable&lt;Void&gt; resumeWithFallback() {</span></span>
<span class="line"><span>returnsuper.resumeWithFallback();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicstaticclassConfig {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private String id;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private String fallbackUri;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private Integer breakerThreshold =10;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private Integer breakerErrorPercentage =50;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private Integer breakerSleepMs =4000;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        /**</span></span>
<span class="line"><span>         * url -&gt; timeout ms</span></span>
<span class="line"><span>         */</span></span>
<span class="line"><span>private Map&lt;String, Integer&gt; timeout;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public String getId() {</span></span>
<span class="line"><span>return id;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public Config setId(String id) {</span></span>
<span class="line"><span>this.id = id;</span></span>
<span class="line"><span>returnthis;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public String getFallbackUri() {</span></span>
<span class="line"><span>return fallbackUri;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public Config setFallbackUri(String fallbackUri) {</span></span>
<span class="line"><span>this.fallbackUri = fallbackUri;</span></span>
<span class="line"><span>returnthis;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public Map&lt;String, Integer&gt; getTimeout() {</span></span>
<span class="line"><span>return timeout;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public Config setTimeout(List&lt;String&gt; timeout) {</span></span>
<span class="line"><span>            Map&lt;String, Integer&gt; map =new LinkedHashMap&lt;&gt;(8);</span></span>
<span class="line"><span>for (String t : timeout) {</span></span>
<span class="line"><span>String[] tArr = t.split(&quot;=&quot;);</span></span>
<span class="line"><span>if (tArr.length ==2) {</span></span>
<span class="line"><span>                    map.put(tArr[0].trim(), Integer.parseInt(tArr[1].trim()));</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>this.timeout = map;</span></span>
<span class="line"><span>returnthis;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public Config setTimeoutAll(Map&lt;String, Integer&gt; timeout) {</span></span>
<span class="line"><span>this.timeout = timeout;</span></span>
<span class="line"><span>returnthis;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public Integer getBreakerThreshold() {</span></span>
<span class="line"><span>return breakerThreshold;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private void   setBreakerThreshold(Integer breakerThreshold) {</span></span>
<span class="line"><span>this.breakerThreshold = breakerThreshold;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public Integer getBreakerErrorPercentage() {</span></span>
<span class="line"><span>return breakerErrorPercentage;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private void   setBreakerErrorPercentage(Integer breakerErrorPercentage) {</span></span>
<span class="line"><span>this.breakerErrorPercentage = breakerErrorPercentage;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public Integer getBreakerSleepMs() {</span></span>
<span class="line"><span>return breakerSleepMs;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private void   setBreakerSleepMs(Integer breakerSleepMs) {</span></span>
<span class="line"><span>this.breakerSleepMs = breakerSleepMs;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12)]))}const d=n(l,[["render",p],["__file","熔断.html.vue"]]),t=JSON.parse('{"path":"/%E7%9B%98%E5%8F%A4/%E7%BD%91%E5%85%B3/%E7%86%94%E6%96%AD.html","title":"网关-熔断","lang":"zh-CN","frontmatter":{"description":"网关-熔断 如何使用 xml yaml 技术原理 java","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/%E7%9B%98%E5%8F%A4/%E7%BD%91%E5%85%B3/%E7%86%94%E6%96%AD.html"}],["meta",{"property":"og:title","content":"网关-熔断"}],["meta",{"property":"og:description","content":"网关-熔断 如何使用 xml yaml 技术原理 java"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-18T07:25:41.000Z"}],["meta",{"property":"article:author","content":"Cotton Eye Joe"}],["meta",{"property":"article:modified_time","content":"2024-11-18T07:25:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"网关-熔断\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-18T07:25:41.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cotton Eye Joe\\",\\"url\\":\\"https://github.com/ToDreamr\\"}]}"]]},"headers":[],"git":{"createdTime":1731914741000,"updatedTime":1731914741000,"contributors":[{"name":"九歌天上有","email":"aruixrain@gmail.com","commits":1}]},"readingTime":{"minutes":4.96,"words":1489},"filePathRelative":"盘古/网关/熔断.md","localizedDate":"2024年11月18日","excerpt":"","autoDesc":true}');export{d as comp,t as data};
