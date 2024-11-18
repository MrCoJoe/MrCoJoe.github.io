import{_ as n,o as a,c as i,d as e}from"./app-TmqSDitQ.js";const l={};function p(t,s){return a(),i("div",null,s[0]||(s[0]=[e(`<h1 id="盘古security模块-含授权" tabindex="-1"><a class="header-anchor" href="#盘古security模块-含授权"><span>盘古security模块(含授权)</span></a></h1><blockquote><h4 id="如何使用" tabindex="-1"><a class="header-anchor" href="#如何使用"><span>如何使用</span></a></h4></blockquote><p>引用方式</p><p><strong>xml</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>  &lt;groupId&gt;com.kingtsoft.pangu&lt;/groupId&gt;</span></span>
<span class="line"><span>  &lt;artifactId&gt;pangu-spring-security&lt;/artifactId&gt;</span></span>
<span class="line"><span>  &lt;version&gt;\${pangu.version}&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>授权</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    在请求进入的任意拦截器内，调用AuthorityHandler的角色权限配置方法。如下所示，方法作用</span></span>
<span class="line"><span>在请求拦截器中，对角色&amp;权限数据进行了设置。这里利用redis作为缓存操作进行了角色权限的存取。</span></span>
<span class="line"><span>当然没数据就会去数据库查询。一下为设置语法。</span></span>
<span class="line"><span>authorityHandler.setRoles(roles.toArray(new String[0]));</span></span>
<span class="line"><span>authorityHandler.setAuthorities(authorities.toArray(new String[0]));</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>publicboolean  preHandle(HttpServletRequest request, HttpServletResponse httpResponse, Object handler) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// ... 忽略</span></span>
<span class="line"><span>        AuthDTO authDTO = jwtUtil.getClaim(token, AuthDTO.class);</span></span>
<span class="line"><span>if (null== authDTO) {</span></span>
<span class="line"><span>thrownewTipException(PanguResCodeEnum.TOKEN_UN_KNOW);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        panguAuthorityHandler.initReqData(request, authDTO);</span></span>
<span class="line"><span>        ContextHolder.setRequest(request);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// MDC</span></span>
<span class="line"><span>        MDC.put(&quot;userCode&quot;, authDTO.getUserCode());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>returntrue;</span></span>
<span class="line"><span>    }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>/**</span></span>
<span class="line"><span>     * 初始化请求数据</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @paramrequest 请求结构</span></span>
<span class="line"><span>     * @paramauthDTO 认证信息</span></span>
<span class="line"><span>     * @author 金炀</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>private void   initReqData(HttpServletRequest request, AuthDTO authDTO) {</span></span>
<span class="line"><span>        PgAuthDTO pgAuthDTO =newPgAuthDTO();</span></span>
<span class="line"><span>        CopyUtil.copy(authDTO, pgAuthDTO);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        String key = PgAuthConst.REDIS_AUTHORITY_KEY +&quot;$&quot;+ authDTO.getUserCode();</span></span>
<span class="line"><span>        String cache = redisHandler.get(key);</span></span>
<span class="line"><span>        List&lt;String&gt; roles =new ArrayList&lt;&gt;();</span></span>
<span class="line"><span>        List&lt;String&gt; authorities =new ArrayList&lt;&gt;();</span></span>
<span class="line"><span>if (cache ==null) {</span></span>
<span class="line"><span>            log.info(&quot;远程重新获取权限&quot;);</span></span>
<span class="line"><span>doHttpInitAuthorities(roles, authorities, key, pgAuthDTO);</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>doCacheInitAuthorities(roles, authorities, key, pgAuthDTO, cache);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        authorityHandler.setRoles(roles.toArray(newString[0]));</span></span>
<span class="line"><span>        authorityHandler.setAuthorities(authorities.toArray(newString[0]));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        pgAuthDTO.setRoles(roles);</span></span>
<span class="line"><span>        pgAuthDTO.setAuthorities(authorities);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        request.setAttribute(ApplicationConst.USER_DATA_KEY, pgAuthDTO);</span></span>
<span class="line"><span>    }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    方法通过引用注解，对人员的水平权限做控制。hasRole代表角色限制、hasAuthority</span></span>
<span class="line"><span>代表对角色的具体权限点做控制。两者都写默认会以and为连接词，单独的hasRole或hasAuthority</span></span>
<span class="line"><span>配置多个的话，内部以或为连接词。外部若想以或为连接词可以指定注解的conjunction连接词。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>@PanguAuthority(hasRole=&quot;abc&quot;, hasAuthority=&quot;test&quot;)</span></span>
<span class="line"><span>private void   testCall() {</span></span>
<span class="line"><span>    log.info(&quot;doCall&quot;);</span></span>
<span class="line"><span>    AllLoggers.APPLICATION.info(&quot;AllLoggers.APPLICATION.info&quot;);</span></span>
<span class="line"><span>    OisRegSchedule oisRegSchedule =newOisRegSchedule();</span></span>
<span class="line"><span>    oisRegSchedule.setScheduleSn(1L);</span></span>
<span class="line"><span>    String abc = testCallAnoServiceApi.doSomething( oisRegSchedule);</span></span>
<span class="line"><span>    System.out.println(abc);</span></span>
<span class="line"><span>    log.info(&quot;end&quot;);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提供为外部API</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    用于规约对开放外部请求时候使用的接口。比如三方对接，对方对接我们，需要我们出对接规则。</span></span>
<span class="line"><span>在控制器上标注@PanguOpenApi(crypto = CryptoEnum.SM2)注解</span></span>
<span class="line"><span>value：默认OpenApiDefaultCovert，用于对控制器的入参出参进行控制。类必须实OpenApiCovertInterface接口。</span></span>
<span class="line"><span>checkAndCoverInParam为入参的处理，coverOutParam为出参的处理。</span></span>
<span class="line"><span>crypto：加密方式 SM2\\SM4或自定</span></span>
<span class="line"><span>    主要用于接口的结构体无感知转换及状态判断，业务代码只需关注实际使用的值。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><h4 id="技术原理" tabindex="-1"><a class="header-anchor" href="#技术原理"><span>技术原理</span></a></h4></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    配置了一个公用缓存类AuthorityHandler，执行对角色权限的临时存储及移除。因为使用了ThreadLocal，所有</span></span>
<span class="line"><span>很明确，这个注解目前是不适用于多线程上下文的。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.spring.security;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import org.springframework.util.CollectionUtils;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import java.util.Arrays;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Title: &lt;br&gt;</span></span>
<span class="line"><span> * Description: &lt;br&gt;</span></span>
<span class="line"><span> * Company: KingTang &lt;br&gt;</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * @author 金炀</span></span>
<span class="line"><span> * @version 1.0</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public class  AuthorityHandler {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 多线程执行情况下会出问题</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>private final   ThreadLocal&lt;String[]&gt; roles =new ThreadLocal&lt;&gt;();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final   ThreadLocal&lt;String[]&gt; authorities =new ThreadLocal&lt;&gt;();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private void   setRoles(String[] roles) {</span></span>
<span class="line"><span>this.roles.set(roles);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private void   setAuthorities(String[] authorities) {</span></span>
<span class="line"><span>this.authorities.set(authorities);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 检查角色</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>publicboolean  checkRoles(String[] roles) {</span></span>
<span class="line"><span>if (roles.length ==0) {</span></span>
<span class="line"><span>returntrue;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>String[] currentRoles =this.roles.get();</span></span>
<span class="line"><span>if (currentRoles ==null) {</span></span>
<span class="line"><span>returnfalse;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>return CollectionUtils.containsAny(Arrays.asList(currentRoles), Arrays.asList(roles));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 检查权限</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>publicboolean  checkAuthority(String[] authorities) {</span></span>
<span class="line"><span>if (authorities.length ==0) {</span></span>
<span class="line"><span>returntrue;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>String[] currentAuthorities =this.authorities.get();</span></span>
<span class="line"><span>if (currentAuthorities ==null) {</span></span>
<span class="line"><span>returnfalse;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>return CollectionUtils.containsAny(Arrays.asList(currentAuthorities), Arrays.asList(authorities));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private void   clearAuthority() {</span></span>
<span class="line"><span>        roles.remove();</span></span>
<span class="line"><span>        authorities.remove();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>配置了一个切面类AuthorityAspect，来对权限进行判断。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.spring.security.aop;</span></span>
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
<span class="line"><span>@Aspect</span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>public class  AuthorityAspect {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>private AuthorityHandler authorityHandler;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Pointcut(&quot;@annotation(com.kingtsoft.pangu.spring.security.annotation.PanguAuthority)&quot;)</span></span>
<span class="line"><span>private void   authPointCut() {</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Around(&quot;authPointCut()&quot;)</span></span>
<span class="line"><span>public Object checkAuth(ProceedingJoinPoint joinPoint) throws Throwable {</span></span>
<span class="line"><span>        MethodSignature signature = (MethodSignature) joinPoint.getSignature();</span></span>
<span class="line"><span>        Method method = signature.getMethod();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        PanguAuthority panguAuthority = method.getAnnotation(PanguAuthority.class);</span></span>
<span class="line"><span>boolean   roleFlag = authorityHandler.checkRoles(panguAuthority.hasRole());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (panguAuthority.conjunction().equals(AuthorityEnum.AND)) {</span></span>
<span class="line"><span>if (roleFlag) {</span></span>
<span class="line"><span>boolean   authorityFlag = authorityHandler.checkAuthority(panguAuthority.hasAuthority());</span></span>
<span class="line"><span>if (!authorityFlag) {</span></span>
<span class="line"><span>thrownewTipException(PanguResCodeEnum.AUTHORITY_ERROR.getCode(),</span></span>
<span class="line"><span>                            String.format(&quot;缺失%s权限中任意一个&quot;, Arrays.toString(panguAuthority.hasAuthority())));</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            } else {</span></span>
<span class="line"><span>thrownewTipException(PanguResCodeEnum.AUTHORITY_ERROR.getCode(),</span></span>
<span class="line"><span>                    String.format(&quot;缺失%s角色中任意一个&quot;, Arrays.toString(panguAuthority.hasRole())));</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>if (!roleFlag) {</span></span>
<span class="line"><span>boolean   authorityFlag = authorityHandler.checkAuthority(panguAuthority.hasAuthority());</span></span>
<span class="line"><span>if (!authorityFlag) {</span></span>
<span class="line"><span>thrownewTipException(PanguResCodeEnum.AUTHORITY_ERROR.getCode(),</span></span>
<span class="line"><span>                            String.format(&quot;缺失%s角色及%s权限匹配数据&quot;,</span></span>
<span class="line"><span>                                    Arrays.toString(panguAuthority.hasRole()),</span></span>
<span class="line"><span>                                    Arrays.toString(panguAuthority.hasAuthority())));</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>return joinPoint.proceed();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提供为外部API</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>定义了一个切入点与转换器</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.spring.security.openapi;</span></span>
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
<span class="line"><span>public class  OpenApiConfiguration {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>    @ConditionalOnMissingBean</span></span>
<span class="line"><span>public OpenApiDefaultCovert openApiDefaultCovert(HttpServletRequest request,</span></span>
<span class="line"><span>                                                     PgSecurityProperties pgSecurityProperties) {</span></span>
<span class="line"><span>returnnewOpenApiDefaultCovert(request, pgSecurityProperties);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>public OpenApiAdvisor openApiAdvisor(OpenApiProperties openApiProperties,</span></span>
<span class="line"><span>                                         Environment environment,</span></span>
<span class="line"><span>                                         ResourceLoader resourceLoader,</span></span>
<span class="line"><span>                                         ApplicationContext applicationContext) {</span></span>
<span class="line"><span>        OpenApiAdvisor advisor =newOpenApiAdvisor(openApiProperties, environment, resourceLoader);</span></span>
<span class="line"><span>        advisor.setAdvice(newOpenApiIntercept(applicationContext));</span></span>
<span class="line"><span>return advisor;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,27)]))}const d=n(l,[["render",p],["__file","盘古security模块(含授权).html.vue"]]),c=JSON.parse('{"path":"/%E7%9B%98%E5%8F%A4/%E7%BB%84%E4%BB%B6%E4%BB%8B%E7%BB%8D/%E7%9B%98%E5%8F%A4security%E6%A8%A1%E5%9D%97(%E5%90%AB%E6%8E%88%E6%9D%83).html","title":"盘古security模块(含授权)","lang":"zh-CN","frontmatter":{"description":"盘古security模块(含授权) 如何使用 引用方式 xml 授权 java java java 提供为外部API 技术原理 java java 提供为外部API java","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/%E7%9B%98%E5%8F%A4/%E7%BB%84%E4%BB%B6%E4%BB%8B%E7%BB%8D/%E7%9B%98%E5%8F%A4security%E6%A8%A1%E5%9D%97(%E5%90%AB%E6%8E%88%E6%9D%83).html"}],["meta",{"property":"og:title","content":"盘古security模块(含授权)"}],["meta",{"property":"og:description","content":"盘古security模块(含授权) 如何使用 引用方式 xml 授权 java java java 提供为外部API 技术原理 java java 提供为外部API java"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-18T07:25:41.000Z"}],["meta",{"property":"article:author","content":"Cotton Eye Joe"}],["meta",{"property":"article:modified_time","content":"2024-11-18T07:25:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"盘古security模块(含授权)\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-18T07:25:41.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cotton Eye Joe\\",\\"url\\":\\"https://github.com/ToDreamr\\"}]}"]]},"headers":[],"git":{"createdTime":1731914741000,"updatedTime":1731914741000,"contributors":[{"name":"九歌天上有","email":"aruixrain@gmail.com","commits":1}]},"readingTime":{"minutes":3.1,"words":929},"filePathRelative":"盘古/组件介绍/盘古security模块(含授权).md","localizedDate":"2024年11月18日","excerpt":"","autoDesc":true}');export{d as comp,c as data};
