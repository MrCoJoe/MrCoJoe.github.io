import{_ as n,o as a,c as i,d as e}from"./app-C-SlHR5I.js";const l={};function p(t,s){return a(),i("div",null,s[0]||(s[0]=[e(`<h1 id="mybatisplus模块" tabindex="-1"><a class="header-anchor" href="#mybatisplus模块"><span>MybatisPlus模块</span></a></h1><blockquote><h4 id="如何使用" tabindex="-1"><a class="header-anchor" href="#如何使用"><span>如何使用</span></a></h4></blockquote><p><strong>逆向工具</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>官方有个逆向项目，提供逆向文件的生成、下载</span></span>
<span class="line"><span>官方网址：</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://github.com/baomidou/generatorhttp://pangu.jasonandhank.cn/mybatisplus-generator/#/" target="_blank" rel="noopener noreferrer">https://github.com/baomidou/generator</a></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>公司地址：</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><a href="https://github.com/baomidou/generatorhttp://pangu.jasonandhank.cn/mybatisplus-generator/#/" target="_blank" rel="noopener noreferrer">http://pangu.jasonandhank.cn/mybatisplus-generator/#/</a>（支持lombok，且逆向swagger文件中，实体为3.0规范）</p><p><strong>业务引用</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>引入业务包</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>xml</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>  &lt;groupId&gt;com.kingtsoft.pangu&lt;/groupId&gt;</span></span>
<span class="line"><span>  &lt;artifactId&gt;pangu-data-mybatisplus&lt;/artifactId&gt;</span></span>
<span class="line"><span>  &lt;version&gt;\${pangu.version}&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>   按照以前常规DAO的形式引入mapper，然后内部需要自定义方法的时候，可以利用接口默认实</span></span>
<span class="line"><span>现的方式，在里面完成查询逻辑的撰写组装，避免查询逻辑与业务逻辑混淆 注意若要使用类似</span></span>
<span class="line"><span>deleteById 之类的方法，需要在实体内通过@TableId指定Key才行。(此包会自动打印</span></span>
<span class="line"><span>info级别的SQL日志)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>private final   OisRegSchedulePoolMapper oisRegSchedulePoolMapper;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@DSTransactional</span></span>
<span class="line"><span>public Object testMybatis() {</span></span>
<span class="line"><span>    List&lt;OisRegSchedulePool&gt; oisRegSchedulePools = oisRegSchedulePoolMapper.testXml(1);</span></span>
<span class="line"><span>    List&lt;long &gt; snList = oisRegSchedulePoolMapper.testXml2(1);</span></span>
<span class="line"><span>    OisRegSchedulePool oisRegSchedulePool =newOisRegSchedulePool();</span></span>
<span class="line"><span>    oisRegSchedulePool.setPoolSn(1L);</span></span>
<span class="line"><span>    oisRegSchedulePool.setPoolCode(&quot;010&quot;);</span></span>
<span class="line"><span>    oisRegSchedulePoolMapper.updateAuto(oisRegSchedulePool);</span></span>
<span class="line"><span>return123;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    mapper如下兼容xml的使用及java语法组织的形式执行SQL，若使用xml请确保xml可以被编译保留。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.frame.simple.test.mapper;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;</span></span>
<span class="line"><span>import com.baomidou.mybatisplus.core.conditions.update.LambdaUpdateWrapper;</span></span>
<span class="line"><span>import  com.kingtsoft.pangu.data.mybatisplus.PgBaseMapper;</span></span>
<span class="line"><span>import com.baomidou.mybatisplus.core.metadata.IPage;</span></span>
<span class="line"><span>import com.baomidou.mybatisplus.extension.plugins.pagination.Page;</span></span>
<span class="line"><span>import com.kingtsoft.pangu.frame.simple.test.model.OisRegSchedulePool;</span></span>
<span class="line"><span>import org.apache.ibatis.annotations.Param;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import java.util.List;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span>* Title: &lt;br&gt;</span></span>
<span class="line"><span>* Description: &lt;br&gt;</span></span>
<span class="line"><span>* Company: KingTang &lt;br&gt;</span></span>
<span class="line"><span>*</span></span>
<span class="line"><span>* @author 金炀</span></span>
<span class="line"><span>* @version 1.0</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span>public interface  OisRegSchedulePoolMapperextendsPgBaseMapper&lt;OisRegSchedulePool&gt; {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>default List&lt;OisRegSchedulePool&gt; selectListRel(Integer state) {</span></span>
<span class="line"><span>returnthis.selectList(new LambdaQueryWrapper&lt;OisRegSchedulePool&gt;()</span></span>
<span class="line"><span>                               .eq(OisRegSchedulePool::getState, state)</span></span>
<span class="line"><span>                               .exists(&quot;select 1 from ois_reg_schedule where state = 1 &quot;)</span></span>
<span class="line"><span>                              );</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>default IPage&lt;OisRegSchedulePool&gt; selectListPageRel(Page&lt;OisRegSchedulePool&gt; page, Integer state) {</span></span>
<span class="line"><span>returnthis.selectPage(page, new LambdaQueryWrapper&lt;OisRegSchedulePool&gt;()</span></span>
<span class="line"><span>                               .eq(OisRegSchedulePool::getState, state));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    List&lt;OisRegSchedulePool&gt; testXml(@Param(&quot;state&quot;) Integer state);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    List&lt;long &gt; testXml2(@Param(&quot;state&quot;) Integer state);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>defaultintupdateAuto(OisRegSchedulePool oisRegSchedulePool) {</span></span>
<span class="line"><span>returnthis.update(oisRegSchedulePool, new LambdaUpdateWrapper&lt;OisRegSchedulePool&gt;()</span></span>
<span class="line"><span>                           .eq(OisRegSchedulePool::getPoolSn, oisRegSchedulePool.getPoolSn()));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    pom如下配置，src下的xml将保留，不然会被去除掉。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;build&gt;</span></span>
<span class="line"><span>&lt;resources&gt;</span></span>
<span class="line"><span>&lt;resource&gt;</span></span>
<span class="line"><span>&lt;directory&gt;src/main/java&lt;/directory&gt;</span></span>
<span class="line"><span>&lt;includes&gt;</span></span>
<span class="line"><span>&lt;include&gt;**/*.xml&lt;/include&gt;</span></span>
<span class="line"><span>            &lt;/includes&gt;</span></span>
<span class="line"><span>        &lt;/resource&gt;</span></span>
<span class="line"><span>    &lt;/resources&gt;</span></span>
<span class="line"><span>&lt;/build&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    扫描以如下配置文件的形式配置（当然也可以使用注解），xml与mapper放一起，xml扫描可以不加</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>yaml</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>pangu:</span></span>
<span class="line"><span>mybatis-plus:</span></span>
<span class="line"><span># 扫描路径</span></span>
<span class="line"><span>mapper-scanner: &#39;com.kingtsoft.**.mapper*&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>mybatis-plus:</span></span>
<span class="line"><span>	# mapper.xml文件位置，如果与mapper在同一目录也不需要加，如果没有映射文件，请注释掉。</span></span>
<span class="line"><span>mapper-locations: classpath:com/kingtsoft/**/mapper/*.xml</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><h4 id="技术原理" tabindex="-1"><a class="header-anchor" href="#技术原理"><span>技术原理</span></a></h4></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>   根据源码的扫描实现，因为默认是通过注解的形式进行扫描的，而注解会基于类，而pangu启</span></span>
<span class="line"><span>动器无法统一类信息，不能做到通用性，所有对路径的扫描改为了配置文件。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>publicstaticclassMapperScannerRegistrarimplementsImportBeanDefinitionRegistrar, EnvironmentAware, Ordered {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private Environment environment;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        @Override</span></span>
<span class="line"><span>private void   registerBeanDefinitions(AnnotationMetadata importingClassMetadata, BeanDefinitionRegistry registry) {</span></span>
<span class="line"><span>            String packages = environment.getProperty(&quot;pangu.mybatis-plus.mapper-scanner&quot;);</span></span>
<span class="line"><span>if (!StringUtils.hasText(packages)) {</span></span>
<span class="line"><span>return;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            BeanDefinitionBuilder builder = BeanDefinitionBuilder.genericBeanDefinition(MapperScannerConfigurer.class);</span></span>
<span class="line"><span>            builder.addPropertyValue(&quot;processPropertyPlaceHolders&quot;, true);</span></span>
<span class="line"><span>            builder.addPropertyValue(&quot;basePackage&quot;, packages);</span></span>
<span class="line"><span>            BeanWrapper beanWrapper =newBeanWrapperImpl(MapperScannerConfigurer.class);</span></span>
<span class="line"><span>            Set&lt;String&gt; propertyNames = Stream.of(beanWrapper.getPropertyDescriptors()).map(PropertyDescriptor::getName)</span></span>
<span class="line"><span>                    .collect(Collectors.toSet());</span></span>
<span class="line"><span>if (propertyNames.contains(&quot;lazyInitialization&quot;)) {</span></span>
<span class="line"><span>// Need to mybatis-spring 2.0.2+</span></span>
<span class="line"><span>// TODO 兼容了mybatis.lazy-initialization配置</span></span>
<span class="line"><span>                builder.addPropertyValue(&quot;lazyInitialization&quot;, &quot;\${mybatis-plus.lazy-initialization:\${mybatis.lazy-initialization:false}}&quot;);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>if (propertyNames.contains(&quot;defaultScope&quot;)) {</span></span>
<span class="line"><span>// Need to mybatis-spring 2.0.6+</span></span>
<span class="line"><span>                builder.addPropertyValue(&quot;defaultScope&quot;, &quot;\${mybatis-plus.mapper-default-scope:}&quot;);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            registry.registerBeanDefinition(MapperScannerConfigurer.class.getName(), builder.getBeanDefinition());</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        @Override</span></span>
<span class="line"><span>private void   setEnvironment(Environment environment) {</span></span>
<span class="line"><span>this.environment = environment;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        @Override</span></span>
<span class="line"><span>publicintgetOrder() {</span></span>
<span class="line"><span>return Ordered.HIGHEST_PRECEDENCE +9;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    默认的语法中还缺少了对数据的批量操作，所以通过mybatisplus的AbstractSqlInjector</span></span>
<span class="line"><span>注入器，可以预先通过方法配置的方式，动态生成xml文件内容，并且设计了PgBaseMapper作为方法</span></span>
<span class="line"><span>载体进行了拓展，并且可以根据方言配置兼容oracle与mysql版本。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>public class  EasySqlInjectorextendsDefaultSqlInjector {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final   MybatisPlusProperties mybatisPlusProperties;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicEasySqlInjector(MybatisPlusProperties mybatisPlusProperties) {</span></span>
<span class="line"><span>this.mybatisPlusProperties = mybatisPlusProperties;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>public List&lt;AbstractMethod&gt; getMethodList(Class&lt;?&gt; mapperClass, TableInfo tableInfo) {</span></span>
<span class="line"><span>        List&lt;AbstractMethod&gt; methodList =super.getMethodList(mapperClass, tableInfo);</span></span>
<span class="line"><span>        String dbType = mybatisPlusProperties.getDbType();</span></span>
<span class="line"><span>if (StringUtils.hasText(dbType) &amp;&amp; DbType.ORACLE.equals(DbType.getDbType(dbType))) {</span></span>
<span class="line"><span>            methodList.add(newOracleInsertBatchMethod());</span></span>
<span class="line"><span>            methodList.add(newOracleUpdateBatchMethod());</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            methodList.add(newInsertBatchSomeColumn());</span></span>
<span class="line"><span>            methodList.add(newUpdateBatchMethod());</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        methodList.add(newLogicDeleteBatchByIds());</span></span>
<span class="line"><span>        methodList.add(newAlwaysUpdateSomeColumnById());</span></span>
<span class="line"><span>return methodList;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public interface  PgBaseMapper&lt;T&gt; extendsBaseMapper&lt;T&gt; {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 批量插入</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @paramcollection 数据集合</span></span>
<span class="line"><span>     * @return 插入条数</span></span>
<span class="line"><span>     * @author 金炀</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>intinsertBatchSomeColumn(Collection&lt;T&gt; collection);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 批量插入</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @paramcollection 数据集合</span></span>
<span class="line"><span>     * @paramnum        每组个数</span></span>
<span class="line"><span>     * @author 金炀</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>defaultvoidinsertBatchSomeColumnAverage(Collection&lt;T&gt; collection, intnum) {</span></span>
<span class="line"><span>if (num &lt;=0) {</span></span>
<span class="line"><span>thrownewRuntimeException(&quot;每组个数必须大于0!&quot;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        List&lt;List&lt;T&gt;&gt; subSets =averageAssign(new ArrayList&lt;&gt;(collection), num);</span></span>
<span class="line"><span>for (int i =0; i &lt; subSets.size(); i++) {</span></span>
<span class="line"><span>int i2 =insertBatchSomeColumn(subSets.get(i));</span></span>
<span class="line"><span>if (i2 != subSets.get(i).size()) {</span></span>
<span class="line"><span>thrownewRuntimeException(&quot;批量更新失败! 组号: &quot;+ i);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 批量更新</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @paramcollection 数据集合</span></span>
<span class="line"><span>     * @return 是否成功</span></span>
<span class="line"><span>     * @author 金炀</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>intupdateBatch(@Param(&quot;collection&quot;) Collection&lt;T&gt; collection);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 批量更新</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @paramcollection 数据集合</span></span>
<span class="line"><span>     * @paramnum        每组个数</span></span>
<span class="line"><span>     * @author 金炀</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>defaultvoidupdateBatchAverage(Collection&lt;T&gt; collection, intnum) {</span></span>
<span class="line"><span>if (num &lt;=0) {</span></span>
<span class="line"><span>thrownewRuntimeException(&quot;每组个数必须大于0!&quot;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        List&lt;List&lt;T&gt;&gt; subSets =averageAssign(new ArrayList&lt;&gt;(collection), num);</span></span>
<span class="line"><span>for (int i =0; i &lt; subSets.size(); i++) {</span></span>
<span class="line"><span>int i2 =updateBatch(subSets.get(i));</span></span>
<span class="line"><span>if (i2 !=1) {</span></span>
<span class="line"><span>thrownewRuntimeException(&quot;批量更新失败! 组号: &quot;+ i);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 更新可置空</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @paramentity 更新实体</span></span>
<span class="line"><span>     * @return 是否成功</span></span>
<span class="line"><span>     * @author 金炀</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>intalwaysUpdateSomeColumnById(@Param(&quot;et&quot;) T entity);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 集合分组</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @paramsource       源集合</span></span>
<span class="line"><span>     * @paramsplitItemNum 每组个数</span></span>
<span class="line"><span>     * @return 分组后集合</span></span>
<span class="line"><span>     * @author 金炀</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>private &lt;T&gt; List&lt;List&lt;T&gt;&gt; averageAssign(List&lt;T&gt; source, intsplitItemNum) {</span></span>
<span class="line"><span>        List&lt;List&lt;T&gt;&gt; result =new ArrayList&lt;&gt;();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (source !=null&amp;&amp; source.size() &gt;0&amp;&amp; splitItemNum &gt;0) {</span></span>
<span class="line"><span>if (source.size() &lt;= splitItemNum) {</span></span>
<span class="line"><span>// 源List元素数量小于等于目标分组数量</span></span>
<span class="line"><span>                result.add(source);</span></span>
<span class="line"><span>            } else {</span></span>
<span class="line"><span>// 计算拆分后list数量</span></span>
<span class="line"><span>int splitNum = (source.size() % splitItemNum ==0) ? (source.size() / splitItemNum) : (source.size() / splitItemNum +1);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                List&lt;T&gt; value;</span></span>
<span class="line"><span>for (int i =0; i &lt; splitNum; i++) {</span></span>
<span class="line"><span>if (i &lt; splitNum -1) {</span></span>
<span class="line"><span>                        value = source.subList(i * splitItemNum, (i +1) * splitItemNum);</span></span>
<span class="line"><span>                    } else {</span></span>
<span class="line"><span>// 最后一组</span></span>
<span class="line"><span>                        value = source.subList(i * splitItemNum, source.size());</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                    result.add(value);</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>return result;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>   mybatis自身还支持了org.apache.ibatis.plugin.Interceptor 拦截器配置，</span></span>
<span class="line"><span>通过此配置，将任何持久层操作都可以进行拦截，并且根据结构体转译成实际SQL，并进行</span></span>
<span class="line"><span>打印或者跟踪。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,31)]))}const r=n(l,[["render",p],["__file","Mybatis-Plus.html.vue"]]),c=JSON.parse('{"path":"/%E7%9B%98%E5%8F%A4/%E7%BB%84%E4%BB%B6%E4%BB%8B%E7%BB%8D/Mybatis-Plus.html","title":"MybatisPlus模块","lang":"zh-CN","frontmatter":{"description":"MybatisPlus模块 如何使用 逆向工具 https://github.com/baomidou/generator http://pangu.jasonandhank.cn/mybatisplus-generator/#/（支持lombok，且逆向swagger文件中，实体为3.0规范） 业务引用 xml java java java yaml...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/%E7%9B%98%E5%8F%A4/%E7%BB%84%E4%BB%B6%E4%BB%8B%E7%BB%8D/Mybatis-Plus.html"}],["meta",{"property":"og:title","content":"MybatisPlus模块"}],["meta",{"property":"og:description","content":"MybatisPlus模块 如何使用 逆向工具 https://github.com/baomidou/generator http://pangu.jasonandhank.cn/mybatisplus-generator/#/（支持lombok，且逆向swagger文件中，实体为3.0规范） 业务引用 xml java java java yaml..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-18T07:25:41.000Z"}],["meta",{"property":"article:author","content":"Cotton Eye Joe"}],["meta",{"property":"article:modified_time","content":"2024-11-18T07:25:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MybatisPlus模块\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-18T07:25:41.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cotton Eye Joe\\",\\"url\\":\\"https://github.com/ToDreamr\\"}]}"]]},"headers":[],"git":{"createdTime":1731914741000,"updatedTime":1731914741000,"contributors":[{"name":"九歌天上有","email":"aruixrain@gmail.com","commits":1}]},"readingTime":{"minutes":4.03,"words":1210},"filePathRelative":"盘古/组件介绍/Mybatis-Plus.md","localizedDate":"2024年11月18日","excerpt":"","autoDesc":true}');export{r as comp,c as data};
