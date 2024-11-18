import{_ as s,o as a,c as i,d as e}from"./app-BSUomKXw.js";const l={};function p(c,n){return a(),i("div",null,n[0]||(n[0]=[e(`<h1 id="多线程事务" tabindex="-1"><a class="header-anchor" href="#多线程事务"><span>多线程事务</span></a></h1><blockquote><h4 id="如何使用" tabindex="-1"><a class="header-anchor" href="#如何使用"><span>如何使用</span></a></h4></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>入如下模块</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>xml</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>    &lt;groupId&gt;com.kingtsoft.pangu&lt;/groupId&gt;</span></span>
<span class="line"><span>    &lt;artifactId&gt;pangu-spring-tx&lt;/artifactId&gt;</span></span>
<span class="line"><span>    &lt;version&gt;\${pangu.version}&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>业务代码</span></span>
<span class="line"><span>functions泛型可以自己定</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>@Autowired</span></span>
<span class="line"><span>private ThreadTransactionalManager threadTransactionalManager;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public Object testThreadTransactional() {</span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>        List&lt;Function&lt;Object, Object&gt;&gt; functions =new ArrayList&lt;&gt;();</span></span>
<span class="line"><span>        functions.add(a-&gt;doInsert(&quot;333&quot;));</span></span>
<span class="line"><span>        functions.add(a-&gt;doInsert2());</span></span>
<span class="line"><span>        List&lt;Object&gt; lists = threadTransactionalManager.doMultipleFun(functions);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        System.out.println(lists);</span></span>
<span class="line"><span>return lists;</span></span>
<span class="line"><span>    } catch (Exception e) {</span></span>
<span class="line"><span>        e.printStackTrace();</span></span>
<span class="line"><span>throw e;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><h4 id="技术原理" tabindex="-1"><a class="header-anchor" href="#技术原理"><span>技术原理</span></a></h4></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>（后续会考虑改造CompleteFuture使用）</span></span>
<span class="line"><span>把传入逻辑方法抽象为function，先为Function任务创建各自Callable对象，内容为在自带function逻辑基础前后添加事务处理逻辑，步骤如下</span></span>
<span class="line"><span>1、使用DataSourceTransactionManager创建事务状态</span></span>
<span class="line"><span>2、执行业务逻辑并保存返回信息</span></span>
<span class="line"><span>3、进行子线程计数器计数</span></span>
<span class="line"><span>4、设置处理标记</span></span>
<span class="line"><span>5、等待主线程完成</span></span>
<span class="line"><span>6、等待状态结束后根据处理标记使用DataSourceTransactionManager进行事务状态处理</span></span>
<span class="line"><span>（这里不能把状态放到统一对象去主线程处理，会导致上下文不一致。所以采用等待模式）</span></span>
<span class="line"><span>然后对刚才封装的Callable进行多线程执行</span></span>
<span class="line"><span>设置子线程计数器超时的处理并且等待（这个时候异步子线程会各自进行业务逻辑处理并处理计数器，直到计数器归位，这里计数器数值为线程数值）</span></span>
<span class="line"><span>主线程计数器执行，标记业务全部执行完毕</span></span>
<span class="line"><span>各个子线程的步骤6会开始处理，处理后事务计数器将会计数。</span></span>
<span class="line"><span>事务计数器开始计数并使主线程等待，并设置超时。</span></span>
<span class="line"><span>事务计数器计数归为后，主线程将返回值对象进行返回，并通过事务处理标记判断事务处理是否正常。（虽然返回代码里进行了SQL排序，但是因为本身执行就是异步的，所有还是无序的，为了后期拓展没去除此逻辑）</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.spring.tx;</span></span>
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
<span class="line"><span>public class  ThreadTransactionalManager {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final   ExecutorService pool = PanguThreadPoolExecutor.getPanguExecutor().build();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final   DataSourceTransactionManager dataSourceTransactionManager;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final   TransactionDefinition transactionDefinition;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicThreadTransactionalManager(DataSourceTransactionManager dataSourceTransactionManager,</span></span>
<span class="line"><span>                                      TransactionDefinition transactionDefinition) {</span></span>
<span class="line"><span>this.dataSourceTransactionManager = dataSourceTransactionManager;</span></span>
<span class="line"><span>this.transactionDefinition = transactionDefinition;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 多任务执行</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @paramcallableList 任务列表</span></span>
<span class="line"><span>     * @return 返回信息</span></span>
<span class="line"><span>     * @author 金炀</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>private &lt;T&gt; List&lt;T&gt; doMultipleCallable(List&lt;Callable&lt;ThreadReturn&lt;T&gt;&gt;&gt; callableList,</span></span>
<span class="line"><span>                                           AtomicReference&lt;Exception&gt; relEx,</span></span>
<span class="line"><span>                                           CountDownLatch mainLatch,</span></span>
<span class="line"><span>                                           CountDownLatch threadLatches,</span></span>
<span class="line"><span>                                           CountDownLatch trLatches,</span></span>
<span class="line"><span>                                           Atomicboolean   isError,</span></span>
<span class="line"><span>                                           ExecutorService pool) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>        List&lt;Future&lt;T&gt;&gt; list =new ArrayList&lt;&gt;();</span></span>
<span class="line"><span>        List&lt;ThreadReturn&lt;T&gt;&gt; result =new ArrayList&lt;&gt;();</span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>for (Callable&lt;ThreadReturn&lt;T&gt;&gt; callable : callableList) {</span></span>
<span class="line"><span>                pool.execute(() -&gt; {</span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>                        result.add(callable.call());</span></span>
<span class="line"><span>                    } catch (Exception e) {</span></span>
<span class="line"><span>                        e.printStackTrace();</span></span>
<span class="line"><span>thrownewRuntimeException(e);</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//                list.add(pool.submit(callable));</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//            for (Future&lt;T&gt; f : list) {</span></span>
<span class="line"><span>//                result.add(f.get());</span></span>
<span class="line"><span>//            }</span></span>
<span class="line"><span>        } catch (Exception e) {</span></span>
<span class="line"><span>            isError.set(true);</span></span>
<span class="line"><span>            relEx.set(e);</span></span>
<span class="line"><span>        } finally {</span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>// 倒计时锁设置超时时间 30s</span></span>
<span class="line"><span>boolean   await = threadLatches.await(30, TimeUnit.SECONDS);</span></span>
<span class="line"><span>if (!await) {</span></span>
<span class="line"><span>// 等待超时，事务回滚</span></span>
<span class="line"><span>                    isError.set(true);</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            } catch (Exception e) {</span></span>
<span class="line"><span>                isError.set(true);</span></span>
<span class="line"><span>                relEx.set(e);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>// 切换到子线程执行</span></span>
<span class="line"><span>            mainLatch.countDown();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>// 倒计时锁设置超时时间 30s</span></span>
<span class="line"><span>boolean   await = trLatches.await(30, TimeUnit.SECONDS);</span></span>
<span class="line"><span>if (!await) {</span></span>
<span class="line"><span>// 等待超时，事务收尾及返回异常</span></span>
<span class="line"><span>                isError.set(true);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        } catch (Exception e) {</span></span>
<span class="line"><span>            isError.set(true);</span></span>
<span class="line"><span>            relEx.set(e);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (isError.get() &amp;&amp; relEx.get() !=null) {</span></span>
<span class="line"><span>thrownewTipException(&quot;异步任务执行失败！&quot;+ relEx.get().toString());</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>return result.stream().sorted(</span></span>
<span class="line"><span>                Comparator.comparing(ThreadReturn::getSeq)</span></span>
<span class="line"><span>        ).map(ThreadReturn::getT).collect(Collectors.toList());</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 多任务执行(返回值数据无序的)</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @paramfunctions 任务列表</span></span>
<span class="line"><span>     * @return 返回信息</span></span>
<span class="line"><span>     * @author 金炀</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>public &lt;T&gt; List&lt;T&gt; doMultipleFun(List&lt;Function&lt;Object, T&gt;&gt; functions) {</span></span>
<span class="line"><span>        ServletRequestAttributes servletRequestAttributes = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();</span></span>
<span class="line"><span>//设置子线程共享</span></span>
<span class="line"><span>        RequestContextHolder.setRequestAttributes(servletRequestAttributes, true);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        List&lt;Callable&lt;ThreadReturn&lt;T&gt;&gt;&gt; list =new ArrayList&lt;&gt;();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 用于计算子线程提交数量</span></span>
<span class="line"><span>        CountDownLatch trLatches =newCountDownLatch(functions.size());</span></span>
<span class="line"><span>// 用于计算子线程提交数量</span></span>
<span class="line"><span>        CountDownLatch threadLatches =newCountDownLatch(functions.size());</span></span>
<span class="line"><span>// 用于判断主线程是否提交</span></span>
<span class="line"><span>        CountDownLatch mainLatch =newCountDownLatch(1);</span></span>
<span class="line"><span>        Atomicboolean   isError =newAtomicboolean  (false);</span></span>
<span class="line"><span>        AtomicReference&lt;Exception&gt; relEx =new AtomicReference&lt;&gt;();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        AtomicInteger i =newAtomicInteger(0);</span></span>
<span class="line"><span>for (Function&lt;Object, T&gt; function : functions) {</span></span>
<span class="line"><span>            Callable&lt;ThreadReturn&lt;T&gt;&gt; callable = () -&gt; {</span></span>
<span class="line"><span>                TransactionStatus transactionStatus</span></span>
<span class="line"><span>= dataSourceTransactionManager.getTransaction(transactionDefinition);</span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>                    T t = function.apply(null);</span></span>
<span class="line"><span>returnnew ThreadReturn&lt;&gt;(i.incrementAndGet(), t);</span></span>
<span class="line"><span>                } catch (Exception e) {</span></span>
<span class="line"><span>                    isError.set(true);</span></span>
<span class="line"><span>                    relEx.set(e);</span></span>
<span class="line"><span>                } finally {</span></span>
<span class="line"><span>                    threadLatches.countDown();</span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>// 等待主线程执行</span></span>
<span class="line"><span>                        mainLatch.await();</span></span>
<span class="line"><span>                    } catch (Exception e) {</span></span>
<span class="line"><span>                        e.printStackTrace();</span></span>
<span class="line"><span>                        isError.set(true);</span></span>
<span class="line"><span>                        relEx.set(e);</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>// 判断是否有错误，如有错误 就回滚事务</span></span>
<span class="line"><span>if (isError.get()) {</span></span>
<span class="line"><span>                        dataSourceTransactionManager.rollback(transactionStatus);</span></span>
<span class="line"><span>                    } else {</span></span>
<span class="line"><span>                        dataSourceTransactionManager.commit(transactionStatus);</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                    trLatches.countDown();</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>returnnull;</span></span>
<span class="line"><span>            };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            list.add(callable);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>returndoMultipleCallable(list, relEx, mainLatch, threadLatches, trLatches, isError, pool);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/** 预留搞事情的 */</span></span>
<span class="line"><span>classThreadReturn&lt;T&gt; {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private Integer seq;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private T t;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicThreadReturn(Integer seq, T t) {</span></span>
<span class="line"><span>this.seq = seq;</span></span>
<span class="line"><span>this.t = t;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public Integer getSeq() {</span></span>
<span class="line"><span>return seq;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private void   setSeq(Integer seq) {</span></span>
<span class="line"><span>this.seq = seq;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public T getT() {</span></span>
<span class="line"><span>return t;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private void   setT(T t) {</span></span>
<span class="line"><span>this.t = t;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12)]))}const d=s(l,[["render",p],["__file","多线程事务.html.vue"]]),r=JSON.parse('{"path":"/%E7%9B%98%E5%8F%A4/%E6%95%B0%E6%8D%AE%E6%BA%90/%E5%A4%9A%E7%BA%BF%E7%A8%8B%E4%BA%8B%E5%8A%A1.html","title":"多线程事务","lang":"zh-CN","frontmatter":{"description":"多线程事务 如何使用 xml java 技术原理 java","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/%E7%9B%98%E5%8F%A4/%E6%95%B0%E6%8D%AE%E6%BA%90/%E5%A4%9A%E7%BA%BF%E7%A8%8B%E4%BA%8B%E5%8A%A1.html"}],["meta",{"property":"og:title","content":"多线程事务"}],["meta",{"property":"og:description","content":"多线程事务 如何使用 xml java 技术原理 java"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-18T07:25:41.000Z"}],["meta",{"property":"article:author","content":"Cotton Eye Joe"}],["meta",{"property":"article:modified_time","content":"2024-11-18T07:25:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"多线程事务\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-18T07:25:41.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cotton Eye Joe\\",\\"url\\":\\"https://github.com/ToDreamr\\"}]}"]]},"headers":[],"git":{"createdTime":1731914741000,"updatedTime":1731914741000,"contributors":[{"name":"九歌天上有","email":"aruixrain@gmail.com","commits":1}]},"readingTime":{"minutes":3.31,"words":992},"filePathRelative":"盘古/数据源/多线程事务.md","localizedDate":"2024年11月18日","excerpt":"","autoDesc":true}');export{d as comp,r as data};
