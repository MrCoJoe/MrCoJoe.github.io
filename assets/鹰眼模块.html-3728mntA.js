import{_ as s,o as a,c as e,d as i}from"./app-CA6hDfjR.js";const l={};function p(t,n){return a(),e("div",null,n[0]||(n[0]=[i(`<h1 id="鹰眼模块" tabindex="-1"><a class="header-anchor" href="#鹰眼模块"><span>鹰眼模块</span></a></h1><blockquote><h4 id="如何使用" tabindex="-1"><a class="header-anchor" href="#如何使用"><span>如何使用</span></a></h4></blockquote><p><strong>日志</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    引用pangu-hawkeye-log模块下的任意一个模块，例如pangu-hawkeye-log4j2-grpc,</span></span>
<span class="line"><span>带GRPC后缀的为分布式追踪集成模块，如果没配追踪将作为普通日志模块使用。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>xml</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>  &lt;groupId&gt;com.kingtsoft.pangu&lt;/groupId&gt;</span></span>
<span class="line"><span>  &lt;artifactId&gt;pangu-hawkeye-log4j2-grpc&lt;/artifactId&gt;</span></span>
<span class="line"><span>  &lt;version&gt;\${pangu.version}&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>度量</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    引用pangu-hawkeye-metrics-micrometer模块</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>xml</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>  &lt;groupId&gt;com.kingtsoft.pangu&lt;/groupId&gt;</span></span>
<span class="line"><span>  &lt;artifactId&gt;pangu-hawkeye-metrics-micrometer&lt;/artifactId&gt;</span></span>
<span class="line"><span>  &lt;version&gt;\${pangu.version}&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>追踪</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    引用pangu-hawkeye-trace-component模块</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>xml</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>  &lt;groupId&gt;com.kingtsoft.pangu&lt;/groupId&gt;</span></span>
<span class="line"><span>  &lt;artifactId&gt;pangu-hawkeye-trace-component&lt;/artifactId&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>方式 1（存在代码侵入性）</span></span>
<span class="line"><span>    在方法上添加@PanguTrace注解</span></span>
<span class="line"><span>方式 2（无代码侵入性）</span></span>
<span class="line"><span>    resource下新建配置文件 META-INF/pg-agent.json，配置如下</span></span>
<span class="line"><span>    type：类所在字符串匹配</span></span>
<span class="line"><span>    method：方法匹配</span></span>
<span class="line"><span>    内部使用的String.matches(String regex)的正则表达式语法</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>json</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>&quot;type&quot;: [</span></span>
<span class="line"><span>&quot;com.kingtsoft.pangu.frame.(.*).test.controller.*&quot;,</span></span>
<span class="line"><span>&quot;com.kingtsoft.pangu.frame.*.test.service.*&quot;,</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>&quot;method&quot;: [</span></span>
<span class="line"><span>&quot;com.kingtsoft.pangu.frame.*.controller.*&quot;,</span></span>
<span class="line"><span>&quot;testLog&quot;,</span></span>
<span class="line"><span>&quot;testCall&quot;,</span></span>
<span class="line"><span>// 下面可以模糊匹配 doSomeItems</span></span>
<span class="line"><span>&quot;(.*)Some(.*)&quot;</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><h4 id="技术原理" tabindex="-1"><a class="header-anchor" href="#技术原理"><span>技术原理</span></a></h4></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    因为pangu的日志模块内置了日志配置文件，用于统一日子格式及内容。所以只需要直接引用</span></span>
<span class="line"><span>即可，而GRPC部分使用了skywalking，日志内会根据跟踪链路进行日志切片额外存储到ES。</span></span>
<span class="line"><span>    度量是直接采用了metrics-micrometer组件，因为pangu内置资源全识别去重的特性，所</span></span>
<span class="line"><span>以引用放可以不加任何配置就开启度量采集。</span></span>
<span class="line"><span>    全链路的追踪使用了skywalking模块，pangu内置配置了一个javaagent的插件，并且使用</span></span>
<span class="line"><span>component模块让业务依赖，对节点进行标识，然后进行链路追踪。（可根据后续业务需求进行拓展</span></span>
<span class="line"><span>这类的追踪模式）</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * Title: &lt;br&gt;</span></span>
<span class="line"><span> * Description: &lt;br&gt;</span></span>
<span class="line"><span> * Company: KingTang &lt;br&gt;</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * @author 金炀</span></span>
<span class="line"><span> * @version 1.0</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public class  CommonMethodInterceptorimplementsInstanceMethodsAroundInterceptor {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final   OfficialComponent KT_COMPONENT =newOfficialComponent(1000, &quot;pangu_trace_zero&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final  long  maxShow =1000_000L;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>private void   beforeMethod(EnhancedInstance objInst, Method method, Object[] allArguments, Class&lt;?&gt;[] argumentsTypes,</span></span>
<span class="line"><span>                             MethodInterceptResult result) {</span></span>
<span class="line"><span>        String name = method.getDeclaringClass().getName() +&quot; &quot;+ method.getName();</span></span>
<span class="line"><span>//创建span</span></span>
<span class="line"><span>        AbstractSpan span = ContextManager.createLocalSpan(name);</span></span>
<span class="line"><span>//设置组件类型</span></span>
<span class="line"><span>        span.setComponent(KT_COMPONENT);</span></span>
<span class="line"><span>//获取参数</span></span>
<span class="line"><span>//        byte[] param = (byte[]) allArguments[0];</span></span>
<span class="line"><span>        String param = JSON.toJSONString(allArguments);</span></span>
<span class="line"><span>if (param.length() &gt;= maxShow) {</span></span>
<span class="line"><span>            param =&quot;数据过大，不显示&quot;;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>//记录span tag</span></span>
<span class="line"><span>newStringTag(&quot;param&quot;).set(span, param);</span></span>
<span class="line"><span>//记录span</span></span>
<span class="line"><span>        SpanLayer.asHttp(span);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>public Object afterMethod(EnhancedInstance objInst, Method method,</span></span>
<span class="line"><span>Object[] allArguments, Class&lt;?&gt;[] argumentsTypes, Object ret) {</span></span>
<span class="line"><span>if (ret !=null) {</span></span>
<span class="line"><span>            AbstractSpan span = ContextManager.activeSpan();</span></span>
<span class="line"><span>/// span.errorOccurred();</span></span>
<span class="line"><span>            String retStr = JSON.toJSONString(ret);</span></span>
<span class="line"><span>if (retStr.length() &gt;= maxShow) {</span></span>
<span class="line"><span>                retStr =&quot;数据过大，不显示&quot;;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>newStringTag(&quot;result&quot;).set(span, retStr);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>//结束span</span></span>
<span class="line"><span>        ContextManager.stopSpan();</span></span>
<span class="line"><span>return ret;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>private void   handleMethodException(EnhancedInstance objInst, Method method, Object[] allArguments,</span></span>
<span class="line"><span>                                      Class&lt;?&gt;[] argumentsTypes, Throwable t) {</span></span>
<span class="line"><span>        AbstractSpan abstractSpan = ContextManager.activeSpan();</span></span>
<span class="line"><span>        abstractSpan.log(t);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * Title: &lt;br&gt;</span></span>
<span class="line"><span> * Description: &lt;br&gt;</span></span>
<span class="line"><span> * Company: KingTang &lt;br&gt;</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * @author 金炀</span></span>
<span class="line"><span> * @version 1.0</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public class  AnnoMethodInstrumentationextendsClassInstanceMethodsEnhancePluginDefine {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>privatestaticfinal String ENHANCE_ANNOTATION =&quot;com.kingtsoft.pangu.hawkeye.trace.component.annotation.PanguTrace&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 禁止使用 *.class.getName() 去获取类名, 建议你使用文本字符串, 这是为了避免 ClassLoader 的问题.</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>privatestaticfinal String INTERCEPT_CLASS =&quot;com.kingtsoft.pangu.hawkeye.trace.agent.CommonMethodInterceptor&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 需要增强哪些类</span></span>
<span class="line"><span>     * byName: 通过类路径+类名, 通过常量指定, 不要用 *.class.getName()</span></span>
<span class="line"><span>     * byClassAnnotationMatch: 类注解匹配, 不支持父类继承注解</span></span>
<span class="line"><span>     * byHierarchyMatch 父类或接口, 在多层继承情况会导致多次拦截, 一般不用</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>protected ClassMatch enhanceClass() {</span></span>
<span class="line"><span>returnbyClassAnnotationMatch(ENHANCE_ANNOTATION);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 需要增强的构造方法切入点</span></span>
<span class="line"><span>     * getConstructorMatcher 构造方法匹配器</span></span>
<span class="line"><span>     * getConstructorInterceptor 构造方法探针插件拦截器</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>publicConstructorInterceptPoint[] getConstructorsInterceptPoints() {</span></span>
<span class="line"><span>returnnull;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 需要增强的实例方法切入点 拦截方法</span></span>
<span class="line"><span>     * InstanceMethodsAroundInterceptor 实例方法</span></span>
<span class="line"><span>     * InstanceConstructorInterceptor 构造方法</span></span>
<span class="line"><span>     * StaticMethodsAroundInterceptor 静态方法</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>publicInstanceMethodsInterceptPoint[] getInstanceMethodsInterceptPoints() {</span></span>
<span class="line"><span>// getMethodsMatcher 拦截的方法</span></span>
<span class="line"><span>// getMethodsInterceptor 方法的拦截器</span></span>
<span class="line"><span>// isOverrideArgs 是否重写参数</span></span>
<span class="line"><span>returnnewInstanceMethodsInterceptPoint[]{</span></span>
<span class="line"><span>newInstanceMethodsInterceptPoint() {</span></span>
<span class="line"><span>                    @Override</span></span>
<span class="line"><span>public ElementMatcher&lt;MethodDescription&gt; getMethodsMatcher() {</span></span>
<span class="line"><span>returnisAnnotatedWith(named(ENHANCE_ANNOTATION));</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                    @Override</span></span>
<span class="line"><span>public String getMethodsInterceptor() {</span></span>
<span class="line"><span>return INTERCEPT_CLASS;</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                    @Override</span></span>
<span class="line"><span>publicboolean  isOverrideArgs() {</span></span>
<span class="line"><span>returnfalse;</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>        };</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23)]))}const r=s(l,[["render",p],["__file","鹰眼模块.html.vue"]]),c=JSON.parse('{"path":"/%E7%9B%98%E5%8F%A4/%E9%B9%B0%E7%9C%BC%E6%A1%86%E6%9E%B6/%E9%B9%B0%E7%9C%BC%E6%A8%A1%E5%9D%97.html","title":"鹰眼模块","lang":"zh-CN","frontmatter":{"description":"鹰眼模块 如何使用 日志 xml 度量 xml 追踪 xml json 技术原理 java java","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/%E7%9B%98%E5%8F%A4/%E9%B9%B0%E7%9C%BC%E6%A1%86%E6%9E%B6/%E9%B9%B0%E7%9C%BC%E6%A8%A1%E5%9D%97.html"}],["meta",{"property":"og:title","content":"鹰眼模块"}],["meta",{"property":"og:description","content":"鹰眼模块 如何使用 日志 xml 度量 xml 追踪 xml json 技术原理 java java"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-18T07:25:41.000Z"}],["meta",{"property":"article:author","content":"Cotton Eye Joe"}],["meta",{"property":"article:modified_time","content":"2024-11-18T07:25:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"鹰眼模块\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-18T07:25:41.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cotton Eye Joe\\",\\"url\\":\\"https://github.com/ToDreamr\\"}]}"]]},"headers":[],"git":{"createdTime":1731914741000,"updatedTime":1731914741000,"contributors":[{"name":"九歌天上有","email":"aruixrain@gmail.com","commits":1}]},"readingTime":{"minutes":2.79,"words":838},"filePathRelative":"盘古/鹰眼框架/鹰眼模块.md","localizedDate":"2024年11月18日","excerpt":"","autoDesc":true}');export{r as comp,c as data};
