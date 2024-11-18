import{_ as s,o as a,c as e,d as i}from"./app-Bym8v7z8.js";const l={};function p(t,n){return a(),e("div",null,n[0]||(n[0]=[i(`<h1 id="网关-认证" tabindex="-1"><a class="header-anchor" href="#网关-认证"><span>网关-认证</span></a></h1><blockquote><h4 id="如何使用" tabindex="-1"><a class="header-anchor" href="#如何使用"><span>如何使用</span></a></h4></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>引入如下模块</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>xml</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>  &lt;groupId&gt;com.kingtsoft.pangu&lt;/groupId&gt;</span></span>
<span class="line"><span>  &lt;artifactId&gt;pangu-gate-authentication&lt;/artifactId&gt;</span></span>
<span class="line"><span>  &lt;version&gt;\${pangu.version}&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>配置文件，用于白名单配置</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>yaml</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>pangu:</span></span>
<span class="line"><span>gateway:</span></span>
<span class="line"><span>auth:</span></span>
<span class="line"><span>white-paths: &#39;/**/doAuth/**&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><h4 id="技术原理" tabindex="-1"><a class="header-anchor" href="#技术原理"><span>技术原理</span></a></h4></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    看AuthGatewayFilterFactory文件,主要是对基础的路径权限做首次认证，及jwt的token认证。</span></span>
<span class="line"><span>可以看出，头信息带有Pg-Sp-Req属性且为1的请求会被直接通过。(这里只是笼统对地址进行了验证，</span></span>
<span class="line"><span>实际详细的内容会通过各自的认证基础模块中进行)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * Title: &lt;br&gt;</span></span>
<span class="line"><span> * Description: &lt;br&gt;</span></span>
<span class="line"><span> * Company: KingTang &lt;br&gt;</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * @author 金炀</span></span>
<span class="line"><span> * @version 1.0</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@Slf4j</span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>public class  AuthGatewayFilterFactoryextendsAbstractGatewayFilterFactory&lt;AuthGatewayFilterFactory.Config&gt;  {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>privatestaticfinal String NAME =&quot;Auth&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final   AntPathMatcher antPathMatcher =newAntPathMatcher();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final   List&lt;String&gt; whitePaths =new ArrayList&lt;&gt;(List.of(&quot;/**/auth/doLogin/**&quot;, &quot;/**/pangu-open/**&quot;));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicAuthGatewayFilterFactory(Environment environment) {</span></span>
<span class="line"><span>super(Config.class);</span></span>
<span class="line"><span>        String whitePathsStr = environment.getProperty(&quot;pangu.gateway.auth.white-paths&quot;);</span></span>
<span class="line"><span>if (StringUtils.hasText(whitePathsStr)) {</span></span>
<span class="line"><span>            whitePaths.addAll(Arrays.asList(whitePathsStr.split(&quot;,&quot;)));</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        GateFilterContext.registerFilter(name());</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>public List&lt;String&gt; shortcutFieldOrder() {</span></span>
<span class="line"><span>return Collections.singletonList(&quot;enabled&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private Mono&lt;Void&gt; getResRet(ServerWebExchange exchange, String msg) {</span></span>
<span class="line"><span>        exchange.getResponse().setStatusCode(HttpStatus.UNAUTHORIZED);</span></span>
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
<span class="line"><span>if (HttpMethod.OPTIONS.equals(exchange.getRequest().getMethod())) {</span></span>
<span class="line"><span>return chain.filter(exchange);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            ServerHttpRequest request = exchange.getRequest();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (Objects.equals(request.getHeaders().getFirst(HttpConst.Header.SP_REQ), &quot;1&quot;)) {</span></span>
<span class="line"><span>return chain.filter(exchange);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            String currentPath = request.getURI().getPath();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>for (String whitePath : whitePaths) {</span></span>
<span class="line"><span>if (antPathMatcher.match(whitePath, currentPath)) {</span></span>
<span class="line"><span>return chain.filter(exchange);</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            String token = JwtStaticUtil.getTokenFromHeader(</span></span>
<span class="line"><span>                    exchange.getRequest().getHeaders().getFirst(HttpConst.Header.TOKEN_KEY));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>                JwtStaticUtil.checkToken(token);</span></span>
<span class="line"><span>            } catch (Exception e) {</span></span>
<span class="line"><span>                e.printStackTrace();</span></span>
<span class="line"><span>returngetResRet(exchange, &quot;认证不通过！&quot;+ e.getMessage());</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            JwtStaticUtil.getClaim(token, AuthDTO.class);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>return chain.filter(exchange);</span></span>
<span class="line"><span>        };</span></span>
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
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12)]))}const d=s(l,[["render",p],["__file","认证.html.vue"]]),c=JSON.parse('{"path":"/%E7%9B%98%E5%8F%A4/%E7%BD%91%E5%85%B3/%E8%AE%A4%E8%AF%81.html","title":"网关-认证","lang":"zh-CN","frontmatter":{"description":"网关-认证 如何使用 xml yaml 技术原理 java","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/%E7%9B%98%E5%8F%A4/%E7%BD%91%E5%85%B3/%E8%AE%A4%E8%AF%81.html"}],["meta",{"property":"og:title","content":"网关-认证"}],["meta",{"property":"og:description","content":"网关-认证 如何使用 xml yaml 技术原理 java"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-18T07:25:41.000Z"}],["meta",{"property":"article:author","content":"Cotton Eye Joe"}],["meta",{"property":"article:modified_time","content":"2024-11-18T07:25:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"网关-认证\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-18T07:25:41.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cotton Eye Joe\\",\\"url\\":\\"https://github.com/ToDreamr\\"}]}"]]},"headers":[],"git":{"createdTime":1731914741000,"updatedTime":1731914741000,"contributors":[{"name":"九歌天上有","email":"aruixrain@gmail.com","commits":1}]},"readingTime":{"minutes":1.14,"words":341},"filePathRelative":"盘古/网关/认证.md","localizedDate":"2024年11月18日","excerpt":"","autoDesc":true}');export{d as comp,c as data};
