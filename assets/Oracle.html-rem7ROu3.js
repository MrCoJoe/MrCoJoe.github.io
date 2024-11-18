import{_ as i,o as a,c as n,d as e}from"./app-Bym8v7z8.js";const l={};function h(t,s){return a(),n("div",null,s[0]||(s[0]=[e(`<h1 id="oracle" tabindex="-1"><a class="header-anchor" href="#oracle"><span>Oracle</span></a></h1><p>建表语句：</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">create</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> table</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> DEPARTMENTS</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (  </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  deptno        </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">number</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,  </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  name</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">          varchar2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">50</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">not null</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,  </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  location</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">      varchar2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">50</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">),  </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  constraint</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> pk_departments </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">primary key</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (deptno)  </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Tables can declarative specify relationships between tables, typically referred to as referential integrity. To see how this works we can create a &quot;child&quot; table of the DEPARTMENTS table by including a foreign key in the EMPLOYEES table that references the DEPARTMENTS table. For example:</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">create</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> table</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> EMPLOYEES</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (  </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  empno             </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">number</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,  </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  name</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">              varchar2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">50</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">not null</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,  </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  job               </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">varchar2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">50</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">),  </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  manager           </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">number</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,  </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  hiredate          </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">date</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,  </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  salary            </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">number</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">7</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">),  </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  commission        </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">number</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">7</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">),  </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  deptno           </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">number</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,  </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  constraint</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> pk_employees </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">primary key</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (empno),  </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  constraint</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> fk_employees_deptno </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">foreign key</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (deptno) </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">      references</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> DEPARTMENTS (deptno)  </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>触发器：</p><p>Triggers are procedures that are stored in the database and are implicitly run, or fired, when something happens. Traditionally, triggers supported the execution of a procedural code, in Oracle procedural SQL is called a PL/SQL block. PL stands for procedural language. When an INSERT, UPDATE, or DELETE occurred on a table or view. Triggers support system and other data events on DATABASE and SCHEMA.</p><p>Triggers are frequently used to automatically populate table primary keys, the trigger examples below show an example trigger to do just this. We will use a built in function to obtain a globallally unique identifier or GUID.</p><p>创建触发器：</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">create or replace</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> trigger</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  DEPARTMENTS_BIU</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    before</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> insert</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> or</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> update</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> on</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> DEPARTMENTS</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> each </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">row</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">begin</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> inserting </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">and</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> :</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">new</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">deptno</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> is</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> null</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> then</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        :</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">new</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">deptno</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> :</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> to_number(sys_guid(), </span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          &#39;Do something&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    end</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">end</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">create or replace</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> trigger</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> EMPLOYEES_BIU</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    before</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> insert</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> or</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> update</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> on</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> EMPLOYEES</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> each </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">row</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">begin</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> inserting </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">and</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> :</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">new</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">empno</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> is</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> null</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> then</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        :</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">new</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">empno</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> :</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> to_number(sys_guid(), </span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            &#39;Do something&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    end</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">end</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">/</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now that we have tables created, and we have triggers to automatically populate our primary keys, we can add data to our tables. Because we have a parent child relationship, with the DEPARTMENTS table as the parent table, and the EMPLOYEES table as the child we will first INSERT a row into the DEPARTMENTS table.</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">select</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> * </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> departments;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>use the sentence above to select your data.</p><p>You can see that an ID will have been automatically generated. You can now insert into the EMPLOYEES table a new row but you will need to put the generated DEPTID value into your SQL INSERT statement. The examples below show how we can do this using a SQL query, but you could simply enter the department number directly.</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">insert into</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> EMPLOYEES </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">   (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, job, salary, deptno) </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">   values</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">   (</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;Sam Smith&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;Programmer&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">    5000</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">select</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> deptno </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> departments </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  where</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> name</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;Development&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">));</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">insert into</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> EMPLOYEES </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">   (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, job, salary, deptno) </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">   values</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">   (</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;Mara Martin&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;Analyst&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">   6000</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">   (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">select</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> deptno </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">   from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> departments </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">   where</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> name</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;Finance&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">));</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">insert into</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> EMPLOYEES </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">   (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, job, salary, deptno) </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">   values</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">   (</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;Yun Yates&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;Analyst&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">   5500</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">   (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">select</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> deptno </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">   from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> departments </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">   where</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> name</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;Development&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">));</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="indexing-columns" tabindex="-1"><a class="header-anchor" href="#indexing-columns"><span>Indexing Columns</span></a></h2><p>Typically developers index columns for three major reasons:</p><ol><li>To enforce unique values within a column</li><li>To improve data access performance</li><li>To prevent lock escalation when updating rows of tables that use declarative referential integrity</li></ol><blockquote><p>When a table is created and a PRIMARY KEY is specified an index is automatically created to enforce the primary key constraint. If you specific UNIQUE for a column when creating a column a unique index is also created. To see the indexes that already exist for a given table you can run the following dictionary query.</p></blockquote><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">select</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> table_name </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Table&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">       index_name </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Index&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">       column_name </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Column&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">       column_position </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Position&quot;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  user_ind_columns </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">where</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> table_name </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;EMPLOYEES&#39;</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> or</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      table_name </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;DEPARTMENTS&#39;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">order by</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> table_name, column_name, column_position</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>use a foreign key:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>create index employee_dept_no_fk_idx </span></span>
<span class="line"><span>on employees (deptno)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>when select some other data with oracle function like below:</p><p>You can sum data in tables using aggregate functions. We will use column aliases to rename columns for readability, we will also use the null value function (NVL) to allow us to properly sum columns with null values.</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>select </span></span>
<span class="line"><span>      count(*) employee_count,</span></span>
<span class="line"><span>      sum(salary) total_salary,</span></span>
<span class="line"><span>      sum(commission) total_commission,</span></span>
<span class="line"><span>      min(salary + nvl(commission,0)) min_compensation,</span></span>
<span class="line"><span>      max(salary + nvl(commission,0)) max_compensation</span></span>
<span class="line"><span>from employees;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,25)]))}const k=i(l,[["render",h],["__file","Oracle.html.vue"]]),r=JSON.parse('{"path":"/doc/%E6%95%B0%E6%8D%AE%E5%BA%93/Oracle/Oracle.html","title":"Oracle","lang":"zh-CN","frontmatter":{"feed":false,"seo":false,"head":[]},"headers":[{"level":2,"title":"Indexing Columns","slug":"indexing-columns","link":"#indexing-columns","children":[]}],"git":{"createdTime":1731914741000,"updatedTime":1731914741000,"contributors":[{"name":"九歌天上有","email":"aruixrain@gmail.com","commits":1}]},"readingTime":{"minutes":2.22,"words":665},"filePathRelative":"doc/数据库/Oracle/Oracle.md","localizedDate":"2024年11月18日"}');export{k as comp,r as data};
