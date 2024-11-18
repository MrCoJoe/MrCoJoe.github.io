import{_ as n,o as a,c as i,d as e}from"./app-BSUomKXw.js";const l={};function p(t,s){return a(),i("div",null,s[0]||(s[0]=[e(`<h1 id="网关-限流" tabindex="-1"><a class="header-anchor" href="#网关-限流"><span>网关-限流</span></a></h1><blockquote><h4 id="如何使用" tabindex="-1"><a class="header-anchor" href="#如何使用"><span>如何使用</span></a></h4></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>引入如下模块</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>xml</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>  &lt;groupId&gt;com.kingtsoft.pangu&lt;/groupId&gt;</span></span>
<span class="line"><span>  &lt;artifactId&gt;pangu-gate-flow&lt;/artifactId&gt;</span></span>
<span class="line"><span>  &lt;version&gt;\${pangu.version}&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    配置文件，配置路径检测信息。key 为路径匹配规则，value为令牌桶的填充速率(限制的流量)，</span></span>
<span class="line"><span>在多个匹配的情况下，会根据配置从上到下的顺序来判断优先级。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>yaml</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>pangu:</span></span>
<span class="line"><span>gateway:</span></span>
<span class="line"><span>flow:</span></span>
<span class="line"><span>path-check:</span></span>
<span class="line"><span>&#39;[/pangu-frame/**]&#39;: 10</span></span>
<span class="line"><span>&#39;[/**]&#39;: 3000</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><h4 id="技术原理" tabindex="-1"><a class="header-anchor" href="#技术原理"><span>技术原理</span></a></h4></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    同样是自动化配置</span></span>
<span class="line"><span>    主要看这个PgRedisRateLimiter限流器的定义，利用了redis+lua脚本的形式，</span></span>
<span class="line"><span>这个script默认就是spring-cloud-gateway-server包目录下的</span></span>
<span class="line"><span>META-INF/scripts/request_rate_limiter.lua。默认提供了lua的系列原子操作。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.gate.flow;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span>* Title: &lt;br&gt;</span></span>
<span class="line"><span>* Description: &lt;br&gt;</span></span>
<span class="line"><span>* Company: wondersgroup.com &lt;br&gt;</span></span>
<span class="line"><span>*</span></span>
<span class="line"><span>* @author 金炀</span></span>
<span class="line"><span>* @version 1.0</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span>@EnableConfigurationProperties(PgFlowProperties.class)</span></span>
<span class="line"><span>@Configuration</span></span>
<span class="line"><span>public class  FlowConfiguration {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>    KeyResolver pathKeyResolver() {</span></span>
<span class="line"><span>return exchange -&gt; Mono.just(exchange.getRequest().getPath().toString());</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>    @ConditionalOnMissingBean</span></span>
<span class="line"><span>public PgRedisRateLimiter redisRateLimiter(ReactiveStringRedisTemplate redisTemplate,</span></span>
<span class="line"><span>                                               RedisScript&lt;List&lt;long &gt;&gt; script,</span></span>
<span class="line"><span>                                               ConfigurationService configurationService) {</span></span>
<span class="line"><span>returnnewPgRedisRateLimiter(redisTemplate, script, configurationService);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="http://pangu.kingtsoft.com/pangu-facade/assets/image1.bacb1a93.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    接下来看限流器内部，这里其实是对内部限流器RedisRateLimiter的拓展。</span></span>
<span class="line"><span>isAllowed方法为主要逻辑，大多数沿用了原来的逻辑，但是只返回出来了是否允许，</span></span>
<span class="line"><span>整体的响应信息并不需要。通过lua脚本与redis交互获取令牌，返回数组，数组第一</span></span>
<span class="line"><span>个元素代表是否获取成功(1成功0失败)，第二个参数代表剩余令牌数。这里直接根据第</span></span>
<span class="line"><span>一个进行判断并直接返回allow</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.gate.flow;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import lombok.extern.slf4j.Slf4j;</span></span>
<span class="line"><span>import org.springframework.cloud.gateway.filter.ratelimit.RedisRateLimiter;</span></span>
<span class="line"><span>import org.springframework.cloud.gateway.support.ConfigurationService;</span></span>
<span class="line"><span>import org.springframework.data.redis.core.ReactiveRedisTemplate;</span></span>
<span class="line"><span>import org.springframework.data.redis.core.ReactiveStringRedisTemplate;</span></span>
<span class="line"><span>import org.springframework.data.redis.core.script.RedisScript;</span></span>
<span class="line"><span>import reactor.core.publisher.Flux;</span></span>
<span class="line"><span>import reactor.core.publisher.Mono;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import java.util.ArrayList;</span></span>
<span class="line"><span>import java.util.Arrays;</span></span>
<span class="line"><span>import java.util.List;</span></span>
<span class="line"><span>import java.util.concurrent.atomic.Atomicboolean  ;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Title: &lt;br&gt;</span></span>
<span class="line"><span> * Description: &lt;br&gt;</span></span>
<span class="line"><span> * Company: KingTang.com &lt;br&gt;</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * @author 金炀</span></span>
<span class="line"><span> * @version 1.0</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@Slf4j</span></span>
<span class="line"><span>public class  PgRedisRateLimiterextendsRedisRateLimiter {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final   ReactiveRedisTemplate&lt;String, String&gt; redisTemplate;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final   Atomicboolean   initialized =newAtomicboolean  (false);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final   RedisScript&lt;List&lt;long &gt;&gt; script;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicPgRedisRateLimiter(ReactiveStringRedisTemplate redisTemplate,</span></span>
<span class="line"><span>                              RedisScript&lt;List&lt;long &gt;&gt; script,</span></span>
<span class="line"><span>                              ConfigurationService configurationService) {</span></span>
<span class="line"><span>super(redisTemplate, script, configurationService);</span></span>
<span class="line"><span>this.redisTemplate = redisTemplate;</span></span>
<span class="line"><span>this.script = script;</span></span>
<span class="line"><span>        initialized.compareAndSet(false, true);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public Mono&lt;boolean  &gt; isAllowedFlow(String routeId, String id) {</span></span>
<span class="line"><span>if (!this.initialized.get()) {</span></span>
<span class="line"><span>thrownewIllegalStateException(&quot;RedisRateLimiter is not initialized&quot;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        Config routeConfig =getConfig().get(routeId);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int replenishRate = routeConfig.getReplenishRate();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// How much bursting do you want to allow?</span></span>
<span class="line"><span>int burstCapacity = routeConfig.getBurstCapacity();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// How many tokens are requested per request?</span></span>
<span class="line"><span>int requestedTokens = routeConfig.getRequestedTokens();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>            List&lt;String&gt; keys =getKeys(id);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            List&lt;String&gt; scriptArgs = Arrays.asList(replenishRate +&quot;&quot;, burstCapacity +&quot;&quot;, &quot;&quot;, requestedTokens +&quot;&quot;);</span></span>
<span class="line"><span>            Flux&lt;List&lt;long &gt;&gt; flux =this.redisTemplate.execute(this.script, keys, scriptArgs);</span></span>
<span class="line"><span>return flux.onErrorResume(throwable -&gt; Flux.just(Arrays.asList(1L, -1L)))</span></span>
<span class="line"><span>                    .reduce(new ArrayList&lt;long &gt;(), (long s, l) -&gt; {</span></span>
<span class="line"><span>                        long s.addAll(l);</span></span>
<span class="line"><span>return long s;</span></span>
<span class="line"><span>                    }).map(results -&gt; {</span></span>
<span class="line"><span>boolean   allowed = results.get(0) ==1L;</span></span>
<span class="line"><span>if (log.isDebugEnabled()) {</span></span>
<span class="line"><span>                            log.debug(&quot;限流信息：{}&quot;, results);</span></span>
<span class="line"><span>                        }</span></span>
<span class="line"><span>if (!allowed) {</span></span>
<span class="line"><span>                            log.warn(&quot;{}个令牌已经用完，开始限流&quot;, burstCapacity);</span></span>
<span class="line"><span>                        }</span></span>
<span class="line"><span>return allowed;</span></span>
<span class="line"><span>                    });</span></span>
<span class="line"><span>        } catch (Exception e) {</span></span>
<span class="line"><span>            log.error(&quot;Error determining if user allowed from redis&quot;, e);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>return Mono.just(true);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>static List&lt;String&gt; getKeys(String id) {</span></span>
<span class="line"><span>        String prefix =&quot;request_rate_limiter.{&quot;+ id;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        String tokenKey = prefix +&quot;}.tokens&quot;;</span></span>
<span class="line"><span>        String timestampKey = prefix +&quot;}.timestamp&quot;;</span></span>
<span class="line"><span>return Arrays.asList(tokenKey, timestampKey);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    拦截器参考RequestRateLimiterGatewayFilterFactory定义了PgGatewayFlowFilterFactory</span></span>
<span class="line"><span>内部为配合PgRedisRateLimiter处理的限流逻辑及回调配置。</span></span>
<span class="line"><span>    redisRateLimiter.getConfig() 为路径缓存，因为在FlowConfiguration中定义过KeyResolver，</span></span>
<span class="line"><span>就是按照路径来的。</span></span>
<span class="line"><span>    chooseLimit中对配置及实际请求进行了路径匹配，获取配置的限流策略</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.gate.flow.filter;</span></span>
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
<span class="line"><span>public class  PgGatewayFlowFilterFactoryextendsAbstractGatewayFilterFactory&lt;PgGatewayFlowFilterFactory.Config&gt;  {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final   PgRedisRateLimiter redisRateLimiter;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>privatestaticfinal String NAME =&quot;Flow&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>privatestaticfinalint DEFAULT_RATE =3000;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final   PgFlowProperties pgFlowProperties;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final   AntPathMatcher antPathMatcher =newAntPathMatcher();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicPgGatewayFlowFilterFactory(PgRedisRateLimiter redisRateLimiter,</span></span>
<span class="line"><span>                                      PgFlowProperties pgFlowProperties) {</span></span>
<span class="line"><span>super(Config.class);</span></span>
<span class="line"><span>        GateFilterContext.registerFilter(name());</span></span>
<span class="line"><span>this.redisRateLimiter = redisRateLimiter;</span></span>
<span class="line"><span>this.pgFlowProperties = pgFlowProperties;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>public List&lt;String&gt; shortcutFieldOrder() {</span></span>
<span class="line"><span>return Collections.singletonList(&quot;enabled&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private Mono&lt;Void&gt; getResRet(ServerWebExchange exchange, String msg) {</span></span>
<span class="line"><span>        exchange.getResponse().setStatusCode(HttpStatus.TOO_MANY_REQUESTS);</span></span>
<span class="line"><span>byte[] bytes = msg.getBytes(StandardCharsets.UTF_8);</span></span>
<span class="line"><span>        DataBuffer buffer = exchange.getResponse().bufferFactory().wrap(bytes);</span></span>
<span class="line"><span>return exchange.getResponse().writeWith(Flux.just(buffer));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>public GatewayFilter apply(Config config) {</span></span>
<span class="line"><span>return (exchange, chain) -&gt; {</span></span>
<span class="line"><span>if (!config.isEnabled()) {</span></span>
<span class="line"><span>return chain.filter(exchange);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            ServerHttpRequest request = exchange.getRequest();</span></span>
<span class="line"><span>            String currentPath = request.getURI().getPath();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>return redisRateLimiter.isAllowedFlow(chooseLimit(currentPath), currentPath).flatMap(allowed -&gt; {</span></span>
<span class="line"><span>if (!allowed) {</span></span>
<span class="line"><span>returngetResRet(exchange, &quot;请求过多，请稍后再试!&quot;);</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>return chain.filter(exchange);</span></span>
<span class="line"><span>            });</span></span>
<span class="line"><span>        };</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private String chooseLimit(String requestUrl) {</span></span>
<span class="line"><span>        Map&lt;String, Integer&gt; pathCheck = pgFlowProperties.getPathCheck();</span></span>
<span class="line"><span>        Integer value = pathCheck.get(&quot;default&quot;);</span></span>
<span class="line"><span>for (String key : pathCheck.keySet()) {</span></span>
<span class="line"><span>if (antPathMatcher.match(key, requestUrl)) {</span></span>
<span class="line"><span>                value = pathCheck.get(key);</span></span>
<span class="line"><span>break;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (value ==null) {</span></span>
<span class="line"><span>            value = DEFAULT_RATE;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (redisRateLimiter.getConfig().get(requestUrl) ==null) {</span></span>
<span class="line"><span>//          允许用户每秒执行多少请求，而不丢弃任何请求。这是令牌桶的填充速率</span></span>
<span class="line"><span>//          redis-rate-limiter.replenishRate: 1000</span></span>
<span class="line"><span>//	        允许用户在一秒钟内执行的最大请求数。这是令牌桶可以保存的令牌数。将此值设置为零将阻止所有请求。</span></span>
<span class="line"><span>//          redis-rate-limiter.burstCapacity: 1000</span></span>
<span class="line"><span>//	        是每个请求消耗多少个令牌，默认是1</span></span>
<span class="line"><span>//          redis-rate-limiter.requestedTokens: 1</span></span>
<span class="line"><span>            redisRateLimiter.getConfig().put(requestUrl,</span></span>
<span class="line"><span>new RedisRateLimiter.Config()</span></span>
<span class="line"><span>                            .setReplenishRate(value)</span></span>
<span class="line"><span>                            .setBurstCapacity(value *2));</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>return requestUrl;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>public String name() {</span></span>
<span class="line"><span>return NAME;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicstaticclassConfig {</span></span>
<span class="line"><span>// 控制是否开启认证</span></span>
<span class="line"><span>privateboolean   enabled =true;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicConfig() {}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicboolean  isEnabled() {</span></span>
<span class="line"><span>return enabled;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private void   setEnabled(boolean  enabled) {</span></span>
<span class="line"><span>this.enabled = enabled;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19)]))}const d=n(l,[["render",p],["__file","限流.html.vue"]]),c=JSON.parse('{"path":"/%E7%9B%98%E5%8F%A4/%E7%BD%91%E5%85%B3/%E9%99%90%E6%B5%81.html","title":"网关-限流","lang":"zh-CN","frontmatter":{"description":"网关-限流 如何使用 xml yaml 技术原理 java image.pngimage.png java java","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/%E7%9B%98%E5%8F%A4/%E7%BD%91%E5%85%B3/%E9%99%90%E6%B5%81.html"}],["meta",{"property":"og:title","content":"网关-限流"}],["meta",{"property":"og:description","content":"网关-限流 如何使用 xml yaml 技术原理 java image.pngimage.png java java"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"http://pangu.kingtsoft.com/pangu-facade/assets/image1.bacb1a93.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-18T07:25:41.000Z"}],["meta",{"property":"article:author","content":"Cotton Eye Joe"}],["meta",{"property":"article:modified_time","content":"2024-11-18T07:25:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"网关-限流\\",\\"image\\":[\\"http://pangu.kingtsoft.com/pangu-facade/assets/image1.bacb1a93.png\\"],\\"dateModified\\":\\"2024-11-18T07:25:41.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cotton Eye Joe\\",\\"url\\":\\"https://github.com/ToDreamr\\"}]}"]]},"headers":[],"git":{"createdTime":1731914741000,"updatedTime":1731914741000,"contributors":[{"name":"九歌天上有","email":"aruixrain@gmail.com","commits":1}]},"readingTime":{"minutes":3.3,"words":991},"filePathRelative":"盘古/网关/限流.md","localizedDate":"2024年11月18日","excerpt":"","autoDesc":true}');export{d as comp,c as data};
