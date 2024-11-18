import{_ as n,o as a,c as i,d as e}from"./app-BSUomKXw.js";const l={};function p(r,s){return a(),i("div",null,s[0]||(s[0]=[e(`<h1 id="仓盒模块" tabindex="-1"><a class="header-anchor" href="#仓盒模块"><span>仓盒模块</span></a></h1><blockquote><h4 id="如何使用" tabindex="-1"><a class="header-anchor" href="#如何使用"><span>如何使用</span></a></h4></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    项目目录如下（只是案例），最后的kthec-template-xdev为开发模式下的层级，主要是在</span></span>
<span class="line"><span>开发模式下，作为项目启动器启动项目。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="http://pangu.kingtsoft.com/pangu-facade/assets/project.2fd1c8a6.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    xdev pom引用如下</span></span>
<span class="line"><span>（kthec-template-business与kthec-template-auth都为项目插件，可以根据业务模块区分）。</span></span>
<span class="line"><span>引入的pangu-all-simple为封装的基础引用套件，重点关注这里面的pangu-box-boot。此包为盘古</span></span>
<span class="line"><span>项目启动基础底座。(注意：服务发布的时候这个xdev是不参与打包发布的)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>xml</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span></span>
<span class="line"><span>&lt;projectxmlns=&quot;http://maven.apache.org/POM/4.0.0&quot;</span></span>
<span class="line"><span>xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;</span></span>
<span class="line"><span>xsi:schemaLocation=&quot;http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd&quot;&gt;</span></span>
<span class="line"><span>    &lt;parent&gt;</span></span>
<span class="line"><span>        &lt;artifactId&gt;kthec-template-dependencies&lt;/artifactId&gt;</span></span>
<span class="line"><span>        &lt;groupId&gt;com.kingtsoft.kthec&lt;/groupId&gt;</span></span>
<span class="line"><span>        &lt;version&gt;1.0.0-SNAPSHOT&lt;/version&gt;</span></span>
<span class="line"><span>        &lt;relativePath/&gt;</span></span>
<span class="line"><span>    &lt;/parent&gt;</span></span>
<span class="line"><span>    &lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;artifactId&gt;kthec-template-xdev&lt;/artifactId&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;dependencies&gt;</span></span>
<span class="line"><span>        &lt;dependency&gt;</span></span>
<span class="line"><span>            &lt;artifactId&gt;pangu-all-simple&lt;/artifactId&gt;</span></span>
<span class="line"><span>            &lt;groupId&gt;com.kingtsoft.pangu&lt;/groupId&gt;</span></span>
<span class="line"><span>        &lt;/dependency&gt;</span></span>
<span class="line"><span>        &lt;dependency&gt;</span></span>
<span class="line"><span>            &lt;groupId&gt;com.kingtsoft.kthec&lt;/groupId&gt;</span></span>
<span class="line"><span>            &lt;artifactId&gt;kthec-template-business&lt;/artifactId&gt;</span></span>
<span class="line"><span>        &lt;/dependency&gt;</span></span>
<span class="line"><span>        &lt;dependency&gt;</span></span>
<span class="line"><span>            &lt;groupId&gt;com.kingtsoft.kthec&lt;/groupId&gt;</span></span>
<span class="line"><span>            &lt;artifactId&gt;kthec-template-auth&lt;/artifactId&gt;</span></span>
<span class="line"><span>        &lt;/dependency&gt;</span></span>
<span class="line"><span>    &lt;/dependencies&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;build&gt;</span></span>
<span class="line"><span>        &lt;plugins&gt;</span></span>
<span class="line"><span>            &lt;plugin&gt;</span></span>
<span class="line"><span>                &lt;groupId&gt;org.apache.maven.plugins&lt;/groupId&gt;</span></span>
<span class="line"><span>                &lt;artifactId&gt;maven-deploy-plugin&lt;/artifactId&gt;</span></span>
<span class="line"><span>                &lt;configuration&gt;</span></span>
<span class="line"><span>                    &lt;skip&gt;true&lt;/skip&gt;</span></span>
<span class="line"><span>                &lt;/configuration&gt;</span></span>
<span class="line"><span>            &lt;/plugin&gt;</span></span>
<span class="line"><span>        &lt;/plugins&gt;</span></span>
<span class="line"><span>    &lt;/build&gt;</span></span>
<span class="line"><span>&lt;/project&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    业务层级引用盘古打包插件（kthec-template-business为例）</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>xml</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;build&gt;</span></span>
<span class="line"><span>    &lt;plugins&gt;</span></span>
<span class="line"><span>        &lt;plugin&gt;</span></span>
<span class="line"><span>            &lt;groupId&gt;com.kingtsoft.pangu&lt;/groupId&gt;</span></span>
<span class="line"><span>            &lt;artifactId&gt;pangu-maven-pgpackage&lt;/artifactId&gt;</span></span>
<span class="line"><span>        &lt;/plugin&gt;</span></span>
<span class="line"><span>    &lt;/plugins&gt;</span></span>
<span class="line"><span>&lt;/build&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>xml</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span></span>
<span class="line"><span>&lt;projectxmlns=&quot;http://maven.apache.org/POM/4.0.0&quot;</span></span>
<span class="line"><span>xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;</span></span>
<span class="line"><span>xsi:schemaLocation=&quot;http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd&quot;&gt;</span></span>
<span class="line"><span>    &lt;parent&gt;</span></span>
<span class="line"><span>        &lt;artifactId&gt;kthec-template-dependencies&lt;/artifactId&gt;</span></span>
<span class="line"><span>        &lt;groupId&gt;com.kingtsoft.kthec&lt;/groupId&gt;</span></span>
<span class="line"><span>        &lt;version&gt;1.0.0-SNAPSHOT&lt;/version&gt;</span></span>
<span class="line"><span>        &lt;relativePath/&gt;</span></span>
<span class="line"><span>    &lt;/parent&gt;</span></span>
<span class="line"><span>    &lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;artifactId&gt;kthec-template-business&lt;/artifactId&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;dependencies&gt;</span></span>
<span class="line"><span>        &lt;dependency&gt;</span></span>
<span class="line"><span>            &lt;groupId&gt;com.kingtsoft.pangu&lt;/groupId&gt;</span></span>
<span class="line"><span>            &lt;artifactId&gt;pangu-all-web&lt;/artifactId&gt;</span></span>
<span class="line"><span>        &lt;/dependency&gt;</span></span>
<span class="line"><span>        &lt;dependency&gt;</span></span>
<span class="line"><span>            &lt;groupId&gt;com.kingtsoft.kthec&lt;/groupId&gt;</span></span>
<span class="line"><span>            &lt;artifactId&gt;kthec-template-common&lt;/artifactId&gt;</span></span>
<span class="line"><span>        &lt;/dependency&gt;</span></span>
<span class="line"><span>    &lt;/dependencies&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;build&gt;</span></span>
<span class="line"><span>        &lt;plugins&gt;</span></span>
<span class="line"><span>            &lt;plugin&gt;</span></span>
<span class="line"><span>                &lt;groupId&gt;com.kingtsoft.pangu&lt;/groupId&gt;</span></span>
<span class="line"><span>                &lt;artifactId&gt;pangu-maven-pgpackage&lt;/artifactId&gt;</span></span>
<span class="line"><span>            &lt;/plugin&gt;</span></span>
<span class="line"><span>        &lt;/plugins&gt;</span></span>
<span class="line"><span>        &lt;resources&gt;</span></span>
<span class="line"><span>            &lt;resource&gt;</span></span>
<span class="line"><span>                &lt;directory&gt;src/main/java&lt;/directory&gt;</span></span>
<span class="line"><span>                &lt;includes&gt;</span></span>
<span class="line"><span>                    &lt;include&gt;**/*.xml&lt;/include&gt;</span></span>
<span class="line"><span>                &lt;/includes&gt;</span></span>
<span class="line"><span>            &lt;/resource&gt;</span></span>
<span class="line"><span>        &lt;/resources&gt;</span></span>
<span class="line"><span>    &lt;/build&gt;</span></span>
<span class="line"><span>&lt;/project&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    业务引入maven插件后还需要引入一个盘古插件包pangu-start-plugin，这里他被集成在了</span></span>
<span class="line"><span>pangu-all-web之中。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>xml</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>    &lt;groupId&gt;com.kingtsoft.pangu&lt;/groupId&gt;</span></span>
<span class="line"><span>    &lt;artifactId&gt;pangu-start-plugin&lt;/artifactId&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    在业务模块中新建插件类，如下。实现PanguPlugin接口即可。可以看到还有个@Level注解，</span></span>
<span class="line"><span>里面有个value属性，默认为0，由于不排除插件之间的引用，需要为当前包定义插件级别。数字越大，</span></span>
<span class="line"><span>优先级越高。一般公用组件类如果有插件配置建议设置成-1。（注意：这个与spring的优先级设置是</span></span>
<span class="line"><span>反的，spring的order是数字越大优先级越低）</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.kthec.template.business.biz.config;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import com.kingtsoft.pangu.start.plugin.Level;</span></span>
<span class="line"><span>import com.kingtsoft.pangu.start.plugin.PanguPlugin;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Title: 插件描述 &lt;br&gt;</span></span>
<span class="line"><span> * Description: &lt;br&gt;</span></span>
<span class="line"><span> * Company: KingTang &lt;br&gt;</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * @author 金炀</span></span>
<span class="line"><span> * @version 1.0</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@Level</span></span>
<span class="line"><span>public class  KthecTemplateBusinessPluginimplementsPanguPlugin {</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>public String getName() {</span></span>
<span class="line"><span>return&quot;KthecTemplateBusiness&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>public String getId() {</span></span>
<span class="line"><span>return&quot;kthec-template-business&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>public String getBoxCtx() {</span></span>
<span class="line"><span>return&quot;kthec-template&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>public String getTag() {</span></span>
<span class="line"><span>return&quot;&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>public String getAuthor() {</span></span>
<span class="line"><span>return&quot;JT454&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>public String getDescribe() {</span></span>
<span class="line"><span>return&quot;业务案例&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>public String getVersion() {</span></span>
<span class="line"><span>return&quot;1.0.20220419&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>public String getPersonalDomain() {</span></span>
<span class="line"><span>return&quot;&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    最后，pom点击package、install、deploy的时候就会在target目录产生pgr文件（一个zip</span></span>
<span class="line"><span>压缩包），这就是服务部署所需插件包。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://pangu.kingtsoft.com/pangu-facade/assets/image1.e07179a8.png" alt="image.png" loading="lazy"><strong>开发模式</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    如下图，xdev新建一个类，代码如下。这里代码都是一样的，只需调用</span></span>
<span class="line"><span>PanguStart.start(args);方法即可。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="http://pangu.kingtsoft.com/pangu-facade/assets/image2.6174b38c.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.kthec.template.xdev;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import com.kingtsoft.pangu.box.boot.PanguStart;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Title: &lt;br&gt;</span></span>
<span class="line"><span> * Description: &lt;br&gt;</span></span>
<span class="line"><span> * Company: KingTang &lt;br&gt;</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * @author 金炀</span></span>
<span class="line"><span> * @version 1.0</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public class  StartDev {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 参数案例 --illegal-access=warn -javaagent:C:/Users/JasonKin/Desktop/skywalking-agent/skywalking-agent.jar -Dskywalking.agent.service_name=pangu -Dskywalking.collector.backend_service=10.1.50.131:11800 -Dlog.path=logs/pangu/frame/simple -Dlog.name=frame-simple</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>publicstaticvoidmain(String[] args) {</span></span>
<span class="line"><span>        PanguStart.start(args);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>项目扫描配置在配置文件中。最后启动上面的main方法。</p><p><strong>yaml</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>pangu:</span></span>
<span class="line"><span>	scan: com.kingtsoft.kthec</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>服务器启动</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    服务器案例如下，需要一个已经编译好的pangu-box-start.jar ，start.yml就等同于</span></span>
<span class="line"><span>application.yml，优先级配置文件中最高。files内部存放了需要更新的软件包（那些pgr文件，</span></span>
<span class="line"><span>根据项目所需不同，可能会需要一些额外的公用pgr）。其他目录会随着启动自动生成，一开始是不需要的。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="http://pangu.kingtsoft.com/pangu-facade/assets/image3.b9644e73.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    如下，files中必须的为这个pangu-box-boot.pgz文件。刚才开发模式下，这个包是配置在xdev</span></span>
<span class="line"><span>的，所有需要额外存放。（如果业务项目直接给引用了，这里而不需要。但是由于职责关系，业务不建议引</span></span>
<span class="line"><span>用。后续会有专用工具，在没专用工具情况下，这类公用组件的包可以统一放到一个pom引用下，以方便版</span></span>
<span class="line"><span>本控制）</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="http://pangu.kingtsoft.com/pangu-facade/assets/image4.bb420d9c.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    编写启动脚本（当然，可以使用java -jar 命令直接启动那个pangu-box-start.jar来启动的，</span></span>
<span class="line"><span>主要内容是清除原先的解压包，防止包污染。同样是由于目前还没针对的可视化更新工具，可以先用jenkins），</span></span>
<span class="line"><span>这个脚本一般放在案例中的/home/kingt/service目录下。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>shell</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#!/bin/sh</span></span>
<span class="line"><span>LANG=zh_CN.UTF-8</span></span>
<span class="line"><span>#定义服务名</span></span>
<span class="line"><span>server_name=\${1}</span></span>
<span class="line"><span>#定义文件名</span></span>
<span class="line"><span>file_name=pangu-box-start.jar</span></span>
<span class="line"><span>#定义新版本文件位置</span></span>
<span class="line"><span>workdir=/home/kingt/service</span></span>
<span class="line"><span>#定义需要发布的文件位置</span></span>
<span class="line"><span>prod_path=\${workdir}/\${1}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if [ !-d&quot;\${prod_path}/&quot; ];</span></span>
<span class="line"><span>then</span></span>
<span class="line"><span>mkdir \${prod_path}</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>echo&quot;已经存在文件目录&quot;</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo&quot;\${prod_path}&quot;</span></span>
<span class="line"><span>echo&quot;\${file_name}&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo&quot;目录处理&quot;</span></span>
<span class="line"><span>if [ -d&quot;\${prod_path}/bins/&quot; ];</span></span>
<span class="line"><span>then</span></span>
<span class="line"><span>rm-rf \${prod_path}/bins</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span>if [ -d&quot;\${prod_path}/libs/&quot; ];</span></span>
<span class="line"><span>then</span></span>
<span class="line"><span>rm-rf \${prod_path}/libs</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span>if [ -d&quot;\${prod_path}/plugs/&quot; ];</span></span>
<span class="line"><span>then</span></span>
<span class="line"><span>rm-rf \${prod_path}/plugs</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if [ -d&quot;\${prod_path}/pgrs/&quot; ];</span></span>
<span class="line"><span>then</span></span>
<span class="line"><span>cd \${prod_path}/pgrs</span></span>
<span class="line"><span>for i in$(ls)</span></span>
<span class="line"><span>do</span></span>
<span class="line"><span>if [ !&quot;\${i}&quot;=&quot;version&quot; ] ; then</span></span>
<span class="line"><span>cp \${i} \${prod_path}/</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span>done</span></span>
<span class="line"><span>rm-rf \${prod_path}/pgrs</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cd \${prod_path}/files</span></span>
<span class="line"><span>for i in$(ls)</span></span>
<span class="line"><span>do</span></span>
<span class="line"><span>cp \${i} \${prod_path}/</span></span>
<span class="line"><span>done</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#cp \${workdir}/pangu-box-boot.pgz \${prod_path}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo&quot;准备完成&quot;</span></span>
<span class="line"><span># 停止原来的进程</span></span>
<span class="line"><span>pid=$(ps-ef|grep\${1}/\${file_name} |grep-v &quot;grep&quot; |awk &#39;{print $2}&#39;)</span></span>
<span class="line"><span>echo&quot;服务的进程 Id 是 :\${pid}&quot;</span></span>
<span class="line"><span>if [ &quot;\${pid}&quot;=&quot;&quot; ]; then</span></span>
<span class="line"><span>echo&quot;当前没有\${server_name}服务在运行中&quot;</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>echo&quot;开始停止旧版本服务...&quot;</span></span>
<span class="line"><span>kill-9 $pid</span></span>
<span class="line"><span>sleep1s</span></span>
<span class="line"><span>echo&quot;停止旧版本服务成功&quot;</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 启动程序</span></span>
<span class="line"><span>echo&quot;开始启动新版本服务...&quot;</span></span>
<span class="line"><span>cd \${workdir}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if [ &quot;\${1}&quot;=&quot;kingtsoft-pangu-frame-video&quot; ] || [ &quot;\${1}&quot;=&quot;kingtsoft-xxx&quot; ]; then</span></span>
<span class="line"><span>nohupjava-Xmx1024m-Xms512m-XX:MaxDirectMemorySize=1024m-jar \${prod_path}/\${file_name} &gt; \${prod_path}/nohup.out &amp;</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>nohupjava-Xmx256m-Xms256m-jar \${prod_path}/\${file_name} &gt; \${prod_path}/nohup.out &amp;</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sleep2s</span></span>
<span class="line"><span></span></span>
<span class="line"><span># step 6. 检查进程/日志</span></span>
<span class="line"><span>new_pid=$(ps-ef|grep\${1}/\${file_name} |grep-v &quot;grep&quot; |awk &#39;{print $2}&#39;)</span></span>
<span class="line"><span>echo&quot;\${server_name}服务正在启动，服务的进程 Id 是 :\${new_pid}&quot;</span></span>
<span class="line"><span>tail-fn1000 \${prod_path}/nohup.out| { sed&quot;/App Is Started!/ q&quot; &amp;&amp; echo&quot;启动成功&quot; &amp;&amp; t_pid=$(ps-ef|grep \${prod_path}/nohup.out |grep-v &quot;grep&quot; |awk &#39;{print $2}&#39;) &amp;&amp; kill \${t_pid} &amp;&amp; kill$$; }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行./startup.sh kingtsoft-pangu-frame-simple 即可</p><blockquote><h4 id="技术原理" tabindex="-1"><a class="header-anchor" href="#技术原理"><span>技术原理</span></a></h4></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    盘古模式下的原理很简单，就是把一堆压缩包（pgr文件）用类加载器进行加载，服务部署模式下会生成很多</span></span>
<span class="line"><span>文件夹，起始只是分类作用。内容对于程序来说都是一样的，加载字节码而已。</span></span>
<span class="line"><span>    从最初的那个 PanguStart.start(args)方法说起。此方法就是开发模式下放在xdev下的唯一方法。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.box.boot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import com.kingtsoft.pangu.base.common.ProjectPath;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import java.lang.reflect.Method;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * @author JT103</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public class  PanguStart {</span></span>
<span class="line"><span>publicstaticvoidstart(String[] args) {</span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>            String basePath = ProjectPath.initBasePath();</span></span>
<span class="line"><span>            ClassLoader parent = Thread.currentThread().getContextClassLoader();</span></span>
<span class="line"><span>            Thread.currentThread().setContextClassLoader(newBoxClassLoader(basePath, parent));</span></span>
<span class="line"><span>            Class&lt;?&gt; mainClass = Thread.currentThread().getContextClassLoader().</span></span>
<span class="line"><span>loadClass(&quot;com.kingtsoft.pangu.box.boot.PanguBoot&quot;);</span></span>
<span class="line"><span>            Method mainMethod = mainClass.getDeclaredMethod(&quot;main&quot;, String[].class);</span></span>
<span class="line"><span>            mainMethod.invoke(null, newObject[]{args});</span></span>
<span class="line"><span>        } catch (Exception e) {</span></span>
<span class="line"><span>            e.printStackTrace();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    这里可以看出在构建一个新的类加载器BoxClassLoader。构造方法中调用了getUrls方法，在获取指定</span></span>
<span class="line"><span>    目录下的jar文件，这些目录就是服务部署模式下自动归类的那几个目录。这个时候，线程类加载器要加载</span></span>
<span class="line"><span>哪些jar包，就一键全部指定好了。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.box.boot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import java.io.File;</span></span>
<span class="line"><span>import java.io.IOException;</span></span>
<span class="line"><span>import java.net.MalformedURLException;</span></span>
<span class="line"><span>import java.net.URL;</span></span>
<span class="line"><span>import java.net.URLClassLoader;</span></span>
<span class="line"><span>import java.nio.file.Paths;</span></span>
<span class="line"><span>import java.util.ArrayList;</span></span>
<span class="line"><span>import java.util.Enumeration;</span></span>
<span class="line"><span>import java.util.List;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class  BoxClassLoaderextendsURLClassLoader {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicBoxClassLoader(String basePath, ClassLoader parent) throws IOException {</span></span>
<span class="line"><span>super(getUrls(basePath), parent);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>protectedvoidaddURL(URL url) {</span></span>
<span class="line"><span>super.addURL(url);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>public URL getResource(String name) {</span></span>
<span class="line"><span>returnsuper.getResource(name);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>public Enumeration&lt;URL&gt; getResources(String name) throws IOException {</span></span>
<span class="line"><span>returnsuper.getResources(name);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>protected Class&lt;?&gt; findClass(String name) throws ClassNotFoundException {</span></span>
<span class="line"><span>returnsuper.findClass(name);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>protected Class&lt;?&gt; loadClass(String name, boolean  resolve) throws ClassNotFoundException {</span></span>
<span class="line"><span>returnsuper.loadClass(name, resolve);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>public Enumeration&lt;URL&gt; findResources(String name) throws IOException {</span></span>
<span class="line"><span>returnsuper.findResources(name);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>privatestaticURL[] getUrls(String basePath) {</span></span>
<span class="line"><span>        List&lt;URL&gt; urls =new ArrayList&lt;&gt;();</span></span>
<span class="line"><span>getPath(basePath, &quot;libs&quot;, urls);</span></span>
<span class="line"><span>getPath(basePath, &quot;bins&quot;, urls);</span></span>
<span class="line"><span>getPath(basePath, &quot;plugs&quot;, urls);</span></span>
<span class="line"><span>return urls.toArray(newURL[0]);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>privatestaticvoidgetPath(String basepath, String subpath, List&lt;URL&gt; urls) {</span></span>
<span class="line"><span>        File libdir = Paths.get(basepath, subpath).toFile();</span></span>
<span class="line"><span>File[] files = libdir.listFiles();</span></span>
<span class="line"><span>if (files !=null) {</span></span>
<span class="line"><span>for (File f : files) {</span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>                    urls.add(f.toURI().toURL());</span></span>
<span class="line"><span>                } catch (MalformedURLException e) {</span></span>
<span class="line"><span>                    e.printStackTrace();</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    然后第二步是反射com.kingtsoft.pangu.box.boot.PanguBoot下面的main方法。</span></span>
<span class="line"><span>会发现它其实就是一个springboot启动器。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.box.boot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import org.springframework.boot.SpringApplication;</span></span>
<span class="line"><span>import org.springframework.boot.autoconfigure.SpringBootApplication;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * @author JT103</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@SpringBootApplication</span></span>
<span class="line"><span>public class  PanguBoot {</span></span>
<span class="line"><span>publicstaticvoidmain(String[] args) {</span></span>
<span class="line"><span>        SpringApplication.run(PanguBoot.class, args);</span></span>
<span class="line"><span>        System.out.println(&quot;App Is Started!&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    这个时候我们还缺少扫描，如何让扫描做得通用又方便呢？首先springboot在启动的时候会</span></span>
<span class="line"><span>优先去扫描启动类所属包下的所有类文件。它的同级目录如下，可以发现有个叫PanguScanner的文件。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="http://pangu.kingtsoft.com/pangu-facade/assets/image5.fde9534b.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    PanguScanner中定义了扫描。这里的pangu.scan是指把配置文件中的包引用进来。</span></span>
<span class="line"><span>@AutoConfigureOrder(Ordered.HIGHEST_PRECEDENCE)是为了增加此类的最高级配置优先级。</span></span>
<span class="line"><span>excludeFilters中是排除内部的一些包扫描，因为公用组件一般会配置成自动化配置文件，扫描与自</span></span>
<span class="line"><span>动化配置一起在特定的情况下会出现问题，比如加载顺序之类的。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.box.boot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import org.springframework.boot.autoconfigure.AutoConfigureOrder;</span></span>
<span class="line"><span>import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;</span></span>
<span class="line"><span>import org.springframework.context.annotation.ComponentScan;</span></span>
<span class="line"><span>import org.springframework.context.annotation.Configuration;</span></span>
<span class="line"><span>import org.springframework.context.annotation.FilterType;</span></span>
<span class="line"><span>import org.springframework.core.Ordered;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Title: &lt;br&gt;</span></span>
<span class="line"><span> * Description: &lt;br&gt;</span></span>
<span class="line"><span> * Company: KingTang &lt;br&gt;</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * @author 金炀</span></span>
<span class="line"><span> * @version 1.0</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@ComponentScan(</span></span>
<span class="line"><span>basePackages=&quot;\${pangu.scan}&quot;,</span></span>
<span class="line"><span>excludeFilters= {</span></span>
<span class="line"><span>                @ComponentScan.Filter(type= FilterType.ASPECTJ, pattern=&quot;com.kingtsoft.pangu.springcloud..*&quot;),</span></span>
<span class="line"><span>                @ComponentScan.Filter(type= FilterType.ASPECTJ, pattern=&quot;com.kingtsoft.pangu.spring..*&quot;)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span>@Configuration</span></span>
<span class="line"><span>@ConditionalOnProperty(value=&quot;pangu.scan&quot;)</span></span>
<span class="line"><span>@AutoConfigureOrder(Ordered.HIGHEST_PRECEDENCE)</span></span>
<span class="line"><span>public class  PanguScanner {</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    有的时候模块想自己控制扫描内容，配置文件可以配置成具体的某个包或类。如下这个时候本地项目</span></span>
<span class="line"><span>config下的类CisConfig会先生效。然后这里再仿造PanguScanner中的配置，进行个性化扫描配置。</span></span>
<span class="line"><span>当然默认的直接扫描满足绝大多数需求。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>yaml</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>pangu:</span></span>
<span class="line"><span>	scan: &#39;com.kingtsoft.kingpower.ktcis.common.config&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.kingpower.ktcis.common.config;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import org.springframework.boot.autoconfigure.AutoConfigureOrder;</span></span>
<span class="line"><span>import org.springframework.context.annotation.ComponentScan;</span></span>
<span class="line"><span>import org.springframework.context.annotation.Configuration;</span></span>
<span class="line"><span>import org.springframework.context.annotation.EnableAspectJAutoProxy;</span></span>
<span class="line"><span>import org.springframework.context.annotation.FilterType;</span></span>
<span class="line"><span>import org.springframework.core.Ordered;</span></span>
<span class="line"><span>import org.springframework.core.annotation.Order;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Title: &lt;br&gt;</span></span>
<span class="line"><span> * Description: &lt;br&gt;</span></span>
<span class="line"><span> * Company: KingTang &lt;br&gt;</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * @author 金炀</span></span>
<span class="line"><span> * @version 1.0</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@ComponentScan(</span></span>
<span class="line"><span>basePackages=&quot;com.kingtsoft.kingpower&quot;,</span></span>
<span class="line"><span>excludeFilters= {</span></span>
<span class="line"><span>                @ComponentScan.Filter(type= FilterType.ASPECTJ, pattern=&quot;com.kingtsoft.kingpower.ktap.business.web.controller..*&quot;),</span></span>
<span class="line"><span>                @ComponentScan.Filter(type= FilterType.ASPECTJ, pattern=&quot;com.kingtsoft.kingpower.ktap.business.config.StartInitHelper&quot;),</span></span>
<span class="line"><span>                @ComponentScan.Filter(type= FilterType.ASPECTJ, pattern=&quot;com.kingtsoft.kingpower.ktap.common.config.ApConfig&quot;),</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span>@Configuration</span></span>
<span class="line"><span>@AutoConfigureOrder(Ordered.HIGHEST_PRECEDENCE)</span></span>
<span class="line"><span>@Order(Ordered.HIGHEST_PRECEDENCE)</span></span>
<span class="line"><span>@EnableAspectJAutoProxy(proxyTargetClass=true, exposeProxy=true)</span></span>
<span class="line"><span>public class  CisConfig {</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    继续看配置文件方面，pangu-box-boot 下有个PanguEnvironmentPostProcessor与</span></span>
<span class="line"><span>PanguStartEnvironmentPostProcessor类，用于对环境数据的初始化。可以发现支持对</span></span>
<span class="line"><span>pangu-app.properties、bootstrap.properties之类的进行加载。重点看</span></span>
<span class="line"><span>EnvLoadUtil.loadAllEnvWithInclude(pro, &quot;pangu&quot;);这个方法。</span></span>
<span class="line"><span>（这里分成2个执行器加载是为了剥离最外面的启动文件与内置配置优先级，内置一般是默认项目可覆盖，</span></span>
<span class="line"><span>外置一般优先级最高）</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.box.boot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import com.kingtsoft.pangu.spring.env.EnvLoadUtil;</span></span>
<span class="line"><span>import org.springframework.boot.SpringApplication;</span></span>
<span class="line"><span>import org.springframework.boot.env.EnvironmentPostProcessor;</span></span>
<span class="line"><span>import org.springframework.core.Ordered;</span></span>
<span class="line"><span>import org.springframework.core.env.ConfigurableEnvironment;</span></span>
<span class="line"><span>import org.springframework.core.env.MutablePropertySources;</span></span>
<span class="line"><span>import org.springframework.core.env.PropertiesPropertySource;</span></span>
<span class="line"><span>import org.springframework.core.io.Resource;</span></span>
<span class="line"><span>import org.springframework.core.io.support.PathMatchingResourcePatternResolver;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import java.io.IOException;</span></span>
<span class="line"><span>import java.util.*;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class  PanguEnvironmentPostProcessorimplementsEnvironmentPostProcessor, Ordered {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>privatestaticfinal String PROPERTY_NAME =&quot;classpath-box-pangu&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>private void   postProcessEnvironment(ConfigurableEnvironment environment, SpringApplication application) {</span></span>
<span class="line"><span>        MutablePropertySources propertySources = environment.getPropertySources();</span></span>
<span class="line"><span>if (propertySources.get(PROPERTY_NAME) !=null) {</span></span>
<span class="line"><span>return;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>            String locationapp =&quot;classpath*:pangu-app.properties&quot;;</span></span>
<span class="line"><span>            String locationwebjars =&quot;classpath*:/META-INF/resources/webjars/*/pangu-inner-*.properties&quot;;</span></span>
<span class="line"><span>            String locationboot =&quot;classpath:bootstrap.properties&quot;;</span></span>
<span class="line"><span>            PathMatchingResourcePatternResolver pmrpr =newPathMatchingResourcePatternResolver();</span></span>
<span class="line"><span>Resource[] resourcesapp = pmrpr.getResources(locationapp);</span></span>
<span class="line"><span>Resource[] resourcesboot = pmrpr.getResources(locationboot);</span></span>
<span class="line"><span>Resource[] resourceswebjars = pmrpr.getResources(locationwebjars);</span></span>
<span class="line"><span>            Properties pro =newProperties();</span></span>
<span class="line"><span>            EnvLoadUtil.loadAllEnvWithInclude(pro, &quot;pangu&quot;);</span></span>
<span class="line"><span>            EnvLoadUtil.loadRes(resourcesapp, pro);</span></span>
<span class="line"><span>            EnvLoadUtil.loadRes(resourceswebjars, pro);</span></span>
<span class="line"><span>            EnvLoadUtil.loadRes(resourcesboot, pro);</span></span>
<span class="line"><span>if (pro.isEmpty()) {</span></span>
<span class="line"><span>return;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            PropertiesPropertySource pps =newPropertiesPropertySource(PROPERTY_NAME, pro);</span></span>
<span class="line"><span>            propertySources.addLast(pps);</span></span>
<span class="line"><span>        } catch (IOException e) {</span></span>
<span class="line"><span>            e.printStackTrace();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>publicintgetOrder() {</span></span>
<span class="line"><span>// 配置文件是Ordered.HIGHEST_PRECEDENCE + 10 会设置到底部，数组越前面，优先级越高</span></span>
<span class="line"><span>return Ordered.HIGHEST_PRECEDENCE +11;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.box.boot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * @author 金炀 这里是加载外部配置</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public class  PanguStartEnvironmentPostProcessorimplementsEnvironmentPostProcessor, Ordered {</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>private void   postProcessEnvironment(ConfigurableEnvironment environment, SpringApplication application) {</span></span>
<span class="line"><span>        MutablePropertySources propertySources = environment.getPropertySources();</span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>            Properties pro =newProperties();</span></span>
<span class="line"><span>            EnvLoadUtil.loadOut(pro);</span></span>
<span class="line"><span>if (!pro.isEmpty()) {</span></span>
<span class="line"><span>                PropertiesPropertySource pps =newPropertiesPropertySource(&quot;classpath-start-pangu&quot;, pro);</span></span>
<span class="line"><span>                propertySources.addLast(pps);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        } catch (IOException e) {</span></span>
<span class="line"><span>            e.printStackTrace();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>publicintgetOrder() {</span></span>
<span class="line"><span>// 配置文件是Ordered.HIGHEST_PRECEDENCE + 10 会设置到底部，数组越前面，优先级越高</span></span>
<span class="line"><span>return Ordered.HIGHEST_PRECEDENCE +9;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    EnvLoadUtil中对application开头的三种配置进行了加载。加载顺序根据envSuffixes的顺序</span></span>
<span class="line"><span>来，越先加载的，就会被后者覆盖。所以优先级是倒着来的。因为spring默认是只加载一个application</span></span>
<span class="line"><span>种类文件的，这里支持了所有文件的读取。当然，加了内部限制，loadAllEnvWithInclude方法加了</span></span>
<span class="line"><span>“pangu”入参，就是限定了文件目录中必须要有这个关键字。所以这种模式是不开放外部业务组件多同类</span></span>
<span class="line"><span>型配置文件的。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.spring.tools.env;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import com.kingtsoft.pangu.base.common.ProjectPath;</span></span>
<span class="line"><span>import lombok.SneakyThrows;</span></span>
<span class="line"><span>import org.springframework.boot.env.OriginTrackedMapPropertySource;</span></span>
<span class="line"><span>import org.springframework.boot.env.YamlPropertySourceLoader;</span></span>
<span class="line"><span>import org.springframework.boot.origin.OriginTrackedValue;</span></span>
<span class="line"><span>import org.springframework.core.env.PropertySource;</span></span>
<span class="line"><span>import org.springframework.core.io.Resource;</span></span>
<span class="line"><span>import org.springframework.core.io.UrlResource;</span></span>
<span class="line"><span>import org.springframework.core.io.support.PropertiesLoaderUtils;</span></span>
<span class="line"><span>import org.springframework.util.CollectionUtils;</span></span>
<span class="line"><span>import org.springframework.util.StringUtils;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import java.io.File;</span></span>
<span class="line"><span>import java.io.IOException;</span></span>
<span class="line"><span>import java.net.URI;</span></span>
<span class="line"><span>import java.nio.file.Paths;</span></span>
<span class="line"><span>import java.util.ArrayList;</span></span>
<span class="line"><span>import java.util.List;</span></span>
<span class="line"><span>import java.util.Map;</span></span>
<span class="line"><span>import java.util.Properties;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Title: &lt;br&gt;</span></span>
<span class="line"><span> * Description: &lt;br&gt;</span></span>
<span class="line"><span> * Company: KingTang &lt;br&gt;</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * @author 金炀</span></span>
<span class="line"><span> * @version 1.0</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public class  EnvLoadUtil {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>privatestaticfinal String DEFAULT_FILE_NAME =&quot;application&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicstaticvoidloadAllEnv(Properties pro) throws IOException {</span></span>
<span class="line"><span>loadAllEnv(pro, DEFAULT_FILE_NAME);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @SneakyThrows</span></span>
<span class="line"><span>publicstaticvoidloadAllEnvWithInclude(Properties pro, String includeName) {</span></span>
<span class="line"><span>loadAllEnv(pro, DEFAULT_FILE_NAME, includeName);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicstaticvoidloadAllEnv(Properties pro, String fileName, String includeName) throws IOException {</span></span>
<span class="line"><span>String[] envSuffixes = {&quot;yaml&quot;, &quot;yml&quot;, &quot;properties&quot;};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>for (String envSuffix : envSuffixes) {</span></span>
<span class="line"><span>            List&lt;Resource&gt; resources =new ArrayList&lt;&gt;();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            ClassLoader classLoader = Thread.currentThread().getContextClassLoader();</span></span>
<span class="line"><span>            classLoader.getResources(fileName +&quot;.&quot;+ envSuffix).asIterator().forEachRemaining(</span></span>
<span class="line"><span>                    url -&gt; {</span></span>
<span class="line"><span>if (!StringUtils.hasText(includeName) || url.getPath().contains(includeName)) {</span></span>
<span class="line"><span>                            resources.add(0, newUrlResource(url));</span></span>
<span class="line"><span>                        }</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>            );</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (&quot;properties&quot;.equals(envSuffix)) {</span></span>
<span class="line"><span>                EnvLoadUtil.loadRes(resources.toArray(newResource[0]), pro);</span></span>
<span class="line"><span>            } else {</span></span>
<span class="line"><span>                EnvLoadUtil.loadYmlRes(resources.toArray(newResource[0]), pro);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicstaticvoidloadAllEnv(Properties pro, String fileName) throws IOException {</span></span>
<span class="line"><span>loadAllEnv(pro, fileName, null);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicstaticvoidloadRes(Resource[] resources, Properties pro) throws IOException {</span></span>
<span class="line"><span>if (resources !=null&amp;&amp; resources.length &gt;0) {</span></span>
<span class="line"><span>for (Resource res : resources) {</span></span>
<span class="line"><span>if (res.exists()) {</span></span>
<span class="line"><span>                    Properties prot = PropertiesLoaderUtils.loadProperties(res);</span></span>
<span class="line"><span>                    pro.putAll(prot);</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicstaticvoidloadYmlRes(Resource[] resources, Properties pro) throws IOException {</span></span>
<span class="line"><span>if (resources !=null&amp;&amp; resources.length &gt;0) {</span></span>
<span class="line"><span>for (Resource res : resources) {</span></span>
<span class="line"><span>if (res.exists()) {</span></span>
<span class="line"><span>                    List&lt;PropertySource&lt;?&gt;&gt; propertySources =newYamlPropertySourceLoader().load(res.getFilename(), res);</span></span>
<span class="line"><span>if (CollectionUtils.isEmpty(propertySources)) {</span></span>
<span class="line"><span>continue;</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>for (PropertySource&lt;?&gt; propertySource : propertySources) {</span></span>
<span class="line"><span>                        Map&lt;String, Object&gt; source = ((OriginTrackedMapPropertySource) propertySource).getSource();</span></span>
<span class="line"><span>                        source.forEach((k, v) -&gt; pro.put(k, ((OriginTrackedValue)(v)).getValue()));</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicstaticvoidloadOut(Properties pro) throws IOException {</span></span>
<span class="line"><span>loadOut(pro, &quot;start&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicstaticvoidloadOut(Properties pro, String fileName) throws IOException {</span></span>
<span class="line"><span>        String basePath = ProjectPath.getBasePath();</span></span>
<span class="line"><span>        File file = Paths.get(basePath, &quot;&quot;).toFile();</span></span>
<span class="line"><span>File[] files = file.listFiles();</span></span>
<span class="line"><span>if (files ==null) {</span></span>
<span class="line"><span>return;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 不在里面加载是为了遵循properties优先级高于yml文件的规则</span></span>
<span class="line"><span>        List&lt;File&gt; propertiesFiles =new ArrayList&lt;&gt;();</span></span>
<span class="line"><span>for (File f : files) {</span></span>
<span class="line"><span>            String filename = f.getName();</span></span>
<span class="line"><span>if (filename.indexOf(fileName) !=0) {</span></span>
<span class="line"><span>continue;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>if (filename.endsWith(&quot;.properties&quot;)) {</span></span>
<span class="line"><span>                propertiesFiles.add(f);</span></span>
<span class="line"><span>            } elseif (filename.endsWith(&quot;.yml&quot;) || filename.endsWith(&quot;.yaml&quot;)) {</span></span>
<span class="line"><span>                URI sYmlPath = Paths.get(basePath, filename).toUri();</span></span>
<span class="line"><span>                UrlResource r =newUrlResource(sYmlPath);</span></span>
<span class="line"><span>if (r.exists()) {</span></span>
<span class="line"><span>                    EnvLoadUtil.loadYmlRes(newResource[]{r}, pro);</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (!propertiesFiles.isEmpty()) {</span></span>
<span class="line"><span>for (File propertiesFile : propertiesFiles) {</span></span>
<span class="line"><span>                URI spath = Paths.get(basePath, propertiesFile.getName()).toUri();</span></span>
<span class="line"><span>                UrlResource r =newUrlResource(spath);</span></span>
<span class="line"><span>if (r.exists()) {</span></span>
<span class="line"><span>                    EnvLoadUtil.loadRes(newResource[]{r}, pro);</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    当然，这里提供了项目模板生成工具，用于对基础模板项目进行一键生成</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><a href="http://pangu.jasonandhank.cn/pangu-web/layout/project-create" target="_blank" rel="noopener noreferrer">http://pangu.jasonandhank.cn/pangu-web/layout/project-create</a> JT454 0622</p>`,66)]))}const t=n(l,[["render",p],["__file","仓盒模块.html.vue"]]),c=JSON.parse('{"path":"/%E7%9B%98%E5%8F%A4/%E7%BB%84%E4%BB%B6%E4%BB%8B%E7%BB%8D/%E4%BB%93%E7%9B%92%E6%A8%A1%E5%9D%97.html","title":"仓盒模块","lang":"zh-CN","frontmatter":{"description":"仓盒模块 如何使用 image.pngimage.png xml xml xml xml java image.png开发模式 image.pngimage.png java 项目扫描配置在配置文件中。最后启动上面的main方法。 yaml 服务器启动 image.pngimage.png image.pngimage.png shell 执行./st...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/%E7%9B%98%E5%8F%A4/%E7%BB%84%E4%BB%B6%E4%BB%8B%E7%BB%8D/%E4%BB%93%E7%9B%92%E6%A8%A1%E5%9D%97.html"}],["meta",{"property":"og:title","content":"仓盒模块"}],["meta",{"property":"og:description","content":"仓盒模块 如何使用 image.pngimage.png xml xml xml xml java image.png开发模式 image.pngimage.png java 项目扫描配置在配置文件中。最后启动上面的main方法。 yaml 服务器启动 image.pngimage.png image.pngimage.png shell 执行./st..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"http://pangu.kingtsoft.com/pangu-facade/assets/project.2fd1c8a6.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-18T07:25:41.000Z"}],["meta",{"property":"article:author","content":"Cotton Eye Joe"}],["meta",{"property":"article:modified_time","content":"2024-11-18T07:25:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"仓盒模块\\",\\"image\\":[\\"http://pangu.kingtsoft.com/pangu-facade/assets/project.2fd1c8a6.png\\",\\"http://pangu.kingtsoft.com/pangu-facade/assets/image1.e07179a8.png\\",\\"http://pangu.kingtsoft.com/pangu-facade/assets/image2.6174b38c.png\\",\\"http://pangu.kingtsoft.com/pangu-facade/assets/image3.b9644e73.png\\",\\"http://pangu.kingtsoft.com/pangu-facade/assets/image4.bb420d9c.png\\",\\"http://pangu.kingtsoft.com/pangu-facade/assets/image5.fde9534b.png\\"],\\"dateModified\\":\\"2024-11-18T07:25:41.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cotton Eye Joe\\",\\"url\\":\\"https://github.com/ToDreamr\\"}]}"]]},"headers":[],"git":{"createdTime":1731914741000,"updatedTime":1731914741000,"contributors":[{"name":"九歌天上有","email":"aruixrain@gmail.com","commits":1}]},"readingTime":{"minutes":10.49,"words":3147},"filePathRelative":"盘古/组件介绍/仓盒模块.md","localizedDate":"2024年11月18日","excerpt":"","autoDesc":true}');export{t as comp,c as data};
