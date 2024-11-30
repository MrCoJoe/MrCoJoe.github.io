import{_ as n,o as a,c as i,d as e}from"./app-ux1ElDeN.js";const l={};function p(r,s){return a(),i("div",null,s[0]||(s[0]=[e(`<h1 id="kafka模块" tabindex="-1"><a class="header-anchor" href="#kafka模块"><span>Kafka模块</span></a></h1><blockquote><h4 id="如何使用" tabindex="-1"><a class="header-anchor" href="#如何使用"><span>如何使用</span></a></h4></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>想要创建消息的引用 pangu-message-kafka-provider</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>xml</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>  &lt;groupId&gt;com.kingtsoft.pangu&lt;/groupId&gt;</span></span>
<span class="line"><span>  &lt;artifactId&gt;pangu-message-kafka-provider&lt;/artifactId&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>配置文件</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>yaml</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>spring:</span></span>
<span class="line"><span>kafka:</span></span>
<span class="line"><span>bootstrap-servers: 10.1.50.131:9092</span></span>
<span class="line"><span>pangu:</span></span>
<span class="line"><span>kafka:</span></span>
<span class="line"><span>servers: \${spring.kafka.bootstrap-servers}</span></span>
<span class="line"><span>#重试，0为不启用重试机制</span></span>
<span class="line"><span>retries: 1</span></span>
<span class="line"><span>#控制批处理大小，单位为字节</span></span>
<span class="line"><span>batch-size: 16384</span></span>
<span class="line"><span>#批量发送，延迟为1毫秒，启用该功能能有效减少生产者发送消息次数，从而提高并发量</span></span>
<span class="line"><span>linger: 1</span></span>
<span class="line"><span>#生产者可以使用的总内存字节来缓冲等待发送到服务器的记录</span></span>
<span class="line"><span>buffer-memory: 1024000</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    使用方式如下，KafkaHeaders.TOPIC 是固定值，设置是主题信息。KafkaHeaders.KEY也是固定值，</span></span>
<span class="line"><span>为消息的唯一ID，其他的为自定值。</span></span>
<span class="line"><span>send这个方法有回调，这个基于业务场景是否需要此类操作。（当然消息发送有很多种模式，属于kafka自带属性，</span></span>
<span class="line"><span>这里不一一展开讲解）</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>public class  DataToLocalHandler {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final   KafkaTemplate&lt;String, Object&gt; kafkaTemplate;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicDataToLocalHandler(KafkaTemplate&lt;String, Object&gt; kafkaTemplate) {</span></span>
<span class="line"><span>this.kafkaTemplate = kafkaTemplate;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private void   sendMsg(LogOperateMessage logOperateMessage) {</span></span>
<span class="line"><span>        Map&lt;String, Object&gt; map =new HashMap&lt;&gt;(4);</span></span>
<span class="line"><span>        map.put(KafkaHeaders.TOPIC, FrameLogConst.LOG_TOPIC_ANNOTATION);</span></span>
<span class="line"><span>        map.put(KafkaHeaders.KEY, PanguLogUtil.createMsgKey(FrameLogConst.LogType.ANNOTATION_LOG));</span></span>
<span class="line"><span>        map.put(FrameLogConst.LOG_TYPE_KEY, FrameLogConst.LogType.ANNOTATION_LOG);</span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>            Message&lt;String&gt; message =new GenericMessage&lt;&gt;(JSON.toJSONString(logOperateMessage), newMessageHeaders(map));</span></span>
<span class="line"><span>            kafkaTemplate.send(message);</span></span>
<span class="line"><span>        } catch (Exception e) {</span></span>
<span class="line"><span>            e.printStackTrace();</span></span>
<span class="line"><span>            log.error(&quot;消息发送失败！&quot;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private void  sendMsgCallBack(LogOperateMessage logOperateMessage) {</span></span>
<span class="line"><span>        Map&lt;String, Object&gt; map =new HashMap&lt;&gt;(4);</span></span>
<span class="line"><span>        map.put(KafkaHeaders.TOPIC, FrameLogConst.LOG_TOPIC_ANNOTATION);</span></span>
<span class="line"><span>        map.put(KafkaHeaders.KEY, PanguLogUtil.createMsgKey(FrameLogConst.LogType.ANNOTATION_LOG));</span></span>
<span class="line"><span>        map.put(FrameLogConst.LOG_TYPE_KEY, FrameLogConst.LogType.ANNOTATION_LOG);</span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>            Message&lt;String&gt; message =new GenericMessage&lt;&gt;(JSON.toJSONString(logOperateMessage), newMessageHeaders(map));</span></span>
<span class="line"><span>            ListenableFuture&lt;SendResult&lt;String, Object&gt;&gt; future = kafkaTemplate.send(message);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            future.addCallback(new ListenableFutureCallback&lt;&gt;() {</span></span>
<span class="line"><span>                @Override</span></span>
<span class="line"><span>private void   onSuccess(SendResult&lt;String, Object&gt; result) {</span></span>
<span class="line"><span>                    log.trace(&quot;发送消息成功，发送主题为：{}&quot;, FrameLogConst.LOG_TOPIC_ANNOTATION);</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                @Override</span></span>
<span class="line"><span>private void   onFailure(Throwable ex) {</span></span>
<span class="line"><span>                    log.error(&quot;发送消息失败，消息主题为 {}，异常消息为 ：{}&quot;, FrameLogConst.LOG_TOPIC_ANNOTATION, ex);</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            });</span></span>
<span class="line"><span>        } catch (Exception e) {</span></span>
<span class="line"><span>            e.printStackTrace();</span></span>
<span class="line"><span>            log.error(&quot;消息发送失败！&quot;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>想要监听消息的引用 pangu-message-kafka-consumer</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>xml</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>  &lt;groupId&gt;com.kingtsoft.pangu&lt;/groupId&gt;</span></span>
<span class="line"><span>  &lt;artifactId&gt;pangu-message-kafka-consumer&lt;/artifactId&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>配置文件</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>yaml</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>spring:</span></span>
<span class="line"><span>kafka:</span></span>
<span class="line"><span>bootstrap-servers: 10.1.50.131:9092</span></span>
<span class="line"><span>pangu:</span></span>
<span class="line"><span>kafka:</span></span>
<span class="line"><span>servers: \${spring.kafka.bootstrap-servers}</span></span>
<span class="line"><span>group-id: bootKafka</span></span>
<span class="line"><span>#是否自动提交</span></span>
<span class="line"><span>auto-commit: true</span></span>
<span class="line"><span>#自动提交的频率</span></span>
<span class="line"><span>commit-interval: 100</span></span>
<span class="line"><span>#Session超时设置</span></span>
<span class="line"><span>session-timeout: 15000</span></span>
<span class="line"><span># 需要动态生成的主题信息</span></span>
<span class="line"><span>topics:</span></span>
<span class="line"><span>pangu:</span></span>
<span class="line"><span>name: &#39;topic.pangu.frame&#39;</span></span>
<span class="line"><span>num-partitions: 1</span></span>
<span class="line"><span>replication-factor: 1</span></span>
<span class="line"><span># 自动化监听</span></span>
<span class="line"><span>auto-listener:</span></span>
<span class="line"><span>enabled: true</span></span>
<span class="line"><span>auto-topics:</span></span>
<span class="line"><span>panguCnter:</span></span>
<span class="line"><span>topics: &#39;topic.pangu.center&#39;</span></span>
<span class="line"><span>group: &#39;mainGroup&#39;</span></span>
<span class="line"><span>serviceCode: &#39;pgChatCenter&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>监听配置</span></span>
<span class="line"><span>1、注解模式</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>@Slf4j</span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>public class  AnnotationLogListener {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicstaticfinal String LOG_IDX = FrameLogConst.LogIndex.LOG_ANNOTATION_IDX;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @KafkaListener(id=&quot;annotationLogListener&quot;, topics= {FrameLogConst.LOG_TOPIC_ANNOTATION}, groupId=&quot;mainGroup&quot;)</span></span>
<span class="line"><span>private void   annotationLogListener(ConsumerRecord&lt;String, String&gt; record) {</span></span>
<span class="line"><span>        Optional&lt;String&gt; message = Optional.ofNullable(record.value());</span></span>
<span class="line"><span>        String key = LogMessageUtil.getLogKey(record.key());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (message.isEmpty()) {</span></span>
<span class="line"><span>            log.info(&quot;日志数据为空！ &quot;);</span></span>
<span class="line"><span>return;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>doAnnotationLogSave(message.get(), key);</span></span>
<span class="line"><span>        } catch (Exception e) {</span></span>
<span class="line"><span>            e.printStackTrace();</span></span>
<span class="line"><span>            log.error(&quot;日志数据保存失败！&quot;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>2、KafkaConsumerManager</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.frame.chat.kafka;</span></span>
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
<span class="line"><span>public class  PgChatKafkaInitimplementsInitializingBean {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final   KafkaConsumerManager kafkaConsumerManager;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final   PgChatKafkaProperties pgChatKafkaProperties;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicPgChatKafkaInit(PgChatKafkaProperties pgChatKafkaProperties,</span></span>
<span class="line"><span>                           KafkaConsumerManager kafkaConsumerManager) {</span></span>
<span class="line"><span>this.pgChatKafkaProperties = pgChatKafkaProperties;</span></span>
<span class="line"><span>this.kafkaConsumerManager = kafkaConsumerManager;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>private void   afterPropertiesSet() {</span></span>
<span class="line"><span>        Map&lt;String, PgChatKafkaClientProperties&gt; chatClients = pgChatKafkaProperties.getChatClients();</span></span>
<span class="line"><span>        chatClients.forEach(</span></span>
<span class="line"><span>                (k, p) -&gt; {</span></span>
<span class="line"><span>                    KafkaListenerInfoProperties properties =newKafkaListenerInfoProperties();</span></span>
<span class="line"><span>                    properties.setTopics(p.getTopics());</span></span>
<span class="line"><span>                    properties.setGroup(p.getGroup());</span></span>
<span class="line"><span>                    properties.setServiceCode(PgChatConst.ChatKafkaServiceCode.CODE_CLIENT);</span></span>
<span class="line"><span>                    kafkaConsumerManager.addConsumer(k, properties);</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>        );</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>3、配置文件</span></span>
<span class="line"><span>    如图所示，配置auto-listener.enabled=true,即可开启自动监听。这里主要讲下</span></span>
<span class="line"><span>serviceCode属性，此属性为自动监听后的回调bean名称，配置后可自动回调，之所以不用</span></span>
<span class="line"><span>API，再去实现，因为考虑到了多个不同的自动监听一起跑项目，且业务中不再将消息进行二</span></span>
<span class="line"><span>次区分，所以不能把所有消息都发一遍，所以需要指定回调的bean</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>yaml</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>pangu:</span></span>
<span class="line"><span>kafka:</span></span>
<span class="line"><span># 自动化监听</span></span>
<span class="line"><span>auto-listener:</span></span>
<span class="line"><span>enabled: true</span></span>
<span class="line"><span>auto-topics:</span></span>
<span class="line"><span>panguCnter:</span></span>
<span class="line"><span>topics: &#39;topic.pangu.center&#39;</span></span>
<span class="line"><span>group: &#39;mainGroup&#39;</span></span>
<span class="line"><span>serviceCode: &#39;pgChatCenter&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>回调bean如下, 回调接口要遵守PgKafkaBatchMessageService api，主要是多消息处理，增强并发。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.frame.chat.center.kafka;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import com.alibaba.fastjson2.JSON;</span></span>
<span class="line"><span>import com.kingtsoft.pangu.frame.chat.center.PgChatCenterApi;</span></span>
<span class="line"><span>import com.kingtsoft.pangu.frame.chat.common.PgChatCenterEntity;</span></span>
<span class="line"><span>import com.kingtsoft.pangu.frame.chat.common.constant.PgChatConst;</span></span>
<span class="line"><span>import com.kingtsoft.pangu.message.kafka.consumer.PgKafkaBatchMessageService;</span></span>
<span class="line"><span>import lombok.extern.slf4j.Slf4j;</span></span>
<span class="line"><span>import org.apache.kafka.clients.consumer.ConsumerRecord;</span></span>
<span class="line"><span>import org.springframework.stereotype.Component;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import java.util.List;</span></span>
<span class="line"><span>import java.util.Optional;</span></span>
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
<span class="line"><span>@Component(PgChatConst.ChatKafkaServiceCode.CODE_CENTER)</span></span>
<span class="line"><span>public class  PgChatCenterListenerImplimplementsPgKafkaBatchMessageService {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final   PgChatCenterApi pgChatCenterApi;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicPgChatCenterListenerImpl(PgChatCenterApi pgChatCenterApi) {</span></span>
<span class="line"><span>this.pgChatCenterApi = pgChatCenterApi;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 业务端消息信息处理</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @paramdata 消息</span></span>
<span class="line"><span>     * @author 金炀</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>private void   doBatchMessageProcess(List&lt;ConsumerRecord&lt;String, String&gt;&gt; data) {</span></span>
<span class="line"><span>for (ConsumerRecord&lt;String, String&gt; record : data) {</span></span>
<span class="line"><span>            Optional&lt;String&gt; message = Optional.ofNullable(record.value());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (message.isEmpty()) {</span></span>
<span class="line"><span>                log.info(&quot;chat中心接受数据为空！&quot;);</span></span>
<span class="line"><span>return;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>                PgChatCenterEntity pgChatEntity = JSON.parseObject(message.get(), PgChatCenterEntity.class);</span></span>
<span class="line"><span>                pgChatCenterApi.doProcess(pgChatEntity);</span></span>
<span class="line"><span>            } catch (Exception e) {</span></span>
<span class="line"><span>                log.error(&quot;chat中心执行失败！&quot;, e);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><h4 id="技术原理" tabindex="-1"><a class="header-anchor" href="#技术原理"><span>技术原理</span></a></h4></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>自动化topic创建，根据topics中的信息动态创建了主题内容。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.message.kafka.provider;</span></span>
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
<span class="line"><span>public class  KafkaTopicConfigurationimplementsInitializingBean {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final   AdminClient adminClient;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final   KafkaProperties kafkaProperties;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicKafkaTopicConfiguration(AdminClient adminClient, KafkaProperties kafkaProperties) {</span></span>
<span class="line"><span>this.adminClient = adminClient;</span></span>
<span class="line"><span>this.kafkaProperties = kafkaProperties;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>private void   afterPropertiesSet() {</span></span>
<span class="line"><span>        Map&lt;String, KafkaTopicProperties&gt; propertiesMap = kafkaProperties.getTopics();</span></span>
<span class="line"><span>        List&lt;NewTopic&gt; newTopics =new ArrayList&lt;&gt;();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        propertiesMap.forEach(</span></span>
<span class="line"><span>                (key, pro) -&gt; {</span></span>
<span class="line"><span>if (StringUtils.hasText(pro.getName())) {</span></span>
<span class="line"><span>                        NewTopic topic =newNewTopic(pro.getName(), pro.getNumPartitions(), pro.getReplicationFactor());</span></span>
<span class="line"><span>                        newTopics.add(topic);</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>        );</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (newTopics.size() &gt;0) {</span></span>
<span class="line"><span>            adminClient.createTopics(newTopics);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>自动化监听</span></span>
<span class="line"><span>    首先创建了一个KafkaConsumerManager，里面主要是对各类监听进行添加及停止。然后通过</span></span>
<span class="line"><span>PgKafkaBatchMessageService 接口，对监听到的信息进行回调。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.message.kafka.consumer;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import com.kingtsoft.pangu.message.kafka.common.KafkaListenerInfoProperties;</span></span>
<span class="line"><span>import lombok.extern.slf4j.Slf4j;</span></span>
<span class="line"><span>import org.springframework.context.ApplicationContext;</span></span>
<span class="line"><span>import org.springframework.kafka.core.ConsumerFactory;</span></span>
<span class="line"><span>import org.springframework.kafka.listener.ContainerProperties;</span></span>
<span class="line"><span>import org.springframework.kafka.listener.KafkaMessageListenerContainer;</span></span>
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
<span class="line"><span>public class  KafkaConsumerManager {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final   ConsumerFactory&lt;String, Object&gt; consumerFactory;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final   ApplicationContext applicationContext;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 消费者集合  &lt;consumerId, KafkaConsumerThread&gt;</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>privatestaticfinal Map&lt;String, KafkaMessageListenerContainer&lt;String, String&gt;&gt; KAFKA_CONSUMER_THREAD_MAP =new LinkedHashMap&lt;&gt;();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicKafkaConsumerManager(ConsumerFactory&lt;String, Object&gt; consumerFactory,</span></span>
<span class="line"><span>                                ApplicationContext applicationContext) {</span></span>
<span class="line"><span>this.consumerFactory = consumerFactory;</span></span>
<span class="line"><span>this.applicationContext = applicationContext;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 添加消费者</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @paramconsumerInfo 消费者信息</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>publicsynchronizedvoidaddConsumer(String key, KafkaListenerInfoProperties consumerInfo) {</span></span>
<span class="line"><span>if (ObjectUtils.isEmpty(consumerInfo)) {</span></span>
<span class="line"><span>return;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>// 通过 消费者id停止线程</span></span>
<span class="line"><span>stopByConsumerId(key);</span></span>
<span class="line"><span>// 消费者id</span></span>
<span class="line"><span>// 构建消费者配置信息</span></span>
<span class="line"><span>        KafkaMessageListenerContainer&lt;String, String&gt; kafkaMessageListener =buildKafkaListenerContainerFactory(consumerInfo);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        KAFKA_CONSUMER_THREAD_MAP.put(key, kafkaMessageListener);</span></span>
<span class="line"><span>// 启动消费者监听</span></span>
<span class="line"><span>        kafkaMessageListener.start();</span></span>
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
<span class="line"><span>        KafkaMessageListenerContainer&lt;String, String&gt; kafkaMessageListenerContainer = KAFKA_CONSUMER_THREAD_MAP.get(consumerId);</span></span>
<span class="line"><span>if (ObjectUtils.isEmpty(kafkaMessageListenerContainer)) {</span></span>
<span class="line"><span>return;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>// 停止消费</span></span>
<span class="line"><span>        kafkaMessageListenerContainer.stop();</span></span>
<span class="line"><span>        KAFKA_CONSUMER_THREAD_MAP.remove(consumerId);</span></span>
<span class="line"><span>        log.info(&quot;停止消费者: {} 成功！&quot;, consumerId);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 构建kafka消费者监听工厂</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @paramconsumerInfo 消费者信息</span></span>
<span class="line"><span>     * @return 监听工厂</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>private KafkaMessageListenerContainer&lt;String, String&gt; buildKafkaListenerContainerFactory(KafkaListenerInfoProperties consumerInfo) {</span></span>
<span class="line"><span>        Assert.hasText(consumerInfo.getTopics(), &quot;主题名称不能为空！&quot;);</span></span>
<span class="line"><span>String[] topics = consumerInfo.getTopics().split(&quot;,&quot;);</span></span>
<span class="line"><span>        PgKafkaBatchMessageService pgKafkaBatchMessageService =getPgKafkaBatchMessageService(consumerInfo.getServiceCode());</span></span>
<span class="line"><span>if (pgKafkaBatchMessageService ==null) {</span></span>
<span class="line"><span>thrownewRuntimeException(&quot;主题&quot;+ consumerInfo.getTopics() +&quot;无法找到对应的实现信息&quot;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        ContainerProperties containerProperties =newContainerProperties(topics);</span></span>
<span class="line"><span>// 设置分组</span></span>
<span class="line"><span>        containerProperties.setGroupId(consumerInfo.getGroup());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 设置监听 listener</span></span>
<span class="line"><span>        containerProperties.setMessageListener(newKafkaBatchMessageListener(pgKafkaBatchMessageService));</span></span>
<span class="line"><span>returnnew KafkaMessageListenerContainer&lt;&gt;(consumerFactory, containerProperties);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private PgKafkaBatchMessageService getPgKafkaBatchMessageService(String serviceCode) {</span></span>
<span class="line"><span>        PgKafkaBatchMessageService kafkaBatchMessageService =null;</span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>            kafkaBatchMessageService = applicationContext.getBean(serviceCode, PgKafkaBatchMessageService.class);</span></span>
<span class="line"><span>        } catch (Exception ignore) {}</span></span>
<span class="line"><span>if (kafkaBatchMessageService !=null) {</span></span>
<span class="line"><span>return kafkaBatchMessageService;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>            kafkaBatchMessageService = applicationContext.getBean(PgKafkaBatchMessageService.class);</span></span>
<span class="line"><span>        } catch (Exception ignore) {}</span></span>
<span class="line"><span>return kafkaBatchMessageService;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>然后通过初始化，对配置文件数据进行结构化数据解析，并逐个添加</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.message.kafka.consumer;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import com.kingtsoft.pangu.message.kafka.common.KafkaAutoListenerProperties;</span></span>
<span class="line"><span>import com.kingtsoft.pangu.message.kafka.common.KafkaProperties;</span></span>
<span class="line"><span>import org.springframework.beans.factory.InitializingBean;</span></span>
<span class="line"><span>import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Title: &lt;br&gt;</span></span>
<span class="line"><span> * Description: &lt;br&gt;</span></span>
<span class="line"><span> * Company: KingTang &lt;br&gt;</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * @author 金炀</span></span>
<span class="line"><span> * @version 1.0</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@ConditionalOnProperty(name=&quot;pangu.kafka.auto-listener.enabled&quot;, havingValue=&quot;true&quot;)</span></span>
<span class="line"><span>public class  KafkaListenerInitimplementsInitializingBean {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final   KafkaProperties kafkaProperties;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final   KafkaConsumerManager kafkaConsumerManager;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicKafkaListenerInit(KafkaProperties kafkaProperties,</span></span>
<span class="line"><span>                             KafkaConsumerManager kafkaConsumerManager) {</span></span>
<span class="line"><span>this.kafkaProperties = kafkaProperties;</span></span>
<span class="line"><span>this.kafkaConsumerManager = kafkaConsumerManager;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>private void   afterPropertiesSet() {</span></span>
<span class="line"><span>        KafkaAutoListenerProperties autoListener = kafkaProperties.getAutoListener();</span></span>
<span class="line"><span>if (autoListener.getAutoTopics() ==null) {</span></span>
<span class="line"><span>return;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        autoListener.getAutoTopics().forEach(</span></span>
<span class="line"><span>                kafkaConsumerManager::addConsumer</span></span>
<span class="line"><span>        );</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>剩下都是消费者生产者的一些固定化配置，为kafka自带，这里不再一一赘述。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,40)]))}const c=n(l,[["render",p],["__file","KafKa.html.vue"]]),t=JSON.parse('{"path":"/%E7%9B%98%E5%8F%A4/%E4%B8%AD%E9%97%B4%E4%BB%B6/KafKa.html","title":"Kafka模块","lang":"zh-CN","frontmatter":{"description":"Kafka模块 如何使用 xml yaml java xml yaml java java yaml java 技术原理 java java java","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/%E7%9B%98%E5%8F%A4/%E4%B8%AD%E9%97%B4%E4%BB%B6/KafKa.html"}],["meta",{"property":"og:title","content":"Kafka模块"}],["meta",{"property":"og:description","content":"Kafka模块 如何使用 xml yaml java xml yaml java java yaml java 技术原理 java java java"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-18T07:25:41.000Z"}],["meta",{"property":"article:author","content":"Cotton Eye Joe"}],["meta",{"property":"article:modified_time","content":"2024-11-18T07:25:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Kafka模块\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-18T07:25:41.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cotton Eye Joe\\",\\"url\\":\\"https://github.com/ToDreamr\\"}]}"]]},"headers":[],"git":{"createdTime":1731914741000,"updatedTime":1731914741000,"contributors":[{"name":"九歌天上有","email":"aruixrain@gmail.com","commits":1}]},"readingTime":{"minutes":5.09,"words":1527},"filePathRelative":"盘古/中间件/KafKa.md","localizedDate":"2024年11月18日","excerpt":"","autoDesc":true}');export{c as comp,t as data};
