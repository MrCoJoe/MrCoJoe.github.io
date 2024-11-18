import{_ as n,o as a,c as e,d as i}from"./app-Bym8v7z8.js";const l={};function p(d,s){return a(),e("div",null,s[0]||(s[0]=[i(`<h1 id="delay模块" tabindex="-1"><a class="header-anchor" href="#delay模块"><span>Delay模块</span></a></h1><blockquote><h4 id="如何使用" tabindex="-1"><a class="header-anchor" href="#如何使用"><span>如何使用</span></a></h4></blockquote><p><strong>方式一</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>业务引入如下模块</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>xml</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>  &lt;groupId&gt;com.kingtsoft.pangu&lt;/groupId&gt;</span></span>
<span class="line"><span>  &lt;artifactId&gt;pangu-spring-delay&lt;/artifactId&gt;</span></span>
<span class="line"><span>  &lt;version&gt;\${pangu.version}&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>实现DelayTaskHandler</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.frame.simple.test.service;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import com.kingtsoft.pangu.spring.delay.DelayTask;</span></span>
<span class="line"><span>import com.kingtsoft.pangu.spring.delay.DelayTaskHandler;</span></span>
<span class="line"><span>import org.springframework.stereotype.Component;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Title: &lt;br&gt;</span></span>
<span class="line"><span> * Description: &lt;br&gt;</span></span>
<span class="line"><span> * Company: KingTang &lt;br&gt;</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * @author 金炀</span></span>
<span class="line"><span> * @version 1.0</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>public class  DelayTaskHandlerImplimplementsDelayTaskHandler {</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>private void   dealTask(DelayTask delayTask) {</span></span>
<span class="line"><span>// 根据delayTask分配业务任务</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>任务产生端直接塞任务信息进入</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>public Object testMybatis() {</span></span>
<span class="line"><span>        DelayTaskProducer.delayTask(&quot;1&quot;, 3L, 1, &quot;abc&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	// 这是实际执行的方法</span></span>
<span class="line"><span>publicstaticvoiddelayTask(String id, long  time, Integer type, String dataStr) {</span></span>
<span class="line"><span>//创建任务</span></span>
<span class="line"><span>        DelayTask delayTask =newDelayTask();</span></span>
<span class="line"><span>        delayTask.setId(id)</span></span>
<span class="line"><span>                .setTime(System.currentTimeMillis() + time *1000)</span></span>
<span class="line"><span>                .setType(type)</span></span>
<span class="line"><span>                .setDataStr(dataStr);</span></span>
<span class="line"><span>        log.info(&quot;=============入延时队列,{}&quot;, delayTask);</span></span>
<span class="line"><span>//任务入队</span></span>
<span class="line"><span>boolean   offer = delayQueue.offer(delayTask);</span></span>
<span class="line"><span>if (offer) {</span></span>
<span class="line"><span>            log.info(&quot;=============入延时队列成功,{}&quot;, delayQueue);</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            log.info(&quot;=============入延时队列失败&quot;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>id   业务id</span></span>
<span class="line"><span>time 消费时间  单位：毫秒</span></span>
<span class="line"><span>type 业务类型</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>方式二</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>引入工具类</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>xml</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>  &lt;groupId&gt;com.kingtsoft.pangu&lt;/groupId&gt;</span></span>
<span class="line"><span>  &lt;artifactId&gt;pangu-util-ability&lt;/artifactId&gt;</span></span>
<span class="line"><span>  &lt;version&gt;\${pangu.version}&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    使用com.kingtsoft.pangu.util.ability.pool.PanguScheduledThreadPoolExecutor类</span></span>
<span class="line"><span>这里入参5为核心线程池的数量</span></span>
<span class="line"><span>定义一个Runnable对象，然后调用schedule方法，后面两个参数25为延迟执行时间，</span></span>
<span class="line"><span>TimeUnit.MINUTES代表了单位，可以根据实际情况配置</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>public class  VideoStreamService {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final   ScheduledExecutorService service = PanguScheduledThreadPoolExecutor.getPanguExecutor(5).build();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private void  createSchedule(String uuid) {</span></span>
<span class="line"><span>        Runnable task = () -&gt;clearFile(uuid);</span></span>
<span class="line"><span>        service.schedule(task, 25, TimeUnit.MINUTES);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><h4 id="技术原理" tabindex="-1"><a class="header-anchor" href="#技术原理"><span>技术原理</span></a></h4></blockquote><p><strong>方式一</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>项目启动时候会定义一个队列监听，队列数据结构定义在DelayTask中。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.spring.delay;</span></span>
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
<span class="line"><span>public class  DelayTaskConsumerimplementsCommandLineRunner {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Autowired(required=false)</span></span>
<span class="line"><span>private DelayTaskHandler delayTaskHandler;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final   ExecutorService pool = PanguThreadPoolExecutor.getPanguExecutor(</span></span>
<span class="line"><span>2, 5, 30, TimeUnit.MINUTES, 5).build();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    @SuppressWarnings(&quot;InfiniteLoopStatement&quot;)</span></span>
<span class="line"><span>private void   run(String... args) {</span></span>
<span class="line"><span>//获取同一个put进去任务的队列</span></span>
<span class="line"><span>        DelayQueue&lt;DelayTask&gt; delayQueue = DelayTaskQueue.getInstance();</span></span>
<span class="line"><span>        DelayTaskProducer.delayQueue = delayQueue;</span></span>
<span class="line"><span>        pool.execute(</span></span>
<span class="line"><span>                () -&gt; {</span></span>
<span class="line"><span>for (; ;) {</span></span>
<span class="line"><span>// 从延迟队列的头部获取已经过期的消息</span></span>
<span class="line"><span>// 如果暂时没有过期消息或者队列为空，则take()方法会被阻塞，直到有过期的消息为止</span></span>
<span class="line"><span>                        DelayTask delayTask =null;//阻塞</span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>                            delayTask = delayQueue.take();</span></span>
<span class="line"><span>                        } catch (InterruptedException e) {</span></span>
<span class="line"><span>                            e.printStackTrace();</span></span>
<span class="line"><span>                        }</span></span>
<span class="line"><span>                        delayTaskHandler.dealTask(delayTask);</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>        );</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>boolean   offer = delayQueue.offer(delayTask);如下图，其实就是拿传入对象的compareTo在比较，以处理延迟逻辑。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>privatestatic&lt;T&gt;voidsiftUpComparable(int k, T x, Object[] es) {</span></span>
<span class="line"><span>    Comparable&lt;?superT&gt; key = (Comparable&lt;?super T&gt;) x;</span></span>
<span class="line"><span>while (k &gt;0) {</span></span>
<span class="line"><span>int parent = (k -1) &gt;&gt;&gt;1;</span></span>
<span class="line"><span>        Object e = es[parent];</span></span>
<span class="line"><span>if (key.compareTo((T) e) &gt;=0)</span></span>
<span class="line"><span>break;</span></span>
<span class="line"><span>        es[k] = e;</span></span>
<span class="line"><span>        k = parent;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    es[k] = key;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>所以在定义的Delayed继承类中重写compareTo方法，达到延迟效果。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.spring.delay;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import lombok.Data;</span></span>
<span class="line"><span>import lombok.experimental.Accessors;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import java.util.concurrent.Delayed;</span></span>
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
<span class="line"><span>@Data</span></span>
<span class="line"><span>@Accessors(chain=true)</span></span>
<span class="line"><span>public class  DelayTaskimplementsDelayed {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private String id;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private long  time;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private Integer type;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private String dataStr;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>publiclong getDelay(TimeUnit unit) {</span></span>
<span class="line"><span>// 计算该任务距离过期还剩多少时间</span></span>
<span class="line"><span>long  remaining = time - System.currentTimeMillis();</span></span>
<span class="line"><span>return unit.convert(remaining, TimeUnit.MILLISECONDS);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>publicintcompareTo(Delayed o) {</span></span>
<span class="line"><span>// 比较、排序：对任务的延时大小进行排序，将延时时间最小的任务放到队列头部</span></span>
<span class="line"><span>return (int) (this.getDelay(TimeUnit.MILLISECONDS) - o.getDelay(TimeUnit.MILLISECONDS));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>方式二</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>核心就是内部构造了ScheduledThreadPoolExecutor对象</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.util.ability.pool;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import java.util.concurrent.*;</span></span>
<span class="line"><span>import java.util.concurrent.atomic.AtomicInteger;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Title: &lt;br&gt;</span></span>
<span class="line"><span> * Description: &lt;br&gt;</span></span>
<span class="line"><span> * Company: wondersgroup.com &lt;br&gt;</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * @author 金炀</span></span>
<span class="line"><span> * @version 1.0</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public class  PanguScheduledThreadPoolExecutor {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>privateint corePoolSize =5;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private ScheduledThreadPoolExecutor pool =null;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>privatePanguScheduledThreadPoolExecutor() {</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>privatePanguScheduledThreadPoolExecutor(intcorePoolSize) {</span></span>
<span class="line"><span>this.corePoolSize = corePoolSize;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public PanguScheduledThreadPoolExecutor corePoolSize(intcorePoolSize) {</span></span>
<span class="line"><span>this.corePoolSize = corePoolSize;</span></span>
<span class="line"><span>returnthis;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicstatic PanguScheduledThreadPoolExecutor getPanguExecutor() {</span></span>
<span class="line"><span>returnnewPanguScheduledThreadPoolExecutor();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicstatic PanguScheduledThreadPoolExecutor getPanguExecutor(intcorePoolSize) {</span></span>
<span class="line"><span>returnnewPanguScheduledThreadPoolExecutor(corePoolSize);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 线程池初始化方法</span></span>
<span class="line"><span>     * &lt;p&gt;</span></span>
<span class="line"><span>     * 1.当线程池小于corePoolSize时，新提交任务将创建一个新线程执行任务，即使此时线程池中存在空闲线程。</span></span>
<span class="line"><span>     * 2.当线程池达到corePoolSize时，新提交任务将被放入workQueue中，等待线程池中任务调度执行</span></span>
<span class="line"><span>     * 3.当workQueue已满，且maximumPoolSize&gt;corePoolSize时，新提交任务会创建新线程执行任务</span></span>
<span class="line"><span>     * 4.当提交任务数超过maximumPoolSize时，新提交任务由RejectedExecutionHandler处理</span></span>
<span class="line"><span>     * 5.当线程池中超过corePoolSize线程，空闲时间达到keepAliveTime时，关闭空闲线程</span></span>
<span class="line"><span>     * 6.当设置allowCoreThreadTimeOut(true)时，线程池中corePoolSize线程空闲时间达到keepAliveTime也将关闭</span></span>
<span class="line"><span>     * &lt;p&gt;</span></span>
<span class="line"><span>     * corePoolSize 核心线程池大小----5</span></span>
<span class="line"><span>     * maximumPoolSize 最大线程池大小----10</span></span>
<span class="line"><span>     * keepAliveTime 线程池中超过corePoolSize数目的空闲线程最大存活时间----30+单位TimeUnit</span></span>
<span class="line"><span>     * TimeUnit keepAliveTime时间单位----TimeUnit.MINUTES</span></span>
<span class="line"><span>     * workQueue 阻塞队列----new ArrayBlockingQueue&lt;Runnable&gt;(5)====5容量的阻塞队列</span></span>
<span class="line"><span>     * threadFactory 新建线程工厂----new CustomThreadFactory()====定制的线程工厂</span></span>
<span class="line"><span>     * rejectedExecutionHandler 当提交任务数超过maxmumPoolSize+workQueue之和时,</span></span>
<span class="line"><span>     * 即当提交第41个任务时(前面线程都没有执行完,此测试方法中用sleep(100)),</span></span>
<span class="line"><span>     * 任务会交给RejectedExecutionHandler来处理</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>public ScheduledExecutorService build() {</span></span>
<span class="line"><span>        pool =newScheduledThreadPoolExecutor(</span></span>
<span class="line"><span>                corePoolSize,</span></span>
<span class="line"><span>newPanguThreadFactory(),</span></span>
<span class="line"><span>newPanguRejectedExecutionHandler());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>return pool;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private void   destory() {</span></span>
<span class="line"><span>if (pool !=null) {</span></span>
<span class="line"><span>            pool.shutdownNow();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>privatestaticclassPanguThreadFactoryimplementsThreadFactory {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final   AtomicInteger count =newAtomicInteger(0);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        @Override</span></span>
<span class="line"><span>public Thread newThread(Runnable r) {</span></span>
<span class="line"><span>            Thread t =newThread(r);</span></span>
<span class="line"><span>            String threadName = PanguThreadPoolExecutor.class.getSimpleName() + count.addAndGet(1);</span></span>
<span class="line"><span>            t.setName(threadName);</span></span>
<span class="line"><span>return t;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>privatestaticclassPanguRejectedExecutionHandlerimplementsRejectedExecutionHandler {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        @Override</span></span>
<span class="line"><span>private void   rejectedExecution(Runnable r, ThreadPoolExecutor executor) {</span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>// 核心改造点，由blockingqueue的offer改成put阻塞方法</span></span>
<span class="line"><span>                executor.getQueue().put(r);</span></span>
<span class="line"><span>            } catch (InterruptedException e) {</span></span>
<span class="line"><span>                e.printStackTrace();</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,35)]))}const r=n(l,[["render",p],["__file","延时模块.html.vue"]]),t=JSON.parse('{"path":"/%E7%9B%98%E5%8F%A4/%E7%BB%84%E4%BB%B6%E4%BB%8B%E7%BB%8D/%E5%BB%B6%E6%97%B6%E6%A8%A1%E5%9D%97.html","title":"Delay模块","lang":"zh-CN","frontmatter":{"description":"Delay模块 如何使用 方式一 xml java java 方式二 xml java 技术原理 方式一 java java java 方式二 java","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/%E7%9B%98%E5%8F%A4/%E7%BB%84%E4%BB%B6%E4%BB%8B%E7%BB%8D/%E5%BB%B6%E6%97%B6%E6%A8%A1%E5%9D%97.html"}],["meta",{"property":"og:title","content":"Delay模块"}],["meta",{"property":"og:description","content":"Delay模块 如何使用 方式一 xml java java 方式二 xml java 技术原理 方式一 java java java 方式二 java"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-18T07:25:41.000Z"}],["meta",{"property":"article:author","content":"Cotton Eye Joe"}],["meta",{"property":"article:modified_time","content":"2024-11-18T07:25:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Delay模块\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-18T07:25:41.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cotton Eye Joe\\",\\"url\\":\\"https://github.com/ToDreamr\\"}]}"]]},"headers":[],"git":{"createdTime":1731914741000,"updatedTime":1731914741000,"contributors":[{"name":"九歌天上有","email":"aruixrain@gmail.com","commits":1}]},"readingTime":{"minutes":3.79,"words":1137},"filePathRelative":"盘古/组件介绍/延时模块.md","localizedDate":"2024年11月18日","excerpt":"","autoDesc":true}');export{r as comp,t as data};
