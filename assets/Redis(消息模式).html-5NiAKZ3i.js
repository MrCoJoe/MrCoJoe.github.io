import{_ as n,o as a,c as e,d as i}from"./app-ux1ElDeN.js";const l={};function p(d,s){return a(),e("div",null,s[0]||(s[0]=[i(`<h1 id="redis模块-消息模式" tabindex="-1"><a class="header-anchor" href="#redis模块-消息模式"><span>Redis模块（消息模式）</span></a></h1><blockquote><h4 id="如何使用" tabindex="-1"><a class="header-anchor" href="#如何使用"><span>如何使用</span></a></h4></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    此模块默认为中心端模式，需要独立启动一个redis的微服务（可以是box模式），包会线上提供</span></span>
<span class="line"><span>server的配置文件示例pangu.redis.queues属性根据实际与API一样就行, 可以参考rabbit详解内的重试添加redis重试机制</span></span>
<span class="line"><span>这里配置了固定端口主要是为了增加服务的可观察性</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>yaml</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>server:</span></span>
<span class="line"><span>port: 10245</span></span>
<span class="line"><span>spring:</span></span>
<span class="line"><span>application:</span></span>
<span class="line"><span>name: pangu-redis</span></span>
<span class="line"><span>#配置rabbitMq 服务器</span></span>
<span class="line"><span>rabbitmq:</span></span>
<span class="line"><span>#集群如下</span></span>
<span class="line"><span>#    addresses: 10.1.50.63:5672,10.1.50.65:5672</span></span>
<span class="line"><span>host: 10.1.50.231</span></span>
<span class="line"><span>port: 5672</span></span>
<span class="line"><span>username: admin</span></span>
<span class="line"><span>password: kingtang</span></span>
<span class="line"><span>#确认消息已发送到交换机(Exchange)</span></span>
<span class="line"><span>#    publisher-confirms: true</span></span>
<span class="line"><span>publisher-confirm-type: correlated</span></span>
<span class="line"><span>#确认消息已发送到队列(Queue)</span></span>
<span class="line"><span>#    publisher-returns: true</span></span>
<span class="line"><span>redis:</span></span>
<span class="line"><span>#集群如下</span></span>
<span class="line"><span>#    cluster:</span></span>
<span class="line"><span>#      nodes:</span></span>
<span class="line"><span>#        - 10.1.50.63:6380</span></span>
<span class="line"><span>#        - 10.1.50.63:6381</span></span>
<span class="line"><span>#        - 10.1.50.63:6382</span></span>
<span class="line"><span>host: 10.1.50.163</span></span>
<span class="line"><span>password: 0234kz9*l</span></span>
<span class="line"><span>port: 6379</span></span>
<span class="line"><span></span></span>
<span class="line"><span>pangu:</span></span>
<span class="line"><span>redis:</span></span>
<span class="line"><span>queues: &#39;pangu.redis&#39;</span></span>
<span class="line"><span># 这里利用rabbitmq初始化了redis数据交互的基础消息结构</span></span>
<span class="line"><span>rabbitmq:</span></span>
<span class="line"><span>queues:</span></span>
<span class="line"><span>redisQueue:</span></span>
<span class="line"><span>name: &#39;pangu.redis&#39;</span></span>
<span class="line"><span>durable: true</span></span>
<span class="line"><span>exclusive: false</span></span>
<span class="line"><span>autoDelete: false</span></span>
<span class="line"><span># 动态生成的交换器</span></span>
<span class="line"><span>exchanges:</span></span>
<span class="line"><span>#ExchangeType 属性可以配置类型 fanoutExchange\\headersExchange\\directExchange 未匹配或不写的会使用TopicExchange</span></span>
<span class="line"><span>redisExchange:</span></span>
<span class="line"><span>name: &#39;redis.exchange&#39;</span></span>
<span class="line"><span># 动态生成绑定关系</span></span>
<span class="line"><span>bindings:</span></span>
<span class="line"><span>bindingRedisExchangeMessage:</span></span>
<span class="line"><span>queue: redisQueue</span></span>
<span class="line"><span>exchange: redisExchange</span></span>
<span class="line"><span>#注意这个并非队列名</span></span>
<span class="line"><span>routingKey: &#39;pangu.redis&#39;</span></span>
<span class="line"><span>#  rabbitmq:</span></span>
<span class="line"><span>#    auto-listener:</span></span>
<span class="line"><span>#      enabled: true</span></span>
<span class="line"><span>#      auto-topics:</span></span>
<span class="line"><span>#        pgRedisCenter:</span></span>
<span class="line"><span>#          topics: &#39;pangu.redis.test&#39;</span></span>
<span class="line"><span>#          serviceCode: &#39;pgRedisCenter&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>业务端引用如下模块</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>xml</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>  &lt;groupId&gt;com.kingtsoft.pangu&lt;/groupId&gt;</span></span>
<span class="line"><span>  &lt;artifactId&gt;pangu-storage-redis-api&lt;/artifactId&gt;</span></span>
<span class="line"><span>  &lt;version&gt;\${pangu.version}&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>业务端配置</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>yaml</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>pangu:</span></span>
<span class="line"><span>redis:</span></span>
<span class="line"><span># 消息模式执行缓存</span></span>
<span class="line"><span>type: MQ</span></span>
<span class="line"><span>rabbitMq:</span></span>
<span class="line"><span>receiveTimeout: 5000</span></span>
<span class="line"><span>replyTimeout: 5000</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>注入redisHandler，并直接使用</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>public class  TraceController {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final   RedisHandler&lt;String, String&gt; redisHandler;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @RequestMapping(&quot;/getTrace&quot;)</span></span>
<span class="line"><span>public Object getTrace(HttpServletRequest request) {</span></span>
<span class="line"><span>        String dataKey = (String) request.getAttribute(TraceConst.SQL_TRACE_KEY);</span></span>
<span class="line"><span>if (dataKey ==null) {</span></span>
<span class="line"><span>thrownewTipException(ResCodeEnum.ERROR.getCode(), &quot;请先开启SQL跟踪状态！&quot;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        String traceStr = redisHandler.get(dataKey);</span></span>
<span class="line"><span>if (traceStr ==null) {</span></span>
<span class="line"><span>return JsonResult.create(ResCodeEnum.SUCCESS);</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            JSONArray traceArr = JSON.parseArray(traceStr);</span></span>
<span class="line"><span>return JsonResult.create(traceArr);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>目前支持的方法</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.storage.redis.api.handler;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import org.springframework.lang.Nullable;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import java.util.List;</span></span>
<span class="line"><span>import java.util.concurrent.TimeUnit;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Title: &lt;br&gt;</span></span>
<span class="line"><span> * Description: &lt;br&gt;</span></span>
<span class="line"><span> * Company: KingTang &lt;br&gt;</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * @author 金炀</span></span>
<span class="line"><span> * @version 1.0</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public interface  RedisHandler&lt;K, V&gt; {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Nullable</span></span>
<span class="line"><span>    boolean   setExpireTime(K key, long timeout, TimeUnit unit);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>defaultvoidset(K key, V value) {</span></span>
<span class="line"><span>this.set(key, value, null, null);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>voidset(K key, V value, long  timeout, TimeUnit unit);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>defaultvoidset(K key, V value, long timeout, TimeUnit unit) {</span></span>
<span class="line"><span>this.set(key, value, (long ) timeout, unit);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Nullable</span></span>
<span class="line"><span>    boolean   setIfAbsent(K key, V value);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Nullable</span></span>
<span class="line"><span>    boolean   setIfAbsent(K key, V value, long timeout, TimeUnit unit);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Nullable</span></span>
<span class="line"><span>    boolean   setIfPresent(K key, V value);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Nullable</span></span>
<span class="line"><span>    boolean   setIfPresent(K key, V value, long timeout, TimeUnit unit);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Nullable</span></span>
<span class="line"><span>    V get(Object key);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Nullable</span></span>
<span class="line"><span>    boolean   delete(K key);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 将value从右边放入缓存</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @paramkey   键</span></span>
<span class="line"><span>     * @paramvalue 值</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    long  listRightPush(K key, V value);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 将value从左边放入缓存</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @paramkey   键</span></span>
<span class="line"><span>     * @paramvalue 值</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    long  listLeftPush(K key, V value);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 将list从右边放入缓存</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @paramkey   键</span></span>
<span class="line"><span>     * @paramvalue 值</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    long  listRightPushAll(K key, List&lt;V&gt; value);</span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 将list从左边放入缓存</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @paramkey   键</span></span>
<span class="line"><span>     * @paramvalue 值</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    long  listLeftPushAll(K key, List&lt;V&gt; value);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 从list左边弹出一条数据</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @paramkey 键</span></span>
<span class="line"><span>     * @return 队列中的值</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    V listLeftPop(K key);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 从list左边定时弹出一条</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @paramkey     键</span></span>
<span class="line"><span>     * @paramtimeout 弹出时间</span></span>
<span class="line"><span>     * @paramunit    时间单位</span></span>
<span class="line"><span>     * @return 队列中的值</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    V listLeftPop(K key, long timeout, TimeUnit unit);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 从list右边弹出一条数据</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @paramkey 键</span></span>
<span class="line"><span>     * @return 队列中的值</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    V listRightPop(K key);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 从list左边定时弹出</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @paramkey     键</span></span>
<span class="line"><span>     * @paramtimeout 弹出时间</span></span>
<span class="line"><span>     * @paramunit    时间单位</span></span>
<span class="line"><span>     * @return 队列中的值</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    V listRightPop(K key, long timeout, TimeUnit unit);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    List&lt;V&gt; listRange(K key, long start, long end);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 获取list缓存的长度</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @paramkey 键</span></span>
<span class="line"><span>     * @return list长度</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>long listSize(K key);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><h4 id="技术原理" tabindex="-1"><a class="header-anchor" href="#技术原理"><span>技术原理</span></a></h4></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    缓存设计了独立的API模块，提供业务模块引用及初始化  接口 -&gt; 抽象-&gt;实例 装饰模式下，</span></span>
<span class="line"><span>可根据实际包的引用或者配置（目前是根据包的引用），判断是否实例化途径。支持多个redis构造</span></span>
<span class="line"><span>器同时存在，并且抽象了注册方式及注册条件，使后期可以根据配置及其他情况进行创建器的创建与否。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>public interface  RedisHandlerCreator {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 通过属性创建redis交互模式</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @paramredisHandlerProperties 操作属性</span></span>
<span class="line"><span>     * @return 被创建的数据源</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    RedisHandler createDataSource(RedisHandlerProperties redisHandlerProperties);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 当前创建器是否支持根据此属性创建</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @paramredisHandlerProperties 操作属性</span></span>
<span class="line"><span>     * @return 是否支持</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>boolean  support(RedisHandlerProperties redisHandlerProperties);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>publicabstractclassAbstractRedisHandlerCreatorimplementsRedisHandlerCreator {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicabstract RedisHandler doCreateRedisHandler(RedisHandlerProperties redisHandlerProperties);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 这样可以保证存在共性内容就可以用抽象类抽取，而且不损失接口功能</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>public RedisHandler createDataSource(RedisHandlerProperties redisHandlerProperties) {</span></span>
<span class="line"><span>returndoCreateRedisHandler(redisHandlerProperties);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.storage.redis.api.creator;</span></span>
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
<span class="line"><span>public class  RedisMessageHandlerCreatorextendsAbstractRedisHandlerCreatorimplementsRedisHandlerCreator {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>private ConnectionFactory connectionFactory;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 具体实现</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>public RedisHandler doCreateRedisHandler(RedisHandlerProperties redisHandlerProperties) {</span></span>
<span class="line"><span>        RabbitTemplate rabbitTemplate =getRabbitTemplate(connectionFactory, redisHandlerProperties);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        RedisRetryPolicyProperties retryPolicy = redisHandlerProperties.getRetryPolicy();</span></span>
<span class="line"><span>        RetryTemplate retryTemplate =newRetryTemplate();</span></span>
<span class="line"><span>        retryTemplate.setRetryPolicy(newSimpleRetryPolicy(retryPolicy.getRetryTimes()));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>returnnewRedisMessageHandler().build(rabbitTemplate, retryTemplate,</span></span>
<span class="line"><span>                StringUtils.hasText(redisHandlerProperties.getRoutingKey()) ?</span></span>
<span class="line"><span>                        redisHandlerProperties.getRoutingKey() :null,</span></span>
<span class="line"><span>                redisHandlerProperties.getTtl());</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>publicboolean  support(RedisHandlerProperties redisHandlerProperties) {</span></span>
<span class="line"><span>return redisHandlerProperties.getType() ==null||&quot;MQ&quot;.equals(redisHandlerProperties.getType());</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public RabbitTemplate getRabbitTemplate(ConnectionFactory connectionFactory,</span></span>
<span class="line"><span>                                            RedisHandlerProperties redisHandlerProperties) {</span></span>
<span class="line"><span>        RabbitTemplate rabbitTemplate =newRabbitTemplate();</span></span>
<span class="line"><span>        rabbitTemplate.setConnectionFactory(connectionFactory);</span></span>
<span class="line"><span>//设置开启Mandatory,才能触发回调函数,无论消息推送结果怎么样都强制调用回调函数</span></span>
<span class="line"><span>        rabbitTemplate.setMandatory(true);</span></span>
<span class="line"><span>        rabbitTemplate.setReturnsCallback(returned -&gt; {</span></span>
<span class="line"><span>if (log.isDebugEnabled()) {</span></span>
<span class="line"><span>                log.debug(&quot;RedisReturnsCallback消息: {}, 回应码: {}, 回应信息: {}, 交换机: {}, 路由键: {} &quot;,</span></span>
<span class="line"><span>                        returned.getMessage(),</span></span>
<span class="line"><span>                        returned.getReplyCode(),</span></span>
<span class="line"><span>                        returned.getReplyText(),</span></span>
<span class="line"><span>                        returned.getExchange(),</span></span>
<span class="line"><span>                        returned.getRoutingKey());</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (redisHandlerProperties.getRabbitMq() !=null) {</span></span>
<span class="line"><span>            rabbitTemplate.setReceiveTimeout(redisHandlerProperties.getRabbitMq().getReceiveTimeout());</span></span>
<span class="line"><span>            rabbitTemplate.setReplyTimeout(redisHandlerProperties.getRabbitMq().getReplyTimeout());</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        rabbitTemplate.setReplyErrorHandler(t -&gt; {</span></span>
<span class="line"><span>// 这里可以记录日志</span></span>
<span class="line"><span>            log.error(&quot;ReplyError: &quot;, t);</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>return rabbitTemplate;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>然后构建器根据注册的途径与匹配方式进行实际执行器获取</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>@Slf4j</span></span>
<span class="line"><span>@Setter</span></span>
<span class="line"><span>public class  DefaultRedisHandlerCreator {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private List&lt;RedisHandlerCreator&gt; creators;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public RedisHandler createRedisHandler(RedisHandlerProperties redisHandlerProperties) {</span></span>
<span class="line"><span>        RedisHandlerCreator redisHandlerCreator =null;</span></span>
<span class="line"><span>for (RedisHandlerCreator creator :this.creators) {</span></span>
<span class="line"><span>if (creator.support(redisHandlerProperties)) {</span></span>
<span class="line"><span>                redisHandlerCreator = creator;</span></span>
<span class="line"><span>break;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>if (redisHandlerCreator ==null) {</span></span>
<span class="line"><span>thrownewIllegalStateException(&quot;creator must not be null, please check the DataSourceCreator&quot;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>return redisHandlerCreator.createDataSource(redisHandlerProperties);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    Redis本身的调用为了尽量避免网络方面的问题，加入了重试功能，后面的配置retry-times</span></span>
<span class="line"><span>为消息发送重试次数。而maxAttempts为连接的重试次数。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>private Object doRetry(Function&lt;Void, Object&gt; function, Function&lt;Void, Object&gt; failCallBack) {</span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>        AtomicInteger i =newAtomicInteger(1);</span></span>
<span class="line"><span>return retryTemplate.execute((RetryCallback&lt;Object, Throwable&gt;) context -&gt; {</span></span>
<span class="line"><span>if (i.get() &gt;1) {</span></span>
<span class="line"><span>                log.info(&quot;开始第{}次redis消息重试, routingKey: {}&quot;, i.get() -1, routingKey);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>//需要重试的代码</span></span>
<span class="line"><span>            Object ret = function.apply(null);</span></span>
<span class="line"><span>            i.getAndIncrement();</span></span>
<span class="line"><span>if (ret ==null) {</span></span>
<span class="line"><span>thrownewRuntimeException(&quot;信息传递异常，详见错误信息！&quot;);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>return ret;</span></span>
<span class="line"><span>        }, context -&gt; {</span></span>
<span class="line"><span>//重试失败后执行的代码</span></span>
<span class="line"><span>            log.error(&quot;消息重试了3次，无法正确调用&quot;);</span></span>
<span class="line"><span>return failCallBack.apply(null);</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>    } catch (Throwable e) {</span></span>
<span class="line"><span>thrownewRuntimeException(e.getMessage());</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>重试配置文件</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>yaml</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>pangu:</span></span>
<span class="line"><span>redis:</span></span>
<span class="line"><span>retry-policy:</span></span>
<span class="line"><span>max-attempts: 5</span></span>
<span class="line"><span>retry-times: 3</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>内置了一个时间过期类，可以让数据频繁过期的情况下，分批集中在一部分时间内过期，减少平时的负载及压力。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>privatestaticfinal Map&lt;TimeUnit, Integer&gt; TIME_ALL =new HashMap&lt;&gt;() {</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>put(TimeUnit.SECONDS, 3600);</span></span>
<span class="line"><span>put(TimeUnit.MINUTES, 60);</span></span>
<span class="line"><span>put(TimeUnit.HOURS, 24);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicstaticlong getExpTimeout(LocalDateTime startTime, long  timeout, int blockTime, TimeUnit unit) {</span></span>
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
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>实际处理端(redis-server)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>@RabbitHandler</span></span>
<span class="line"><span>@RabbitListener(queues=&quot;#{queuesNames.redis}&quot;)</span></span>
<span class="line"><span>public Object process(Message message) {</span></span>
<span class="line"><span>long  start = System.currentTimeMillis();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>if (redisReceiver ==null) {</span></span>
<span class="line"><span>            redisReceiver = applicationContext.getBean(PgRedisReceiver.class);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        String body =newString(message.getBody(), StandardCharsets.UTF_8);</span></span>
<span class="line"><span>        JSONObject obj = JSON.parseObject(body);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        JSONObject messageContent = obj.getJSONObject(PgRedisConst.MessageBody.MESSAGE_CONTENT);</span></span>
<span class="line"><span>        Method method = ReflectionUtils.findMethod(</span></span>
<span class="line"><span>                redisReceiver.getClass(),</span></span>
<span class="line"><span>                obj.getString(PgRedisConst.MessageBody.MESSAGE_CODE),</span></span>
<span class="line"><span>                JSONObject.class);</span></span>
<span class="line"><span>if (method ==null) {</span></span>
<span class="line"><span>thrownewRuntimeException(&quot;方法不存在!&quot;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        Object ret = ReflectionUtils.invokeMethod(method, redisReceiver, messageContent);</span></span>
<span class="line"><span>// 如果返回是null，这边会卡好几秒</span></span>
<span class="line"><span>return ret ==null? PgRedisConst.MessageBody.RET_NULL_FLAG : ret;</span></span>
<span class="line"><span>    } catch (Exception e) {</span></span>
<span class="line"><span>return PgRedisConst.MessageBody.RET_EXCEPTION_FLAG;</span></span>
<span class="line"><span>    } finally {</span></span>
<span class="line"><span>if (log.isDebugEnabled()) {</span></span>
<span class="line"><span>            log.debug(&quot;cost-cus: {}&quot;, (System.currentTimeMillis() - start));</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,40)]))}const c=n(l,[["render",p],["__file","Redis(消息模式).html.vue"]]),t=JSON.parse('{"path":"/%E7%9B%98%E5%8F%A4/%E4%B8%AD%E9%97%B4%E4%BB%B6/Redis(%E6%B6%88%E6%81%AF%E6%A8%A1%E5%BC%8F).html","title":"Redis模块（消息模式）","lang":"zh-CN","frontmatter":{"description":"Redis模块（消息模式） 如何使用 yaml xml yaml java java 技术原理 java java java java java yaml java java","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/%E7%9B%98%E5%8F%A4/%E4%B8%AD%E9%97%B4%E4%BB%B6/Redis(%E6%B6%88%E6%81%AF%E6%A8%A1%E5%BC%8F).html"}],["meta",{"property":"og:title","content":"Redis模块（消息模式）"}],["meta",{"property":"og:description","content":"Redis模块（消息模式） 如何使用 yaml xml yaml java java 技术原理 java java java java java yaml java java"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-18T07:25:41.000Z"}],["meta",{"property":"article:author","content":"Cotton Eye Joe"}],["meta",{"property":"article:modified_time","content":"2024-11-18T07:25:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis模块（消息模式）\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-18T07:25:41.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cotton Eye Joe\\",\\"url\\":\\"https://github.com/ToDreamr\\"}]}"]]},"headers":[],"git":{"createdTime":1731914741000,"updatedTime":1731914741000,"contributors":[{"name":"九歌天上有","email":"aruixrain@gmail.com","commits":1}]},"readingTime":{"minutes":5.58,"words":1673},"filePathRelative":"盘古/中间件/Redis(消息模式).md","localizedDate":"2024年11月18日","excerpt":"","autoDesc":true}');export{c as comp,t as data};
