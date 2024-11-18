import{_ as s,o as a,c as e,d as i}from"./app-nnBTm0Jw.js";const l={};function p(c,n){return a(),e("div",null,n[0]||(n[0]=[i(`<h1 id="鹰眼-通用链路跟踪模块" tabindex="-1"><a class="header-anchor" href="#鹰眼-通用链路跟踪模块"><span>鹰眼-通用链路跟踪模块</span></a></h1><blockquote><h4 id="如何使用" tabindex="-1"><a class="header-anchor" href="#如何使用"><span>如何使用</span></a></h4></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    获取jar包pangu-hawkeye-trace-simple-agent.jar，并放置某个固定位置，</span></span>
<span class="line"><span>例如/home/kingtsoft-pangu/pangu-hawkeye/，然后启动参数添加</span></span>
<span class="line"><span>-javaagent:/home/kingtsoft-pangu/pangu-hawkeye/pangu-hawkeye-trace-simple-agent.jar</span></span>
<span class="line"><span>-Dpgtrace.kafka.servers=10.1.50.131:9092 -Dpgtrace.kafka.topic=pangu.trace.simple</span></span>
<span class="line"><span>-Dpgtrace.appname=PANGU_FRAME</span></span>
<span class="line"><span>pgtrace.kafka.servers：kafka服务地址，用于传输链路信息，另一端会使用一个服务接收并存储</span></span>
<span class="line"><span>pgtrace.kafka.topic：用于交互的主题信息（目前固定pangu.trace.simple，因为还没有换的必要）</span></span>
<span class="line"><span>pgtrace.appname：当前应用的应用名</span></span>
<span class="line"><span>    在路径src/main/resources/META-INF下新建一个pg-agent.json文件，内容如下，</span></span>
<span class="line"><span>type表示需要增强类的定义，method代表在那些增强类中，符合这些名称的方法。这里内部是通过正则表达式匹配的，</span></span>
<span class="line"><span>实际是使用String.matches(String regex) 这个方法，所以可以根据自己的需求书写正则表达式来匹配。</span></span>
<span class="line"><span>如果type匹配上了，而没写方法规则，则type下的所有方法都会被匹配进去</span></span>
<span class="line"><span>（当然除了一些内置排除的方法，main、hashcode、clone、构造函数等对象通用的）</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>json</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>&quot;type&quot;: [</span></span>
<span class="line"><span>&quot;com.kingtsoft.pangu.frame.(.*).test.controller.*&quot;,</span></span>
<span class="line"><span>&quot;com.kingtsoft.pangu.frame.*.test.service.*&quot;,</span></span>
<span class="line"><span>&quot;com.kingtsoft.pangu.frame.simple.base.web.controller.*&quot;</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>&quot;method&quot;: [</span></span>
<span class="line"><span>&quot;com.kingtsoft.pangu.frame.*.controller.*&quot;,</span></span>
<span class="line"><span>&quot;testData&quot;,</span></span>
<span class="line"><span>&quot;testData22&quot;,</span></span>
<span class="line"><span>&quot;testSeata2&quot;,</span></span>
<span class="line"><span>&quot;testSeata3&quot;,</span></span>
<span class="line"><span>&quot;getUserListByItems&quot;,</span></span>
<span class="line"><span>&quot;testLog&quot;,</span></span>
<span class="line"><span>&quot;testCall&quot;,</span></span>
<span class="line"><span>&quot;(.*)Some(.*)&quot;</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    server运行针对pangu-hawkeye-trace-server.pgr的服务，用来将数据结构化存储到ES</span></span>
<span class="line"><span>    server端配置文件如下</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>yaml</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>spring:</span></span>
<span class="line"><span>	kafka:</span></span>
<span class="line"><span>bootstrap-servers: 10.1.50.131:9092</span></span>
<span class="line"><span>pangu:</span></span>
<span class="line"><span>elasticsearch:</span></span>
<span class="line"><span># ES地址</span></span>
<span class="line"><span>hosts: &#39;10.1.50.63:9200&#39;</span></span>
<span class="line"><span>kafka:</span></span>
<span class="line"><span>servers: \${spring.kafka.bootstrap-servers}</span></span>
<span class="line"><span>retries: 1</span></span>
<span class="line"><span>batch-size: 16384</span></span>
<span class="line"><span>linger: 1</span></span>
<span class="line"><span>buffer-memory: 1024000</span></span>
<span class="line"><span>group-id: bootKafka</span></span>
<span class="line"><span>auto-commit: true</span></span>
<span class="line"><span>commit-interval: 100</span></span>
<span class="line"><span>session-timeout: 15000</span></span>
<span class="line"><span># 需要动态生成的主题信息</span></span>
<span class="line"><span>topics:</span></span>
<span class="line"><span>pangu:</span></span>
<span class="line"><span>name: &#39;pangu.trace.simple&#39;</span></span>
<span class="line"><span>num-partitions: 2</span></span>
<span class="line"><span>replication-factor: 2</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>技术原理</strong></p></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    这里使用了bytebuddy的字节码增强技术，用于在启动的时候直接将代码注入对应的字节码。</span></span>
<span class="line"><span>这里增强的入口是premain方法，首先初始化了kafka相关信息，用于传输信息(注意，这里是不依赖于spring上下文环境的)。</span></span>
<span class="line"><span>这里封装了watchMethod方法，入参第一个是增强器的定义信息类，第二个入参是类的匹配规则，第三个是方法匹配规则，</span></span>
<span class="line"><span>第四个是固定参数，是java增强工具。根据链路规则，这里只接入http常规模式下的链路，包括常规feign，</span></span>
<span class="line"><span>内置了一些非必要方法的排除，instrumentation.addTransformer(getClassFileTransformer());</span></span>
<span class="line"><span>这个代码是为了查看增强后的字节码长什么样，实际线上时候要去除。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.hawkeye.trace.simple;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Title: &lt;br&gt;</span></span>
<span class="line"><span> * Description: &lt;br&gt;</span></span>
<span class="line"><span> * Company: KingTang &lt;br&gt;</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * @author 金炀</span></span>
<span class="line"><span> * @version 1.0</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public class  PgTraceMethodAgent {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>privatestatic JSONObject rules;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicstaticvoidpremain(String agentArgs, Instrumentation instrumentation) {</span></span>
<span class="line"><span>        System.out.println(&quot;基于javaagent链路追踪&quot;);</span></span>
<span class="line"><span>// 初始化消息</span></span>
<span class="line"><span>        PgTraceKafkaUtil.initKafka();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>watchMethod(TraceMethodAdvice.class, buildMatch(), buildMethodMatch(), instrumentation);</span></span>
<span class="line"><span>watchMethod(</span></span>
<span class="line"><span>                TraceFeignAdvice.class,</span></span>
<span class="line"><span>named(&quot;feign.SynchronousMethodHandler&quot;),</span></span>
<span class="line"><span>named(&quot;executeAndDecode&quot;),</span></span>
<span class="line"><span>                instrumentation);</span></span>
<span class="line"><span>watchMethod(</span></span>
<span class="line"><span>                TraceHttpAdvice.class,</span></span>
<span class="line"><span>named(&quot;org.springframework.web.servlet.DispatcherServlet&quot;),</span></span>
<span class="line"><span>named(&quot;doDispatch&quot;),</span></span>
<span class="line"><span>        instrumentation);</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>privatestaticvoidwatchMethod(Class&lt;?&gt; adviceClass,</span></span>
<span class="line"><span>                                    ElementMatcher&lt;?superTypeDescription&gt; typeElementJunction,</span></span>
<span class="line"><span>                                    ElementMatcher&lt;?superMethodDescription&gt; methodElementJunction,</span></span>
<span class="line"><span>                                    Instrumentation instrumentation) {</span></span>
<span class="line"><span>final ByteBuddy byteBuddy =newByteBuddy().with(TypeValidation.of(false));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>new AgentBuilder.Default(byteBuddy)</span></span>
<span class="line"><span>// 忽略掉不增强的类</span></span>
<span class="line"><span>                .ignore(nameStartsWith(&quot;net.bytebuddy.&quot;)</span></span>
<span class="line"><span>                        .or(nameStartsWith(&quot;org.slf4j.&quot;))</span></span>
<span class="line"><span>                        .or(nameStartsWith(&quot;org.groovy.&quot;))</span></span>
<span class="line"><span>                        .or(nameContains(&quot;javassist&quot;))</span></span>
<span class="line"><span>                        .or(nameContains(&quot;.asm.&quot;))</span></span>
<span class="line"><span>                        .or(nameContains(&quot;.reflectasm.&quot;))</span></span>
<span class="line"><span>                        .or(nameStartsWith(&quot;sun.reflect&quot;))</span></span>
<span class="line"><span>                        .or(ElementMatchers.isSynthetic())</span></span>
<span class="line"><span>                        .or(allPgAgentExclude())</span></span>
<span class="line"><span>                )</span></span>
<span class="line"><span>// 增强的类</span></span>
<span class="line"><span>                .type(typeElementJunction)</span></span>
<span class="line"><span>// 增强的类需 增强的方法实现</span></span>
<span class="line"><span>                .transform(newTransformer(adviceClass, methodElementJunction))</span></span>
<span class="line"><span>// 注册增强类监听器</span></span>
<span class="line"><span>                .with(newAgentBuilderListener())</span></span>
<span class="line"><span>                .with(AgentBuilder.RedefinitionStrategy.RETRANSFORMATION)</span></span>
<span class="line"><span>                .with(newRedefinitionListener())</span></span>
<span class="line"><span>// 监听类加载</span></span>
<span class="line"><span>                .installOn(instrumentation);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 增强后的类, 写入至文件, 便于观察</span></span>
<span class="line"><span>        instrumentation.addTransformer(getClassFileTransformer());</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>privatestatic ClassFileTransformer getClassFileTransformer()  {</span></span>
<span class="line"><span>returnnewClassFileTransformer() {</span></span>
<span class="line"><span>            @Override</span></span>
<span class="line"><span>publicbyte[] transform(ClassLoader loader, String className,</span></span>
<span class="line"><span>                                    Class&lt;?&gt; classBeingRedefined,</span></span>
<span class="line"><span>                                    ProtectionDomain protectionDomain, byte[] classfileBuffer) {</span></span>
<span class="line"><span>if (className.contains(&quot;TestController&quot;)) {</span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>                        String substring = className.substring(className.lastIndexOf(&quot;/&quot;));</span></span>
<span class="line"><span>                        Files.write(newFile(&quot;C:/Users/JasonKin/Desktop/bytebuddy-class/&quot;+ substring +&quot;.class&quot;).toPath(), classfileBuffer);</span></span>
<span class="line"><span>                    } catch (IOException e) {</span></span>
<span class="line"><span>                        e.printStackTrace();</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>return classfileBuffer;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        };</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>privatestaticclassAgentBuilderListenerimplementsAgentBuilder.Listener {</span></span>
<span class="line"><span>        @Override</span></span>
<span class="line"><span>private void   onDiscovery(String typeName, ClassLoader classLoader, JavaModule module, boolean  loaded) {</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        @Override</span></span>
<span class="line"><span>private void   onTransformation(TypeDescription typeDescription, ClassLoader classLoader, JavaModule module, boolean  loaded, DynamicType dynamicType) {</span></span>
<span class="line"><span>//            String className = typeDescription.getName();</span></span>
<span class="line"><span>//            System.out.println(&quot;增强类: &quot; + className);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        @Override</span></span>
<span class="line"><span>private void   onIgnored(TypeDescription typeDescription, ClassLoader classLoader, JavaModule module, boolean  loaded) {</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        @Override</span></span>
<span class="line"><span>private void   onError(String typeName, ClassLoader classLoader, JavaModule module, boolean  loaded, Throwable throwable) {</span></span>
<span class="line"><span>            System.out.println(&quot;增强类失败: &quot;+ typeName +&quot;; 失败原因: &quot;+ throwable);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        @Override</span></span>
<span class="line"><span>private void   onComplete(String typeName, ClassLoader classLoader, JavaModule module, boolean  loaded) {</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>privatestaticclassTransformerimplementsAgentBuilder.Transformer {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final   Class&lt;?&gt; adviceClass;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final   ElementMatcher&lt;?superMethodDescription&gt; methodElementJunction;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicTransformer(Class&lt;?&gt; adviceClass, ElementMatcher&lt;?superMethodDescription&gt; methodElementJunction) {</span></span>
<span class="line"><span>this.adviceClass = adviceClass;</span></span>
<span class="line"><span>this.methodElementJunction = methodElementJunction;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        @NeverNull</span></span>
<span class="line"><span>        @Override</span></span>
<span class="line"><span>public DynamicType.Builder&lt;?&gt; transform(</span></span>
<span class="line"><span>                DynamicType.Builder&lt;?&gt; builder,</span></span>
<span class="line"><span>                @NeverNull TypeDescription typeDescription,</span></span>
<span class="line"><span>                ClassLoader classLoader,</span></span>
<span class="line"><span>                JavaModule module,</span></span>
<span class="line"><span>                @NeverNull ProtectionDomain domain) {</span></span>
<span class="line"><span>return builder.visit(</span></span>
<span class="line"><span>                    Advice.to(adviceClass)</span></span>
<span class="line"><span>                            .on(methodElementJunction));</span></span>
<span class="line"><span>//            return builder.method(buildMethodMatch())</span></span>
<span class="line"><span>//                    // 设置拦截器</span></span>
<span class="line"><span>//                    .intercept(MethodDelegation.withDefaultConfiguration()</span></span>
<span class="line"><span>//                            .withBinders(Morph.Binder.install(PgCallable.class)).to(PgMethodInterceptor.class));</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicstaticvoidinitRules() throws IOException {</span></span>
<span class="line"><span>if (rules !=null) {</span></span>
<span class="line"><span>return;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        ClassLoader classLoader = Thread.currentThread().getContextClassLoader();</span></span>
<span class="line"><span>        InputStream inputStream = classLoader.getResourceAsStream(&quot;META-INF/pg-agent.json&quot;);</span></span>
<span class="line"><span>if (inputStream ==null) {</span></span>
<span class="line"><span>thrownewRuntimeException(&quot;无可有效规则文件&quot;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        String json =newString(inputStream.readAllBytes(), StandardCharsets.UTF_8);</span></span>
<span class="line"><span>        rules = JSON.parseObject(json);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicstatic ElementMatcher&lt;?superTypeDescription&gt; buildMatch() {</span></span>
<span class="line"><span>        ElementMatcher.Junction&lt;TypeDescription&gt; judge =not(nameContains(&quot;$&quot;));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>initRules();</span></span>
<span class="line"><span>        } catch (IOException e) {</span></span>
<span class="line"><span>            e.printStackTrace();</span></span>
<span class="line"><span>            judge = judge.and(none());</span></span>
<span class="line"><span>return judge;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        JSONArray typeRules = rules.getJSONArray(&quot;type&quot;);</span></span>
<span class="line"><span>if (typeRules !=null) {</span></span>
<span class="line"><span>            ElementMatcher.Junction&lt;TypeDescription&gt; cusMatches =null;</span></span>
<span class="line"><span>for (Object typeRulesRule : typeRules) {</span></span>
<span class="line"><span>                System.out.println(&quot;规则+: &quot;+ typeRulesRule);</span></span>
<span class="line"><span>if (cusMatches ==null) {</span></span>
<span class="line"><span>                    cusMatches =nameMatches((String) typeRulesRule);</span></span>
<span class="line"><span>                } else {</span></span>
<span class="line"><span>                    cusMatches = cusMatches.or(nameMatches((String) typeRulesRule));</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>if (cusMatches !=null) {</span></span>
<span class="line"><span>                judge = judge.and(cusMatches);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        judge = judge.and(not(isInterface()));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>return judge;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicstatic ElementMatcher&lt;?superMethodDescription&gt; buildMethodMatch() {</span></span>
<span class="line"><span>        ElementMatcher.Junction&lt;MethodDescription&gt; judge =isMethod().and(</span></span>
<span class="line"><span>not(isMain().or(isHashCode())</span></span>
<span class="line"><span>                        .or(isEquals())</span></span>
<span class="line"><span>                        .or(isBridge())</span></span>
<span class="line"><span>                        .or(isClone())</span></span>
<span class="line"><span>                        .or(isConstructor()))</span></span>
<span class="line"><span>        );</span></span>
<span class="line"><span></span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>initRules();</span></span>
<span class="line"><span>        } catch (IOException e) {</span></span>
<span class="line"><span>            e.printStackTrace();</span></span>
<span class="line"><span>            judge = judge.and(any());</span></span>
<span class="line"><span>return judge;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        JSONArray methodRules = rules.getJSONArray(&quot;method&quot;);</span></span>
<span class="line"><span>if (methodRules !=null) {</span></span>
<span class="line"><span>            ElementMatcher.Junction&lt;MethodDescription&gt; innerJudge =null;</span></span>
<span class="line"><span>for (Object methodRule : methodRules) {</span></span>
<span class="line"><span>                innerJudge = innerJudge ==null?nameMatches((String) methodRule) : innerJudge.or(nameMatches((String) methodRule));</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            judge = judge.and(innerJudge);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>return judge;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>privatestatic ElementMatcher.Junction&lt;NamedElement&gt; allPgAgentExclude() {</span></span>
<span class="line"><span>returnnameStartsWith(&quot;com.kingtsoft.pangu.hawkeye.trace.simple.&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>privatestaticclassRedefinitionListenerimplementsAgentBuilder.RedefinitionStrategy.Listener {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        @Override</span></span>
<span class="line"><span>private void   onBatch(intindex, List&lt;Class&lt;?&gt;&gt; batch, List&lt;Class&lt;?&gt;&gt; types) {</span></span>
<span class="line"><span>/* do nothing */</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        @Override</span></span>
<span class="line"><span>public Iterable&lt;?extends List&lt;Class&lt;?&gt;&gt;&gt; onError(intindex,</span></span>
<span class="line"><span>                                                          List&lt;Class&lt;?&gt;&gt; batch,</span></span>
<span class="line"><span>                                                          Throwable throwable,</span></span>
<span class="line"><span>                                                          List&lt;Class&lt;?&gt;&gt; types) {</span></span>
<span class="line"><span>return Collections.emptyList();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        @Override</span></span>
<span class="line"><span>private void   onComplete(intamount, List&lt;Class&lt;?&gt;&gt; types, Map&lt;List&lt;Class&lt;?&gt;&gt;, Throwable&gt; failures) {</span></span>
<span class="line"><span>/* do nothing */</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>查看增强器的定义信息类</span></span>
<span class="line"><span>这里没其他操作，直接使用TraceMethodHandler类进行了调用，作用是可以直接在</span></span>
<span class="line"><span>TraceMethodHandler类中调试，如果逻辑都写在TraceMethodAdvice类中，它里面的代码是无</span></span>
<span class="line"><span>法做调试的，因为会直接改写到目标类中。</span></span>
<span class="line"><span>    OnMethodEnter：方法进入前</span></span>
<span class="line"><span>    OnMethodExit：方法退出时（包括因异常而退出）</span></span>
<span class="line"><span>    @Advice.Origin(&quot;#t&quot;)：代表类名</span></span>
<span class="line"><span>    @Advice.Origin(&quot;#m&quot;)：代表方法名</span></span>
<span class="line"><span>    @Advice.AllArguments：代表入参数据</span></span>
<span class="line"><span>    @Advice.Return(typing= Assigner.Typing.DYNAMIC)：代表返回值</span></span>
<span class="line"><span>    @Advice.Thrown代表抛出的异常，正常返回时为null</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.hawkeye.trace.simple.advice;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import net.bytebuddy.asm.Advice;</span></span>
<span class="line"><span>import net.bytebuddy.implementation.bytecode.assign.Assigner;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Title: &lt;br&gt;</span></span>
<span class="line"><span> * Description: &lt;br&gt;</span></span>
<span class="line"><span> * Company: KingTang &lt;br&gt;</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * @author 金炀</span></span>
<span class="line"><span> * @version 1.0</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public class  TraceMethodAdvice {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Advice.OnMethodEnter()</span></span>
<span class="line"><span>publicstaticvoidenter(@Advice.Origin(&quot;#t&quot;) String className,</span></span>
<span class="line"><span>                             @Advice.Origin(&quot;#m&quot;) String methodName,</span></span>
<span class="line"><span>                             @Advice.AllArguments Object[] params) {</span></span>
<span class="line"><span>// 为什么处理逻辑不写这里？因为此类会被直接写入字节码中，不是独立编译的。写入额外方法可以保证开发时候可调试</span></span>
<span class="line"><span>        TraceMethodHandler.onMethodEnter(className, methodName, params);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Advice.OnMethodExit(onThrowable= Throwable.class)</span></span>
<span class="line"><span>publicstaticvoidexit(@Advice.Origin(&quot;#t&quot;) String className,</span></span>
<span class="line"><span>                            @Advice.Origin(&quot;#m&quot;) String methodName,</span></span>
<span class="line"><span>                            @Advice.Return(typing= Assigner.Typing.DYNAMIC) Object returnObject,</span></span>
<span class="line"><span>                            @Advice.Thrown Throwable thrown) {</span></span>
<span class="line"><span>if (thrown !=null) {</span></span>
<span class="line"><span>            TraceMethodHandler.onMethodException(thrown);</span></span>
<span class="line"><span>return;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        TraceMethodHandler.onMethodExit(className, methodName, returnObject);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>继续看TraceMethodHandler这里定义了三个范围</span></span>
<span class="line"><span>    traceid：一次链路跟踪唯一</span></span>
<span class="line"><span>    spanid：一个微服务唯一（同进程）</span></span>
<span class="line"><span>    nodeid：一个监控的方法唯一</span></span>
<span class="line"><span>    这里看TraceHttpHandler，上面介绍了方法的切入，这里就是http的切入，原理相同，所有直接</span></span>
<span class="line"><span>介绍TraceHttpHandler。&lt;br /&gt;web的入口是在TraceHttpHandler中标记的，这里默认入口</span></span>
<span class="line"><span>都是web请求入口。会初始化traceid，然后进入方法跟踪。这里方法退出都会调用 MDC.clear();，</span></span>
<span class="line"><span>目的是给上下文数据进行清除，包括日志体系中的tid信息。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.hawkeye.trace.simple.advice;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import com.kingtsoft.pangu.hawkeye.trace.common.constant.PgAgentConst;</span></span>
<span class="line"><span>import com.kingtsoft.pangu.hawkeye.trace.simple.TrackContext;</span></span>
<span class="line"><span>import com.kingtsoft.pangu.hawkeye.trace.simple.TrackManager;</span></span>
<span class="line"><span>import com.kingtsoft.pangu.hawkeye.trace.tools.model.TraceContext;</span></span>
<span class="line"><span>import org.slf4j.MDC;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import javax.servlet.http.HttpServletRequest;</span></span>
<span class="line"><span>import java.util.UUID;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Title: &lt;br&gt;</span></span>
<span class="line"><span> * Description: &lt;br&gt;</span></span>
<span class="line"><span> * Company: KingTang &lt;br&gt;</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * @author 金炀</span></span>
<span class="line"><span> * @version 1.0</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public class  TraceHttpHandler {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicstaticvoidonMethodEnter(String className, String methodName, Object[] params) {</span></span>
<span class="line"><span>        HttpServletRequest request = (HttpServletRequest) params[0];</span></span>
<span class="line"><span>        String traceId = request.getHeader(PgAgentConst.Header.TRACE_ID);</span></span>
<span class="line"><span>        TraceContext context = TrackContext.getTraceContext();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (traceId !=null) {</span></span>
<span class="line"><span>if (context ==null) {</span></span>
<span class="line"><span>                context =newTraceContext();</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            context.setTraceId(traceId);</span></span>
<span class="line"><span>            context.setSpanId(request.getHeader(PgAgentConst.Header.SPAN_ID));</span></span>
<span class="line"><span>            TrackContext.setTraceContext(context);</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>if (context ==null) {</span></span>
<span class="line"><span>                context =newTraceContext();</span></span>
<span class="line"><span>                context.setTraceId(UUID.randomUUID().toString());</span></span>
<span class="line"><span>                TrackContext.setTraceContext(context);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                TrackManager.createTrace(request.getMethod() +&quot;: &quot;+ request.getRequestURL());</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicstaticvoidonMethodExit(String className, String methodName, Object returnObject) {</span></span>
<span class="line"><span>        TrackContext.clearContext();</span></span>
<span class="line"><span>        MDC.clear();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicstaticvoidonMethodException(Throwable thrown) {</span></span>
<span class="line"><span>        TrackContext.clearContext();</span></span>
<span class="line"><span>        MDC.clear();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    通过TrackManager.initBaseInfo(key)，初始化整体的跟踪信息，这里展示的是方法，</span></span>
<span class="line"><span>TrackManager.initBaseInfo(key)主要是判断当前节点是否存在spanid，且若存在父级，</span></span>
<span class="line"><span>则会进行子父节点关联。</span></span>
<span class="line"><span>    注意，这里的createEntrySpan并非每次都创建span信息，而是会利用现有span，因为它一个</span></span>
<span class="line"><span>服务是同一个，重复创建缓存是为了符合栈的数据结构，先进后出。在每个方法都能看到span信息</span></span>
<span class="line"><span>并判断当前到那个环节了。然后组装PgTraceNodeInfo信息，为节点ID，每个方法会创建一次，</span></span>
<span class="line"><span>生命周期是方法。并且也会有子父级关联关系。这里的TrackManager.setMdc(nodeId);是</span></span>
<span class="line"><span>为了将nodeId绑定入日志体系，这样，日志记录就能与跟踪的叶子节点绑定，就实现了分布式的</span></span>
<span class="line"><span>日志切片功能。进入组装后就可以在退出的时候知晓对应的节点信息。</span></span>
<span class="line"><span>    退出时（包含异常），判断span信息是否结束（刚才栈里的span全部弹出后就代表结束了），</span></span>
<span class="line"><span>最后存储span信息。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.hawkeye.trace.simple.advice;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import com.alibaba.fastjson2.JSON;</span></span>
<span class="line"><span>import com.kingtsoft.pangu.hawkeye.trace.common.model.PgTraceNodeInfo;</span></span>
<span class="line"><span>import com.kingtsoft.pangu.hawkeye.trace.simple.PgAgentTool;</span></span>
<span class="line"><span>import com.kingtsoft.pangu.hawkeye.trace.simple.TrackContext;</span></span>
<span class="line"><span>import com.kingtsoft.pangu.hawkeye.trace.simple.TrackManager;</span></span>
<span class="line"><span>import com.kingtsoft.pangu.hawkeye.trace.tools.model.TraceContext;</span></span>
<span class="line"><span>import org.slf4j.MDC;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import java.time.Clock;</span></span>
<span class="line"><span>import java.time.ZoneId;</span></span>
<span class="line"><span>import java.util.Arrays;</span></span>
<span class="line"><span>import java.util.Optional;</span></span>
<span class="line"><span>import java.util.UUID;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Title: &lt;br&gt;</span></span>
<span class="line"><span> * Description: &lt;br&gt;</span></span>
<span class="line"><span> * Company: KingTang &lt;br&gt;</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * @author 金炀</span></span>
<span class="line"><span> * @version 1.0</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public class  TraceMethodHandler {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicstaticvoidonMethodEnter(String className, String methodName, Object[] params) {</span></span>
<span class="line"><span>        String key = className +&quot;.&quot;+ methodName;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        TrackManager.initBaseInfo(key);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        String entrySpan = TrackManager.createEntrySpan();</span></span>
<span class="line"><span>        System.out.println(&quot;链路追踪前置：&quot;+ entrySpan +&quot; &quot;+ key);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        Clock clock = Clock.system(ZoneId.of(&quot;GMT+8&quot;));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        String pNodeId = Optional.ofNullable((PgTraceNodeInfo) TrackManager.getInfoOnly())</span></span>
<span class="line"><span>                .map(PgTraceNodeInfo::getNodeId).orElse(null);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        TraceContext context = TrackContext.getTraceContext();</span></span>
<span class="line"><span>        String nodeId = UUID.randomUUID().toString();</span></span>
<span class="line"><span>        context.setNodeId(nodeId);</span></span>
<span class="line"><span>        TrackManager.setMdc(nodeId);</span></span>
<span class="line"><span>        PgTraceNodeInfo pgTraceSpanInfo =newPgTraceNodeInfo()</span></span>
<span class="line"><span>                .setAppName(PgAgentTool.appName)</span></span>
<span class="line"><span>                .setClassName(className)</span></span>
<span class="line"><span>                .setMethod(methodName)</span></span>
<span class="line"><span>                .setSpanId(entrySpan)</span></span>
<span class="line"><span>                .setStartTimestamp(clock.millis())</span></span>
<span class="line"><span>                .setParams(PgAgentTool.getDataFormat(params, key))</span></span>
<span class="line"><span>                .setState(1)</span></span>
<span class="line"><span>                .setNodeType(&quot;method&quot;)</span></span>
<span class="line"><span>                .setTraceId(context.getTraceId())</span></span>
<span class="line"><span>                .setNodeId(nodeId)</span></span>
<span class="line"><span>                .setpNodeId(pNodeId);</span></span>
<span class="line"><span>        TrackManager.setInfo(pgTraceSpanInfo);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicstaticvoidonMethodExit(String className, String methodName, Object returnObject) {</span></span>
<span class="line"><span>        PgTraceNodeInfo pgTraceInfo = (PgTraceNodeInfo) TrackManager.getInfo();</span></span>
<span class="line"><span>if (pgTraceInfo ==null) {</span></span>
<span class="line"><span>return;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        Clock clock = Clock.system(ZoneId.of(&quot;GMT+8&quot;));</span></span>
<span class="line"><span>        pgTraceInfo.setEndTimestamp(clock.millis())</span></span>
<span class="line"><span>                .setCost(pgTraceInfo.getEndTimestamp() - pgTraceInfo.getStartTimestamp());</span></span>
<span class="line"><span>        String key = className +&quot;.&quot;+ methodName;</span></span>
<span class="line"><span>// 父级 要与HTTP做判断可能要改造</span></span>
<span class="line"><span>        pgTraceInfo.setRetObj(PgAgentTool.getDataFormat(returnObject, key))</span></span>
<span class="line"><span>                .setState(2);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        System.out.println(&quot;链路追踪后置: 信息 &quot;+ JSON.toJSONString(pgTraceInfo));</span></span>
<span class="line"><span>        PgAgentTool.sendMsg(pgTraceInfo);</span></span>
<span class="line"><span>        TrackManager.getExitSpan();</span></span>
<span class="line"><span>        TrackManager.doMdcCheck();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        PgAgentTool.doExitSpan(clock, key);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicstaticvoidonMethodException(Throwable thrown) {</span></span>
<span class="line"><span>        Clock clock = Clock.system(ZoneId.of(&quot;GMT+8&quot;));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        PgTraceNodeInfo pgTraceInfo = (PgTraceNodeInfo) TrackManager.getInfo();</span></span>
<span class="line"><span>if (pgTraceInfo ==null) {</span></span>
<span class="line"><span>            PgAgentTool.doExSpan(clock);</span></span>
<span class="line"><span>return;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        pgTraceInfo.setEndTimestamp(clock.millis())</span></span>
<span class="line"><span>                .setState(3)</span></span>
<span class="line"><span>                .setExceptionInfo(thrown +&quot;:\\n &quot;+ PgAgentTool.getStringFormat(Arrays.toString(thrown.getStackTrace())));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        System.out.println(&quot;异常拦截: 信息 &quot;+ JSON.toJSONString(pgTraceInfo));</span></span>
<span class="line"><span>        PgAgentTool.sendMsg(pgTraceInfo);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        TrackManager.getExitSpan();</span></span>
<span class="line"><span>        TrackManager.doMdcCheck();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        PgAgentTool.doExSpan(clock);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.hawkeye.trace.simple;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import com.kingtsoft.pangu.hawkeye.trace.common.model.PgTraceInfo;</span></span>
<span class="line"><span>import com.kingtsoft.pangu.hawkeye.trace.common.model.PgTraceNodeInfo;</span></span>
<span class="line"><span>import com.kingtsoft.pangu.hawkeye.trace.common.model.PgTraceNodeStdInfo;</span></span>
<span class="line"><span>import com.kingtsoft.pangu.hawkeye.trace.common.model.PgTraceSpanInfo;</span></span>
<span class="line"><span>import com.kingtsoft.pangu.hawkeye.trace.tools.model.TraceContext;</span></span>
<span class="line"><span>import org.slf4j.MDC;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import java.time.Clock;</span></span>
<span class="line"><span>import java.time.ZoneId;</span></span>
<span class="line"><span>import java.util.Optional;</span></span>
<span class="line"><span>import java.util.Stack;</span></span>
<span class="line"><span>import java.util.UUID;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Title: &lt;br&gt;</span></span>
<span class="line"><span> * Description: &lt;br&gt;</span></span>
<span class="line"><span> * Company: KingTang &lt;br&gt;</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * @author 金炀</span></span>
<span class="line"><span> * @version 1.0</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public class  TrackManager {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>privatestaticfinal ThreadLocal&lt;Stack&lt;String&gt;&gt; TRACK =new ThreadLocal&lt;&gt;();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>privatestaticfinal ThreadLocal&lt;Stack&lt;PgTraceNodeStdInfo&gt;&gt; TRACK_INFO =new ThreadLocal&lt;&gt;();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//    private static final InheritableThreadLocal&lt;Stack&lt;String&gt;&gt; TRACK = new InheritableThreadLocal&lt;&gt;();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>privatestatic String createSpan() {</span></span>
<span class="line"><span>        Stack&lt;String&gt; stack = TRACK.get();</span></span>
<span class="line"><span>if (stack ==null) {</span></span>
<span class="line"><span>            stack =new Stack&lt;&gt;();</span></span>
<span class="line"><span>            TRACK.set(stack);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        String linkId;</span></span>
<span class="line"><span>if (stack.isEmpty()) {</span></span>
<span class="line"><span>            linkId = TrackContext.getSpanId();</span></span>
<span class="line"><span>if (linkId ==null) {</span></span>
<span class="line"><span>                linkId =&quot;nvl&quot;;</span></span>
<span class="line"><span>                TrackContext.setSpanId(linkId);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            linkId = stack.peek();</span></span>
<span class="line"><span>            TrackContext.setSpanId(linkId);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>return linkId;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicstatic String createEntrySpan() {</span></span>
<span class="line"><span>        String span =createSpan();</span></span>
<span class="line"><span>        Stack&lt;String&gt; stack = TRACK.get();</span></span>
<span class="line"><span>        System.out.println(&quot;push:&quot;+ span);</span></span>
<span class="line"><span>        stack.push(span);</span></span>
<span class="line"><span>return span;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicstatic String getExitSpan() {</span></span>
<span class="line"><span>        Stack&lt;String&gt; stack = TRACK.get();</span></span>
<span class="line"><span>if (stack ==null|| stack.isEmpty()) {</span></span>
<span class="line"><span>            TrackContext.clear();</span></span>
<span class="line"><span>            TRACK.remove();</span></span>
<span class="line"><span>returnnull;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        String str = stack.pop();</span></span>
<span class="line"><span>if (stack.isEmpty()) {</span></span>
<span class="line"><span>            TrackContext.clear();</span></span>
<span class="line"><span>            TRACK.remove();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>return str;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicstatic String getCurrentSpan() {</span></span>
<span class="line"><span>        Stack&lt;String&gt; stack = TRACK.get();</span></span>
<span class="line"><span>if (stack ==null|| stack.isEmpty()) {</span></span>
<span class="line"><span>returnnull;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>return stack.peek();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicstaticvoidsetInfo(PgTraceNodeStdInfo traceSpanInfo) {</span></span>
<span class="line"><span>        Stack&lt;PgTraceNodeStdInfo&gt; stack = TRACK_INFO.get();</span></span>
<span class="line"><span>if (stack ==null) {</span></span>
<span class="line"><span>            stack =new Stack&lt;&gt;();</span></span>
<span class="line"><span>            TRACK_INFO.set(stack);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        stack.push(traceSpanInfo);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicstatic PgTraceNodeStdInfo getInfo() {</span></span>
<span class="line"><span>        Stack&lt;PgTraceNodeStdInfo&gt; stack = TRACK_INFO.get();</span></span>
<span class="line"><span>if (stack ==null) {</span></span>
<span class="line"><span>returnnull;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>if (stack.isEmpty()) {</span></span>
<span class="line"><span>            TRACK_INFO.remove();</span></span>
<span class="line"><span>returnnull;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        PgTraceNodeStdInfo pgTraceSpanInfo = stack.pop();</span></span>
<span class="line"><span>if (stack.isEmpty()) {</span></span>
<span class="line"><span>            TRACK_INFO.remove();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>return pgTraceSpanInfo;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicstaticvoidsetMdc(String nodeId) {</span></span>
<span class="line"><span>        MDC.put(&quot;tid&quot;, nodeId);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicstaticvoiddoMdcCheck() {</span></span>
<span class="line"><span>        Optional.ofNullable((PgTraceNodeInfo) TrackManager.getInfoOnly())</span></span>
<span class="line"><span>                .ifPresent(n -&gt;  MDC.put(&quot;tid&quot;, n.getNodeId()));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicstatic PgTraceNodeStdInfo getInfoOnly() {</span></span>
<span class="line"><span>        Stack&lt;PgTraceNodeStdInfo&gt; stack = TRACK_INFO.get();</span></span>
<span class="line"><span>if (stack ==null) {</span></span>
<span class="line"><span>returnnull;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>if (stack.isEmpty()) {</span></span>
<span class="line"><span>            TRACK_INFO.remove();</span></span>
<span class="line"><span>returnnull;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>return stack.peek();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicstaticvoidinitBaseInfo(String description) {</span></span>
<span class="line"><span>        String spanId = TrackManager.getCurrentSpan();</span></span>
<span class="line"><span>        TraceContext context = TrackContext.getTraceContext();</span></span>
<span class="line"><span>if (null== spanId &amp;&amp; context !=null) {</span></span>
<span class="line"><span>            spanId = UUID.randomUUID().toString();</span></span>
<span class="line"><span>            TrackContext.setSpanId(spanId);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            Clock clock = Clock.system(ZoneId.of(&quot;GMT+8&quot;));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 这里会设置spanId</span></span>
<span class="line"><span>int isFirst =initTraceInfo(description) ?1:0;</span></span>
<span class="line"><span>            PgTraceSpanInfo pgTraceSpanInfo =newPgTraceSpanInfo()</span></span>
<span class="line"><span>                    .setSpanId(spanId)</span></span>
<span class="line"><span>                    .setAppName(PgAgentTool.appName)</span></span>
<span class="line"><span>                    .setTraceId(context.getTraceId())</span></span>
<span class="line"><span>                    .setpSpanId(context.getSpanId())</span></span>
<span class="line"><span>                    .setStartTimestamp(clock.millis())</span></span>
<span class="line"><span>                    .setState(1)</span></span>
<span class="line"><span>                    .setIsFirst(isFirst);</span></span>
<span class="line"><span>            TrackContext.setTraceSpanContext(pgTraceSpanInfo);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 这里把父级的替换为子集</span></span>
<span class="line"><span>            context.setSpanId(spanId);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicstaticboolean  initTraceInfo(String description) {</span></span>
<span class="line"><span>        TraceContext context = TrackContext.getTraceContext();</span></span>
<span class="line"><span>if (context ==null) {</span></span>
<span class="line"><span>            context =newTraceContext();</span></span>
<span class="line"><span>            context.setTraceId(UUID.randomUUID().toString());</span></span>
<span class="line"><span>            TrackContext.setTraceContext(context);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>createTrace(description);</span></span>
<span class="line"><span>returntrue;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>returnfalse;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicstaticvoidcreateTrace(String description) {</span></span>
<span class="line"><span>        Clock clock = Clock.system(ZoneId.of(&quot;GMT+8&quot;));</span></span>
<span class="line"><span>        PgTraceInfo pgTraceInfo =newPgTraceInfo()</span></span>
<span class="line"><span>                .setTraceId(TrackContext.getTraceContext().getTraceId())</span></span>
<span class="line"><span>                .setDescription(description)</span></span>
<span class="line"><span>                .setStartTimestamp(clock.millis())</span></span>
<span class="line"><span>                .setAppName(PgAgentTool.appName);</span></span>
<span class="line"><span>        PgAgentTool.sendTraceMsg(pgTraceInfo);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23)]))}const t=s(l,[["render",p],["__file","通用链路跟踪模块.html.vue"]]),r=JSON.parse('{"path":"/%E7%9B%98%E5%8F%A4/%E9%B9%B0%E7%9C%BC%E6%A1%86%E6%9E%B6/%E9%80%9A%E7%94%A8%E9%93%BE%E8%B7%AF%E8%B7%9F%E8%B8%AA%E6%A8%A1%E5%9D%97.html","title":"鹰眼-通用链路跟踪模块","lang":"zh-CN","frontmatter":{"description":"鹰眼-通用链路跟踪模块 如何使用 json yaml 技术原理 java java java java java","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/%E7%9B%98%E5%8F%A4/%E9%B9%B0%E7%9C%BC%E6%A1%86%E6%9E%B6/%E9%80%9A%E7%94%A8%E9%93%BE%E8%B7%AF%E8%B7%9F%E8%B8%AA%E6%A8%A1%E5%9D%97.html"}],["meta",{"property":"og:title","content":"鹰眼-通用链路跟踪模块"}],["meta",{"property":"og:description","content":"鹰眼-通用链路跟踪模块 如何使用 json yaml 技术原理 java java java java java"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-18T07:25:41.000Z"}],["meta",{"property":"article:author","content":"Cotton Eye Joe"}],["meta",{"property":"article:modified_time","content":"2024-11-18T07:25:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"鹰眼-通用链路跟踪模块\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-18T07:25:41.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cotton Eye Joe\\",\\"url\\":\\"https://github.com/ToDreamr\\"}]}"]]},"headers":[],"git":{"createdTime":1731914741000,"updatedTime":1731914741000,"contributors":[{"name":"九歌天上有","email":"aruixrain@gmail.com","commits":1}]},"readingTime":{"minutes":8.54,"words":2563},"filePathRelative":"盘古/鹰眼框架/通用链路跟踪模块.md","localizedDate":"2024年11月18日","excerpt":"","autoDesc":true}');export{t as comp,r as data};
