import{_ as s,o as a,c as e,d as i}from"./app-Bym8v7z8.js";const l={};function p(d,n){return a(),e("div",null,n[0]||(n[0]=[i(`<h1 id="sql跟踪模块" tabindex="-1"><a class="header-anchor" href="#sql跟踪模块"><span>SQL跟踪模块</span></a></h1><blockquote><h4 id="如何使用" tabindex="-1"><a class="header-anchor" href="#如何使用"><span>如何使用</span></a></h4></blockquote><p>业务项目引入</p><p><strong>xml</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>  &lt;groupId&gt;com.kingtsoft.pangu&lt;/groupId&gt;</span></span>
<span class="line"><span>  &lt;artifactId&gt;pangu-data-trace&lt;/artifactId&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><h4 id="技术原理" tabindex="-1"><a class="header-anchor" href="#技术原理"><span>技术原理</span></a></h4></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    支持mybatisplus与jdbcTemplate两种持久层框架</span></span>
<span class="line"><span>根据路径内置入一个拦截器去截获当前人员信息中的跟踪状态（目前模式需要有人员信息才给支持）</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>public class  TraceInfoInterceptimplementsHandlerInterceptor {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>publicboolean  preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) {</span></span>
<span class="line"><span>        Object obj = request.getAttribute(ApplicationConst.USER_DATA_KEY);</span></span>
<span class="line"><span>if (obj ==null) {</span></span>
<span class="line"><span>returntrue;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        JSONObject dataObj = JSON.parseObject(JSON.toJSONString(obj));</span></span>
<span class="line"><span>        Integer sqlTrace = dataObj.getInteger(TraceConst.SQL_TRACE);</span></span>
<span class="line"><span>if (sqlTrace ==null) {</span></span>
<span class="line"><span>returntrue;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        request.setAttribute(TraceConst.SQL_TRACE, sqlTrace);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        String sqlTraceKey = dataObj.getString(TraceConst.SQL_TRACE_KEY);</span></span>
<span class="line"><span>if (sqlTraceKey ==null) {</span></span>
<span class="line"><span>returntrue;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        request.setAttribute(TraceConst.SQL_TRACE_KEY, sqlTraceKey);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>returntrue;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    mybatisplus 使用自带的拦截器进行截获SQL</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>@Slf4j</span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>@Intercepts({</span></span>
<span class="line"><span>        @Signature(type= Executor.class, method=&quot;query&quot;,</span></span>
<span class="line"><span>args= {MappedStatement.class, Object.class, RowBounds.class, ResultHandler.class}),</span></span>
<span class="line"><span>        @Signature(type= Executor.class, method=&quot;query&quot;,</span></span>
<span class="line"><span>args= {MappedStatement.class, Object.class, RowBounds.class, ResultHandler.class, CacheKey.class, BoundSql.class}),</span></span>
<span class="line"><span>        @Signature(type= Executor.class, method=&quot;update&quot;, args= {MappedStatement.class, Object.class})</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>public class  MbSqlInterceptimplementsInterceptor {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final   RedisHandler&lt;String, String&gt; redisHandler;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final   HttpServletRequest request;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>privatestaticfinallong  TIMEOUT = ExpTimeUtil.getExpTimeout(60);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final  String[] conNodes = { &quot;Filter&quot;, &quot;Single-row&quot; };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>public Object intercept(Invocation invocation) throws Throwable {</span></span>
<span class="line"><span>        String reqUrl =null;</span></span>
<span class="line"><span>        String url =null;</span></span>
<span class="line"><span>        Integer flag =null;</span></span>
<span class="line"><span>        Integer explain =null;</span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>            DatabaseMetaData databaseMetaData = ((Executor) invocation.getTarget()).getTransaction().getConnection().getMetaData();</span></span>
<span class="line"><span>            url = databaseMetaData.getURL();</span></span>
<span class="line"><span>            flag = (Integer) request.getAttribute(TraceConst.SQL_TRACE);</span></span>
<span class="line"><span>// 是否解析SQL执行计划（默认不解析，因为会耗费性能）</span></span>
<span class="line"><span>            explain = (Integer) request.getAttribute(TraceConst.SQL_EXPLAIN);</span></span>
<span class="line"><span>            reqUrl = request.getRequestURI();</span></span>
<span class="line"><span>        } catch (Exception ignore) {</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (flag ==null|| flag !=1) {</span></span>
<span class="line"><span>// 非跟踪模式</span></span>
<span class="line"><span>return invocation.proceed();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Object[] args = invocation.getArgs();</span></span>
<span class="line"><span>// 植入标记</span></span>
<span class="line"><span>        MappedStatement ms = (MappedStatement) invocation.getArgs()[0];</span></span>
<span class="line"><span>if (ms.getSqlCommandType() != SqlCommandType.UPDATE</span></span>
<span class="line"><span>&amp;&amp; ms.getSqlCommandType() != SqlCommandType.SELECT</span></span>
<span class="line"><span>&amp;&amp; ms.getSqlCommandType() != SqlCommandType.INSERT</span></span>
<span class="line"><span>&amp;&amp; ms.getSqlCommandType() != SqlCommandType.DELETE) {</span></span>
<span class="line"><span>return invocation.proceed();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        BoundSql boundSql;</span></span>
<span class="line"><span>        Object parameter = args[1];</span></span>
<span class="line"><span>if (args.length ==2|| args.length ==4) {</span></span>
<span class="line"><span>            boundSql = ms.getBoundSql(parameter);</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            boundSql = (BoundSql) args[5];</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        String uuid = UUID.randomUUID().toString().replaceAll(&quot;-&quot;, &quot;&quot;);</span></span>
<span class="line"><span>// 跟踪模式, oracle需要植入标记</span></span>
<span class="line"><span>if (url.contains(&quot;oracle&quot;) &amp;&amp; ms.getSqlCommandType() == SqlCommandType.SELECT) {</span></span>
<span class="line"><span>            String oracleFlag =&quot;/*&quot;+ uuid +&quot;*/&quot;;</span></span>
<span class="line"><span>            String sql = boundSql.getSql();</span></span>
<span class="line"><span>int idx = sql.toLowerCase().indexOf(&quot;select&quot;);</span></span>
<span class="line"><span>// 理论永远真</span></span>
<span class="line"><span>if (idx &gt;=0) {</span></span>
<span class="line"><span>                sql = sql.substring(0, idx) +&quot;select &quot;+ oracleFlag + sql.substring(idx +6);</span></span>
<span class="line"><span>                Field field = boundSql.getClass().getDeclaredField(&quot;sql&quot;);</span></span>
<span class="line"><span>                field.setAccessible(true);</span></span>
<span class="line"><span>                field.set(boundSql, sql);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>long  start = System.currentTimeMillis();</span></span>
<span class="line"><span>        LocalDateTime now = LocalDateTime.now();</span></span>
<span class="line"><span>        Object ret = invocation.proceed();</span></span>
<span class="line"><span>long  cost = System.currentTimeMillis() - start;</span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>doExProceed(</span></span>
<span class="line"><span>                    invocation,</span></span>
<span class="line"><span>                    boundSql,</span></span>
<span class="line"><span>newBigDecimal(cost).divide(newBigDecimal(&quot;1000&quot;), 4, RoundingMode.HALF_UP),</span></span>
<span class="line"><span>                    now,</span></span>
<span class="line"><span>                    uuid,</span></span>
<span class="line"><span>                    explain,</span></span>
<span class="line"><span>                    reqUrl);</span></span>
<span class="line"><span>        } catch (Exception e) {</span></span>
<span class="line"><span>            log.error(&quot;解释错误！&quot;, e);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>return ret;</span></span>
<span class="line"><span>    }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    JdbcTemplate 使用AOP进行切面</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>@Pointcut(&quot;execution(* org.springframework.jdbc.core.JdbcTemplate.query*(String, ..)) &quot;+</span></span>
<span class="line"><span>&quot;|| execution(* org.springframework.jdbc.core.JdbcTemplate.update(String, ..))&quot;+</span></span>
<span class="line"><span>&quot;|| execution(* org.springframework.jdbc.core.JdbcTemplate.execute(String, ..))&quot;)</span></span>
<span class="line"><span>private void   jdbcTemplatePointCut() {</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Around(&quot;jdbcTemplatePointCut()&quot;)</span></span>
<span class="line"><span>public Object beforeMethod(ProceedingJoinPoint joinPoint) throws Throwable {</span></span>
<span class="line"><span>if (CHECK_FLAG.get() !=null&amp;&amp; CHECK_FLAG.get()) {</span></span>
<span class="line"><span>return joinPoint.proceed();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>long  startTime = System.currentTimeMillis();</span></span>
<span class="line"><span>        LocalDateTime now = LocalDateTime.now();</span></span>
<span class="line"><span>        Object ret = joinPoint.proceed();</span></span>
<span class="line"><span>long  end = System.currentTimeMillis();</span></span>
<span class="line"><span>long  cost = end - startTime;</span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>doExProceed(</span></span>
<span class="line"><span>                    joinPoint,</span></span>
<span class="line"><span>newBigDecimal(cost).divide(newBigDecimal(&quot;1000&quot;), 4, RoundingMode.HALF_UP),</span></span>
<span class="line"><span>                    now);</span></span>
<span class="line"><span>        } catch (Exception e) {</span></span>
<span class="line"><span>            log.error(&quot;解释错误！&quot;, e);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>return ret;</span></span>
<span class="line"><span>    }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    兼容了oracle、mysql、tidb的执行计划自动生成</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>/**</span></span>
<span class="line"><span>     * 执行额外的SQL操作</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @paraminvocation 拦截信息</span></span>
<span class="line"><span>     * @author 金炀</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>private void  doExProceed(Invocation invocation,</span></span>
<span class="line"><span>                             BoundSql boundSql,</span></span>
<span class="line"><span>                             BigDecimal cost,</span></span>
<span class="line"><span>                             LocalDateTime now,</span></span>
<span class="line"><span>                             String uuid,</span></span>
<span class="line"><span>                             Integer explain,</span></span>
<span class="line"><span>                             String reqUrl) {</span></span>
<span class="line"><span>        String dataKey;</span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>            dataKey = (String) request.getAttribute(TraceConst.SQL_TRACE_KEY);</span></span>
<span class="line"><span>        } catch (Exception e) {</span></span>
<span class="line"><span>return;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (dataKey ==null) {</span></span>
<span class="line"><span>return;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        Object target = invocation.getTarget();</span></span>
<span class="line"><span>if (!(target instanceof Executor)) {</span></span>
<span class="line"><span>return;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        MappedStatement ms = (MappedStatement) invocation.getArgs()[0];</span></span>
<span class="line"><span>///        RowBounds rowBounds = (RowBounds) args[2];</span></span>
<span class="line"><span>//        ResultHandler resultHandler = (ResultHandler) args[3];</span></span>
<span class="line"><span>        String sql =getSql(boundSql, ms);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        JSONObject jsonObject =newJSONObject()</span></span>
<span class="line"><span>                .fluentPut(&quot;reqUrl&quot;, reqUrl)</span></span>
<span class="line"><span>                .fluentPut(&quot;sql&quot;, sql)</span></span>
<span class="line"><span>                .fluentPut(&quot;cost&quot;, cost)</span></span>
<span class="line"><span>                .fluentPut(&quot;method&quot;, ms.getId())</span></span>
<span class="line"><span>                .fluentPut(&quot;position&quot;, SqlTraceUtil.getStackTrace(ms.getId(), &quot;com.sun.proxy&quot;))</span></span>
<span class="line"><span>                .fluentPut(&quot;time&quot;, now.format(ApplicationConst.DATETIME_FORMAT));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        String url;</span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>            DatabaseMetaData databaseMetaData = ((Executor) target).getTransaction().getConnection().getMetaData();</span></span>
<span class="line"><span>            url = databaseMetaData.getURL();</span></span>
<span class="line"><span>        } catch (SQLException e) {</span></span>
<span class="line"><span>thrownewRuntimeException(e);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (url.contains(&quot;type=tidb&quot;)) {</span></span>
<span class="line"><span>            jsonObject.fluentPut(&quot;type&quot;, &quot;tidb&quot;);</span></span>
<span class="line"><span>        } elseif (url.contains(&quot;oracle&quot;)) {</span></span>
<span class="line"><span>            jsonObject.fluentPut(&quot;type&quot;, &quot;oracle&quot;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (ms.getSqlCommandType() != SqlCommandType.SELECT || explain ==null|| explain !=1) {</span></span>
<span class="line"><span>            redisHandler.listLeftPush(dataKey, jsonObject.fluentPut(&quot;explain&quot;, null));</span></span>
<span class="line"><span>            redisHandler.setExpireTime(dataKey, TIMEOUT, TimeUnit.MINUTES);</span></span>
<span class="line"><span>return;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>getExplainWithType((Executor) target, sql, jsonObject, uuid);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        redisHandler.listLeftPush(dataKey, jsonObject);</span></span>
<span class="line"><span>        redisHandler.setExpireTime(dataKey, TIMEOUT, TimeUnit.MINUTES);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private void  getExplainWithType(Executor target, String sql, JSONObject jsonObject, String uuid) {</span></span>
<span class="line"><span>        String type = jsonObject.getString(&quot;type&quot;);</span></span>
<span class="line"><span>if (type !=null&amp;&amp;&quot;tidb&quot;.equals(type)) {</span></span>
<span class="line"><span>            jsonObject.fluentPut(&quot;analyzeInfo&quot;, getTidbExplainAnalyzeInfo(target, sql));</span></span>
<span class="line"><span>        } elseif (type !=null&amp;&amp;&quot;oracle&quot;.equals(type)) {</span></span>
<span class="line"><span>            jsonObject.fluentPut(&quot;analyzeInfo&quot;, getOracleExplainAnalyzeInfo(target, sql, uuid))</span></span>
<span class="line"><span>                    .fluentPut(&quot;explain&quot;, null);</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            List&lt;QueryBlock&gt; explainJsonResultList =getExplainInfo(target, sql);</span></span>
<span class="line"><span>if (log.isDebugEnabled()) {</span></span>
<span class="line"><span>                SqlTraceUtil.printExplain(explainJsonResultList);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            jsonObject.fluentPut(&quot;analyzeInfo&quot;, getExplainAnalyzeInfo(target, sql))</span></span>
<span class="line"><span>                    .fluentPut(&quot;explain&quot;, explainJsonResultList);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    跟踪模块并非只解析SQL，会对mysql风格的数据进行执行计划处理，这样就</span></span>
<span class="line"><span>可以非常直观查看慢SQL导致变慢的语句节点是啥，甚至提出一些优化建议。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>private List&lt;QueryBlock&gt;getExplainInfo(String sql, Object[] params) {</span></span>
<span class="line"><span>        CHECK_FLAG.set(true);</span></span>
<span class="line"><span>        List&lt;QueryBlock&gt; explainJsonResultList =new ArrayList&lt;&gt;();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        String exSql =&quot;EXPLAIN FORMAT=JSON &quot;+ sql;</span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>            Map&lt;String, Object&gt; ret = jdbcTemplate.queryForMap(exSql, params);</span></span>
<span class="line"><span>            String exp = ret.get(&quot;EXPLAIN&quot;).toString();</span></span>
<span class="line"><span>            JSONObject jsonObject = JSON.parseObject(exp);</span></span>
<span class="line"><span>            explainJsonResultList.add(TraceCover.getQueryBlock(jsonObject.getString(&quot;query_block&quot;)));</span></span>
<span class="line"><span>        } catch (Throwable e) {</span></span>
<span class="line"><span>            e.printStackTrace();</span></span>
<span class="line"><span>        } finally {</span></span>
<span class="line"><span>            CHECK_FLAG.remove();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>return explainJsonResultList;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private List&lt;ExplainTreeNode&gt;getExplainAnalyzeInfo(String sql, Object[] params) {</span></span>
<span class="line"><span>        CHECK_FLAG.set(true);</span></span>
<span class="line"><span>        String exSql =&quot;EXPLAIN ANALYZE &quot;+ sql;</span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>            Map&lt;String, Object&gt; ret = jdbcTemplate.queryForMap(exSql, params);</span></span>
<span class="line"><span>            String json = ret.get(&quot;EXPLAIN&quot;).toString();</span></span>
<span class="line"><span>return SqlTraceUtil.getExplainAnalyze(json);</span></span>
<span class="line"><span>        } catch (Throwable e) {</span></span>
<span class="line"><span>            e.printStackTrace();</span></span>
<span class="line"><span>        } finally {</span></span>
<span class="line"><span>            CHECK_FLAG.remove();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>returnnull;</span></span>
<span class="line"><span>    }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    如下为自定的解析类(因为mysql8的解释内容是字符串返回，需要自己解析成</span></span>
<span class="line"><span>结构化数据，此方法还需要根据实际SQL跟踪进行拓展，可能存在不兼容的语句情况)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>@Slf4j</span></span>
<span class="line"><span>public class  SqlTraceUtil {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 括号内数据替换的键的字典（因为需要分割空格，而默认返回的key中会包含空格）</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>privatestaticfinal Map&lt;String, String&gt; KEY_DIC =new HashMap&lt;&gt;() {</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>put(&quot;actual time&quot;, &quot;actual_time&quot;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 参数字典</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>privatestaticfinalString[] DIC_EXP_PARAMS = { &quot;actual_time&quot;, &quot;rows&quot;, &quot;loops&quot;, &quot;cost&quot; };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 获取执行方法</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @return 执行方法</span></span>
<span class="line"><span>     * @author 金炀</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>publicstatic String getStackTrace(String method, String className) {</span></span>
<span class="line"><span>StackTraceElement[] stackTrace = Thread.currentThread().getStackTrace();</span></span>
<span class="line"><span>for (int i =0; i &lt; stackTrace.length; i++) {</span></span>
<span class="line"><span>            StackTraceElement traceElement = stackTrace[i];</span></span>
<span class="line"><span>if (method.contains(traceElement.getMethodName())</span></span>
<span class="line"><span>&amp;&amp; traceElement.getClassName().contains(className)</span></span>
<span class="line"><span>&amp;&amp; i &lt; stackTrace.length -1</span></span>
<span class="line"><span>&amp;&amp;!&quot;java.base&quot;.equals(stackTrace[i +1].getModuleName())</span></span>
<span class="line"><span>&amp;&amp;!stackTrace[i +1].getClassName().startsWith(&quot;org.apache.ibatis&quot;)</span></span>
<span class="line"><span>&amp;&amp;!stackTrace[i +1].getClassName().startsWith(&quot;org.mybatis&quot;)) {</span></span>
<span class="line"><span>return stackTrace[i +1].toString();</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>returnnull;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 获取执行方法</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @return 执行方法</span></span>
<span class="line"><span>     * @author 金炀</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>publicstatic Map&lt;String, String&gt; getDaoByStackTrace() {</span></span>
<span class="line"><span>StackTraceElement[] stackTrace = Thread.currentThread().getStackTrace();</span></span>
<span class="line"><span>        String method =null;</span></span>
<span class="line"><span>        String position =null;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        String suffix =null;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>boolean   serviceCheck =false;</span></span>
<span class="line"><span>for (StackTraceElement traceElement : stackTrace) {</span></span>
<span class="line"><span>if (traceElement.toString().contains(&quot;$$&quot;)) {</span></span>
<span class="line"><span>continue;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (!serviceCheck) {</span></span>
<span class="line"><span>                Class&lt;?&gt; tarClazz;</span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>                    tarClazz = Class.forName(traceElement.getClassName());</span></span>
<span class="line"><span>                } catch (ClassNotFoundException e) {</span></span>
<span class="line"><span>continue;</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                Repository repository = tarClazz.getAnnotation(org.springframework.stereotype.Repository.class);</span></span>
<span class="line"><span>if (repository !=null) {</span></span>
<span class="line"><span>                    method = traceElement.getClassName() +&quot;.&quot;+ traceElement.getMethodName();</span></span>
<span class="line"><span>                    serviceCheck =true;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>String[] parts = method.split(&quot;\\\\.&quot;);</span></span>
<span class="line"><span>if (parts.length &gt;=3) {</span></span>
<span class="line"><span>                        suffix = String.format(&quot;%s.%s.%s&quot;, parts[0], parts[1], parts[2]);</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>continue;</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (serviceCheck) {</span></span>
<span class="line"><span>if (suffix ==null) {</span></span>
<span class="line"><span>break;</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>if (traceElement.toString().contains(suffix)) {</span></span>
<span class="line"><span>                    position = traceElement.toString();</span></span>
<span class="line"><span>break;</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        Map&lt;String, String&gt; retMap =new HashMap&lt;&gt;(4);</span></span>
<span class="line"><span>        retMap.put(&quot;method&quot;, method);</span></span>
<span class="line"><span>        retMap.put(&quot;position&quot;, position);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>return retMap;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 获取解释信息</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @paramjson      解释信息</span></span>
<span class="line"><span>     * @return 解释信息</span></span>
<span class="line"><span>     * @author 金炀</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>publicstatic List&lt;ExplainTreeNode&gt; getExplainAnalyze(String json) {</span></span>
<span class="line"><span>String[] arr = json.split(&quot;\\\\r?\\\\n&quot;);</span></span>
<span class="line"><span>        Map&lt;Integer, List&lt;ExplainTreeNodeDetail&gt;&gt; allData =pkgAllDetail(arr);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        List&lt;ExplainTreeNodeDetail&gt; rootNodes = allData.get(0);</span></span>
<span class="line"><span>if (rootNodes ==null) {</span></span>
<span class="line"><span>returnnull;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        List&lt;ExplainTreeNode&gt; treeNodes =new ArrayList&lt;&gt;();</span></span>
<span class="line"><span>setNode(allData, rootNodes, treeNodes, null, 0, null);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>return treeNodes;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>privatestaticvoidsetNode(Map&lt;Integer, List&lt;ExplainTreeNodeDetail&gt;&gt; allData,</span></span>
<span class="line"><span>                                List&lt;ExplainTreeNodeDetail&gt; currentNodes,</span></span>
<span class="line"><span>                                List&lt;ExplainTreeNode&gt; treeNodes,</span></span>
<span class="line"><span>                                ExplainTreeNode parent, intclassifyId, Integer endIdx) {</span></span>
<span class="line"><span>int i =0;</span></span>
<span class="line"><span>for (ExplainTreeNodeDetail rootNode : currentNodes) {</span></span>
<span class="line"><span>            ExplainTreeNode treeNode =newExplainTreeNode();</span></span>
<span class="line"><span>            treeNode.setExpInfo(rootNode.getDetail());</span></span>
<span class="line"><span>            Integer nexIdx;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (i &lt;= currentNodes.size() -2) {</span></span>
<span class="line"><span>                nexIdx = currentNodes.get(i +1).getIndex();</span></span>
<span class="line"><span>            } else {</span></span>
<span class="line"><span>                nexIdx = endIdx;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>pkgNodeInfo(treeNode, rootNode, allData, treeNodes, classifyId, nexIdx);</span></span>
<span class="line"><span>            i++;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (parent !=null) {</span></span>
<span class="line"><span>            parent.setChildren(treeNodes);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>privatestaticvoidpkgNodeInfo(ExplainTreeNode treeNode,</span></span>
<span class="line"><span>                                    ExplainTreeNodeDetail rootNode,</span></span>
<span class="line"><span>                                    Map&lt;Integer, List&lt;ExplainTreeNodeDetail&gt;&gt; allData,</span></span>
<span class="line"><span>                                    List&lt;ExplainTreeNode&gt; treeNodes,</span></span>
<span class="line"><span>intclassifyId,</span></span>
<span class="line"><span>                                    Integer endIndex) {</span></span>
<span class="line"><span>        List&lt;String&gt; params =new ArrayList&lt;&gt;();</span></span>
<span class="line"><span>getBracketsInfo(params, rootNode.getDetail());</span></span>
<span class="line"><span>        treeNode.setExpHeadInfo(treeNode.getExpInfo());</span></span>
<span class="line"><span>        params = params.stream().filter(</span></span>
<span class="line"><span>                param -&gt; param.contains(&quot;=&quot;)</span></span>
<span class="line"><span>        ).collect(Collectors.toCollection(ArrayList::new));</span></span>
<span class="line"><span>//        Optional&lt;String&gt; ret = Arrays.stream(conNodes).filter(</span></span>
<span class="line"><span>//                name -&gt; rootNode.getDetail().contains(name)</span></span>
<span class="line"><span>//        ).findAny();</span></span>
<span class="line"><span>//        if (i + flag == 0) {</span></span>
<span class="line"><span>//            treeNode.setCondition(params.get(0));</span></span>
<span class="line"><span>//            continue;</span></span>
<span class="line"><span>//        }</span></span>
<span class="line"><span>pkgKeyValueDetail(treeNode, params);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        List&lt;ExplainTreeNodeDetail&gt; treeNodeDetails = allData.get(classifyId +1);</span></span>
<span class="line"><span>if (treeNodeDetails !=null) {</span></span>
<span class="line"><span>            treeNodeDetails = treeNodeDetails.stream().filter(</span></span>
<span class="line"><span>                    d -&gt; {</span></span>
<span class="line"><span>if (endIndex !=null) {</span></span>
<span class="line"><span>return rootNode.getIndex() &lt; d.getIndex() &amp;&amp; d.getIndex() &lt; endIndex;</span></span>
<span class="line"><span>                        }</span></span>
<span class="line"><span>return rootNode.getIndex() &lt; d.getIndex();</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>            ).collect(Collectors.toCollection(ArrayList::new));</span></span>
<span class="line"><span>if (treeNodeDetails.size() &gt;0) {</span></span>
<span class="line"><span>                List&lt;ExplainTreeNode&gt; newNodes =new ArrayList&lt;&gt;();</span></span>
<span class="line"><span>setNode(allData, treeNodeDetails, newNodes, treeNode, classifyId +1, endIndex);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        treeNodes.add(treeNode);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 括号详细信息处理</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @paramtreeNode 树状节点</span></span>
<span class="line"><span>     * @paramparams   原始查询信息数组</span></span>
<span class="line"><span>     * @author 金炀</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>privatestaticvoidpkgKeyValueDetail(ExplainTreeNode treeNode, List&lt;String&gt; params) {</span></span>
<span class="line"><span>if (params.size() ==0) {</span></span>
<span class="line"><span>return;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>int paramIndex =0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        JSONObject object =newJSONObject();</span></span>
<span class="line"><span>for (String param : params) {</span></span>
<span class="line"><span>finalString[] str = {param};</span></span>
<span class="line"><span>            KEY_DIC.forEach((key, value) -&gt; str[0] = str[0].replaceAll(key, value));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>String[] kvs = str[0].split(&quot; &quot;);</span></span>
<span class="line"><span>boolean   actFlag =false;</span></span>
<span class="line"><span>for (String kv : kvs) {</span></span>
<span class="line"><span>String[] data = kv.split(&quot;=&quot;);</span></span>
<span class="line"><span>if (data.length ==0) {</span></span>
<span class="line"><span>continue;</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>if (!Arrays.asList(DIC_EXP_PARAMS).contains(data[0])) {</span></span>
<span class="line"><span>continue;</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (paramIndex ==0) {</span></span>
<span class="line"><span>                    paramIndex = treeNode.getExpInfo().indexOf(param) -1;</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (kv.contains(&quot;actual_time&quot;)) {</span></span>
<span class="line"><span>                    actFlag =true;</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (actFlag) {</span></span>
<span class="line"><span>                    object.fluentPut(data[0], data[1]);</span></span>
<span class="line"><span>                } else {</span></span>
<span class="line"><span>                    object.fluentPut(&quot;pre_&quot;+ data[0], data[1]);</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (paramIndex !=0) {</span></span>
<span class="line"><span>            treeNode.setExpHeadInfo(treeNode.getExpInfo().substring(0, paramIndex));</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        treeNode.setPreCost(object.getString(&quot;pre_cost&quot;));</span></span>
<span class="line"><span>        treeNode.setPreRows(object.getInteger(&quot;pre_rows&quot;));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        treeNode.setRows(object.getInteger(&quot;rows&quot;));</span></span>
<span class="line"><span>        treeNode.setActualTime(object.getString(&quot;actual_time&quot;));</span></span>
<span class="line"><span>        treeNode.setLoops(object.getInteger(&quot;loops&quot;));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 通过提供的数据获取括号内容</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @paramparams 需要返回的括号信息</span></span>
<span class="line"><span>     * @paramtarStr 提供的信息</span></span>
<span class="line"><span>     * @author 金炀</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>privatestaticvoidgetBracketsInfo(List&lt;String&gt; params, String tarStr) {</span></span>
<span class="line"><span>        List&lt;Integer&gt; idxArr =new ArrayList&lt;&gt;();</span></span>
<span class="line"><span>for (int i =0; i &lt; tarStr.length(); i++) {</span></span>
<span class="line"><span>char a = tarStr.charAt(i);</span></span>
<span class="line"><span>if (a ==&#39;)&#39;) {</span></span>
<span class="line"><span>                idxArr.add(-1* i);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>if (a ==&#39;(&#39;) {</span></span>
<span class="line"><span>                idxArr.add(i);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        List&lt;Integer&gt; rows = idxArr.stream().filter(i -&gt; i &gt;=0).collect(Collectors.toCollection(ArrayList::new));</span></span>
<span class="line"><span>for (Integer row : rows) {</span></span>
<span class="line"><span>int endIdx =0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int flag =1;</span></span>
<span class="line"><span>for (Integer integer : idxArr) {</span></span>
<span class="line"><span>if (Math.abs(integer) &gt; Math.abs(row)) {</span></span>
<span class="line"><span>if (integer &gt;=0) {</span></span>
<span class="line"><span>                        flag++;</span></span>
<span class="line"><span>                    } else {</span></span>
<span class="line"><span>                        flag--;</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (flag ==0) {</span></span>
<span class="line"><span>                    endIdx = Math.abs(integer);</span></span>
<span class="line"><span>break;</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (endIdx &gt;0) {</span></span>
<span class="line"><span>                params.add(tarStr.substring(row +1, endIdx));</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>privatestatic Map&lt;Integer, List&lt;ExplainTreeNodeDetail&gt;&gt; pkgAllDetail(String[] arr) {</span></span>
<span class="line"><span>        Map&lt;Integer, List&lt;ExplainTreeNodeDetail&gt;&gt; allData =new HashMap&lt;&gt;(8);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int indent =4;</span></span>
<span class="line"><span>int i =1;</span></span>
<span class="line"><span>for (String exRow : arr) {</span></span>
<span class="line"><span>            String row = exRow.substring(exRow.indexOf(&quot;-&gt;&quot;) +3);</span></span>
<span class="line"><span>int idx = exRow.indexOf(&quot;-&gt;&quot;) / indent;</span></span>
<span class="line"><span>if (allData.get(idx) ==null) {</span></span>
<span class="line"><span>int finalI = i;</span></span>
<span class="line"><span>                List&lt;ExplainTreeNodeDetail&gt; strings =new ArrayList&lt;&gt;() {</span></span>
<span class="line"><span>                    { add(newExplainTreeNodeDetail(finalI, row)); }</span></span>
<span class="line"><span>                };</span></span>
<span class="line"><span>                allData.put(idx, strings);</span></span>
<span class="line"><span>            } else {</span></span>
<span class="line"><span>                allData.get(idx).add(newExplainTreeNodeDetail(i, row));</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            i++;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>return allData;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 打印解释信息</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @paramexplainJsonResultList 解释信息</span></span>
<span class="line"><span>     * @author 金炀</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>publicstaticvoidprintExplain(List&lt;QueryBlock&gt; explainJsonResultList) {</span></span>
<span class="line"><span>        log.info(&quot;*************************** 解释结果 ***************************&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>for (QueryBlock queryBlock : explainJsonResultList) {</span></span>
<span class="line"><span>            log.info(JSON.toJSONString(queryBlock, PrettyFormat));</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        log.info(&quot;***************************************************************&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    由于数据是保存在redis之中，设计了额外的工具，让缓存在对应的节点</span></span>
<span class="line"><span>批量失效，而非实时都有缓存在失效。如下所示，15表示一个块，一小时会有4个15分钟 ，</span></span>
<span class="line"><span>也就是4个节点，设置一小时会根据此时的时间推一小时，并且计算距离一小时后的时刻与哪</span></span>
<span class="line"><span>个节点近，然后计算出实际坐落节点内的时间，并配置到缓存失效内。缓存内的跟踪数据过于</span></span>
<span class="line"><span>离散的问题（其实redis内部有自己的失效机制，不用我们操心）。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>privatestaticfinallong  TIMEOUT = ExpTimeUtil.getExpTimeout(60);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>List&lt;QueryBlock&gt; explainJsonResultList =getExplainInfo((Executor) target, sql);</span></span>
<span class="line"><span>SqlTraceUtil.printExplain(explainJsonResultList);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (url.contains(&quot;type=tidb&quot;)) {</span></span>
<span class="line"><span>    jsonObject.fluentPut(&quot;type&quot;, &quot;tidb&quot;);</span></span>
<span class="line"><span>} elseif (url.contains(&quot;oracle&quot;)) {</span></span>
<span class="line"><span>    jsonObject.fluentPut(&quot;type&quot;, &quot;oracle&quot;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (ms.getSqlCommandType() != SqlCommandType.SELECT || explain ==null|| explain !=1) {</span></span>
<span class="line"><span>    redisHandler.listLeftPush(dataKey, jsonObject.fluentPut(&quot;explain&quot;, null));</span></span>
<span class="line"><span>    redisHandler.setExpireTime(dataKey, TIMEOUT, TimeUnit.MINUTES);</span></span>
<span class="line"><span>return;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>getExplainWithType((Executor) target, sql, jsonObject, uuid);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>redisHandler.listLeftPush(dataKey, jsonObject);</span></span>
<span class="line"><span>redisHandler.setExpireTime(dataKey, TIMEOUT, TimeUnit.MINUTES);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>publicstaticlong getExpTimeout(LocalDateTime startTime, long  timeout, int blockTime, TimeUnit unit) {</span></span>
<span class="line"><span>    Integer timeAll = TIME_ALL.get(unit);</span></span>
<span class="line"><span>if (timeAll ==null) {</span></span>
<span class="line"><span>thrownewRuntimeException(&quot;不支持的时间单位计算&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>if (blockTime &gt; timeAll) {</span></span>
<span class="line"><span>thrownewRuntimeException(&quot;请使用小于等于60的解释数据&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>long  b = timeAll / blockTime;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int target;</span></span>
<span class="line"><span>if (TimeUnit.HOURS.equals(unit)) {</span></span>
<span class="line"><span>        target = startTime.plusHours(timeout).getHour();</span></span>
<span class="line"><span>    } elseif (TimeUnit.SECONDS.equals(unit)) {</span></span>
<span class="line"><span>        target = startTime.plusSeconds(timeout).getSecond();</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>        target = startTime.plusMinutes(timeout).getMinute();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>int min = target;</span></span>
<span class="line"><span>for (int i =0; i &lt; b; i++) {</span></span>
<span class="line"><span>int now = target - (i +1) * blockTime;</span></span>
<span class="line"><span>if (Math.abs(now) &lt; Math.abs(min)) {</span></span>
<span class="line"><span>            min = now;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>return timeout - min;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    效果如下</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="http://pangu.kingtsoft.com/pangu-facade/assets/image1.73414522.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>`,31)]))}const c=s(l,[["render",p],["__file","SQL跟踪模块.html.vue"]]),r=JSON.parse('{"path":"/%E7%9B%98%E5%8F%A4/%E7%BB%84%E4%BB%B6%E4%BB%8B%E7%BB%8D/SQL%E8%B7%9F%E8%B8%AA%E6%A8%A1%E5%9D%97.html","title":"SQL跟踪模块","lang":"zh-CN","frontmatter":{"description":"SQL跟踪模块 如何使用 业务项目引入 xml 技术原理 java java java java java java java java image.pngimage.png","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/%E7%9B%98%E5%8F%A4/%E7%BB%84%E4%BB%B6%E4%BB%8B%E7%BB%8D/SQL%E8%B7%9F%E8%B8%AA%E6%A8%A1%E5%9D%97.html"}],["meta",{"property":"og:title","content":"SQL跟踪模块"}],["meta",{"property":"og:description","content":"SQL跟踪模块 如何使用 业务项目引入 xml 技术原理 java java java java java java java java image.pngimage.png"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"http://pangu.kingtsoft.com/pangu-facade/assets/image1.73414522.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-18T07:25:41.000Z"}],["meta",{"property":"article:author","content":"Cotton Eye Joe"}],["meta",{"property":"article:modified_time","content":"2024-11-18T07:25:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SQL跟踪模块\\",\\"image\\":[\\"http://pangu.kingtsoft.com/pangu-facade/assets/image1.73414522.png\\"],\\"dateModified\\":\\"2024-11-18T07:25:41.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cotton Eye Joe\\",\\"url\\":\\"https://github.com/ToDreamr\\"}]}"]]},"headers":[],"git":{"createdTime":1731914741000,"updatedTime":1731914741000,"contributors":[{"name":"九歌天上有","email":"aruixrain@gmail.com","commits":1}]},"readingTime":{"minutes":7.06,"words":2117},"filePathRelative":"盘古/组件介绍/SQL跟踪模块.md","localizedDate":"2024年11月18日","excerpt":"","autoDesc":true}');export{c as comp,r as data};
