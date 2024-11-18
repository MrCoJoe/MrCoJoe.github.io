import{_ as n,o as a,c as e,d as i}from"./app-C-SlHR5I.js";const l={};function p(r,s){return a(),e("div",null,s[0]||(s[0]=[i(`<h1 id="异常模块" tabindex="-1"><a class="header-anchor" href="#异常模块"><span>异常模块</span></a></h1><blockquote><h4 id="如何使用" tabindex="-1"><a class="header-anchor" href="#如何使用"><span>如何使用</span></a></h4></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>底座引入</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>xml</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>  &lt;groupId&gt;com.kingtsoft.pangu&lt;/groupId&gt;</span></span>
<span class="line"><span>  &lt;artifactId&gt;pangu-spring-exception&lt;/artifactId&gt;</span></span>
<span class="line"><span>  &lt;version&gt;\${pangu.version}&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>启动参数如果加了-Dpangu.dev=1，就可以让错误详细堆栈返回给客户端。（只建议开发模式下使用）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>flux项目引入</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>xml</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>  &lt;groupId&gt;com.kingtsoft.pangu&lt;/groupId&gt;</span></span>
<span class="line"><span>  &lt;artifactId&gt;pangu-springflux-exception&lt;/artifactId&gt;</span></span>
<span class="line"><span>  &lt;version&gt;\${pangu.version}&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><h4 id="技术原理" tabindex="-1"><a class="header-anchor" href="#技术原理"><span>技术原理</span></a></h4></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    就是实现了HandlerExceptionResolver方法即可捕获异常，@ControllerAdvice方式是因</span></span>
<span class="line"><span>为不想加入固定的扫描，这样会导致内容不通用。然后定义了开发模式，用来给客户端返回堆栈方便观察。</span></span>
<span class="line"><span>最后解析结构体以固定的数据结构及编码返回。支持自定义状态码反馈。配置了text与json2种模式。</span></span>
<span class="line"><span>text异常时会返回异常信息，状态码在http status种体现。json模式会返回一个结构体。异常一般</span></span>
<span class="line"><span>是500，内部会有自定义异常代码及信息。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.spring.exception;</span></span>
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
<span class="line"><span>public class  GlobalHandlerExceptionResolverimplementsHandlerExceptionResolver {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final  static ObjectMapper OBJECT_MAPPER =newObjectMapper();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>static {</span></span>
<span class="line"><span>        JavaTimeModule javaTimeModule =newJavaTimeModule();</span></span>
<span class="line"><span>        javaTimeModule.addSerializer(LocalDateTime.class,</span></span>
<span class="line"><span>newLocalDateTimeSerializer(DateTimeFormatter.ofPattern(&quot;yyyy-MM-dd HH:mm:ss&quot;)));</span></span>
<span class="line"><span>        javaTimeModule.addDeserializer(LocalDateTime.class,</span></span>
<span class="line"><span>newLocalDateTimeDeserializer(DateTimeFormatter.ofPattern(&quot;yyyy-MM-dd HH:mm:ss&quot;)));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        javaTimeModule.addSerializer(LocalDate.class, newLocalDateSerializer(DateTimeFormatter.ofPattern(&quot;yyyy-MM-dd&quot;)));</span></span>
<span class="line"><span>        javaTimeModule.addDeserializer(LocalDate.class, newLocalDateDeserializer(DateTimeFormatter.ofPattern(&quot;yyyy-MM-dd&quot;)));</span></span>
<span class="line"><span>        javaTimeModule.addSerializer(LocalTime.class, newLocalTimeSerializer(DateTimeFormatter.ofPattern(&quot;HH:mm:ss&quot;)));</span></span>
<span class="line"><span>        javaTimeModule.addDeserializer(LocalTime.class, newLocalTimeDeserializer(DateTimeFormatter.ofPattern(&quot;HH:mm:ss&quot;)));</span></span>
<span class="line"><span>        OBJECT_MAPPER.registerModule(javaTimeModule);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        OBJECT_MAPPER.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES,false);</span></span>
<span class="line"><span>        OBJECT_MAPPER.configure(JsonParser.Feature.ALLOW_COMMENTS, true);</span></span>
<span class="line"><span>        OBJECT_MAPPER.configure(JsonParser.Feature.ALLOW_UNQUOTED_FIELD_NAMES, true);</span></span>
<span class="line"><span>        OBJECT_MAPPER.configure(JsonParser.Feature.ALLOW_SINGLE_QUOTES, true);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>privatestaticfinal String MODE_NORMAL =&quot;text&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>privatestaticfinal String MODE_JSON =&quot;json&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private String mode = MODE_NORMAL;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicGlobalHandlerExceptionResolver(String mode) {</span></span>
<span class="line"><span>if (StringUtils.hasText(mode)) {</span></span>
<span class="line"><span>this.mode = mode;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>public ModelAndView resolveException(@NonNull HttpServletRequest request,</span></span>
<span class="line"><span>                                         @NonNull HttpServletResponse response,</span></span>
<span class="line"><span>                                         Object handler,</span></span>
<span class="line"><span>                                         @NonNull Exception ex) {</span></span>
<span class="line"><span>        log.error(&quot;错误请求：&quot;+ request.getRequestURL().toString());</span></span>
<span class="line"><span>        log.error(&quot;错误信息：&quot;+ ex.getMessage());</span></span>
<span class="line"><span>        ex.printStackTrace();</span></span>
<span class="line"><span>if (this.mode.equals(MODE_JSON)) {</span></span>
<span class="line"><span>doJson(ex, response);</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>doText(ex, response);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>returnnewModelAndView();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private void  doJson(Exception ex, HttpServletResponse response) {</span></span>
<span class="line"><span>        String errorMsg;</span></span>
<span class="line"><span>        response.setStatus(ResCodeEnum.ERROR.getCode());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        Object bizException;</span></span>
<span class="line"><span>if (!ex.getClass().equals(TipException.class)) {</span></span>
<span class="line"><span>            String msg;</span></span>
<span class="line"><span>            String devMode = System.getProperties().getProperty(ApplicationConst.ENV_DEV);</span></span>
<span class="line"><span>if (Objects.equals(devMode, &quot;1&quot;)) {</span></span>
<span class="line"><span>                msg = ex.getMessage() +&quot;: &quot;+ Arrays.toString(ex.getStackTrace());</span></span>
<span class="line"><span>            } else {</span></span>
<span class="line"><span>                msg = ex.getMessage() !=null? ex.getMessage() : ex.toString();</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            Map&lt;String, Object&gt; map =new HashMap&lt;&gt;(4);</span></span>
<span class="line"><span>            map.put(&quot;code&quot;, ResCodeEnum.ERROR.getCode());</span></span>
<span class="line"><span>            map.put(&quot;msg&quot;, msg);</span></span>
<span class="line"><span>            bizException = map;</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            Map&lt;String, Object&gt; map =new HashMap&lt;&gt;(4);</span></span>
<span class="line"><span>            map.put(&quot;code&quot;, ((TipException) ex).getCode());</span></span>
<span class="line"><span>            map.put(&quot;msg&quot;, ((TipException) ex).getDescribe());</span></span>
<span class="line"><span>            bizException = map;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>            errorMsg = OBJECT_MAPPER.writeValueAsString(bizException);</span></span>
<span class="line"><span>        } catch (JsonProcessingException e) {</span></span>
<span class="line"><span>thrownewRuntimeException(e);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        response.setCharacterEncoding(&quot;UTF-8&quot;);</span></span>
<span class="line"><span>        response.setContentType(&quot;application/json&quot;);</span></span>
<span class="line"><span>printWrite(errorMsg, response);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private void  doText(Exception ex, HttpServletResponse response) {</span></span>
<span class="line"><span>        String errorMsg;</span></span>
<span class="line"><span>if (!ex.getClass().equals(TipException.class)) {</span></span>
<span class="line"><span>            response.setStatus(ResCodeEnum.ERROR.getCode());</span></span>
<span class="line"><span>            String devMode = System.getProperties().getProperty(ApplicationConst.ENV_DEV);</span></span>
<span class="line"><span>if (Objects.equals(devMode, &quot;1&quot;)) {</span></span>
<span class="line"><span>                errorMsg = ex.getMessage() +&quot;: &quot;+ Arrays.toString(ex.getStackTrace());</span></span>
<span class="line"><span>            } else {</span></span>
<span class="line"><span>                errorMsg = ex.getMessage() !=null? ex.getMessage() : ex.toString();</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            TipException bizException = (TipException) ex;</span></span>
<span class="line"><span>            errorMsg = bizException.getDescribe();</span></span>
<span class="line"><span>            response.setStatus(bizException.getCode());</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        response.setCharacterEncoding(&quot;UTF-8&quot;);</span></span>
<span class="line"><span>        response.setContentType(&quot;application/json&quot;);</span></span>
<span class="line"><span>printWrite(errorMsg, response);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 将错误信息添加到response中</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @parammsg 信息</span></span>
<span class="line"><span>     * @paramresponse 响应</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>publicstaticvoidprintWrite(String msg, HttpServletResponse response) {</span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>            response.setCharacterEncoding(&quot;UTF-8&quot;);</span></span>
<span class="line"><span>            response.setHeader(&quot;Content-type&quot;, &quot;text/html; charset=utf-8&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            PrintWriter pw = response.getWriter();</span></span>
<span class="line"><span>            pw.write(msg);</span></span>
<span class="line"><span>            pw.flush();</span></span>
<span class="line"><span>            pw.close();</span></span>
<span class="line"><span>        } catch (Exception e) {</span></span>
<span class="line"><span>            e.printStackTrace();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>flux实现</span></span>
<span class="line"><span>结合内部ErrorWebFluxAutoConfiguration配置了一个新的自动化异常配置类。并且优先于PgErrorWebFluxAutoConfiguration启动。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.springflux.exception;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * {@link EnableAutoConfiguration Auto-configuration} to render errors through a WebFlux</span></span>
<span class="line"><span> * {@link org.springframework.web.server.WebExceptionHandler}.</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * @author 金炀</span></span>
<span class="line"><span> * @since 2.0.0</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@AutoConfiguration(before= {WebFluxAutoConfiguration.class, ErrorWebFluxAutoConfiguration.class})</span></span>
<span class="line"><span>@ConditionalOnWebApplication(type= ConditionalOnWebApplication.Type.REACTIVE)</span></span>
<span class="line"><span>@ConditionalOnClass(WebFluxConfigurer.class)</span></span>
<span class="line"><span>@EnableConfigurationProperties({ServerProperties.class, WebProperties.class})</span></span>
<span class="line"><span>public class  PgErrorWebFluxAutoConfiguration {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final   ServerProperties serverProperties;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicPgErrorWebFluxAutoConfiguration(ServerProperties serverProperties) {</span></span>
<span class="line"><span>this.serverProperties = serverProperties;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>    @ConditionalOnMissingBean(value= ErrorWebExceptionHandler.class, search= SearchStrategy.CURRENT)</span></span>
<span class="line"><span>    @Order(-2)</span></span>
<span class="line"><span>public ErrorWebExceptionHandler errorWebExceptionHandler(ErrorAttributes errorAttributes,</span></span>
<span class="line"><span>                                                             WebProperties webProperties, ObjectProvider&lt;ViewResolver&gt; viewResolvers,</span></span>
<span class="line"><span>                                                             ServerCodecConfigurer serverCodecConfigurer, ApplicationContext applicationContext) {</span></span>
<span class="line"><span>        PgErrorWebExceptionHandler exceptionHandler =newPgErrorWebExceptionHandler(errorAttributes,</span></span>
<span class="line"><span>                webProperties.getResources(), this.serverProperties.getError(), applicationContext);</span></span>
<span class="line"><span>        exceptionHandler.setViewResolvers(viewResolvers.orderedStream().collect(Collectors.toList()));</span></span>
<span class="line"><span>        exceptionHandler.setMessageWriters(serverCodecConfigurer.getWriters());</span></span>
<span class="line"><span>        exceptionHandler.setMessageReaders(serverCodecConfigurer.getReaders());</span></span>
<span class="line"><span>return exceptionHandler;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>    @ConditionalOnMissingBean(value= ErrorAttributes.class, search= SearchStrategy.CURRENT)</span></span>
<span class="line"><span>public DefaultErrorAttributes errorAttributes() {</span></span>
<span class="line"><span>returnnewDefaultErrorAttributes();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    定义了PgErrorWebExceptionHandler类进行异常数据处理。getErrorAttributes方法可以</span></span>
<span class="line"><span>定义异常数据内部获取模式。在这里可以根据自定义结构进行配置。最后同样根据json或者text模式，</span></span>
<span class="line"><span>通过getHttpStatus进行状态码配置</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.springflux.exception;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Title: &lt;br&gt;</span></span>
<span class="line"><span> * Description: &lt;br&gt;</span></span>
<span class="line"><span> * Company: wondersgroup.com &lt;br&gt;</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * @author 金炀</span></span>
<span class="line"><span> * @version 1.0</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@Slf4j</span></span>
<span class="line"><span>public class  PgErrorWebExceptionHandlerextendsDefaultErrorWebExceptionHandler {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>privatestaticfinal String MODE_NORMAL =&quot;text&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>privatestaticfinal String MODE_JSON =&quot;json&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final   String mode;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * Create a new {@code DefaultErrorWebExceptionHandler} instance.</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @paramerrorAttributes    the error attributes</span></span>
<span class="line"><span>     * @paramresources          the resources configuration properties</span></span>
<span class="line"><span>     * @paramerrorProperties    the error configuration properties</span></span>
<span class="line"><span>     * @paramapplicationContext the current application context</span></span>
<span class="line"><span>     * @since 2.4.0</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>publicPgErrorWebExceptionHandler(ErrorAttributes errorAttributes, WebProperties.Resources resources, ErrorProperties errorProperties, ApplicationContext applicationContext) {</span></span>
<span class="line"><span>super(errorAttributes, resources, errorProperties, applicationContext);</span></span>
<span class="line"><span>        Environment environment = applicationContext.getBean(Environment.class);</span></span>
<span class="line"><span>        mode = environment.getProperty(&quot;pangu.exception.mode&quot;, MODE_NORMAL);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>public Mono&lt;Void&gt; handle(ServerWebExchange exchange, Throwable ex) {</span></span>
<span class="line"><span>returnsuper.handle(exchange, ex);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>protected Map&lt;String, Object&gt; getErrorAttributes(ServerRequest request, ErrorAttributeOptions options) {</span></span>
<span class="line"><span>        Throwable error =super.getError(request);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        Integer code = ResCodeEnum.ERROR.getCode();</span></span>
<span class="line"><span>        String msg;</span></span>
<span class="line"><span>if (error instanceof TipException) {</span></span>
<span class="line"><span>            TipException exception = (TipException) error;</span></span>
<span class="line"><span>            code = exception.getCode();</span></span>
<span class="line"><span>            msg = exception.getDescribe();</span></span>
<span class="line"><span>        } elseif (error instanceof ResponseStatusException) {</span></span>
<span class="line"><span>            ResponseStatusException exception = (ResponseStatusException) error;</span></span>
<span class="line"><span>            code = exception.getStatus().value();</span></span>
<span class="line"><span>            msg = exception.getReason();</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            String devMode = System.getProperties().getProperty(ApplicationConst.ENV_DEV);</span></span>
<span class="line"><span>if (Objects.equals(devMode, &quot;1&quot;)) {</span></span>
<span class="line"><span>                msg = error.getMessage() +&quot;: &quot;+ Arrays.toString(error.getStackTrace());</span></span>
<span class="line"><span>            } else {</span></span>
<span class="line"><span>                msg = error.getMessage() !=null? error.getMessage() : error.toString();</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        Map&lt;String, Object&gt; map =new HashMap&lt;&gt;(4);</span></span>
<span class="line"><span>        map.put(&quot;code&quot;, code);</span></span>
<span class="line"><span>        map.put(&quot;msg&quot;, msg);</span></span>
<span class="line"><span>return map;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>protectedintgetHttpStatus(Map&lt;String, Object&gt; errorAttributes) {</span></span>
<span class="line"><span>int code = (int) errorAttributes.get(&quot;code&quot;);</span></span>
<span class="line"><span>if (mode.equals(MODE_JSON)) {</span></span>
<span class="line"><span>return code &lt;600? code : ResCodeEnum.ERROR.getCode();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>return code;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18)]))}const c=n(l,[["render",p],["__file","异常模块.html.vue"]]),d=JSON.parse('{"path":"/%E7%9B%98%E5%8F%A4/%E7%BB%84%E4%BB%B6%E4%BB%8B%E7%BB%8D/%E5%BC%82%E5%B8%B8%E6%A8%A1%E5%9D%97.html","title":"异常模块","lang":"zh-CN","frontmatter":{"description":"异常模块 如何使用 xml xml 技术原理 java java java","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/%E7%9B%98%E5%8F%A4/%E7%BB%84%E4%BB%B6%E4%BB%8B%E7%BB%8D/%E5%BC%82%E5%B8%B8%E6%A8%A1%E5%9D%97.html"}],["meta",{"property":"og:title","content":"异常模块"}],["meta",{"property":"og:description","content":"异常模块 如何使用 xml xml 技术原理 java java java"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-18T07:25:41.000Z"}],["meta",{"property":"article:author","content":"Cotton Eye Joe"}],["meta",{"property":"article:modified_time","content":"2024-11-18T07:25:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"异常模块\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-18T07:25:41.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cotton Eye Joe\\",\\"url\\":\\"https://github.com/ToDreamr\\"}]}"]]},"headers":[],"git":{"createdTime":1731914741000,"updatedTime":1731914741000,"contributors":[{"name":"九歌天上有","email":"aruixrain@gmail.com","commits":1}]},"readingTime":{"minutes":3.22,"words":967},"filePathRelative":"盘古/组件介绍/异常模块.md","localizedDate":"2024年11月18日","excerpt":"","autoDesc":true}');export{c as comp,d as data};
