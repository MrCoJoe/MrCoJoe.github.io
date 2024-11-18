import{_ as n,o as a,c as e,d as i}from"./app-Cj6OPNEL.js";const l={};function p(t,s){return a(),e("div",null,s[0]||(s[0]=[i(`<h1 id="https模块" tabindex="-1"><a class="header-anchor" href="#https模块"><span>Https模块</span></a></h1><blockquote><p>如何使用</p></blockquote><p>引入模块如下</p><p><strong>xml</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>  &lt;groupId&gt;com.kingtsoft.pangu&lt;/groupId&gt;</span></span>
<span class="line"><span>  &lt;artifactId&gt;pangu-spring-https&lt;/artifactId&gt;</span></span>
<span class="line"><span>  &lt;version&gt;\${pangu.version}&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>引入模块后，项目既支持htttps配置，在配置文件中放入如下配置，主要是：</span></span>
<span class="line"><span>    key-store：keystore文件路径（密钥库）</span></span>
<span class="line"><span>    Key-store-type：密钥库类型</span></span>
<span class="line"><span>    key-store-password：密钥库密码</span></span>
<span class="line"><span>    key-alias 别名（自己写代码去操作这个文件的时候会用到）</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>yaml</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>server:</span></span>
<span class="line"><span>port: 10240</span></span>
<span class="line"><span>http:</span></span>
<span class="line"><span>port: 10241</span></span>
<span class="line"><span>ssl:</span></span>
<span class="line"><span>enabled: true</span></span>
<span class="line"><span>key-store: &#39;classpath:server.keystore&#39;</span></span>
<span class="line"><span>key-store-type: PKCS12</span></span>
<span class="line"><span>key-store-password: kingtang</span></span>
<span class="line"><span>key-alias: server</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>官方介绍</span></span>
<span class="line"><span>    server.ssl.ciphers= # Supported SSL ciphers.</span></span>
<span class="line"><span>    server.ssl.client-auth= # Whether client authentication is wanted (&quot;want&quot;) or needed (&quot;need&quot;). Requires a trust store.</span></span>
<span class="line"><span>    server.ssl.enabled= # Enable SSL support.</span></span>
<span class="line"><span>    server.ssl.enabled-protocols= # Enabled SSL protocols.</span></span>
<span class="line"><span>    server.ssl.key-alias= # Alias that identifies the key in the key store.</span></span>
<span class="line"><span>    server.ssl.key-password= # Password used to access the key in the key store.</span></span>
<span class="line"><span>    server.ssl.key-store= # Path to the key store that holds the SSL certificate (typically a jks file).</span></span>
<span class="line"><span>    server.ssl.key-store-password= # Password used to access the key store.</span></span>
<span class="line"><span>    server.ssl.key-store-provider= # Provider for the key store.</span></span>
<span class="line"><span>    server.ssl.key-store-type= # Type of the key store.</span></span>
<span class="line"><span>    server.ssl.protocol=TLS # SSL protocol to use.</span></span>
<span class="line"><span>    server.ssl.trust-store= # Trust store that holds SSL certificates.</span></span>
<span class="line"><span>    server.ssl.trust-store-password= # Password used to access the trust store.</span></span>
<span class="line"><span>    server.ssl.trust-store-provider= # Provider for the trust store.</span></span>
<span class="line"><span>    server.ssl.trust-store-type= # Type of the trust store.</span></span>
<span class="line"><span>    开启ssl的情况下，若server.port与server.http.port都指定了端口，则会开启http</span></span>
<span class="line"><span>与https双模式。原理是通过自身转发。不写server.http.port或者server.port的值为0，</span></span>
<span class="line"><span>既随机端口模式下，都只会开启https模式。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><h4 id="技术原理" tabindex="-1"><a class="header-anchor" href="#技术原理"><span>技术原理</span></a></h4></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    通过配置化配置双端口，然后通过自定义TomcatServletWebServerFactory来配置容器内容，</span></span>
<span class="line"><span>额外开启http模式的支持。随机模式下取消此配置，因为端口获取会出现问题。当然这明显是只支持tomcat</span></span>
<span class="line"><span>容器，若被置换成netty之类的就不支持了。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.spring.https;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Title: &lt;br&gt;</span></span>
<span class="line"><span> * Description: &lt;br&gt;</span></span>
<span class="line"><span> * Company: KingTang &lt;br&gt;</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * @author 金炀</span></span>
<span class="line"><span> * @version 1.0</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@Configuration</span></span>
<span class="line"><span>@ConditionalOnProperty(name=&quot;server.ssl.enabled&quot;, havingValue=&quot;true&quot;)</span></span>
<span class="line"><span>public class  HttpsWebServerListenerimplements</span></span>
<span class="line"><span>ApplicationListener&lt;WebServerInitializedEvent&gt;, InitializingBean, PriorityOrdered, EnvironmentAware {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private Environment environment;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>privateint port;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>private void   setEnvironment(Environment environment) {</span></span>
<span class="line"><span>this.environment = environment;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>private void   onApplicationEvent(WebServerInitializedEvent event) {</span></span>
<span class="line"><span>this.port = event.getWebServer().getPort();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>public TomcatServletWebServerFactory servletContainer() {</span></span>
<span class="line"><span>        TomcatServletWebServerFactory tomcat =newTomcatServletWebServerFactory() {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            @Override</span></span>
<span class="line"><span>protectedvoidpostProcessContext(Context context) {</span></span>
<span class="line"><span>                SecurityConstraint securityConstraint =newSecurityConstraint();</span></span>
<span class="line"><span>                securityConstraint.setUserConstraint(&quot;CONFIDENTIAL&quot;);</span></span>
<span class="line"><span>                SecurityCollection collection =newSecurityCollection();</span></span>
<span class="line"><span>                collection.addPattern(&quot;/*&quot;);</span></span>
<span class="line"><span>                securityConstraint.addCollection(collection);</span></span>
<span class="line"><span>                context.addConstraint(securityConstraint);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 考虑也通过随机的方式获取</span></span>
<span class="line"><span>        String httpParam = environment.getProperty(&quot;server.http.port&quot;);</span></span>
<span class="line"><span>        String httpsParam = environment.getProperty(&quot;server.port&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (!ObjectUtils.isEmpty(httpParam) &amp;&amp; ObjectUtils.isEmpty(httpsParam) &amp;&amp;!Objects.equals(httpsParam, &quot;0&quot;)) {</span></span>
<span class="line"><span>            tomcat.addAdditionalTomcatConnectors(connector(Integer.parseInt(httpParam)));</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>return tomcat;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>private void   afterPropertiesSet() throws Exception {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>publicintgetOrder() {</span></span>
<span class="line"><span>return Ordered.HIGHEST_PRECEDENCE;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public Connector connector(inthttpPort) {</span></span>
<span class="line"><span>        Connector connector =newConnector(&quot;org.apache.coyote.http11.Http11NioProtocol&quot;);</span></span>
<span class="line"><span>        connector.setScheme(&quot;http&quot;);</span></span>
<span class="line"><span>        connector.setPort(httpPort);</span></span>
<span class="line"><span>        connector.setSecure(false);</span></span>
<span class="line"><span>        connector.setRedirectPort(port);</span></span>
<span class="line"><span>return connector;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13)]))}const c=n(l,[["render",p],["__file","Https模块.html.vue"]]),d=JSON.parse('{"path":"/%E7%9B%98%E5%8F%A4/%E7%BB%84%E4%BB%B6%E4%BB%8B%E7%BB%8D/Https%E6%A8%A1%E5%9D%97.html","title":"Https模块","lang":"zh-CN","frontmatter":{"description":"Https模块 如何使用 引入模块如下 xml yaml 技术原理 java","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/%E7%9B%98%E5%8F%A4/%E7%BB%84%E4%BB%B6%E4%BB%8B%E7%BB%8D/Https%E6%A8%A1%E5%9D%97.html"}],["meta",{"property":"og:title","content":"Https模块"}],["meta",{"property":"og:description","content":"Https模块 如何使用 引入模块如下 xml yaml 技术原理 java"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-18T07:25:41.000Z"}],["meta",{"property":"article:author","content":"Cotton Eye Joe"}],["meta",{"property":"article:modified_time","content":"2024-11-18T07:25:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Https模块\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-18T07:25:41.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cotton Eye Joe\\",\\"url\\":\\"https://github.com/ToDreamr\\"}]}"]]},"headers":[],"git":{"createdTime":1731914741000,"updatedTime":1731914741000,"contributors":[{"name":"九歌天上有","email":"aruixrain@gmail.com","commits":1}]},"readingTime":{"minutes":1.85,"words":556},"filePathRelative":"盘古/组件介绍/Https模块.md","localizedDate":"2024年11月18日","excerpt":"","autoDesc":true}');export{c as comp,d as data};
