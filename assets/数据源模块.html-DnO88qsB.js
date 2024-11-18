import{_ as n,o as a,c as e,d as i}from"./app-DGcq1nYR.js";const l={};function p(r,s){return a(),e("div",null,s[0]||(s[0]=[i(`<h1 id="数据源模块" tabindex="-1"><a class="header-anchor" href="#数据源模块"><span>数据源模块</span></a></h1><blockquote><h4 id="如何使用" tabindex="-1"><a class="header-anchor" href="#如何使用"><span>如何使用</span></a></h4></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>   普通的单数据源集成可直接使用spring自带的方式，直接配置文件配置即可。现在要使用的是</span></span>
<span class="line"><span>多数据源，并且数据源类型可以不一致。采用了开源的dynamic-datasource-spring-boot-starter，</span></span>
<span class="line"><span>它不仅支持数据源切换，还能保持事务嵌套问题。同时支持分布式事务seata</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>XML引用如下</p><p><strong>xml</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>  &lt;groupId&gt;com.kingtsoft.pangu&lt;/groupId&gt;</span></span>
<span class="line"><span>  &lt;artifactId&gt;pangu-data-dynamic&lt;/artifactId&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置文件如下</p><p><strong>yaml</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>spring:</span></span>
<span class="line"><span>datasource:</span></span>
<span class="line"><span>dynamic:</span></span>
<span class="line"><span>#设置默认的数据源或者数据源组,默认值即为master</span></span>
<span class="line"><span>primary: mysql-pangu</span></span>
<span class="line"><span>#严格匹配数据源,默认false. true未匹配到指定数据源时抛异常,false使用默认数据源</span></span>
<span class="line"><span>strict: true</span></span>
<span class="line"><span>#seata1.0之后支持自动代理 这里直接配置true</span></span>
<span class="line"><span>seata: true</span></span>
<span class="line"><span>#seata模式使用的at</span></span>
<span class="line"><span>seata-mode: at</span></span>
<span class="line"><span>datasource:</span></span>
<span class="line"><span>mysql-pangu:</span></span>
<span class="line"><span>type: com.zaxxer.hikari.HikariDataSource</span></span>
<span class="line"><span>url: jdbc:mysql://10.11.50.111:3306/pangu?characterEncoding=utf8&amp;serverTimezone=Asia/Shanghai&amp;allowMultiQueries=true</span></span>
<span class="line"><span>username: root</span></span>
<span class="line"><span>password: xxx</span></span>
<span class="line"><span>driver-class-name: com.mysql.cj.jdbc.Driver</span></span>
<span class="line"><span>mysql:</span></span>
<span class="line"><span>type: com.zaxxer.hikari.HikariDataSource</span></span>
<span class="line"><span>url: jdbc:mysql://10.11.50.111:3306/kw_sys?characterEncoding=utf8&amp;serverTimezone=Asia/Shanghai&amp;allowMultiQueries=true</span></span>
<span class="line"><span>username: root</span></span>
<span class="line"><span>password: xxxx</span></span>
<span class="line"><span>driver-class-name: com.mysql.cj.jdbc.Driver</span></span>
<span class="line"><span>oracle209:</span></span>
<span class="line"><span>type: com.zaxxer.hikari.HikariDataSource</span></span>
<span class="line"><span>url: jdbc:oracle:thin:@10.11.51.111:1521:wdhis</span></span>
<span class="line"><span>username: wdhis</span></span>
<span class="line"><span>password: xxx</span></span>
<span class="line"><span>driver-class-name: oracle.jdbc.OracleDriver</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>   业务层的使用，直接使用注解标注，内容为datasource数据源配置的key。对于事务，如果存在嵌套，</span></span>
<span class="line"><span>全部使用@DSTransactional注解进行标记，这个时候如果用原生事务注解会走默认数据源的事务，会出</span></span>
<span class="line"><span>现各类错误。更加不要让两者注解混用。（@DS注解也可以放在类级别上，方法优先级大于类）</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>@DS(&quot;mysql&quot;)</span></span>
<span class="line"><span>@DSTransactional</span></span>
<span class="line"><span>public Object testMybatis() {</span></span>
<span class="line"><span>    PanguTest panguTest =newPanguTest();</span></span>
<span class="line"><span>    panguTest.setId(1);</span></span>
<span class="line"><span>    panguTest.setName(&quot;1&quot;);</span></span>
<span class="line"><span>    panguTestMapper.insert(panguTest);</span></span>
<span class="line"><span>// 以下代码未手动档切换数据源，名称与配置文件保持一致</span></span>
<span class="line"><span>    DynamicDataSourceContextHolder.push(&quot;oracle209&quot;);</span></span>
<span class="line"><span>    panguTestMapper.insert(panguTest);</span></span>
<span class="line"><span>    DynamicDataSourceContextHolder.push(&quot;mysql&quot;);</span></span>
<span class="line"><span>    panguTestMapper.insert(panguTest);</span></span>
<span class="line"><span>// 这段是为了让之前的标记去除，规范起见每次push都对应poll下</span></span>
<span class="line"><span>    DynamicDataSourceContextHolder.poll();</span></span>
<span class="line"><span>//        panguTestMapper.updateById(panguTest);</span></span>
<span class="line"><span>    PgFrameFunImpl pgFrameFun =newPgFrameFunImpl();</span></span>
<span class="line"><span>    pgFrameFun.doMySome(s -&gt; s.setId(1));</span></span>
<span class="line"><span>    pgFrameFun.doMySome2(d -&gt; d.setId(1), PanguTest.class);</span></span>
<span class="line"><span>return123;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><h4 id="技术原理" tabindex="-1"><a class="header-anchor" href="#技术原理"><span>技术原理</span></a></h4></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>   我这里并未做过多的二次封装，因为它本身功能已经足够使用，这里说下他内部的一些操作。通过注解</span></span>
<span class="line"><span>操作，其实就不难理解采用了AOP的方式。对方法进行拦截并且在缓存列表内按照先进先出的原则防止数据</span></span>
<span class="line"><span>源内容，这样外层的数据源或事务都会层层进行有序迭代。（当然框架本身还有很多复杂的功能及详细操作）。</span></span>
<span class="line"><span>seata的使用也是，内部会进行上下文ID 的传递。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>public class  DynamicDataSourceAnnotationInterceptorimplementsMethodInterceptor {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>* The identification of SPEL.</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span>privatestaticfinal String DYNAMIC_PREFIX =&quot;#&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final   DataSourceClassResolver dataSourceClassResolver;</span></span>
<span class="line"><span>private final   DsProcessor dsProcessor;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicDynamicDataSourceAnnotationInterceptor(boolean   allowedPublicOnly, DsProcessor dsProcessor) {</span></span>
<span class="line"><span>        dataSourceClassResolver =newDataSourceClassResolver(allowedPublicOnly);</span></span>
<span class="line"><span>this.dsProcessor = dsProcessor;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>public Object invoke(MethodInvocation invocation) throws Throwable {</span></span>
<span class="line"><span>        String dsKey =determineDatasourceKey(invocation);</span></span>
<span class="line"><span>        DynamicDataSourceContextHolder.push(dsKey);</span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>return invocation.proceed();</span></span>
<span class="line"><span>        } finally {</span></span>
<span class="line"><span>            DynamicDataSourceContextHolder.poll();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private String determineDatasourceKey(MethodInvocation invocation) {</span></span>
<span class="line"><span>        String key = dataSourceClassResolver.findKey(invocation.getMethod(), invocation.getThis());</span></span>
<span class="line"><span>return key.startsWith(DYNAMIC_PREFIX) ? dsProcessor.determineDatasource(invocation, key) : key;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16)]))}const t=n(l,[["render",p],["__file","数据源模块.html.vue"]]),c=JSON.parse('{"path":"/%E7%9B%98%E5%8F%A4/%E6%95%B0%E6%8D%AE%E6%BA%90/%E6%95%B0%E6%8D%AE%E6%BA%90%E6%A8%A1%E5%9D%97.html","title":"数据源模块","lang":"zh-CN","frontmatter":{"description":"数据源模块 如何使用 XML引用如下 xml 配置文件如下 yaml java 技术原理 java","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/%E7%9B%98%E5%8F%A4/%E6%95%B0%E6%8D%AE%E6%BA%90/%E6%95%B0%E6%8D%AE%E6%BA%90%E6%A8%A1%E5%9D%97.html"}],["meta",{"property":"og:title","content":"数据源模块"}],["meta",{"property":"og:description","content":"数据源模块 如何使用 XML引用如下 xml 配置文件如下 yaml java 技术原理 java"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-18T07:25:41.000Z"}],["meta",{"property":"article:author","content":"Cotton Eye Joe"}],["meta",{"property":"article:modified_time","content":"2024-11-18T07:25:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"数据源模块\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-18T07:25:41.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cotton Eye Joe\\",\\"url\\":\\"https://github.com/ToDreamr\\"}]}"]]},"headers":[],"git":{"createdTime":1731914741000,"updatedTime":1731914741000,"contributors":[{"name":"九歌天上有","email":"aruixrain@gmail.com","commits":1}]},"readingTime":{"minutes":2.32,"words":696},"filePathRelative":"盘古/数据源/数据源模块.md","localizedDate":"2024年11月18日","excerpt":"","autoDesc":true}');export{t as comp,c as data};
