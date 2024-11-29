import{_ as n,o as a,c as e,d as i}from"./app-CA6hDfjR.js";const l={};function p(t,s){return a(),e("div",null,s[0]||(s[0]=[i(`<h1 id="es模块" tabindex="-1"><a class="header-anchor" href="#es模块"><span>Es模块</span></a></h1><blockquote><h4 id="如何使用" tabindex="-1"><a class="header-anchor" href="#如何使用"><span>如何使用</span></a></h4></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>业务端引入</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>xml</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>  &lt;groupId&gt;com.kingtsoft.pangu&lt;/groupId&gt;</span></span>
<span class="line"><span>  &lt;artifactId&gt;pangu-data-es&lt;/artifactId&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    使用伪代码如下, 自带会有个IndexService及DocumentService封装，用于基本的CRUD操作，</span></span>
<span class="line"><span>而又相对较多定制化的，可以直接使用elasticsearchClient进行调用。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>public class  ServService {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final   IndexService indexService;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final   ElasticsearchClient elasticsearchClient;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final   DocumentService&lt;NginxMessage&gt; documentService;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicServService(ElasticsearchClient elasticsearchClient,</span></span>
<span class="line"><span>                       IndexService indexService,</span></span>
<span class="line"><span>                      DocumentService&lt;NginxMessage&gt; documentService) {</span></span>
<span class="line"><span>this.elasticsearchClient = elasticsearchClient;</span></span>
<span class="line"><span>this.indexService = indexService;</span></span>
<span class="line"><span>this.documentService = documentService;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	/**</span></span>
<span class="line"><span>     * 设置对应日期的索引</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @paramlocalDate 日期</span></span>
<span class="line"><span>     * @paramindexList 索引列表</span></span>
<span class="line"><span>     * @author 金炀</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>private void   setTargetDateIndex(LocalDate localDate, List&lt;String&gt; indexList) {</span></span>
<span class="line"><span>        String idx = LogMessageUtil.getLogIdx(localDate, OpsLogConst.LogIndex.NGINX_LOG);</span></span>
<span class="line"><span>boolean   exists = indexService.indexExists(idx);</span></span>
<span class="line"><span>if (exists) {</span></span>
<span class="line"><span>            indexList.add(idx);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private void   doNginxLogSave(String msg, String key) {</span></span>
<span class="line"><span>for (String record : records) {</span></span>
<span class="line"><span>            NginxMessage nginxMessage =newNginxMessage();</span></span>
<span class="line"><span>if (!getNginxMessage(nginxMessage, record)) {</span></span>
<span class="line"><span>continue;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>if (idx ==null&amp;&amp; nginxMessage.getRecordTime() !=null) {</span></span>
<span class="line"><span>                idx = LogMessageUtil.getLogIdx(nginxMessage.getRecordTime().toLocalDate(), prefix);</span></span>
<span class="line"><span>// 持久层索引</span></span>
<span class="line"><span>if (!indexService.indexExists(idx)) {</span></span>
<span class="line"><span>                    indexService.createIndex(idx);</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>if (idx !=null) {</span></span>
<span class="line"><span>                IndexResponse response = documentService.saveOrUpdateDocument(idx, key +&quot;-&quot;+ (i++), nginxMessage);</span></span>
<span class="line"><span>if (log.isDebugEnabled()) {</span></span>
<span class="line"><span>                    log.debug(&quot;es保存完成：&quot;+ response.id());</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @SneakyThrows</span></span>
<span class="line"><span>public ServiceDetailVO getServiceInfo(ServiceRequest serviceRequest) {</span></span>
<span class="line"><span>        ServiceDetailVO detailVO =newServiceDetailVO();</span></span>
<span class="line"><span>        List&lt;String&gt; indexList =new ArrayList&lt;&gt;();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        LocalDateTime stdTime = LocalDateTime.now();</span></span>
<span class="line"><span>setTargetDateIndex(stdTime.toLocalDate(), indexList);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        LocalDateTime startTime = stdTime.plusSeconds(-1*24*60*60);</span></span>
<span class="line"><span>if (!startTime.toLocalDate().equals(stdTime.toLocalDate())) {</span></span>
<span class="line"><span>setTargetDateIndex(stdTime.toLocalDate(), indexList);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (indexList.size() ==0) {</span></span>
<span class="line"><span>            detailVO.setRps(BigDecimal.ZERO);</span></span>
<span class="line"><span>            detailVO.setReqAvgConst(BigDecimal.ZERO);</span></span>
<span class="line"><span>            detailVO.setReqDailyNum(BigDecimal.ZERO);</span></span>
<span class="line"><span>return detailVO;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        Query moduleTerm = QueryBuilders.term(k -&gt; k.field(&quot;module.keyword&quot;).value(serviceRequest.getModule()));</span></span>
<span class="line"><span>        Query ipTerm = QueryBuilders.term(k -&gt; k.field(&quot;upstreamAddr.keyword&quot;).value(serviceRequest.getIp()));</span></span>
<span class="line"><span>        Query ipPre = QueryBuilders.prefix(k -&gt; k.field(&quot;upstreamAddr.keyword&quot;).value(serviceRequest.getIp() +&quot;:&quot;));</span></span>
<span class="line"><span>        Query dtBuilder = PgEsUtil.getDtQuery(startTime, stdTime, &quot;recordTimelong &quot;);</span></span>
<span class="line"><span>        Query queryBuilder = QueryBuilders.bool(b -&gt; b.must(moduleTerm, dtBuilder).must(s -&gt; s.bool(v -&gt; v.should(ipTerm).should(ipPre))));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 平均响应时间</span></span>
<span class="line"><span>        SearchResponse&lt;NginxMessage&gt; searchResponse = elasticsearchClient.search(</span></span>
<span class="line"><span>                builder -&gt; builder</span></span>
<span class="line"><span>                        .index(indexList)</span></span>
<span class="line"><span>                        .query(queryBuilder)</span></span>
<span class="line"><span>                        .aggregations(&quot;avgCost&quot;, a -&gt; a.avg(ag -&gt; ag.field(&quot;requestCost&quot;))),</span></span>
<span class="line"><span>                NginxMessage.class</span></span>
<span class="line"><span>        );</span></span>
<span class="line"><span>        detailVO.setReqAvgConst(BigDecimal.valueOf(searchResponse.aggregations().get(&quot;avgCost&quot;).avg().value() *1000).setScale(SCALE, RoundingMode.HALF_UP));</span></span>
<span class="line"><span>//24 请求总数</span></span>
<span class="line"><span>        CountResponse countResponse = elasticsearchClient.count(</span></span>
<span class="line"><span>                builder -&gt; builder.index(indexList).query(queryBuilder)</span></span>
<span class="line"><span>        );</span></span>
<span class="line"><span>        detailVO.setReqDailyNum(newBigDecimal(countResponse.count()));</span></span>
<span class="line"><span>//24 qps</span></span>
<span class="line"><span>        detailVO.setRps(detailVO.getReqDailyNum().divide(newBigDecimal(24*60*60), SCALE, RoundingMode.HALF_UP));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>return detailVO;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><h4 id="技术原理" tabindex="-1"><a class="header-anchor" href="#技术原理"><span>技术原理</span></a></h4></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>主要用类EsAutoConfiguration对es进行了配置，配置了序列化规则及rest客户端。同时完成ES客户端的生成，以供业务使用。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.data.es;</span></span>
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
<span class="line"><span>@EnableConfigurationProperties(EsProperties.class)</span></span>
<span class="line"><span>@Configuration</span></span>
<span class="line"><span>public class  EsAutoConfiguration {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>public JacksonJsonpMapper jacksonJsonpMapper() {</span></span>
<span class="line"><span>        ObjectMapper objectMapper =newObjectMapper();</span></span>
<span class="line"><span>        objectMapper.configure(JsonParser.Feature.ALLOW_COMMENTS, true);</span></span>
<span class="line"><span>        objectMapper.configure(JsonParser.Feature.ALLOW_UNQUOTED_FIELD_NAMES, true);</span></span>
<span class="line"><span>        objectMapper.configure(JsonParser.Feature.ALLOW_SINGLE_QUOTES, true);</span></span>
<span class="line"><span>        objectMapper.configure(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS, false);</span></span>
<span class="line"><span>        JavaTimeModule module =newJavaTimeModule();</span></span>
<span class="line"><span>        objectMapper.registerModule(module);</span></span>
<span class="line"><span>returnnewJacksonJsonpMapper(objectMapper);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>public RestClient restClient(EsProperties esProperties) {</span></span>
<span class="line"><span>return RestClient.builder(toHttpHost(esProperties.getHosts())).setRequestConfigCallback(requestConfigBuilder -&gt; {</span></span>
<span class="line"><span>//设置连接超时时间</span></span>
<span class="line"><span>            requestConfigBuilder.setConnectTimeout(esProperties.getConnectionTimeout());</span></span>
<span class="line"><span>            requestConfigBuilder.setSocketTimeout(esProperties.getSocketTimeout());</span></span>
<span class="line"><span>            requestConfigBuilder.setConnectionRequestTimeout(esProperties.getConnectionRequestTimeout());</span></span>
<span class="line"><span>return requestConfigBuilder;</span></span>
<span class="line"><span>        }).setFailureListener(new RestClient.FailureListener() {</span></span>
<span class="line"><span>//某节点失败,这里可以做一些告警</span></span>
<span class="line"><span>            @Override</span></span>
<span class="line"><span>private void   onFailure(Node node) {</span></span>
<span class="line"><span>                log.error(&quot;{}&quot;, node);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }).setHttpClientConfigCallback(httpClientBuilder -&gt; {</span></span>
<span class="line"><span>            httpClientBuilder.disableAuthCaching();</span></span>
<span class="line"><span>//设置账密</span></span>
<span class="line"><span>returngetHttpAsyncClientBuilder(httpClientBuilder, esProperties);</span></span>
<span class="line"><span>        }).build();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private HttpAsyncClientBuilder getHttpAsyncClientBuilder(HttpAsyncClientBuilder httpClientBuilder,</span></span>
<span class="line"><span>                                                             EsProperties esProperties) {</span></span>
<span class="line"><span>if (!StringUtils.hasText(esProperties.getUsername()) ||!StringUtils.hasText(esProperties.getPassword())) {</span></span>
<span class="line"><span>return httpClientBuilder;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>//账密设置</span></span>
<span class="line"><span>        CredentialsProvider credentialsProvider =newBasicCredentialsProvider();</span></span>
<span class="line"><span>//es账号密码（一般使用,用户elastic）</span></span>
<span class="line"><span>        credentialsProvider.setCredentials(AuthScope.ANY,</span></span>
<span class="line"><span>newUsernamePasswordCredentials(esProperties.getUsername(), esProperties.getPassword()));</span></span>
<span class="line"><span>        httpClientBuilder.setDefaultCredentialsProvider(credentialsProvider);</span></span>
<span class="line"><span>return httpClientBuilder;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 同步方式</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>public ElasticsearchClient elasticsearchClient(RestClient restClient, JacksonJsonpMapper jacksonJsonpMapper) {</span></span>
<span class="line"><span>        ElasticsearchTransport transport =newRestClientTransport(restClient, jacksonJsonpMapper);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>returnnewElasticsearchClient(transport);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 异步方式</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>public ElasticsearchAsyncClient elasticsearchAsyncClient(RestClient restClient,</span></span>
<span class="line"><span>                                                             JacksonJsonpMapper jacksonJsonpMapper) {</span></span>
<span class="line"><span>        ElasticsearchTransport transport =newRestClientTransport(restClient, jacksonJsonpMapper);</span></span>
<span class="line"><span>returnnewElasticsearchAsyncClient(transport);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 解析配置的字符串hosts，转为HttpHost对象数组</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>privateHttpHost[] toHttpHost(String hosts) {</span></span>
<span class="line"><span>if (!StringUtils.hasLength(hosts)) {</span></span>
<span class="line"><span>thrownewRuntimeException(&quot;无效的 elasticsearch 配置. hosts不能为空！&quot;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 多个IP逗号隔开</span></span>
<span class="line"><span>String[] hostArr = hosts.split(&quot;,&quot;);</span></span>
<span class="line"><span>HttpHost[] httpHosts =newHttpHost[hostArr.length];</span></span>
<span class="line"><span>for (int i =0; i &lt; httpHosts.length; i++) {</span></span>
<span class="line"><span>            String host = hostArr[i];</span></span>
<span class="line"><span>            host = host.replaceAll(&quot;http://&quot;, &quot;&quot;).replaceAll(&quot;https://&quot;, &quot;&quot;);</span></span>
<span class="line"><span>            Assert.isTrue(host.contains(&quot;:&quot;), String.format(&quot;your host %s format error , Please refer to [ 127.0.0.1:9200 ] &quot;, host));</span></span>
<span class="line"><span>            httpHosts[i] =newHttpHost(host.split(&quot;:&quot;)[0], Integer.parseInt(host.split(&quot;:&quot;)[1]), &quot;http&quot;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>return httpHosts;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>    @ConditionalOnMissingBean(IndexService.class)</span></span>
<span class="line"><span>public IndexService indexService() {</span></span>
<span class="line"><span>returnnewIndexServiceImpl();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>    @ConditionalOnMissingBean(DocumentService.class)</span></span>
<span class="line"><span>public DocumentService&lt;?&gt; documentService() {</span></span>
<span class="line"><span>returnnew DocumentServiceImpl&lt;&gt;();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>请求客户端可以配置的参数EsProperties</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.data.es;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import lombok.Data;</span></span>
<span class="line"><span>import lombok.experimental.Accessors;</span></span>
<span class="line"><span>import org.springframework.boot.context.properties.ConfigurationProperties;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import java.io.Serializable;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Title: &lt;br&gt;</span></span>
<span class="line"><span> * Description: &lt;br&gt;</span></span>
<span class="line"><span> * Company: KingTang &lt;br&gt;</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * @author 金炀</span></span>
<span class="line"><span> * @version 1.0</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@Accessors(chain=true)</span></span>
<span class="line"><span>@ConfigurationProperties(prefix= EsProperties.PREFIX)</span></span>
<span class="line"><span>@Data</span></span>
<span class="line"><span>public class  EsPropertiesimplementsSerializable {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicstaticfinal String PREFIX =&quot;pangu.elasticsearch&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private String hosts;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>privateint connectionTimeout =-1;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>privateint socketTimeout =-1;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>privateint connectionRequestTimeout =-1;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//es账号密码（一般使用,用户elastic）</span></span>
<span class="line"><span>private String username;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private String password;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>使用参考文档</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><a href="https://blog.csdn.net/weixin_43407520/article/details/127351598" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/weixin_43407520/article/details/127351598</a><a href="https://www.elastic.co/guide/en/elasticsearch/client/java-api-client/master/searching.html" target="_blank" rel="noopener noreferrer">https://www.elastic.co/guide/en/elasticsearch/client/java-api-client/master/searching.html</a></p>`,17)]))}const d=n(l,[["render",p],["__file","ES模块.html.vue"]]),c=JSON.parse('{"path":"/%E7%9B%98%E5%8F%A4/%E6%95%B0%E6%8D%AE%E6%BA%90/ES%E6%A8%A1%E5%9D%97.html","title":"Es模块","lang":"zh-CN","frontmatter":{"description":"Es模块 如何使用 xml java 技术原理 java java https://blog.csdn.net/weixin_43407520/article/details/127351598https://www.elastic.co/guide/en/elasticsearch/client/java-api-client/master/sear...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/%E7%9B%98%E5%8F%A4/%E6%95%B0%E6%8D%AE%E6%BA%90/ES%E6%A8%A1%E5%9D%97.html"}],["meta",{"property":"og:title","content":"Es模块"}],["meta",{"property":"og:description","content":"Es模块 如何使用 xml java 技术原理 java java https://blog.csdn.net/weixin_43407520/article/details/127351598https://www.elastic.co/guide/en/elasticsearch/client/java-api-client/master/sear..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-18T07:25:41.000Z"}],["meta",{"property":"article:author","content":"Cotton Eye Joe"}],["meta",{"property":"article:modified_time","content":"2024-11-18T07:25:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Es模块\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-18T07:25:41.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cotton Eye Joe\\",\\"url\\":\\"https://github.com/ToDreamr\\"}]}"]]},"headers":[],"git":{"createdTime":1731914741000,"updatedTime":1731914741000,"contributors":[{"name":"九歌天上有","email":"aruixrain@gmail.com","commits":1}]},"readingTime":{"minutes":2.72,"words":816},"filePathRelative":"盘古/数据源/ES模块.md","localizedDate":"2024年11月18日","excerpt":"","autoDesc":true}');export{d as comp,c as data};
