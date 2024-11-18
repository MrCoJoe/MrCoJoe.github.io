import{_ as s,o as a,c as e,d as i}from"./app-BSUomKXw.js";const l={};function p(r,n){return a(),e("div",null,n[0]||(n[0]=[i(`<h1 id="feign模块" tabindex="-1"><a class="header-anchor" href="#feign模块"><span>Feign模块</span></a></h1><blockquote><h4 id="如何使用" tabindex="-1"><a class="header-anchor" href="#如何使用"><span>如何使用</span></a></h4></blockquote><p>引用如下模块</p><p><strong>xml</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>  &lt;groupId&gt;com.kingtsoft.pangu&lt;/groupId&gt;</span></span>
<span class="line"><span>  &lt;artifactId&gt;pangu-springcloud-feign&lt;/artifactId&gt;</span></span>
<span class="line"><span>  &lt;version&gt;\${pangu.version}&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    定义feignClient(保证Client所在包中有api或者feign这个路径)，例如com.kingtsoft.pangu.frame.simple.test.api</span></span>
<span class="line"><span>com.kingtsoft.pangu.frame.simple.test.feign</span></span>
<span class="line"><span>必须要有PgFeignClient标记才会初始化为客户端</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>@FeignResultClient</span></span>
<span class="line"><span>@PgFeignClient(clientCode=&quot;pangu-frame-simple&quot;, basePath=&quot;pangu-xdev&quot;, url=&quot;https://127.0.0.1:10240/pangu-xdev&quot;, loadBalance=false)</span></span>
<span class="line"><span>public interface  TestCallAnoServiceApi {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    String SUF =&quot;/pub/test&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @RequestMapping(value= SUF +&quot;/testAnoCall?a=1&amp;b=3&quot;, method= RequestMethod.POST)</span></span>
<span class="line"><span>    String doSomething(@RequestBody OisRegSchedule abc);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    使用如下，直接注入TestCallAnoServiceApi</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>private void   testCall() {</span></span>
<span class="line"><span>    log.info(&quot;doCall&quot;);</span></span>
<span class="line"><span>    OisRegSchedule oisRegSchedule =newOisRegSchedule();</span></span>
<span class="line"><span>    oisRegSchedule.setScheduleSn(1L);</span></span>
<span class="line"><span>    String abc = testCallAnoServiceApi.doSomething( oisRegSchedule);</span></span>
<span class="line"><span>    System.out.println(abc);</span></span>
<span class="line"><span>    log.info(&quot;end&quot;);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注解介绍</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>PgFeignClient</span></span>
<span class="line"><span>    url：直接声明请求地址，若为域名，请把loadBalance标记为false，否则会把域名当</span></span>
<span class="line"><span>作负载标记去识别。并且支持使用\${}的方式获取配置文件的配置。</span></span>
<span class="line"><span>    clientCode：客户端代码，最好唯一。在没有url的情况下，会作为负载标记前缀</span></span>
<span class="line"><span>    encoder：编码配置，默认SPRING自带模式，可选GSON及FORM模式</span></span>
<span class="line"><span>    (注意，根据feign机制，数据返回并不会使用这里配置的encoder，除非是异步feign客户端)</span></span>
<span class="line"><span>    configuration：配置自定义配置，支持feign客户端配置，拦截器配置，编码，解码等，如下为案例</span></span>
<span class="line"><span>    basePath：基础路径，在负载且不用网关的情况下。路径解析可能只到端口。使用此属性会在端口之后配置个基础路径。</span></span>
<span class="line"><span>    loadBalance：是否开启负载均衡模式</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>@Configuration</span></span>
<span class="line"><span>public class  FeignClientConfiguration {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public Feign.Builder pgFeignBuild() {</span></span>
<span class="line"><span>        Feign.Builder builder =getFeignBuildDefault();</span></span>
<span class="line"><span>buildInterceptors(builder);</span></span>
<span class="line"><span>        String wn = environment.getProperty(&quot;feign.write-nulls&quot;);</span></span>
<span class="line"><span>boolean   writeNulls = StringUtils.hasText(wn) &amp;&amp; boolean  .parseboolean  (wn);</span></span>
<span class="line"><span>// 使用fastjson作为feign的消息转换器</span></span>
<span class="line"><span>        ObjectFactory&lt;HttpMessageConverters&gt; feignObjectFactory = PgFeignUtil.initFeignNewConverters(messageConverters, writeNulls);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>return builder</span></span>
<span class="line"><span>        .contract(contract)</span></span>
<span class="line"><span>        .encoder(newSpringEncoder(feignObjectFactory))</span></span>
<span class="line"><span>        .decoder(newSpringDecoder(feignObjectFactory, customizers));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public Feign.Builder pgFeignGsonBuild() {</span></span>
<span class="line"><span>        Feign.Builder builder =getFeignBuildDefault();</span></span>
<span class="line"><span>buildInterceptors(builder);</span></span>
<span class="line"><span>return builder</span></span>
<span class="line"><span>        .contract(contract)</span></span>
<span class="line"><span>        .encoder(newGsonEncoder())</span></span>
<span class="line"><span>        .decoder(newGsonDecoder());</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public Feign.Builder pgFeignFormBuild() {</span></span>
<span class="line"><span>        Feign.Builder builder =getFeignBuildDefault();</span></span>
<span class="line"><span>buildInterceptors(builder);</span></span>
<span class="line"><span>        String wn = environment.getProperty(&quot;feign.write-nulls&quot;);</span></span>
<span class="line"><span>boolean   writeNulls = StringUtils.hasText(wn) &amp;&amp; boolean  .parseboolean  (wn);</span></span>
<span class="line"><span>// 使用fastjson作为feign的消息转换器</span></span>
<span class="line"><span>        ObjectFactory&lt;HttpMessageConverters&gt; feignObjectFactory = PgFeignUtil.initFeignNewConverters(messageConverters, writeNulls);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>return builder</span></span>
<span class="line"><span>        .contract(contract)</span></span>
<span class="line"><span>        .encoder(newSpringFormEncoder(newSpringEncoder(feignObjectFactory)))</span></span>
<span class="line"><span>        .decoder(newSpringDecoder(feignObjectFactory, customizers));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private Feign.Builder getFeignBuildDefault() {</span></span>
<span class="line"><span>// 因为scope为prototype，每次获取bean都会重新创建一个新对象</span></span>
<span class="line"><span>return beanFactory.getBean(&quot;feignBuilder&quot;, Feign.Builder.class);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#此注解用于处理返回值信息</span></span>
<span class="line"><span>FeignResultClient：</span></span>
<span class="line"><span>    value：返回值处理器类</span></span>
<span class="line"><span>    coverMethod：处理器的方法</span></span>
<span class="line"><span>    postfix：只处理标记处理的后缀</span></span>
<span class="line"><span>此注解标记的类下的方法或者方法的返回值会经过处理类，奖处理类后的结果再返回给调用方，</span></span>
<span class="line"><span>这样feign定义就可以直接定义实际的值部分内容。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><h4 id="技术原理" tabindex="-1"><a class="header-anchor" href="#技术原理"><span>技术原理</span></a></h4></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    首先是feign客户端的扫描，通过自定义扫描，对路径带有api及feign的BeanDefinition</span></span>
<span class="line"><span>进行了扫描。再去这些BeanDefinition判断是否存在自定义的PgFeignClient注解</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>protected ClassPathScanningCandidateComponentProvider getScanner() {</span></span>
<span class="line"><span>returnnewClassPathScanningCandidateComponentProvider(false, this.environment) {</span></span>
<span class="line"><span>        @Override</span></span>
<span class="line"><span>protectedboolean  isCandidateComponent(@NonNull MetadataReader metadataReader) {</span></span>
<span class="line"><span>            Optional&lt;String&gt; target = metadataReader.getAnnotationMetadata().getAnnotationTypes().stream().filter(</span></span>
<span class="line"><span>                sn -&gt; sn.equals(PgFeignClient.class.getName())</span></span>
<span class="line"><span>            ).findAny();</span></span>
<span class="line"><span>return target.isPresent();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        @Override</span></span>
<span class="line"><span>protectedboolean  isCandidateComponent(@NonNull AnnotatedBeanDefinition beanDefinition) {</span></span>
<span class="line"><span>return beanDefinition.getMetadata().isInterface() &amp;&amp;!beanDefinition.getMetadata().isAnnotation();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ClassLoader classLoader = Thread.currentThread().getContextClassLoader();</span></span>
<span class="line"><span>ClassPathScanningCandidateComponentProvider scanner =getScanner();</span></span>
<span class="line"><span>scanner.setResourceLoader(this.resourceLoader);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Set&lt;BeanDefinition&gt; beanDefinitions =new LinkedHashSet&lt;&gt;();</span></span>
<span class="line"><span>for (String pkg : PKG_ARR) {</span></span>
<span class="line"><span>    Set&lt;BeanDefinition&gt; beanDefinitions2 = scanner.findCandidateComponents(pkg);</span></span>
<span class="line"><span>    beanDefinitions.addAll(beanDefinitions2);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    默认加入了对okhttp的支持，使用的okhttpclient作为调用客户端，拥有队列线程池，轻松写并发</span></span>
<span class="line"><span>拥有Interceptors等特性。并且根据注解配置，自动判断是否生成负载客户端。</span></span>
<span class="line"><span>    以下为自动化配置类初始化内容</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.springcloud.feign;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Title: &lt;br&gt;</span></span>
<span class="line"><span> * Description: &lt;br&gt;</span></span>
<span class="line"><span> * Company: KingTang &lt;br&gt;</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * @author 金炀</span></span>
<span class="line"><span> * @version 1.0</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@Import({FeignClientsConfiguration.class, FeignConfiguration.class, PgFeignClientConfiguration.class })</span></span>
<span class="line"><span>@ConditionalOnClass(Feign.class)</span></span>
<span class="line"><span>@AutoConfigureBefore({org.springframework.cloud.openfeign.FeignAutoConfiguration.class})</span></span>
<span class="line"><span>@AutoConfigureAfter(name= {&quot;com.kingtsoft.pangu.springcloud.nacos.NacosAutoConfiguration&quot;})</span></span>
<span class="line"><span>@Configuration</span></span>
<span class="line"><span>public class  FeignAutoConfigurationimplementsEnvironmentAware {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /** 由于引入PgFeignClientConfiguration的生命周期比预计的早，所以这里需要手动绑定，不然会发现注入的类无法被绑定 */</span></span>
<span class="line"><span>privatestatic PgFeignOkHttpProperties pgFeignOkHttpProperties =newPgFeignOkHttpProperties();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>privatestatic LoadBalancerClientsProperties balancerClientsProperties =newLoadBalancerClientsProperties();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>    @Scope(&quot;prototype&quot;)</span></span>
<span class="line"><span>public AsyncFeign.AsyncBuilder&lt;?&gt; asyncFeignBuilder(Retryer retryer) {</span></span>
<span class="line"><span>return AsyncFeign.asyncBuilder().retryer(retryer);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>    @ConditionalOnMissingBean(HttpMessageConverters.class)</span></span>
<span class="line"><span>public HttpMessageConverters messageConverters(ObjectProvider&lt;HttpMessageConverter&lt;?&gt;&gt; converters) {</span></span>
<span class="line"><span>returnnewHttpMessageConverters(converters.orderedStream().collect(Collectors.toList()));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>    @ConditionalOnMissingBean(FeignResultCoverRegister.class)</span></span>
<span class="line"><span>public FeignResultCoverRegister feignResultCoverRegister() {</span></span>
<span class="line"><span>returnnewFeignResultCoverRegister();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>public OkHttpLogInterceptor okHttpLogInterceptor() {</span></span>
<span class="line"><span>returnnewOkHttpLogInterceptor();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>public PgFeignProperties pgFeignProperties(Environment environment) {</span></span>
<span class="line"><span>        BindResult&lt;PgFeignProperties&gt; ret = Binder.get(environment)</span></span>
<span class="line"><span>                .bind(PgFeignProperties.PREFIX, PgFeignProperties.class);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        PgFeignProperties pgFeignProperties =newPgFeignProperties();</span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>if (ret.get() !=null) {</span></span>
<span class="line"><span>                pgFeignProperties = ret.get();</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        } catch (Exception ignore) {}</span></span>
<span class="line"><span>return pgFeignProperties;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>    @ConditionalOnWebApplication</span></span>
<span class="line"><span>    @ConditionalOnMissingBean(FeignRequestInterceptor.class)</span></span>
<span class="line"><span>public FeignRequestInterceptor feignRequestInterceptor(PgFeignProperties pgFeignProperties) {</span></span>
<span class="line"><span>returnnewFeignRequestInterceptor(pgFeignProperties);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>public OkHttpResultInterceptor okHttpResultInterceptor(FeignResultCoverRegister feignResultCoverRegister) {</span></span>
<span class="line"><span>returnnewOkHttpResultInterceptor(feignResultCoverRegister);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>public OkHttpCusUrlInterceptor okHttpCusUrlInterceptor() {</span></span>
<span class="line"><span>returnnewOkHttpCusUrlInterceptor();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 这个bean是为了兼容老的一些写法</span></span>
<span class="line"><span>    @Bean(&quot;pgFeignBuild&quot;)</span></span>
<span class="line"><span>    @Primary</span></span>
<span class="line"><span>public Feign.Builder pgFeignBuild(Contract contract,</span></span>
<span class="line"><span>                                      @Qualifier(&quot;feignBuilder&quot;) Feign.Builder builder,</span></span>
<span class="line"><span>                                      @Qualifier(&quot;okHttpFeignClient&quot;) Client okHttpClient,</span></span>
<span class="line"><span>                                      ObjectFactory&lt;HttpMessageConverters&gt; messageConverters,</span></span>
<span class="line"><span>                                      ObjectProvider&lt;HttpMessageConverterCustomizer&gt; customizers,</span></span>
<span class="line"><span>                                      Environment environment) {</span></span>
<span class="line"><span>        String wn = environment.getProperty(&quot;feign.write-nulls&quot;);</span></span>
<span class="line"><span>boolean   writeNulls = StringUtils.hasText(wn) &amp;&amp; boolean  .parseboolean  (wn);</span></span>
<span class="line"><span>// 使用fastjson作为feign的消息转换器</span></span>
<span class="line"><span>        ObjectFactory&lt;HttpMessageConverters&gt; feignObjectFactory = PgFeignUtil.initFeignNewConverters(messageConverters, writeNulls);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>return builder</span></span>
<span class="line"><span>                .client(okHttpClient)</span></span>
<span class="line"><span>                .contract(contract)</span></span>
<span class="line"><span>                .encoder(newSpringEncoder(feignObjectFactory))</span></span>
<span class="line"><span>                .decoder(newSpringDecoder(feignObjectFactory, customizers));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>private void   setEnvironment(@NonNull Environment environment) {</span></span>
<span class="line"><span>        BindResult&lt;PgFeignOkHttpProperties&gt; ret = Binder.get(environment)</span></span>
<span class="line"><span>                .bind(PgFeignOkHttpProperties.PREFIX, PgFeignOkHttpProperties.class);</span></span>
<span class="line"><span>        BindResult&lt;LoadBalancerClientsProperties&gt; blRet = Binder.get(environment)</span></span>
<span class="line"><span>                .bind(&quot;spring.cloud.loadbalancer&quot;, LoadBalancerClientsProperties.class);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>if (ret.get() !=null) {</span></span>
<span class="line"><span>                pgFeignOkHttpProperties = ret.get();</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        } catch (Exception ignore) {}</span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>if (blRet.get() !=null) {</span></span>
<span class="line"><span>                balancerClientsProperties = blRet.get();</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        } catch (Exception ignore) {}</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Configuration(proxyBeanMethods=false)</span></span>
<span class="line"><span>    @ConditionalOnClass(OkHttpClient.class)</span></span>
<span class="line"><span>protectedstaticclassOkHttpFeignConfiguration {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private OkHttpClient okHttpClient;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        @Bean</span></span>
<span class="line"><span>        @ConditionalOnMissingBean(ConnectionPool.class)</span></span>
<span class="line"><span>public ConnectionPool httpClientConnectionPool(FeignHttpClientProperties httpClientProperties,</span></span>
<span class="line"><span>                                                       OkHttpClientConnectionPoolFactory connectionPoolFactory) {</span></span>
<span class="line"><span>int maxTotalConnections = httpClientProperties.getMaxConnections();</span></span>
<span class="line"><span>long  timeToLive = httpClientProperties.getTimeToLive();</span></span>
<span class="line"><span>            TimeUnit ttlUnit = httpClientProperties.getTimeToLiveUnit();</span></span>
<span class="line"><span>return connectionPoolFactory.create(maxTotalConnections, timeToLive, ttlUnit);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        @Bean(&quot;okHttpLoadBalancerClient&quot;)</span></span>
<span class="line"><span>public Client okHttpLoadBalancerClient(OkHttpLogInterceptor okHttpLogInterceptor,</span></span>
<span class="line"><span>                                               OkHttpResultInterceptor okHttpResultInterceptor,</span></span>
<span class="line"><span>                                               OkHttpCusUrlInterceptor okHttpCusUrlInterceptor,</span></span>
<span class="line"><span>                                               LoadBalancerClient loadBalancerClient,</span></span>
<span class="line"><span>                                               LoadBalancerClientFactory loadBalancerClientFactory) {</span></span>
<span class="line"><span>if (this.okHttpClient ==null) {</span></span>
<span class="line"><span>this.okHttpClient =getOkhttp(okHttpLogInterceptor, okHttpResultInterceptor, okHttpCusUrlInterceptor);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>returnnewFeignBlockingLoadBalancerClient(this.okHttpClient, loadBalancerClient, loadBalancerClientFactory);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        @ConditionalOnMissingBean</span></span>
<span class="line"><span>        @Bean</span></span>
<span class="line"><span>public LoadBalancerClientFactory loadBalancerClientFactory(ObjectProvider&lt;List&lt;LoadBalancerClientSpecification&gt;&gt; configurations) {</span></span>
<span class="line"><span>            LoadBalancerClientFactory clientFactory =newLoadBalancerClientFactory(balancerClientsProperties);</span></span>
<span class="line"><span>            clientFactory.setConfigurations(configurations.getIfAvailable(Collections::emptyList));</span></span>
<span class="line"><span>return clientFactory;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        @Bean(&quot;okHttpFeignClient&quot;)</span></span>
<span class="line"><span>//        @ConditionalOnMissingBean(OkHttpClient.class)</span></span>
<span class="line"><span>public OkHttpClient okHttpFeignClient(OkHttpLogInterceptor okHttpLogInterceptor,</span></span>
<span class="line"><span>                                              OkHttpResultInterceptor okHttpResultInterceptor,</span></span>
<span class="line"><span>                                              OkHttpCusUrlInterceptor okHttpCusUrlInterceptor) {</span></span>
<span class="line"><span>if (this.okHttpClient ==null) {</span></span>
<span class="line"><span>this.okHttpClient =getOkhttp(</span></span>
<span class="line"><span>                        okHttpLogInterceptor, okHttpResultInterceptor, okHttpCusUrlInterceptor);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>returnthis.okHttpClient;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private OkHttpClient getOkhttp(OkHttpLogInterceptor okHttpLogInterceptor,</span></span>
<span class="line"><span>                                       OkHttpResultInterceptor okHttpResultInterceptor,</span></span>
<span class="line"><span>                                       OkHttpCusUrlInterceptor okHttpCusUrlInterceptor) {</span></span>
<span class="line"><span>returnnewOkHttpClient(new okhttp3.OkHttpClient.Builder()</span></span>
<span class="line"><span>// 三次握手 + SSL建立耗时</span></span>
<span class="line"><span>                    .connectTimeout(pgFeignOkHttpProperties.getConnectTimeout(), TimeUnit.MILLISECONDS)</span></span>
<span class="line"><span>// 设置读超时</span></span>
<span class="line"><span>                    .readTimeout(pgFeignOkHttpProperties.getReadTimeout(), TimeUnit.MILLISECONDS)</span></span>
<span class="line"><span>// 从发起到结束的总时长</span></span>
<span class="line"><span>                    .callTimeout(pgFeignOkHttpProperties.getCallTimeout(), TimeUnit.MILLISECONDS)</span></span>
<span class="line"><span>// 设置写超时</span></span>
<span class="line"><span>                    .writeTimeout(pgFeignOkHttpProperties.getWriteTimeout(), TimeUnit.MILLISECONDS)</span></span>
<span class="line"><span>                    .sslSocketFactory(SslSocketClient.getSslSocketFactory(), SslSocketClient.getX509TrustManager())</span></span>
<span class="line"><span>                    .hostnameVerifier(SslSocketClient.getHostnameVerifier())</span></span>
<span class="line"><span>// 是否自动重连</span></span>
<span class="line"><span>                    .retryOnConnectionFailure(true)</span></span>
<span class="line"><span>                    .connectionPool(newConnectionPool())</span></span>
<span class="line"><span>                    .addInterceptor(okHttpCusUrlInterceptor)</span></span>
<span class="line"><span>                    .addInterceptor(okHttpLogInterceptor)</span></span>
<span class="line"><span>                    .addInterceptor(okHttpResultInterceptor)</span></span>
<span class="line"><span>// 构建OkHttpClient对象</span></span>
<span class="line"><span>                    .build());</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        @Bean</span></span>
<span class="line"><span>        @Primary</span></span>
<span class="line"><span>        @ConditionalOnBean(LoadBalancerClientFactory.class)</span></span>
<span class="line"><span>        @ConditionalOnMissingBean</span></span>
<span class="line"><span>public LoadBalancerClient blockingLoadBalancerClient(LoadBalancerClientFactory loadBalancerClientFactory) {</span></span>
<span class="line"><span>returnnewBlockingLoadBalancerClient(loadBalancerClientFactory);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    并且在registerBeanDefinitions生命周期中，实现对客户端注解的解析及配置相关解析，</span></span>
<span class="line"><span>最后对bean对象的自定义注入。(URL的解析会根据配置文件feign.gate-mode，是否整理成网关</span></span>
<span class="line"><span>地址)，具体逻辑如下</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.springcloud.feign;</span></span>
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
<span class="line"><span>@Configuration</span></span>
<span class="line"><span>public class  PgFeignClientConfigurationimplementsEnvironmentAware, ResourceLoaderAware,</span></span>
<span class="line"><span>ImportBeanDefinitionRegistrar {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private DefaultListableBeanFactory beanFactory;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final   List&lt;RequestInterceptor&gt; requestInterceptors =new ArrayList&lt;&gt;();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private Contract contract;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private ObjectFactory&lt;HttpMessageConverters&gt; messageConverters;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private ObjectProvider&lt;HttpMessageConverterCustomizer&gt; customizers;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private Client okHttpLoadBalancerClient;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private Client okHttpClient;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private Environment environment;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private ResourceLoader resourceLoader;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>privatestaticfinal List&lt;String&gt; PKG_ARR =new ArrayList&lt;&gt;(Arrays.asList(&quot;**.feign&quot;, &quot;**.api&quot;));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private String centerUrl;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>privateboolean   gateMode;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private OkHttpCusUrlInterceptor okHttpCusUrlInterceptor;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>private void   setResourceLoader(@NonNull ResourceLoader resourceLoader) {</span></span>
<span class="line"><span>this.resourceLoader = resourceLoader;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>private void   setEnvironment(@NonNull Environment environment) {</span></span>
<span class="line"><span>this.environment = environment;</span></span>
<span class="line"><span>initGatewayUrl();</span></span>
<span class="line"><span>        String lbStr = environment.getProperty(&quot;feign.gate-mode&quot;);</span></span>
<span class="line"><span>this.gateMode = StringUtils.hasText(lbStr) &amp;&amp; boolean  .parseboolean  (lbStr);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private void  initGatewayUrl() {</span></span>
<span class="line"><span>this.centerUrl = System.getProperties().getProperty(HttpConst.CLIENT_ADDR_GATEWAY);</span></span>
<span class="line"><span>if (StringUtils.hasText(centerUrl)) {</span></span>
<span class="line"><span>return;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>this.centerUrl = System.getenv(HttpConst.CLIENT_ADDR_GATEWAY);</span></span>
<span class="line"><span>if (StringUtils.hasText(centerUrl)) {</span></span>
<span class="line"><span>return;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>this.centerUrl = environment.getProperty(HttpConst.CLIENT_ADDR_GATEWAY);</span></span>
<span class="line"><span>if (!StringUtils.hasText(centerUrl)) {</span></span>
<span class="line"><span>this.centerUrl =&quot;http://localhost&quot;;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>private void   registerBeanDefinitions(@NonNull AnnotationMetadata importingClassMetadata,</span></span>
<span class="line"><span>                                        @NonNull BeanDefinitionRegistry registry) {</span></span>
<span class="line"><span>        beanFactory = (DefaultListableBeanFactory) registry;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        PgFeignProperties pgFeignProperties = beanFactory.getBean(PgFeignProperties.class);</span></span>
<span class="line"><span>        PKG_ARR.addAll(pgFeignProperties.getScans());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        contract = beanFactory.getBean(Contract.class);</span></span>
<span class="line"><span>        messageConverters = beanFactory.getBeanProvider(HttpMessageConverters.class);</span></span>
<span class="line"><span>        customizers = beanFactory.getBeanProvider(HttpMessageConverterCustomizer.class);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        okHttpLoadBalancerClient = (Client) beanFactory.getBean(&quot;okHttpLoadBalancerClient&quot;);</span></span>
<span class="line"><span>        okHttpClient = (Client) beanFactory.getBean(&quot;okHttpFeignClient&quot;);</span></span>
<span class="line"><span>        okHttpCusUrlInterceptor = beanFactory.getBean(OkHttpCusUrlInterceptor.class);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>String[] interBeanNames = beanFactory.getBeanNamesForType(RequestInterceptor.class);</span></span>
<span class="line"><span>for (String beanName : interBeanNames) {</span></span>
<span class="line"><span>            RequestInterceptor interceptor = (RequestInterceptor) beanFactory.getBean(beanName);</span></span>
<span class="line"><span>            requestInterceptors.add(interceptor);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>registerPgFeignClient();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private void   registerPgFeignClient() {</span></span>
<span class="line"><span>        ClassLoader classLoader = Thread.currentThread().getContextClassLoader();</span></span>
<span class="line"><span>        ClassPathScanningCandidateComponentProvider scanner =getScanner();</span></span>
<span class="line"><span>        scanner.setResourceLoader(this.resourceLoader);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        Set&lt;BeanDefinition&gt; beanDefinitions =new LinkedHashSet&lt;&gt;();</span></span>
<span class="line"><span>for (String pkg : PKG_ARR) {</span></span>
<span class="line"><span>            Set&lt;BeanDefinition&gt; beanDefinitions2 = scanner.findCandidateComponents(pkg);</span></span>
<span class="line"><span>            beanDefinitions.addAll(beanDefinitions2);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>for (BeanDefinition beanDefinition : beanDefinitions) {</span></span>
<span class="line"><span>if (beanDefinition.getBeanClassName() ==null) {</span></span>
<span class="line"><span>continue;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>                beanFactory.getBean(Class.forName(beanDefinition.getBeanClassName()));</span></span>
<span class="line"><span>continue;</span></span>
<span class="line"><span>            } catch (Exception ignored) {</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>                Class&lt;?&gt; aClass = classLoader.loadClass(beanDefinition.getBeanClassName());</span></span>
<span class="line"><span>                PgFeignClient pgFeignClient = aClass.getAnnotation(PgFeignClient.class);</span></span>
<span class="line"><span>if (pgFeignClient ==null) {</span></span>
<span class="line"><span>continue;</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 这里并未实际创建异步客户端，后续考虑升级</span></span>
<span class="line"><span>//                if (pgFeignClient.async()) {</span></span>
<span class="line"><span>//                    AsyncFeign.AsyncBuilder&lt;?&gt; asyncBuilder = beanFactory.getBean(&quot;asyncFeignBuilder&quot;, AsyncFeign.AsyncBuilder.class);</span></span>
<span class="line"><span>//                }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                Feign.Builder relBuild;</span></span>
<span class="line"><span>switch (pgFeignClient.encoder()) {</span></span>
<span class="line"><span>case GSON:</span></span>
<span class="line"><span>                        relBuild =pgFeignGsonBuild();</span></span>
<span class="line"><span>break;</span></span>
<span class="line"><span>case FORM:</span></span>
<span class="line"><span>                        relBuild =pgFeignFormBuild();</span></span>
<span class="line"><span>break;</span></span>
<span class="line"><span>default:</span></span>
<span class="line"><span>                        relBuild =pgFeignBuild();</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                String url;</span></span>
<span class="line"><span>if (StringUtils.hasText(pgFeignClient.url())) {</span></span>
<span class="line"><span>                    url = pgFeignClient.url();</span></span>
<span class="line"><span>if (url.contains(&quot;\${&quot;) &amp;&amp; url.contains(&quot;}&quot;)) {</span></span>
<span class="line"><span>                        url = environment.resolvePlaceholders(pgFeignClient.url());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (url.equals(pgFeignClient.url())) {</span></span>
<span class="line"><span>                            url =getUrlByClientCode(pgFeignClient.clientCode(), pgFeignClient.basePath());</span></span>
<span class="line"><span>                        }</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                } else {</span></span>
<span class="line"><span>                    url =getUrlByClientCode(pgFeignClient.clientCode(), pgFeignClient.basePath());</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 指定</span></span>
<span class="line"><span>if (pgFeignClient.loadBalance()) {</span></span>
<span class="line"><span>                    relBuild.client(okHttpLoadBalancerClient);</span></span>
<span class="line"><span>                } else {</span></span>
<span class="line"><span>                    relBuild.client(okHttpClient);</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 如果检测到地址是个IP，强制非负载方式</span></span>
<span class="line"><span>UrlCheck(relBuild, url);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (!StringUtils.hasText(url)) {</span></span>
<span class="line"><span>                    url =&quot;http://localhost&quot;;</span></span>
<span class="line"><span>                    log.warn(&quot;注意：{}客户端无法匹配具体url地址!&quot;, beanDefinition.getBeanClassName());</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                url = PgFeignUtil.doOptimization(url);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>registerBeanDefinition(beanFactory, beanDefinition.getBeanClassName());</span></span>
<span class="line"><span>initConfiguration(relBuild, pgFeignClient.configuration(), pgFeignClient.clientCode());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                beanFactory.registerSingleton(beanDefinition.getBeanClassName(),</span></span>
<span class="line"><span>                        relBuild.target(aClass, url)</span></span>
<span class="line"><span>                );</span></span>
<span class="line"><span>            } catch (Exception e) {</span></span>
<span class="line"><span>                log.error(&quot;feign初始化异常&quot;, e);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private void  UrlCheck(Feign.Builder relBuild, String url) {</span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>            URI uri = URI.create(url);</span></span>
<span class="line"><span>if (isIp(uri.getHost()) ||&quot;localhost&quot;.equals(uri.getHost())) {</span></span>
<span class="line"><span>                relBuild.client(okHttpClient);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        } catch (Exception ignore) {}</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicstaticboolean  isIp(String addr) {</span></span>
<span class="line"><span>if (addr.length() &lt;7|| addr.length() &gt;15) {</span></span>
<span class="line"><span>returnfalse;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        String rexp =&quot;([1-9]|[1-9]\\\\d|1\\\\d{2}|2[0-4]\\\\d|25[0-5])(\\\\.(\\\\d|[1-9]\\\\d|1\\\\d{2}|2[0-4]\\\\d|25[0-5])){3}&quot;;</span></span>
<span class="line"><span>        Pattern pat = Pattern.compile(rexp);</span></span>
<span class="line"><span>        Matcher mat = pat.matcher(addr);</span></span>
<span class="line"><span>return mat.find();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @SneakyThrows</span></span>
<span class="line"><span>private void  initConfiguration(Feign.Builder relBuild, Class&lt;?&gt;[] configuration, String clientCode) {</span></span>
<span class="line"><span>for (Class&lt;?&gt; clazz : configuration) {</span></span>
<span class="line"><span>for (Method method : clazz.getMethods()) {</span></span>
<span class="line"><span>                Bean bean = AnnotatedElementUtils.findMergedAnnotation(method, Bean.class);</span></span>
<span class="line"><span>if (bean ==null) {</span></span>
<span class="line"><span>continue;</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                Object ret = bean.value().length ==0?</span></span>
<span class="line"><span>                        beanFactory.getBean(method.getName()) :</span></span>
<span class="line"><span>                        beanFactory.getBean(bean.value()[0]);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>pkgFeignBuild(relBuild, method.getReturnType(), ret);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (FeignUrlCusApi.class.isAssignableFrom(method.getReturnType())) {</span></span>
<span class="line"><span>if (StringUtils.hasText(clientCode)) {</span></span>
<span class="line"><span>                        okHttpCusUrlInterceptor.addFeignUrlCusApi(clientCode, (FeignUrlCusApi) ret);</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private void  pkgFeignBuild(Feign.Builder relBuild, Class&lt;?&gt; returnType, Object ret) {</span></span>
<span class="line"><span>if (Encoder.class.isAssignableFrom(returnType)) {</span></span>
<span class="line"><span>            relBuild.encoder((Encoder) ret);</span></span>
<span class="line"><span>return;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>if (Decoder.class.isAssignableFrom(returnType)) {</span></span>
<span class="line"><span>            relBuild.decoder((Decoder) ret);</span></span>
<span class="line"><span>return;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>if (Contract.class.isAssignableFrom(returnType)) {</span></span>
<span class="line"><span>            relBuild.contract((Contract) ret);</span></span>
<span class="line"><span>return;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>if (Client.class.isAssignableFrom(returnType)) {</span></span>
<span class="line"><span>            relBuild.client((Client) ret);</span></span>
<span class="line"><span>return;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>if (Retryer.class.isAssignableFrom(returnType)) {</span></span>
<span class="line"><span>            relBuild.retryer((Retryer) ret);</span></span>
<span class="line"><span>return;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>if (Request.Options.class.isAssignableFrom(returnType)) {</span></span>
<span class="line"><span>            relBuild.options((Request.Options) ret);</span></span>
<span class="line"><span>return;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>if (RequestInterceptor.class.isAssignableFrom(returnType)) {</span></span>
<span class="line"><span>            relBuild.requestInterceptor((RequestInterceptor) ret);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private String getUrlByClientCode(String clientCode, String basePath) {</span></span>
<span class="line"><span>if (StringUtils.hasText(clientCode)) {</span></span>
<span class="line"><span>if (!this.gateMode) {</span></span>
<span class="line"><span>return&quot;http://&quot;+ clientCode + (StringUtils.hasText(basePath) ?&quot;/&quot;+ basePath :&quot;&quot;);</span></span>
<span class="line"><span>            } else {</span></span>
<span class="line"><span>return centerUrl +&quot;/&quot;+ (StringUtils.hasText(basePath) ? basePath : clientCode);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>return StringUtils.hasText(basePath) ? centerUrl +&quot;/&quot;+ basePath : centerUrl;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>protected ClassPathScanningCandidateComponentProvider getScanner() {</span></span>
<span class="line"><span>returnnewClassPathScanningCandidateComponentProvider(false, this.environment) {</span></span>
<span class="line"><span>            @Override</span></span>
<span class="line"><span>protectedboolean  isCandidateComponent(@NonNull MetadataReader metadataReader) {</span></span>
<span class="line"><span>                Optional&lt;String&gt; target = metadataReader.getAnnotationMetadata().getAnnotationTypes().stream().filter(</span></span>
<span class="line"><span>                        sn -&gt; sn.equals(PgFeignClient.class.getName())</span></span>
<span class="line"><span>                ).findAny();</span></span>
<span class="line"><span>return target.isPresent();</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            @Override</span></span>
<span class="line"><span>protectedboolean  isCandidateComponent(@NonNull AnnotatedBeanDefinition beanDefinition) {</span></span>
<span class="line"><span>return beanDefinition.getMetadata().isInterface() &amp;&amp;!beanDefinition.getMetadata().isAnnotation();</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        };</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private void  registerBeanDefinition(DefaultListableBeanFactory beanFactory, String name) {</span></span>
<span class="line"><span>        BeanDefinitionBuilder beanDefinitionBuilder = BeanDefinitionBuilder.genericBeanDefinition(Binding.class);</span></span>
<span class="line"><span>        beanDefinitionBuilder.addPropertyReference(name, name);</span></span>
<span class="line"><span>        BeanDefinition beanDefinition = beanDefinitionBuilder.getRawBeanDefinition();</span></span>
<span class="line"><span>        beanFactory.registerBeanDefinition(name, beanDefinition);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public Feign.Builder pgFeignBuild() {</span></span>
<span class="line"><span>        Feign.Builder builder =getFeignBuildDefault();</span></span>
<span class="line"><span>buildInterceptors(builder);</span></span>
<span class="line"><span>        String wn = environment.getProperty(&quot;feign.write-nulls&quot;);</span></span>
<span class="line"><span>boolean   writeNulls = StringUtils.hasText(wn) &amp;&amp; boolean  .parseboolean  (wn);</span></span>
<span class="line"><span>// 使用fastjson作为feign的消息转换器</span></span>
<span class="line"><span>        ObjectFactory&lt;HttpMessageConverters&gt; feignObjectFactory = PgFeignUtil.initFeignNewConverters(messageConverters, writeNulls);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>return builder</span></span>
<span class="line"><span>                .contract(contract)</span></span>
<span class="line"><span>                .encoder(newSpringEncoder(feignObjectFactory))</span></span>
<span class="line"><span>                .decoder(newSpringDecoder(feignObjectFactory, customizers));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public Feign.Builder pgFeignGsonBuild() {</span></span>
<span class="line"><span>        Feign.Builder builder =getFeignBuildDefault();</span></span>
<span class="line"><span>buildInterceptors(builder);</span></span>
<span class="line"><span>return builder</span></span>
<span class="line"><span>                .contract(contract)</span></span>
<span class="line"><span>                .encoder(newGsonEncoder())</span></span>
<span class="line"><span>                .decoder(newGsonDecoder());</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public Feign.Builder pgFeignFormBuild() {</span></span>
<span class="line"><span>        Feign.Builder builder =getFeignBuildDefault();</span></span>
<span class="line"><span>buildInterceptors(builder);</span></span>
<span class="line"><span>        String wn = environment.getProperty(&quot;feign.write-nulls&quot;);</span></span>
<span class="line"><span>boolean   writeNulls = StringUtils.hasText(wn) &amp;&amp; boolean  .parseboolean  (wn);</span></span>
<span class="line"><span>// 使用fastjson作为feign的消息转换器</span></span>
<span class="line"><span>        ObjectFactory&lt;HttpMessageConverters&gt; feignObjectFactory = PgFeignUtil.initFeignNewConverters(messageConverters, writeNulls);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>return builder</span></span>
<span class="line"><span>                .contract(contract)</span></span>
<span class="line"><span>                .encoder(newSpringFormEncoder(newSpringEncoder(feignObjectFactory)))</span></span>
<span class="line"><span>                .decoder(newSpringDecoder(feignObjectFactory, customizers));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private Feign.Builder getFeignBuildDefault() {</span></span>
<span class="line"><span>// 因为scope为prototype，每次获取bean都会重新创建一个新对象</span></span>
<span class="line"><span>return beanFactory.getBean(&quot;feignBuilder&quot;, Feign.Builder.class);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private void  buildInterceptors(Feign.Builder builder) {</span></span>
<span class="line"><span>// 不直接使用builder.requestInterceptors方法的原因是这个方法会清空原有拦截器</span></span>
<span class="line"><span>for (RequestInterceptor requestInterceptor : requestInterceptors) {</span></span>
<span class="line"><span>            builder.requestInterceptor(requestInterceptor);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    主要给feign客户端配置了各类拦截编码及响应值解析所需缓存（因为feign的回调钩子</span></span>
<span class="line"><span>上下文中无法获取到执行的方法上下文，也就无法知道使用哪个值转换类，所以需要提前缓存好）。</span></span>
<span class="line"><span>主要使用了反射。此时客户端已经生成。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.springcloud.feign;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import com.kingtsoft.pangu.springcloud.feign.annotation.FeignResultClient;</span></span>
<span class="line"><span>import com.kingtsoft.pangu.springcloud.feign.annotation.PgFeignClient;</span></span>
<span class="line"><span>import com.kingtsoft.pangu.springcloud.feign.utils.PgFeignUtil;</span></span>
<span class="line"><span>import org.springframework.beans.BeansException;</span></span>
<span class="line"><span>import org.springframework.context.ApplicationContext;</span></span>
<span class="line"><span>import org.springframework.context.ApplicationContextAware;</span></span>
<span class="line"><span>import org.springframework.core.annotation.AnnotatedElementUtils;</span></span>
<span class="line"><span>import org.springframework.lang.NonNull;</span></span>
<span class="line"><span>import org.springframework.stereotype.Component;</span></span>
<span class="line"><span>import org.springframework.util.StringUtils;</span></span>
<span class="line"><span>import org.springframework.web.bind.annotation.RequestMapping;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import java.lang.reflect.*;</span></span>
<span class="line"><span>import java.net.URI;</span></span>
<span class="line"><span>import java.util.HashMap;</span></span>
<span class="line"><span>import java.util.Map;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Title: &lt;br&gt;</span></span>
<span class="line"><span> * Description: &lt;br&gt;</span></span>
<span class="line"><span> * Company: KingTang &lt;br&gt;</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * @author 金炀</span></span>
<span class="line"><span> * @version 1.0</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>public class  FeignResultCoverRegisterimplementsApplicationContextAware {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final   Map&lt;String, FeignResultCover&gt; feignResultCache =new HashMap&lt;&gt;();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private ApplicationContext applicationContext;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>private void   setApplicationContext(@NonNull ApplicationContext applicationContext) throws BeansException {</span></span>
<span class="line"><span>this.applicationContext = applicationContext;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private void   registerFeignResultCover() {</span></span>
<span class="line"><span>        Map&lt;String, Object&gt; feignResultBeans = applicationContext.getBeansWithAnnotation(PgFeignClient.class);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        feignResultBeans.forEach(</span></span>
<span class="line"><span>                (beanName, bean) -&gt; {</span></span>
<span class="line"><span>if (Proxy.isProxyClass(bean.getClass())) {</span></span>
<span class="line"><span>                        Object obj = Proxy.getInvocationHandler(bean);</span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>                            Field targetField = obj.getClass().getDeclaredField(&quot;target&quot;);</span></span>
<span class="line"><span>                            targetField.setAccessible(true);</span></span>
<span class="line"><span>                            Object target = targetField.get(obj);</span></span>
<span class="line"><span>if (target ==null) {</span></span>
<span class="line"><span>thrownewRuntimeException(&quot;代理 target属性缺失: &quot;+ obj.getClass().getName());</span></span>
<span class="line"><span>                            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                            Field urlField = target.getClass().getDeclaredField(&quot;url&quot;);</span></span>
<span class="line"><span>                            urlField.setAccessible(true);</span></span>
<span class="line"><span>                            String reqUrl = (String) urlField.get(target);</span></span>
<span class="line"><span>if (reqUrl ==null) {</span></span>
<span class="line"><span>                                reqUrl =&quot;&quot;;</span></span>
<span class="line"><span>                            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                            Field typeField = target.getClass().getDeclaredField(&quot;type&quot;);</span></span>
<span class="line"><span>                            typeField.setAccessible(true);</span></span>
<span class="line"><span>                            Class&lt;?&gt; type = (Class&lt;?&gt;) typeField.get(target);</span></span>
<span class="line"><span>if (type ==null) {</span></span>
<span class="line"><span>thrownewRuntimeException(&quot;type属性缺失: &quot;+ target.getClass().getName());</span></span>
<span class="line"><span>                            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                            PgFeignClient client = type.getAnnotation(PgFeignClient.class);</span></span>
<span class="line"><span>if (client !=null&amp;&amp;!StringUtils.hasText(reqUrl)) {</span></span>
<span class="line"><span>                                reqUrl = client.clientCode();</span></span>
<span class="line"><span>                            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                            FeignResultClient parentAnnotation = type.getAnnotation(FeignResultClient.class);</span></span>
<span class="line"><span>                            FeignResultCover parentResultCover =null;</span></span>
<span class="line"><span>if (parentAnnotation !=null) {</span></span>
<span class="line"><span>                                parentResultCover =</span></span>
<span class="line"><span>newFeignResultCover(parentAnnotation.value(), parentAnnotation.coverMethod(), null);</span></span>
<span class="line"><span>                            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>String[] parentUrls =getMethodUrl(type);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Method[] methods = type.getDeclaredMethods();</span></span>
<span class="line"><span>for (Method method : methods) {</span></span>
<span class="line"><span>                                FeignResultClient annotation = method.getAnnotation(FeignResultClient.class);</span></span>
<span class="line"><span>                                FeignResultCover resultCover;</span></span>
<span class="line"><span>                                String postfix;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (annotation !=null) {</span></span>
<span class="line"><span>                                    postfix = annotation.postfix();</span></span>
<span class="line"><span>                                    resultCover =newFeignResultCover(</span></span>
<span class="line"><span>                                            annotation.value(), annotation.coverMethod(), method.getReturnType());</span></span>
<span class="line"><span>                                } else {</span></span>
<span class="line"><span>                                    postfix =&quot;&quot;;</span></span>
<span class="line"><span>if (parentResultCover ==null) {</span></span>
<span class="line"><span>continue;</span></span>
<span class="line"><span>                                    }</span></span>
<span class="line"><span>                                    resultCover =newFeignResultCover(</span></span>
<span class="line"><span>                                            parentResultCover.getCoverClazz(),</span></span>
<span class="line"><span>                                            parentResultCover.getCoverMethod(),</span></span>
<span class="line"><span>                                            method.getReturnType());</span></span>
<span class="line"><span>                                }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>String[] urls =getMethodUrl(method);</span></span>
<span class="line"><span>if (method.getParameterTypes().length !=0&amp;&amp; method.getParameterTypes()[0].equals(URI.class)) {</span></span>
<span class="line"><span>if (urls !=null) {</span></span>
<span class="line"><span>for (String url : urls) {</span></span>
<span class="line"><span>                                            feignResultCache.put(PgFeignUtil.doOptimization(&quot;**/&quot;+ url + postfix), resultCover);</span></span>
<span class="line"><span>                                        }</span></span>
<span class="line"><span>                                    } else {</span></span>
<span class="line"><span>                                        feignResultCache.put(PgFeignUtil.doOptimization(&quot;**/&quot;+ postfix), resultCover);</span></span>
<span class="line"><span>                                    }</span></span>
<span class="line"><span>                                } else {</span></span>
<span class="line"><span>if (parentUrls ==null|| parentUrls.length ==0) {</span></span>
<span class="line"><span>if (urls !=null) {</span></span>
<span class="line"><span>for (String url : urls) {</span></span>
<span class="line"><span>                                                feignResultCache.put(PgFeignUtil.doOptimization(reqUrl + url + postfix), resultCover);</span></span>
<span class="line"><span>                                            }</span></span>
<span class="line"><span>                                        }</span></span>
<span class="line"><span>                                    } else {</span></span>
<span class="line"><span>for (String parentUrl : parentUrls) {</span></span>
<span class="line"><span>if (urls !=null) {</span></span>
<span class="line"><span>for (String url : urls) {</span></span>
<span class="line"><span>                                                    feignResultCache.put(PgFeignUtil.doOptimization(reqUrl + parentUrl + url + postfix), resultCover);</span></span>
<span class="line"><span>                                                }</span></span>
<span class="line"><span>                                            } else {</span></span>
<span class="line"><span>                                                feignResultCache.put(PgFeignUtil.doOptimization(reqUrl + parentUrl + postfix), resultCover);</span></span>
<span class="line"><span>                                            }</span></span>
<span class="line"><span>                                        }</span></span>
<span class="line"><span>                                    }</span></span>
<span class="line"><span>                                }</span></span>
<span class="line"><span>                            }</span></span>
<span class="line"><span>                        } catch (Exception e) {</span></span>
<span class="line"><span>                            e.printStackTrace();</span></span>
<span class="line"><span>                        }</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>        );</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public Map&lt;String, FeignResultCover&gt; getFeignResultCache() {</span></span>
<span class="line"><span>returnthis.feignResultCache;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>privateString[] getMethodUrl(AnnotatedElement element) {</span></span>
<span class="line"><span>        RequestMapping requestMapping = AnnotatedElementUtils.findMergedAnnotation(element, RequestMapping.class);</span></span>
<span class="line"><span>if (requestMapping !=null) {</span></span>
<span class="line"><span>return requestMapping.value();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>returnnull;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    通过缓存，加入了自动对jsonresult的数据解析及内容判定，在调用及定义的时候可以直接定义</span></span>
<span class="line"><span>结构体data内的数据，不需要每次都写显示的代码，对内容进行解析。当然并不是所有接口都一定需要</span></span>
<span class="line"><span>解析结构体，所以需要一个FeignResultClient注解，标记此类客户端(不同结构体的解析器是可以</span></span>
<span class="line"><span>自定义的，并配置到FeignResultClient中)。拦截器解析如下：</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>@Override</span></span>
<span class="line"><span>    @NonNull</span></span>
<span class="line"><span>public Response intercept(Chain chain) throws IOException {</span></span>
<span class="line"><span>//这个chain里面包含了request和response，所以你要什么都可以从这里拿</span></span>
<span class="line"><span>        Request request = chain.request();</span></span>
<span class="line"><span>//请求发起的时间</span></span>
<span class="line"><span>        Response response = chain.proceed(request);</span></span>
<span class="line"><span>if (response.code() &gt;=400) {</span></span>
<span class="line"><span>            String msg = StringUtils.hasText(response.message()) ?</span></span>
<span class="line"><span>                    response.message() :</span></span>
<span class="line"><span>                    (response.body() ==null?&quot;&quot;: response.body().string());</span></span>
<span class="line"><span>if (log.isDebugEnabled()) {</span></span>
<span class="line"><span>                log.debug(&quot;code: {} msg: {}&quot;, response.code(), msg);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>thrownewTipException(response.code(), msg);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        ResponseBody body = response.body();</span></span>
<span class="line"><span>if (body ==null) {</span></span>
<span class="line"><span>return response;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        FeignResultCover resultCover =getFeignResultCover(request.url().toString());</span></span>
<span class="line"><span>if (resultCover ==null) {</span></span>
<span class="line"><span>return response;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        String ret = body.string();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        Class&lt;?&gt; clazz = resultCover.getCoverClazz();</span></span>
<span class="line"><span>        Method method;</span></span>
<span class="line"><span>        Object obj;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>            method = clazz.getMethod(resultCover.getCoverMethod(), Object.class);</span></span>
<span class="line"><span>            obj = method.invoke(clazz.getDeclaredConstructor().newInstance(), ret);</span></span>
<span class="line"><span>        } catch (InvocationTargetException e) {</span></span>
<span class="line"><span>if (log.isDebugEnabled()) {</span></span>
<span class="line"><span>                e.printStackTrace();</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            Throwable exception = e.getTargetException();</span></span>
<span class="line"><span>if (exception instanceof TipException) {</span></span>
<span class="line"><span>throw (TipException) exception;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>thrownewTipException(e.toString());</span></span>
<span class="line"><span>        } catch (NoSuchMethodException | IllegalAccessException | InstantiationException e) {</span></span>
<span class="line"><span>if (log.isDebugEnabled()) {</span></span>
<span class="line"><span>                e.printStackTrace();</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>thrownewTipException(e.toString());</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        ResponseBody bodyNew;</span></span>
<span class="line"><span>        String bkObj;</span></span>
<span class="line"><span>if (obj ==null) {</span></span>
<span class="line"><span>            bkObj =&quot;null&quot;;</span></span>
<span class="line"><span>        } elseif (obj.getClass().equals(String.class)) {</span></span>
<span class="line"><span>// 会使用消息转换器切换回来</span></span>
<span class="line"><span>            bkObj = JSON.toJSONString(obj);</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            bkObj = JSON.toJSONString(obj);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        bodyNew = ResponseBody.create(body.contentType(), bkObj);</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>return response.newBuilder().body(bodyNew).build();</span></span>
<span class="line"><span>    }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    支持服务自定义代码返回地址（用于三方，可能需要数据库动态实时获取），原理是利用拦截器</span></span>
<span class="line"><span>对request进行地址截取并填充新数据。业务端实现FeignUrlCusApi接口，重写方法就行。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>public class  OkHttpCusUrlInterceptorimplementsInterceptor {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final   Map&lt;String, FeignUrlCusApi&gt; urlCusApis =new LinkedHashMap&lt;&gt;();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private void   addFeignUrlCusApi(String serviceId, FeignUrlCusApi feignUrlCusApi) {</span></span>
<span class="line"><span>this.urlCusApis.put(serviceId, feignUrlCusApi);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @NonNull</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>public Response intercept(@NonNull Chain chain) throws IOException {</span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>            String path = chain.request().url().encodedPath();</span></span>
<span class="line"><span>            Request request = chain.request();</span></span>
<span class="line"><span>            FeignUrlCusApi urlCusApi = urlCusApis.get(request.url().host());</span></span>
<span class="line"><span>if (urlCusApi ==null) {</span></span>
<span class="line"><span>return chain.proceed(request);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            String url = urlCusApi.getUrl();</span></span>
<span class="line"><span>if (!StringUtils.hasText(url)) {</span></span>
<span class="line"><span>return chain.proceed(request);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            HttpUrl httpUrl = Objects.requireNonNull(request.url().newBuilder(url + path))</span></span>
<span class="line"><span>                    .query(request.url().query())</span></span>
<span class="line"><span>                    .encodedQuery(request.url().encodedQuery())</span></span>
<span class="line"><span>                    .fragment(request.url().fragment())</span></span>
<span class="line"><span>                    .encodedFragment(request.url().encodedFragment())</span></span>
<span class="line"><span>                    .build();</span></span>
<span class="line"><span>return chain.proceed(request.newBuilder().url(httpUrl).build());</span></span>
<span class="line"><span>        } catch (Exception e) {</span></span>
<span class="line"><span>            log.error(e.toString());</span></span>
<span class="line"><span>return chain.proceed(chain.request());</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>Feign-java调用兼容</span></span>
<span class="line"><span>    添加了feign API的spring bean判断，若当前接口中存在对应的实现，将不会对此接口进行</span></span>
<span class="line"><span>feign客户端的代理生成，常规的接口调用将变成进程内的直接调用【自然可以保持直接的事务一致】。</span></span>
<span class="line"><span>若不存在实现，则接口就会执行注解所示的feign调用。这个时候就会需要使用分布式事务。 接口所处</span></span>
<span class="line"><span>目录要么包名带feign，要么带api关键字</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="http://pangu.kingtsoft.com/pangu-facade/assets/image1.8ca381d0.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>负载均衡</span></span>
<span class="line"><span>    回到自动化配置类初始化内容FeignAutoConfiguration</span></span>
<span class="line"><span>    可以看到配置了</span></span>
<span class="line"><span>@AutoConfigureAfter(name = {&quot;com.kingtsoft.pangu.springcloud.nacos.NacosAutoConfiguration&quot;})，</span></span>
<span class="line"><span>    主要是结合nacos模块，由于需要引入自定义的loadbalance模块进行堵在均衡自定义算法执行。</span></span>
<span class="line"><span>所以需要在NacosAutoConfiguration配置负载客户端之后加载，因为是字符串引入，所以两个</span></span>
<span class="line"><span>模块不是强耦合的，如果没有LoadBalancerClientFactory 中的configurations只是没有</span></span>
<span class="line"><span>了自定义的负载实现，会走默认。NacosAutoConfiguration先执行就是为了让</span></span>
<span class="line"><span>LoadBalancerClientFactory可以提前往configurations注入自定义的实现。okHttp的负</span></span>
<span class="line"><span>载客户端这里直接默认使用了BlockingLoadBalancerClient，LoadBalancerClientFactory</span></span>
<span class="line"><span>的初始都参考源码内容。并且开放了集群标记配置，这样在没有网关的情况下，feign也能独立完成</span></span>
<span class="line"><span>流量的引导。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,38)]))}const c=s(l,[["render",p],["__file","盘古-security.html.vue"]]),d=JSON.parse('{"path":"/%E7%9B%98%E5%8F%A4/%E7%BB%84%E4%BB%B6%E4%BB%8B%E7%BB%8D/%E7%9B%98%E5%8F%A4-security.html","title":"Feign模块","lang":"zh-CN","frontmatter":{"description":"Feign模块 如何使用 引用如下模块 xml java java 注解介绍 java 技术原理 java java java java java java image.pngimage.png","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/%E7%9B%98%E5%8F%A4/%E7%BB%84%E4%BB%B6%E4%BB%8B%E7%BB%8D/%E7%9B%98%E5%8F%A4-security.html"}],["meta",{"property":"og:title","content":"Feign模块"}],["meta",{"property":"og:description","content":"Feign模块 如何使用 引用如下模块 xml java java 注解介绍 java 技术原理 java java java java java java image.pngimage.png"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"http://pangu.kingtsoft.com/pangu-facade/assets/image1.8ca381d0.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-18T07:25:41.000Z"}],["meta",{"property":"article:author","content":"Cotton Eye Joe"}],["meta",{"property":"article:modified_time","content":"2024-11-18T07:25:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Feign模块\\",\\"image\\":[\\"http://pangu.kingtsoft.com/pangu-facade/assets/image1.8ca381d0.png\\"],\\"dateModified\\":\\"2024-11-18T07:25:41.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cotton Eye Joe\\",\\"url\\":\\"https://github.com/ToDreamr\\"}]}"]]},"headers":[],"git":{"createdTime":1731914741000,"updatedTime":1731914741000,"contributors":[{"name":"九歌天上有","email":"aruixrain@gmail.com","commits":1}]},"readingTime":{"minutes":11.45,"words":3434},"filePathRelative":"盘古/组件介绍/盘古-security.md","localizedDate":"2024年11月18日","excerpt":"","autoDesc":true}');export{c as comp,d as data};
