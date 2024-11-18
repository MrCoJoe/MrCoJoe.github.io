import{_ as a,o as t,c as d,d as r}from"./app-Bym8v7z8.js";const o={};function p(s,e){return t(),d("div",null,e[0]||(e[0]=[r('<h1 id="master公式" tabindex="-1"><a class="header-anchor" href="#master公式"><span>master公式</span></a></h1><p>在编程中，递归是非常常见的一种算法，由于代码简洁而应用广泛，但递归相比顺序执行或循环程序，时间复杂度难以计算，而master公式就是用于计算递归程序的时间复杂度。</p><p>T(N) = a*T(N/b) + O(N^d);</p><p>下面对参数进行解释:</p><p>b：子过程的样本量 a：子过程的计算次数 O(N^d)：子结果合并的时间复杂度 满足如上公式的程序都可以根据master公式计算时间复杂度：</p><p>log(b，a) &gt; d ：时间复杂度为O(N^log(b，a)) log(b，a) = d ：时间复杂度为O(N^d * logN) log(b，a) &lt; d ：时间复杂度为O(N^d)</p><p>在学习归并排序之前，我们先学习一个简单的算法:当我们求一个值的中值时，可以使用：</p><p>int mid = L + ((R - L) &gt;&gt; 1); 注意使用位运算更好，之后采用这种方法来计算平均数</p><p>这样可以避免内存泄露。</p><p>归并排序：</p><p>思想很简单，写一个临时数组，比较需要传入的对应元素，小的先放好，大的后放。</p>',11)]))}const n=a(o,[["render",p],["__file","index.html.vue"]]),m=JSON.parse('{"path":"/doc/%E7%AE%97%E6%B3%95/%E5%A4%8D%E6%9D%82%E5%BA%A6/","title":"master公式","lang":"zh-CN","frontmatter":{"feed":false,"seo":false,"head":[]},"headers":[],"git":{"createdTime":1731914741000,"updatedTime":1731914741000,"contributors":[{"name":"九歌天上有","email":"aruixrain@gmail.com","commits":1}]},"readingTime":{"minutes":0.99,"words":298},"filePathRelative":"doc/算法/复杂度/index.md","localizedDate":"2024年11月18日"}');export{n as comp,m as data};
