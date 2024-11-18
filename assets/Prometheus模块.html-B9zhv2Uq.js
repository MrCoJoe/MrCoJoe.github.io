import{_ as n,o as a,c as e,d as i}from"./app-TmqSDitQ.js";const l={};function p(r,s){return a(),e("div",null,s[0]||(s[0]=[i(`<h1 id="prometheus模块" tabindex="-1"><a class="header-anchor" href="#prometheus模块"><span>Prometheus模块</span></a></h1><blockquote><h4 id="如何使用" tabindex="-1"><a class="header-anchor" href="#如何使用"><span>如何使用</span></a></h4></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>业务模块引入</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>xml</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>  &lt;groupId&gt;com.kingtsoft.pangu&lt;/groupId&gt;</span></span>
<span class="line"><span>  &lt;artifactId&gt;pangu-data-prometheus&lt;/artifactId&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>配置文件</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>yaml</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>pangu:</span></span>
<span class="line"><span>prometheus:</span></span>
<span class="line"><span>url: &#39;http://10.1.50.65:9090&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    注入PrometheusClient，根据需求执行对应的内容即可, 入参都为统一的uri，</span></span>
<span class="line"><span>因为prometheus查询的构造，数据都在地址拼接，所有有统一的构造语句，又为了uri</span></span>
<span class="line"><span>配置的灵活性，所有都在外部配置。具体方法与prometheus语法的使用一致。篇幅缘故，</span></span>
<span class="line"><span>这里不作一一介绍。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>public class  ServerService {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final   PrometheusClient prometheusClient;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicServerService(PrometheusClient prometheusClient,</span></span>
<span class="line"><span>                         PrometheusProperties prometheusProperties) {</span></span>
<span class="line"><span>this.targetServer = prometheusProperties.getUrl();</span></span>
<span class="line"><span>this.prometheusClient = prometheusClient;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public List&lt;MatrixData&gt; getPrometheusMatrixData(String query, long startTime, long endTime, long stepTime) {</span></span>
<span class="line"><span>        RangeQueryBuilder rangeQueryBuilder =  QueryBuilderType.RangeQuery.newInstance(targetServer);</span></span>
<span class="line"><span>        URI targetUri = rangeQueryBuilder.withQuery(query)</span></span>
<span class="line"><span>                .withStartEpochTime(startTime)</span></span>
<span class="line"><span>                .withEndEpochTime(endTime)</span></span>
<span class="line"><span>                .withStepTime(stepTime +&quot;s&quot;)</span></span>
<span class="line"><span>                .build();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>return prometheusClient.queryRange(targetUri);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><h4 id="技术原理" tabindex="-1"><a class="header-anchor" href="#技术原理"><span>技术原理</span></a></h4></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    首先prometheus的数据是通过http请求的，所以定义了统一的FeignClient，如下。</span></span>
<span class="line"><span>但是因为pro的查询，不同的查询返回结构体差别会比较大，每个结构体都会定位ConvertUtil</span></span>
<span class="line"><span>一个解析方法（解析过程是一个开源工具项目），根据这些解析方法，构造了不同的feign结果</span></span>
<span class="line"><span>解析器。然后配置到了下面的feign客户端。这样调用的代码块就可以无感知获取到解析后的数据。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.data.prometheus.feign;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Title: &lt;br&gt;</span></span>
<span class="line"><span> * Description: &lt;br&gt;</span></span>
<span class="line"><span> * Company: KingTang &lt;br&gt;</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * @author 金炀</span></span>
<span class="line"><span> * @version 1.0</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@PgFeignClient(clientCode= HttpConst.CLIENT_CODE_PROMETHEUS, url=&quot;\${pangu.prometheus.url}&quot;)</span></span>
<span class="line"><span>public interface  PrometheusClient {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * /api/v1/query</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @paramuri 请求数据</span></span>
<span class="line"><span>     * @return 度量数据</span></span>
<span class="line"><span>     * @author 金炀</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    @FeignResultClient(value= PrometheusQueryAllResultChecker.class, postfix=&quot;/api/v1/query&quot;)</span></span>
<span class="line"><span>    @RequestMapping(value=&quot;&quot;, method= RequestMethod.GET)</span></span>
<span class="line"><span>    List&lt;?&gt; query(URI uri);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * /api/v1/query_range</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @paramuri 请求数据</span></span>
<span class="line"><span>     * @return 度量数据</span></span>
<span class="line"><span>     * @author 金炀</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    @FeignResultClient(value= PrometheusQueryResultChecker.class, postfix=&quot;/api/v1/query_range&quot;)</span></span>
<span class="line"><span>    @RequestMapping(&quot;&quot;)</span></span>
<span class="line"><span>    List&lt;MatrixData&gt; queryRange(URI uri);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * /api/v1/series</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @paramuri 请求数据</span></span>
<span class="line"><span>     * @return 度量数据</span></span>
<span class="line"><span>     * @author 金炀</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    @FeignResultClient(value= PrometheusSeriesResultChecker.class, postfix=&quot;/api/v1/series&quot;)</span></span>
<span class="line"><span>    @RequestMapping(&quot;&quot;)</span></span>
<span class="line"><span>    List&lt;SeriesResultItem&gt; series(URI uri);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * /api/v1/label/{labelName}/values</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @paramuri 请求数据</span></span>
<span class="line"><span>     * @return 度量数据</span></span>
<span class="line"><span>     * @author 金炀</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    @FeignResultClient(value= PrometheusLabelResultChecker.class, postfix=&quot;/api/v1/label&quot;)</span></span>
<span class="line"><span>    @RequestMapping(&quot;&quot;)</span></span>
<span class="line"><span>    List&lt;String&gt; labels(URI uri);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * /api/v1/targets</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @paramuri 请求数据</span></span>
<span class="line"><span>     * @return 度量数据</span></span>
<span class="line"><span>     * @author 金炀</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    @FeignResultClient(value= PrometheusTargetResultChecker.class, postfix=&quot;/api/v1/targets&quot;)</span></span>
<span class="line"><span>    @RequestMapping(&quot;&quot;)</span></span>
<span class="line"><span>    List&lt;TargetResultItem&gt; targets(URI uri);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * /api/v1/rules</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @paramuri 请求数据</span></span>
<span class="line"><span>     * @return 度量数据</span></span>
<span class="line"><span>     * @author 金炀</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    @FeignResultClient(value= PrometheusQueryResultChecker.class, postfix=&quot;/api/v1/rules&quot;)</span></span>
<span class="line"><span>    @RequestMapping(&quot;&quot;)</span></span>
<span class="line"><span>    String rules(URI uri);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * /api/v1/alerts</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @paramuri 请求数据</span></span>
<span class="line"><span>     * @return 度量数据</span></span>
<span class="line"><span>     * @author 金炀</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    @FeignResultClient(value= PrometheusQueryResultChecker.class, postfix=&quot;/api/v1/alerts&quot;)</span></span>
<span class="line"><span>    @RequestMapping(&quot;&quot;)</span></span>
<span class="line"><span>    String alerts(URI uri);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * /api/v1/targets/metadata</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @paramuri 请求数据</span></span>
<span class="line"><span>     * @return 度量数据</span></span>
<span class="line"><span>     * @author 金炀</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    @FeignResultClient(value= PrometheusTargetResultChecker.class, postfix=&quot;/api/v1/targets/metadata&quot;)</span></span>
<span class="line"><span>    @RequestMapping(&quot;&quot;)</span></span>
<span class="line"><span>    List&lt;TargetResultItem&gt; metadata(URI uri);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * /api/v1/alertmanagers</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @paramuri 请求数据</span></span>
<span class="line"><span>     * @return 度量数据</span></span>
<span class="line"><span>     * @author 金炀</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    @FeignResultClient(value= PrometheusAlertManagerResultChecker.class, postfix=&quot;/api/v1/alertmanagers&quot;)</span></span>
<span class="line"><span>    @RequestMapping(&quot;&quot;)</span></span>
<span class="line"><span>    List&lt;AlertManagerResultItem&gt; alertmanagers(URI uri);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * /api/v1/status/config</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @paramuri 请求数据</span></span>
<span class="line"><span>     * @return 度量数据</span></span>
<span class="line"><span>     * @author 金炀</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    @FeignResultClient(value= PrometheusQueryResultChecker.class, postfix=&quot;/api/v1/status/config&quot;)</span></span>
<span class="line"><span>    @RequestMapping(&quot;&quot;)</span></span>
<span class="line"><span>    String statusConfig(URI uri);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * /api/v1/status/flags</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @paramuri 请求数据</span></span>
<span class="line"><span>     * @return 度量数据</span></span>
<span class="line"><span>     * @author 金炀</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    @FeignResultClient(value= PrometheusQueryResultChecker.class, postfix=&quot;/api/v1/status/flags&quot;)</span></span>
<span class="line"><span>    @RequestMapping(&quot;&quot;)</span></span>
<span class="line"><span>    String statusFlags(URI uri);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * /api/v1/status/runtimeinfo</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @paramuri 请求数据</span></span>
<span class="line"><span>     * @return 度量数据</span></span>
<span class="line"><span>     * @author 金炀</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    @FeignResultClient(value= PrometheusQueryResultChecker.class, postfix=&quot;/api/v1/status/runtimeinfo&quot;)</span></span>
<span class="line"><span>    @RequestMapping(&quot;&quot;)</span></span>
<span class="line"><span>    String statusRuntimeinfo(URI uri);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>如下为其中一个解析器</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.data.prometheus.feign.converter;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import com.kingtosft.pangu.base.inner.common.enums.PanguResCodeEnum;</span></span>
<span class="line"><span>import com.kingtsoft.pangu.base.exception.TipException;</span></span>
<span class="line"><span>import com.kingtsoft.pangu.data.prometheus.client.converter.ConvertUtil;</span></span>
<span class="line"><span>import com.kingtsoft.pangu.data.prometheus.client.converter.label.DefaultLabelResult;</span></span>
<span class="line"><span>import com.kingtsoft.pangu.data.prometheus.utils.PrometheusUtil;</span></span>
<span class="line"><span>import com.kingtsoft.pangu.springcloud.feign.FeignResponseChecker;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span>* Title: &lt;br&gt;</span></span>
<span class="line"><span>* Description: &lt;br&gt;</span></span>
<span class="line"><span>* Company: KingTang &lt;br&gt;</span></span>
<span class="line"><span>*</span></span>
<span class="line"><span>* @author 金炀</span></span>
<span class="line"><span>* @version 1.0</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span>public class  PrometheusLabelResultCheckerimplementsFeignResponseChecker {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>public Object cover(Object param) {</span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>            PrometheusUtil.checkResult(param.toString());</span></span>
<span class="line"><span>            DefaultLabelResult result = ConvertUtil.convertLabelResultString(param.toString());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>return result.getResult();</span></span>
<span class="line"><span>        } catch (Exception e) {</span></span>
<span class="line"><span>            e.printStackTrace();</span></span>
<span class="line"><span>thrownewTipException(PanguResCodeEnum.FEIGN_COVER_FAIL);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>feign客户端方法注释上写明了接口对应的prometheus api，例如/api/v1/query_range</span></span>
<span class="line"><span>查询的用途可参考文章</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://blog.51cto.com/u_15474913/5411753" target="_blank" rel="noopener noreferrer">https://blog.51cto.com/u_15474913/5411753</a></p>`,20)]))}const d=n(l,[["render",p],["__file","Prometheus模块.html.vue"]]),c=JSON.parse('{"path":"/%E7%9B%98%E5%8F%A4/%E6%95%B0%E6%8D%AE%E6%BA%90/Prometheus%E6%A8%A1%E5%9D%97.html","title":"Prometheus模块","lang":"zh-CN","frontmatter":{"description":"Prometheus模块 如何使用 xml yaml java 技术原理 java java https://blog.51cto.com/u_15474913/5411753","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/%E7%9B%98%E5%8F%A4/%E6%95%B0%E6%8D%AE%E6%BA%90/Prometheus%E6%A8%A1%E5%9D%97.html"}],["meta",{"property":"og:title","content":"Prometheus模块"}],["meta",{"property":"og:description","content":"Prometheus模块 如何使用 xml yaml java 技术原理 java java https://blog.51cto.com/u_15474913/5411753"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-18T07:25:41.000Z"}],["meta",{"property":"article:author","content":"Cotton Eye Joe"}],["meta",{"property":"article:modified_time","content":"2024-11-18T07:25:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Prometheus模块\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-18T07:25:41.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cotton Eye Joe\\",\\"url\\":\\"https://github.com/ToDreamr\\"}]}"]]},"headers":[],"git":{"createdTime":1731914741000,"updatedTime":1731914741000,"contributors":[{"name":"九歌天上有","email":"aruixrain@gmail.com","commits":1}]},"readingTime":{"minutes":2.53,"words":760},"filePathRelative":"盘古/数据源/Prometheus模块.md","localizedDate":"2024年11月18日","excerpt":"","autoDesc":true}');export{d as comp,c as data};
