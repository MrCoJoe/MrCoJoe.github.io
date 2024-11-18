import{_ as n,o as a,c as i,d as e}from"./app-Cj6OPNEL.js";const l={};function p(d,s){return a(),i("div",null,s[0]||(s[0]=[e(`<h1 id="plug组件" tabindex="-1"><a class="header-anchor" href="#plug组件"><span>plug组件</span></a></h1><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>设计目的是应对如果存在一个需求，是某个医院特有的，需要在原始公用业务代码上无感知做出调整。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><blockquote><h4 id="如何使用" tabindex="-1"><a class="header-anchor" href="#如何使用"><span>如何使用</span></a></h4></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>业务层引入如下包内容</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>xml</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>    &lt;groupId&gt;com.kingtsoft.pangu&lt;/groupId&gt;</span></span>
<span class="line"><span>    &lt;artifactId&gt;pangu-spring-plug&lt;/artifactId&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>新建一个Aspect 用来增强需要替换的类</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.kingwise.sys.hos.lhl.biz.config;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import org.aspectj.lang.JoinPoint;</span></span>
<span class="line"><span>import org.aspectj.lang.annotation.Aspect;</span></span>
<span class="line"><span>import org.aspectj.lang.annotation.Before;</span></span>
<span class="line"><span>import org.aspectj.lang.annotation.Pointcut;</span></span>
<span class="line"><span>import org.springframework.stereotype.Component;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Title: &lt;br&gt;</span></span>
<span class="line"><span> * Description: &lt;br&gt;</span></span>
<span class="line"><span> * Company: KingTang &lt;br&gt;</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * @author 金炀</span></span>
<span class="line"><span> * @version 1.0</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@Aspect</span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>public class  PluginAspect {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Pointcut(&quot;execution(public * com.kingtsoft.kingwise.sys.hos.biz.service..*.*(..))&quot;)</span></span>
<span class="line"><span>private void   plugin() {</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Before(&quot;plugin()&quot;)</span></span>
<span class="line"><span>private void   doBefore(JoinPoint joinPoint) {</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    业务类上加上注解@PlugTo，参数传入需要复写的内容。覆盖规则为，方法名+返回类型+入参类型</span></span>
<span class="line"><span>全一致，这样TestCallService中的方法就会动态替换TestService下的同方法。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>@PlugTo(TestService.class)</span></span>
<span class="line"><span>@Service</span></span>
<span class="line"><span>public class  TestCallService {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 覆盖的方法</span></span>
<span class="line"><span>    @DSTransactional</span></span>
<span class="line"><span>private void   testTran() {</span></span>
<span class="line"><span>// 覆盖内容</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><h4 id="技术原理" tabindex="-1"><a class="header-anchor" href="#技术原理"><span>技术原理</span></a></h4></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>首先会自动化配置中会初始化PanguPlugTool 及 PlugMethodInterceptor拦截器</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.spring.plug;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import org.springframework.context.annotation.Bean;</span></span>
<span class="line"><span>import org.springframework.context.annotation.Configuration;</span></span>
<span class="line"><span>import org.springframework.context.annotation.Import;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Title: &lt;br&gt;</span></span>
<span class="line"><span> * Description: &lt;br&gt;</span></span>
<span class="line"><span> * Company: KingTang &lt;br&gt;</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * @author 金炀</span></span>
<span class="line"><span> * @version 1.0</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@Import(StartupPlugConfig.class)</span></span>
<span class="line"><span>@Configuration</span></span>
<span class="line"><span>public class  PlugAutoConfiguration {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>public PanguPlugTool panguPlugTool() {</span></span>
<span class="line"><span>returnnewPanguPlugTool();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>public PlugMethodInterceptor plugMethodInterceptor(PanguPlugTool panguPlugTool) {</span></span>
<span class="line"><span>returnnewPlugMethodInterceptor(panguPlugTool);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    然后会发现导入了一个StartupPlugConfig，会发现这个类主要是在应用准备完成后处理的。</span></span>
<span class="line"><span>首先List&lt;PlugPojo&gt; plugPojos = plugTool.initPlug();获取织入信息。然后执行</span></span>
<span class="line"><span>plugTool.registerAdvice(plugPojos);进行增强注册。</span></span>
<span class="line"><span>（这里为什么不直接在plugTool内部一次性处理完，是为了给以后预留外部附加功能添加的口子）</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.spring.plug;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import org.springframework.boot.ApplicationArguments;</span></span>
<span class="line"><span>import org.springframework.boot.ApplicationRunner;</span></span>
<span class="line"><span>import org.springframework.context.annotation.Configuration;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import java.util.List;</span></span>
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
<span class="line"><span>public class  StartupPlugConfigimplementsApplicationRunner {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final   PanguPlugTool plugTool;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicStartupPlugConfig(PanguPlugTool plugTool) {</span></span>
<span class="line"><span>this.plugTool = plugTool;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>private void   run(ApplicationArguments args) {</span></span>
<span class="line"><span>        List&lt;PlugPojo&gt; plugPojos = plugTool.initPlug();</span></span>
<span class="line"><span>        plugTool.setPlugPojoList(plugPojos);</span></span>
<span class="line"><span>        plugTool.registerAdvice(plugPojos);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>PanguPlugTool工具</span></span>
<span class="line"><span>    这里看initPlug方法，目的是为了将所有标记@PlugTo的bean收集起来，并转换为结构化数据PlugPojo缓存，</span></span>
<span class="line"><span>主要是确定织入类与被织入类。然后就会去通过registerAdvice去注册。这里会去把原始bean获取出来，然后进行</span></span>
<span class="line"><span>Advised advised = (Advised) bean;转换，添加@Aspe进行扫描增强原始类就是为了这个，不然是无法转换的。</span></span>
<span class="line"><span>然后通过Advice advice = applicationContext.getBean(PlugMethodInterceptor.class); </span></span>
<span class="line"><span>获取需要织入的对象（实现了MethodInterceptor的对象）。</span></span>
<span class="line"><span>最后通过 advised.addAdvice(advice); 把织入对象放入被织入对象。这样在执行原始方法之前就会进入此织</span></span>
<span class="line"><span>入对象的invoke方法。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.spring.plug;</span></span>
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
<span class="line"><span>public class  PanguPlugToolimplementsApplicationContextAware {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private ApplicationContext applicationContext;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>private void   setApplicationContext(ApplicationContext applicationContext) throws BeansException {</span></span>
<span class="line"><span>this.applicationContext = applicationContext;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private List&lt;PlugPojo&gt; plugPojoList;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public List&lt;PlugPojo&gt; getPlugPojoList() {</span></span>
<span class="line"><span>return plugPojoList;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private void   setPlugPojoList(List&lt;PlugPojo&gt; plugPojoList) {</span></span>
<span class="line"><span>this.plugPojoList = plugPojoList;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public List&lt;PlugPojo&gt; initPlug() {</span></span>
<span class="line"><span>        List&lt;PlugPojo&gt; plugList =new ArrayList&lt;&gt;();</span></span>
<span class="line"><span>for (String beanDefinitionName : applicationContext.getBeanDefinitionNames()) {</span></span>
<span class="line"><span>            Object bean = applicationContext.getBean(beanDefinitionName);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            PlugTo plugTo = AnnotationUtils.findAnnotation(bean.getClass(), PlugTo.class);</span></span>
<span class="line"><span>if (plugTo ==null) {</span></span>
<span class="line"><span>continue;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            PlugPojo plugPojo =newPlugPojo();</span></span>
<span class="line"><span>            plugPojo.setAdviceClass(bean.getClass());</span></span>
<span class="line"><span>            plugPojo.setAdvisedClass(plugTo.value());</span></span>
<span class="line"><span>            plugList.add(plugPojo);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>return plugList;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private void   registerAdvice(List&lt;PlugPojo&gt; plugList) {</span></span>
<span class="line"><span>for (PlugPojo plugPojo : plugList) {</span></span>
<span class="line"><span>if (plugPojo.getAdvisedClass() ==null) {</span></span>
<span class="line"><span>continue;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            Object bean = applicationContext.getBean(plugPojo.getAdvisedClass());</span></span>
<span class="line"><span>if (bean ==this||!(bean instanceof Advised)) {</span></span>
<span class="line"><span>continue;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            Advised advised = (Advised) bean;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>                Advice advice = applicationContext.getBean(PlugMethodInterceptor.class);</span></span>
<span class="line"><span>                advised.addAdvice(advice);</span></span>
<span class="line"><span>            } catch (Exception e) {</span></span>
<span class="line"><span>                e.printStackTrace();</span></span>
<span class="line"><span>thrownewRuntimeException(&quot;插件激活失败！&quot;+ plugPojo.getAdvisedClass().getName());</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    然后我们来看PlugMethodInterceptor, 其实内部就是注入了PanguPlugTool，调用了doBeanInvoke方法</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.spring.plug;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import lombok.AllArgsConstructor;</span></span>
<span class="line"><span>import org.aopalliance.intercept.MethodInterceptor;</span></span>
<span class="line"><span>import org.aopalliance.intercept.MethodInvocation;</span></span>
<span class="line"><span>import org.springframework.stereotype.Component;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import java.util.List;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Title: &lt;br&gt;</span></span>
<span class="line"><span> * Description: &lt;br&gt;</span></span>
<span class="line"><span> * Company: KingTang &lt;br&gt;</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * @author 金炀</span></span>
<span class="line"><span> * @version 1.0</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@AllArgsConstructor</span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>public class  PlugMethodInterceptorimplementsMethodInterceptor {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final   PanguPlugTool panguPlugTool;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>public Object invoke(MethodInvocation invocation) throws Throwable {</span></span>
<span class="line"><span>return panguPlugTool.doBeanInvoke(invocation);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>来看com.kingtsoft.pangu.spring.plug.PanguPlugTool.doBeanInvoke</span></span>
<span class="line"><span>    这里是在实际执行方法时候进入的。methodInvocation.proceed();是执行了原始方法，</span></span>
<span class="line"><span>在发现覆盖类与被覆盖类一样或者缓存数据无法匹配时，则默认执行了原始方法。</span></span>
<span class="line"><span>然后匹配List&lt;PlugPojo&gt;这个缓存对象内的数据，没匹配自然也就默认执行原始方法。然后正常</span></span>
<span class="line"><span>情况下的可以获取覆盖bean的对象。然后根据出参入参加方法名匹配原始方法所对应的覆盖方法。</span></span>
<span class="line"><span>没找到自然也一样执行原始方法，匹配到了这里就会反射执行方法。并且跳过原始的方法。这里用到</span></span>
<span class="line"><span>了bean反射，所有执行可以保持spring的上下文。这样就可以无感知替换原始方法。</span></span>
<span class="line"><span>(使得新方法可以进行动态织入，以后需要改动的内容要抓住一个“变”来灵活抽取，最好抽取后额外</span></span>
<span class="line"><span>加个标记，例如特定方法名)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>public Object doBeanInvoke(MethodInvocation methodInvocation) throws Throwable {</span></span>
<span class="line"><span>    List&lt;PlugPojo&gt; plugPojos =getPlugPojoList();</span></span>
<span class="line"><span>if (methodInvocation.getThis() ==null|| CollectionUtils.isEmpty(plugPojos)) {</span></span>
<span class="line"><span>return methodInvocation.proceed();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    Optional&lt;PlugPojo&gt; plugPojo = plugPojos.stream().filter(</span></span>
<span class="line"><span>        plug -&gt; plug.getAdvisedClass().equals(methodInvocation.getThis().getClass())</span></span>
<span class="line"><span>    ).findAny();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (plugPojo.isEmpty()) {</span></span>
<span class="line"><span>return methodInvocation.proceed();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    Class&lt;?&gt; beanClass = plugPojo.get().getAdviceClass();</span></span>
<span class="line"><span>    Object bean = applicationContext.getBean(beanClass);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    Optional&lt;Method&gt; method = Arrays.stream(beanClass.getMethods()).filter(</span></span>
<span class="line"><span>        m -&gt;checkMethod(m, methodInvocation.getMethod())</span></span>
<span class="line"><span>    ).findAny();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (method.isPresent()) {</span></span>
<span class="line"><span>        log.info(&quot;代码覆写:&quot;+ method.get().getName());</span></span>
<span class="line"><span>return method.get().invoke(bean, methodInvocation.getArguments());</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>return methodInvocation.proceed();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>privateboolean  checkMethod(Method method, Method tarMethod) {</span></span>
<span class="line"><span>if (!method.getName().equals(tarMethod.getName())) {</span></span>
<span class="line"><span>returnfalse;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (method.getParameterCount() != tarMethod.getParameterCount()) {</span></span>
<span class="line"><span>returnfalse;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (!method.getReturnType().equals(tarMethod.getReturnType())) {</span></span>
<span class="line"><span>returnfalse;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>for (int i =0; i &lt; method.getParameterTypes().length; i++) {</span></span>
<span class="line"><span>if (!method.getParameterTypes()[i].equals(tarMethod.getParameterTypes()[i])) {</span></span>
<span class="line"><span>returnfalse;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>returntrue;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28)]))}const c=n(l,[["render",p],["__file","plug组件.html.vue"]]),r=JSON.parse('{"path":"/%E7%9B%98%E5%8F%A4/%E7%BB%84%E4%BB%B6%E4%BB%8B%E7%BB%8D/plug%E7%BB%84%E4%BB%B6.html","title":"plug组件","lang":"zh-CN","frontmatter":{"description":"plug组件 如何使用 xml java java 技术原理 java java java java java","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/%E7%9B%98%E5%8F%A4/%E7%BB%84%E4%BB%B6%E4%BB%8B%E7%BB%8D/plug%E7%BB%84%E4%BB%B6.html"}],["meta",{"property":"og:title","content":"plug组件"}],["meta",{"property":"og:description","content":"plug组件 如何使用 xml java java 技术原理 java java java java java"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-18T07:25:41.000Z"}],["meta",{"property":"article:author","content":"Cotton Eye Joe"}],["meta",{"property":"article:modified_time","content":"2024-11-18T07:25:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"plug组件\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-18T07:25:41.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cotton Eye Joe\\",\\"url\\":\\"https://github.com/ToDreamr\\"}]}"]]},"headers":[],"git":{"createdTime":1731914741000,"updatedTime":1731914741000,"contributors":[{"name":"九歌天上有","email":"aruixrain@gmail.com","commits":1}]},"readingTime":{"minutes":3.9,"words":1170},"filePathRelative":"盘古/组件介绍/plug组件.md","localizedDate":"2024年11月18日","excerpt":"","autoDesc":true}');export{c as comp,r as data};
