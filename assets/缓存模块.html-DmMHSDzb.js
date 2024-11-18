import{_ as n,o as a,c as i,d as e}from"./app-nnBTm0Jw.js";const l={};function p(d,s){return a(),i("div",null,s[0]||(s[0]=[e(`<h1 id="本地缓存模块-工具" tabindex="-1"><a class="header-anchor" href="#本地缓存模块-工具"><span>本地缓存模块(工具)</span></a></h1><blockquote><h4 id="如何使用" tabindex="-1"><a class="header-anchor" href="#如何使用"><span>如何使用</span></a></h4></blockquote><p><strong>方式一</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>业务端引入如下模块</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>xml</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>  &lt;groupId&gt;com.kingtsoft.pangu&lt;/groupId&gt;</span></span>
<span class="line"><span>  &lt;artifactId&gt;pangu-spring-cache&lt;/artifactId&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>默认定义了一个bean，也可动态创建缓存对象</span></span>
<span class="line"><span>    initialCapacity 初始的缓存空间大小</span></span>
<span class="line"><span>    maximumSize 缓存的最大条数</span></span>
<span class="line"><span>    maximumWeight 缓存的最大权重</span></span>
<span class="line"><span>    expireAfterAccess 最后一次写入或访问后，经过固定时间过期</span></span>
<span class="line"><span>    expireAfterWrite 最后一次写入后，经过固定时间过期</span></span>
<span class="line"><span>    refreshAfterWrite 写入后，经过固定时间过期，下次访问返回旧值并触发刷新</span></span>
<span class="line"><span>    weakKeys 打开 key 的弱引用</span></span>
<span class="line"><span>    weakValues 打开 value 的弱引用</span></span>
<span class="line"><span>    softValues 打开 value 的软引用</span></span>
<span class="line"><span>    recordStats 缓存使用统计</span></span>
<span class="line"><span>    expireAfterWrite 和 expireAfterAccess 同时存在时，以 expireAfterWrite 为准。</span></span>
<span class="line"><span>    weakValues 和 softValues 不可以同时使用。</span></span>
<span class="line"><span>    maximumSize 和 maximumWeight 不可以同时使用。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>@Autowired</span></span>
<span class="line"><span>private Cache&lt;String, Object&gt; stringObjectCache;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicstatic LoadingCache&lt;long , User&gt; loadingCache = Caffeine.newBuilder()</span></span>
<span class="line"><span>// 初始的缓存空间大小</span></span>
<span class="line"><span>        .initialCapacity(5)</span></span>
<span class="line"><span>// 缓存的最大条数</span></span>
<span class="line"><span>        .maximumSize(10)</span></span>
<span class="line"><span>        .expireAfterWrite(4, TimeUnit.SECONDS)</span></span>
<span class="line"><span>        .expireAfterAccess(10, TimeUnit.SECONDS)</span></span>
<span class="line"><span>        .refreshAfterWrite(6, TimeUnit.SECONDS)</span></span>
<span class="line"><span>        .recordStats()</span></span>
<span class="line"><span>//设置缓存的移除通知</span></span>
<span class="line"><span>        .removalListener(new RemovalListener&lt;long , User&gt;() {</span></span>
<span class="line"><span>            @Override</span></span>
<span class="line"><span>private void   onRemoval(@Nullable long  key, @Nullable User user, @NonNull RemovalCause removalCause) {</span></span>
<span class="line"><span>                System.out.printf(&quot;Key： %s ，值：%s was removed!原因 (%s) \\n&quot;, key, user, removalCause);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>        .build(id -&gt; {</span></span>
<span class="line"><span>            System.out.println(&quot;缓存未命中，从数据库加载，用户id：&quot;+ id);</span></span>
<span class="line"><span>return User.builder().id(id).userName(&quot;Lily&quot;).age(newRandom().nextInt(20)).build();</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>public Cache&lt;String, Object&gt;caffeineCache(CaffeineProperties caffeineProperties) {</span></span>
<span class="line"><span>        stringObjectCache.put(&quot;a&quot;, &quot;b&quot;);</span></span>
<span class="line"><span>    }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>方式二</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>引入工具类</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>xml</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>  &lt;groupId&gt;com.kingtsoft.pangu&lt;/groupId&gt;</span></span>
<span class="line"><span>  &lt;artifactId&gt;pangu-util-ability&lt;/artifactId&gt;</span></span>
<span class="line"><span>  &lt;version&gt;\${pangu.version}&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.gate.common;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import com.kingtsoft.pangu.util.ability.cache.LRUCache;</span></span>
<span class="line"><span>import org.springframework.cloud.gateway.filter.FilterDefinition;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import java.util.ArrayList;</span></span>
<span class="line"><span>import java.util.List;</span></span>
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
<span class="line"><span>public class  GateFilterContext {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>privatestaticfinal String CACHE_KEY =&quot;filter&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final  static LRUCache FILTER_CACHE =newLRUCache(100);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicstaticvoidregisterFilter(String filterName) {</span></span>
<span class="line"><span>registerFilter(filterName, null);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicstaticvoidregisterFilter(String filterName, Map&lt;String, String&gt; args) {</span></span>
<span class="line"><span>        Object ret = FILTER_CACHE.get(CACHE_KEY);</span></span>
<span class="line"><span>        List&lt;FilterDefinition&gt; filters;</span></span>
<span class="line"><span>if (ret ==null) {</span></span>
<span class="line"><span>            filters =new ArrayList&lt;&gt;();</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            filters = (List&lt;FilterDefinition&gt;) ret;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        FilterDefinition filterDefinition =newFilterDefinition();</span></span>
<span class="line"><span>        filterDefinition.setName(filterName);</span></span>
<span class="line"><span>if (args !=null) {</span></span>
<span class="line"><span>            filterDefinition.setArgs(args);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        filters.add(filterDefinition);</span></span>
<span class="line"><span>        FILTER_CACHE.put(CACHE_KEY, filters);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicstatic List&lt;FilterDefinition&gt; getRegisterFilter() {</span></span>
<span class="line"><span>        Object ret = FILTER_CACHE.get(CACHE_KEY);</span></span>
<span class="line"><span>        List&lt;FilterDefinition&gt; filters;</span></span>
<span class="line"><span>if (ret ==null) {</span></span>
<span class="line"><span>            filters =new ArrayList&lt;&gt;();</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            filters = (List&lt;FilterDefinition&gt;) ret;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>return filters;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicstaticvoidregisterFilterText(String text) {</span></span>
<span class="line"><span>        Object ret = FILTER_CACHE.get(CACHE_KEY);</span></span>
<span class="line"><span>        List&lt;FilterDefinition&gt; filters;</span></span>
<span class="line"><span>if (ret ==null) {</span></span>
<span class="line"><span>            filters =new ArrayList&lt;&gt;();</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            filters = (List&lt;FilterDefinition&gt;) ret;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        FilterDefinition filterDefinition =newFilterDefinition(text);</span></span>
<span class="line"><span>        filters.add(filterDefinition);</span></span>
<span class="line"><span>        FILTER_CACHE.put(CACHE_KEY, filters);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicstaticvoidclearFilter() {</span></span>
<span class="line"><span>        FILTER_CACHE.remove(CACHE_KEY);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><h4 id="技术原理" tabindex="-1"><a class="header-anchor" href="#技术原理"><span>技术原理</span></a></h4></blockquote><p><strong>方式一</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>单纯定义了初始的本地缓存工具</span></span>
<span class="line"><span>解释下工具的内容</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>缓存填充策略</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>缓存的填充方式有三种，手动、同步和异步</span></span>
<span class="line"><span>1、手动加载</span></span>
<span class="line"><span>    手动将值放入缓存后再检索</span></span>
<span class="line"><span>    cache.put(key, dataObject);</span></span>
<span class="line"><span>    dataObject = cache.getIfPresent(key);</span></span>
<span class="line"><span>    我们可以通过 cache.getIfPresent(key) 方法来获取一个key的值，通过</span></span>
<span class="line"><span>cache.put(key, value)方法显示的将数值放入缓存，但是这样会覆盖缓原来key的数据。</span></span>
<span class="line"><span>    建议使用cache.get(key，k - &gt; value) 的方式，get 方法将一个参数为 key </span></span>
<span class="line"><span>的 Function (createExpensiveGraph) 作为参数传入。如果缓存中不存在该键，则调</span></span>
<span class="line"><span>用这个 Function 函数，并将返回值作为该缓存的值插入缓存中。get 方法是以阻塞方式执行，</span></span>
<span class="line"><span>即使多个线程同时请求该值也只会调用一次Function方法。这样可以避免与其他线程的写入竞争，</span></span>
<span class="line"><span>这也是为什么使用 get 优于 getIfPresent 的原因。</span></span>
<span class="line"><span>2、同步加载</span></span>
<span class="line"><span>    这种加载缓存方式使用了与用于初始化值的 Function 的手动策略类似的 get 方法。</span></span>
<span class="line"><span>    Caffeine.newBuilder()</span></span>
<span class="line"><span>        .maximumSize(10)</span></span>
<span class="line"><span>        .build(id -&gt; {</span></span>
<span class="line"><span>            System.out.println(&quot;缓存未命中，从数据库加载，用户id：&quot; + id);</span></span>
<span class="line"><span>            return User.builder().id(id).userName(&quot;Lily&quot;)</span></span>
<span class="line"><span>                .age(new Random().nextInt(20)).build();</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>3、异步加载</span></span>
<span class="line"><span>    此策略与同步加载相似，但是以异步方式执行操作，并返回一个包含值的 CompletableFuture</span></span>
<span class="line"><span>    AsyncLoadingCache asyncLoadingCache=Caffeine.newBuilder()</span></span>
<span class="line"><span>        .maximumSize(10)</span></span>
<span class="line"><span>        .buildAsync(id -&gt; {</span></span>
<span class="line"><span>            System.out.println(&quot;缓存未命中，从数据库加载，用户id：&quot; + id);</span></span>
<span class="line"><span>            return User.builder().id(id).userName(&quot;Lily&quot;).</span></span>
<span class="line"><span>                age(new Random().nextInt(20)).build();</span></span>
<span class="line"><span>        });</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>驱逐策略（eviction）</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>Caffeine提供三类驱逐策略：基于大小（size-based），基于时间（time-based）</span></span>
<span class="line"><span>和基于引用（reference-based）。</span></span>
<span class="line"><span>1、基于大小（size-based）</span></span>
<span class="line"><span>    基于大小驱逐，有两种方式：一种是基于缓存大小，一种是基于权重。</span></span>
<span class="line"><span>    使用Caffeine.maximumSize(long )方法来指定缓存的最大容量。当缓存超出这个容量的时候，</span></span>
<span class="line"><span>会使用Window TinyLfu策略来删除缓存。</span></span>
<span class="line"><span>    也可以使用权重的策略来进行驱逐，可以使用Caffeine.weigher(Weigher) 函数来指定权重，</span></span>
<span class="line"><span>使用Caffeine.maximumWeight(long )函数来指定缓存最大权重值。</span></span>
<span class="line"><span>    maximumWeight 与 maximumSize 不可以同时使用。</span></span>
<span class="line"><span>2、基于时间（Time-based）</span></span>
<span class="line"><span>    Caffeine提供了三种定时驱逐策略：</span></span>
<span class="line"><span>    expireAfterAccess(long , TimeUnit)：在最后一次访问或者写入后开始计时，在指定的时</span></span>
<span class="line"><span>间后过期。假如一直有请求访问该key，那么这个缓存将一直不会过期。</span></span>
<span class="line"><span>    expireAfterWrite(long , TimeUnit)：在最后一次写入缓存后开始计时，在指定的时间后过期。</span></span>
<span class="line"><span>    expireAfter(Expiry)：自定义策略，过期时间由Expiry实现独自计算。</span></span>
<span class="line"><span>3、基于引用（reference-based）</span></span>
<span class="line"><span>    我们可以将缓存的驱逐配置成基于垃圾回收器。为此，我们可以将key 和 value 配置为弱引用</span></span>
<span class="line"><span>或只将值配置成软引用。</span></span>
<span class="line"><span>    注意：AsyncLoadingCache不支持弱引用和软引用。</span></span>
<span class="line"><span>    Caffeine.weakKeys() 使用弱引用存储key。如果没有其他地方对该key有强引用，那么该缓存就</span></span>
<span class="line"><span>会被垃圾回收器回收。由于垃圾回收器只依赖于身份(identity)相等，因此这会导致整个缓存使用身份 </span></span>
<span class="line"><span>(==) 相等来比较 key，而不是使用 equals()。</span></span>
<span class="line"><span>    Caffeine.weakValues() 使用弱引用存储value。如果没有其他地方对该value有强引用，那么</span></span>
<span class="line"><span>该缓存就会被垃圾回收器回收。由于垃圾回收器只依赖于身份(identity)相等，因此这会导致整个缓存使</span></span>
<span class="line"><span>用身份 (==) 相等来比较 key，而不是使用 equals()。</span></span>
<span class="line"><span>    Caffeine.softValues() 使用软引用存储value。当内存满后，软引用的对象使用最近最少使用</span></span>
<span class="line"><span>(least-recently-used ) 的方式进行垃圾回收。由于使用软引用是需要等到内存满了才进行回收，所</span></span>
<span class="line"><span>以我们通常建议给缓存配置一个使用内存的最大值。softValues() 将使用身份相等(identity) (==)</span></span>
<span class="line"><span>而不是equals() 来比较值。</span></span>
<span class="line"><span>    注意：Caffeine.weakValues()和Caffeine.softValues()不可以一起使用。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>手动删除缓存</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>任何时候，你都可以主动使缓存失效，而不用等待缓存被驱逐</span></span>
<span class="line"><span>// 单个key</span></span>
<span class="line"><span>cache.invalidate(key)</span></span>
<span class="line"><span>// 批量key</span></span>
<span class="line"><span>cache.invalidateAll(keys)</span></span>
<span class="line"><span>// 所有key</span></span>
<span class="line"><span>cache.invalidateAll()</span></span>
<span class="line"><span>统计</span></span>
<span class="line"><span>Cache cache = Caffeine.newBuilder()</span></span>
<span class="line"><span>    .maximumSize(10_000)</span></span>
<span class="line"><span>    .recordStats()</span></span>
<span class="line"><span>    .build();</span></span>
<span class="line"><span>通过使用Caffeine.recordStats(), 可以转化成一个统计的集合。通过 Cache.stats() 返回一</span></span>
<span class="line"><span>个CacheStats。CacheStats提供以下统计方法：</span></span>
<span class="line"><span>    hitRate()：返回缓存命中率</span></span>
<span class="line"><span>    evictionCount()：缓存回收数量</span></span>
<span class="line"><span>    averageLoadPenalty()：加载新值的平均时间</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>方式二</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    直接继承LinkedHashMap，不需要引入第三方包，适合一些比较简单的场景。内部以可重入锁</span></span>
<span class="line"><span>ReentrantReadWriteLock进行了并发控制。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.util.ability.cache;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import java.util.LinkedHashMap;</span></span>
<span class="line"><span>import java.util.Map;</span></span>
<span class="line"><span>import java.util.concurrent.locks.Lock;</span></span>
<span class="line"><span>import java.util.concurrent.locks.ReentrantReadWriteLock;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Title: &lt;br&gt;</span></span>
<span class="line"><span> * Description: &lt;br&gt;</span></span>
<span class="line"><span> * Company: KingTang &lt;br&gt;</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * @author 金炀</span></span>
<span class="line"><span> * @version 1.0</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public class  LRUCacheextendsLinkedHashMap {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 可重入读写锁，保证并发读写安全性</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>private final   ReentrantReadWriteLock readWriteLock =newReentrantReadWriteLock();</span></span>
<span class="line"><span>private final   Lock readLock = readWriteLock.readLock();</span></span>
<span class="line"><span>private final   Lock writeLock = readWriteLock.writeLock();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 缓存大小限制</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>private final  int maxSize;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicLRUCache(intmaxSize) {</span></span>
<span class="line"><span>super(maxSize +1, 1.0f, true);</span></span>
<span class="line"><span>this.maxSize = maxSize;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>public Object get(Object key) {</span></span>
<span class="line"><span>        readLock.lock();</span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>returnsuper.get(key);</span></span>
<span class="line"><span>        } finally {</span></span>
<span class="line"><span>            readLock.unlock();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>public Object put(Object key, Object value) {</span></span>
<span class="line"><span>        writeLock.lock();</span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>returnsuper.put(key, value);</span></span>
<span class="line"><span>        } finally {</span></span>
<span class="line"><span>            writeLock.unlock();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>protectedboolean  removeEldestEntry(Map.Entry eldest) {</span></span>
<span class="line"><span>returnthis.size() &gt; maxSize;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28)]))}const r=n(l,[["render",p],["__file","缓存模块.html.vue"]]),t=JSON.parse('{"path":"/%E7%9B%98%E5%8F%A4/%E7%BB%84%E4%BB%B6%E4%BB%8B%E7%BB%8D/%E7%BC%93%E5%AD%98%E6%A8%A1%E5%9D%97.html","title":"本地缓存模块(工具)","lang":"zh-CN","frontmatter":{"description":"本地缓存模块(工具) 如何使用 方式一 xml java 方式二 xml java 技术原理 方式一 缓存填充策略 驱逐策略（eviction） 手动删除缓存 方式二 java","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/%E7%9B%98%E5%8F%A4/%E7%BB%84%E4%BB%B6%E4%BB%8B%E7%BB%8D/%E7%BC%93%E5%AD%98%E6%A8%A1%E5%9D%97.html"}],["meta",{"property":"og:title","content":"本地缓存模块(工具)"}],["meta",{"property":"og:description","content":"本地缓存模块(工具) 如何使用 方式一 xml java 方式二 xml java 技术原理 方式一 缓存填充策略 驱逐策略（eviction） 手动删除缓存 方式二 java"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-18T07:25:41.000Z"}],["meta",{"property":"article:author","content":"Cotton Eye Joe"}],["meta",{"property":"article:modified_time","content":"2024-11-18T07:25:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"本地缓存模块(工具)\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-18T07:25:41.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cotton Eye Joe\\",\\"url\\":\\"https://github.com/ToDreamr\\"}]}"]]},"headers":[],"git":{"createdTime":1731914741000,"updatedTime":1731914741000,"contributors":[{"name":"九歌天上有","email":"aruixrain@gmail.com","commits":1}]},"readingTime":{"minutes":5.94,"words":1781},"filePathRelative":"盘古/组件介绍/缓存模块.md","localizedDate":"2024年11月18日","excerpt":"","autoDesc":true}');export{r as comp,t as data};
