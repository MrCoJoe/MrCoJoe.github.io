import{_ as n,o as a,c as i,d as e}from"./app-BSUomKXw.js";const l={};function p(r,s){return a(),i("div",null,s[0]||(s[0]=[e(`<h1 id="脱敏-持久层加解密" tabindex="-1"><a class="header-anchor" href="#脱敏-持久层加解密"><span>脱敏&amp;持久层加解密</span></a></h1><blockquote><h4 id="如何使用" tabindex="-1"><a class="header-anchor" href="#如何使用"><span>如何使用</span></a></h4></blockquote><p><strong>脱敏</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>引入如下模块</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>xml</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>    &lt;groupId&gt;com.kingtsoft.pangu&lt;/groupId&gt;</span></span>
<span class="line"><span>    &lt;artifactId&gt;pangu-data-security&lt;/artifactId&gt;</span></span>
<span class="line"><span>    &lt;version&gt;\${pangu.version}&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    实体类进行如下配置，在name字段上添加@PgMasking(MaskingTypeEnum.USER_NAME)注解，</span></span>
<span class="line"><span>其中MaskingTypeEnum.USER_NAME为内置的脱敏规则。在控制器中，使用如下实体类的数据在发送</span></span>
<span class="line"><span>给前端之前就会脱敏。（目前规则为内置统一，后续可能会开放自定义设置）</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * Title: &lt;br&gt;</span></span>
<span class="line"><span> * Description: &lt;br&gt;</span></span>
<span class="line"><span> * Company: KingTang &lt;br&gt;</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * @author 金炀</span></span>
<span class="line"><span> * @version 1.0</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@Data</span></span>
<span class="line"><span>public class  OisRegSchedulePoolimplementsSerializable {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>privatestaticfinallong  serialVersionUID =1L;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @TableId</span></span>
<span class="line"><span>private long  poolSn;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private long  scheduleSn;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @PgMasking(MaskingTypeEnum.ID_CARD)</span></span>
<span class="line"><span>private String poolCode;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private Integer state;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @PgMasking(MaskingTypeEnum.USER_NAME)</span></span>
<span class="line"><span>private String name;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private List&lt;OisRegSchedule&gt; regSchedulePools;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>配置文件配置如下</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>yaml</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>pangu:</span></span>
<span class="line"><span>web:</span></span>
<span class="line"><span>masking: true</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>持久层加解密</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>目前持久层加解密是依托于持久层框架的，pangu-data-mybatisplus已经支持。引入如下模块</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>xml</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>    &lt;groupId&gt;com.kingtsoft.pangu&lt;/groupId&gt;</span></span>
<span class="line"><span>    &lt;artifactId&gt;pangu-data-mybatisplus&lt;/artifactId&gt;</span></span>
<span class="line"><span>    &lt;version&gt;\${pangu.version}&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    实体类进行如下配置，在name字段上添加@PgCrypto(CryptoTypeEnum.SM4)注解，其</span></span>
<span class="line"><span>中CryptoTypeEnum.SM4为内置的加密规则。持久层处理对象时，使用如下实体类的数据在存入</span></span>
<span class="line"><span>数据库之前就会加密。（目前规则为内置统一，后续可能会开放自定义设置）</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * Title: &lt;br&gt;</span></span>
<span class="line"><span> * Description: &lt;br&gt;</span></span>
<span class="line"><span> * Company: KingTang &lt;br&gt;</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * @author 金炀</span></span>
<span class="line"><span> * @version 1.0</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@Data</span></span>
<span class="line"><span>public class  OisRegSchedulePoolimplementsSerializable {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>privatestaticfinallong  serialVersionUID =1L;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @TableId</span></span>
<span class="line"><span>private long  poolSn;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private long  scheduleSn;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private String poolCode;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private Integer state;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @PgCrypto(CryptoTypeEnum.SM4)</span></span>
<span class="line"><span>private String name;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private List&lt;OisRegSchedule&gt; regSchedulePools;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>配置文件开启加解密</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>yaml</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>pangu:</span></span>
<span class="line"><span>mybatis-plus:</span></span>
<span class="line"><span>crypto: true</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><h4 id="技术原理" tabindex="-1"><a class="header-anchor" href="#技术原理"><span>技术原理</span></a></h4></blockquote><p><strong>脱敏</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    如下所示，添加了一个针对web注解的切面。并通过jackson的序列化及反序列化转换，</span></span>
<span class="line"><span>对对象的属性进行转换。重点看SerializerFactory encryptFactory = OBJECT_MAPPER.getSerializerFactory()</span></span>
<span class="line"><span>.withSerializerModifier(new MaskingBeanSerializerModifier());这段，</span></span>
<span class="line"><span>这里给序列化工厂添加了序列化修饰器，用于自定义序列化规则。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * Title: &lt;br&gt;</span></span>
<span class="line"><span> * Description: &lt;br&gt;</span></span>
<span class="line"><span> * Company: KingTang &lt;br&gt;</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * @author 金炀</span></span>
<span class="line"><span> * @version 1.0</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@Aspect</span></span>
<span class="line"><span>@ConditionalOnWebApplication</span></span>
<span class="line"><span>@ConditionalOnProperty(name=&quot;pangu.web.masking&quot;, havingValue=&quot;true&quot;)</span></span>
<span class="line"><span>public class  MaskingAspect {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final  static ObjectMapper OBJECT_MAPPER =newObjectMapper();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>static {</span></span>
<span class="line"><span>        JavaTimeModule javaTimeModule =newJavaTimeModule();</span></span>
<span class="line"><span>        javaTimeModule.addSerializer(LocalDateTime.class,</span></span>
<span class="line"><span>newLocalDateTimeSerializer(DateTimeFormatter.ofPattern(ApplicationConst.TIME_FORMATTER.DATE_TIME)));</span></span>
<span class="line"><span>        javaTimeModule.addDeserializer(LocalDateTime.class,</span></span>
<span class="line"><span>newLocalDateTimeDeserializer(DateTimeFormatter.ofPattern(ApplicationConst.TIME_FORMATTER.DATE_TIME)));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        javaTimeModule.addSerializer(LocalDate.class, newLocalDateSerializer(DateTimeFormatter.ofPattern(ApplicationConst.TIME_FORMATTER.DATE)));</span></span>
<span class="line"><span>        javaTimeModule.addDeserializer(LocalDate.class, newLocalDateDeserializer(DateTimeFormatter.ofPattern(ApplicationConst.TIME_FORMATTER.DATE)));</span></span>
<span class="line"><span>        javaTimeModule.addSerializer(LocalTime.class, newLocalTimeSerializer(DateTimeFormatter.ofPattern(ApplicationConst.TIME_FORMATTER.TIME)));</span></span>
<span class="line"><span>        javaTimeModule.addDeserializer(LocalTime.class, newLocalTimeDeserializer(DateTimeFormatter.ofPattern(ApplicationConst.TIME_FORMATTER.TIME)));</span></span>
<span class="line"><span>        OBJECT_MAPPER.registerModule(javaTimeModule);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        OBJECT_MAPPER.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES,false);</span></span>
<span class="line"><span>        OBJECT_MAPPER.configure(JsonParser.Feature.ALLOW_COMMENTS, true);</span></span>
<span class="line"><span>        OBJECT_MAPPER.configure(JsonParser.Feature.ALLOW_UNQUOTED_FIELD_NAMES, true);</span></span>
<span class="line"><span>        OBJECT_MAPPER.configure(JsonParser.Feature.ALLOW_SINGLE_QUOTES, true);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        SerializerFactory encryptFactory = OBJECT_MAPPER.getSerializerFactory()</span></span>
<span class="line"><span>                .withSerializerModifier(newMaskingBeanSerializerModifier());</span></span>
<span class="line"><span>        OBJECT_MAPPER.setSerializerFactory(encryptFactory);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Pointcut(&quot;@annotation(org.springframework.web.bind.annotation.RequestMapping) || &quot;+</span></span>
<span class="line"><span>&quot;@annotation(org.springframework.web.bind.annotation.GetMapping) || &quot;+</span></span>
<span class="line"><span>&quot;@annotation(org.springframework.web.bind.annotation.PostMapping) || &quot;+</span></span>
<span class="line"><span>&quot;@annotation(org.springframework.web.bind.annotation.DeleteMapping)&quot;)</span></span>
<span class="line"><span>private void   maskingPointCut() {</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 脱敏</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @paramjoinPoint 切口入参</span></span>
<span class="line"><span>     * @return 接口执行返回数据</span></span>
<span class="line"><span>     * @author 金炀</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    @Around(&quot;maskingPointCut()&quot;)</span></span>
<span class="line"><span>public Object saveOperation(ProceedingJoinPoint joinPoint) throws Throwable {</span></span>
<span class="line"><span>        Object obj = joinPoint.proceed();</span></span>
<span class="line"><span>if (Collection.class.isAssignableFrom(obj.getClass())) {</span></span>
<span class="line"><span>return ((Collection&lt;?&gt;) obj).stream().map(</span></span>
<span class="line"><span>                    o -&gt; OBJECT_MAPPER.convertValue(o, o.getClass())</span></span>
<span class="line"><span>            ).collect(Collectors.toList());</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>return OBJECT_MAPPER.convertValue(obj,  obj.getClass());</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    再看MaskingBeanSerializerModifier，他继承了jackson的标准修饰器BeanSerializerModifier。</span></span>
<span class="line"><span>BeanPropertyWriter可以获取到属性注解。通过判断是否添加了自定义注解PgMasking进行自定义属性转换。</span></span>
<span class="line"><span>这里限定了一定要string属性，因为脱敏后的数据肯定为字符串，为保证属性一致，必须都为字符串。</span></span>
<span class="line"><span>这里通过自定义序列化器MaskingJsonSerializer进行实现。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.data.security.serializer;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import com.fasterxml.jackson.databind.BeanDescription;</span></span>
<span class="line"><span>import com.fasterxml.jackson.databind.SerializationConfig;</span></span>
<span class="line"><span>import com.fasterxml.jackson.databind.ser.BeanPropertyWriter;</span></span>
<span class="line"><span>import com.fasterxml.jackson.databind.ser.BeanSerializerModifier;</span></span>
<span class="line"><span>import com.kingtsoft.pangu.data.security.annotation.PgMasking;</span></span>
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
<span class="line"><span>public class  MaskingBeanSerializerModifierextendsBeanSerializerModifier {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>public List&lt;BeanPropertyWriter&gt; changeProperties(SerializationConfig config,</span></span>
<span class="line"><span>                                                     BeanDescription beanDesc, List&lt;BeanPropertyWriter&gt; beanProperties) {</span></span>
<span class="line"><span>for (BeanPropertyWriter writer : beanProperties) {</span></span>
<span class="line"><span>            PgMasking pgMasking = writer.getAnnotation(PgMasking.class);</span></span>
<span class="line"><span>if (pgMasking !=null&amp;&amp;isStringType(writer)) {</span></span>
<span class="line"><span>                writer.assignSerializer(newMaskingJsonSerializer(pgMasking.value()));</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>returnsuper.changeProperties(config, beanDesc, beanProperties);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 是否是string</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>privateboolean  isStringType(BeanPropertyWriter writer) {</span></span>
<span class="line"><span>        Class&lt;?&gt; clazz = writer.getType().getRawClass();</span></span>
<span class="line"><span>return CharSequence.class.isAssignableFrom(clazz) || Character.class.isAssignableFrom(clazz);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    MaskingJsonSerializer序列化器如下，通过构造器传入了属性注解信息。</span></span>
<span class="line"><span>然后序列化重写方法中使用传入的MaskingTypeEnum注解中的函数式方法进行转换。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.data.security.serializer;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import com.fasterxml.jackson.core.JsonGenerator;</span></span>
<span class="line"><span>import com.fasterxml.jackson.databind.JsonSerializer;</span></span>
<span class="line"><span>import com.fasterxml.jackson.databind.SerializerProvider;</span></span>
<span class="line"><span>import com.kingtsoft.pangu.data.security.enums.MaskingTypeEnum;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import java.io.IOException;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Title: &lt;br&gt;</span></span>
<span class="line"><span> * Description: &lt;br&gt;</span></span>
<span class="line"><span> * Company: KingTang &lt;br&gt;</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * @author 金炀</span></span>
<span class="line"><span> * @version 1.0</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public class  MaskingJsonSerializerextendsJsonSerializer&lt;Object&gt; {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final   MaskingTypeEnum strategy;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicMaskingJsonSerializer(MaskingTypeEnum value) {</span></span>
<span class="line"><span>this.strategy = value;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>private void   serialize(Object value, JsonGenerator gen, SerializerProvider serializers) throws IOException {</span></span>
<span class="line"><span>        String str;</span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>            str = strategy.getMasker().apply((String) value);</span></span>
<span class="line"><span>        } catch (Exception e) {</span></span>
<span class="line"><span>            str = (String) value;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        gen.writeString(str);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    这里看MaskingTypeEnum枚举类，它的数据属性中masker为一个函数式接口。</span></span>
<span class="line"><span>数据为字符串的正则转换。这样就可以利用枚举里的方法动态替换web层的数据进行脱敏。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.data.security.enums;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import java.util.function.Function;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Title: &lt;br&gt;</span></span>
<span class="line"><span> * Description: &lt;br&gt;</span></span>
<span class="line"><span> * Company: KingTang &lt;br&gt;</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * @author 金炀</span></span>
<span class="line"><span> * @version 1.0</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>publicenumMaskingTypeEnum {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * Username sensitive strategy.  $1 替换为正则的第一组  $2 替换为正则的第二组</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>USER_NAME(s -&gt; s.replaceAll(&quot;(\\\\S)\\\\S(\\\\S*)&quot;, &quot;$1*$2&quot;)),</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 密码全替换</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>PWD(s -&gt;&quot;******&quot;),</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * Id card sensitive type.</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>ID_CARD(s -&gt; s.replaceAll(&quot;(\\\\d{3})\\\\d{13}(\\\\w{2})&quot;, &quot;$1****$2&quot;)),</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * Phone sensitive type.</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>PHONE(s -&gt; s.replaceAll(&quot;(\\\\d{3})\\\\d{4}(\\\\d{4})&quot;, &quot;$1****$2&quot;)),</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * Address sensitive type.</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>ADDRESS(s -&gt; s.replaceAll(&quot;(\\\\S{3})\\\\S{2}(\\\\S*)\\\\S{2}&quot;, &quot;$1****$2****&quot;));</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final   Function&lt;String, String&gt; masker;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 定义构造函数，传入一个函数</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>MaskingTypeEnum(Function&lt;String, String&gt; masker) {</span></span>
<span class="line"><span>this.masker = masker;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * getter方法</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>public Function&lt;String, String&gt; getMasker() {</span></span>
<span class="line"><span>return masker;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>持久层加解密</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    如下所示，添加了一个针对mybatis进行了一个拦截器的添加。在获取及新增、更新中</span></span>
<span class="line"><span>使用PgDataCryptoUtil工具进行了数据转换。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.data.mybatisplus.crypto;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import com.kingtsoft.pangu.data.mybatisplus.MybatisPlusProperties;</span></span>
<span class="line"><span>import com.kingtsoft.pangu.data.security.utils.PgDataCryptoUtil;</span></span>
<span class="line"><span>import lombok.extern.slf4j.Slf4j;</span></span>
<span class="line"><span>import org.apache.ibatis.cache.CacheKey;</span></span>
<span class="line"><span>import org.apache.ibatis.executor.Executor;</span></span>
<span class="line"><span>import org.apache.ibatis.mapping.BoundSql;</span></span>
<span class="line"><span>import org.apache.ibatis.mapping.MappedStatement;</span></span>
<span class="line"><span>import org.apache.ibatis.mapping.SqlCommandType;</span></span>
<span class="line"><span>import org.apache.ibatis.plugin.*;</span></span>
<span class="line"><span>import org.apache.ibatis.session.ResultHandler;</span></span>
<span class="line"><span>import org.apache.ibatis.session.RowBounds;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import javax.annotation.Resource;</span></span>
<span class="line"><span>import java.util.Properties;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Title: &lt;br&gt;</span></span>
<span class="line"><span> * Description: &lt;br&gt;</span></span>
<span class="line"><span> * Company: KingTang &lt;br&gt;</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * @author 金炀</span></span>
<span class="line"><span> * @version 1.0</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@Slf4j(topic=&quot;SQL&quot;)</span></span>
<span class="line"><span>@Intercepts({</span></span>
<span class="line"><span>        @Signature(type= Executor.class, method=&quot;query&quot;,</span></span>
<span class="line"><span>args= {MappedStatement.class, Object.class, RowBounds.class, ResultHandler.class}),</span></span>
<span class="line"><span>        @Signature(type= Executor.class, method=&quot;query&quot;,</span></span>
<span class="line"><span>args= {MappedStatement.class, Object.class, RowBounds.class, ResultHandler.class, CacheKey.class, BoundSql.class}),</span></span>
<span class="line"><span>        @Signature(type= Executor.class, method=&quot;update&quot;, args= {MappedStatement.class, Object.class})</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>public class  MbCryptoInterceptimplementsInterceptor {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Resource</span></span>
<span class="line"><span>private MybatisPlusProperties mybatisPlusProperties;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>public Object intercept(Invocation invocation) throws Throwable {</span></span>
<span class="line"><span>if (!mybatisPlusProperties.isCrypto()) {</span></span>
<span class="line"><span>return invocation.proceed();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        Object target = invocation.getTarget();</span></span>
<span class="line"><span>Object[] args = invocation.getArgs();</span></span>
<span class="line"><span>if (!(target instanceof Executor)) {</span></span>
<span class="line"><span>return invocation.proceed();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        Object parameter = args[1];</span></span>
<span class="line"><span>        MappedStatement ms = (MappedStatement) args[0];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if ( ms.getSqlCommandType() == SqlCommandType.SELECT) {</span></span>
<span class="line"><span>            Object ret = invocation.proceed();</span></span>
<span class="line"><span>return PgDataCryptoUtil.doDecrypt(ret);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if ( ms.getSqlCommandType() == SqlCommandType.UPDATE</span></span>
<span class="line"><span>|| ms.getSqlCommandType() == SqlCommandType.INSERT) {</span></span>
<span class="line"><span>            args[1] = PgDataCryptoUtil.doEncrypt(parameter);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>return invocation.proceed();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>public Object plugin(Object target) {</span></span>
<span class="line"><span>if (target instanceof Executor) {</span></span>
<span class="line"><span>return Plugin.wrap(target, this);</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>return target;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>private void   setProperties(Properties properties) {</span></span>
<span class="line"><span>        Interceptor.super.setProperties(properties);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    看PgDataCryptoUtil工具。可以发现2个加密解密方法也是利用了jackson的自定义序列化及反序列化配置。</span></span>
<span class="line"><span>通过OBJECT_MAPPER_ENCRYPT = OBJECT_MAPPER.copy();</span></span>
<span class="line"><span>SerializerFactory encryptFactory = OBJECT_MAPPER_ENCRYPT.getSerializerFactory()</span></span>
<span class="line"><span>    .withSerializerModifier(new EncryptBeanSerializerModifier());</span></span>
<span class="line"><span>OBJECT_MAPPER_ENCRYPT.setSerializerFactory(encryptFactory);</span></span>
<span class="line"><span>OBJECT_MAPPER_DECRYPT = OBJECT_MAPPER.copy();</span></span>
<span class="line"><span>SerializerFactory decryptFactory = OBJECT_MAPPER_DECRYPT.getSerializerFactory()</span></span>
<span class="line"><span>    .withSerializerModifier(new DecryptBeanSerializerModifier());</span></span>
<span class="line"><span>OBJECT_MAPPER_DECRYPT.setSerializerFactory(decryptFactory);</span></span>
<span class="line"><span>上面这些代码，对序列化及反序列化进行修饰器配置。序列化配置加密修饰器，反序列化配置解密修饰器。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.data.security.utils;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import com.fasterxml.jackson.core.JsonParser;</span></span>
<span class="line"><span>import com.fasterxml.jackson.databind.DeserializationFeature;</span></span>
<span class="line"><span>import com.fasterxml.jackson.databind.ObjectMapper;</span></span>
<span class="line"><span>import com.fasterxml.jackson.databind.ser.SerializerFactory;</span></span>
<span class="line"><span>import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;</span></span>
<span class="line"><span>import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateDeserializer;</span></span>
<span class="line"><span>import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateTimeDeserializer;</span></span>
<span class="line"><span>import com.fasterxml.jackson.datatype.jsr310.deser.LocalTimeDeserializer;</span></span>
<span class="line"><span>import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateSerializer;</span></span>
<span class="line"><span>import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateTimeSerializer;</span></span>
<span class="line"><span>import com.fasterxml.jackson.datatype.jsr310.ser.LocalTimeSerializer;</span></span>
<span class="line"><span>import com.kingtsoft.pangu.base.common.ApplicationConst;</span></span>
<span class="line"><span>import com.kingtsoft.pangu.data.security.serializer.DecryptBeanSerializerModifier;</span></span>
<span class="line"><span>import com.kingtsoft.pangu.data.security.serializer.EncryptBeanSerializerModifier;</span></span>
<span class="line"><span>import lombok.SneakyThrows;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import java.time.LocalDate;</span></span>
<span class="line"><span>import java.time.LocalDateTime;</span></span>
<span class="line"><span>import java.time.LocalTime;</span></span>
<span class="line"><span>import java.time.format.DateTimeFormatter;</span></span>
<span class="line"><span>import java.util.Collection;</span></span>
<span class="line"><span>import java.util.List;</span></span>
<span class="line"><span>import java.util.stream.Collectors;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Title: &lt;br&gt;</span></span>
<span class="line"><span> * Description: &lt;br&gt;</span></span>
<span class="line"><span> * Company: KingTang &lt;br&gt;</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * @author 金炀</span></span>
<span class="line"><span> * @version 1.0</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public class  PgDataCryptoUtil {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final  static ObjectMapper OBJECT_MAPPER =newObjectMapper();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final  static ObjectMapper OBJECT_MAPPER_ENCRYPT;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final  static ObjectMapper OBJECT_MAPPER_DECRYPT;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>static {</span></span>
<span class="line"><span>        JavaTimeModule javaTimeModule =newJavaTimeModule();</span></span>
<span class="line"><span>        javaTimeModule.addSerializer(LocalDateTime.class,</span></span>
<span class="line"><span>newLocalDateTimeSerializer(DateTimeFormatter.ofPattern(ApplicationConst.TIME_FORMATTER.DATE_TIME)));</span></span>
<span class="line"><span>        javaTimeModule.addDeserializer(LocalDateTime.class,</span></span>
<span class="line"><span>newLocalDateTimeDeserializer(DateTimeFormatter.ofPattern(ApplicationConst.TIME_FORMATTER.DATE_TIME)));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        javaTimeModule.addSerializer(LocalDate.class, newLocalDateSerializer(DateTimeFormatter.ofPattern(ApplicationConst.TIME_FORMATTER.DATE)));</span></span>
<span class="line"><span>        javaTimeModule.addDeserializer(LocalDate.class, newLocalDateDeserializer(DateTimeFormatter.ofPattern(ApplicationConst.TIME_FORMATTER.DATE)));</span></span>
<span class="line"><span>        javaTimeModule.addSerializer(LocalTime.class, newLocalTimeSerializer(DateTimeFormatter.ofPattern(ApplicationConst.TIME_FORMATTER.TIME)));</span></span>
<span class="line"><span>        javaTimeModule.addDeserializer(LocalTime.class, newLocalTimeDeserializer(DateTimeFormatter.ofPattern(ApplicationConst.TIME_FORMATTER.TIME)));</span></span>
<span class="line"><span>        OBJECT_MAPPER.registerModule(javaTimeModule);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        OBJECT_MAPPER.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES,false);</span></span>
<span class="line"><span>        OBJECT_MAPPER.configure(JsonParser.Feature.ALLOW_COMMENTS, true);</span></span>
<span class="line"><span>        OBJECT_MAPPER.configure(JsonParser.Feature.ALLOW_UNQUOTED_FIELD_NAMES, true);</span></span>
<span class="line"><span>        OBJECT_MAPPER.configure(JsonParser.Feature.ALLOW_SINGLE_QUOTES, true);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        OBJECT_MAPPER_ENCRYPT = OBJECT_MAPPER.copy();</span></span>
<span class="line"><span>        SerializerFactory encryptFactory = OBJECT_MAPPER_ENCRYPT.getSerializerFactory()</span></span>
<span class="line"><span>                .withSerializerModifier(newEncryptBeanSerializerModifier());</span></span>
<span class="line"><span>        OBJECT_MAPPER_ENCRYPT.setSerializerFactory(encryptFactory);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        OBJECT_MAPPER_DECRYPT = OBJECT_MAPPER.copy();</span></span>
<span class="line"><span>        SerializerFactory decryptFactory = OBJECT_MAPPER_DECRYPT.getSerializerFactory()</span></span>
<span class="line"><span>                .withSerializerModifier(newDecryptBeanSerializerModifier());</span></span>
<span class="line"><span>        OBJECT_MAPPER_DECRYPT.setSerializerFactory(decryptFactory);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @SneakyThrows</span></span>
<span class="line"><span>    @SuppressWarnings(&quot;unchecked&quot;)</span></span>
<span class="line"><span>publicstatic &lt;T&gt; T doEncrypt(T obj) {</span></span>
<span class="line"><span>return (T) OBJECT_MAPPER_ENCRYPT.convertValue(obj,  obj.getClass());</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @SneakyThrows</span></span>
<span class="line"><span>    @SuppressWarnings(&quot;unchecked&quot;)</span></span>
<span class="line"><span>publicstatic &lt;T&gt; T doDecrypt(T obj) {</span></span>
<span class="line"><span>if (Collection.class.isAssignableFrom(obj.getClass())) {</span></span>
<span class="line"><span>            List&lt;?&gt; newObj = ((Collection&lt;?&gt;) obj).stream().map(</span></span>
<span class="line"><span>                    o -&gt; OBJECT_MAPPER_DECRYPT.convertValue(o, o.getClass())</span></span>
<span class="line"><span>            ).collect(Collectors.toList());</span></span>
<span class="line"><span>return (T) newObj;</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>return (T) OBJECT_MAPPER_DECRYPT.convertValue(obj,  obj.getClass());</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    再看EncryptBeanSerializerModifier、DecryptBeanSerializerModifier，</span></span>
<span class="line"><span>他继承了jackson的标准修饰器BeanSerializerModifier。BeanPropertyWriter可以</span></span>
<span class="line"><span>获取到属性注解。通过判断是否添加了自定义注解PgCrypto进行自定义属性转换。这里限定了</span></span>
<span class="line"><span>一定要string属性，因为加密后的数据肯定为字符串，为保证属性一致，必须都为字符串。这</span></span>
<span class="line"><span>里通过自定义序列化、反序列化器EncryptJsonSerializer、DecryptJsonSerializer</span></span>
<span class="line"><span>进行实现。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.data.security.serializer;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import com.fasterxml.jackson.databind.BeanDescription;</span></span>
<span class="line"><span>import com.fasterxml.jackson.databind.SerializationConfig;</span></span>
<span class="line"><span>import com.fasterxml.jackson.databind.ser.BeanPropertyWriter;</span></span>
<span class="line"><span>import com.fasterxml.jackson.databind.ser.BeanSerializerModifier;</span></span>
<span class="line"><span>import com.kingtsoft.pangu.data.security.annotation.PgCrypto;</span></span>
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
<span class="line"><span>public class  EncryptBeanSerializerModifierextendsBeanSerializerModifier {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>public List&lt;BeanPropertyWriter&gt; changeProperties(SerializationConfig config,</span></span>
<span class="line"><span>                                                     BeanDescription beanDesc, List&lt;BeanPropertyWriter&gt; beanProperties) {</span></span>
<span class="line"><span>for (BeanPropertyWriter writer : beanProperties) {</span></span>
<span class="line"><span>            PgCrypto pgCrypto = writer.getAnnotation(PgCrypto.class);</span></span>
<span class="line"><span>if (pgCrypto !=null&amp;&amp;isStringType(writer)) {</span></span>
<span class="line"><span>                writer.assignSerializer(newEncryptJsonSerializer(pgCrypto.value()));</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>returnsuper.changeProperties(config, beanDesc, beanProperties);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 是否是string</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>privateboolean  isStringType(BeanPropertyWriter writer) {</span></span>
<span class="line"><span>        Class&lt;?&gt; clazz = writer.getType().getRawClass();</span></span>
<span class="line"><span>return CharSequence.class.isAssignableFrom(clazz) || Character.class.isAssignableFrom(clazz);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.data.security.serializer;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import com.fasterxml.jackson.databind.BeanDescription;</span></span>
<span class="line"><span>import com.fasterxml.jackson.databind.SerializationConfig;</span></span>
<span class="line"><span>import com.fasterxml.jackson.databind.ser.BeanPropertyWriter;</span></span>
<span class="line"><span>import com.fasterxml.jackson.databind.ser.BeanSerializerModifier;</span></span>
<span class="line"><span>import com.kingtsoft.pangu.data.security.annotation.PgCrypto;</span></span>
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
<span class="line"><span>public class  DecryptBeanSerializerModifierextendsBeanSerializerModifier {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>public List&lt;BeanPropertyWriter&gt; changeProperties(SerializationConfig config,</span></span>
<span class="line"><span>                                                     BeanDescription beanDesc, List&lt;BeanPropertyWriter&gt; beanProperties) {</span></span>
<span class="line"><span>for (BeanPropertyWriter writer : beanProperties) {</span></span>
<span class="line"><span>            PgCrypto pgCrypto = writer.getAnnotation(PgCrypto.class);</span></span>
<span class="line"><span>if (pgCrypto !=null&amp;&amp;isStringType(writer)) {</span></span>
<span class="line"><span>                writer.assignSerializer(newDecryptJsonSerializer(pgCrypto.value()));</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>returnsuper.changeProperties(config, beanDesc, beanProperties);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 是否是string</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>privateboolean  isStringType(BeanPropertyWriter writer) {</span></span>
<span class="line"><span>        Class&lt;?&gt; clazz = writer.getType().getRawClass();</span></span>
<span class="line"><span>return CharSequence.class.isAssignableFrom(clazz) || Character.class.isAssignableFrom(clazz);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    EncryptBeanSerializerModifier（DecryptJsonSerializer同）序列化器如下，</span></span>
<span class="line"><span>通过构造器传入了属性注解信息。然后序列化重写方法中使用传入的CryptoTypeEnum注解中的</span></span>
<span class="line"><span>函数式方法进行转换。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.data.security.serializer;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import com.fasterxml.jackson.core.JsonGenerator;</span></span>
<span class="line"><span>import com.fasterxml.jackson.databind.JsonSerializer;</span></span>
<span class="line"><span>import com.fasterxml.jackson.databind.SerializerProvider;</span></span>
<span class="line"><span>import com.kingtsoft.pangu.data.security.enums.CryptoTypeEnum;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import java.io.IOException;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Title: &lt;br&gt;</span></span>
<span class="line"><span> * Description: &lt;br&gt;</span></span>
<span class="line"><span> * Company: KingTang &lt;br&gt;</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * @author 金炀</span></span>
<span class="line"><span> * @version 1.0</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public class  EncryptJsonSerializerextendsJsonSerializer&lt;Object&gt; {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final   CryptoTypeEnum strategy;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicEncryptJsonSerializer(CryptoTypeEnum value) {</span></span>
<span class="line"><span>this.strategy = value;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>private void   serialize(Object value, JsonGenerator gen, SerializerProvider serializers) throws IOException {</span></span>
<span class="line"><span>        String str;</span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>            str = strategy.getEncrypt().apply((String) value);</span></span>
<span class="line"><span>        } catch (Exception e) {</span></span>
<span class="line"><span>            str = (String) value;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        gen.writeString(str);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    这里看CryptoTypeEnum枚举类，它的数据属性中masker为一个函数式接口。</span></span>
<span class="line"><span>数据为字符串的正则转换。这样就可以利用枚举里的方法动态替换持久层的数据进行加解密。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.data.security.enums;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import com.kingtsoft.pangu.util.crypto.AesUtil;</span></span>
<span class="line"><span>import com.kingtsoft.pangu.util.crypto.sm.Sm4Util;</span></span>
<span class="line"><span>import org.bouncycastle.pqc.math.linearalgebra.ByteUtils;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import java.nio.charset.StandardCharsets;</span></span>
<span class="line"><span>import java.util.function.Function;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Title: &lt;br&gt;</span></span>
<span class="line"><span> * Description: &lt;br&gt;</span></span>
<span class="line"><span> * Company: KingTang &lt;br&gt;</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * @author 金炀</span></span>
<span class="line"><span> * @version 1.0</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>publicenumCryptoTypeEnum {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /** 密码 */</span></span>
<span class="line"><span>AES(AesUtil::encryption, AesUtil::decrypt),</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /** 姓名 */</span></span>
<span class="line"><span>SM4(p -&gt; Sm4Util.encryptEcb(ByteUtils.toHexString(&quot;1234567812345678&quot;.getBytes(StandardCharsets.UTF_8)), p),</span></span>
<span class="line"><span>            p -&gt; Sm4Util.decryptEcb(ByteUtils.toHexString(&quot;1234567812345678&quot;.getBytes(StandardCharsets.UTF_8)), p))</span></span>
<span class="line"><span>    ;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final   Function&lt;String, String&gt; encrypt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final   Function&lt;String, String&gt; decrypt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>CryptoTypeEnum(Function&lt;String, String&gt; encrypt, Function&lt;String, String&gt; decrypt) {</span></span>
<span class="line"><span>this.encrypt = encrypt;</span></span>
<span class="line"><span>this.decrypt = decrypt;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public Function&lt;String, String&gt; getEncrypt() {</span></span>
<span class="line"><span>return encrypt;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public Function&lt;String, String&gt; getDecrypt() {</span></span>
<span class="line"><span>return decrypt;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,54)]))}const d=n(l,[["render",p],["__file","脱敏和持久层加解密.html.vue"]]),t=JSON.parse('{"path":"/%E7%9B%98%E5%8F%A4/%E7%BB%84%E4%BB%B6%E4%BB%8B%E7%BB%8D/%E8%84%B1%E6%95%8F%E5%92%8C%E6%8C%81%E4%B9%85%E5%B1%82%E5%8A%A0%E8%A7%A3%E5%AF%86.html","title":"脱敏&持久层加解密","lang":"zh-CN","frontmatter":{"description":"脱敏&持久层加解密 如何使用 脱敏 xml java yaml 持久层加解密 xml java yaml 技术原理 脱敏 java java java java 持久层加解密 java java java java java java","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/%E7%9B%98%E5%8F%A4/%E7%BB%84%E4%BB%B6%E4%BB%8B%E7%BB%8D/%E8%84%B1%E6%95%8F%E5%92%8C%E6%8C%81%E4%B9%85%E5%B1%82%E5%8A%A0%E8%A7%A3%E5%AF%86.html"}],["meta",{"property":"og:title","content":"脱敏&持久层加解密"}],["meta",{"property":"og:description","content":"脱敏&持久层加解密 如何使用 脱敏 xml java yaml 持久层加解密 xml java yaml 技术原理 脱敏 java java java java 持久层加解密 java java java java java java"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-18T07:25:41.000Z"}],["meta",{"property":"article:author","content":"Cotton Eye Joe"}],["meta",{"property":"article:modified_time","content":"2024-11-18T07:25:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"脱敏&持久层加解密\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-18T07:25:41.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cotton Eye Joe\\",\\"url\\":\\"https://github.com/ToDreamr\\"}]}"]]},"headers":[],"git":{"createdTime":1731914741000,"updatedTime":1731914741000,"contributors":[{"name":"九歌天上有","email":"aruixrain@gmail.com","commits":1}]},"readingTime":{"minutes":7.25,"words":2175},"filePathRelative":"盘古/组件介绍/脱敏和持久层加解密.md","localizedDate":"2024年11月18日","excerpt":"","autoDesc":true}');export{d as comp,t as data};
