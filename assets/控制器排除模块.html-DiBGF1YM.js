import{_ as s,o as a,c as e,d as i}from"./app-BOLxB7eC.js";const l={};function p(t,n){return a(),e("div",null,n[0]||(n[0]=[i(`<h1 id="控制器排除模块" tabindex="-1"><a class="header-anchor" href="#控制器排除模块"><span>控制器排除模块</span></a></h1><blockquote><h4 id="如何使用" tabindex="-1"><a class="header-anchor" href="#如何使用"><span>如何使用</span></a></h4></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>非业务模块直接引入</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>    &lt;groupId&gt;com.kingtsoft.pangu&lt;/groupId&gt;</span></span>
<span class="line"><span>    &lt;artifactId&gt;pangu-spring-mapping&lt;/artifactId&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>配置文件配置(包名以逗号分隔)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>yaml</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>pangu:</span></span>
<span class="line"><span>mapping:</span></span>
<span class="line"><span># 需要排除的控制器包</span></span>
<span class="line"><span>exclusions: &#39;com.kingtsoft.pangu.**.pub2,com.kingtsoft.pangu.**.test2&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><h4 id="技术原理" tabindex="-1"><a class="header-anchor" href="#技术原理"><span>技术原理</span></a></h4></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    首先自定义了一个扫描ClassPathScanningCandidateComponentProvider，用来扫描</span></span>
<span class="line"><span>Controller与RestController注解的BeanDefinition列表。然后找到这些对应到</span></span>
<span class="line"><span>beanClassName，这样就可以定位到需要排除的类了，requestMappingHandlerMapping里面</span></span>
<span class="line"><span>注册了所有的控制器信息，它的getHandlerMethods以requestMappingInfo为key，</span></span>
<span class="line"><span>HandlerMethod为值存入。主要是这个key，最后循环，并且通过</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>requestMappingHandlerMapping.unregisterMapping(key)方法，对映射信息进行卸载。</p><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.spring.mapping;</span></span>
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
<span class="line"><span>public class  MappingRemoveConfigurationimplementsInitializingBean, ResourceLoaderAware {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final   Environment environment;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final   RequestMappingHandlerMapping requestMappingHandlerMapping;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private ResourceLoader resourceLoader;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicMappingRemoveConfiguration(RequestMappingHandlerMapping requestMappingHandlerMapping,</span></span>
<span class="line"><span>                                      Environment environment) {</span></span>
<span class="line"><span>this.requestMappingHandlerMapping = requestMappingHandlerMapping;</span></span>
<span class="line"><span>this.environment = environment;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>private void   setResourceLoader(ResourceLoader resourceLoader) {</span></span>
<span class="line"><span>this.resourceLoader = resourceLoader;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>private void   afterPropertiesSet() {</span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>            String scanPkgStr = environment.getProperty(&quot;pangu.mapping.exclusions&quot;);</span></span>
<span class="line"><span>if (!StringUtils.hasText(scanPkgStr)) {</span></span>
<span class="line"><span>return;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>String[] scanPkgArr = scanPkgStr.split(&quot;,&quot;);</span></span>
<span class="line"><span>            ClassPathScanningCandidateComponentProvider scanner =getScanner();</span></span>
<span class="line"><span>            scanner.setResourceLoader(this.resourceLoader);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            Set&lt;BeanDefinition&gt; beanDefinitions =new LinkedHashSet&lt;&gt;();</span></span>
<span class="line"><span>for (String pkg : scanPkgArr) {</span></span>
<span class="line"><span>                Set&lt;BeanDefinition&gt; beanDefinitions2 = scanner.findCandidateComponents(pkg.trim());</span></span>
<span class="line"><span>                beanDefinitions.addAll(beanDefinitions2);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (beanDefinitions.size() ==0) {</span></span>
<span class="line"><span>return;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            List&lt;String&gt; unregisterClassArr = beanDefinitions.stream().map(</span></span>
<span class="line"><span>                    BeanDefinition::getBeanClassName</span></span>
<span class="line"><span>            ).collect(Collectors.toCollection(ArrayList::new));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            requestMappingHandlerMapping.getHandlerMethods().forEach(</span></span>
<span class="line"><span>                    (k, v) -&gt; {</span></span>
<span class="line"><span>if (unregisterClassArr.contains(v.getBeanType().getName())) {</span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>                                requestMappingHandlerMapping.unregisterMapping(k);</span></span>
<span class="line"><span>                            } catch (Exception ignore) {</span></span>
<span class="line"><span>                            }</span></span>
<span class="line"><span>                        }</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>            );</span></span>
<span class="line"><span>        } catch (Exception e) {</span></span>
<span class="line"><span>            log.error(&quot;控制器排除操作失败&quot;, e);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>protected ClassPathScanningCandidateComponentProvider getScanner() {</span></span>
<span class="line"><span>returnnewClassPathScanningCandidateComponentProvider(false, this.environment) {</span></span>
<span class="line"><span>            @Override</span></span>
<span class="line"><span>protectedboolean  isCandidateComponent(MetadataReader metadataReader) {</span></span>
<span class="line"><span>                Optional&lt;String&gt; target = metadataReader.getAnnotationMetadata().getAnnotationTypes().stream().filter(</span></span>
<span class="line"><span>                        sn -&gt; sn.equals(Controller.class.getName()) || sn.equals(RestController.class.getName())</span></span>
<span class="line"><span>                ).findAny();</span></span>
<span class="line"><span>return target.isPresent();</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            @Override</span></span>
<span class="line"><span>protectedboolean  isCandidateComponent(AnnotatedBeanDefinition beanDefinition) {</span></span>
<span class="line"><span>return!beanDefinition.getMetadata().isInterface() &amp;&amp;!beanDefinition.getMetadata().isAnnotation();</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        };</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12)]))}const d=s(l,[["render",p],["__file","控制器排除模块.html.vue"]]),c=JSON.parse('{"path":"/%E7%9B%98%E5%8F%A4/%E7%BB%84%E4%BB%B6%E4%BB%8B%E7%BB%8D/%E6%8E%A7%E5%88%B6%E5%99%A8%E6%8E%92%E9%99%A4%E6%A8%A1%E5%9D%97.html","title":"控制器排除模块","lang":"zh-CN","frontmatter":{"description":"控制器排除模块 如何使用 yaml 技术原理 requestMappingHandlerMapping.unregisterMapping(key)方法，对映射信息进行卸载。 java","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/%E7%9B%98%E5%8F%A4/%E7%BB%84%E4%BB%B6%E4%BB%8B%E7%BB%8D/%E6%8E%A7%E5%88%B6%E5%99%A8%E6%8E%92%E9%99%A4%E6%A8%A1%E5%9D%97.html"}],["meta",{"property":"og:title","content":"控制器排除模块"}],["meta",{"property":"og:description","content":"控制器排除模块 如何使用 yaml 技术原理 requestMappingHandlerMapping.unregisterMapping(key)方法，对映射信息进行卸载。 java"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-18T07:25:41.000Z"}],["meta",{"property":"article:author","content":"Cotton Eye Joe"}],["meta",{"property":"article:modified_time","content":"2024-11-18T07:25:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"控制器排除模块\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-18T07:25:41.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cotton Eye Joe\\",\\"url\\":\\"https://github.com/ToDreamr\\"}]}"]]},"headers":[],"git":{"createdTime":1731914741000,"updatedTime":1731914741000,"contributors":[{"name":"九歌天上有","email":"aruixrain@gmail.com","commits":1}]},"readingTime":{"minutes":1.11,"words":333},"filePathRelative":"盘古/组件介绍/控制器排除模块.md","localizedDate":"2024年11月18日","excerpt":"","autoDesc":true}');export{d as comp,c as data};
