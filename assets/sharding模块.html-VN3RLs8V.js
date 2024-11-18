import{_ as n,o as a,c as i,d as e}from"./app-C-SlHR5I.js";const l={};function p(r,s){return a(),i("div",null,s[0]||(s[0]=[e(`<h1 id="shardingsphere模块" tabindex="-1"><a class="header-anchor" href="#shardingsphere模块"><span>Shardingsphere模块</span></a></h1><blockquote><h4 id="如何使用" tabindex="-1"><a class="header-anchor" href="#如何使用"><span>如何使用</span></a></h4></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>引入pangu-data-shardingjdbc模块</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>xml</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>  &lt;groupId&gt;com.kingtsoft.pangu&lt;/groupId&gt;</span></span>
<span class="line"><span>  &lt;artifactId&gt;pangu-data-shardingjdbc&lt;/artifactId&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>业务代码如下</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>@DS(&quot;mysql&quot;)</span></span>
<span class="line"><span>@Transactional(rollbackFor= Exception.class)</span></span>
<span class="line"><span>@ShardingTransactionType(TransactionType.BASE)</span></span>
<span class="line"><span>public Object testSeata() {</span></span>
<span class="line"><span>    log.info(&quot;当前 XID: {}&quot;, RootContext.getXID());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 读写分离分页测试</span></span>
<span class="line"><span>    Page&lt;OisRegSchedulePool&gt; page =new Page&lt;&gt;(3, 1);</span></span>
<span class="line"><span>    IPage&lt;OisRegSchedulePool&gt; oisRegSchedulePools2 = oisRegSchedulePoolMapper.selectListPageRel(page, 1);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    PageInfo&lt;OisRegSchedulePool&gt; oisRegSchedulePools = PageHelper.startPage(1, 1)</span></span>
<span class="line"><span>            .doSelectPageInfo(() -&gt; oisRegSchedulePoolMapper.selectListRel(1));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 多数据源+读写分离+分布式事务测试</span></span>
<span class="line"><span>doInsert(7L);</span></span>
<span class="line"><span>   PubUser pubUser =newPubUser();</span></span>
<span class="line"><span>   pubUser.setModifyBy(1L);</span></span>
<span class="line"><span>   pubUser.setUserCode(&quot;999&quot;);</span></span>
<span class="line"><span>   pubUser.setPwd(&quot;123&quot;);</span></span>
<span class="line"><span>   pubUser.setState(1);</span></span>
<span class="line"><span>int i = pubUserMapper.insert(pubUser);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>returntrue;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>配置如下</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>yaml</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>spring:</span></span>
<span class="line"><span>shardingsphere:</span></span>
<span class="line"><span># 参数配置，显示sql</span></span>
<span class="line"><span>props:</span></span>
<span class="line"><span>sql.show: true</span></span>
<span class="line"><span># 配置数据源</span></span>
<span class="line"><span>datasource:</span></span>
<span class="line"><span># 给每个数据源取别名，sys*</span></span>
<span class="line"><span>names: sys1,sys2</span></span>
<span class="line"><span># 给master-sys1每个数据源配置数据库连接信息</span></span>
<span class="line"><span>sys1:</span></span>
<span class="line"><span># 配置hikari数据源</span></span>
<span class="line"><span>type: com.zaxxer.hikari.HikariDataSource</span></span>
<span class="line"><span>driverClassName: com.mysql.cj.jdbc.Driver</span></span>
<span class="line"><span>jdbcUrl: jdbc:mysql://10.11.50.111:3306/kw_sys?characterEncoding=utf8&amp;serverTimezone=Asia/Shanghai&amp;allowMultiQueries=true</span></span>
<span class="line"><span>username: root</span></span>
<span class="line"><span>password: xxx</span></span>
<span class="line"><span>maxPoolSize: 100</span></span>
<span class="line"><span>minPoolSize: 5</span></span>
<span class="line"><span># 配置sys2-slave</span></span>
<span class="line"><span>sys2:</span></span>
<span class="line"><span>type: com.zaxxer.hikari.HikariDataSource</span></span>
<span class="line"><span>driverClassName: com.mysql.cj.jdbc.Driver</span></span>
<span class="line"><span>jdbcUrl: jdbc:mysql://10.11.50.111:3306/kw_sys?characterEncoding=utf8&amp;serverTimezone=Asia/Shanghai&amp;allowMultiQueries=true</span></span>
<span class="line"><span>username: root</span></span>
<span class="line"><span>password: xxx</span></span>
<span class="line"><span>maxPoolSize: 100</span></span>
<span class="line"><span>minPoolSize: 5</span></span>
<span class="line"><span># 配置默认数据源ds1</span></span>
<span class="line"><span>sharding:</span></span>
<span class="line"><span># 配置数据源的读写分离，但是数据库一定要做主从复制</span></span>
<span class="line"><span>master-slave-rules:</span></span>
<span class="line"><span># 配置主从名称，可以任意取名字</span></span>
<span class="line"><span>ms:</span></span>
<span class="line"><span># 配置主库master，负责数据的写入</span></span>
<span class="line"><span>master-data-source-name: sys1</span></span>
<span class="line"><span># 配置从库slave节点</span></span>
<span class="line"><span>slave-data-source-names: sys2</span></span>
<span class="line"><span># 配置slave节点的负载均衡均衡策略，采用轮询机制</span></span>
<span class="line"><span>load-balance-algorithm-type: round_robin</span></span>
<span class="line"><span># 默认数据源，主要用于写，注意一定要配置读写分离 ,注意：如果不配置，那么就会把三个节点都当做从slave节点，新增，修改和删除会出错。</span></span>
<span class="line"><span>default-data-source-name: ms</span></span>
<span class="line"><span># 配置分表的规则</span></span>
<span class="line"><span>tables:</span></span>
<span class="line"><span>ois_reg_schedule_pool:</span></span>
<span class="line"><span>actual-data-nodes: ms.ois_reg_schedule_pool_$-&gt;{1..2}</span></span>
<span class="line"><span>table-strategy:</span></span>
<span class="line"><span>standard:</span></span>
<span class="line"><span>shardingColumn: pool_sn</span></span>
<span class="line"><span>preciseAlgorithmClassName: com.kingtsoft.pangu.data.shardingjdbc.SnPreciseShardingAlgorithm</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    若需要配置seata支持，则需要在resource目录下配置seata.conf文件(很坑是一点是源码中它只会</span></span>
<span class="line"><span>去识别这个文件内的seata配置，不存在其他地方的配置读取)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>client {</span></span>
<span class="line"><span>    application.id = pangu-frame-simple-a</span></span>
<span class="line"><span>    transaction.service.group = pg_tx_group</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><h4 id="技术原理" tabindex="-1"><a class="header-anchor" href="#技术原理"><span>技术原理</span></a></h4></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    因为数据源我么已经选择使用pangu-data-dynamic进行托管，所以我们是在动态数据源</span></span>
<span class="line"><span>基础上再添加shardingjdbc，让shardingjdbc的数据源也作为动态数据源之一进行托管。</span></span>
<span class="line"><span>保证数据切面等操作情况下还能保证数据源正常切换及分布式事务的保证，它默认有个seata</span></span>
<span class="line"><span>事务模块为sharding-transaction-base-seata-at可以通过引用</span></span>
<span class="line"><span>pangu-data-shardingjdbc-seata获取功能。(核心配置如下)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.data.shardingjdbc;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import com.baomidou.dynamic.datasource.DynamicRoutingDataSource;</span></span>
<span class="line"><span>import com.baomidou.dynamic.datasource.provider.AbstractDataSourceProvider;</span></span>
<span class="line"><span>import com.baomidou.dynamic.datasource.provider.DynamicDataSourceProvider;</span></span>
<span class="line"><span>import com.baomidou.dynamic.datasource.spring.boot.autoconfigure.DataSourceProperty;</span></span>
<span class="line"><span>import com.baomidou.dynamic.datasource.spring.boot.autoconfigure.DynamicDataSourceAutoConfiguration;</span></span>
<span class="line"><span>import com.baomidou.dynamic.datasource.spring.boot.autoconfigure.DynamicDataSourceProperties;</span></span>
<span class="line"><span>import org.springframework.boot.SpringBootConfiguration;</span></span>
<span class="line"><span>import org.springframework.boot.autoconfigure.AutoConfigureBefore;</span></span>
<span class="line"><span>import org.springframework.boot.autoconfigure.condition.ConditionalOnClass;</span></span>
<span class="line"><span>import org.springframework.context.annotation.Bean;</span></span>
<span class="line"><span>import org.springframework.context.annotation.Configuration;</span></span>
<span class="line"><span>import org.springframework.context.annotation.Primary;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import javax.annotation.Resource;</span></span>
<span class="line"><span>import javax.sql.DataSource;</span></span>
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
<span class="line"><span>@Configuration</span></span>
<span class="line"><span>@ConditionalOnClass(DynamicRoutingDataSource.class)</span></span>
<span class="line"><span>@AutoConfigureBefore({DynamicDataSourceAutoConfiguration.class, SpringBootConfiguration.class})</span></span>
<span class="line"><span>public class  DataSourceAutoConfiguration {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 动态数据源配置项</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    @Resource</span></span>
<span class="line"><span>private DynamicDataSourceProperties dynamicDataSourceProperties;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * shardingjdbc有四种数据源，需要根据业务注入不同的数据源</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * &lt;p&gt;1. 未使用分片, 脱敏的名称(默认): shardingDataSource;</span></span>
<span class="line"><span>     * &lt;p&gt;2. 主从数据源: masterSlaveDataSource;</span></span>
<span class="line"><span>     * &lt;p&gt;3. 脱敏数据源：encryptDataSource;</span></span>
<span class="line"><span>     * &lt;p&gt;4. 影子数据源：shadowDataSource</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * shardingjdbc默认就是shardingDataSource</span></span>
<span class="line"><span>     *  如果需要设置其他的可以使用</span></span>
<span class="line"><span>     * @Resource(value=&quot;&quot;) 设置</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    @Resource</span></span>
<span class="line"><span>    DataSource shardingDataSource;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 将shardingDataSource放到了多数据源（dataSourceMap）中</span></span>
<span class="line"><span>     * 注意有个版本的bug，3.1.1版本 不会进入loadDataSources 方法，这样就一直造成数据源注册失败</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @author 金炀</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>public DynamicDataSourceProvider dynamicDataSourceProvider() {</span></span>
<span class="line"><span>        Map&lt;String, DataSourceProperty&gt; datasourceMap = dynamicDataSourceProperties.getDatasource();</span></span>
<span class="line"><span>returnnewAbstractDataSourceProvider() {</span></span>
<span class="line"><span>            @Override</span></span>
<span class="line"><span>public Map&lt;String, DataSource&gt; loadDataSources() {</span></span>
<span class="line"><span>                Map&lt;String, DataSource&gt; dataSourceMap =createDataSourceMap(datasourceMap);</span></span>
<span class="line"><span>// 将 shardingjdbc 管理的数据源也交给动态数据源管理</span></span>
<span class="line"><span>                dataSourceMap.put(ShardingConst.SHARDING_DATA_SOURCE_NAME, shardingDataSource);</span></span>
<span class="line"><span>return dataSourceMap;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        };</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 将动态数据源设置为首选的</span></span>
<span class="line"><span>     * 当spring存在多个数据源时, 自动注入的是首选的对象</span></span>
<span class="line"><span>     * 设置为主要的数据源之后，就可以支持shardingjdbc原生的配置方式了</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @return sharding 数据源</span></span>
<span class="line"><span>     * @author 金炀</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    @Primary</span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>public DataSource dataSource() {</span></span>
<span class="line"><span>        DynamicRoutingDataSource dataSource =newDynamicRoutingDataSource();</span></span>
<span class="line"><span>        dataSource.setPrimary(dynamicDataSourceProperties.getPrimary());</span></span>
<span class="line"><span>        dataSource.setStrict(dynamicDataSourceProperties.getStrict());</span></span>
<span class="line"><span>        dataSource.setStrategy(dynamicDataSourceProperties.getStrategy());</span></span>
<span class="line"><span>        dataSource.setP6spy(dynamicDataSourceProperties.getP6spy());</span></span>
<span class="line"><span>        dataSource.setSeata(dynamicDataSourceProperties.getSeata());</span></span>
<span class="line"><span>return dataSource;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    preciseAlgorithmClassName配置为分片原则，可以仿造下面案例进行自定义，</span></span>
<span class="line"><span>比如 poolSn &lt;= 100 ? &quot;1&quot; : &quot;2&quot;;这里100为业务规则，1与2为表名规则，数据库</span></span>
<span class="line"><span>内分别有ois_reg_schedule_pool_1与ois_reg_schedule_pool_2表，可以根据</span></span>
<span class="line"><span>结果的1或2决定操作哪张表</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.data.shardingjdbc;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import lombok.extern.slf4j.Slf4j;</span></span>
<span class="line"><span>import org.apache.shardingsphere.api.sharding.standard.PreciseShardingAlgorithm;</span></span>
<span class="line"><span>import org.apache.shardingsphere.api.sharding.standard.PreciseShardingValue;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import java.text.NumberFormat;</span></span>
<span class="line"><span>import java.util.Calendar;</span></span>
<span class="line"><span>import java.util.Collection;</span></span>
<span class="line"><span>import java.util.Date;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span>* Title: &lt;br&gt;</span></span>
<span class="line"><span>* Description: &lt;br&gt;</span></span>
<span class="line"><span>* Company: KingTang &lt;br&gt;</span></span>
<span class="line"><span>*</span></span>
<span class="line"><span>* @author 金炀</span></span>
<span class="line"><span>* @version 1.0</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span>@Slf4j</span></span>
<span class="line"><span>public class  SnPreciseShardingAlgorithmimplementsPreciseShardingAlgorithm&lt;long &gt; {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        @Override</span></span>
<span class="line"><span>public String doSharding(Collection&lt;String&gt; availableTargetNames, PreciseShardingValue&lt;long &gt; preciseShardingValue) {</span></span>
<span class="line"><span>            long  poolSn = preciseShardingValue.getValue();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// TODO</span></span>
<span class="line"><span>            String flag = poolSn &lt;=100?&quot;1&quot;:&quot;2&quot;;</span></span>
<span class="line"><span>for (String tableName : availableTargetNames) {</span></span>
<span class="line"><span>                String tableSuffix = tableName.substring(tableName.lastIndexOf(&quot;_&quot;) +1);</span></span>
<span class="line"><span>if (tableSuffix.equals(flag)) {</span></span>
<span class="line"><span>return tableName;</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>thrownewIllegalArgumentException(&quot;未找到匹配的数据表&quot;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>privatestatic String getSuffixByYearMonth(Date date) {</span></span>
<span class="line"><span>            NumberFormat nf = NumberFormat.getInstance();</span></span>
<span class="line"><span>            nf.setMinimumIntegerDigits(2);</span></span>
<span class="line"><span>            Calendar calendar = Calendar.getInstance();</span></span>
<span class="line"><span>            calendar.setTime(date);</span></span>
<span class="line"><span>return calendar.get(Calendar.YEAR)  +&quot;&quot;+  nf.format((calendar.get(Calendar.MONTH) +1));</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20)]))}const c=n(l,[["render",p],["__file","sharding模块.html.vue"]]),t=JSON.parse('{"path":"/%E7%9B%98%E5%8F%A4/%E6%95%B0%E6%8D%AE%E6%BA%90/sharding%E6%A8%A1%E5%9D%97.html","title":"Shardingsphere模块","lang":"zh-CN","frontmatter":{"description":"Shardingsphere模块 如何使用 xml java yaml 技术原理 java java","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/%E7%9B%98%E5%8F%A4/%E6%95%B0%E6%8D%AE%E6%BA%90/sharding%E6%A8%A1%E5%9D%97.html"}],["meta",{"property":"og:title","content":"Shardingsphere模块"}],["meta",{"property":"og:description","content":"Shardingsphere模块 如何使用 xml java yaml 技术原理 java java"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-18T07:25:41.000Z"}],["meta",{"property":"article:author","content":"Cotton Eye Joe"}],["meta",{"property":"article:modified_time","content":"2024-11-18T07:25:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Shardingsphere模块\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-18T07:25:41.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cotton Eye Joe\\",\\"url\\":\\"https://github.com/ToDreamr\\"}]}"]]},"headers":[],"git":{"createdTime":1731914741000,"updatedTime":1731914741000,"contributors":[{"name":"九歌天上有","email":"aruixrain@gmail.com","commits":1}]},"readingTime":{"minutes":3.72,"words":1116},"filePathRelative":"盘古/数据源/sharding模块.md","localizedDate":"2024年11月18日","excerpt":"","autoDesc":true}');export{c as comp,t as data};
