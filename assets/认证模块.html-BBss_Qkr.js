import{_ as s,o as a,c as i,d as e}from"./app-ux1ElDeN.js";const l={};function p(d,n){return a(),i("div",null,n[0]||(n[0]=[e(`<h1 id="认证模块" tabindex="-1"><a class="header-anchor" href="#认证模块"><span>认证模块</span></a></h1><blockquote><h4 id="如何使用" tabindex="-1"><a class="header-anchor" href="#如何使用"><span>如何使用</span></a></h4></blockquote><p><strong>认证</strong> 引用如下模块</p><p><strong>xml</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>    &lt;groupId&gt;com.kingtsoft.pangu&lt;/groupId&gt;</span></span>
<span class="line"><span>    &lt;artifactId&gt;pangu-frame-auth-provider&lt;/artifactId&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    创建一个业务类UserServiceImpl实现UserService，实现一下接口，即可直接实现认证效果。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.frame.simple.auth.biz.service;</span></span>
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
<span class="line"><span>public class  UserServiceImplimplementsUserService&lt;AuthUser&gt; {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final   AuthUserDao authUserDao;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicUserServiceImpl(AuthUserDao authUserDao) {</span></span>
<span class="line"><span>this.authUserDao = authUserDao;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 根据账户获取用户信息</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>public AuthUser getUserByCode(String userCode) {</span></span>
<span class="line"><span>        BaseUser baseUser =newBaseUser();</span></span>
<span class="line"><span>        baseUser.setUserCode(userCode.toUpperCase());</span></span>
<span class="line"><span>        baseUser.setState(ApplicationConst.BaseState.STATE_INUSE);</span></span>
<span class="line"><span>        baseUser = authUserDao.find(baseUser);</span></span>
<span class="line"><span>if (baseUser ==null) {</span></span>
<span class="line"><span>thrownewTipException(PanguResCodeEnum.LOGIN_USER_NOT_FOUND);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        AuthUser authUser =newAuthUser();</span></span>
<span class="line"><span>        CopyUtil.copy(baseUser, authUser);</span></span>
<span class="line"><span>return authUser;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 获取权限信息</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>public List&lt;String&gt; getAuthorities(Integer userId) {</span></span>
<span class="line"><span>return authUserDao.getAuthoritiesByUserId(userId);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 获取角色信息</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>public List&lt;String&gt; getRoles(Integer userId) {</span></span>
<span class="line"><span>return authUserDao.getRolesByUserId(userId);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 根据用户获取三方信息</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>public AuthUser getUserByThirdData(Integer thirdType, String thirdId) {</span></span>
<span class="line"><span>        BaseUser baseUser = authUserDao.getUserByThirdData(thirdType, thirdId);</span></span>
<span class="line"><span>if (baseUser ==null) {</span></span>
<span class="line"><span>thrownewTipException(PanguResCodeEnum.LOGIN_THIRD_USER_NOT_FOUND);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        AuthUser authUser =newAuthUser();</span></span>
<span class="line"><span>        CopyUtil.copy(baseUser, authUser);</span></span>
<span class="line"><span>return authUser;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    AuthHandler authHandler 默认内置sm4与md5加密还有默认的一套加密规则</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>若业务不满足需要重写****继承</strong> AuthHandler&lt;PgAuthDTO, LoginDTO, AuthUser&gt;抽象类，此处三个泛型都可以根据实际情况去继承轴向类基础泛型类并拓展。然后重写方法。(默认使用了jwt，若想覆盖，重写getToken方法即可)</p><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.frame.simple.auth.biz.config;</span></span>
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
<span class="line"><span>public class  PgAuthHandlerExecutorextendsAuthHandler&lt;PgAuthDTO, LoginDTO, AuthUser&gt; {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>private AuthProperties authProperties;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>private RedisHandler&lt;String, String&gt; redisHandler;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>public PgAuthDTO doAuth(LoginDTO loginDTO) {</span></span>
<span class="line"><span>        AuthUser userEntity = userService.getUserByCode(loginDTO.getUserCode());</span></span>
<span class="line"><span>if (!Objects.equals(Md5Util.getMd5(loginDTO.getPwd()), userEntity.getPwd())) {</span></span>
<span class="line"><span>thrownewTipException(PanguResCodeEnum.LOGIN_PASSWORD_WRONG);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        PgAuthDTO authDTO =newPgAuthDTO();</span></span>
<span class="line"><span>        CopyUtil.copy(userEntity, authDTO);</span></span>
<span class="line"><span>        authDTO.setRoles(userService.getRoles(authDTO.getUserId()));</span></span>
<span class="line"><span>        authDTO.setAuthorities(userService.getAuthorities(authDTO.getUserId()));</span></span>
<span class="line"><span>modifyRoles(authDTO);</span></span>
<span class="line"><span>return authDTO;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private void  modifyRoles(PgAuthDTO authDTO) {</span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>            String key = PgAuthConst.REDIS_AUTHORITY_KEY +&quot;$&quot;+ authDTO.getUserCode();</span></span>
<span class="line"><span>            redisHandler.set(key, newJSONObject()</span></span>
<span class="line"><span>                    .fluentPut(PgAuthConst.REDIS_AUTHORITY_ROLES, authDTO.getRoles())</span></span>
<span class="line"><span>                    .fluentPut(PgAuthConst.REDIS_AUTHORITY_AUTHORITIES, authDTO.getAuthorities())</span></span>
<span class="line"><span>                    .toJSONString(), authProperties.getAuthority().getTimeout(), TimeUnit.MINUTES);</span></span>
<span class="line"><span>        } catch (Exception e) {</span></span>
<span class="line"><span>if (log.isDebugEnabled()) {</span></span>
<span class="line"><span>                e.printStackTrace();</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            log.warn(&quot;缓存附加信息失败！&quot;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>public PgAuthDTO doAuthForThird(LoginDTO loginDTO) {</span></span>
<span class="line"><span>        AuthUser userEntity = userService.getUserByThirdData(loginDTO.getThirdType(), loginDTO.getThirdId());</span></span>
<span class="line"><span>// 多写一次判断是为了而保证层级严谨性，重写业务接口有可能不会判断</span></span>
<span class="line"><span>if (userEntity ==null) {</span></span>
<span class="line"><span>thrownewTipException(PanguResCodeEnum.LOGIN_USER_NOT_FOUND);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        PgAuthDTO authDTO =newPgAuthDTO();</span></span>
<span class="line"><span>        CopyUtil.copy(userEntity, authDTO);</span></span>
<span class="line"><span>return authDTO;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    新建配置类,如下定义一个新的AuthHandler bean，并标注@Primary用来保证优先级。</span></span>
<span class="line"><span>(内置默认有一个)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.frame.simple.auth.biz.config;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span>* Title: &lt;br&gt;</span></span>
<span class="line"><span>* Description: &lt;br&gt;</span></span>
<span class="line"><span>* Company: KingTang &lt;br&gt;</span></span>
<span class="line"><span>*</span></span>
<span class="line"><span>* @author 金炀</span></span>
<span class="line"><span>* @version 1.0</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span>@Configuration</span></span>
<span class="line"><span>public class  PanGuAuthHandlerConfig {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final   UserService userService;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicPanGuAuthHandlerConfig(UserService userService) {</span></span>
<span class="line"><span>this.userService = userService;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>    @Primary</span></span>
<span class="line"><span>public AuthHandler&lt;PgAuthDTO, LoginDTO, AuthUser&gt; authHandler() {</span></span>
<span class="line"><span>returnnewPgAuthHandlerExecutor().configService(userService);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    因为模块已经内置了请求入口 请求/login/doAuth，控制器概览如下(固定的地址是</span></span>
<span class="line"><span>为了适配通用认证服务)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.frame.auth.provider.web;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import com.kingtsoft.pangu.base.common.JsonResult;</span></span>
<span class="line"><span>import com.kingtsoft.pangu.base.exception.utils.PanguExceptionUtil;</span></span>
<span class="line"><span>import com.kingtsoft.pangu.frame.auth.provider.service.LoginService;</span></span>
<span class="line"><span>import io.swagger.v3.oas.annotations.Operation;</span></span>
<span class="line"><span>import io.swagger.v3.oas.annotations.Parameter;</span></span>
<span class="line"><span>import io.swagger.v3.oas.annotations.media.Schema;</span></span>
<span class="line"><span>import org.springframework.web.bind.annotation.*;</span></span>
<span class="line"><span></span></span>
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
<span class="line"><span>@RestController</span></span>
<span class="line"><span>@RequestMapping(&quot;/login&quot;)</span></span>
<span class="line"><span>public class  LoginController {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final   LoginService loginService;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicLoginController(LoginService loginService) {</span></span>
<span class="line"><span>this.loginService = loginService;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Operation(</span></span>
<span class="line"><span>summary=&quot;登录&quot;,</span></span>
<span class="line"><span>parameters= {</span></span>
<span class="line"><span>                    @Parameter(</span></span>
<span class="line"><span>name=&quot;userName&quot;,</span></span>
<span class="line"><span>description=&quot;账号&quot;,</span></span>
<span class="line"><span>schema= @Schema(type=&quot;string&quot;, implementation= String.class)</span></span>
<span class="line"><span>                    ),</span></span>
<span class="line"><span>                    @Parameter(</span></span>
<span class="line"><span>name=&quot;pwd&quot;,</span></span>
<span class="line"><span>description=&quot;密码&quot;,</span></span>
<span class="line"><span>schema= @Schema(type=&quot;string&quot;, implementation= String.class)</span></span>
<span class="line"><span>                    )</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>    @PostMapping(&quot;/doAuth&quot;)</span></span>
<span class="line"><span>public Object doAuth(@RequestBody Map&lt;String, Object&gt; loginDTO) {</span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>return JsonResult.create(loginService.doAuth(loginDTO));</span></span>
<span class="line"><span>        } catch (Exception e) {</span></span>
<span class="line"><span>return PanguExceptionUtil.exceptionToJsonResult(e);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Operation(</span></span>
<span class="line"><span>summary=&quot;通过三方登录&quot;,</span></span>
<span class="line"><span>parameters= {</span></span>
<span class="line"><span>                    @Parameter(</span></span>
<span class="line"><span>name=&quot;thirdType&quot;,</span></span>
<span class="line"><span>description=&quot;账号&quot;,</span></span>
<span class="line"><span>schema= @Schema(type=&quot;string&quot;, implementation= String.class)</span></span>
<span class="line"><span>                    ),</span></span>
<span class="line"><span>                    @Parameter(</span></span>
<span class="line"><span>name=&quot;thirdId&quot;,</span></span>
<span class="line"><span>description=&quot;密码&quot;,</span></span>
<span class="line"><span>schema= @Schema(type=&quot;string&quot;, implementation= String.class)</span></span>
<span class="line"><span>                    )</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>    @PostMapping(&quot;/doAuthForThird&quot;)</span></span>
<span class="line"><span>public Object doAuthForThird(@RequestBody Map&lt;String, Object&gt; loginDTO) {</span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>return JsonResult.create(loginService.doAuthForThird(loginDTO));</span></span>
<span class="line"><span>        } catch (Exception e) {</span></span>
<span class="line"><span>return PanguExceptionUtil.exceptionToJsonResult(e);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Operation(</span></span>
<span class="line"><span>summary=&quot;获取权限数据&quot;,</span></span>
<span class="line"><span>parameters= {</span></span>
<span class="line"><span>                    @Parameter(</span></span>
<span class="line"><span>name=&quot;token&quot;,</span></span>
<span class="line"><span>description=&quot;凭证&quot;,</span></span>
<span class="line"><span>schema= @Schema(type=&quot;string&quot;, implementation= String.class)</span></span>
<span class="line"><span>                    )</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>    @GetMapping(&quot;/getAuthorityByToken&quot;)</span></span>
<span class="line"><span>public Object getAuthorityByToken(String token) {</span></span>
<span class="line"><span>return JsonResult.create(loginService.getAuthorityByToken(token));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Operation(</span></span>
<span class="line"><span>summary=&quot;获取权限数据&quot;,</span></span>
<span class="line"><span>parameters= {</span></span>
<span class="line"><span>                    @Parameter(</span></span>
<span class="line"><span>name=&quot;userId&quot;,</span></span>
<span class="line"><span>description=&quot;用户ID&quot;,</span></span>
<span class="line"><span>schema= @Schema(type=&quot;string&quot;, implementation= String.class)</span></span>
<span class="line"><span>                    )</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>    @GetMapping(&quot;/getAuthorities/{userId}&quot;)</span></span>
<span class="line"><span>public Object getAuthorities(@PathVariable Integer userId) {</span></span>
<span class="line"><span>return JsonResult.create(loginService.getAuthorities(userId));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Operation(</span></span>
<span class="line"><span>summary=&quot;获取角色数据&quot;,</span></span>
<span class="line"><span>parameters= {</span></span>
<span class="line"><span>                    @Parameter(</span></span>
<span class="line"><span>name=&quot;userId&quot;,</span></span>
<span class="line"><span>description=&quot;用户ID&quot;,</span></span>
<span class="line"><span>schema= @Schema(type=&quot;string&quot;, implementation= String.class)</span></span>
<span class="line"><span>                    )</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>    @GetMapping(&quot;/getRoles/{userId}&quot;)</span></span>
<span class="line"><span>public Object getRoles(@PathVariable Integer userId) {</span></span>
<span class="line"><span>return JsonResult.create(loginService.getRoles(userId));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Operation(summary=&quot;登出&quot;)</span></span>
<span class="line"><span>    @PostMapping(&quot;/doLogOut&quot;)</span></span>
<span class="line"><span>public Object doLogOut() {</span></span>
<span class="line"><span>return JsonResult.create(loginService.doLogOut());</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    默认使用了jwt生成token，开放了三个常用属性配置</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>yaml</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>pangu:</span></span>
<span class="line"><span>	auth:</span></span>
<span class="line"><span>token: </span></span>
<span class="line"><span># 过期时间 默认一天</span></span>
<span class="line"><span>fin-time: 86400000</span></span>
<span class="line"><span># 生效时间 默认一分钟前</span></span>
<span class="line"><span>nbf: 6000</span></span>
<span class="line"><span># token内密钥</span></span>
<span class="line"><span>inner-key: &#39;KT JAVA123&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><h4 id="技术原理" tabindex="-1"><a class="header-anchor" href="#技术原理"><span>技术原理</span></a></h4></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    因为入口路径可以统一，业务处理可以抽象成一个业务类处理，所以，设计了执行器-》</span></span>
<span class="line"><span>业务类通用操作抽象-》实际执行的模式。定义了三个基类进行基础认证，首先保证适用于普</span></span>
<span class="line"><span>通小系统，所以内置了默认执行器。</span></span>
<span class="line"><span>AuthDTO：认证返回基类</span></span>
<span class="line"><span>LoginDTO：登录入参基类</span></span>
<span class="line"><span>UserEntity：用户数据库查询到的用户信息基类</span></span>
<span class="line"><span>    下面这个类对基础的认证行为进行了抽象，而实际的认证行为由AuthHandler的实现类进行</span></span>
<span class="line"><span>了实现，下图中定义的token也有抽象类实现，默认为JWT。可以看到认证入参为MAP，主要为了</span></span>
<span class="line"><span>让用户可以自定义业务逻辑，用到自己的入参，保证在序列化过程中不损失，在抽象类中会更正为</span></span>
<span class="line"><span>实际类型以供业务逻辑处理。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.frame.auth.provider.service;</span></span>
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
<span class="line"><span>@Service</span></span>
<span class="line"><span>public class  LoginService {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final   AuthHandler authHandler;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicLoginService(AuthHandler authHandler) {</span></span>
<span class="line"><span>this.authHandler = authHandler;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 注册</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @author 金炀</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>private void   register(Map&lt;String, Object&gt; loginDTO) {</span></span>
<span class="line"><span>        authHandler.register(authHandler.mapToEntityData(loginDTO));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 登录</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @author 金炀</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>public Object doAuth(Map&lt;String, Object&gt; loginDTO) {</span></span>
<span class="line"><span>        AuthDTO authDTO = authHandler.doAuth(authHandler.mapToLoginData(loginDTO));</span></span>
<span class="line"><span>returngetAuthData(authDTO);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private Map&lt;String, Object&gt; getAuthData(AuthDTO authDTO) {</span></span>
<span class="line"><span>        String tokenNew = authHandler.getToken(authDTO);</span></span>
<span class="line"><span>        Map&lt;String, Object&gt; objectMap =new HashMap&lt;&gt;(4);</span></span>
<span class="line"><span>        objectMap.put(AuthConst.KEY_ENTITY, authDTO);</span></span>
<span class="line"><span>        objectMap.put(AuthConst.KEY_TOKEN, tokenNew);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>return objectMap;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public List&lt;String&gt; getAuthorityByToken(String token) {</span></span>
<span class="line"><span>return authHandler.getAuthorityByToken(token);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public List&lt;String&gt; getAuthorities(Integer userId) {</span></span>
<span class="line"><span>return authHandler.getAuthorities(userId);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public List&lt;String&gt; getRoles(Integer userId) {</span></span>
<span class="line"><span>return authHandler.getRoles(userId);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 登出</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @author 金炀</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>public Object doLogOut() {</span></span>
<span class="line"><span>// 可以通过redis之类的，在创建时候放入某个用户某个会话的盐，更改token后调整此内容，这样之前的token就会不能用</span></span>
<span class="line"><span>return&quot;登出&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 三方登录</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @author 金炀</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>public Object doAuthForThird(Map&lt;String, Object&gt; loginDTO) {</span></span>
<span class="line"><span>        AuthDTO authDTO = authHandler.doAuthForThird(authHandler.mapToLoginData(loginDTO));</span></span>
<span class="line"><span>returngetAuthData(authDTO);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    内置了默认执行器AuthHandlerExecutor只作为默认bean生成，默认行为被封装在了抽象类</span></span>
<span class="line"><span>AuthHandler中，可以看出生成时候需要置入一个业务执行器UserService，并且开放了业务操作</span></span>
<span class="line"><span>类的配置。默认实现了3种加密方式，开放了一些set方法进行自定义配置。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.base.auth.extend;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import com.kingtsoft.pangu.base.auth.model.AuthDTO;</span></span>
<span class="line"><span>import com.kingtsoft.pangu.base.auth.model.LoginDTO;</span></span>
<span class="line"><span>import com.kingtsoft.pangu.base.auth.model.UserEntity;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Title: &lt;br&gt;</span></span>
<span class="line"><span> * Description: &lt;br&gt;</span></span>
<span class="line"><span> * Company: KingTang &lt;br&gt;</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * @author 金炀</span></span>
<span class="line"><span> * @version 1.0</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public class  AuthHandlerExecutor&lt;CextendsUserEntity&gt; extendsAuthHandler&lt;AuthDTO, LoginDTO, C&gt; {</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * Title: &lt;br&gt;</span></span>
<span class="line"><span> * Description: &lt;br&gt;</span></span>
<span class="line"><span> * Company: KingTang &lt;br&gt;</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * @author 金炀</span></span>
<span class="line"><span> * @version 1.0</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>publicabstractclassAuthHandler&lt;AextendsAuthDTO, BextendsLoginDTO, CextendsUserEntity&gt; {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>protectedboolean   isEncrypted =true;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>protected AuthEncryptEnum encryptedType = AuthEncryptEnum.DEFAULT;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>privatestaticfinal String DEFAULT_HEX_KEY =&quot;youaremysunshine&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>protected UserService&lt;C&gt; userService;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public AuthHandler setEncryptedType(AuthEncryptEnum encryptedType) {</span></span>
<span class="line"><span>this.encryptedType = encryptedType;</span></span>
<span class="line"><span>returnthis;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private void   setIsEncrypted(boolean  encrypted) {</span></span>
<span class="line"><span>        isEncrypted = encrypted;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public AuthHandler configService(UserService&lt;C&gt; userService) {</span></span>
<span class="line"><span>this.userService = userService;</span></span>
<span class="line"><span>returnthis;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public UserService&lt;C&gt; getUserService() {</span></span>
<span class="line"><span>return userService;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private void   register(C entity) {</span></span>
<span class="line"><span>        String pwd = entity.getPwd();</span></span>
<span class="line"><span>// 获取随机数，注意下，linux下如果卡，需要配置下系统的随机策略</span></span>
<span class="line"><span>        SecureRandom secureRandom =newSecureRandom();</span></span>
<span class="line"><span>//        int length = pwd.length() / 2;</span></span>
<span class="line"><span>//        if (length == 0) {</span></span>
<span class="line"><span>//            throw new TipException(&quot;密码长度不符合要求！&quot;);</span></span>
<span class="line"><span>//        }</span></span>
<span class="line"><span>// 获取与密码长度差不多相等的随机数</span></span>
<span class="line"><span>byte[] saltBytes =newbyte[16];</span></span>
<span class="line"><span>        secureRandom.nextBytes(saltBytes);</span></span>
<span class="line"><span>        String salt = ByteUtils.toHexString(saltBytes);</span></span>
<span class="line"><span>// 合并后摘要</span></span>
<span class="line"><span>        String newPwd = Sm3Util.encrypt(pwd + salt);</span></span>
<span class="line"><span>// 一起传出，这里前32位为盐值</span></span>
<span class="line"><span>        entity.setPwd(salt + newPwd);</span></span>
<span class="line"><span>        userService.saveUser(entity);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public A doAuth(B loginDTO) {</span></span>
<span class="line"><span>if (StringUtil.isBlank(loginDTO.getHexKey())) {</span></span>
<span class="line"><span>            loginDTO.setHexKey(ByteUtils.toHexString(DEFAULT_HEX_KEY.getBytes(StandardCharsets.UTF_8)));</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        C userEntity = userService.getUserByCode(loginDTO.getUserCode());</span></span>
<span class="line"><span>// 多写一次判断是为了而保证层级严谨性，重写业务接口有可能不会判断</span></span>
<span class="line"><span>if (userEntity ==null) {</span></span>
<span class="line"><span>thrownewTipException(PanguResCodeEnum.LOGIN_USER_NOT_FOUND);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>if (isEncrypted) {</span></span>
<span class="line"><span>if (AuthEncryptEnum.SM4.equals(encryptedType)) {</span></span>
<span class="line"><span>if (!Objects.equals(Sm4Util.encryptEcb(loginDTO.getHexKey(), loginDTO.getPwd()), userEntity.getPwd())) {</span></span>
<span class="line"><span>thrownewTipException(PanguResCodeEnum.LOGIN_PASSWORD_WRONG);</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            } elseif (AuthEncryptEnum.MD5.equals(encryptedType)) {</span></span>
<span class="line"><span>if (!Objects.equals(Md5Util.getMd5(loginDTO.getPwd()), userEntity.getPwd())) {</span></span>
<span class="line"><span>thrownewTipException(PanguResCodeEnum.LOGIN_PASSWORD_WRONG);</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            } elseif (AuthEncryptEnum.DEFAULT.equals(encryptedType)) {</span></span>
<span class="line"><span>                String salt = userEntity.getPwd().substring(0, 32);</span></span>
<span class="line"><span>                String pwd = userEntity.getPwd().substring(32);</span></span>
<span class="line"><span>                String inputPwd = Sm3Util.encrypt(loginDTO.getPwd() + salt);</span></span>
<span class="line"><span>if (!Objects.equals(Md5Util.getMd5(inputPwd), pwd)) {</span></span>
<span class="line"><span>thrownewTipException(PanguResCodeEnum.LOGIN_PASSWORD_WRONG);</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            } else {</span></span>
<span class="line"><span>thrownewTipException(PanguResCodeEnum.LOGIN_PASSWORD_WRONG);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>if (!Objects.equals(loginDTO.getPwd(), userEntity.getPwd())) {</span></span>
<span class="line"><span>thrownewTipException(PanguResCodeEnum.LOGIN_PASSWORD_WRONG);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>returngetAuthByUserEntity(userEntity);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @SuppressWarnings(&quot;unchecked&quot;)</span></span>
<span class="line"><span>private A getAuthByUserEntity(C userEntity) {</span></span>
<span class="line"><span>        Class&lt;A&gt; aClass = (Class&lt;A&gt;) getTargetType(0);</span></span>
<span class="line"><span>        A authDTO;</span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>            authDTO = aClass.getConstructor().newInstance();</span></span>
<span class="line"><span>        } catch (Exception e) {</span></span>
<span class="line"><span>thrownewTipException(aClass.getName() +&quot;缺少默认构造器！&quot;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        CopyUtil.copy(userEntity, authDTO);</span></span>
<span class="line"><span>return authDTO;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @SuppressWarnings(&quot;unchecked&quot;)</span></span>
<span class="line"><span>public B mapToLoginData(Map&lt;String, Object&gt; objectMap) {</span></span>
<span class="line"><span>return (B) JsonUtil.jsonToObj(JsonUtil.toJson(objectMap), getTargetType(1));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @SuppressWarnings(&quot;unchecked&quot;)</span></span>
<span class="line"><span>public C mapToEntityData(Map&lt;String, Object&gt; objectMap) {</span></span>
<span class="line"><span>return (C) JsonUtil.jsonToObj(JsonUtil.toJson(objectMap), getTargetType(2));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private Class&lt;?&gt; getTargetType(intnum) {</span></span>
<span class="line"><span>return (Class&lt;?&gt;) ((ParameterizedType) getClass().getGenericSuperclass()).getActualTypeArguments()[num];</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public List&lt;String&gt; getAuthorityByToken(String token) {</span></span>
<span class="line"><span>returnnull;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public A doAuthForThird(B loginDTO) {</span></span>
<span class="line"><span>        C userEntity = userService.getUserByThirdData(loginDTO.getThirdType(), loginDTO.getThirdId());</span></span>
<span class="line"><span>// 多写一次判断是为了而保证层级严谨性，重写业务接口有可能不会判断</span></span>
<span class="line"><span>if (userEntity ==null) {</span></span>
<span class="line"><span>thrownewTipException(PanguResCodeEnum.LOGIN_USER_NOT_FOUND);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>returngetAuthByUserEntity(userEntity);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public List&lt;String&gt; getAuthorities(Integer userId) {</span></span>
<span class="line"><span>return userService.getAuthorities(userId);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public List&lt;String&gt; getRoles(Integer userId) {</span></span>
<span class="line"><span>return userService.getRoles(userId);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public String getToken(AuthDTO authDTO) {</span></span>
<span class="line"><span>return JwtStaticUtil.createTokenWithClaim(JwtStaticUtil.getTokenKey(authDTO.getUserId()), authDTO);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    配置化类不加泛型，为了让它在注入的时候不需要强一直，便于拓展。这样入参，业务类，</span></span>
<span class="line"><span>认证返回都可以通过自定义的方式实现，而默认提供的最简化方案也符合小型项目的直接使用。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.frame.auth.provider;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import com.kingtsoft.pangu.base.auth.extend.AuthHandler;</span></span>
<span class="line"><span>import com.kingtsoft.pangu.base.auth.extend.AuthHandlerExecutor;</span></span>
<span class="line"><span>import com.kingtsoft.pangu.base.auth.extend.UserService;</span></span>
<span class="line"><span>import org.springframework.context.annotation.Bean;</span></span>
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
<span class="line"><span>@Configuration</span></span>
<span class="line"><span>public class  AuthHandlerConfig {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final   UserService userService;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicAuthHandlerConfig(UserService userService) {</span></span>
<span class="line"><span>this.userService = userService;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>public AuthHandler defaultAuthHandler() {</span></span>
<span class="line"><span>returnnew AuthHandlerExecutor&lt;&gt;().configService(userService);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,33)]))}const r=s(l,[["render",p],["__file","认证模块.html.vue"]]),t=JSON.parse('{"path":"/%E7%9B%98%E5%8F%A4/%E7%BB%84%E4%BB%B6%E4%BB%8B%E7%BB%8D/%E8%AE%A4%E8%AF%81%E6%A8%A1%E5%9D%97.html","title":"认证模块","lang":"zh-CN","frontmatter":{"description":"认证模块 如何使用 认证 引用如下模块 xml java 若业务不满足需要重写****继承 AuthHandler<PgAuthDTO, LoginDTO, AuthUser>抽象类，此处三个泛型都可以根据实际情况去继承轴向类基础泛型类并拓展。然后重写方法。(默认使用了jwt，若想覆盖，重写getToken方法即可) java java java ya...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/%E7%9B%98%E5%8F%A4/%E7%BB%84%E4%BB%B6%E4%BB%8B%E7%BB%8D/%E8%AE%A4%E8%AF%81%E6%A8%A1%E5%9D%97.html"}],["meta",{"property":"og:title","content":"认证模块"}],["meta",{"property":"og:description","content":"认证模块 如何使用 认证 引用如下模块 xml java 若业务不满足需要重写****继承 AuthHandler<PgAuthDTO, LoginDTO, AuthUser>抽象类，此处三个泛型都可以根据实际情况去继承轴向类基础泛型类并拓展。然后重写方法。(默认使用了jwt，若想覆盖，重写getToken方法即可) java java java ya..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-18T07:25:41.000Z"}],["meta",{"property":"article:author","content":"Cotton Eye Joe"}],["meta",{"property":"article:modified_time","content":"2024-11-18T07:25:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"认证模块\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-18T07:25:41.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cotton Eye Joe\\",\\"url\\":\\"https://github.com/ToDreamr\\"}]}"]]},"headers":[],"git":{"createdTime":1731914741000,"updatedTime":1731914741000,"contributors":[{"name":"九歌天上有","email":"aruixrain@gmail.com","commits":1}]},"readingTime":{"minutes":6.76,"words":2029},"filePathRelative":"盘古/组件介绍/认证模块.md","localizedDate":"2024年11月18日","excerpt":"","autoDesc":true}');export{r as comp,t as data};
