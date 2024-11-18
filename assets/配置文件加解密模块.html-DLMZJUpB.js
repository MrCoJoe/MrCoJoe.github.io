import{_ as n,o as i,c as a,d as e}from"./app-BSUomKXw.js";const l={};function p(t,s){return i(),a("div",null,s[0]||(s[0]=[e(`<h1 id="配置文件加解密模块" tabindex="-1"><a class="header-anchor" href="#配置文件加解密模块"><span>配置文件加解密模块</span></a></h1><blockquote><h4 id="如何使用" tabindex="-1"><a class="header-anchor" href="#如何使用"><span>如何使用</span></a></h4></blockquote><p>引入模块如下</p><div class="language-xml line-numbers-mode" data-highlighter="shiki" data-ext="xml" data-title="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dependency</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">groupId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;com.kingtsoft.pangu&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">groupId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">artifactId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;pangu-spring-profile&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">artifactId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">version</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;\${pangu.version}&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">version</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dependency</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    建立一个kt-application配置文件，案例如下，在想要加密的末级key中加入ENC@标记，则就会经过项目解析。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">server</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  ENC@port</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">N9yYmesNI0ov8vDffZ/hmXPs7d4twu50nkq1zzBBi+0=</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">#  http:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">#    port: 5667</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">servlet</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    ENC@context-path</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">RAyJbLLDJkzwZ22Jb5or5UebEJBip4JgbEVslsbbn5HcwgYw5cUlBjtmOW+7l9PY</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">spring</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">application</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ENC@name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">RAyJbLLDJkzwZ22Jb5or5cK6eVd/lIjydI4i6yifcSKmjCGx2P5+hBYR4VPeqf4S</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">#配置rabbitMq 服务器</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">rabbitmq</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    ENC@host</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">RAyJbLLDJkzwZ22Jb5or5aMwBkwBJ302xiDPuZjjXduRCBQXkrMoEkJVlz7pZbjB</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    ENC@port</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">N9yYmesNI0ov8vDffZ/hmWLxTrhBsfhdU8pRjkDKi3Y=</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    ENC@username</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">RAyJbLLDJkzwZ22Jb5or5fGHLA7f+pTugeiSWdf1R7w=</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    ENC@password</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">RAyJbLLDJkzwZ22Jb5or5cMPicASWGDfCEu71ykQmGI=</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">#虚拟host 可以不设置,使用server默认host</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">#    virtual-host: PGHost</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">#确认消息已发送到交换机(Exchange)</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">#    publisher-confirms: true</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ENC@publisher-confirm-type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">RAyJbLLDJkzwZ22Jb5or5X0XcRTHPhXBd3Smobgyi9edRi8f91FItAvkl2/ZcfRt</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">#确认消息已发送到队列(Queue)</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ENC@publisher-returns</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">TpY7U2w0kA7/Uc+4Tk2w0zLm4mLEIRYNAibxQyfXk8I=</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">datasource</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dynamic</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    #设置默认的数据源或者数据源组,默认值即为master</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    ENC@primary</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">RAyJbLLDJkzwZ22Jb5or5SJL00tyXPg5mMZL72LxAvjOND64xBY38nZpw/Qwy2IA</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    #严格匹配数据源,默认false. true未匹配到指定数据源时抛异常,false使用默认数据源</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    ENC@strict</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">TpY7U2w0kA7/Uc+4Tk2w08YSrxzFOKTLp8aKX79Iu1g=</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    #seata1.0之后支持自动代理 这里直接配置true</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    ENC@seata</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">TpY7U2w0kA7/Uc+4Tk2w0zLm4mLEIRYNAibxQyfXk8I=</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    #seata模式使用的at</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    ENC@seata-mode</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">RAyJbLLDJkzwZ22Jb5or5ZMGf62YK1LogFChXznApxE=</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    datasource</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        mysql-pangu</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            ENC@type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">RAyJbLLDJkzwZ22Jb5or5WbX+HuStzoSR3hFZpbUudgo075xb4nA5zt+HN8Slc/eMaFbElYG3aNkANh7ewBJWg==</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            ENC@url</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">RAyJbLLDJkzwZ22Jb5or5UbAn2/jNuPFkmNGK0eVjsX+qd40Ot2vMy6shXQq9DNftOs+OwSu/UpLPazRYsEEN5YHVG+ug3LhbPP5FRerSZKCHuTcvJemTEQDq9wDWdF2dBDKuYltxnn++X2pz1uppVix8vHj4DA4X8hsHPbEBtRGN5sEVZnXCqguWEluEyxw</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            ENC@username</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">RAyJbLLDJkzwZ22Jb5or5Y4zfD2vY5ghFgxB9MzlGZk=</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            ENC@password</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">RAyJbLLDJkzwZ22Jb5or5Qa9rFkRi+usgnDLpoRLno67gQHLPBqi8k1oKfNyFMYU</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            ENC@driver-class-name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">RAyJbLLDJkzwZ22Jb5or5T2tzQlTJfxI0NCZwOTi0/GnD8oyot6cmPgMTLEdBV1+</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        mysql</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            ENC@type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">RAyJbLLDJkzwZ22Jb5or5WbX+HuStzoSR3hFZpbUudgo075xb4nA5zt+HN8Slc/eMaFbElYG3aNkANh7ewBJWg==</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            ENC@url</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">RAyJbLLDJkzwZ22Jb5or5UbAn2/jNuPFkmNGK0eVjsX+qd40Ot2vMy6shXQq9DNf34swa921dsL91q829l3RungoJGZuZcS0UFYVUpBpx5Sxe+GGt4qQfzPMv5CCis8B6Izn+39TNUvsGay2G6F991gV+iwIMLa88Foklc/iK8J0wa/Xxz8q2k+vFGViIttE</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            ENC@username</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">RAyJbLLDJkzwZ22Jb5or5Y4zfD2vY5ghFgxB9MzlGZk=</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            ENC@password</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">RAyJbLLDJkzwZ22Jb5or5Qa9rFkRi+usgnDLpoRLno67gQHLPBqi8k1oKfNyFMYU</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            ENC@driver-class-name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">RAyJbLLDJkzwZ22Jb5or5T2tzQlTJfxI0NCZwOTi0/GnD8oyot6cmPgMTLEdBV1+</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">pangu</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">redis</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ENC@type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">RAyJbLLDJkzwZ22Jb5or5fwL2LnfDr1JRYR/GVuQERw=</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">rabbitMq</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ENC@receiveTimeout</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">N9yYmesNI0ov8vDffZ/hmYmsCQftoOL+bHWfJfjAiLk=</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ENC@replyTimeout</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">N9yYmesNI0ov8vDffZ/hmYmsCQftoOL+bHWfJfjAiLk=</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">hawkeye</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">metrics</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ENC@on</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">TpY7U2w0kA7/Uc+4Tk2w0zLm4mLEIRYNAibxQyfXk8I=</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ENC@isbox</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">RAyJbLLDJkzwZ22Jb5or5SIIcNljvdGlnQh1Mw1ip4g=</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ws</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ENC@enabled</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">TpY7U2w0kA7/Uc+4Tk2w0zLm4mLEIRYNAibxQyfXk8I=</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ENC@host</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">RAyJbLLDJkzwZ22Jb5or5T6IrvI4IpmM0xbl0eBeoJQ=</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ENC@port</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">N9yYmesNI0ov8vDffZ/hmc4FVqZUBvu9lw7+WjE1IVA=</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">feign</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">#  client:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">#    config:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">#      default: # 服务名，填写 default 为所有服务，或者指定某服务，例如：annoroad-beta</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">#        connectTimeout: 10000 # 连接超时，10秒</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">#        readTimeout: 20000 # 读取超时，20秒</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">httpclient</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ENC@enabled</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">TpY7U2w0kA7/Uc+4Tk2w08YSrxzFOKTLp8aKX79Iu1g=# 关闭 ApacheHttpClient</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">okhttp</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ENC@enabled</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">TpY7U2w0kA7/Uc+4Tk2w0zLm4mLEIRYNAibxQyfXk8I=# 开启 okhttp</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    盘古地址中有配置文件加解密的页面可直接</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><a href="http://pangu.jasonandhank.cn/pangu-web/layout/profile-crypto" target="_blank" rel="noopener noreferrer">http://pangu.jasonandhank.cn/pangu-web/layout/profile-crypto</a><img src="http://pangu.kingtsoft.com/pangu-facade/assets/image1.5cd52fe9.png" alt="image.png" loading="lazy"></p><blockquote><h4 id="技术原理" tabindex="-1"><a class="header-anchor" href="#技术原理"><span>技术原理</span></a></h4></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    在环境配置启动回调中，定义了ProfileLoadEnvironmentPostProcessor加载指定配置文件，</span></span>
<span class="line"><span>文件名固定，用于区别原始配置（因为原始配置的key会有检查）</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.spring.profile;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import com.kingtsoft.pangu.spring.env.EnvLoadUtil;</span></span>
<span class="line"><span>import lombok.extern.slf4j.Slf4j;</span></span>
<span class="line"><span>import org.springframework.boot.SpringApplication;</span></span>
<span class="line"><span>import org.springframework.boot.env.EnvironmentPostProcessor;</span></span>
<span class="line"><span>import org.springframework.context.annotation.Configuration;</span></span>
<span class="line"><span>import org.springframework.core.Ordered;</span></span>
<span class="line"><span>import org.springframework.core.env.ConfigurableEnvironment;</span></span>
<span class="line"><span>import org.springframework.core.env.MutablePropertySources;</span></span>
<span class="line"><span>import org.springframework.core.env.PropertiesPropertySource;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import java.io.IOException;</span></span>
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
<span class="line"><span>@Slf4j</span></span>
<span class="line"><span>@Configuration</span></span>
<span class="line"><span>public class  ProfileLoadEnvironmentPostProcessorimplementsEnvironmentPostProcessor, Ordered {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>privatestaticfinal String CRYPTO_FILE_NAME =&quot;kt-application&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>privatestaticfinal String OUT_CRYPTO_FILE_NAME =&quot;kt-start&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>private void   postProcessEnvironment(ConfigurableEnvironment environment, SpringApplication application) {</span></span>
<span class="line"><span>        MutablePropertySources propertySources = environment.getPropertySources();</span></span>
<span class="line"><span>// 加载原始的加密配置，这里只做加载，为了与以前的兼容</span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>loadCryptoSource(propertySources);</span></span>
<span class="line"><span>        } catch (IOException e) {</span></span>
<span class="line"><span>            e.printStackTrace();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private void  loadCryptoSource(MutablePropertySources propertySources) throws IOException {</span></span>
<span class="line"><span>        Properties pro =newProperties();</span></span>
<span class="line"><span>        EnvLoadUtil.loadAllEnv(pro, CRYPTO_FILE_NAME);</span></span>
<span class="line"><span>        EnvLoadUtil.loadOut(pro, OUT_CRYPTO_FILE_NAME);</span></span>
<span class="line"><span>        PropertiesPropertySource pps =newPropertiesPropertySource(&quot;classpath-crypto-pangu&quot;, pro);</span></span>
<span class="line"><span>        propertySources.addLast(pps);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>publicintgetOrder() {</span></span>
<span class="line"><span>return Ordered.HIGHEST_PRECEDENCE +9;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    然后通过文件PgEncPropertySourceBootstrapConfiguration进行对相应的符合</span></span>
<span class="line"><span>条件的key进行解析转换。并进行新属性的构造。它实现了ApplicationContextInitializer</span></span>
<span class="line"><span>接口，用于捕捉配置初始化后的回调，注意这里并未对nacos配置中心产生影响，因为nacos有自己</span></span>
<span class="line"><span>的数据结构，为了解耦解密与nacos，不会在各自中引入对方的信息，这里只是对配置文件生效。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.spring.profile;</span></span>
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
<span class="line"><span>public class  PgEncPropertySourceBootstrapConfiguration</span></span>
<span class="line"><span>implementsApplicationContextInitializer&lt;ConfigurableApplicationContext&gt;, Ordered {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>private void   initialize(ConfigurableApplicationContext applicationContext) {</span></span>
<span class="line"><span>        ConfigurableEnvironment environment = applicationContext.getEnvironment();</span></span>
<span class="line"><span>        MutablePropertySources propertySources = environment.getPropertySources();</span></span>
<span class="line"><span>for (PropertySource&lt;?&gt; propertySource : propertySources) {</span></span>
<span class="line"><span>            String name = propertySource.getName();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (propertySource instanceof OriginTrackedMapPropertySource) {</span></span>
<span class="line"><span>                OriginTrackedMapPropertySource trackedMapPropertySource = (OriginTrackedMapPropertySource) propertySource;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                Properties properties =mapToProperties(trackedMapPropertySource.getSource());</span></span>
<span class="line"><span>                Properties finPro = ProfileCryptoUtil.decryptSource(properties);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 原始的为保证尽可能小的变动，用原始的名字</span></span>
<span class="line"><span>                OriginTrackedMapPropertySource trackedMapPropertySourceNew =newOriginTrackedMapPropertySource(name, finPro, true);</span></span>
<span class="line"><span>                propertySources.replace(name, trackedMapPropertySourceNew);</span></span>
<span class="line"><span>            } else {</span></span>
<span class="line"><span>                Object pro = propertySource.getSource();</span></span>
<span class="line"><span>if (pro instanceof Properties) {</span></span>
<span class="line"><span>                    Properties properties = (Properties) pro;</span></span>
<span class="line"><span>                    Properties finPro = ProfileCryptoUtil.decryptSource(properties);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                    PropertiesPropertySource pps =newPropertiesPropertySource(name, finPro);</span></span>
<span class="line"><span>                    propertySources.replace(name, pps);</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private Properties mapToProperties(Map&lt;String, Object&gt; source) {</span></span>
<span class="line"><span>        Properties properties =newProperties();</span></span>
<span class="line"><span>        properties.putAll(source);</span></span>
<span class="line"><span>return properties;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>publicintgetOrder() {</span></span>
<span class="line"><span>return Ordered.HIGHEST_PRECEDENCE +15;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    加密解密类如下</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.spring.tools.utils;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import com.kingtosft.pangu.base.inner.common.enums.PanguResCodeEnum;</span></span>
<span class="line"><span>import com.kingtsoft.pangu.base.exception.TipException;</span></span>
<span class="line"><span>import com.kingtsoft.pangu.util.crypto.AesUtil;</span></span>
<span class="line"><span>import org.springframework.util.ObjectUtils;</span></span>
<span class="line"><span>import lombok.extern.slf4j.Slf4j;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import java.math.BigInteger;</span></span>
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
<span class="line"><span>@Slf4j</span></span>
<span class="line"><span>public class  ProfileCryptoUtil {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicstaticfinal String ENC_FLAG =&quot;ENC@&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicstaticfinal String SP_STR =&quot;@type@&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicstatic Properties decryptSource(Properties pro) {</span></span>
<span class="line"><span>        Properties finPro =newProperties();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        pro.forEach(</span></span>
<span class="line"><span>                (k, v) -&gt; {</span></span>
<span class="line"><span>if (!ObjectUtils.isEmpty(v)) {</span></span>
<span class="line"><span>                        String rel = k.toString();</span></span>
<span class="line"><span>String[] keyArr = rel.split(&quot;\\\\.&quot;, -1);</span></span>
<span class="line"><span>                        String finName = keyArr[keyArr.length -1];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (finName.startsWith(ENC_FLAG)) {</span></span>
<span class="line"><span>                            keyArr[keyArr.length -1] = keyArr[keyArr.length -1].substring(4);</span></span>
<span class="line"><span>                            String relKey = String.join(&quot;.&quot;, keyArr);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                            Object value =getRelValue(v);</span></span>
<span class="line"><span>                            finPro.put(relKey, value);</span></span>
<span class="line"><span>                        } else {</span></span>
<span class="line"><span>                            finPro.put(k, v);</span></span>
<span class="line"><span>                        }</span></span>
<span class="line"><span>                    } else {</span></span>
<span class="line"><span>                        finPro.put(k, v);</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>        );</span></span>
<span class="line"><span></span></span>
<span class="line"><span>return finPro;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicstatic Object getRelValue(Object ret) {</span></span>
<span class="line"><span>// 字符串内容段</span></span>
<span class="line"><span>int dataLength =2;</span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>            String deStr = AesUtil.decrypt(ret.toString());</span></span>
<span class="line"><span>String[] deStrArr = deStr.split(SP_STR, -1);</span></span>
<span class="line"><span>if (deStrArr.length != dataLength) {</span></span>
<span class="line"><span>thrownewTipException(PanguResCodeEnum.PROFILE_COVER_FAIL.getCode(),</span></span>
<span class="line"><span>&quot;配置文件解析异常，非法的加密参数：&quot;+ deStr);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            String type = deStrArr[0];</span></span>
<span class="line"><span>            String value = deStrArr[1];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (type.equals(String.class.getName())) {</span></span>
<span class="line"><span>return value;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (type.equals(Integer.class.getName())) {</span></span>
<span class="line"><span>return Integer.parseInt(value);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (type.equals(boolean  .class.getName())) {</span></span>
<span class="line"><span>return boolean  .parseboolean  (value);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (type.equals(BigInteger.class.getName())) {</span></span>
<span class="line"><span>returnnewBigInteger(value);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>return value;</span></span>
<span class="line"><span>        } catch (Exception e) {</span></span>
<span class="line"><span>            log.error(e.getMessage());</span></span>
<span class="line"><span>thrownewTipException(PanguResCodeEnum.PROFILE_COVER_FAIL.getCode(),</span></span>
<span class="line"><span>&quot;配置文件解析异常，非法的加密参数：&quot;+ ret.toString());</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18)]))}const d=n(l,[["render",p],["__file","配置文件加解密模块.html.vue"]]),c=JSON.parse('{"path":"/%E7%9B%98%E5%8F%A4/%E7%BB%84%E4%BB%B6%E4%BB%8B%E7%BB%8D/%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E5%8A%A0%E8%A7%A3%E5%AF%86%E6%A8%A1%E5%9D%97.html","title":"配置文件加解密模块","lang":"zh-CN","frontmatter":{"description":"配置文件加解密模块 如何使用 引入模块如下 http://pangu.jasonandhank.cn/pangu-web/layout/profile-cryptoimage.png 技术原理 java java java","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/%E7%9B%98%E5%8F%A4/%E7%BB%84%E4%BB%B6%E4%BB%8B%E7%BB%8D/%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E5%8A%A0%E8%A7%A3%E5%AF%86%E6%A8%A1%E5%9D%97.html"}],["meta",{"property":"og:title","content":"配置文件加解密模块"}],["meta",{"property":"og:description","content":"配置文件加解密模块 如何使用 引入模块如下 http://pangu.jasonandhank.cn/pangu-web/layout/profile-cryptoimage.png 技术原理 java java java"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"http://pangu.kingtsoft.com/pangu-facade/assets/image1.5cd52fe9.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-18T07:25:41.000Z"}],["meta",{"property":"article:author","content":"Cotton Eye Joe"}],["meta",{"property":"article:modified_time","content":"2024-11-18T07:25:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"配置文件加解密模块\\",\\"image\\":[\\"http://pangu.kingtsoft.com/pangu-facade/assets/image1.5cd52fe9.png\\"],\\"dateModified\\":\\"2024-11-18T07:25:41.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cotton Eye Joe\\",\\"url\\":\\"https://github.com/ToDreamr\\"}]}"]]},"headers":[],"git":{"createdTime":1731914741000,"updatedTime":1731914741000,"contributors":[{"name":"九歌天上有","email":"aruixrain@gmail.com","commits":1}]},"readingTime":{"minutes":3.45,"words":1036},"filePathRelative":"盘古/组件介绍/配置文件加解密模块.md","localizedDate":"2024年11月18日","excerpt":"","autoDesc":true}');export{d as comp,c as data};
