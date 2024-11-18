import{_ as n,o as a,c as e,d as i}from"./app-BSUomKXw.js";const l={};function p(r,s){return a(),e("div",null,s[0]||(s[0]=[i(`<h1 id="rabbitmq模块" tabindex="-1"><a class="header-anchor" href="#rabbitmq模块"><span>Rabbitmq模块</span></a></h1><blockquote><h4 id="如何使用" tabindex="-1"><a class="header-anchor" href="#如何使用"><span>如何使用</span></a></h4></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>消息发送端引用</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>xml</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>    &lt;groupId&gt;com.kingtsoft.pangu&lt;/groupId&gt;</span></span>
<span class="line"><span>    &lt;artifactId&gt;pangu-message-rabbitmq-provider&lt;/artifactId&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    注入或者new RabbitTemplate, 默认添加了一个RabbitTemplate，但是因为这个是单例的，</span></span>
<span class="line"><span>如果设置了回调，同项目所有都会有影响，所有根据实际情况去使用new还是注入。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>@Bean</span></span>
<span class="line"><span>public RabbitTemplate panguRabbitTemplate(ConnectionFactory connectionFactory,</span></span>
<span class="line"><span>                                              PanguMessageProperties messageProperties) {</span></span>
<span class="line"><span>        RabbitTemplate rabbitTemplate =newRabbitTemplate();</span></span>
<span class="line"><span>        rabbitTemplate.setConnectionFactory(connectionFactory);</span></span>
<span class="line"><span>//设置开启Mandatory,才能触发回调函数,无论消息推送结果怎么样都强制调用回调函数</span></span>
<span class="line"><span>        rabbitTemplate.setMandatory(true);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 针对网络原因导致连接断开，利用retryTemplate重连3次(只是重连不是使用时的重试)</span></span>
<span class="line"><span>        RetryTemplate retryTemplate =newRetryTemplate();</span></span>
<span class="line"><span>        retryTemplate.setRetryPolicy(newSimpleRetryPolicy(messageProperties.getRetryPolicy().getMaxAttempts()));</span></span>
<span class="line"><span>        rabbitTemplate.setRetryTemplate(retryTemplate);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        rabbitTemplate.setConfirmCallback((correlationData, ack, cause) -&gt; {</span></span>
<span class="line"><span>if (log.isDebugEnabled()) {</span></span>
<span class="line"><span>                log.debug(&quot;相关数据: {}, 确认情况: {}, 原因: {}&quot;, correlationData, ack, cause);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        rabbitTemplate.setReturnsCallback(returned -&gt; {</span></span>
<span class="line"><span>if (log.isDebugEnabled()) {</span></span>
<span class="line"><span>                log.debug(&quot;消息: {}, 回应码: {}, 回应信息: {}, 交换机: {}, 路由键: {} &quot;,</span></span>
<span class="line"><span>                        returned.getMessage(),</span></span>
<span class="line"><span>                        returned.getReplyCode(),</span></span>
<span class="line"><span>                        returned.getReplyText(),</span></span>
<span class="line"><span>                        returned.getExchange(),</span></span>
<span class="line"><span>                        returned.getRoutingKey());</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>return rabbitTemplate;</span></span>
<span class="line"><span>    }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>如下为2种常用案例，前一个无返回值，后一个有返回值。</span></span>
<span class="line"><span>    exchange 	交换机名</span></span>
<span class="line"><span>    routingKey 	路由键（与绑定的路由key所匹配）</span></span>
<span class="line"><span>示例的jsonObject为消息内容</span></span>
<span class="line"><span>方法二第四个参数为回调，示例配置了消息的存活时间，如果不设置，它会一直处于未消费状态。根据业务实际情况设置。(rabbitTemplate还有许多常用用法可以参考官方API)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>rabbitTemplate.convertAndSend(exchange, routingKey, jsonObject.toJSONString());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>rabbitTemplate.convertSendAndReceive(exchange, routingKey, jsonObject.toJSONString(), s -&gt; {</span></span>
<span class="line"><span>if (ttl !=null) {</span></span>
<span class="line"><span>                            s.getMessageProperties().setExpiration(this.ttl.toString());</span></span>
<span class="line"><span>                        }</span></span>
<span class="line"><span>return s;</span></span>
<span class="line"><span>                    })</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>配置文件</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>yaml</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>spring:</span></span>
<span class="line"><span>#配置rabbitMq 服务器</span></span>
<span class="line"><span>rabbitmq:</span></span>
<span class="line"><span>#集群配置如下注释内容</span></span>
<span class="line"><span>  	#addresses: 10.1.50.163:5672,10.1.50.165:5672</span></span>
<span class="line"><span>host: 10.1.50.231</span></span>
<span class="line"><span>port: 5672</span></span>
<span class="line"><span>username: admin</span></span>
<span class="line"><span>password: ***</span></span>
<span class="line"><span>#虚拟host 可以不设置,使用server默认host</span></span>
<span class="line"><span>#    virtual-host: PGHost</span></span>
<span class="line"><span>#确认消息已发送到交换机(Exchange)</span></span>
<span class="line"><span>#    publisher-confirms: true</span></span>
<span class="line"><span>publisher-confirm-type: correlated</span></span>
<span class="line"><span>#确认消息已发送到队列(Queue)</span></span>
<span class="line"><span>publisher-returns: true</span></span>
<span class="line"><span>pangu:</span></span>
<span class="line"><span>rabbitmq:</span></span>
<span class="line"><span>retry-policy:</span></span>
<span class="line"><span>max-attempts: 5</span></span>
<span class="line"><span>retry-times: 3</span></span>
<span class="line"><span># 动态生成的队列</span></span>
<span class="line"><span>queues:</span></span>
<span class="line"><span>redisQueue:</span></span>
<span class="line"><span>name: &#39;pangu.redis&#39;</span></span>
<span class="line"><span>durable: true</span></span>
<span class="line"><span>exclusive: false</span></span>
<span class="line"><span>autoDelete: false</span></span>
<span class="line"><span>#队列中消息存活时间，也可以不设置，选择在发送的时候动态传入(已经生成的数据若没此数据，就不要额外配了，不会进行覆盖，反而第一次请求会很慢)</span></span>
<span class="line"><span>ttl: 5000</span></span>
<span class="line"><span>		# 动态生成的交换器</span></span>
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
<span class="line"><span>routingKey: &#39;pangu.redis&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>消息接收端引用</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>xml</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>    &lt;groupId&gt;com.kingtsoft.pangu&lt;/groupId&gt;</span></span>
<span class="line"><span>    &lt;artifactId&gt;pangu-message-rabbitmq-consumer&lt;/artifactId&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>监听配置</span></span>
<span class="line"><span>下图#{queuesNames.redis}为队列名称，注意示例内容返回的其实是个数组。也可以直接在上面写常量内容。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>@RabbitHandler</span></span>
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
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>配置文件方式回调监听(会根据配置文件自动化监听进行bean的回调)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.storage.redis.server;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import com.kingtsoft.pangu.message.rabbitmq.consumer.PgRabbitBatchMessageService;</span></span>
<span class="line"><span>import org.springframework.amqp.core.Message;</span></span>
<span class="line"><span>import org.springframework.stereotype.Component;</span></span>
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
<span class="line"><span>@Component(&quot;pgRedisCenter&quot;)</span></span>
<span class="line"><span>public class  PgRabbitBatchMessageServiceImplimplementsPgRabbitBatchMessageService {</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>private void   doBatchMessageProcess(List&lt;Message&gt; msgList) {</span></span>
<span class="line"><span>// 业务处理</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>配置文件</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>yaml</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>spring:</span></span>
<span class="line"><span>#配置rabbitMq 服务器</span></span>
<span class="line"><span>rabbitmq:</span></span>
<span class="line"><span>#集群配置如下注释内容</span></span>
<span class="line"><span>  	#addresses: 10.1.50.163:5672,10.1.50.165:5672</span></span>
<span class="line"><span>host: 10.1.50.231</span></span>
<span class="line"><span>port: 5672</span></span>
<span class="line"><span>username: admin</span></span>
<span class="line"><span>password: ***</span></span>
<span class="line"><span>#虚拟host 可以不设置,使用server默认host</span></span>
<span class="line"><span>#    virtual-host: PGHost</span></span>
<span class="line"><span>#确认消息已发送到交换机(Exchange)</span></span>
<span class="line"><span>#    publisher-confirms: true</span></span>
<span class="line"><span>publisher-confirm-type: correlated</span></span>
<span class="line"><span>#确认消息已发送到队列(Queue)</span></span>
<span class="line"><span>publisher-returns: true</span></span>
<span class="line"><span>pangu:</span></span>
<span class="line"><span>rabbitmq:</span></span>
<span class="line"><span>#此为自动监听配置</span></span>
<span class="line"><span>auto-listener:</span></span>
<span class="line"><span>enabled: true</span></span>
<span class="line"><span>auto-topics:</span></span>
<span class="line"><span>pgRedisCenter:</span></span>
<span class="line"><span>topics: &#39;pangu.redis.test&#39;</span></span>
<span class="line"><span>#回调的bean名称</span></span>
<span class="line"><span>serviceCode: &#39;pgRedisCenter&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>注意，动态生成队列后，如果没在使用，管理页面是无法看到的。需要调用一次后才会实际生成，并被消费者所发现。（很奇葩这点）</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><blockquote><h4 id="技术原理" tabindex="-1"><a class="header-anchor" href="#技术原理"><span>技术原理</span></a></h4></blockquote><p><strong>生产者</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>在bean初始化完成后，通过配置文件.动态对队列、交换机、绑定信息等进行初始化。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.message.rabbitmq.provider;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import lombok.extern.slf4j.Slf4j;</span></span>
<span class="line"><span>import org.springframework.amqp.core.*;</span></span>
<span class="line"><span>import org.springframework.beans.factory.InitializingBean;</span></span>
<span class="line"><span>import org.springframework.beans.factory.annotation.Autowired;</span></span>
<span class="line"><span>import org.springframework.beans.factory.config.BeanDefinition;</span></span>
<span class="line"><span>import org.springframework.beans.factory.support.BeanDefinitionBuilder;</span></span>
<span class="line"><span>import org.springframework.beans.factory.support.DefaultListableBeanFactory;</span></span>
<span class="line"><span>import org.springframework.core.Ordered;</span></span>
<span class="line"><span>import org.springframework.core.PriorityOrdered;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import java.util.HashMap;</span></span>
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
<span class="line"><span>@Slf4j</span></span>
<span class="line"><span>public class  MessageBeanFactoryPostProcessorimplementsInitializingBean, PriorityOrdered {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>private DefaultListableBeanFactory beanFactory;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>publicintgetOrder() {</span></span>
<span class="line"><span>return Ordered.HIGHEST_PRECEDENCE;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>private void   afterPropertiesSet() {</span></span>
<span class="line"><span>        PanguMessageProperties messageProperties = beanFactory.getBean(PanguMessageProperties.class);</span></span>
<span class="line"><span>initQueues(beanFactory, messageProperties.getQueues());</span></span>
<span class="line"><span>initExchanges(beanFactory, messageProperties.getExchanges());</span></span>
<span class="line"><span>initBindings(beanFactory, messageProperties.getBindings());</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private void  initQueues(DefaultListableBeanFactory beanFactory,</span></span>
<span class="line"><span>                            Map&lt;String, QueueProperties&gt; queues) {</span></span>
<span class="line"><span>        queues.forEach(</span></span>
<span class="line"><span>                (name, queueProperties) -&gt; {</span></span>
<span class="line"><span>registerBeanDefinition(beanFactory, name);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                    Map&lt;String, Object&gt; argumentsMap =new HashMap&lt;&gt;(4);</span></span>
<span class="line"><span>if (queueProperties.getTtl() !=null) {</span></span>
<span class="line"><span>                        argumentsMap.put(&quot;x-message-ttl&quot;, queueProperties.getTtl());</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>//注册bean实例</span></span>
<span class="line"><span>                    beanFactory.registerSingleton(name, newQueue(</span></span>
<span class="line"><span>                            queueProperties.getName(),</span></span>
<span class="line"><span>                            queueProperties.isDurable(),</span></span>
<span class="line"><span>                            queueProperties.isExclusive(),</span></span>
<span class="line"><span>                            queueProperties.isAutoDelete(),</span></span>
<span class="line"><span>                            argumentsMap)</span></span>
<span class="line"><span>                    );</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>        );</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private void  initExchanges(DefaultListableBeanFactory beanFactory,</span></span>
<span class="line"><span>                               Map&lt;String, ExChangeProperties&gt; exchanges) {</span></span>
<span class="line"><span>        exchanges.forEach(</span></span>
<span class="line"><span>                (name, exchangeProperties) -&gt; {</span></span>
<span class="line"><span>registerBeanDefinition(beanFactory, name);</span></span>
<span class="line"><span>//注册bean实例</span></span>
<span class="line"><span>                    beanFactory.registerSingleton(name, getTargetExchange(exchangeProperties));</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>        );</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private Exchange getTargetExchange(ExChangeProperties exchangeProperties) {</span></span>
<span class="line"><span>        Exchange exchange;</span></span>
<span class="line"><span>switch (exchangeProperties.getExchangeType()) {</span></span>
<span class="line"><span>case&quot;fanoutExchange&quot;:</span></span>
<span class="line"><span>                exchange =newFanoutExchange(</span></span>
<span class="line"><span>                        exchangeProperties.getName(),</span></span>
<span class="line"><span>                        exchangeProperties.isDurable(),</span></span>
<span class="line"><span>                        exchangeProperties.isAutoDelete());</span></span>
<span class="line"><span>break;</span></span>
<span class="line"><span>case&quot;headersExchange&quot;:</span></span>
<span class="line"><span>                exchange =newHeadersExchange(</span></span>
<span class="line"><span>                        exchangeProperties.getName(),</span></span>
<span class="line"><span>                        exchangeProperties.isDurable(),</span></span>
<span class="line"><span>                        exchangeProperties.isAutoDelete());</span></span>
<span class="line"><span>break;</span></span>
<span class="line"><span>case&quot;directExchange&quot;:</span></span>
<span class="line"><span>                exchange =newDirectExchange(</span></span>
<span class="line"><span>                        exchangeProperties.getName(),</span></span>
<span class="line"><span>                        exchangeProperties.isDurable(),</span></span>
<span class="line"><span>                        exchangeProperties.isAutoDelete());</span></span>
<span class="line"><span>break;</span></span>
<span class="line"><span>default:</span></span>
<span class="line"><span>                exchange =newTopicExchange(</span></span>
<span class="line"><span>                        exchangeProperties.getName(),</span></span>
<span class="line"><span>                        exchangeProperties.isDurable(),</span></span>
<span class="line"><span>                        exchangeProperties.isAutoDelete());</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>return exchange;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private void  initBindings(DefaultListableBeanFactory beanFactory,</span></span>
<span class="line"><span>                              Map&lt;String, BindingProperties&gt; bindings) {</span></span>
<span class="line"><span>        bindings.forEach(</span></span>
<span class="line"><span>                (name, bindingProperties) -&gt; {</span></span>
<span class="line"><span>registerBeanDefinition(beanFactory, name);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//注册Bean定义，容器根据定义返回bean</span></span>
<span class="line"><span>                    beanFactory.registerSingleton(name, getTargetBinding(bindingProperties));</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>        );</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private Binding getTargetBinding(BindingProperties bindingProperties) {</span></span>
<span class="line"><span>        Queue queue = (Queue) beanFactory.getBean(bindingProperties.getQueue());</span></span>
<span class="line"><span>        Exchange exchange = (Exchange) beanFactory.getBean(bindingProperties.getExchange());</span></span>
<span class="line"><span>return BindingBuilder.bind(queue).to(exchange).with(bindingProperties.getRoutingKey()).noargs();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private void  registerBeanDefinition(DefaultListableBeanFactory beanFactory, String name) {</span></span>
<span class="line"><span>        BeanDefinitionBuilder beanDefinitionBuilder = BeanDefinitionBuilder.genericBeanDefinition(Binding.class);</span></span>
<span class="line"><span>        beanDefinitionBuilder.addPropertyReference(name, name);</span></span>
<span class="line"><span>        BeanDefinition beanDefinition = beanDefinitionBuilder.getRawBeanDefinition();</span></span>
<span class="line"><span>        beanFactory.registerBeanDefinition(name, beanDefinition);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>消费者</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    设计了消息监听的处理类RabbitConsumerManager。外部若想用也可以直接注入此类。</span></span>
<span class="line"><span>也可以参照里面的方法自己去实现监听。(注意，配置文件的监听是不存在返回值的，官方amqp</span></span>
<span class="line"><span>种的监听api并未实现任何又返回参数的消息，要么用注解，要么自动写连接工厂并且使用阻塞</span></span>
<span class="line"><span>的模式进行手动返回)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.message.rabbitmq.consumer;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import lombok.extern.slf4j.Slf4j;</span></span>
<span class="line"><span>import org.springframework.amqp.rabbit.connection.ConnectionFactory;</span></span>
<span class="line"><span>import org.springframework.amqp.rabbit.listener.MessageListenerContainer;</span></span>
<span class="line"><span>import org.springframework.amqp.rabbit.listener.SimpleMessageListenerContainer;</span></span>
<span class="line"><span>import org.springframework.context.ApplicationContext;</span></span>
<span class="line"><span>import org.springframework.stereotype.Component;</span></span>
<span class="line"><span>import org.springframework.util.Assert;</span></span>
<span class="line"><span>import org.springframework.util.ObjectUtils;</span></span>
<span class="line"><span>import org.springframework.util.StringUtils;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import java.util.LinkedHashMap;</span></span>
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
<span class="line"><span>@Slf4j</span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>public class  RabbitConsumerManager {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final   ConnectionFactory connectionFactory;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final   ApplicationContext applicationContext;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 消费者集合  &lt;consumerId, MessageListenerContainer&gt;</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>privatestaticfinal Map&lt;String, MessageListenerContainer&gt; RABBIT_CONSUMER_THREAD_MAP =new LinkedHashMap&lt;&gt;();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicRabbitConsumerManager(ConnectionFactory connectionFactory,</span></span>
<span class="line"><span>                                 ApplicationContext applicationContext) {</span></span>
<span class="line"><span>this.connectionFactory = connectionFactory;</span></span>
<span class="line"><span>this.applicationContext = applicationContext;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 添加消费者</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @paramconsumerInfo 消费者信息</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>publicsynchronizedvoidaddConsumer(String key, RabbitListenerInfoProperties consumerInfo) {</span></span>
<span class="line"><span>if (ObjectUtils.isEmpty(consumerInfo)) {</span></span>
<span class="line"><span>return;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>// 通过 消费者id停止线程</span></span>
<span class="line"><span>stopByConsumerId(key);</span></span>
<span class="line"><span>// 消费者id</span></span>
<span class="line"><span>// 构建消费者配置信息</span></span>
<span class="line"><span>        MessageListenerContainer messageListener =buildListenerContainerFactory(consumerInfo);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        RABBIT_CONSUMER_THREAD_MAP.put(key, messageListener);</span></span>
<span class="line"><span>// 启动消费者监听</span></span>
<span class="line"><span>        messageListener.start();</span></span>
<span class="line"><span>        log.info(&quot;创建消费者: {} 成功！&quot;, key);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 停止消除</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @paramconsumerId 消费者id</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>private void   stopByConsumerId(String consumerId) {</span></span>
<span class="line"><span>if (!StringUtils.hasText(consumerId)) {</span></span>
<span class="line"><span>return;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        MessageListenerContainer messageListenerContainer = RABBIT_CONSUMER_THREAD_MAP.get(consumerId);</span></span>
<span class="line"><span>if (ObjectUtils.isEmpty(messageListenerContainer)) {</span></span>
<span class="line"><span>return;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>// 停止消费</span></span>
<span class="line"><span>        messageListenerContainer.stop();</span></span>
<span class="line"><span>        RABBIT_CONSUMER_THREAD_MAP.remove(consumerId);</span></span>
<span class="line"><span>        log.info(&quot;停止消费者: {} 成功！&quot;, consumerId);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 构建消费者监听工厂</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @paramconsumerInfo 消费者信息</span></span>
<span class="line"><span>     * @return 监听工厂</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>private MessageListenerContainer buildListenerContainerFactory(RabbitListenerInfoProperties consumerInfo) {</span></span>
<span class="line"><span>        MessageListenerContainer messageListenerContainer =newSimpleMessageListenerContainer(connectionFactory);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        Assert.hasText(consumerInfo.getTopics(), &quot;主题名称不能为空！&quot;);</span></span>
<span class="line"><span>String[] topics = consumerInfo.getTopics().split(&quot;,&quot;);</span></span>
<span class="line"><span>        messageListenerContainer.setQueueNames(topics);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        PgRabbitBatchMessageService pgRabbitBatchMessageService =getPgBatchMessageService(consumerInfo.getServiceCode());</span></span>
<span class="line"><span>if (pgRabbitBatchMessageService ==null) {</span></span>
<span class="line"><span>thrownewRuntimeException(&quot;主题&quot;+ consumerInfo.getTopics() +&quot;无法找到对应的实现信息&quot;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 监听中注入了所属的回调bean</span></span>
<span class="line"><span>        messageListenerContainer.setupMessageListener(newPgBatchMessageListener(pgRabbitBatchMessageService));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>return messageListenerContainer;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 进行回调bean匹配</span></span>
<span class="line"><span>private PgRabbitBatchMessageService getPgBatchMessageService(String serviceCode) {</span></span>
<span class="line"><span>        PgRabbitBatchMessageService batchMessageService =null;</span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>// 匹配定义内容</span></span>
<span class="line"><span>            batchMessageService = applicationContext.getBean(serviceCode, PgRabbitBatchMessageService.class);</span></span>
<span class="line"><span>        } catch (Exception ignore) {}</span></span>
<span class="line"><span>if (batchMessageService !=null) {</span></span>
<span class="line"><span>return batchMessageService;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>// 定义不存在则去匹配任意符合api的bean（这里业务如果设置不好，会导致错乱监听）</span></span>
<span class="line"><span>            batchMessageService = applicationContext.getBean(PgRabbitBatchMessageService.class);</span></span>
<span class="line"><span>        } catch (Exception ignore) {}</span></span>
<span class="line"><span>return batchMessageService;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,36)]))}const d=n(l,[["render",p],["__file","RabbitMQ.html.vue"]]),t=JSON.parse('{"path":"/%E7%9B%98%E5%8F%A4/%E4%B8%AD%E9%97%B4%E4%BB%B6/RabbitMQ.html","title":"Rabbitmq模块","lang":"zh-CN","frontmatter":{"description":"Rabbitmq模块 如何使用 xml java java yaml xml java java yaml 技术原理 生产者 java 消费者 java","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/%E7%9B%98%E5%8F%A4/%E4%B8%AD%E9%97%B4%E4%BB%B6/RabbitMQ.html"}],["meta",{"property":"og:title","content":"Rabbitmq模块"}],["meta",{"property":"og:description","content":"Rabbitmq模块 如何使用 xml java java yaml xml java java yaml 技术原理 生产者 java 消费者 java"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-18T07:25:41.000Z"}],["meta",{"property":"article:author","content":"Cotton Eye Joe"}],["meta",{"property":"article:modified_time","content":"2024-11-18T07:25:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Rabbitmq模块\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-18T07:25:41.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cotton Eye Joe\\",\\"url\\":\\"https://github.com/ToDreamr\\"}]}"]]},"headers":[],"git":{"createdTime":1731914741000,"updatedTime":1731914741000,"contributors":[{"name":"九歌天上有","email":"aruixrain@gmail.com","commits":1}]},"readingTime":{"minutes":5.81,"words":1743},"filePathRelative":"盘古/中间件/RabbitMQ.md","localizedDate":"2024年11月18日","excerpt":"","autoDesc":true}');export{d as comp,t as data};
