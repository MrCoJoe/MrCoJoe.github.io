import{_ as s,o as a,c as e,d as i}from"./app-Bym8v7z8.js";const l={};function p(c,n){return a(),e("div",null,n[0]||(n[0]=[i(`<h1 id="nacos集成" tabindex="-1"><a class="header-anchor" href="#nacos集成"><span>nacos集成</span></a></h1><blockquote><h4 id="如何使用" tabindex="-1"><a class="header-anchor" href="#如何使用"><span>如何使用</span></a></h4></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>引入如下模块</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>xml</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>  &lt;groupId&gt;com.kingtsoft.pangu&lt;/groupId&gt;</span></span>
<span class="line"><span>  &lt;artifactId&gt;pangu-springcloud-nacos&lt;/artifactId&gt;</span></span>
<span class="line"><span>  &lt;version&gt;\${pangu.version}&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>配置文件新增bootstrap.yml</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>yaml</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>spring:</span></span>
<span class="line"><span>application:</span></span>
<span class="line"><span>name: pangu-frame-simple</span></span>
<span class="line"><span>cloud:</span></span>
<span class="line"><span>loadbalancer:</span></span>
<span class="line"><span>enabled: true</span></span>
<span class="line"><span># nacos注册、配置中心</span></span>
<span class="line"><span>nacos:</span></span>
<span class="line"><span>server-addr: 10.1.50.63:8848</span></span>
<span class="line"><span>discovery:</span></span>
<span class="line"><span>service: \${spring.application.name}</span></span>
<span class="line"><span>username: nacos</span></span>
<span class="line"><span>password: nacos</span></span>
<span class="line"><span>namespace: 2cfd9ec5-5349-4d0a-8680-7cbd25a644af</span></span>
<span class="line"><span>group: PANGU</span></span>
<span class="line"><span>config:</span></span>
<span class="line"><span>username: \${spring.cloud.nacos.discovery.username}</span></span>
<span class="line"><span>password: \${spring.cloud.nacos.discovery.password}</span></span>
<span class="line"><span>namespace: \${spring.cloud.nacos.discovery.namespace}</span></span>
<span class="line"><span>file-extension: yml</span></span>
<span class="line"><span>extension-configs:</span></span>
<span class="line"><span>          - data-id: application.yml</span></span>
<span class="line"><span>group: PANGU-FRAME-SIMPLE</span></span>
<span class="line"><span>refresh: true</span></span>
<span class="line"><span>enabled: true</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>nacos根据如下配置</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="http://pangu.kingtsoft.com/pangu-facade/assets/image1.e12a4cd4.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><blockquote><h4 id="技术原理" tabindex="-1"><a class="header-anchor" href="#技术原理"><span>技术原理</span></a></h4></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    首先看NacosBootstrapApplicationListener，由于版本兼容性的问题。在新版中需要把</span></span>
<span class="line"><span>spring.cloud.bootstrap.enabled设置为true。由于使用了配置中心，所以不存在本地先将属</span></span>
<span class="line"><span>性配置为spring.cloud.bootstrap.enabled=true，这一说法。因为配置文件还没开始加载。</span></span>
<span class="line"><span>所以这这里启动监听器中先设置为true。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.springcloud.nacos;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import org.springframework.boot.context.event.ApplicationEnvironmentPreparedEvent;</span></span>
<span class="line"><span>import org.springframework.context.ApplicationListener;</span></span>
<span class="line"><span>import org.springframework.core.Ordered;</span></span>
<span class="line"><span>import org.springframework.core.env.MutablePropertySources;</span></span>
<span class="line"><span>import org.springframework.core.env.PropertiesPropertySource;</span></span>
<span class="line"><span></span></span>
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
<span class="line"><span>public class  NacosBootstrapApplicationListenerimplementsApplicationListener&lt;ApplicationEnvironmentPreparedEvent&gt;, Ordered {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>private void   onApplicationEvent(ApplicationEnvironmentPreparedEvent event) {</span></span>
<span class="line"><span>        MutablePropertySources propertySources = event.getEnvironment().getPropertySources();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        Properties pro =newProperties();</span></span>
<span class="line"><span>// 默认为false,老版本默认true</span></span>
<span class="line"><span>        pro.setProperty(&quot;spring.cloud.bootstrap.enabled&quot;, &quot;true&quot;);</span></span>
<span class="line"><span>        PropertiesPropertySource pps =newPropertiesPropertySource(&quot;classpath-nacos-pangu&quot;, pro);</span></span>
<span class="line"><span>        propertySources.addLast(pps);</span></span>
<span class="line"><span>// 错误原因在于nacos引入的nacsos-client.jar内含有默认的nacos-logback.xml/nacos-log4j2.xml，其中nacos-logback.xml中contextName属性为nacos</span></span>
<span class="line"><span>// 该属性与自定义的logback.xml不一致导致冲突 @AbstractNacosLogging.isDefaultConfigEnabled</span></span>
<span class="line"><span>        System.setProperty(&quot;nacos.logging.default.config.enabled&quot;, &quot;false&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>publicintgetOrder() {</span></span>
<span class="line"><span>return Ordered.HIGHEST_PRECEDENCE +4;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>然后看自动化配置类NacosAutoConfiguration</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.springcloud.nacos;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import com.kingtsoft.pangu.springcloud.nacos.constant.NacosConst;</span></span>
<span class="line"><span>import com.kingtsoft.pangu.springcloud.nacos.loadbalancer.PgLoadBalancerClientConfiguration;</span></span>
<span class="line"><span>import org.springframework.cloud.client.loadbalancer.LoadBalanced;</span></span>
<span class="line"><span>import org.springframework.cloud.loadbalancer.annotation.LoadBalancerClients;</span></span>
<span class="line"><span>import org.springframework.context.annotation.Bean;</span></span>
<span class="line"><span>import org.springframework.context.annotation.Configuration;</span></span>
<span class="line"><span>import org.springframework.web.client.RestTemplate;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Title: &lt;br&gt;</span></span>
<span class="line"><span> * Description: &lt;br&gt;</span></span>
<span class="line"><span> * Company: KingTang &lt;br&gt;</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * @author 金炀</span></span>
<span class="line"><span> * @version 1.0</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@LoadBalancerClients(defaultConfiguration= PgLoadBalancerClientConfiguration.class)</span></span>
<span class="line"><span>@Configuration</span></span>
<span class="line"><span>public class  NacosAutoConfiguration {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Bean(NacosConst.DEFAULTLOAD_BALANCE_TEMPLATE)</span></span>
<span class="line"><span>    @LoadBalanced</span></span>
<span class="line"><span>public RestTemplate restLoadBalanceTemplate() {</span></span>
<span class="line"><span>returnnewRestTemplate();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    这里定义了RestTemplate的负载均衡实例，在使用的原生RestTemplate时候需要注意自己引入的是哪种。</span></span>
<span class="line"><span>然后添加负载均衡客户端，通过注解LoadBalancerClients配置了客户端配置类PgLoadBalancerClientConfiguration</span></span>
<span class="line"><span>（注意里面定义的ReactorServiceInstanceLoadBalancer是懒加载模式，在第一次使用的时候才会初始化）</span></span>
<span class="line"><span>这里创建了一个PgRoundRobinLoadBalancer对象</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.springcloud.nacos.loadbalancer;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import org.springframework.cloud.client.ConditionalOnDiscoveryEnabled;</span></span>
<span class="line"><span>import org.springframework.cloud.loadbalancer.core.ReactorServiceInstanceLoadBalancer;</span></span>
<span class="line"><span>import org.springframework.cloud.loadbalancer.core.ServiceInstanceListSupplier;</span></span>
<span class="line"><span>import org.springframework.cloud.loadbalancer.support.LoadBalancerClientFactory;</span></span>
<span class="line"><span>import org.springframework.context.annotation.Bean;</span></span>
<span class="line"><span>import org.springframework.context.annotation.Configuration;</span></span>
<span class="line"><span>import org.springframework.core.env.Environment;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Title: &lt;br&gt;</span></span>
<span class="line"><span> * Description: &lt;br&gt;</span></span>
<span class="line"><span> * Company: KingTang &lt;br&gt;</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * @author 金炀</span></span>
<span class="line"><span> * @version 1.0</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@Configuration(</span></span>
<span class="line"><span>proxyBeanMethods=false</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span>@ConditionalOnDiscoveryEnabled</span></span>
<span class="line"><span>public class  PgLoadBalancerClientConfiguration {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 注入自定义的灰度策略</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @paramenvironment               资源环境对象</span></span>
<span class="line"><span>     * @paramloadBalancerClientFactory 负载均衡客户端工厂</span></span>
<span class="line"><span>     * @return 负载实例</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>public ReactorServiceInstanceLoadBalancer reactorServiceInstanceLoadBalancer(Environment environment, LoadBalancerClientFactory loadBalancerClientFactory) {</span></span>
<span class="line"><span>        String name = environment.getProperty(LoadBalancerClientFactory.PROPERTY_NAME);</span></span>
<span class="line"><span>if (name ==null) {</span></span>
<span class="line"><span>returnnull;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>returnnewPgRoundRobinLoadBalancer(loadBalancerClientFactory.getLazyProvider(name, ServiceInstanceListSupplier.class), name);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    PgRoundRobinLoadBalancer，注意其中的getInstanceResponse方法</span></span>
<span class="line"><span>String header = requestData.getHeaders().getFirst(HttpConst.Header.CU_KEY);是集群标记的header，</span></span>
<span class="line"><span>根据这个header与nacos中的注册服务的clusterName，再匹配当前应用同集群</span></span>
<span class="line"><span>(spring.cloud.nacos.discovery.clusterName配置)。这样就可以支持灰度发布下的负载均衡模式了。</span></span>
<span class="line"><span>(pangu的feign模块与此在一起的时候会进行天然衔接，可以直接支持灰度发布下的负载均衡模式)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.springcloud.nacos.loadbalancer;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import com.alibaba.cloud.nacos.NacosDiscoveryProperties;</span></span>
<span class="line"><span>import com.alibaba.nacos.api.naming.pojo.Instance;</span></span>
<span class="line"><span>import com.alibaba.nacos.api.utils.StringUtils;</span></span>
<span class="line"><span>import com.alibaba.nacos.client.naming.core.Balancer;</span></span>
<span class="line"><span>import com.kingtosft.pangu.base.inner.common.constants.HttpConst;</span></span>
<span class="line"><span>import lombok.extern.slf4j.Slf4j;</span></span>
<span class="line"><span>import org.springframework.beans.factory.ObjectProvider;</span></span>
<span class="line"><span>import org.springframework.cloud.client.ServiceInstance;</span></span>
<span class="line"><span>import org.springframework.cloud.client.loadbalancer.*;</span></span>
<span class="line"><span>import org.springframework.cloud.loadbalancer.core.NoopServiceInstanceListSupplier;</span></span>
<span class="line"><span>import org.springframework.cloud.loadbalancer.core.RoundRobinLoadBalancer;</span></span>
<span class="line"><span>import org.springframework.cloud.loadbalancer.core.SelectedInstanceCallback;</span></span>
<span class="line"><span>import org.springframework.cloud.loadbalancer.core.ServiceInstanceListSupplier;</span></span>
<span class="line"><span>import reactor.core.publisher.Mono;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import javax.annotation.Resource;</span></span>
<span class="line"><span>import java.math.BigDecimal;</span></span>
<span class="line"><span>import java.util.ArrayList;</span></span>
<span class="line"><span>import java.util.HashMap;</span></span>
<span class="line"><span>import java.util.List;</span></span>
<span class="line"><span>import java.util.Map;</span></span>
<span class="line"><span>import java.util.stream.Collectors;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>importstatic com.kingtsoft.pangu.springcloud.nacos.constant.NacosConst.Metadata.*;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Title: &lt;br&gt;</span></span>
<span class="line"><span> * Description: 自定义负载均衡实现需要实现 ReactorServiceInstanceLoadBalancer 接口 以及重写choose方法 &lt;br&gt;</span></span>
<span class="line"><span> * Company: KingTang &lt;br&gt;</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * @author 金炀</span></span>
<span class="line"><span> * @version 1.0</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@Slf4j</span></span>
<span class="line"><span>public class  PgRoundRobinLoadBalancerextendsRoundRobinLoadBalancer {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 注入当前服务的nacos的配置信息</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    @Resource</span></span>
<span class="line"><span>private NacosDiscoveryProperties nacosDiscoveryProperties;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * loadbalancer 提供的访问当前服务的名称</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>final String serviceId;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * loadbalancer 提供的访问的服务列表</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    ObjectProvider&lt;ServiceInstanceListSupplier&gt; serviceInstanceListSupplierProvider;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicPgRoundRobinLoadBalancer(ObjectProvider&lt;ServiceInstanceListSupplier&gt; serviceInstanceListSupplierProvider,</span></span>
<span class="line"><span>                                    String serviceId) {</span></span>
<span class="line"><span>super(serviceInstanceListSupplierProvider, serviceId);</span></span>
<span class="line"><span>this.serviceId = serviceId;</span></span>
<span class="line"><span>this.serviceInstanceListSupplierProvider = serviceInstanceListSupplierProvider;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 服务器调用负载均衡时调的放啊</span></span>
<span class="line"><span>     * 此处代码内容与 RandomLoadBalancer 一致</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>public Mono&lt;Response&lt;ServiceInstance&gt;&gt; choose(Request request) {</span></span>
<span class="line"><span>        ServiceInstanceListSupplier supplier =this.serviceInstanceListSupplierProvider.getIfAvailable(NoopServiceInstanceListSupplier::new);</span></span>
<span class="line"><span>return supplier.get(request).next().map(</span></span>
<span class="line"><span>                (serviceInstances) -&gt;this.processInstanceResponse(supplier, serviceInstances, request));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 对负载均衡的服务进行筛选的方法</span></span>
<span class="line"><span>     * 此处代码内容与 RandomLoadBalancer 一致</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>private Response&lt;ServiceInstance&gt; processInstanceResponse(ServiceInstanceListSupplier supplier,</span></span>
<span class="line"><span>                                                              List&lt;ServiceInstance&gt; serviceInstances,</span></span>
<span class="line"><span>                                                              Request request) {</span></span>
<span class="line"><span>if (request ==null|| request.getContext() ==null) {</span></span>
<span class="line"><span>returnsuper.choose(request).block();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        DefaultRequestContext requestContext = (DefaultRequestContext) request.getContext();</span></span>
<span class="line"><span>if (!(requestContext.getClientRequest() instanceof RequestData)){</span></span>
<span class="line"><span>returnsuper.choose(request).block();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        RequestData requestData = (RequestData) requestContext.getClientRequest();</span></span>
<span class="line"><span>        Response&lt;ServiceInstance&gt; serviceInstanceResponse =this.getInstanceResponse(serviceInstances, requestData);</span></span>
<span class="line"><span>if (supplier instanceof SelectedInstanceCallback &amp;&amp; serviceInstanceResponse.hasServer()) {</span></span>
<span class="line"><span>            ((SelectedInstanceCallback) supplier).selectedServiceInstance(serviceInstanceResponse.getServer());</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>return serviceInstanceResponse;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 对负载均衡的服务进行筛选的方法</span></span>
<span class="line"><span>     * 自定义</span></span>
<span class="line"><span>     * 此处的 instances 实例列表  只会提供健康的实例  所以不需要担心如果实例无法访问的情况</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>private Response&lt;ServiceInstance&gt; getInstanceResponse(List&lt;ServiceInstance&gt; instances,</span></span>
<span class="line"><span>                                                          RequestData requestData) {</span></span>
<span class="line"><span>if (instances.isEmpty()) {</span></span>
<span class="line"><span>returnnewEmptyResponse();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        String header = requestData.getHeaders().getFirst(HttpConst.Header.CU_KEY);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 获取当前服务所在的集群名称</span></span>
<span class="line"><span>        String currentClusterName = nacosDiscoveryProperties.getClusterName();</span></span>
<span class="line"><span>// 过滤在同一集群下注册的服务 根据集群名称筛选的集合</span></span>
<span class="line"><span>        List&lt;ServiceInstance&gt; sameClusterNameInstList = instances.stream().filter(</span></span>
<span class="line"><span>                i -&gt; StringUtils.equals(i.getMetadata().get(CLUSTER), currentClusterName)</span></span>
<span class="line"><span>&amp;&amp; (StringUtils.isBlank(header) || StringUtils.equals(i.getMetadata().get(CLUSTER), header))</span></span>
<span class="line"><span>        ).collect(Collectors.toList());</span></span>
<span class="line"><span>        ServiceInstance sameClusterNameInst;</span></span>
<span class="line"><span>if (sameClusterNameInstList.isEmpty()) {</span></span>
<span class="line"><span>// 如果为空，则根据权重直接过滤所有服务列表</span></span>
<span class="line"><span>            sameClusterNameInst =getHostByRandomWeight(instances);</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>// 如果不为空，则根据权重直接过滤所在集群下的服务列表</span></span>
<span class="line"><span>            sameClusterNameInst =getHostByRandomWeight(sameClusterNameInstList);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>returnnewDefaultResponse(sameClusterNameInst);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private ServiceInstance getHostByRandomWeight(List&lt;ServiceInstance&gt; sameClusterNameInstList) {</span></span>
<span class="line"><span>        List&lt;Instance&gt; list =new ArrayList&lt;&gt;();</span></span>
<span class="line"><span>        Map&lt;String, ServiceInstance&gt; dataMap =new HashMap&lt;&gt;(16);</span></span>
<span class="line"><span>// 此处将 ServiceInstance 转化为 Instance 是为了接下来调用nacos中的权重算法，</span></span>
<span class="line"><span>// 由于入参不同，所以需要转换，此处建议打断电进行参数调试，以下是我目前为止所用到的参数，转化为map是为了最终方便获取取值到的服务对象</span></span>
<span class="line"><span>        sameClusterNameInstList.forEach(i -&gt; {</span></span>
<span class="line"><span>            Instance ins =newInstance();</span></span>
<span class="line"><span>            Map&lt;String, String&gt; metadata = i.getMetadata();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            ins.setInstanceId(metadata.get(INSTANCE_ID));</span></span>
<span class="line"><span>            ins.setWeight(newBigDecimal(metadata.get(WEIGHT)).doubleValue());</span></span>
<span class="line"><span>            ins.setClusterName(metadata.get(CLUSTER));</span></span>
<span class="line"><span>            ins.setEphemeral(boolean  .parseboolean  (metadata.get(EPHEMERAL)));</span></span>
<span class="line"><span>            ins.setHealthy(boolean  .parseboolean  (metadata.get(HEALTHY)));</span></span>
<span class="line"><span>            ins.setPort(i.getPort());</span></span>
<span class="line"><span>            ins.setIp(i.getHost());</span></span>
<span class="line"><span>            ins.setServiceName(i.getServiceId());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            ins.setMetadata(metadata);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            list.add(ins);</span></span>
<span class="line"><span>// key为服务ID，值为服务对象</span></span>
<span class="line"><span>            dataMap.put(metadata.get(INSTANCE_ID), i);</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>// 调用nacos官方提供的负载均衡权重算法</span></span>
<span class="line"><span>        Instance hostByRandomWeightCopy = ExtendBalancer.getHostByRandomWeightCopy(list);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 根据最终ID获取需要返回的实例对象</span></span>
<span class="line"><span>return dataMap.get(hostByRandomWeightCopy.getInstanceId());</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicstaticclassExtendBalancerextendsBalancer {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        /**</span></span>
<span class="line"><span>         * 根据权重选择随机选择一个</span></span>
<span class="line"><span>         */</span></span>
<span class="line"><span>publicstatic Instance getHostByRandomWeightCopy(List&lt;Instance&gt; hosts) {</span></span>
<span class="line"><span>returngetHostByRandomWeight(hosts);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23)]))}const d=s(l,[["render",p],["__file","nacos集成.html.vue"]]),t=JSON.parse('{"path":"/%E7%9B%98%E5%8F%A4/%E4%B8%AD%E9%97%B4%E4%BB%B6/nacos%E9%9B%86%E6%88%90.html","title":"nacos集成","lang":"zh-CN","frontmatter":{"description":"nacos集成 如何使用 xml yaml image.pngimage.png 技术原理 java java java java","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/%E7%9B%98%E5%8F%A4/%E4%B8%AD%E9%97%B4%E4%BB%B6/nacos%E9%9B%86%E6%88%90.html"}],["meta",{"property":"og:title","content":"nacos集成"}],["meta",{"property":"og:description","content":"nacos集成 如何使用 xml yaml image.pngimage.png 技术原理 java java java java"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"http://pangu.kingtsoft.com/pangu-facade/assets/image1.e12a4cd4.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-18T07:25:41.000Z"}],["meta",{"property":"article:author","content":"Cotton Eye Joe"}],["meta",{"property":"article:modified_time","content":"2024-11-18T07:25:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"nacos集成\\",\\"image\\":[\\"http://pangu.kingtsoft.com/pangu-facade/assets/image1.e12a4cd4.png\\"],\\"dateModified\\":\\"2024-11-18T07:25:41.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cotton Eye Joe\\",\\"url\\":\\"https://github.com/ToDreamr\\"}]}"]]},"headers":[],"git":{"createdTime":1731914741000,"updatedTime":1731914741000,"contributors":[{"name":"九歌天上有","email":"aruixrain@gmail.com","commits":1}]},"readingTime":{"minutes":4.57,"words":1371},"filePathRelative":"盘古/中间件/nacos集成.md","localizedDate":"2024年11月18日","excerpt":"","autoDesc":true}');export{d as comp,t as data};
