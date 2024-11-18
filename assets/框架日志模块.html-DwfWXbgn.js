import{_ as n,o as a,c as e,d as i}from"./app-DGcq1nYR.js";const l={};function p(r,s){return a(),e("div",null,s[0]||(s[0]=[i(`<h1 id="框架日志模块" tabindex="-1"><a class="header-anchor" href="#框架日志模块"><span>框架日志模块</span></a></h1><blockquote><h4 id="如何使用" tabindex="-1"><a class="header-anchor" href="#如何使用"><span>如何使用</span></a></h4></blockquote><p>业务端引入如下模块</p><p><strong>xml</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>  &lt;groupId&gt;com.kingtsoft.pangu&lt;/groupId&gt;</span></span>
<span class="line"><span>  &lt;artifactId&gt;pangu-frame-log&lt;/artifactId&gt;</span></span>
<span class="line"><span>  &lt;version&gt;\${pangu.version}&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>配置文件</span></span>
<span class="line"><span>    日志依赖于kafka，所以需要进行kafka相关配置，附加可选的配置详见pangu kafka配置</span></span>
<span class="line"><span>配置文件主要如下：</span></span>
<span class="line"><span>    pangu.log.enabled  整体日志的开关</span></span>
<span class="line"><span>    pangu.log.async  是否异步开启</span></span>
<span class="line"><span>    pangu.log.module  日志记录的模块</span></span>
<span class="line"><span>    pangu.log.persistent-dir  日志本地持久化存储目录，默认{user.home}/pangu/msg-local</span></span>
<span class="line"><span>    pangu.log.db-log.enabled  是否开启持久层日志</span></span>
<span class="line"><span>    pangu.log.req-log.enabled  是否开启请求日志</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>yaml</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>spring:</span></span>
<span class="line"><span>kafka:</span></span>
<span class="line"><span>bootstrap-servers: 10.1.50.131:9092</span></span>
<span class="line"><span>pangu:</span></span>
<span class="line"><span>kafka:</span></span>
<span class="line"><span>servers: \${spring.kafka.bootstrap-servers}</span></span>
<span class="line"><span>log:</span></span>
<span class="line"><span># 是否开启拓展日志采集</span></span>
<span class="line"><span>enabled: true</span></span>
<span class="line"><span># 异步</span></span>
<span class="line"><span>async: true</span></span>
<span class="line"><span># 日志模块</span></span>
<span class="line"><span>module: pangu</span></span>
<span class="line"><span># 日志本地化存储路径</span></span>
<span class="line"><span>persistent-dir:</span></span>
<span class="line"><span>db-log:</span></span>
<span class="line"><span># 持久层监控日志</span></span>
<span class="line"><span>enabled: true</span></span>
<span class="line"><span>req-log:</span></span>
<span class="line"><span>     	# 请求监控日志</span></span>
<span class="line"><span>enabled: true</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>业务代码</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>privatestaticfinal PgLogger LOGGER = PanguLoggerFactory.getLogger(TestService.class);</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>@PanguLog(operateType= PanguLogTypeEnum.TYPE_OTHER, operateName=&quot;测试&quot;, inParam=true, outParam=true)</span></span>
<span class="line"><span>public Object testLog(String inp) {</span></span>
<span class="line"><span>    OisRegSchedulePool oisRegSchedulePool =newOisRegSchedulePool();</span></span>
<span class="line"><span>    oisRegSchedulePool.setState(1);</span></span>
<span class="line"><span>    oisRegSchedulePool.setPoolCode(UUID.randomUUID().toString().substring(0, 8));</span></span>
<span class="line"><span>    oisRegSchedulePool.setScheduleSn(1L);</span></span>
<span class="line"><span>    LOGGER.info(&quot;test1{}&quot;, oisRegSchedulePool);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int i = oisRegSchedulePoolMapper.insert(oisRegSchedulePool);</span></span>
<span class="line"><span>    System.out.println(i);</span></span>
<span class="line"><span>    oisRegSchedulePool.setPoolSn(112L);</span></span>
<span class="line"><span>    oisRegSchedulePoolMapper.updateAuto(oisRegSchedulePool);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    oisRegSchedulePoolMapper.deleteById(1L);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>return&quot;abcdefg&quot;;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注解日志</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>@PanguLog，方法下添加如下所示注解</span></span>
<span class="line"><span>注解属性如下：</span></span>
<span class="line"><span>    objId  关键对象ID可空</span></span>
<span class="line"><span>    operateName  操作名称</span></span>
<span class="line"><span>    logLevel  日志级别 1-ALL、2-TRACE、3-DEBUG、4-INFO、5-WARN、6-ERROR、7-FATAL、8-OFF</span></span>
<span class="line"><span>    operateType  操作类型1-增、2-删、3-改、9-其他（比如系统日志记录）</span></span>
<span class="line"><span>    inParam    入参记录默认false;</span></span>
<span class="line"><span>    outParam  出参记录默认false;</span></span>
<span class="line"><span>    typeExPress  也是操作类型优先级高于 operateType;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>持久层日志</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    配置文件添加pangu.log.db-log.enabled=true即可, 会记录新增、更新及删除操作</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>常规日志模式</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    private static final PgLogger LOGGER = PanguLoggerFactory.getLogger(TestService.class);</span></span>
<span class="line"><span>    执行LOGGER.info(“test1{}”, oisRegSchedulePool);记录即可</span></span>
<span class="line"><span>而AllLoggers.APPLICATION.info(&quot;AllLoggers.APPLICATION.info&quot;);也是一种方</span></span>
<span class="line"><span>式，不过此方式要配合filebeat进行采集，这里不做过多介绍。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>server端</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    需要监听业务发送的消息，所以只需要配置文件配置</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>yaml</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>spring:</span></span>
<span class="line"><span>kafka:</span></span>
<span class="line"><span>bootstrap-servers: 10.1.50.131:9092</span></span>
<span class="line"><span>pangu:</span></span>
<span class="line"><span>kafka:</span></span>
<span class="line"><span>servers: \${spring.kafka.bootstrap-servers}</span></span>
<span class="line"><span>pangu:</span></span>
<span class="line"><span>elasticsearch:</span></span>
<span class="line"><span># ES地址</span></span>
<span class="line"><span>hosts: &#39;10.1.50.63:9200&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><h4 id="技术原理" tabindex="-1"><a class="header-anchor" href="#技术原理"><span>技术原理</span></a></h4></blockquote><p><strong>注解</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    注解的方式主要定义了一个增强类PanguLogAspect 切入口为带有PanguLog注解的方法</span></span>
<span class="line"><span>操作名，操作类型，对象ID的配置支持spel表达式，异步标记isAsync可以线程化执行以减小对</span></span>
<span class="line"><span>业务的影响。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.frame.log;</span></span>
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
<span class="line"><span>@Aspect</span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>public class  PanguLogAspectimplementsEnvironmentAware {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>privateboolean   isAsync;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final   SpelExpressionParser parser =newSpelExpressionParser();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final   DefaultParameterNameDiscoverer nameDiscoverer =newDefaultParameterNameDiscoverer();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Autowired(required=false)</span></span>
<span class="line"><span>private LogHandler logHandler;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final   ExecutorService pool = LogThreadPool.LOG_POOL;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final   KafkaTemplate&lt;String, Object&gt; kafkaTemplate;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final   DataToLocalHandler dataToLocalHandler;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final   PanguLogProperties panguLogProperties;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicPanguLogAspect(KafkaTemplate&lt;String, Object&gt; kafkaTemplate,</span></span>
<span class="line"><span>                          DataToLocalHandler dataToLocalHandler,</span></span>
<span class="line"><span>                          PanguLogProperties panguLogProperties) {</span></span>
<span class="line"><span>this.kafkaTemplate = kafkaTemplate;</span></span>
<span class="line"><span>this.dataToLocalHandler = dataToLocalHandler;</span></span>
<span class="line"><span>this.panguLogProperties = panguLogProperties;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>private void   setEnvironment(Environment environment) {</span></span>
<span class="line"><span>        String isAsync = environment.getProperty(&quot;pangu.log.async&quot;);</span></span>
<span class="line"><span>if (isAsync !=null) {</span></span>
<span class="line"><span>this.isAsync = boolean  .parseboolean  (isAsync);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Pointcut(&quot;@annotation(com.kingtsoft.pangu.frame.log.annotation.PanguLog)&quot;)</span></span>
<span class="line"><span>private void   logPointCut() {</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 日志保存切口</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @paramjoinPoint 切口入参</span></span>
<span class="line"><span>     * @return 接口执行返回数据</span></span>
<span class="line"><span>     * @author 金炀</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    @Around(&quot;logPointCut()&quot;)</span></span>
<span class="line"><span>public Object saveOperation(ProceedingJoinPoint joinPoint) throws Throwable {</span></span>
<span class="line"><span>        Object ret = joinPoint.proceed();</span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>if (RequestContextHolder.getRequestAttributes() !=null) {</span></span>
<span class="line"><span>                HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();</span></span>
<span class="line"><span>                String host = request.getRemoteHost();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Object[] args = joinPoint.getArgs();</span></span>
<span class="line"><span>                List&lt;Object&gt; agentArgs =new ArrayList&lt;&gt;();</span></span>
<span class="line"><span>if (args !=null&amp;&amp; args.length &gt;0) {</span></span>
<span class="line"><span>                    Collections.addAll(agentArgs, args);</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 全局跟踪ID</span></span>
<span class="line"><span>                String traceId = LogTraceHolder.getTraceIdNecessary();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (this.isAsync) {</span></span>
<span class="line"><span>                    pool.execute(() -&gt;doOperationLogSave(joinPoint, agentArgs.toArray(), host, ret, traceId));</span></span>
<span class="line"><span>                } else {</span></span>
<span class="line"><span>doOperationLogSave(joinPoint, agentArgs.toArray(), host, ret, traceId);</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        } catch (Exception e) {</span></span>
<span class="line"><span>            log.error(e.getMessage());</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>return ret;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 日志相关数据封装</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @paramjoinPoint 日志数据</span></span>
<span class="line"><span>     * @author 金炀</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>private void  doOperationLogSave(ProceedingJoinPoint joinPoint, Object[] args, String host, Object outParam, String traceId) {</span></span>
<span class="line"><span>        MethodSignature signature = (MethodSignature) joinPoint.getSignature();</span></span>
<span class="line"><span>        Method method = signature.getMethod();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        PanguLog panguLog = method.getAnnotation(PanguLog.class);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        String operateName = panguLog.operateName();</span></span>
<span class="line"><span>// SPEL支持</span></span>
<span class="line"><span>if (operateName.contains(&quot;#&quot;)) {</span></span>
<span class="line"><span>            operateName =generateKeyBySpEl(operateName, joinPoint, args);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        Integer operateType =getOperateType(panguLog, joinPoint, args);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        String objId = panguLog.objId();</span></span>
<span class="line"><span>if (StringUtils.hasText(objId) &amp;&amp; objId.contains(&quot;#&quot;)) {</span></span>
<span class="line"><span>            objId =generateKeyBySpEl(objId, joinPoint, args);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (!StringUtils.hasText(operateName)) {</span></span>
<span class="line"><span>            Integer finalOperateType = operateType;</span></span>
<span class="line"><span>            Optional&lt;PanguLogTypeEnum&gt; logTypeEnum = Arrays.stream(PanguLogTypeEnum.values()).filter(</span></span>
<span class="line"><span>                    en -&gt; en.getLogType().equals(finalOperateType)</span></span>
<span class="line"><span>            ).findAny();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (logTypeEnum.isEmpty()) {</span></span>
<span class="line"><span>                operateType =9;</span></span>
<span class="line"><span>            } else {</span></span>
<span class="line"><span>                operateName += logTypeEnum.get().getMsg();</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        String context = (&quot;source：&quot;+ host +&quot; 方法：&quot;+ method.getName() +&quot;【&quot;+ operateName +&quot;】&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        StringBuilder operateContent =newStringBuilder(context +&quot;-&gt;&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Object[] params = joinPoint.getArgs();</span></span>
<span class="line"><span>if (params !=null) {</span></span>
<span class="line"><span>for (Object obj : params) {</span></span>
<span class="line"><span>                operateContent.append(obj.getClass()).append(&quot;;&quot;);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//...存储</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private void  sendMsg(LogOperateMessage logOperateMessage) {</span></span>
<span class="line"><span>        Map&lt;String, Object&gt; map =new HashMap&lt;&gt;(4);</span></span>
<span class="line"><span>        map.put(KafkaHeaders.TOPIC, FrameLogConst.LOG_TOPIC_ANNOTATION);</span></span>
<span class="line"><span>        map.put(KafkaHeaders.KEY, PanguLogUtil.createMsgKey(FrameLogConst.LogType.ANNOTATION_LOG));</span></span>
<span class="line"><span>        map.put(FrameLogConst.LOG_TYPE_KEY, FrameLogConst.LogType.ANNOTATION_LOG);</span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>            Message&lt;String&gt; message =new GenericMessage&lt;&gt;(JSON.toJSONString(logOperateMessage), newMessageHeaders(map));</span></span>
<span class="line"><span>            kafkaTemplate.send(message);</span></span>
<span class="line"><span>        } catch (Exception e) {</span></span>
<span class="line"><span>            e.printStackTrace();</span></span>
<span class="line"><span>            log.error(&quot;消息发送失败！&quot;);</span></span>
<span class="line"><span>// 发送失败持久化</span></span>
<span class="line"><span>            dataToLocalHandler.doDataToLocal(JSON.toJSONString(logOperateMessage), map, FrameLogConst.LogType.ANNOTATION_LOG);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private Integer getOperateType(PanguLog panguLog, ProceedingJoinPoint joinPoint, Object[] args) {</span></span>
<span class="line"><span>        Integer operateType;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        String typeExPress = panguLog.typeExPress();</span></span>
<span class="line"><span>if (StringUtils.hasText(typeExPress) &amp;&amp; typeExPress.contains(&quot;#&quot;)) {</span></span>
<span class="line"><span>            operateType =generateKeyBySpEl(typeExPress, joinPoint, args);</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            PanguLogTypeEnum operateTypeEnum = panguLog.operateType();</span></span>
<span class="line"><span>            operateType = operateTypeEnum.getLogType();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>return operateType;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @SuppressWarnings({&quot;unchecked&quot;})</span></span>
<span class="line"><span>private &lt;T&gt; T generateKeyBySpEl(String spElString, ProceedingJoinPoint joinPoint, Object[] args) {</span></span>
<span class="line"><span>        MethodSignature methodSignature = (MethodSignature) joinPoint.getSignature();</span></span>
<span class="line"><span>String[] paramNames = nameDiscoverer.getParameterNames(methodSignature.getMethod());</span></span>
<span class="line"><span>        Expression expression = parser.parseExpression(spElString);</span></span>
<span class="line"><span>        EvaluationContext context =newStandardEvaluationContext();</span></span>
<span class="line"><span>for (int i =0; i &lt; args.length; i++) {</span></span>
<span class="line"><span>assert paramNames !=null;</span></span>
<span class="line"><span>            context.setVariable(paramNames[i], args[i]);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>return (T) expression.getValue(context);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    注意，消息发送的时候，异常捕获有个</span></span>
<span class="line"><span>dataToLocalHandler.doDataToLocal(JSON.toJSONString(logOperateMessage), map, FrameLogConst.LogType.ANNOTATION_LOG);</span></span>
<span class="line"><span>此方法是将消息数据持久化到本地,防止消息丢失。部分代码如下。不难发现目录会根据日期进行创建，</span></span>
<span class="line"><span>并在最后会调用modifyPathDir方法，此方法会整理历史目录数据，若存在历史目录数据，为了节省</span></span>
<span class="line"><span>空间，会对所有历史目录进行压缩。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>@SneakyThrows</span></span>
<span class="line"><span>private void   doDataToLocal(String data, Map&lt;String, Object&gt; messageHeader, String logType) {</span></span>
<span class="line"><span>if (!StringUtils.hasText(logType)) {</span></span>
<span class="line"><span>            logType = FrameLogConst.LogType.UN_KNOW_LOG;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        LocalDate nowDate = LocalDate.now();</span></span>
<span class="line"><span>        String logPath = String.format(&quot;%s/%s/%s&quot;, basePath, nowDate, logType);</span></span>
<span class="line"><span>        File baseDir =newFile(logPath);</span></span>
<span class="line"><span>if (!baseDir.exists()) {</span></span>
<span class="line"><span>if (!baseDir.mkdirs()) {</span></span>
<span class="line"><span>thrownewTipException(&quot;消息持久化基础目录创建失败！&quot;);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        String key = (String) messageHeader.get(KafkaHeaders.KEY);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        File jsonFile =newFile(logPath +&quot;/&quot;+ key +&quot;.json&quot;);</span></span>
<span class="line"><span>if (!jsonFile.exists()) {</span></span>
<span class="line"><span>if (!jsonFile.createNewFile()) {</span></span>
<span class="line"><span>thrownewTipException(&quot;消息持久化文件创建失败！&quot;);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>// 在考虑要不要加个上传计数器，用来统计上传次数(失败次数)</span></span>
<span class="line"><span>        JSONObject jsonObject =newJSONObject()</span></span>
<span class="line"><span>                .fluentPut(FrameLogConst.MESSAGE_HEADER_KEY, messageHeader)</span></span>
<span class="line"><span>                .fluentPut(FrameLogConst.MESSAGE_DATA_KEY, data);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 将格式化后的字符串写入文件</span></span>
<span class="line"><span>        Writer write =null;</span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>            write =newOutputStreamWriter(newFileOutputStream(jsonFile), StandardCharsets.UTF_8);</span></span>
<span class="line"><span>            write.write(jsonObject.toJSONString());</span></span>
<span class="line"><span>        } finally {</span></span>
<span class="line"><span>if (write !=null) {</span></span>
<span class="line"><span>                write.flush();</span></span>
<span class="line"><span>                write.close();</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>modifyPathDir();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private void  modifyPathDir() {</span></span>
<span class="line"><span>        File baseDir =newFile(basePath);</span></span>
<span class="line"><span>if (!baseDir.exists()) {</span></span>
<span class="line"><span>return;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>File[] fileDates = baseDir.listFiles();</span></span>
<span class="line"><span>if (fileDates ==null) {</span></span>
<span class="line"><span>return;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        String nowDateStr = LocalDate.now().toString();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>for (File fileDate : fileDates) {</span></span>
<span class="line"><span>if (!fileDate.isDirectory()) {</span></span>
<span class="line"><span>continue;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (fileDate.getName().equals(nowDateStr) || fileDate.getName().equals(FrameLogConst.LOG_DIR_TMP)) {</span></span>
<span class="line"><span>continue;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            CompressUtil.compressToTgz(fileDate.toPath().toString());</span></span>
<span class="line"><span>clearSource(fileDate);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    当然也暴露了一个接口用来对数据进行补传。会对数据进行解压，并且一份份上传，若只上传了</span></span>
<span class="line"><span>一部分，又会对未上传部分重新压缩。确保数据处理精细的颗粒度。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>持久层</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    持久层的日志自动化记录主要用了mybatis的拦截器MbFrameLogIntercept</span></span>
<span class="line"><span>    （目前只接入了此持久层框架）</span></span>
<span class="line"><span>    只记录增删改操作，定义了持久层特有的数据结构DbOperateLog.然后解析SQL</span></span>
<span class="line"><span>数据，持久层因为操作的频繁性，所以强制是多线程处理的消息。getStackTrace并且</span></span>
<span class="line"><span>可以看出会尽可能定位执行的代码段。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>private void  doExProceed(Object[] args, LocalDateTime now, MappedStatement ms, OperateContext operateContext) {</span></span>
<span class="line"><span>    DbOperateLog dbOperateLog =newDbOperateLog()</span></span>
<span class="line"><span>            .setCreateTime(now)</span></span>
<span class="line"><span>            .setLogPosition(getStackTrace(ms.getId(), &quot;com.sun.proxy&quot;))</span></span>
<span class="line"><span>            .setOperateContent(String.format(&quot;【数据库%s日志】 值：%s&quot;,</span></span>
<span class="line"><span>                    (ms.getSqlCommandType().equals(SqlCommandType.INSERT)) ?&quot;新增&quot;:</span></span>
<span class="line"><span>                            ms.getSqlCommandType().equals(SqlCommandType.DELETE) ?&quot;删除&quot;:&quot;更新&quot;,</span></span>
<span class="line"><span>                    JSON.toJSONString(args[1]))</span></span>
<span class="line"><span>            );</span></span>
<span class="line"><span>    BoundSql boundSql = ms.getBoundSql(args[1]);</span></span>
<span class="line"><span>    String sql =getSql(boundSql, ms);</span></span>
<span class="line"><span>    String tableName =getTableName(sql, ms.getSqlCommandType());</span></span>
<span class="line"><span>    dbOperateLog.setExecSql(sql).setTableName(tableName);</span></span>
<span class="line"><span>if (operateContext !=null) {</span></span>
<span class="line"><span>        BeanUtils.copyProperties(operateContext, dbOperateLog);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    dbOperateLog.setModule(panguLogProperties.getModule());</span></span>
<span class="line"><span>    dbOperateLog.setTraceId(LogTraceHolder.getTraceIdNecessary());</span></span>
<span class="line"><span>    dbOperateLog.setIp(LogTraceHolder.getLogLocalIp());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    pool.execute(() -&gt;sendMsg(dbOperateLog));</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    数据结构OperateContext为记录基础数据，主要由客户端传入</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>public class  DbOperateLogextendsOperateContextimplementsSerializable {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 记录ID</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>private long  id;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 所属模块</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>private String module;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 操作内容</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>private String operateContent;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 执行时间</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    @JsonFormat(pattern=&quot;yyyy-MM-dd HH:mm:ss&quot;, timezone=&quot;GMT+8&quot;)</span></span>
<span class="line"><span>private LocalDateTime createTime;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 执行时间(时间戳)</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>private long  createTimelong ;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 表名</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>private String tableName;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 执行的SQL</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>private String execSql;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 执行的代码位置</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>private String logPosition;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * ip地址</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>private String ip;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 跟踪ID</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>private String traceId;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 备注</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>private String remark;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>@Data</span></span>
<span class="line"><span>public class  OperateContextimplementsSerializable {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /** 菜单代码 */</span></span>
<span class="line"><span>private String menuCode;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /** 菜单名称 */</span></span>
<span class="line"><span>private String menuName;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /** 客户端 */</span></span>
<span class="line"><span>private String terminal;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /** 用户ID */</span></span>
<span class="line"><span>private Integer userId;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>常规</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    常规模式指的类似于log4j那样直接手动记录日志，主要运用了jdk动态代理实现。</span></span>
<span class="line"><span>定义了一个基础接口，可以看出主要是集成了SLF4J的门面接口，用来定义实际执行的方法。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.frame.log.normal;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import org.slf4j.Logger;</span></span>
<span class="line"><span>import org.slf4j.Marker;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Title: &lt;br&gt;</span></span>
<span class="line"><span> * Description: &lt;br&gt;</span></span>
<span class="line"><span> * Company: KingTang &lt;br&gt;</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * @author 金炀</span></span>
<span class="line"><span> * @version 1.0</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public interface  PgLoggerextendsLogger {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    Class&lt;?&gt; getClazz();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>voidtrace(String s);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>voidtrace(String s, Object o);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>voidtrace(String s, Object o, Object o1);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>voidtrace(String s, Object... objects);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>voidtrace(String s, Throwable throwable);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>voidtrace(Marker marker, String s);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>voidtrace(Marker marker, String s, Object o);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>voidtrace(Marker marker, String s, Object o, Object o1);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>voidtrace(Marker marker, String s, Object... objects);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>voidtrace(Marker marker, String s, Throwable throwable);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>voiddebug(String s);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>voiddebug(String s, Object o);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>voiddebug(String s, Object o, Object o1);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>voiddebug(String s, Object... objects);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>voiddebug(String s, Throwable throwable);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>voiddebug(Marker marker, String s);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>voiddebug(Marker marker, String s, Object o);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>voiddebug(Marker marker, String s, Object o, Object o1);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	// 等等</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    PgLoggerImpl 为PgLogger的实现类，其实就是实现了slf4j的日志接口方法。</span></span>
<span class="line"><span>目的一个是为了后续拓展及添加切入口。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.frame.log.normal;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import org.slf4j.Logger;</span></span>
<span class="line"><span>import org.slf4j.LoggerFactory;</span></span>
<span class="line"><span>import org.slf4j.Marker;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Title: &lt;br&gt;</span></span>
<span class="line"><span> * Description: &lt;br&gt;</span></span>
<span class="line"><span> * Company: KingTang &lt;br&gt;</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * @author 金炀</span></span>
<span class="line"><span> * @version 1.0</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public class  PgLoggerImplimplementsPgLogger {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final   Logger log;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final   Class&lt;?&gt; clazz;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicPgLoggerImpl(Class&lt;?&gt; clazz) {</span></span>
<span class="line"><span>this.clazz = clazz;</span></span>
<span class="line"><span>        log = LoggerFactory.getLogger(clazz);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>public class  &lt;?&gt; getClazz() {</span></span>
<span class="line"><span>return clazz;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>public String getName() {</span></span>
<span class="line"><span>return log.getName();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>publicboolean  isTraceEnabled() {</span></span>
<span class="line"><span>return log.isTraceEnabled();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>private void   trace(String s) {</span></span>
<span class="line"><span>        log.trace(s);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>private void   trace(String s, Object o) {</span></span>
<span class="line"><span>        log.trace(s, o);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>private void   trace(String s, Object o, Object o1) {</span></span>
<span class="line"><span>        log.trace(s, o, o1);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>private void   trace(String s, Object... objects) {</span></span>
<span class="line"><span>        log.trace(s, objects);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>private void   trace(String s, Throwable throwable) {</span></span>
<span class="line"><span>        log.trace(s, throwable);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>publicboolean  isTraceEnabled(Marker marker) {</span></span>
<span class="line"><span>return log.isTraceEnabled(marker);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>private void   trace(Marker marker, String s) {</span></span>
<span class="line"><span>        log.trace(marker, s);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>private void   trace(Marker marker, String s, Object o) {</span></span>
<span class="line"><span>        log.trace(marker, s, o);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>private void   trace(Marker marker, String s, Object o, Object o1) {</span></span>
<span class="line"><span>        log.trace(marker, s, o, o1);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>private void   trace(Marker marker, String s, Object... objects) {</span></span>
<span class="line"><span>        log.trace(marker, s, objects);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>private void   trace(Marker marker, String s, Throwable throwable) {</span></span>
<span class="line"><span>        log.trace(marker, s, throwable);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>publicboolean  isDebugEnabled() {</span></span>
<span class="line"><span>return log.isDebugEnabled();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 等等</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    然后定义一个门面接口生成的PanguLoggerFactory，内部静态方法getLogger会</span></span>
<span class="line"><span>创建一个PgLogger的代理，代理为类NormalLogProxy，主要是获取NormalLogInterceptor，</span></span>
<span class="line"><span>可以发现NormalLogInterceptor对象是通过NormalBeanCache缓存的，若不存在则会</span></span>
<span class="line"><span>新构建一个，保证了此类的单例性。然后创建了类NormalLogInvocationHandler。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.frame.log.normal;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import java.lang.reflect.Proxy;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Title: &lt;br&gt;</span></span>
<span class="line"><span> * Description: &lt;br&gt;</span></span>
<span class="line"><span> * Company: KingTang &lt;br&gt;</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * @author 金炀</span></span>
<span class="line"><span> * @version 1.0</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public class  PanguLoggerFactory {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicstatic PgLogger getLogger(Class&lt;?&gt; clazz) {</span></span>
<span class="line"><span>        PgLogger target =newPgLoggerImpl(clazz);</span></span>
<span class="line"><span>        NormalLogProxy logProxy =newNormalLogProxy();</span></span>
<span class="line"><span>return (PgLogger) logProxy.getProxy(target);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>classNormalLogProxy {</span></span>
<span class="line"><span>public Object getProxy(Object object) {</span></span>
<span class="line"><span>        NormalLogInterceptor interceptor = NormalBeanCache.interceptor;</span></span>
<span class="line"><span>if (interceptor ==null) {</span></span>
<span class="line"><span>            interceptor =newNormalLogInterceptor();</span></span>
<span class="line"><span>            NormalBeanCache.interceptor = interceptor;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        NormalLogInvocationHandler normalHandler =newNormalLogInvocationHandler(interceptor);</span></span>
<span class="line"><span>        normalHandler.setObject(object);</span></span>
<span class="line"><span>return Proxy.newProxyInstance(object.getClass().getClassLoader(),</span></span>
<span class="line"><span>                object.getClass().getInterfaces(), normalHandler);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    查看NormalLogInvocationHandler类如下，他根据代理规范，实现了InvocationHandler接口，</span></span>
<span class="line"><span>对象及拦截器都会通过构造器注入（手动赋值，非spring），然后配置执行器为实际方法执行后执行</span></span>
<span class="line"><span>NormalLogInterceptor的afterNormalLog方法。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.frame.log.normal;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import java.lang.reflect.InvocationHandler;</span></span>
<span class="line"><span>import java.lang.reflect.Method;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Title: &lt;br&gt;</span></span>
<span class="line"><span> * Description: &lt;br&gt;</span></span>
<span class="line"><span> * Company: KingTang &lt;br&gt;</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * @author 金炀</span></span>
<span class="line"><span> * @version 1.0</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public class  NormalLogInvocationHandlerimplementsInvocationHandler {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private Object object;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final   NormalLogInterceptor interceptor;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicNormalLogInvocationHandler(NormalLogInterceptor interceptor) {</span></span>
<span class="line"><span>this.interceptor = interceptor;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private void   setObject(Object object) {</span></span>
<span class="line"><span>this.object = object;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {</span></span>
<span class="line"><span>        Object result = method.invoke(object, args);</span></span>
<span class="line"><span>        interceptor.afterNormalLog(proxy, method, args);</span></span>
<span class="line"><span>return result;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    继续查看NormalLogInterceptor类，可以发现NormalLogInterceptor并非</span></span>
<span class="line"><span>被spring所托管，因为主体的那个类是通过new的形式产生了，所以内部的对象都要通过NormalBeanCache</span></span>
<span class="line"><span>中缓存的对象来处理。NormalLogInterceptor本身就是针对log日志的结构体，对传入信息进行解析，</span></span>
<span class="line"><span>包括支持{}等模式复制及异常对象基类及Marker格式的解析。这样就可以组装好结构化数据进行传输了。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.frame.log.normal;</span></span>
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
<span class="line"><span>public class  NormalLogInterceptor {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private KafkaTemplate&lt;String, Object&gt; kafkaTemplate;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private DataToLocalHandler dataToLocalHandler;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private PanguLogProperties panguLogProperties;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final   ExecutorService pool = LogThreadPool.LOG_POOL;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public NormalLogInterceptor setKafkaTemplate(KafkaTemplate&lt;String, Object&gt; kafkaTemplate) {</span></span>
<span class="line"><span>this.kafkaTemplate = kafkaTemplate;</span></span>
<span class="line"><span>returnthis;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public NormalLogInterceptor setDataToLocalHandler(DataToLocalHandler dataToLocalHandler) {</span></span>
<span class="line"><span>this.dataToLocalHandler = dataToLocalHandler;</span></span>
<span class="line"><span>returnthis;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public NormalLogInterceptor setPanguLogProperties(PanguLogProperties panguLogProperties) {</span></span>
<span class="line"><span>this.panguLogProperties = panguLogProperties;</span></span>
<span class="line"><span>returnthis;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private void   afterNormalLog(Object proxy, Method method, Object[] args) {</span></span>
<span class="line"><span>if (method.getName().startsWith(&quot;is&quot;) || method.getName().startsWith(&quot;get&quot;)) {</span></span>
<span class="line"><span>return;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        Class&lt;?&gt; aClass;</span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>            Method methodClazz = method.getDeclaringClass().getMethod(&quot;getClazz&quot;);</span></span>
<span class="line"><span>            aClass = (Class&lt;?&gt;) methodClazz.invoke(proxy);</span></span>
<span class="line"><span>        } catch (IllegalAccessException | InvocationTargetException | NoSuchMethodException e) {</span></span>
<span class="line"><span>            e.printStackTrace();</span></span>
<span class="line"><span>return;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>// 开始消息传输</span></span>
<span class="line"><span>        LogOperateMessage logOperateMessage =newLogOperateMessage();</span></span>
<span class="line"><span>        logOperateMessage.setLogPosition(getStackTrace(&quot;com.sun.proxy&quot;));</span></span>
<span class="line"><span>        logOperateMessage.setClassName(aClass.getName());</span></span>
<span class="line"><span>if (args[0] instanceof Marker) {</span></span>
<span class="line"><span>            Marker marker = (Marker) args[0];</span></span>
<span class="line"><span>            logOperateMessage.setOperateName(marker.getName());</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        logOperateMessage.setOperateContent(getLogContent(method, args, 0));</span></span>
<span class="line"><span>        logOperateMessage.setCreateTime(LocalDateTime.now());</span></span>
<span class="line"><span>        logOperateMessage.setLogLevel(getLogLevel(method.getName()));</span></span>
<span class="line"><span>        logOperateMessage.setModule(panguLogProperties.getModule());</span></span>
<span class="line"><span>        logOperateMessage.setTraceId(LogTraceHolder.getTraceIdNecessary());</span></span>
<span class="line"><span>        logOperateMessage.setIp(LogTraceHolder.getLogLocalIp());</span></span>
<span class="line"><span>        pool.execute(() -&gt;sendMsg(logOperateMessage));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private String getLogContent(Method method, Object[] args, intstartIdx) {</span></span>
<span class="line"><span>        Class&lt;?&gt; [] classes = method.getParameterTypes();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (classes.length - startIdx ==1) {</span></span>
<span class="line"><span>return args[0].toString();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (args[0] instanceof Marker) {</span></span>
<span class="line"><span>Object[] params =newObject[args.length -1];</span></span>
<span class="line"><span>            System.arraycopy(args, 1, params, 0, args.length -1);</span></span>
<span class="line"><span>returngetLogContent(method, params, 1);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (classes.length - startIdx &gt;=2) {</span></span>
<span class="line"><span>if (args[1] instanceof Throwable) {</span></span>
<span class="line"><span>returngetLogStringContent(args);</span></span>
<span class="line"><span>            } elseif (&quot;[Ljava.lang.Object;&quot;.equals(args[1].getClass().getName())) {</span></span>
<span class="line"><span>Object[] params = (Object[]) args[1];</span></span>
<span class="line"><span>returngetLogStringValueContent((String) args[0], params);</span></span>
<span class="line"><span>            } else {</span></span>
<span class="line"><span>returngetLogStringValueContent(args);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>return&quot;&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private String getLogStringValueContent(Object[] params) {</span></span>
<span class="line"><span>        String text = (String) params[0];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>for (int i =1; i &lt; params.length; i++) {</span></span>
<span class="line"><span>            text = text.replace(&quot;{}&quot;, params[i].toString());</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>return text;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private String getLogStringValueContent(String text, Object[] params) {</span></span>
<span class="line"><span>for (Object param : params) {</span></span>
<span class="line"><span>            text = text.replace(&quot;{}&quot;, param.toString());</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>return text;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private String getLogStringContent(Object[] args) {</span></span>
<span class="line"><span>        StringBuilder text =newStringBuilder((String) args[0]).append(&quot;\\n&quot;);</span></span>
<span class="line"><span>        Throwable throwable = (Throwable) args[1];</span></span>
<span class="line"><span>        text.append(throwable.toString()).append(&quot;\\n&quot;);</span></span>
<span class="line"><span>StackTraceElement[] traceElements = throwable.getStackTrace();</span></span>
<span class="line"><span>for (StackTraceElement traceElement : traceElements) {</span></span>
<span class="line"><span>            text.append(traceElement.toString()).append(&quot;\\n&quot;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>return text.toString();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private Integer getLogLevel(String methodName) {</span></span>
<span class="line"><span>for (PanguLogLevelEnum levelEnum : PanguLogLevelEnum.values()) {</span></span>
<span class="line"><span>if (levelEnum.getName().toLowerCase().equals(methodName)) {</span></span>
<span class="line"><span>return levelEnum.getLogLevel();</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>return PanguLogLevelEnum.LEVEL_INFO.getLogLevel();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicstatic String getStackTrace(String className) {</span></span>
<span class="line"><span>StackTraceElement[] stackTrace = Thread.currentThread().getStackTrace();</span></span>
<span class="line"><span>for (int i =0; i &lt; stackTrace.length; i++) {</span></span>
<span class="line"><span>            StackTraceElement traceElement = stackTrace[i];</span></span>
<span class="line"><span>if (traceElement.getClassName().contains(className) &amp;&amp; i &lt; stackTrace.length -1) {</span></span>
<span class="line"><span>return stackTrace[i +1].toString();</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>returnnull;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private void  sendMsg(LogOperateMessage logOperateMessage) {</span></span>
<span class="line"><span>        Map&lt;String, Object&gt; map =new HashMap&lt;&gt;(4);</span></span>
<span class="line"><span>        map.put(KafkaHeaders.TOPIC, FrameLogConst.LOG_TOPIC_NORMAL);</span></span>
<span class="line"><span>        map.put(KafkaHeaders.KEY, PanguLogUtil.createMsgKey(FrameLogConst.LogType.NORMAL_LOG));</span></span>
<span class="line"><span>        map.put(FrameLogConst.LOG_TYPE_KEY, FrameLogConst.LogType.NORMAL_LOG);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>            Message&lt;String&gt; message =new GenericMessage&lt;&gt;(JSON.toJSONString(logOperateMessage), newMessageHeaders(map));</span></span>
<span class="line"><span>            kafkaTemplate.send(message);</span></span>
<span class="line"><span>        } catch (Exception e) {</span></span>
<span class="line"><span>            e.printStackTrace();</span></span>
<span class="line"><span>            log.error(&quot;消息发送失败！&quot;);</span></span>
<span class="line"><span>            dataToLocalHandler.doDataToLocal(JSON.toJSONString(logOperateMessage), map, FrameLogConst.LogType.NORMAL_LOG);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    NormalBeanCache数据来源于下main这个类，在应用启动时会获取各类所需的bean，</span></span>
<span class="line"><span>并且缓存在NormalBeanCache.interceptor中，这样就可以做到在new一个日志对象时候运用到bean对象。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.frame.log.normal;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import com.kingtsoft.pangu.frame.log.DataToLocalHandler;</span></span>
<span class="line"><span>import com.kingtsoft.pangu.frame.log.PanguLogProperties;</span></span>
<span class="line"><span>import lombok.extern.slf4j.Slf4j;</span></span>
<span class="line"><span>import org.springframework.boot.ApplicationArguments;</span></span>
<span class="line"><span>import org.springframework.boot.ApplicationRunner;</span></span>
<span class="line"><span>import org.springframework.context.annotation.Configuration;</span></span>
<span class="line"><span>import org.springframework.kafka.core.KafkaTemplate;</span></span>
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
<span class="line"><span>public class  NormalLogConfigurationimplementsApplicationRunner {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final   KafkaTemplate&lt;String, Object&gt; kafkaTemplate;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final   DataToLocalHandler dataToLocalHandler;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final   PanguLogProperties panguLogProperties;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicNormalLogConfiguration(KafkaTemplate&lt;String, Object&gt; kafkaTemplate,</span></span>
<span class="line"><span>                                  DataToLocalHandler dataToLocalHandler,</span></span>
<span class="line"><span>                                  PanguLogProperties panguLogProperties) {</span></span>
<span class="line"><span>this.kafkaTemplate = kafkaTemplate;</span></span>
<span class="line"><span>this.dataToLocalHandler = dataToLocalHandler;</span></span>
<span class="line"><span>this.panguLogProperties = panguLogProperties;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>private void   run(ApplicationArguments args) {</span></span>
<span class="line"><span>if (NormalBeanCache.interceptor ==null) {</span></span>
<span class="line"><span>            NormalBeanCache.interceptor =newNormalLogInterceptor();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        NormalBeanCache.interceptor</span></span>
<span class="line"><span>                .setKafkaTemplate(kafkaTemplate)</span></span>
<span class="line"><span>                .setDataToLocalHandler(dataToLocalHandler)</span></span>
<span class="line"><span>                .setPanguLogProperties(panguLogProperties);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>server端</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    日志的服务端主要是接收kafka消息数据</span></span>
<span class="line"><span>首先，目前的日志模式es的索引都是统一的，并未使用日期进行区分，</span></span>
<span class="line"><span>所以直接在服务启动的时候去判断索引是否存在。某种程度下可以减少一次流程判断压力。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.frame.log.server.biz.config;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import com.kingtsoft.pangu.data.es.IndexService;</span></span>
<span class="line"><span>import com.kingtsoft.pangu.frame.log.server.biz.listener.AnnotationLogListener;</span></span>
<span class="line"><span>import com.kingtsoft.pangu.frame.log.server.biz.listener.DbLogListener;</span></span>
<span class="line"><span>import com.kingtsoft.pangu.frame.log.server.biz.listener.NormalLogListener;</span></span>
<span class="line"><span>import lombok.SneakyThrows;</span></span>
<span class="line"><span>import lombok.extern.slf4j.Slf4j;</span></span>
<span class="line"><span>import org.springframework.boot.ApplicationArguments;</span></span>
<span class="line"><span>import org.springframework.boot.ApplicationRunner;</span></span>
<span class="line"><span>import org.springframework.context.annotation.Configuration;</span></span>
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
<span class="line"><span>public class  EsLogStartupConfigimplementsApplicationRunner {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final   IndexService indexService;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicEsLogStartupConfig(IndexService indexService) {</span></span>
<span class="line"><span>this.indexService = indexService;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    @SneakyThrows</span></span>
<span class="line"><span>private void   run(ApplicationArguments args) {</span></span>
<span class="line"><span>// 持久层索引</span></span>
<span class="line"><span>if (!indexService.indexExists(DbLogListener.LOG_IDX)) {</span></span>
<span class="line"><span>            indexService.createIndex(DbLogListener.LOG_IDX);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>// 注解日志层索引</span></span>
<span class="line"><span>if (!indexService.indexExists(AnnotationLogListener.LOG_IDX)) {</span></span>
<span class="line"><span>            indexService.createIndex(AnnotationLogListener.LOG_IDX);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>// 常规日志记录索引</span></span>
<span class="line"><span>if (!indexService.indexExists(NormalLogListener.LOG_IDX)) {</span></span>
<span class="line"><span>            indexService.createIndex(NormalLogListener.LOG_IDX);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    然后对消息进行监听，然后创建一个setCreateTimelong ，主要是创建时间的时间点，</span></span>
<span class="line"><span>这样ES存储可以更轻松的进行比较排序。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.frame.log.server.biz.listener;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import com.alibaba.fastjson2.JSON;</span></span>
<span class="line"><span>import com.kingtsoft.pangu.data.es.DocumentService;</span></span>
<span class="line"><span>import com.kingtsoft.pangu.frame.log.common.constants.FrameLogConst;</span></span>
<span class="line"><span>import com.kingtsoft.pangu.frame.log.common.model.LogOperateMessage;</span></span>
<span class="line"><span>import com.kingtsoft.pangu.frame.log.server.biz.utils.LogMessageUtil;</span></span>
<span class="line"><span>import lombok.extern.slf4j.Slf4j;</span></span>
<span class="line"><span>import org.apache.kafka.clients.consumer.ConsumerRecord;</span></span>
<span class="line"><span>import org.springframework.kafka.annotation.KafkaListener;</span></span>
<span class="line"><span>import org.springframework.stereotype.Component;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import java.time.ZoneOffset;</span></span>
<span class="line"><span>import java.util.Optional;</span></span>
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
<span class="line"><span>public class  AnnotationLogListener {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final   DocumentService&lt;LogOperateMessage&gt; documentService;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicstaticfinal String LOG_IDX = FrameLogConst.LogIndex.LOG_ANNOTATION_IDX;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicAnnotationLogListener(DocumentService&lt;LogOperateMessage&gt; documentService) {</span></span>
<span class="line"><span>this.documentService = documentService;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @KafkaListener(id=&quot;annotationLogListener&quot;, topics= {FrameLogConst.LOG_TOPIC_ANNOTATION}, groupId=&quot;mainGroup&quot;)</span></span>
<span class="line"><span>private void   annotationLogListener(ConsumerRecord&lt;String, String&gt; record) {</span></span>
<span class="line"><span>        Optional&lt;String&gt; message = Optional.ofNullable(record.value());</span></span>
<span class="line"><span>        String key = LogMessageUtil.getLogKey(record.key());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (message.isEmpty()) {</span></span>
<span class="line"><span>            log.info(&quot;日志数据为空！ &quot;);</span></span>
<span class="line"><span>return;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>doAnnotationLogSave(message.get(), key);</span></span>
<span class="line"><span>        } catch (Exception e) {</span></span>
<span class="line"><span>            e.printStackTrace();</span></span>
<span class="line"><span>            log.error(&quot;日志数据保存失败！&quot;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private void  doAnnotationLogSave(String msg, String key) {</span></span>
<span class="line"><span>        LogOperateMessage logOperateMessage = JSON.parseObject(msg, LogOperateMessage.class);</span></span>
<span class="line"><span>        logOperateMessage.setCreateTimelong (logOperateMessage.getCreateTime().toEpochSecond(ZoneOffset.of(&quot;+8&quot;)));</span></span>
<span class="line"><span>        documentService.saveOrUpdateDocument(LOG_IDX, key, logOperateMessage);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    剩下的内容则为ES模块的各类CRUD操作</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.frame.log.server.biz.service;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Title: &lt;br&gt;</span></span>
<span class="line"><span> * Description: &lt;br&gt;</span></span>
<span class="line"><span> * Company: KingTang &lt;br&gt;</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * @author 金炀</span></span>
<span class="line"><span> * @version 1.0</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@Service</span></span>
<span class="line"><span>public class  EsLogService {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final   ElasticsearchClient elasticsearchClient;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final   ElasticsearchAsyncClient elasticsearchAsyncClient;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicEsLogService(ElasticsearchClient elasticsearchClient,</span></span>
<span class="line"><span>                        ElasticsearchAsyncClient elasticsearchAsyncClient) {</span></span>
<span class="line"><span>this.elasticsearchClient = elasticsearchClient;</span></span>
<span class="line"><span>this.elasticsearchAsyncClient = elasticsearchAsyncClient;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 查询日志数据</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @paramesLogRequest 过滤条件</span></span>
<span class="line"><span>     * @return 日志数据</span></span>
<span class="line"><span>     * @author 金炀</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>public JSONObject getEsLogData(EsLogRequest esLogRequest) {</span></span>
<span class="line"><span>if (esLogRequest.getLogClassify().equals(FrameLogConst.LogClassify.LOG_OPERATION)) {</span></span>
<span class="line"><span>            List&lt;LogOperateMessage&gt; data =getOperationEsLogData(esLogRequest);</span></span>
<span class="line"><span>long  total =getOperationEsLogTotal(esLogRequest);</span></span>
<span class="line"><span>returnnewJSONObject().fluentPut(&quot;data&quot;, data).fluentPut(&quot;total&quot;, total);</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            List&lt;DbOperateLog&gt; data =getDbEsLogData(esLogRequest);</span></span>
<span class="line"><span>long  total =getDbEsLogTotal(esLogRequest);</span></span>
<span class="line"><span>returnnewJSONObject().fluentPut(&quot;data&quot;, data).fluentPut(&quot;total&quot;, total);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 获取操作日志数据</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @paramesLogRequest 过滤条件</span></span>
<span class="line"><span>     * @return 操作日志数据</span></span>
<span class="line"><span>     * @author 金炀</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>// 分页scroll</span></span>
<span class="line"><span>    @SneakyThrows</span></span>
<span class="line"><span>private List&lt;LogOperateMessage&gt; getOperationEsLogData(EsLogRequest esLogRequest) {</span></span>
<span class="line"><span>        SearchResponse&lt;LogOperateMessage&gt; response =getOperationEsLogDocData(esLogRequest);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        List&lt;LogOperateMessage&gt; operateMessages =new ArrayList&lt;&gt;();</span></span>
<span class="line"><span>for (Hit&lt;LogOperateMessage&gt; hit : response.hits().hits()) {</span></span>
<span class="line"><span>            operateMessages.add(hit.source());</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>return operateMessages;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 查询操作日志总数</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @paramesLogRequest 过滤条件</span></span>
<span class="line"><span>     * @return 操作日志总数</span></span>
<span class="line"><span>     * @author 金炀</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>privatelong getOperationEsLogTotal(EsLogRequest esLogRequest) {</span></span>
<span class="line"><span>        CountResponse response =getOperationEsLogCountData(esLogRequest);</span></span>
<span class="line"><span>return response.count();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 获取操作日志信息</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @paramesLogRequest 过滤条件</span></span>
<span class="line"><span>     * @return 操作日志信息</span></span>
<span class="line"><span>     * @author 金炀</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    @SneakyThrows</span></span>
<span class="line"><span>private SearchResponse&lt;LogOperateMessage&gt; getOperationEsLogDocData(EsLogRequest esLogRequest) {</span></span>
<span class="line"><span>return elasticsearchClient.search(</span></span>
<span class="line"><span>                builder -&gt; {</span></span>
<span class="line"><span>                    builder.index(FrameLogConst.LogIndex.LOG_ANNOTATION_IDX)</span></span>
<span class="line"><span>                            .index(FrameLogConst.LogIndex.LOG_NORMAL_LOG)</span></span>
<span class="line"><span>                            .sort(sortBuilder -&gt; sortBuilder.field(f -&gt; f.order(SortOrder.Desc).field(&quot;createTimelong &quot;)))</span></span>
<span class="line"><span>                            .highlight(getEsOperationHighlight(esLogRequest))</span></span>
<span class="line"><span>                            .query(getEsOperationQuery(esLogRequest))</span></span>
<span class="line"><span>                            .timeout(&quot;3s&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                    PgEsUtil.modifyPageData(esLogRequest, builder);</span></span>
<span class="line"><span>return builder;</span></span>
<span class="line"><span>                }, LogOperateMessage.class);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 获取操作日志总数</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @paramesLogRequest 过滤条件</span></span>
<span class="line"><span>     * @return 操作日志总数</span></span>
<span class="line"><span>     * @author 金炀</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    @SneakyThrows</span></span>
<span class="line"><span>private CountResponse getOperationEsLogCountData(EsLogRequest esLogRequest) {</span></span>
<span class="line"><span>return elasticsearchClient.count(</span></span>
<span class="line"><span>                builder -&gt; builder.index(FrameLogConst.LogIndex.LOG_ANNOTATION_IDX)</span></span>
<span class="line"><span>                        .index(FrameLogConst.LogIndex.LOG_NORMAL_LOG)</span></span>
<span class="line"><span>                        .query(getEsOperationQuery(esLogRequest))</span></span>
<span class="line"><span>        );</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 获取高亮执行信息</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @paramesLogRequest 过滤条件</span></span>
<span class="line"><span>     * @return 高亮执行信息</span></span>
<span class="line"><span>     * @author 金炀</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>private Highlight getEsOperationHighlight(EsLogRequest esLogRequest) {</span></span>
<span class="line"><span>        Map&lt;String, HighlightField&gt; map =new HashMap&lt;&gt;();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (StringUtils.hasText(esLogRequest.getSearchStr())) {</span></span>
<span class="line"><span>            map.put(&quot;operateName&quot;, getHighlightBuild(esLogRequest.getSearchStr()));</span></span>
<span class="line"><span>            map.put(&quot;operateContent&quot;, getHighlightBuild(esLogRequest.getSearchStr()));</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>if (StringUtils.hasText(esLogRequest.getLogPosition())) {</span></span>
<span class="line"><span>            map.put(&quot;className&quot;, getHighlightBuild(esLogRequest.getLogPosition()));</span></span>
<span class="line"><span>            map.put(&quot;logPosition&quot;, getHighlightBuild(esLogRequest.getLogPosition()));</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>return Highlight.of(h -&gt; h.highlightQuery(getEsOperationQuery(esLogRequest)).fields(map));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 获取操作日志总查询信息</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @paramesLogRequest 过滤条件</span></span>
<span class="line"><span>     * @return 操作日志总查询信息</span></span>
<span class="line"><span>     * @author 金炀</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>private Query getEsOperationQuery(EsLogRequest esLogRequest) {</span></span>
<span class="line"><span>        List&lt;Query&gt; mustQueryList =new ArrayList&lt;&gt;();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (StringUtils.hasText(esLogRequest.getSearchStr())) {</span></span>
<span class="line"><span>            mustQueryList.add(</span></span>
<span class="line"><span>                    Query.of(s -&gt; s.bool(</span></span>
<span class="line"><span>                            v -&gt; v.should(Query.of(q -&gt; q.match(mf -&gt; mf.field(&quot;operateName&quot;).analyzer(&quot;ik_max_word&quot;).query(qf -&gt; qf.stringValue(esLogRequest.getSearchStr())))))</span></span>
<span class="line"><span>                                    .should(Query.of(q -&gt; q.match(mf -&gt; mf.field(&quot;operateContent&quot;).analyzer(&quot;ik_max_word&quot;).query(qf -&gt; qf.stringValue(esLogRequest.getSearchStr())))))</span></span>
<span class="line"><span>                    ))</span></span>
<span class="line"><span>            );</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>if (StringUtils.hasText(esLogRequest.getLogPosition())) {</span></span>
<span class="line"><span>            mustQueryList.add(</span></span>
<span class="line"><span>                    Query.of(s -&gt; s.bool(</span></span>
<span class="line"><span>                            v -&gt; v.should(Query.of(q -&gt; q.match(mf -&gt; mf.field(&quot;className&quot;).analyzer(&quot;ik_max_word&quot;).query(qf -&gt; qf.stringValue(esLogRequest.getLogPosition())))))</span></span>
<span class="line"><span>                                    .should(Query.of(q -&gt; q.match(mf -&gt; mf.field(&quot;logPosition&quot;).analyzer(&quot;ik_max_word&quot;).query(qf -&gt; qf.stringValue(esLogRequest.getLogPosition())))))</span></span>
<span class="line"><span>                    ))</span></span>
<span class="line"><span>            );</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>buildWithCondition(esLogRequest, mustQueryList);</span></span>
<span class="line"><span>return QueryBuilders.bool(b -&gt; b.must(mustQueryList));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 获取数据库日志信息</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @paramesLogRequest 过滤条件</span></span>
<span class="line"><span>     * @return 数据库日志信息</span></span>
<span class="line"><span>     * @author 金炀</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    @SneakyThrows</span></span>
<span class="line"><span>private List&lt;DbOperateLog&gt; getDbEsLogData(EsLogRequest esLogRequest) {</span></span>
<span class="line"><span>        SearchResponse&lt;DbOperateLog&gt; response =getDbEsLogDocData(esLogRequest);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        List&lt;DbOperateLog&gt; operateLogs =new ArrayList&lt;&gt;();</span></span>
<span class="line"><span>for (Hit&lt;DbOperateLog&gt; hit : response.hits().hits()) {</span></span>
<span class="line"><span>            operateLogs.add(hit.source());</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>return operateLogs;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 获取数据库日志数据</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @paramesLogRequest 过滤条件</span></span>
<span class="line"><span>     * @return 数据库日志数据</span></span>
<span class="line"><span>     * @author 金炀</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    @SneakyThrows</span></span>
<span class="line"><span>private SearchResponse&lt;DbOperateLog&gt; getDbEsLogDocData(EsLogRequest esLogRequest) {</span></span>
<span class="line"><span>return elasticsearchClient.search(</span></span>
<span class="line"><span>                builder -&gt; {</span></span>
<span class="line"><span>                    builder.index(FrameLogConst.LogIndex.LOG_DB_LOG)</span></span>
<span class="line"><span>                            .sort(sortBuilder -&gt; sortBuilder.field(f -&gt; f.order(SortOrder.Desc).field(&quot;createTimelong &quot;)))</span></span>
<span class="line"><span>                            .highlight(getEsDbHighlight(esLogRequest))</span></span>
<span class="line"><span>                            .query(getEsDbQuery(esLogRequest))</span></span>
<span class="line"><span>                            .timeout(&quot;3s&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                    PgEsUtil.modifyPageData(esLogRequest, builder);</span></span>
<span class="line"><span>return builder;</span></span>
<span class="line"><span>                }, DbOperateLog.class);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 获取高亮执行信息</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @paramesLogRequest 过滤条件</span></span>
<span class="line"><span>     * @return 高亮执行信息</span></span>
<span class="line"><span>     * @author 金炀</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>private Highlight getEsDbHighlight(EsLogRequest esLogRequest) {</span></span>
<span class="line"><span>        Map&lt;String, HighlightField&gt; map =new HashMap&lt;&gt;();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (StringUtils.hasText(esLogRequest.getSearchStr())) {</span></span>
<span class="line"><span>            map.put(&quot;execSql&quot;, getHighlightBuild(esLogRequest.getSearchStr()));</span></span>
<span class="line"><span>            map.put(&quot;operateContent&quot;, getHighlightBuild(esLogRequest.getSearchStr()));</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>if (StringUtils.hasText(esLogRequest.getLogPosition())) {</span></span>
<span class="line"><span>            map.put(&quot;logPosition&quot;, getHighlightBuild(esLogRequest.getLogPosition()));</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (StringUtils.hasText(esLogRequest.getSourceStr())) {</span></span>
<span class="line"><span>            map.put(&quot;userId&quot;, getHighlightBuild(esLogRequest.getSourceStr()));</span></span>
<span class="line"><span>            map.put(&quot;terminal&quot;, getHighlightBuild(esLogRequest.getSourceStr()));</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>return Highlight.of(h -&gt; h.highlightQuery(getEsDbQuery(esLogRequest)).fields(map));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 封装统一的高亮样式</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @paramstr 高亮文字</span></span>
<span class="line"><span>     * @return 高亮</span></span>
<span class="line"><span>     * @author 金炀</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>private HighlightField getHighlightBuild(String str) {</span></span>
<span class="line"><span>returnnew HighlightField.Builder()</span></span>
<span class="line"><span>                .matchedFields(str)</span></span>
<span class="line"><span>                .requireFieldMatch(false)</span></span>
<span class="line"><span>                .preTags(&quot;&lt;sp&gt;&quot;)</span></span>
<span class="line"><span>                .postTags(&quot;&lt;/sp&gt;&quot;)</span></span>
<span class="line"><span>                .build();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 获取数据库日志总数</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @paramesLogRequest 过滤条件</span></span>
<span class="line"><span>     * @return 数据库日志总数</span></span>
<span class="line"><span>     * @author 金炀</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>privatelong getDbEsLogTotal(EsLogRequest esLogRequest) {</span></span>
<span class="line"><span>        CountResponse response =getDbEsLogCountData(esLogRequest);</span></span>
<span class="line"><span>return response.count();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 获取数据库日志总数结构体</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @paramesLogRequest 过滤条件</span></span>
<span class="line"><span>     * @return 数据库日志总数结构体</span></span>
<span class="line"><span>     * @author 金炀</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    @SneakyThrows</span></span>
<span class="line"><span>private CountResponse getDbEsLogCountData(EsLogRequest esLogRequest) {</span></span>
<span class="line"><span>return elasticsearchClient.count(</span></span>
<span class="line"><span>                builder -&gt; builder.index(FrameLogConst.LogIndex.LOG_DB_LOG).query(getEsDbQuery(esLogRequest))</span></span>
<span class="line"><span>        );</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 获取数据库日志总条件</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @paramesLogRequest 过滤条件</span></span>
<span class="line"><span>     * @return 数据库日志总条件</span></span>
<span class="line"><span>     * @author 金炀</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>private Query getEsDbQuery(EsLogRequest esLogRequest) {</span></span>
<span class="line"><span>        List&lt;Query&gt; mustQueryList =new ArrayList&lt;&gt;();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (StringUtils.hasText(esLogRequest.getSearchStr())) {</span></span>
<span class="line"><span>            mustQueryList.add(</span></span>
<span class="line"><span>                    Query.of(s -&gt; s.bool(</span></span>
<span class="line"><span>                            v -&gt; v.should(Query.of(q -&gt; q.match(mf -&gt; mf.field(&quot;execSql&quot;).query(qf -&gt; qf.stringValue(esLogRequest.getSearchStr())))))</span></span>
<span class="line"><span>                                    .should(Query.of(q -&gt; q.match(mf -&gt; mf.field(&quot;operateContent&quot;).query(qf -&gt; qf.stringValue(esLogRequest.getSearchStr())))))</span></span>
<span class="line"><span>                    ))</span></span>
<span class="line"><span>            );</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>if (StringUtils.hasText(esLogRequest.getLogPosition())) {</span></span>
<span class="line"><span>            mustQueryList.add(</span></span>
<span class="line"><span>                    Query.of(s -&gt; s.match(mf -&gt; mf.field(&quot;logPosition&quot;).query(qf -&gt; qf.stringValue(esLogRequest.getLogPosition()))))</span></span>
<span class="line"><span>            );</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>if (StringUtils.hasText(esLogRequest.getSourceStr())) {</span></span>
<span class="line"><span>            mustQueryList.add(</span></span>
<span class="line"><span>                    Query.of(s -&gt; s.bool(</span></span>
<span class="line"><span>                            v -&gt; v.should(Query.of(q -&gt; q.match(mf -&gt; mf.field(&quot;userId&quot;).query(qf -&gt; qf.stringValue(esLogRequest.getSourceStr())))))</span></span>
<span class="line"><span>                                    .should(Query.of(q -&gt; q.match(mf -&gt; mf.field(&quot;terminal&quot;).query(qf -&gt; qf.stringValue(esLogRequest.getSourceStr())))))</span></span>
<span class="line"><span>                    ))</span></span>
<span class="line"><span>            );</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>buildWithCondition(esLogRequest, mustQueryList);</span></span>
<span class="line"><span>return QueryBuilders.bool(b -&gt; b.must(mustQueryList));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 构建查询结构体</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @paramesLogRequest 过滤条件</span></span>
<span class="line"><span>     * @parammustQueryList 执行条件集合</span></span>
<span class="line"><span>     * @author 金炀</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>private void  buildWithCondition(EsLogRequest esLogRequest, List&lt;Query&gt; mustQueryList) {</span></span>
<span class="line"><span>if (StringUtils.hasText(esLogRequest.getModule())) {</span></span>
<span class="line"><span>            mustQueryList.add(</span></span>
<span class="line"><span>                    Query.of(q -&gt; q.match(</span></span>
<span class="line"><span>                            mf -&gt; mf.field(&quot;module&quot;).query(qf -&gt; qf.stringValue(esLogRequest.getModule()))</span></span>
<span class="line"><span>                    ))</span></span>
<span class="line"><span>            );</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>if (StringUtils.hasText(esLogRequest.getTraceId())) {</span></span>
<span class="line"><span>            mustQueryList.add(</span></span>
<span class="line"><span>                    Query.of(q -&gt; q.wildcard(</span></span>
<span class="line"><span>                            mf -&gt; mf.field(&quot;traceId&quot;).value(esLogRequest.getTraceId() +&quot;*&quot;)))</span></span>
<span class="line"><span>            );</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>if (StringUtils.hasText(esLogRequest.getTerminal())) {</span></span>
<span class="line"><span>            mustQueryList.add(</span></span>
<span class="line"><span>                    Query.of(q -&gt; q.match(</span></span>
<span class="line"><span>                            mf -&gt; mf.field(&quot;terminal&quot;).query(qf -&gt; qf.stringValue(esLogRequest.getTerminal()))</span></span>
<span class="line"><span>                    ))</span></span>
<span class="line"><span>            );</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 删除日志数据(一般不开放)</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @paramesLogRequest 过滤条件</span></span>
<span class="line"><span>     * @author 金炀</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    @SneakyThrows</span></span>
<span class="line"><span>private void   delEsLogData(EsLogRequest esLogRequest) {</span></span>
<span class="line"><span>        SearchResponse&lt;LogOperateMessage&gt; response =getOperationEsLogDocData(esLogRequest);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>for (Hit&lt;LogOperateMessage&gt; hit : response.hits().hits()) {</span></span>
<span class="line"><span>            elasticsearchClient.delete(d -&gt; d.index(hit.index()).id(hit.id()));</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        SearchResponse&lt;DbOperateLog&gt; response2 =getDbEsLogDocData(esLogRequest);</span></span>
<span class="line"><span>for (Hit&lt;DbOperateLog&gt; hit : response2.hits().hits()) {</span></span>
<span class="line"><span>            elasticsearchClient.delete(d -&gt; d.index(hit.index()).id(hit.id()));</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,68)]))}const c=n(l,[["render",p],["__file","框架日志模块.html.vue"]]),t=JSON.parse('{"path":"/%E7%9B%98%E5%8F%A4/%E7%BB%84%E4%BB%B6%E4%BB%8B%E7%BB%8D/%E6%A1%86%E6%9E%B6%E6%97%A5%E5%BF%97%E6%A8%A1%E5%9D%97.html","title":"框架日志模块","lang":"zh-CN","frontmatter":{"description":"框架日志模块 如何使用 业务端引入如下模块 xml yaml java 注解日志 持久层日志 常规日志模式 server端 yaml 技术原理 注解 java java 持久层 java java java 常规 java java java java java java server端 java java java","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/%E7%9B%98%E5%8F%A4/%E7%BB%84%E4%BB%B6%E4%BB%8B%E7%BB%8D/%E6%A1%86%E6%9E%B6%E6%97%A5%E5%BF%97%E6%A8%A1%E5%9D%97.html"}],["meta",{"property":"og:title","content":"框架日志模块"}],["meta",{"property":"og:description","content":"框架日志模块 如何使用 业务端引入如下模块 xml yaml java 注解日志 持久层日志 常规日志模式 server端 yaml 技术原理 注解 java java 持久层 java java java 常规 java java java java java java server端 java java java"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-18T07:25:41.000Z"}],["meta",{"property":"article:author","content":"Cotton Eye Joe"}],["meta",{"property":"article:modified_time","content":"2024-11-18T07:25:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"框架日志模块\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-18T07:25:41.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cotton Eye Joe\\",\\"url\\":\\"https://github.com/ToDreamr\\"}]}"]]},"headers":[],"git":{"createdTime":1731914741000,"updatedTime":1731914741000,"contributors":[{"name":"九歌天上有","email":"aruixrain@gmail.com","commits":1}]},"readingTime":{"minutes":15.16,"words":4547},"filePathRelative":"盘古/组件介绍/框架日志模块.md","localizedDate":"2024年11月18日","excerpt":"","autoDesc":true}');export{c as comp,t as data};
