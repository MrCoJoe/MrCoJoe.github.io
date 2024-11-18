import{_ as n,o as a,c as e,d as i}from"./app-nnBTm0Jw.js";const l={};function p(r,s){return a(),e("div",null,s[0]||(s[0]=[i(`<h1 id="swagger模块" tabindex="-1"><a class="header-anchor" href="#swagger模块"><span>Swagger模块</span></a></h1><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    找了一圈，发现还是swagger正统点。使用的swagger3.0，抛弃了原先的springfox，</span></span>
<span class="line"><span>使用了springdoc代替，里面会彻底放弃swagger2.0的注解。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><h4 id="如何使用" tabindex="-1"><a class="header-anchor" href="#如何使用"><span>如何使用</span></a></h4></blockquote><p>引入模块</p><p><strong>xml</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>  &lt;artifactId&gt;pangu-spring-swagger&lt;/artifactId&gt;</span></span>
<span class="line"><span>  &lt;groupId&gt;com.kingtsoft.pangu&lt;/groupId&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>案例如下</p><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>@Schema(name=&quot;BaseUserPlus&quot;, description=&quot;人员拓展信息&quot;)</span></span>
<span class="line"><span>@Data</span></span>
<span class="line"><span>public class  BaseUserPlusimplementsSerializable {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 标识</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    @Schema(description=&quot;标识&quot;)</span></span>
<span class="line"><span>private Integer userId;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 主题</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    @Schema(description=&quot;主题&quot;)</span></span>
<span class="line"><span>private String themeCode;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 头像</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    @Schema(description=&quot;背景图&quot;)</span></span>
<span class="line"><span>privatebyte[] backgroundImg;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 修改时间</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    @Schema(description=&quot;修改时间&quot;)</span></span>
<span class="line"><span>private LocalDateTime modifyTime;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 修改人员</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    @Schema(description=&quot;修改人员&quot;)</span></span>
<span class="line"><span>private Integer modifyBy;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 备注</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    @Schema(description=&quot;备注&quot;)</span></span>
<span class="line"><span>private String remark;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>privatestaticfinallong  serialVersionUID =1L;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    注意有的时候，需要数据非必填，可以使用@RequestParam(required = false)，</span></span>
<span class="line"><span>默认都为必填内容，其他的注解不会生效。实体类的的model作为入参的话，如果类里面已经有</span></span>
<span class="line"><span>注解了，外部无需配置，外部配置会导致内部识别异常。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>@Operation(</span></span>
<span class="line"><span>summary=&quot;获取机构列表数据&quot;,</span></span>
<span class="line"><span>parameters= {</span></span>
<span class="line"><span>                    @Parameter(</span></span>
<span class="line"><span>name=&quot;num&quot;,</span></span>
<span class="line"><span>description=&quot;最大数&quot;,</span></span>
<span class="line"><span>schema= @Schema(type=&quot;int&quot;, implementation= Integer.class)</span></span>
<span class="line"><span>                    ),</span></span>
<span class="line"><span>                    @Parameter(</span></span>
<span class="line"><span>name=&quot;module&quot;,</span></span>
<span class="line"><span>description=&quot;模块代码&quot;,</span></span>
<span class="line"><span>schema= @Schema(type=&quot;string&quot;, implementation= String.class)</span></span>
<span class="line"><span>                    ),</span></span>
<span class="line"><span>                    @Parameter(</span></span>
<span class="line"><span>name=&quot;ip&quot;,</span></span>
<span class="line"><span>description=&quot;ip地址&quot;,</span></span>
<span class="line"><span>schema= @Schema(type=&quot;string&quot;, implementation= String.class)</span></span>
<span class="line"><span>                    )</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>responses= {</span></span>
<span class="line"><span>                    @ApiResponse(</span></span>
<span class="line"><span>description=&quot;机构信息&quot;,</span></span>
<span class="line"><span>content= {@Content(array= @ArraySchema(schema= @Schema(type=&quot;BranchReqVO&quot;, implementation= BranchReqVO.class)))}</span></span>
<span class="line"><span>                    )</span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span>    @GetMapping(value=&quot;/getBranchReqData&quot;)</span></span>
<span class="line"><span>public Object getBranchReqData(@RequestParam(required=false) Integer num,</span></span>
<span class="line"><span>                                   @RequestParam(required=false) String module,</span></span>
<span class="line"><span>                                   @RequestParam(required=false) String ip) {</span></span>
<span class="line"><span>return JsonResult.create(homeService.getBranchReqData(num, module, ip));</span></span>
<span class="line"><span>    }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置文件</p><p><strong>yaml</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>pangu:</span></span>
<span class="line"><span>	swagger:</span></span>
<span class="line"><span>  	scan: &quot;com.kingtsoft&quot;</span></span>
<span class="line"><span>  	# 联系信息</span></span>
<span class="line"><span>		contactEmail: &quot;cool@qq.com&quot;;</span></span>
<span class="line"><span>contactName: &quot;金唐&quot;;</span></span>
<span class="line"><span>contactUrl: &quot;https://www.kingtsoft.com/&quot;;</span></span>
<span class="line"><span># 文档信息</span></span>
<span class="line"><span>infoTitle: &quot;Swagger接口文档 DOC&quot;;</span></span>
<span class="line"><span>infoDescription: &quot;更多请咨询服务开发者Jason&quot;;</span></span>
<span class="line"><span>infoVersion: &quot;v1.0&quot;;</span></span>
<span class="line"><span># 许可信息</span></span>
<span class="line"><span>licenseName: &quot;MIT&quot;;</span></span>
<span class="line"><span>licenseUrl: &quot;https://opensource.org/licenses/MIT&quot;;</span></span>
<span class="line"><span># 拓展信息</span></span>
<span class="line"><span>extDocDescription: &quot;外部文档&quot;;</span></span>
<span class="line"><span>extDocUrl: &quot;https://www.google.com&quot;;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><h4 id="技术原理" tabindex="-1"><a class="header-anchor" href="#技术原理"><span>技术原理</span></a></h4></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    初始化默认配置，并开放部分属性自定义配置。并将扫描配置化。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.spring.swagger;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Title: &lt;br&gt;</span></span>
<span class="line"><span> * Description: &lt;br&gt;</span></span>
<span class="line"><span> * Company: KingTang &lt;br&gt;</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * @author 金炀</span></span>
<span class="line"><span> * @version 1.0</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@Import(SwaggerInterceptResponse.class)</span></span>
<span class="line"><span>@EnableConfigurationProperties(PgSwaggerProperties.class)</span></span>
<span class="line"><span>@Configuration</span></span>
<span class="line"><span>public class  Swagger3AutoConfiguration {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>public OpenAPI springShopOpenApi(SpringDocConfigProperties springDocConfigProperties,</span></span>
<span class="line"><span>                                     PgSwaggerProperties pgSwaggerProperties) {</span></span>
<span class="line"><span>if (StringUtils.hasText(pgSwaggerProperties.getScan())) {</span></span>
<span class="line"><span>if (springDocConfigProperties.getPackagesToScan() ==null) {</span></span>
<span class="line"><span>                springDocConfigProperties.setPackagesToScan(List.of(pgSwaggerProperties.getScan()));</span></span>
<span class="line"><span>            } else {</span></span>
<span class="line"><span>                springDocConfigProperties.getPackagesToScan().add(pgSwaggerProperties.getScan());</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>returnnewOpenAPI()</span></span>
<span class="line"><span>                .info(info(pgSwaggerProperties))</span></span>
<span class="line"><span>// 添加对JWT对token的支持(本步骤可选) 在添加OpenApiConfig类上添加Components信息：然后在OpenApi中注册Components:</span></span>
<span class="line"><span>                .components(components())</span></span>
<span class="line"><span>                .externalDocs(externalDocumentation(pgSwaggerProperties));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private License license() {</span></span>
<span class="line"><span>returnnewLicense()</span></span>
<span class="line"><span>                .name(&quot;MIT&quot;)</span></span>
<span class="line"><span>                .url(&quot;https://opensource.org/licenses/MIT&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private Info info(PgSwaggerProperties pgSwaggerProperties) {</span></span>
<span class="line"><span>        Contact contact =newContact();</span></span>
<span class="line"><span>        contact.setEmail(pgSwaggerProperties.getContactEmail());</span></span>
<span class="line"><span>        contact.setName(pgSwaggerProperties.getContactName());</span></span>
<span class="line"><span>        contact.setUrl(pgSwaggerProperties.getContactUrl());</span></span>
<span class="line"><span>returnnewInfo()</span></span>
<span class="line"><span>                .title(pgSwaggerProperties.getInfoTitle())</span></span>
<span class="line"><span>                .description(pgSwaggerProperties.getInfoDescription())</span></span>
<span class="line"><span>                .contact(contact)</span></span>
<span class="line"><span>                .version(pgSwaggerProperties.getInfoVersion())</span></span>
<span class="line"><span>                .license(license());</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private ExternalDocumentation externalDocumentation(PgSwaggerProperties pgSwaggerProperties) {</span></span>
<span class="line"><span>returnnewExternalDocumentation()</span></span>
<span class="line"><span>                .description(pgSwaggerProperties.getExtDocDescription())</span></span>
<span class="line"><span>                .url(pgSwaggerProperties.getExtDocUrl());</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private Components components() {</span></span>
<span class="line"><span>returnnewComponents()</span></span>
<span class="line"><span>                .addSecuritySchemes(SwaggerConst.SECURITY_KEY,</span></span>
<span class="line"><span>newSecurityScheme()</span></span>
<span class="line"><span>                                .type(SecurityScheme.Type.HTTP)</span></span>
<span class="line"><span>                                .scheme(&quot;bearer&quot;)</span></span>
<span class="line"><span>                                .in(SecurityScheme.In.HEADER)</span></span>
<span class="line"><span>                                .name(&quot;Authorization&quot;)</span></span>
<span class="line"><span>                                .bearerFormat(&quot;JWT&quot;)</span></span>
<span class="line"><span>                );</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>public OperationCustomizer addCustomGlobalHeader() {</span></span>
<span class="line"><span>return (Operation operation, HandlerMethod handlerMethod) -&gt; {</span></span>
<span class="line"><span>            SecurityRequirement requirement =newSecurityRequirement().addList(SwaggerConst.SECURITY_KEY);</span></span>
<span class="line"><span>            operation.addSecurityItem(requirement);</span></span>
<span class="line"><span>return operation;</span></span>
<span class="line"><span>        };</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    SwaggerInterceptResponse，添加了自定义转换器。在不同编码环境中可能会使swagger</span></span>
<span class="line"><span>数据获取产生变动</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.spring.swagger;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Title: &lt;br&gt;</span></span>
<span class="line"><span> * Description: &lt;br&gt;</span></span>
<span class="line"><span> * Company: KingTang &lt;br&gt;</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * @author 金炀</span></span>
<span class="line"><span> * @version 1.0</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@ConditionalOnProperty(value=&quot;pangu.swagger.api-convert&quot;, havingValue=&quot;true&quot;)</span></span>
<span class="line"><span>@ControllerAdvice(basePackages=&quot;org.springdoc.webmvc.api&quot;)</span></span>
<span class="line"><span>public class  SwaggerInterceptResponseimplementsResponseBodyAdvice&lt;Object&gt; {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>publicboolean  supports(@NonNull MethodParameter returnType,</span></span>
<span class="line"><span>                            @NonNull Class&lt;?extends HttpMessageConverter&lt;?&gt;&gt; converterType) {</span></span>
<span class="line"><span>returntrue;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>public Object beforeBodyWrite(Object body,</span></span>
<span class="line"><span>                                  MethodParameter returnType,</span></span>
<span class="line"><span>                                  @NonNull MediaType selectedContentType,</span></span>
<span class="line"><span>                                  @NonNull Class&lt;?extends HttpMessageConverter&lt;?&gt;&gt; selectedConverterType,</span></span>
<span class="line"><span>                                  @NonNull ServerHttpRequest request,</span></span>
<span class="line"><span>                                  @NonNull ServerHttpResponse response) {</span></span>
<span class="line"><span>if (Objects.requireNonNull(returnType.getMethod()).getName().contains(&quot;openapiJson&quot;) &amp;&amp;</span></span>
<span class="line"><span>                selectedContentType.equals(MediaType.APPLICATION_JSON)) {</span></span>
<span class="line"><span>if (body instanceofbyte[]) {</span></span>
<span class="line"><span>return JsonUtil.jsonToMap(newString((byte[]) body, StandardCharsets.UTF_8));</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>if (body instanceof String) {</span></span>
<span class="line"><span>return JsonUtil.jsonToMap(body.toString());</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>return body;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22)]))}const t=n(l,[["render",p],["__file","Swagger.html.vue"]]),d=JSON.parse('{"path":"/%E7%9B%98%E5%8F%A4/%E7%BB%84%E4%BB%B6%E4%BB%8B%E7%BB%8D/Swagger.html","title":"Swagger模块","lang":"zh-CN","frontmatter":{"description":"Swagger模块 如何使用 引入模块 xml 案例如下 java java 配置文件 yaml 技术原理 java java","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/%E7%9B%98%E5%8F%A4/%E7%BB%84%E4%BB%B6%E4%BB%8B%E7%BB%8D/Swagger.html"}],["meta",{"property":"og:title","content":"Swagger模块"}],["meta",{"property":"og:description","content":"Swagger模块 如何使用 引入模块 xml 案例如下 java java 配置文件 yaml 技术原理 java java"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-18T07:25:41.000Z"}],["meta",{"property":"article:author","content":"Cotton Eye Joe"}],["meta",{"property":"article:modified_time","content":"2024-11-18T07:25:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Swagger模块\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-18T07:25:41.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cotton Eye Joe\\",\\"url\\":\\"https://github.com/ToDreamr\\"}]}"]]},"headers":[],"git":{"createdTime":1731914741000,"updatedTime":1731914741000,"contributors":[{"name":"九歌天上有","email":"aruixrain@gmail.com","commits":1}]},"readingTime":{"minutes":2.4,"words":719},"filePathRelative":"盘古/组件介绍/Swagger.md","localizedDate":"2024年11月18日","excerpt":"","autoDesc":true}');export{t as comp,d as data};
