<template><div><h2 id="go入门" tabindex="-1"><a class="header-anchor" href="#go入门" aria-hidden="true">#</a> Go入门</h2>
<blockquote>
<p><strong>这是我参与「第五届青训营 」伴学笔记创作活动的第 N 天</strong></p>
</blockquote>
<h2 id="博客" tabindex="-1"><a class="header-anchor" href="#博客" aria-hidden="true">#</a> 博客</h2>
<p>mock测试：<a href="https://juejin.cn/post/7169895196824436750" target="_blank" rel="noopener noreferrer">https://juejin.cn/post/7169895196824436750<ExternalLinkIcon/></a></p>
<p>单个函数测试：<a href="https://blog.csdn.net/lanyang123456/article/details/112056027" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/lanyang123456/article/details/112056027<ExternalLinkIcon/></a></p>
<h2 id="go基础-基础语法-青训营笔记" tabindex="-1"><a class="header-anchor" href="#go基础-基础语法-青训营笔记" aria-hidden="true">#</a> Go基础-基础语法 | 青训营笔记</h2>
<h3 id="_1-什么是go语言" tabindex="-1"><a class="header-anchor" href="#_1-什么是go语言" aria-hidden="true">#</a> 1. 什么是go语言</h3>
<ol>
<li>高性能、高并发</li>
<li>语法简单、学习曲线平缓</li>
<li>丰富的标准库</li>
<li>完善的工具链</li>
<li>静态链接</li>
<li>快速编译</li>
<li>跨平台</li>
<li>垃圾回收</li>
</ol>
<h3 id="_2-入门" tabindex="-1"><a class="header-anchor" href="#_2-入门" aria-hidden="true">#</a> 2. 入门</h3>
<h4 id="_2-1-开发环境" tabindex="-1"><a class="header-anchor" href="#_2-1-开发环境" aria-hidden="true">#</a> 2.1 开发环境</h4>
<p><a href="https://golang.google.cn/" target="_blank" rel="noopener noreferrer">go语言下载<ExternalLinkIcon/></a>，环境变量啥的，网上一大堆，这里就不献丑了。</p>
<ul>
<li>Golang(<a href="https://www.jetbrains.com/go/" target="_blank" rel="noopener noreferrer">https://www.jetbrains.com/go/<ExternalLinkIcon/></a>)</li>
<li>VScode(里面下载Go插件<a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">https://code.visualstudio.com/<ExternalLinkIcon/></a>)</li>
</ul>
<h4 id="_2-2-hello-world" tabindex="-1"><a class="header-anchor" href="#_2-2-hello-world" aria-hidden="true">#</a> 2.2 Hello World</h4>
<blockquote>
<p>开始大家熟悉的Hello World环节，</p>
</blockquote>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token comment">// main包的一部分，程序的入口包(入口文件)</span>
<span class="token keyword">package</span> main
<span class="token comment">// 导入fmt包，主要是用来往屏幕输入输出字符串、格式化字符串</span>
<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"Hello World"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-2-变量" tabindex="-1"><a class="header-anchor" href="#_2-2-变量" aria-hidden="true">#</a> 2.2 变量</h4>
<blockquote>
<p>Go和Java、C一样都是强类型语言，每一个变量都有它们自己的变量类型。</p>
<p>但是和许多编程语言不同，它在声明变量时将变量的类型放在变量的名称之后。这样做的好处就是可以避免像C语言中那样含糊不清的声明形式，例如：<code v-pre>int* a, b;</code> 。其中只有 a 是指针而 b 不是。其中只有 a 是指针而 b 不是。如果你想要这两个变量都是指针，则需要将它们分开书写。而在 Go 中，则可以和轻松地将它们都声明为指针类型：</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">var</span> a<span class="token punctuation">,</span> b <span class="token operator">*</span><span class="token builtin">int</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote>
<blockquote>
<p>变量声明也有所不同：</p>
<ol>
<li>
<p>显式声明：通过var关键字声明变量，也可以不加数据类型，系统会自行推导</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token comment">// var 是声明变量的关键字，name 是变量名，type 是变量的类型</span>
<span class="token comment">// var name type</span>
<span class="token keyword">var</span> key <span class="token builtin">string</span>
<span class="token keyword">var</span> value <span class="token builtin">int</span>

<span class="token comment">// 多个声明</span>
<span class="token keyword">var</span> <span class="token punctuation">(</span>
	firstName<span class="token punctuation">,</span> lastName <span class="token builtin">string</span>
    age <span class="token builtin">int</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>隐式声明：简化显式声明，移除了var关键字</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token comment">// name 是变量名，value 是变量的数值</span>
<span class="token comment">// name := value</span>
num <span class="token operator">:=</span> <span class="token number">100</span>
name <span class="token operator">:=</span> <span class="token string">"Tom"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一般来说都是用隐式声明，但是隐式声明只能在函数体内使用，如果要在函数体外声明变量只能使用显式声明。</p>
</li>
</ol>
</blockquote>
<p>Go语言的基本类型有：</p>
<ul>
<li>bool</li>
<li>string</li>
<li>int、int8、int16、int32、int64</li>
<li>uint、uint8、uint16、uint32、uint64、uintptr</li>
<li>byte // uint8 的别名</li>
<li>rune // int32 的别名 代表一个 Unicode 码</li>
<li>float32、float64</li>
<li>complex64、complex128</li>
</ul>
<blockquote>
<p>当一个变量被声明之后，系统自动赋予它该类型的零值：int 为 0，float 为 0.0，bool 为 false，string 为空字符串，指针为 nil 等。<strong>所有的内存在 Go 中都是经过初始化的。</strong></p>
</blockquote>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
    <span class="token string">"math"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 显式声明</span>
    <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token string">"initial"</span>
    <span class="token keyword">var</span> b<span class="token punctuation">,</span>c <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span>
    <span class="token keyword">var</span> d <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token keyword">var</span> e <span class="token builtin">float64</span>
    <span class="token comment">// 也可进行批量声明变量</span>
    <span class="token keyword">var</span> <span class="token punctuation">(</span>
        a <span class="token operator">=</span> <span class="token string">"initial"</span>
        b<span class="token punctuation">,</span>c <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span>
        d <span class="token operator">=</span> <span class="token boolean">true</span>
        e <span class="token builtin">float64</span>
    <span class="token punctuation">)</span>
    <span class="token comment">// 隐式声明</span>
    f <span class="token operator">:=</span> <span class="token function">float32</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
    g <span class="token operator">:=</span> a <span class="token operator">+</span> <span class="token string">"foo"</span>
    <span class="token comment">// Go中不允许变量不被使用，如果你定义了不使用会报错</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c<span class="token punctuation">,</span>d<span class="token punctuation">,</span>e<span class="token punctuation">,</span>f<span class="token punctuation">)</span><span class="token comment">// initial 1 2 true 0 0</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span>g<span class="token punctuation">)</span><span class="token comment">// initialfoo</span>
    <span class="token comment">// Go中的常量就是把var改成constant，没有特定的类型，而是根据使用的上下文来自动确定类型</span>
    <span class="token keyword">const</span> s <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">"JMjiumu"</span> 
    <span class="token keyword">const</span> h <span class="token operator">=</span> <span class="token number">500000000</span>
    <span class="token keyword">const</span> i <span class="token operator">=</span> <span class="token number">3e20</span><span class="token operator">/</span>h
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span>h<span class="token punctuation">,</span>i<span class="token punctuation">,</span>math<span class="token punctuation">.</span><span class="token function">Sin</span><span class="token punctuation">(</span>h<span class="token punctuation">)</span><span class="token punctuation">,</span>math<span class="token punctuation">.</span><span class="token function">Sin</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment">// JMjiumu 500000000 6e+11 -0.28470407323754404 0.7591864109375384</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-3-if-else" tabindex="-1"><a class="header-anchor" href="#_2-3-if-else" aria-hidden="true">#</a> 2.3 if-else</h4>
<blockquote>
<p>和C、C++差不多，不过if后面不需要小括号，如果加了保存时会自动帮你删除，并且if后的语句块必须要加大括号，不加编译都会出错。</p>
<p>在判断语句前还可以添加一些简单的执行语句。</p>
</blockquote>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token comment">// 小括号</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token number">7</span><span class="token operator">%</span><span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span>❌哒咩哒咩
<span class="token keyword">if</span> <span class="token number">7</span><span class="token operator">%</span><span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span>✅
<span class="token comment">// 大括号</span>
<span class="token keyword">if</span> <span class="token number">7</span><span class="token operator">%</span><span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span> fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"hhh"</span><span class="token punctuation">)</span> ❌哒咩呦
<span class="token keyword">if</span> <span class="token number">7</span><span class="token operator">%</span><span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>✅
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"hhh"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token number">7</span><span class="token operator">%</span><span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"7 is even"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"7 is odd"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 执行简单语句</span>
    <span class="token keyword">if</span> num <span class="token operator">:=</span> <span class="token number">9</span><span class="token punctuation">;</span> num <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>num<span class="token punctuation">,</span> <span class="token string">"is negative"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> num <span class="token operator">&lt;</span> <span class="token number">10</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>num<span class="token punctuation">,</span> <span class="token string">"has 1 digit"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>num<span class="token punctuation">,</span> <span class="token string">"has multiple digits"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-4-循环" tabindex="-1"><a class="header-anchor" href="#_2-4-循环" aria-hidden="true">#</a> 2.4 循环</h4>
<blockquote>
<p>Go语言中没有while循环，没有do-while循环，只有for循环，同样不用加小括号，其余和C、C++等基本相同，可以用break跳出，continue继续循环等等操作。</p>
</blockquote>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    i <span class="token operator">:=</span> <span class="token number">1</span>
    <span class="token comment">// 相当于while条件为true，死循环</span>
    <span class="token keyword">for</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"loop"</span><span class="token punctuation">)</span>
        <span class="token keyword">break</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> j <span class="token operator">:=</span> <span class="token number">7</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token number">9</span><span class="token punctuation">;</span> j<span class="token operator">++</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">for</span> n <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> n <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> n<span class="token operator">++</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> n<span class="token operator">%</span><span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
            <span class="token keyword">continue</span>
        <span class="token punctuation">}</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> i <span class="token operator">&lt;=</span> <span class="token number">3</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
        i <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-5-switch" tabindex="-1"><a class="header-anchor" href="#_2-5-switch" aria-hidden="true">#</a> 2.5 switch</h4>
<blockquote>
<ol>
<li>switch没有break不会继续往后执行，而是找到目标后直接会进行退出</li>
<li>switch后面可以使用任意的变量类型（字符串、结构体），甚至可以取代任何if-else语句，也可以不加如何变量，在case里写条件分支，这样比用多个if-else逻辑会更加清晰</li>
</ol>
</blockquote>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
    <span class="token string">"time"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    a <span class="token operator">:=</span> <span class="token number">5</span>
    <span class="token keyword">switch</span> a <span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token number">1</span><span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"学Go的第1天..."</span><span class="token punctuation">)</span>
        <span class="token keyword">case</span> <span class="token number">5</span><span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"学Go的第5天..."</span><span class="token punctuation">)</span>
        <span class="token keyword">case</span> <span class="token number">10</span><span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"学Go的第10天..."</span><span class="token punctuation">)</span>
        <span class="token keyword">case</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"..."</span><span class="token punctuation">)</span>
        <span class="token keyword">default</span><span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"学个锤子，不学了🥳"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    t <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">switch</span> <span class="token punctuation">{</span>
        <span class="token keyword">case</span> t<span class="token punctuation">.</span><span class="token function">Hour</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">12</span><span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"It's before noon"</span><span class="token punctuation">)</span>
        <span class="token keyword">default</span><span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"It's after noon"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-6-数组" tabindex="-1"><a class="header-anchor" href="#_2-6-数组" aria-hidden="true">#</a> 2.6 数组</h4>
<blockquote>
<p>数组和其他语言大体相同，但是在真实业务代码里面，我们很少直接使用数组，因为它长度是固定的，我们用的更多的是切片</p>
</blockquote>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> a <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">int</span>
    a<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">100</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> a<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment">// 0 100 5</span>

    b <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token comment">// [1 2 3 4 5]</span>

    <span class="token keyword">var</span> twoD <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token builtin">int</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> j <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> j<span class="token operator">++</span> <span class="token punctuation">{</span>
            twoD<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> i <span class="token operator">+</span> j
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>twoD<span class="token punctuation">)</span><span class="token comment">// [[0 1 2] [1 2 3]]有一说一，没有逗号看得有点不习惯😂</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-7-切片" tabindex="-1"><a class="header-anchor" href="#_2-7-切片" aria-hidden="true">#</a> 2.7 切片</h4>
<blockquote>
<p>切片不同于数组可以任意更改长度，也有更多丰富的操作，有点像Python的切片。</p>
<p>slice的实际上是一个数组存储了一个长度和一个容量，加一个指向一个数组的指针，Go 支持切片运算符 <code v-pre>s[i:p]</code>，其中：</p>
<ul>
<li><code v-pre>s</code> 表示数组。</li>
<li><code v-pre>i</code> 表示指向要添加到新切片的基础数组（或另一个切片）的第一个元素的指针。 变量 <code v-pre>i</code> 对应于数组 <code v-pre>array[i]</code> 中索引位置 <code v-pre>i</code> 处的元素。 请记住，此元素不一定是基础数组的第一个元素 <code v-pre>array[0]</code>。</li>
<li><code v-pre>p</code> 表示创建新切片时要使用的基础数组中的元素数目。 变量 <code v-pre>p</code> 对应于可用于新切片的基础数组中的最后一个元素。 可在位置 <code v-pre>array[i+1]</code> 找到基础数组中位置 <code v-pre>p</code> 处的元素。 请注意，此元素不一定是基础数组的最后一个元素 <code v-pre>array[len(array)-1]</code>。</li>
</ul>
<p>切片容量是<code v-pre>p - i</code>，但是切片长度是<code v-pre>len(s) - i</code>，不要忘记<code v-pre>i</code>是指针，<code v-pre>p</code>只是显示的末尾而已，实际上的末尾是数组的最后一个位置。</p>
<p>切片可以通过内置函数<code v-pre>make()</code>来创建，也可以像数组一样创建：</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token comment">// name为变量名，type为数据类型，len为切片长度，cap为切片容量</span>
name <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">type</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">,</span> <span class="token builtin">cap</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> name <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">]</span>
name <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>切片也可以通过内置函数<code v-pre>append()</code>来动态地增加元素</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>slice <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span>
slice <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>slice<span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
<span class="token comment">// slice[1 2 3 4 5]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 使用make创建切片</span>
    s <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
    s<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"a"</span>
    s<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"b"</span>
    s<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"c"</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"get:"</span><span class="token punctuation">,</span> s<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>   <span class="token comment">// c</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"len:"</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 3</span>
    <span class="token comment">// 添加元素</span>
    s <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> <span class="token string">"d"</span><span class="token punctuation">)</span>
    s <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> <span class="token string">"e"</span><span class="token punctuation">,</span> <span class="token string">"f"</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token comment">// [a b c d e f]</span>
    <span class="token comment">// 创建切片</span>
    c <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token function">copy</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> s<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token comment">// [a b c d e f]</span>
    <span class="token comment">// 将s从2切到5</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">:</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// [c d e]</span>
    <span class="token comment">// :前没有数值默认从0开始</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment">// [a b c d e]</span>
    <span class="token comment">// :后没有数值默认到最后一位</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment">// [c d e f]</span>
    <span class="token comment">// 像创建数组一样创建切片，此时可以看做是数组</span>
    good <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">"g"</span><span class="token punctuation">,</span> <span class="token string">"o"</span><span class="token punctuation">,</span> <span class="token string">"o"</span><span class="token punctuation">,</span> <span class="token string">"d"</span><span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>good<span class="token punctuation">)</span> <span class="token comment">// [g o o d]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-8-map" tabindex="-1"><a class="header-anchor" href="#_2-8-map" aria-hidden="true">#</a> 2.8 map</h4>
<blockquote>
<p>map（映射）在其他编程语言里面，它可能可以叫做哈希或者字典，map是实际使用过程中最频繁用到的数据结构。</p>
<p>同样是使用<code v-pre>make</code>进行创建：</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token comment">// 第一个类型为key的类型，第二个为value的类型</span>
temp <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以从里面去存储或者取出键值对。可以用delete 从里面删除键值对：</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>temp <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span>
<span class="token comment">// 添加，直接添加</span>
temp<span class="token punctuation">[</span><span class="token string">"九牧"</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">]</span>
temp<span class="token punctuation">[</span><span class="token string">"Tom"</span><span class="token punctuation">,</span> <span class="token number">666</span><span class="token punctuation">]</span>
<span class="token comment">// 删除，使用delete函数</span>
<span class="token function">delete</span><span class="token punctuation">(</span>temp<span class="token punctuation">,</span> <span class="token string">"Tom"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>golang的map是完全无序的，遍历的时候不会按照字母顺序，也不会按照插入顺序输出，而是随机顺序。</p>
</blockquote>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    m <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span>
    m<span class="token punctuation">[</span><span class="token string">"one"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span>
    m<span class="token punctuation">[</span><span class="token string">"two"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">2</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span>           <span class="token comment">// map[one:1 two:2]</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">len</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">)</span>      <span class="token comment">// 2</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>m<span class="token punctuation">[</span><span class="token string">"one"</span><span class="token punctuation">]</span><span class="token punctuation">)</span>    <span class="token comment">// 1</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>m<span class="token punctuation">[</span><span class="token string">"unknow"</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// 0</span>

    r<span class="token punctuation">,</span> ok <span class="token operator">:=</span> m<span class="token punctuation">[</span><span class="token string">"unknow"</span><span class="token punctuation">]</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>r<span class="token punctuation">,</span> ok<span class="token punctuation">)</span> <span class="token comment">// 0 false</span>

    <span class="token function">delete</span><span class="token punctuation">(</span>m<span class="token punctuation">,</span> <span class="token string">"one"</span><span class="token punctuation">)</span>

    m2 <span class="token operator">:=</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token string">"one"</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">"two"</span><span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">}</span>
    <span class="token keyword">var</span> m3 <span class="token operator">=</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token string">"one"</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">"two"</span><span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>m2<span class="token punctuation">,</span> m3<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-9-range" tabindex="-1"><a class="header-anchor" href="#_2-9-range" aria-hidden="true">#</a> 2.9 range</h4>
<blockquote>
<p>对于一个slice或者一个map的话，可以用range来快速追历，这样代码能够更加简洁。range遍历的时候，对于数组会返回两个值。第一个是索引，第二个是对应位置的值。如果我们不需要索引的话，我们可以用下划线来忽略。</p>
</blockquote>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    nums <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">}</span>
    sum <span class="token operator">:=</span> <span class="token number">0</span>
    <span class="token keyword">for</span> i<span class="token punctuation">,</span> num <span class="token operator">:=</span> <span class="token keyword">range</span> nums <span class="token punctuation">{</span>
        sum <span class="token operator">+=</span> num
        <span class="token keyword">if</span> num <span class="token operator">==</span> <span class="token number">2</span> <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"index:"</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> <span class="token string">"num:"</span><span class="token punctuation">,</span> num<span class="token punctuation">)</span> <span class="token comment">// index: 0 num: 2</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span> <span class="token comment">// 9</span>

    m <span class="token operator">:=</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">"a"</span><span class="token punctuation">:</span> <span class="token string">"A"</span><span class="token punctuation">,</span> <span class="token string">"b"</span><span class="token punctuation">:</span> <span class="token string">"B"</span><span class="token punctuation">}</span>
    <span class="token keyword">for</span> k<span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> m <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>k<span class="token punctuation">,</span> v<span class="token punctuation">)</span> <span class="token comment">// b 8; a A</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> k <span class="token operator">:=</span> <span class="token keyword">range</span> m <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"key"</span><span class="token punctuation">,</span> k<span class="token punctuation">)</span> <span class="token comment">// key a; key b</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-10-函数" tabindex="-1"><a class="header-anchor" href="#_2-10-函数" aria-hidden="true">#</a> 2.10 函数</h4>
<blockquote>
<p>这个是Golang里面一个简单的实现两个变量相加的函数。Golang和其他很多语言不一样的是，变星类型是后置的。</p>
<p>Golang里面的函数原生支持返回多个值。在实际的业务逻辑代码里面几乎所有的函数都返回两个值，第一个是真正的返回结果，第二个值是一个错误信息。</p>
</blockquote>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">add</span><span class="token punctuation">(</span>a <span class="token builtin">int</span><span class="token punctuation">,</span> b <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> b
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">add2</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> b
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">exists</span><span class="token punctuation">(</span>m <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> k <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>v <span class="token builtin">string</span><span class="token punctuation">,</span> ok <span class="token builtin">bool</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    v<span class="token punctuation">,</span> ok <span class="token operator">=</span> m<span class="token punctuation">[</span>k<span class="token punctuation">]</span>
    <span class="token keyword">return</span> v<span class="token punctuation">,</span> ok
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    res <span class="token operator">:=</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token comment">// 3</span>

    v<span class="token punctuation">,</span> ok <span class="token operator">:=</span> <span class="token function">exists</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">"a"</span><span class="token punctuation">:</span> <span class="token string">"A"</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">"a"</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>v<span class="token punctuation">,</span> ok<span class="token punctuation">)</span> <span class="token comment">// A True</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-11-指针" tabindex="-1"><a class="header-anchor" href="#_2-11-指针" aria-hidden="true">#</a> 2.11 指针</h4>
<blockquote>
<p>go里面也支持指针。当然，相比C和C++里面的指针，支持的操作很有限。指针的一个主要用途就是对于传入参数进行修改。</p>
<p>这个函数试图把一个变量+2，但是单纯像上面这种写法其实是无救的，因为传入函数的参数实际上是一个拷贝，那也说这个+2，是对那个拷贝进行了+2，并不起作用。如果我们需要起作用的话，那么我们需要把那个类型写成指针类型，那么为了类型匹配，调用的时候会加一个&amp;符号。</p>
</blockquote>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">add2</span><span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    n <span class="token operator">+=</span> <span class="token number">2</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">add2ptr</span><span class="token punctuation">(</span>n <span class="token operator">*</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token operator">*</span>n <span class="token operator">+=</span> <span class="token number">2</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    n <span class="token operator">:=</span> <span class="token number">5</span>
    <span class="token function">add2</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token comment">// 5</span>
    <span class="token function">add2ptr</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>n<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token comment">// 7</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-12-结构体" tabindex="-1"><a class="header-anchor" href="#_2-12-结构体" aria-hidden="true">#</a> 2.12 结构体</h4>
<blockquote>
<p>结构体的话是带类型的字段的集合，比加这里user结构包含了两个字段,，name和password，我们可以用结构体的名称去初始化一个结构体变量，构造的时候需要传入每个字段的初始值。也可以用这种键值对的方式去指定初始值，这种可以只对一部份字段进行初始化。同样的结构体我们也能支持指针，这样能够实现对于结构体的修改，也可以在某些情况下避免一些大结构体的拷贝开销。</p>
</blockquote>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">type</span> user <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    name     <span class="token builtin">string</span>
    password <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    a <span class="token operator">:=</span> user<span class="token punctuation">{</span>name<span class="token punctuation">:</span> <span class="token string">"wang"</span><span class="token punctuation">,</span> password<span class="token punctuation">:</span> <span class="token string">"1024"</span><span class="token punctuation">}</span>
    b <span class="token operator">:=</span> user<span class="token punctuation">{</span><span class="token string">"wang"</span><span class="token punctuation">,</span> <span class="token string">"1024"</span><span class="token punctuation">}</span>
    c <span class="token operator">:=</span> user<span class="token punctuation">{</span>name<span class="token punctuation">:</span> <span class="token string">"wang"</span><span class="token punctuation">}</span>
    c<span class="token punctuation">.</span>password <span class="token operator">=</span> <span class="token string">"1024"</span>
    <span class="token keyword">var</span> d user
    d<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">"wang"</span>
    d<span class="token punctuation">.</span>password <span class="token operator">=</span> <span class="token string">"1024"</span>

    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">,</span> d<span class="token punctuation">)</span>                 <span class="token comment">// {wang 1024} {wang 1024} {wang 1024} {wang 1024}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">checkPassword</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token string">"haha"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>   <span class="token comment">// false</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">checkPassword2</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>a<span class="token punctuation">,</span> <span class="token string">"haha"</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">checkPassword</span><span class="token punctuation">(</span>u user<span class="token punctuation">,</span> password <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> u<span class="token punctuation">.</span>password <span class="token operator">==</span> password
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">checkPassword2</span><span class="token punctuation">(</span>u <span class="token operator">*</span>user<span class="token punctuation">,</span> password <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> u<span class="token punctuation">.</span>password <span class="token operator">==</span> password
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-13-结构体方法" tabindex="-1"><a class="header-anchor" href="#_2-13-结构体方法" aria-hidden="true">#</a> 2.13 结构体方法</h4>
<blockquote>
<p>在Golang里面可以为结构体去定义一些方法。会有一点类似其他语言里面的类成员函数。</p>
</blockquote>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">type</span> user <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    name     <span class="token builtin">string</span>
    password <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>u user<span class="token punctuation">)</span> <span class="token function">checkPassword</span><span class="token punctuation">(</span>password <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> u<span class="token punctuation">.</span>password <span class="token operator">==</span> password
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>u <span class="token operator">*</span>user<span class="token punctuation">)</span> <span class="token function">resetPassword</span><span class="token punctuation">(</span>password <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    u<span class="token punctuation">.</span>password <span class="token operator">=</span> password
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    a <span class="token operator">:=</span> user<span class="token punctuation">{</span>name<span class="token punctuation">:</span> <span class="token string">"wang"</span><span class="token punctuation">,</span> password<span class="token punctuation">:</span> <span class="token string">"1024"</span><span class="token punctuation">}</span>
    a<span class="token punctuation">.</span><span class="token function">resetPassword</span><span class="token punctuation">(</span><span class="token string">"2048"</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span><span class="token function">checkPassword</span><span class="token punctuation">(</span><span class="token string">"2048"</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-14-错误处理" tabindex="-1"><a class="header-anchor" href="#_2-14-错误处理" aria-hidden="true">#</a> 2.14 错误处理</h4>
<h4 id="_2-15-字符串操作" tabindex="-1"><a class="header-anchor" href="#_2-15-字符串操作" aria-hidden="true">#</a> 2.15 字符串操作</h4>
<blockquote>
<p>其实下面都看得懂的，和其他语言都很相似</p>
</blockquote>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
    <span class="token string">"strings"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    a <span class="token operator">:=</span> <span class="token string">"hello"</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>strings<span class="token punctuation">.</span><span class="token function">Contains</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token string">"ll"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>                <span class="token comment">// true</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>strings<span class="token punctuation">.</span><span class="token function">Count</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token string">"l"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>                    <span class="token comment">// 2</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>strings<span class="token punctuation">.</span><span class="token function">HasPrefix</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token string">"he"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>               <span class="token comment">// true</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>strings<span class="token punctuation">.</span><span class="token function">HasSuffix</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token string">"llo"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>              <span class="token comment">// true</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>strings<span class="token punctuation">.</span><span class="token function">Index</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token string">"ll"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>                   <span class="token comment">// 2</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>strings<span class="token punctuation">.</span><span class="token function">Join</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">"he"</span><span class="token punctuation">,</span> <span class="token string">"llo"</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">"-"</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// he-llo</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>strings<span class="token punctuation">.</span><span class="token function">Repeat</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>                     <span class="token comment">// hellohello</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>strings<span class="token punctuation">.</span><span class="token function">Replace</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token string">"e"</span><span class="token punctuation">,</span> <span class="token string">"E"</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>         <span class="token comment">// hEllo</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>strings<span class="token punctuation">.</span><span class="token function">Split</span><span class="token punctuation">(</span><span class="token string">"a-b-c"</span><span class="token punctuation">,</span> <span class="token string">"-"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>              <span class="token comment">// [a b c]</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>strings<span class="token punctuation">.</span><span class="token function">ToLower</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span>                       <span class="token comment">// hello</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>strings<span class="token punctuation">.</span><span class="token function">ToUpper</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span>                       <span class="token comment">// HELLO</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">len</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span>                                   <span class="token comment">// 5</span>
    b <span class="token operator">:=</span> <span class="token string">"你好"</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">len</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 6</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-16-字符串格式化" tabindex="-1"><a class="header-anchor" href="#_2-16-字符串格式化" aria-hidden="true">#</a> 2.16 字符串格式化</h4>
<blockquote>
<p>%v来打印任意类型的变量，可以用%+v打印详细结果，%#v则更详细</p>
</blockquote>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">type</span> point <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    x<span class="token punctuation">,</span> y <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    s <span class="token operator">:=</span> <span class="token string">"hello"</span>
    n <span class="token operator">:=</span> <span class="token number">123</span>
    p <span class="token operator">:=</span> point<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> n<span class="token punctuation">)</span> <span class="token comment">// hello 123</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span>    <span class="token comment">// {1 2}</span>

    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"s=%v\n"</span><span class="token punctuation">,</span> s<span class="token punctuation">)</span>  <span class="token comment">// s=hello</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"n=%v\n"</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span>  <span class="token comment">// n=123</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"p=%v\n"</span><span class="token punctuation">,</span> p<span class="token punctuation">)</span>  <span class="token comment">// p={1 2}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"p=%+v\n"</span><span class="token punctuation">,</span> p<span class="token punctuation">)</span> <span class="token comment">// p={x:1 y:2}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"p=%#v\n"</span><span class="token punctuation">,</span> p<span class="token punctuation">)</span> <span class="token comment">// p=main.point{x:1, y:2}</span>

    f <span class="token operator">:=</span> <span class="token number">3.141592653</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span>          <span class="token comment">// 3.141592653</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%.2f\n"</span><span class="token punctuation">,</span> f<span class="token punctuation">)</span> <span class="token comment">// 3.14</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-17-json处理" tabindex="-1"><a class="header-anchor" href="#_2-17-json处理" aria-hidden="true">#</a> 2.17 JSON处理</h4>
<blockquote>
<p>可以使用<code v-pre>json.Marshal</code>函数将字段进行序列化，序列化之后的字符串也能够用<code v-pre>JSON.unmarshaler</code>去反序列化到一个空的变量里面</p>
</blockquote>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"encoding/json"</span>
	<span class="token string">"fmt"</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> userInfo <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Name  <span class="token builtin">string</span>
	Age   <span class="token builtin">int</span> <span class="token string">`json:"age"`</span>
	Hobby <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	a <span class="token operator">:=</span> userInfo<span class="token punctuation">{</span>Name<span class="token punctuation">:</span> <span class="token string">"wang"</span><span class="token punctuation">,</span> Age<span class="token punctuation">:</span> <span class="token number">18</span><span class="token punctuation">,</span> Hobby<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">"Golang"</span><span class="token punctuation">,</span> <span class="token string">"TypeScript"</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
	buf<span class="token punctuation">,</span> err <span class="token operator">:=</span> json<span class="token punctuation">.</span><span class="token function">Marshal</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token function">panic</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span>         <span class="token comment">// [123 34 78 97...]</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// {"Name":"wang","age":18,"Hobby":["Golang","TypeScript"]}</span>

	buf<span class="token punctuation">,</span> err <span class="token operator">=</span> json<span class="token punctuation">.</span><span class="token function">MarshalIndent</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">,</span> <span class="token string">"\t"</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token function">panic</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span><span class="token punctuation">)</span>

	<span class="token keyword">var</span> b userInfo
	err <span class="token operator">=</span> json<span class="token punctuation">.</span><span class="token function">Unmarshal</span><span class="token punctuation">(</span>buf<span class="token punctuation">,</span> <span class="token operator">&amp;</span>b<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token function">panic</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%#v\n"</span><span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token comment">// main.userInfo{Name:"wang", Age:18, Hobby:[]string{"Golang", "TypeScript"}}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-18-时间处理" tabindex="-1"><a class="header-anchor" href="#_2-18-时间处理" aria-hidden="true">#</a> 2.18 时间处理</h4>
<blockquote>
<p>Go里基本上都是使用time来处理时间有关操作，有非常多有关时间的方法，得到的时间都是时间戳，也就是以纳秒为单位的。</p>
</blockquote>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
    <span class="token string">"time"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    now <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>now<span class="token punctuation">)</span> <span class="token comment">// 2022-03-27 18:04:59.433297 +0800 CST m=+0.000087933</span>
    t <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Date</span><span class="token punctuation">(</span><span class="token number">2022</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">27</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">36</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> time<span class="token punctuation">.</span>UTC<span class="token punctuation">)</span>
    t2 <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Date</span><span class="token punctuation">(</span><span class="token number">2022</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">27</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">36</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> time<span class="token punctuation">.</span>UTC<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span>                                                  <span class="token comment">// 2022-03-27 01:25:36 +0000 UTC</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>t<span class="token punctuation">.</span><span class="token function">Year</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> t<span class="token punctuation">.</span><span class="token function">Month</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> t<span class="token punctuation">.</span><span class="token function">Day</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> t<span class="token punctuation">.</span><span class="token function">Hour</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> t<span class="token punctuation">.</span><span class="token function">Minute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 2022 March 27 1 25</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>t<span class="token punctuation">.</span><span class="token function">Format</span><span class="token punctuation">(</span><span class="token string">"2006-01-02 15:04:05"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>                    <span class="token comment">// 2022-03-27 01:25:36</span>
    diff <span class="token operator">:=</span> t2<span class="token punctuation">.</span><span class="token function">Sub</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>diff<span class="token punctuation">)</span>                           <span class="token comment">// 1h5m0s</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>diff<span class="token punctuation">.</span><span class="token function">Minutes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> diff<span class="token punctuation">.</span><span class="token function">Seconds</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 65 3900</span>
    t3<span class="token punctuation">,</span> err <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span><span class="token string">"2006-01-02 15:04:05"</span><span class="token punctuation">,</span> <span class="token string">"2022-03-27 01:25:36"</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token function">panic</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>t3 <span class="token operator">==</span> t<span class="token punctuation">)</span>    <span class="token comment">// true</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>now<span class="token punctuation">.</span><span class="token function">Unix</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 1648738080</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-19-数字解析" tabindex="-1"><a class="header-anchor" href="#_2-19-数字解析" aria-hidden="true">#</a> 2.19 数字解析</h4>
<blockquote>
<p>有关字符串与数字之间转换就要用到<code v-pre>strconv</code>包了，它提供了许多函数来实现字符串和整数、浮点数、布尔值之间的转换</p>
</blockquote>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
    <span class="token string">"strconv"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    f<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">ParseFloat</span><span class="token punctuation">(</span><span class="token string">"1.234"</span><span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span> <span class="token comment">// 1.234</span>

    n<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">ParseInt</span><span class="token punctuation">(</span><span class="token string">"111"</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token comment">// 111</span>

    n<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">=</span> strconv<span class="token punctuation">.</span><span class="token function">ParseInt</span><span class="token punctuation">(</span><span class="token string">"0x1000"</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token comment">// 4096</span>

    n2<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">Atoi</span><span class="token punctuation">(</span><span class="token string">"123"</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>n2<span class="token punctuation">)</span> <span class="token comment">// 123</span>

    n2<span class="token punctuation">,</span> err <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">Atoi</span><span class="token punctuation">(</span><span class="token string">"AAA"</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>n2<span class="token punctuation">,</span> err<span class="token punctuation">)</span> <span class="token comment">// 0 strconv.Atoi: parsing "AAA": invalid syntax</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-20-进程信息" tabindex="-1"><a class="header-anchor" href="#_2-20-进程信息" aria-hidden="true">#</a> 2.20 进程信息</h4>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
    <span class="token string">"os"</span>
    <span class="token string">"os/exec"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// go run example/20-env/main.go a b c d</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>Args<span class="token punctuation">)</span>           <span class="token comment">// [/var/folders/8p/n34xxfnx38dg8bv_x8l62t_m0000gn/T/go-build3406981276/b001/exe/main a b c d]</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span><span class="token function">Getenv</span><span class="token punctuation">(</span><span class="token string">"PATH"</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// /usr/local/go/bin...</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span><span class="token function">Setenv</span><span class="token punctuation">(</span><span class="token string">"AA"</span><span class="token punctuation">,</span> <span class="token string">"BB"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    buf<span class="token punctuation">,</span> err <span class="token operator">:=</span> exec<span class="token punctuation">.</span><span class="token function">Command</span><span class="token punctuation">(</span><span class="token string">"grep"</span><span class="token punctuation">,</span> <span class="token string">"127.0.0.1"</span><span class="token punctuation">,</span> <span class="token string">"/etc/hosts"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">CombinedOutput</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token function">panic</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 127.0.0.1       localhost</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-项目实战" tabindex="-1"><a class="header-anchor" href="#_3-项目实战" aria-hidden="true">#</a> 3. 项目实战</h3>
<h4 id="_3-1-猜谜游戏" tabindex="-1"><a class="header-anchor" href="#_3-1-猜谜游戏" aria-hidden="true">#</a> 3.1 猜谜游戏</h4>
<blockquote>
<p>在这个游戏里面，程序首先会生成一个介于1到100之间的随机整数，然后提示玩家进行猜测。玩家每次输入一个数字，程序会告诉玩家这个猜测的值是高于还是低于那个秘密的随机数，并且让玩家再次猜测。如果猜对了，就告诉玩家胜利并且退出程序。</p>
</blockquote>
<h5 id="_3-1-1-生成随机数" tabindex="-1"><a class="header-anchor" href="#_3-1-1-生成随机数" aria-hidden="true">#</a> 3.1.1 生成随机数</h5>
<blockquote>
<p><code v-pre>math/rand</code>是 Go 语言中专门用来做与随机数相关操作的包，主要有生成随机数、随机种子等方法</p>
<ul>
<li><code v-pre>rand.Intn(n)</code>生成一个值在 [0, n) 区间的随机整数</li>
<li><code v-pre>rand.Seed(seed)</code>以设置随机种子，seed 为 <code v-pre>int64</code> 类型</li>
</ul>
<p><code v-pre>time.Now().UnixNano()</code>是获取当前时间的时间戳（以纳秒为单位）</p>
</blockquote>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
    <span class="token string">"math/rand"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 规定随机数的最大区间范围</span>
    maxNum <span class="token operator">:=</span> <span class="token number">100</span>
    <span class="token comment">// 随机生成[0, maxNum)区间中的一个整数</span>
    secretNumber <span class="token operator">:=</span> rand<span class="token punctuation">.</span><span class="token function">Intn</span><span class="token punctuation">(</span>maxNum<span class="token punctuation">)</span>
    <span class="token comment">// 打印该随机数字</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"The secret number is "</span><span class="token punctuation">,</span> secretNumber<span class="token punctuation">)</span>
    <span class="token comment">// 但是如果你多执行几次，会发现一直都是81这个数字，why？因为我们没有设置随机数种子</span>
    <span class="token comment">// 使用math/rand之前需要设置随机数种子，否则的话每一次都会生成相同的随机数序列。</span>
    <span class="token comment">// 一般惯例用法是在程序启动的时候，用启动的时间戳来初始化随机数种子。</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
    <span class="token string">"math/rand"</span>
    <span class="token string">"time"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 规定随机数的最大区间范围</span>
    maxNum <span class="token operator">:=</span> <span class="token number">100</span>
    <span class="token comment">// 设置随机数种子，将种子设置为当前时间戳</span>
    rand<span class="token punctuation">.</span><span class="token function">Seed</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">UnixNano</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment">// 随机生成[0, maxNum)区间中的一个整数</span>
    secretNumber <span class="token operator">:=</span> rand<span class="token punctuation">.</span><span class="token function">Intn</span><span class="token punctuation">(</span>maxNum<span class="token punctuation">)</span>
    <span class="token comment">// 打印该随机数字</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"The secret number is "</span><span class="token punctuation">,</span> secretNumber<span class="token punctuation">)</span>
    <span class="token comment">// 多执行几次，就不再会是同一个数字了</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_3-1-2-读取用户输入" tabindex="-1"><a class="header-anchor" href="#_3-1-2-读取用户输入" aria-hidden="true">#</a> 3.1.2 读取用户输入</h5>
<blockquote></blockquote>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"bufio"</span>
    <span class="token string">"fmt"</span>
    <span class="token string">"math/rand"</span>
    <span class="token string">"os"</span>
    <span class="token string">"strconv"</span>
    <span class="token string">"strings"</span>
    <span class="token string">"time"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ------系统生成随机数部分-----</span>
    maxNum <span class="token operator">:=</span> <span class="token number">100</span>
    rand<span class="token punctuation">.</span><span class="token function">Seed</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">UnixNano</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    secretNumber <span class="token operator">:=</span> rand<span class="token punctuation">.</span><span class="token function">Intn</span><span class="token punctuation">(</span>maxNum<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"The secret number is "</span><span class="token punctuation">,</span> secretNumber<span class="token punctuation">)</span>
    <span class="token comment">// ------读取用户输入部分--------</span>
    <span class="token comment">// 提示用户输入猜测数字</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"Please input your guess"</span><span class="token punctuation">)</span>
    reader <span class="token operator">:=</span> bufio<span class="token punctuation">.</span><span class="token function">NewReader</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>Stdin<span class="token punctuation">)</span>
    <span class="token comment">// 进行错误处理</span>
    input<span class="token punctuation">,</span> err <span class="token operator">:=</span> reader<span class="token punctuation">.</span><span class="token function">ReadString</span><span class="token punctuation">(</span><span class="token char">'\n'</span><span class="token punctuation">)</span>
    <span class="token comment">// 如果err不为空，那么就说明执行过程中返回了错误信息，那就直接打印出来</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"An error occured while reading input. Please try again"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 去掉换行符，将字符串首尾的 \r 和 \n 去掉</span>
    input <span class="token operator">=</span> strings<span class="token punctuation">.</span><span class="token function">Trim</span><span class="token punctuation">(</span>input<span class="token punctuation">,</span> <span class="token string">"\r\n"</span><span class="token punctuation">)</span>
    <span class="token comment">// 将input转化为数字</span>
    guess<span class="token punctuation">,</span> err <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">Atoi</span><span class="token punctuation">(</span>input<span class="token punctuation">)</span>
    <span class="token comment">// 进行错误处理</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token comment">// 打印错误信息</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"Invalid input. Please enter an integer value"</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 输出用户输入数字</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"You guess is"</span><span class="token punctuation">,</span> guess<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_3-1-3-实现判断逻辑" tabindex="-1"><a class="header-anchor" href="#_3-1-3-实现判断逻辑" aria-hidden="true">#</a> 3.1.3 实现判断逻辑</h5>
<blockquote>
<p>就多加了一个if大小判断</p>
</blockquote>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"bufio"</span>
    <span class="token string">"fmt"</span>
    <span class="token string">"math/rand"</span>
    <span class="token string">"os"</span>
    <span class="token string">"strconv"</span>
    <span class="token string">"strings"</span>
    <span class="token string">"time"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 这里都是3.1.2中的代码</span>
    <span class="token comment">// 下面是实现判断逻辑的代码</span>
    <span class="token comment">// 将用户猜测数字与系统生成的随机数进行对比</span>
    <span class="token keyword">if</span> guess <span class="token operator">></span> secretNumber <span class="token punctuation">{</span>
        <span class="token comment">// 如果用户猜测较大，提示用户随机数应该较小一些</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"Your guess is bigger than the secret number. Please try again"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> guess <span class="token operator">&lt;</span> secretNumber <span class="token punctuation">{</span>
         <span class="token comment">// 如果用户猜测较小，提示用户随机数应该较大一些</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"Your guess is smaller than the secret number. Please try again"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// 最后剩下的情况就只有两者相等，这时直接输出结果即可</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"Correct, you Legend!"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_3-1-4-实现游戏循环" tabindex="-1"><a class="header-anchor" href="#_3-1-4-实现游戏循环" aria-hidden="true">#</a> 3.1.4 实现游戏循环</h5>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"bufio"</span>
    <span class="token string">"fmt"</span>
    <span class="token string">"math/rand"</span>
    <span class="token string">"os"</span>
    <span class="token string">"strconv"</span>
    <span class="token string">"strings"</span>
    <span class="token string">"time"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//-------系统生成随机数--------</span>
    maxNum <span class="token operator">:=</span> <span class="token number">100</span>
    rand<span class="token punctuation">.</span><span class="token function">Seed</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">UnixNano</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    secretNumber <span class="token operator">:=</span> rand<span class="token punctuation">.</span><span class="token function">Intn</span><span class="token punctuation">(</span>maxNum<span class="token punctuation">)</span>
    <span class="token comment">// fmt.Println("The secret number is ", secretNumber)</span>
    <span class="token comment">// ------读取用户输入部分-------</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"Please input your guess"</span><span class="token punctuation">)</span>
    reader <span class="token operator">:=</span> bufio<span class="token punctuation">.</span><span class="token function">NewReader</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>Stdin<span class="token punctuation">)</span>
    <span class="token comment">// 这里for不加任何东西就相当于while循环，且是while(true)死循环</span>
    <span class="token comment">// 将之前所说的所有操作整合到下述for循环中</span>
    <span class="token keyword">for</span> <span class="token punctuation">{</span>
        input<span class="token punctuation">,</span> err <span class="token operator">:=</span> reader<span class="token punctuation">.</span><span class="token function">ReadString</span><span class="token punctuation">(</span><span class="token char">'\n'</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"An error occured while reading input. Please try again"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
            <span class="token comment">// 将break换成了continue，因为考虑到break会终止for循环的，只需要跳过本次循环就行了</span>
            <span class="token keyword">continue</span>
        <span class="token punctuation">}</span>
        input <span class="token operator">=</span> strings<span class="token punctuation">.</span><span class="token function">Trim</span><span class="token punctuation">(</span>input<span class="token punctuation">,</span> <span class="token string">"\r\n"</span><span class="token punctuation">)</span>

        guess<span class="token punctuation">,</span> err <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">Atoi</span><span class="token punctuation">(</span>input<span class="token punctuation">)</span>
        <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"Invalid input. Please enter an integer value"</span><span class="token punctuation">)</span>
            <span class="token keyword">continue</span>
        <span class="token punctuation">}</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"You guess is"</span><span class="token punctuation">,</span> guess<span class="token punctuation">)</span>
        <span class="token keyword">if</span> guess <span class="token operator">></span> secretNumber <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"Your guess is bigger than the secret number. Please try again"</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> guess <span class="token operator">&lt;</span> secretNumber <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"Your guess is smaller than the secret number. Please try again"</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"Correct, you Legend!"</span><span class="token punctuation">)</span>
            <span class="token keyword">break</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-2-在线词典" tabindex="-1"><a class="header-anchor" href="#_3-2-在线词典" aria-hidden="true">#</a> 3.2 在线词典</h4>
<blockquote>
<p>用户在命令行里面查询一个单词，通过调用第三方的 API 查询到单词的翻译并打印出来，在这个项目中我们将学会如何使用 Go 语言来发送 HTTP 请求、解析 JSON，还会学习如何使用代码生成来提高开发效率。</p>
</blockquote>
<h5 id="_3-2-1-抓包" tabindex="-1"><a class="header-anchor" href="#_3-2-1-抓包" aria-hidden="true">#</a> 3.2.1 抓包</h5>
<blockquote>
<p>以彩云科技提供的在线翻译为例，直接右键检查打开浏览器的开发者工具（这个应该都懂吧）。</p>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230119163401893.png" alt="image-20230119163401893"></p>
<p>这是 HTTP 的一个 post 请求，API 的返回结果里会有 dictionary 和 wiki 两个字段，我们想要的数据就在 dictionary.explanations 字段里，其他字典还包括该单词的其他信息，例如音标。。。</p>
<p>右键 dict，以 cURL 格式进行复制，在命令行粘贴出来，应该可以看到一大串的 json</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code> <span class="token function">curl</span> <span class="token string">'https://api.interpreter.caiyunai.com/v1/dict'</span> <span class="token punctuation">\</span>
  <span class="token parameter variable">-H</span> <span class="token string">'authority: api.interpreter.caiyunai.com'</span> <span class="token punctuation">\</span>
  <span class="token parameter variable">-H</span> <span class="token string">'sec-ch-ua: " Not A;Brand";v="99", "Chromium";v="99", "Google Chrome";v="99"'</span> <span class="token punctuation">\</span>
  <span class="token parameter variable">-H</span> <span class="token string">'os-version: '</span> <span class="token punctuation">\</span>
  <span class="token parameter variable">-H</span> <span class="token string">'sec-ch-ua-mobile: ?0'</span> <span class="token punctuation">\</span>
  <span class="token parameter variable">-H</span> <span class="token string">'user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36'</span> <span class="token punctuation">\</span>
  <span class="token parameter variable">-H</span> <span class="token string">'app-name: xy'</span> <span class="token punctuation">\</span>
  <span class="token parameter variable">-H</span> <span class="token string">'content-type: application/json;charset=UTF-8'</span> <span class="token punctuation">\</span>
  <span class="token parameter variable">-H</span> <span class="token string">'accept: application/json, text/plain, */*'</span> <span class="token punctuation">\</span>
  <span class="token parameter variable">-H</span> <span class="token string">'device-id: '</span> <span class="token punctuation">\</span>
  <span class="token parameter variable">-H</span> <span class="token string">'os-type: web'</span> <span class="token punctuation">\</span>
  <span class="token parameter variable">-H</span> <span class="token string">'x-authorization: token:qgemv4jr1y38jyq6vhvi'</span> <span class="token punctuation">\</span>
  <span class="token parameter variable">-H</span> <span class="token string">'sec-ch-ua-platform: "Windows"'</span> <span class="token punctuation">\</span>
  <span class="token parameter variable">-H</span> <span class="token string">'origin: https://fanyi.caiyunapp.com'</span> <span class="token punctuation">\</span>
  <span class="token parameter variable">-H</span> <span class="token string">'sec-fetch-site: cross-site'</span> <span class="token punctuation">\</span>
  <span class="token parameter variable">-H</span> <span class="token string">'sec-fetch-mode: cors'</span> <span class="token punctuation">\</span>
  <span class="token parameter variable">-H</span> <span class="token string">'sec-fetch-dest: empty'</span> <span class="token punctuation">\</span>
  <span class="token parameter variable">-H</span> <span class="token string">'referer: https://fanyi.caiyunapp.com/'</span> <span class="token punctuation">\</span>
  <span class="token parameter variable">-H</span> <span class="token string">'accept-language: zh-CN,zh;q=0.9,zh-TW;q=0.8'</span> <span class="token punctuation">\</span>
  --data-raw <span class="token string">'{"trans_type":"en2zh","source":"good"}'</span> <span class="token punctuation">\</span>
  <span class="token parameter variable">--compressed</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
<h5 id="_3-2-2-代码生成" tabindex="-1"><a class="header-anchor" href="#_3-2-2-代码生成" aria-hidden="true">#</a> 3.2.2 代码生成</h5>
<blockquote>
<p>这里要用到一个在线代码自动生成的网站<a href="https://curlconverter.com/go/%EF%BC%8C%E6%B7%BB%E5%8A%A0" target="_blank" rel="noopener noreferrer">https://curlconverter.com/go/，添加<ExternalLinkIcon/></a> curl 命令，自动生成相应命令操作的 go 代码，很大地提高了开发效率。</p>
</blockquote>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token comment">// 将上面的curl代码通过代码生成网站转化为的go代码</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
    <span class="token string">"io/ioutil"</span>
    <span class="token string">"log"</span>
    <span class="token string">"net/http"</span>
    <span class="token string">"strings"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 创建HTTP client，可以指定很多参数，例如请求超时是否使用cookie。。。</span>
    client <span class="token operator">:=</span> <span class="token operator">&amp;</span>http<span class="token punctuation">.</span>Client<span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token comment">// 构造HTTP请求的请求体，自定义相关参数</span>
    <span class="token comment">// trans_type: 翻译方式，en2zh：英语翻译为中文</span>
    <span class="token comment">// source: 想要查询的单词</span>
    <span class="token keyword">var</span> data <span class="token operator">=</span> strings<span class="token punctuation">.</span><span class="token function">NewReader</span><span class="token punctuation">(</span><span class="token string">`{"trans_type":"en2zh","source":"good"}`</span><span class="token punctuation">)</span>
    <span class="token comment">// 构造一个HTTP请求，并且的post请求，https://api.interpreter.caiyunai.com/v1/dict为发送请求的url</span>
    req<span class="token punctuation">,</span> err <span class="token operator">:=</span> http<span class="token punctuation">.</span><span class="token function">NewRequest</span><span class="token punctuation">(</span><span class="token string">"POST"</span><span class="token punctuation">,</span> <span class="token string">"https://api.interpreter.caiyunai.com/v1/dict"</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span>
    <span class="token comment">// 错误处理，请求无异常err为nil，如果中途出现问题，err为返回错误信息</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token comment">// 直接返回错误信息并结束程序</span>
        log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 设置请求体中的一大堆参数</span>
    req<span class="token punctuation">.</span>Header<span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span><span class="token string">"authority"</span><span class="token punctuation">,</span> <span class="token string">"api.interpreter.caiyunai.com"</span><span class="token punctuation">)</span>
    req<span class="token punctuation">.</span>Header<span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span><span class="token string">"sec-ch-ua"</span><span class="token punctuation">,</span> `<span class="token string">" Not A;Brand"</span><span class="token punctuation">;</span>v<span class="token operator">=</span><span class="token string">"99"</span><span class="token punctuation">,</span> <span class="token string">"Chromium"</span><span class="token punctuation">;</span>v<span class="token operator">=</span><span class="token string">"99"</span><span class="token punctuation">,</span> <span class="token string">"Google Chrome"</span><span class="token punctuation">;</span>v<span class="token operator">=</span><span class="token string">"99"</span><span class="token string">`)
    req.Header.Set("sec-ch-ua-mobile", "?0")
    req.Header.Set("user-agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36")
    req.Header.Set("app-name", "xy")
    req.Header.Set("content-type", "application/json;charset=UTF-8")
    req.Header.Set("accept", "application/json, text/plain, */*")
    req.Header.Set("os-type", "web")
    req.Header.Set("x-authorization", "token:qgemv4jr1y38jyq6vhvi")
    req.Header.Set("sec-ch-ua-platform", `</span>"Windows"`<span class="token punctuation">)</span>
    req<span class="token punctuation">.</span>Header<span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span><span class="token string">"origin"</span><span class="token punctuation">,</span> <span class="token string">"https://fanyi.caiyunapp.com"</span><span class="token punctuation">)</span>
    req<span class="token punctuation">.</span>Header<span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span><span class="token string">"sec-fetch-site"</span><span class="token punctuation">,</span> <span class="token string">"cross-site"</span><span class="token punctuation">)</span>
    req<span class="token punctuation">.</span>Header<span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span><span class="token string">"sec-fetch-mode"</span><span class="token punctuation">,</span> <span class="token string">"cors"</span><span class="token punctuation">)</span>
    req<span class="token punctuation">.</span>Header<span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span><span class="token string">"sec-fetch-dest"</span><span class="token punctuation">,</span> <span class="token string">"empty"</span><span class="token punctuation">)</span>
    req<span class="token punctuation">.</span>Header<span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span><span class="token string">"referer"</span><span class="token punctuation">,</span> <span class="token string">"https://fanyi.caiyunapp.com/"</span><span class="token punctuation">)</span>
    req<span class="token punctuation">.</span>Header<span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span><span class="token string">"accept-language"</span><span class="token punctuation">,</span> <span class="token string">"zh-CN,zh;q=0.9,zh-TW;q=0.8"</span><span class="token punctuation">)</span>
    <span class="token comment">// 发送请求</span>
    resp<span class="token punctuation">,</span> err <span class="token operator">:=</span> client<span class="token punctuation">.</span><span class="token function">Do</span><span class="token punctuation">(</span>req<span class="token punctuation">)</span>
    <span class="token comment">// 错误处理，判断请求是否发送成功并且服务器响应</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token comment">// 如果出现问题，打印错误信息并结束程序</span>
        log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 关闭client，释放资源</span>
    <span class="token keyword">defer</span> resp<span class="token punctuation">.</span>Body<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// 读取服务器的响应结果</span>
    bodyText<span class="token punctuation">,</span> err <span class="token operator">:=</span> ioutil<span class="token punctuation">.</span><span class="token function">ReadAll</span><span class="token punctuation">(</span>resp<span class="token punctuation">.</span>Body<span class="token punctuation">)</span>
    <span class="token comment">// 错误处理</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 打印出服务器的响应结果，也就是输入单词的中文翻译</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%s\n"</span><span class="token punctuation">,</span> bodyText<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token comment">// 格式化后的bodyText</span>
<span class="token punctuation">{</span>
    <span class="token property">"rc"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">"wiki"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"known_in_laguages"</span><span class="token operator">:</span> <span class="token number">63</span><span class="token punctuation">,</span>
        <span class="token property">"description"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"source"</span><span class="token operator">:</span> <span class="token string">"tangible and intangible thing, except labor tied services, that satisfies human wants and provides utility"</span><span class="token punctuation">,</span>
            <span class="token property">"target"</span><span class="token operator">:</span> <span class="token null keyword">null</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"Q28877"</span><span class="token punctuation">,</span>
        <span class="token property">"item"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"source"</span><span class="token operator">:</span> <span class="token string">"good"</span><span class="token punctuation">,</span>
            <span class="token property">"target"</span><span class="token operator">:</span> <span class="token string">"\u5546\u54c1"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"image_url"</span><span class="token operator">:</span> <span class="token string">"http://www.caiyunapp.com/imgs/link_default_img.png"</span><span class="token punctuation">,</span>
        <span class="token property">"is_subject"</span><span class="token operator">:</span> <span class="token string">"true"</span><span class="token punctuation">,</span>
        <span class="token property">"sitelink"</span><span class="token operator">:</span> <span class="token string">"https://www.caiyunapp.com/read_mode/?id=6354777915466339550246c5"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"dictionary"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"prons"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"en-us"</span><span class="token operator">:</span> <span class="token string">"[g\u028ad]"</span><span class="token punctuation">,</span>
            <span class="token property">"en"</span><span class="token operator">:</span> <span class="token string">"[gud]"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"explanations"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"a.\u597d\u7684;\u5584\u826f\u7684;\u5feb\u4e50\u7684;\u771f\u6b63\u7684;\u5bbd\u5927\u7684;\u6709\u76ca\u7684;\u8001\u7ec3\u7684;\u5e78\u798f\u7684;\u5fe0\u5b9e\u7684;\u4f18\u79c0\u7684;\u5b8c\u6574\u7684;\u5f7b\u5e95\u7684;\u4e30\u5bcc\u7684"</span><span class="token punctuation">,</span> <span class="token string">"n.\u5229\u76ca;\u597d\u5904;\u5584\u826f;\u597d\u4eba"</span><span class="token punctuation">,</span> <span class="token string">"ad.=well"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">"synonym"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"excellent"</span><span class="token punctuation">,</span> <span class="token string">"fine"</span><span class="token punctuation">,</span> <span class="token string">"nice"</span><span class="token punctuation">,</span> <span class="token string">"splendid"</span><span class="token punctuation">,</span> <span class="token string">"proper"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">"antonym"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"bad"</span><span class="token punctuation">,</span> <span class="token string">"wrong"</span><span class="token punctuation">,</span> <span class="token string">"evil"</span><span class="token punctuation">,</span> <span class="token string">"harmful"</span><span class="token punctuation">,</span> <span class="token string">"poor"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">"wqx_example"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">[</span><span class="token string">"to the good"</span><span class="token punctuation">,</span> <span class="token string">"\u6709\u5229,\u6709\u597d\u5904"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">[</span><span class="token string">"good, bad and indifferent"</span><span class="token punctuation">,</span> <span class="token string">"\u597d\u7684,\u574f\u7684\u548c\u4e00\u822c\u7684"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">[</span><span class="token string">"good innings"</span><span class="token punctuation">,</span> <span class="token string">"\u957f\u5bff"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">[</span><span class="token string">"good and ..."</span><span class="token punctuation">,</span> <span class="token string">"\u5f88,\u9887;\u5b8c\u5168,\u5f7b\u5e95"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">[</span><span class="token string">"do somebody's heart good"</span><span class="token punctuation">,</span> <span class="token string">"\u5bf9\u67d0\u4eba\u7684\u5fc3\u810f\u6709\u76ca,\u4f7f\u67d0\u4eba\u611f\u5230\u6109\u5feb"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">[</span><span class="token string">"do somebody good"</span><span class="token punctuation">,</span> <span class="token string">"\u5bf9\u67d0\u4eba\u6709\u76ca"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">[</span><span class="token string">"be good for"</span><span class="token punctuation">,</span> <span class="token string">"\u5bf9\u2026\u6709\u6548,\u9002\u5408,\u80dc\u4efb"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">[</span><span class="token string">"be good at"</span><span class="token punctuation">,</span> <span class="token string">"\u5728\u2026\u65b9\u9762(\u5b66\u5f97,\u505a\u5f97)\u597d;\u5584\u4e8e"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">[</span><span class="token string">"as good as one's word"</span><span class="token punctuation">,</span> <span class="token string">"\u4fe1\u5b88\u8bfa\u8a00,\u503c\u5f97\u4fe1\u8d56"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">[</span><span class="token string">"as good as"</span><span class="token punctuation">,</span> <span class="token string">"\u5b9e\u9645\u4e0a,\u51e0\u4e4e\u7b49\u4e8e"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">[</span><span class="token string">"all well and good"</span><span class="token punctuation">,</span> <span class="token string">"\u4e5f\u597d,\u8fd8\u597d,\u5f88\u4e0d\u9519"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">[</span><span class="token string">"a good"</span><span class="token punctuation">,</span> <span class="token string">"\u76f8\u5f53,\u8db3\u8db3"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">[</span><span class="token string">"He is good at figures . "</span><span class="token punctuation">,</span> <span class="token string">"\u4ed6\u5584\u4e8e\u8ba1\u7b97\u3002"</span><span class="token punctuation">]</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">"entry"</span><span class="token operator">:</span> <span class="token string">"good"</span><span class="token punctuation">,</span>
        <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"word"</span><span class="token punctuation">,</span>
        <span class="token property">"related"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">"source"</span><span class="token operator">:</span> <span class="token string">"wenquxing"</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_3-2-3-生成-request-body" tabindex="-1"><a class="header-anchor" href="#_3-2-3-生成-request-body" aria-hidden="true">#</a> 3.2.3 生成 request body</h5>
<blockquote>
<p>我们需要生成一段 JSON，常用的方式是我们先构造出来一个结构体，这个结构体和我们需要生成的JSON 的结构是——对应的</p>
</blockquote>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"bytes"</span>
    <span class="token string">"encoding/json"</span>
    <span class="token string">"fmt"</span>
    <span class="token string">"io/ioutil"</span>
    <span class="token string">"log"</span>
    <span class="token string">"net/http"</span>
<span class="token punctuation">)</span>
<span class="token comment">// 创建构造体，类型后的`json:name`是JSON序列化后的名称</span>
<span class="token keyword">type</span> DictRequest <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    TransType <span class="token builtin">string</span> <span class="token string">`json:"trans_type"`</span>
    Source    <span class="token builtin">string</span> <span class="token string">`json:"source"`</span>
    UserID    <span class="token builtin">string</span> <span class="token string">`json:"user_id"`</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    client <span class="token operator">:=</span> <span class="token operator">&amp;</span>http<span class="token punctuation">.</span>Client<span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token comment">// 初始化请求结构体</span>
    request <span class="token operator">:=</span> DictRequest<span class="token punctuation">{</span>TransType<span class="token punctuation">:</span> <span class="token string">"en2zh"</span><span class="token punctuation">,</span> Source<span class="token punctuation">:</span> <span class="token string">"good"</span><span class="token punctuation">}</span>
    <span class="token comment">// 使用json.Marshal得到结构体序列化后的字符串</span>
    buf<span class="token punctuation">,</span> err <span class="token operator">:=</span> json<span class="token punctuation">.</span><span class="token function">Marshal</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">var</span> data <span class="token operator">=</span> bytes<span class="token punctuation">.</span><span class="token function">NewReader</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span>
    req<span class="token punctuation">,</span> err <span class="token operator">:=</span> http<span class="token punctuation">.</span><span class="token function">NewRequest</span><span class="token punctuation">(</span><span class="token string">"POST"</span><span class="token punctuation">,</span> <span class="token string">"https://api.interpreter.caiyunai.com/v1/dict"</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 后面代码和上面的设置请求体参数及以后代码一样</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_3-2-4-解析-response-body" tabindex="-1"><a class="header-anchor" href="#_3-2-4-解析-response-body" aria-hidden="true">#</a> 3.2.4 解析 response body</h5>
<blockquote>
<p><a href="https://oktools.net/" target="_blank" rel="noopener noreferrer">在线工具—OKTools<ExternalLinkIcon/></a> =&gt; 点击 <code v-pre>JSON 转 Go Struct</code>，然后点击 <code v-pre>转化-嵌套</code></p>
</blockquote>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token comment">// 将之前的bodyText转化后的结构体</span>
<span class="token keyword">type</span> AutoGenerated <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Rc <span class="token builtin">int</span> <span class="token string">`json:"rc"`</span>
    Wiki <span class="token keyword">struct</span> <span class="token punctuation">{</span>
        KnownInLaguages <span class="token builtin">int</span> <span class="token string">`json:"known_in_laguages"`</span>
        Description <span class="token keyword">struct</span> <span class="token punctuation">{</span>
            Source <span class="token builtin">string</span> <span class="token string">`json:"source"`</span>
            Target <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token string">`json:"target"`</span>
        <span class="token punctuation">}</span> <span class="token string">`json:"description"`</span>
        ID <span class="token builtin">string</span> <span class="token string">`json:"id"`</span>
        Item <span class="token keyword">struct</span> <span class="token punctuation">{</span>
            Source <span class="token builtin">string</span> <span class="token string">`json:"source"`</span>
            Target <span class="token builtin">string</span> <span class="token string">`json:"target"`</span>
        <span class="token punctuation">}</span> <span class="token string">`json:"item"`</span>
        ImageURL <span class="token builtin">string</span> <span class="token string">`json:"image_url"`</span>
        IsSubject <span class="token builtin">string</span> <span class="token string">`json:"is_subject"`</span>
        Sitelink <span class="token builtin">string</span> <span class="token string">`json:"sitelink"`</span>
    <span class="token punctuation">}</span> <span class="token string">`json:"wiki"`</span>
    Dictionary <span class="token keyword">struct</span> <span class="token punctuation">{</span>
        Prons <span class="token keyword">struct</span> <span class="token punctuation">{</span>
            EnUs <span class="token builtin">string</span> <span class="token string">`json:"en-us"`</span>
            En <span class="token builtin">string</span> <span class="token string">`json:"en"`</span>
        <span class="token punctuation">}</span> <span class="token string">`json:"prons"`</span>
        Explanations <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span> <span class="token string">`json:"explanations"`</span>
        Synonym <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span> <span class="token string">`json:"synonym"`</span>
        Antonym <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span> <span class="token string">`json:"antonym"`</span>
        WqxExample <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span> <span class="token string">`json:"wqx_example"`</span>
        Entry <span class="token builtin">string</span> <span class="token string">`json:"entry"`</span>
        Type <span class="token builtin">string</span> <span class="token string">`json:"type"`</span>
        Related <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token string">`json:"related"`</span>
        Source <span class="token builtin">string</span> <span class="token string">`json:"source"`</span>
    <span class="token punctuation">}</span> <span class="token string">`json:"dictionary"`</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>将自动生成的构造体替换掉之前我们假定的构造体，然后添加以下语句</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token comment">// 定义结构体变量</span>
<span class="token keyword">var</span> dictResponse DictRequest
<span class="token comment">// 将得到的字符串反序列化为结构体</span>
err <span class="token operator">=</span> json<span class="token punctuation">.</span><span class="token function">Unmarshal</span><span class="token punctuation">(</span>bodyText<span class="token punctuation">,</span> <span class="token operator">&amp;</span>dictResponse<span class="token punctuation">)</span>
<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// 更加详细的打印</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%#v\n"</span><span class="token punctuation">,</span> dictResponse<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
<h5 id="_3-2-5-打印结果" tabindex="-1"><a class="header-anchor" href="#_3-2-5-打印结果" aria-hidden="true">#</a> 3.2.5 打印结果</h5>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token comment">// 最终的完整代码</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"bytes"</span>
    <span class="token string">"encoding/json"</span>
    <span class="token string">"fmt"</span>
    <span class="token string">"io/ioutil"</span>
    <span class="token string">"log"</span>
    <span class="token string">"net/http"</span>
    <span class="token string">"os"</span>
<span class="token punctuation">)</span>
<span class="token comment">// 包含用户查询单词的请求结构体</span>
<span class="token keyword">type</span> DictRequest <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    TransType <span class="token builtin">string</span> <span class="token string">`json:"trans_type"`</span>
    Source    <span class="token builtin">string</span> <span class="token string">`json:"source"`</span>
    UserID    <span class="token builtin">string</span> <span class="token string">`json:"user_id"`</span>
<span class="token punctuation">}</span>
<span class="token comment">// 服务器返回的响应结构体</span>
<span class="token keyword">type</span> DictResponse <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Rc   <span class="token builtin">int</span> <span class="token string">`json:"rc"`</span>
    Wiki <span class="token keyword">struct</span> <span class="token punctuation">{</span>
        KnownInLaguages <span class="token builtin">int</span> <span class="token string">`json:"known_in_laguages"`</span>
        Description     <span class="token keyword">struct</span> <span class="token punctuation">{</span>
            Source <span class="token builtin">string</span>      <span class="token string">`json:"source"`</span>
            Target <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token string">`json:"target"`</span>
        <span class="token punctuation">}</span> <span class="token string">`json:"description"`</span>
        ID   <span class="token builtin">string</span> <span class="token string">`json:"id"`</span>
        Item <span class="token keyword">struct</span> <span class="token punctuation">{</span>
            Source <span class="token builtin">string</span> <span class="token string">`json:"source"`</span>
            Target <span class="token builtin">string</span> <span class="token string">`json:"target"`</span>
        <span class="token punctuation">}</span> <span class="token string">`json:"item"`</span>
        ImageURL  <span class="token builtin">string</span> <span class="token string">`json:"image_url"`</span>
        IsSubject <span class="token builtin">string</span> <span class="token string">`json:"is_subject"`</span>
        Sitelink  <span class="token builtin">string</span> <span class="token string">`json:"sitelink"`</span>
    <span class="token punctuation">}</span> <span class="token string">`json:"wiki"`</span>
    Dictionary <span class="token keyword">struct</span> <span class="token punctuation">{</span>
        Prons <span class="token keyword">struct</span> <span class="token punctuation">{</span>
            EnUs <span class="token builtin">string</span> <span class="token string">`json:"en-us"`</span>
            En   <span class="token builtin">string</span> <span class="token string">`json:"en"`</span>
        <span class="token punctuation">}</span> <span class="token string">`json:"prons"`</span>
        Explanations <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span>      <span class="token string">`json:"explanations"`</span>
        Synonym      <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span>      <span class="token string">`json:"synonym"`</span>
        Antonym      <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span>      <span class="token string">`json:"antonym"`</span>
        WqxExample   <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span>    <span class="token string">`json:"wqx_example"`</span>
        Entry        <span class="token builtin">string</span>        <span class="token string">`json:"entry"`</span>
        Type         <span class="token builtin">string</span>        <span class="token string">`json:"type"`</span>
        Related      <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token string">`json:"related"`</span>
        Source       <span class="token builtin">string</span>        <span class="token string">`json:"source"`</span>
    <span class="token punctuation">}</span> <span class="token string">`json:"dictionary"`</span>
<span class="token punctuation">}</span>
<span class="token comment">// 提取出核心代码，整合为一个函数</span>
<span class="token keyword">func</span> <span class="token function">query</span><span class="token punctuation">(</span>word <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    client <span class="token operator">:=</span> <span class="token operator">&amp;</span>http<span class="token punctuation">.</span>Client<span class="token punctuation">{</span><span class="token punctuation">}</span>
    request <span class="token operator">:=</span> DictRequest<span class="token punctuation">{</span>TransType<span class="token punctuation">:</span> <span class="token string">"en2zh"</span><span class="token punctuation">,</span> Source<span class="token punctuation">:</span> word<span class="token punctuation">}</span>
    buf<span class="token punctuation">,</span> err <span class="token operator">:=</span> json<span class="token punctuation">.</span><span class="token function">Marshal</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 这里返回的是byte数组</span>
    <span class="token keyword">var</span> data <span class="token operator">=</span> bytes<span class="token punctuation">.</span><span class="token function">NewReader</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span>
    req<span class="token punctuation">,</span> err <span class="token operator">:=</span> http<span class="token punctuation">.</span><span class="token function">NewRequest</span><span class="token punctuation">(</span><span class="token string">"POST"</span><span class="token punctuation">,</span> <span class="token string">"https://api.interpreter.caiyunai.com/v1/dict"</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    req<span class="token punctuation">.</span>Header<span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span><span class="token string">"Connection"</span><span class="token punctuation">,</span> <span class="token string">"keep-alive"</span><span class="token punctuation">)</span>
    req<span class="token punctuation">.</span>Header<span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span><span class="token string">"DNT"</span><span class="token punctuation">,</span> <span class="token string">"1"</span><span class="token punctuation">)</span>
    req<span class="token punctuation">.</span>Header<span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span><span class="token string">"os-version"</span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">)</span>
    req<span class="token punctuation">.</span>Header<span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span><span class="token string">"sec-ch-ua-mobile"</span><span class="token punctuation">,</span> <span class="token string">"?0"</span><span class="token punctuation">)</span>
    req<span class="token punctuation">.</span>Header<span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span><span class="token string">"User-Agent"</span><span class="token punctuation">,</span> <span class="token string">"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36"</span><span class="token punctuation">)</span>
    req<span class="token punctuation">.</span>Header<span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span><span class="token string">"app-name"</span><span class="token punctuation">,</span> <span class="token string">"xy"</span><span class="token punctuation">)</span>
    req<span class="token punctuation">.</span>Header<span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span><span class="token string">"Content-Type"</span><span class="token punctuation">,</span> <span class="token string">"application/json;charset=UTF-8"</span><span class="token punctuation">)</span>
    req<span class="token punctuation">.</span>Header<span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span><span class="token string">"Accept"</span><span class="token punctuation">,</span> <span class="token string">"application/json, text/plain, */*"</span><span class="token punctuation">)</span>
    req<span class="token punctuation">.</span>Header<span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span><span class="token string">"device-id"</span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">)</span>
    req<span class="token punctuation">.</span>Header<span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span><span class="token string">"os-type"</span><span class="token punctuation">,</span> <span class="token string">"web"</span><span class="token punctuation">)</span>
    req<span class="token punctuation">.</span>Header<span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span><span class="token string">"X-Authorization"</span><span class="token punctuation">,</span> <span class="token string">"token:qgemv4jr1y38jyq6vhvi"</span><span class="token punctuation">)</span>
    req<span class="token punctuation">.</span>Header<span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span><span class="token string">"Origin"</span><span class="token punctuation">,</span> <span class="token string">"https://fanyi.caiyunapp.com"</span><span class="token punctuation">)</span>
    req<span class="token punctuation">.</span>Header<span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span><span class="token string">"Sec-Fetch-Site"</span><span class="token punctuation">,</span> <span class="token string">"cross-site"</span><span class="token punctuation">)</span>
    req<span class="token punctuation">.</span>Header<span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span><span class="token string">"Sec-Fetch-Mode"</span><span class="token punctuation">,</span> <span class="token string">"cors"</span><span class="token punctuation">)</span>
    req<span class="token punctuation">.</span>Header<span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span><span class="token string">"Sec-Fetch-Dest"</span><span class="token punctuation">,</span> <span class="token string">"empty"</span><span class="token punctuation">)</span>
    req<span class="token punctuation">.</span>Header<span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span><span class="token string">"Referer"</span><span class="token punctuation">,</span> <span class="token string">"https://fanyi.caiyunapp.com/"</span><span class="token punctuation">)</span>
    req<span class="token punctuation">.</span>Header<span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span><span class="token string">"Accept-Language"</span><span class="token punctuation">,</span> <span class="token string">"zh-CN,zh;q=0.9"</span><span class="token punctuation">)</span>
    req<span class="token punctuation">.</span>Header<span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span><span class="token string">"Cookie"</span><span class="token punctuation">,</span> <span class="token string">"_ym_uid=16456948721020430059; _ym_d=1645694872"</span><span class="token punctuation">)</span>
    resp<span class="token punctuation">,</span> err <span class="token operator">:=</span> client<span class="token punctuation">.</span><span class="token function">Do</span><span class="token punctuation">(</span>req<span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">defer</span> resp<span class="token punctuation">.</span>Body<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    bodyText<span class="token punctuation">,</span> err <span class="token operator">:=</span> ioutil<span class="token punctuation">.</span><span class="token function">ReadAll</span><span class="token punctuation">(</span>resp<span class="token punctuation">.</span>Body<span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 判断接口的状态码是否为200</span>
    <span class="token keyword">if</span> resp<span class="token punctuation">.</span>StatusCode <span class="token operator">!=</span> <span class="token number">200</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span><span class="token string">"bad StatusCode:"</span><span class="token punctuation">,</span> resp<span class="token punctuation">.</span>StatusCode<span class="token punctuation">,</span> <span class="token string">"body"</span><span class="token punctuation">,</span> <span class="token function">string</span><span class="token punctuation">(</span>bodyText<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">var</span> dictResponse DictResponse
    err <span class="token operator">=</span> json<span class="token punctuation">.</span><span class="token function">Unmarshal</span><span class="token punctuation">(</span>bodyText<span class="token punctuation">,</span> <span class="token operator">&amp;</span>dictResponse<span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 打印需求的部分</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>word<span class="token punctuation">,</span> <span class="token string">"UK:"</span><span class="token punctuation">,</span> dictResponse<span class="token punctuation">.</span>Dictionary<span class="token punctuation">.</span>Prons<span class="token punctuation">.</span>En<span class="token punctuation">,</span> <span class="token string">"US:"</span><span class="token punctuation">,</span> dictResponse<span class="token punctuation">.</span>Dictionary<span class="token punctuation">.</span>Prons<span class="token punctuation">.</span>EnUs<span class="token punctuation">)</span>
    <span class="token comment">// 循环遍历打印</span>
    <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> item <span class="token operator">:=</span> <span class="token keyword">range</span> dictResponse<span class="token punctuation">.</span>Dictionary<span class="token punctuation">.</span>Explanations <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 判断命令和参数的个数</span>
    <span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>Args<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token number">2</span> <span class="token punctuation">{</span>
        <span class="token comment">// 不是2个，直接提示错误</span>
        fmt<span class="token punctuation">.</span><span class="token function">Fprintf</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>Stderr<span class="token punctuation">,</span> <span class="token string">`usage: simpleDict WORD
example: simpleDict hello
		`</span><span class="token punctuation">)</span>
        <span class="token comment">// 并结束程序</span>
        os<span class="token punctuation">.</span><span class="token function">Exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 否则，开始查询单词意思</span>
    word <span class="token operator">:=</span> os<span class="token punctuation">.</span>Args<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
    <span class="token function">query</span><span class="token punctuation">(</span>word<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>预期结果</p>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230119193532646.png" alt="image-20230119193532646"></p>
</blockquote>
<h4 id="_3-3-socket5" tabindex="-1"><a class="header-anchor" href="#_3-3-socket5" aria-hidden="true">#</a> 3.3 Socket5</h4>
<h2 id="go进阶-工程实践-青训营笔记" tabindex="-1"><a class="header-anchor" href="#go进阶-工程实践-青训营笔记" aria-hidden="true">#</a> Go进阶-工程实践 | 青训营笔记</h2>
<h3 id="_1-语言进阶" tabindex="-1"><a class="header-anchor" href="#_1-语言进阶" aria-hidden="true">#</a> 1. 语言进阶</h3>
<h4 id="_1-1-并发-vs-并行" tabindex="-1"><a class="header-anchor" href="#_1-1-并发-vs-并行" aria-hidden="true">#</a> 1.1 并发 VS 并行</h4>
<blockquote>
<p>你可能已对 Go 在并发方面的出色表现有所耳闻。 也许正是这一最突出的功能使 Go 如此受欢迎，让它成为了编写 <code v-pre>Docker</code>、<code v-pre>Kubernetes</code> 和 <code v-pre>Terraform</code> 等其他软件的理想之选。</p>
<p>但是在开始了解 Go 并发之前，你可能需要忘记从其他编程语言中已经了解的知识，因为Go 使用的方法截然不同。</p>
</blockquote>
<ol>
<li>多线程程序在一个核的cpu上运行</li>
</ol>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230116130558267.png" alt="image-20230116130558267"></p>
<ol start="2">
<li>
<p>多线程程序在多个核的cpu上运行</p>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230116130831560.png" alt="image-20230116130831560"></p>
</li>
</ol>
<blockquote>
<p>Go可以充分发挥多核优势，高效运行</p>
</blockquote>
<h4 id="_1-2-goroutine" tabindex="-1"><a class="header-anchor" href="#_1-2-goroutine" aria-hidden="true">#</a> 1.2 Goroutine</h4>
<blockquote>
<p><code v-pre>Goroutine</code> 是轻量线程中的并发活动，而不是在操作系统中进行的传统活动。 假设你有一个写入输出的程序和另一个计算两个数字相加的函数。 一个并发程序可以有数个 <code v-pre>Goroutine</code> 同时调用这两个函数。</p>
<p>我们可以说，程序执行的第一个 <code v-pre>Goroutine</code> 是 <code v-pre>main()</code> 函数。 如果要创建其他 <code v-pre>Goroutine</code> ，则必须在调用该函数之前使用 <code v-pre>go</code> 关键字：</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   <span class="token keyword">go</span> <span class="token function">launch</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"fmt"</span>
	<span class="token string">"time"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">HelloGoroutine</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// 打印当前数值</span>
<span class="token keyword">func</span> <span class="token function">hello</span><span class="token punctuation">(</span>i <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"hello goroutine:"</span> <span class="token operator">+</span> fmt<span class="token punctuation">.</span><span class="token function">Sprint</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// 并发</span>
<span class="token keyword">func</span> <span class="token function">HelloGoroutine</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span>j <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token function">hello</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
    <span class="token comment">// 睡眠一秒</span>
	time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-3-channel" tabindex="-1"><a class="header-anchor" href="#_1-3-channel" aria-hidden="true">#</a> 1.3 Channel</h4>
<blockquote>
<p>Go 中的 <code v-pre>channel</code> 是 <code v-pre>goroutine</code> 之间的通信机制。 这就是为什么我们之前说过 Go 实现并发的方式是：“<strong>不是通过共享内存通信，而是通过通信共享内存</strong>。”需要将值从一个 <code v-pre>goroutine</code> 发送到另一个时，可以使用通道。</p>
<p>由于 <code v-pre>channel</code> 是发送和接收数据的通信机制，因此它也有类型之分。这意味着你只能发送 <code v-pre>channel</code> 支持的数据类型。 除使用关键字 <code v-pre>chan</code> 作为 <code v-pre>channel</code> 的数据类型外，还需指定将通过 <code v-pre>channel</code> 传递的数据类型，如 <code v-pre>int</code> 类型。</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token comment">// 基本形式</span>
<span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token keyword">type</span><span class="token punctuation">)</span>
<span class="token comment">// 无缓冲通道</span>
<span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
<span class="token comment">// 有缓冲通道</span>
<span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token comment">// 缓冲通道可以理解为可以同时有几个线程来执行</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一个 <code v-pre>channel</code> 可以执行两项操作：发送数据和接收数据。 若要指定 <code v-pre>channel</code> 具有的操作类型，需要使用 <code v-pre>channel</code> 运算符 <code v-pre>&lt;-</code>。</p>
<p>如果希望 <code v-pre>channel</code> 仅发送数据，则必须在 <code v-pre>channel</code> 之后使用 <code v-pre>&lt;-</code> 运算符，如果希望 <code v-pre>channel</code> 接收数据，则必须在 <code v-pre>channel</code> 之前使用 <code v-pre>&lt;-</code> 运算符此外，而在 <code v-pre>channel</code> 中发送数据和接收数据属于阻止操作。</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>ch <span class="token operator">&lt;-</span> x <span class="token comment">// 通过通道ch发送（或写入）数据x</span>
x <span class="token operator">=</span> <span class="token operator">&lt;-</span>ch <span class="token comment">// x接收（或读取）数据，发送到通道ch</span>
<span class="token operator">&lt;-</span>ch <span class="token comment">// 接受数据，但是结果被丢弃，相当于临时变量</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后是关闭通道，和其他语言中的文件操作一样，用完需要进行最后的关闭操作，释放资源。</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token function">close</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 创建无缓冲通道</span>
    src <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
    <span class="token comment">// 创建有缓冲通道</span>
    dest <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
    <span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 最后执行关闭通道</span>
        <span class="token keyword">defer</span> <span class="token function">close</span><span class="token punctuation">(</span>src<span class="token punctuation">)</span>
        <span class="token comment">// 发送0~9到通道src中</span>
        <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
            src <span class="token operator">&lt;-</span> i
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 最后执行关闭通道</span>
        <span class="token keyword">defer</span> <span class="token function">close</span><span class="token punctuation">(</span>dest<span class="token punctuation">)</span>
        <span class="token comment">// 从通道src中取数据，并将数据平方后存入通道dest中</span>
        <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token keyword">range</span> src <span class="token punctuation">{</span>
            dest <span class="token operator">&lt;-</span> i <span class="token operator">*</span> i
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// 输出最后的平方数</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token keyword">range</span> dest <span class="token punctuation">{</span>
        <span class="token function">println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-4-并发安全lock" tabindex="-1"><a class="header-anchor" href="#_1-4-并发安全lock" aria-hidden="true">#</a> 1.4 并发安全Lock</h4>
<blockquote>
<p>多线程中都有的问题，并发中的线程安全问题，然后保证多个线程不会相互干扰，锁的应用就出来了。</p>
</blockquote>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"sync"</span>
    <span class="token string">"time"</span>
<span class="token punctuation">)</span>
<span class="token comment">// 创建全局变量</span>
<span class="token keyword">var</span> <span class="token punctuation">(</span>
    x    <span class="token builtin">int64</span>
    lock sync<span class="token punctuation">.</span>Mutex
<span class="token punctuation">)</span>
<span class="token comment">// 对变量进行2000次的+1操作，并在每次操作都加上锁，保证不会有其他线程影响本线程操作</span>
<span class="token keyword">func</span> <span class="token function">addWithLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">2000</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        <span class="token comment">// 加锁</span>
        lock<span class="token punctuation">.</span><span class="token function">Lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        x <span class="token operator">+=</span> <span class="token number">1</span>
        <span class="token comment">// 解锁</span>
        lock<span class="token punctuation">.</span><span class="token function">Unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 同样对变量进行2000次的+1操作，但是不加锁</span>
<span class="token keyword">func</span> <span class="token function">addWithoutLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">2000</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        x <span class="token operator">+=</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 初始化变量</span>
    x <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token comment">// 创建5个协程并发执行</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        <span class="token function">addWithoutLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
    <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"WithoutLock:"</span><span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token comment">// 这个看情况，一般小于10000</span>
    <span class="token comment">// 重置</span>
    x <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token comment">// 创建5个协程并发执行</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        <span class="token function">addWithLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
    <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"WithLock:"</span><span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token comment">// 10000</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-依赖管理" tabindex="-1"><a class="header-anchor" href="#_2-依赖管理" aria-hidden="true">#</a> 2. 依赖管理</h3>
<h4 id="_2-1-go依赖管理演进" tabindex="-1"><a class="header-anchor" href="#_2-1-go依赖管理演进" aria-hidden="true">#</a> 2.1 Go依赖管理演进</h4>
<blockquote>
<p>Go的依赖管理分别经历了GOPATH -&gt; Go Vendor -&gt; Go Module，目前被广泛采用的是Go Module，整个演进路线主要围绕两个目标来迭代发展：不同环境（项目）依赖的版本不同、控制依赖库的版本。</p>
</blockquote>
<h5 id="_2-1-1-gopath" tabindex="-1"><a class="header-anchor" href="#_2-1-1-gopath" aria-hidden="true">#</a> 2.1.1 GOPATH</h5>
<blockquote>
<p>GOPATH是Go语言支持的一个环境变量，有以下结构：</p>
<ul>
<li>src：存放Go项目的源码</li>
<li>pkg：存放编码的中间产物，加快编译速度</li>
<li>bin：存放Go项目编译生成的二进制文件</li>
</ul>
<p>弊端：</p>
<p>如果多个项目依赖同一个库，则依赖该库的同一份代码，所以不同项目不能依赖同一个库的不同版本，这很显然不能满足项目依赖需要，为解决该问题，Go Vendor出现了。</p>
</blockquote>
<h5 id="_2-1-2-go-vendor" tabindex="-1"><a class="header-anchor" href="#_2-1-2-go-vendor" aria-hidden="true">#</a> 2.1.2 Go Vendor</h5>
<blockquote>
<p>vendor是当前项目中的一个目录，其中存放了当前项目依赖的版本。在Vendor机制下，如果当前项目存在Vendor目录，会优先使用该目录下的依赖，如果依赖不存在，会从GOPATH中寻找。但vender不能很好解决依赖包的版本变动问题和一个项目依赖同一个包的不同版本的问题。</p>
</blockquote>
<h5 id="_2-1-3-go-module" tabindex="-1"><a class="header-anchor" href="#_2-1-3-go-module" aria-hidden="true">#</a> 2.1.3 Go Module</h5>
<blockquote>
<p>Go Moldules是GO语言官方推出的依赖管理系统，解决了之前依赖管理系统存在的诸加无法依赖同一个库的多个版本等问题，通过<code v-pre>go.mod</code>文件管理依赖包版本，通过<code v-pre>go get/go mod</code>指令工具管理依赖包。</p>
</blockquote>
<h3 id="_3-测试" tabindex="-1"><a class="header-anchor" href="#_3-测试" aria-hidden="true">#</a> 3. 测试</h3>
<h4 id="_3-1-单元测试" tabindex="-1"><a class="header-anchor" href="#_3-1-单元测试" aria-hidden="true">#</a> 3.1 单元测试</h4>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230117210326162.png" alt="image-20230117210326162"></p>
<blockquote>
<p>单元测试主要包括、输入、测试单元、输出以及校对，单元的概念比较广，包括接口、函数、模块等；用最后的校对来保证代码的功能与我们的预期相符：</p>
<ol>
<li>
<p>单测一方面可以保证质量，在整体覆盖率足够的情况下，一定程度上既保证了新功能本身的正确性，又未破坏原有代码的正确性。</p>
</li>
<li>
<p>另一方面可以提升效率，在代码有bug的情况下，通过编写单测，可以在一个较短周期内定位和修复问题。</p>
</li>
</ol>
</blockquote>
<h5 id="_3-1-1-规则" tabindex="-1"><a class="header-anchor" href="#_3-1-1-规则" aria-hidden="true">#</a> 3.1.1 规则</h5>
<blockquote>
<ol>
<li>
<p>所有测试文件都以<code v-pre>_test.go</code>结尾</p>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230117211654885.png" alt="image-20230117211654885"></p>
</li>
<li>
<p><code v-pre>func TestXxx(t *testing.T)</code></p>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230117211736761.png" alt="image-20230117211736761"></p>
</li>
<li>
<p>初始化逻辑放到 <code v-pre>TestMain</code> 里</p>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230117213220135.png" alt="image-20230117213220135"></p>
</li>
</ol>
</blockquote>
<h5 id="_3-1-2-例子" tabindex="-1"><a class="header-anchor" href="#_3-1-2-例子" aria-hidden="true">#</a> 3.1.2 例子</h5>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token comment">// hello.go文件中的函数</span>
<span class="token keyword">func</span> <span class="token function">HelloTom</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token comment">// 这里模拟因为业务上的错误，导致最后输出的是错误结果</span>
    <span class="token keyword">return</span> <span class="token string">"helloJerry"</span>
<span class="token punctuation">}</span>

<span class="token comment">// hello_test.go文件中对应的测试函数</span>
<span class="token keyword">func</span> <span class="token function">TestHelloTom</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 接收目标测试函数返回的结果</span>
    output <span class="token operator">:=</span> <span class="token function">HelloTom</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// 期待目标函数返回的结果</span>
    expect <span class="token operator">:=</span> <span class="token string">"helloTom"</span>
    <span class="token comment">// 如果两者不匹配，直接抛错，并且打印出来这两个结果</span>
    <span class="token keyword">if</span> output <span class="token operator">!=</span> expect <span class="token punctuation">{</span>
        t<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">"不匹配，output:%v，expect:%v"</span><span class="token punctuation">,</span> output<span class="token punctuation">,</span> expect<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_3-1-3-运行" tabindex="-1"><a class="header-anchor" href="#_3-1-3-运行" aria-hidden="true">#</a> 3.1.3 运行</h5>
<blockquote>
<p>运行测试函数的方法有几种，</p>
<ol>
<li>方式一（<code v-pre>goland</code>）：</li>
</ol>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230117215202920.png" alt="image-20230117215202920"></p>
<p>注意要选中目标文件和测试文件两个，如果只选中一个<code v-pre>Run</code>不会有这种选项。</p>
<ol start="2">
<li>方式二（<code v-pre>Terminal</code>）：</li>
</ol>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token comment">// 测试文件内的所有函数</span>
<span class="token keyword">go</span> test <span class="token punctuation">[</span>flags<span class="token punctuation">]</span> <span class="token punctuation">[</span>packages<span class="token punctuation">]</span>
<span class="token comment">// 想只测试文件中的一个函数</span>
<span class="token comment">// 前提是当前位置是文件所在的文件夹位置</span>
<span class="token keyword">go</span> test <span class="token operator">-</span>v <span class="token operator">-</span>run <span class="token punctuation">[</span>函数名称<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230117215811504.png" alt="image-20230117215811504"></p>
</blockquote>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230117214909374.png" alt="image-20230117214909374"></p>
<blockquote>
<p>这里肯定是测试不通过的，因为两个结果不同，如果把目标函数中的返回结果改正，那么</p>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230117215901181.png" alt="image-20230117215901181"></p>
</blockquote>
<h5 id="_3-1-4-assert" tabindex="-1"><a class="header-anchor" href="#_3-1-4-assert" aria-hidden="true">#</a> 3.1.4 assert</h5>
<blockquote>
<p>不用多写代码的测试比较工具——<code v-pre>assert（断言）</code>，</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token comment">// 安装工具包</span>
<span class="token keyword">go</span> get <span class="token operator">-</span>i github<span class="token punctuation">.</span>com<span class="token operator">/</span>stretchr<span class="token operator">/</span>testify<span class="token operator">/</span>assert
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230117220319302.png" alt="image-20230117220319302"></p>
</blockquote>
<h5 id="_3-1-5-覆盖率" tabindex="-1"><a class="header-anchor" href="#_3-1-5-覆盖率" aria-hidden="true">#</a> 3.1.5 覆盖率</h5>
<blockquote>
<p>目前我们了解了如何单元测试，那么如何衡量代码是否经过了足够的测试？如何评价项目的测试水准？
如何评估项目是否达到了高水准测试等级？（致命三连😆）————那就是代码覆盖率</p>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230117220902643.png" alt="image-20230117220902643"></p>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230117220920158.png" alt="image-20230117220920158"></p>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230117221144424.png" alt="image-20230117221144424"></p>
<blockquote>
<p>嗯哼，解释一下，我这里这么低的覆盖率，是因为还有很多函数没有测试到，我只测试了 <code v-pre>TestScoreCheck</code> 这一个函数，如果你文件中只有这一个函数，覆盖率应该是<code v-pre>100%</code>。</p>
<p>但是如果 <code v-pre>ScoreCheck</code>中是</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">if</span> score <span class="token operator">>=</span> <span class="token number">60</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
<span class="token keyword">return</span> <span class="token boolean">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那么覆盖率应该是 <code v-pre>66.7%</code>，其实覆盖率就是当前所举用例可以<code v-pre>执行目标函数的代码行数的占比</code></p>
</blockquote>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230117222027630.png" alt="image-20230117222027630"></p>
<p>再加个用例，覆盖率就达到百分之百了。</p>
</blockquote>
<p>tips：</p>
<ul>
<li>一般的要求是50%~60%覆盖率，而对于资金型服务，覆盖率可能要求达到80%+</li>
<li>我们做单元测试，测试分支相互独立、全面覆盖</li>
<li>要求函数体足够小，这样就比较简单的提升覆盖率，也符合函数设计的单一职责</li>
</ul>
<h4 id="_3-2-文件处理" tabindex="-1"><a class="header-anchor" href="#_3-2-文件处理" aria-hidden="true">#</a> 3.2 文件处理</h4>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token comment">// read.go中的目标函数</span>
<span class="token keyword">func</span> <span class="token function">ReadFirstLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token comment">// 操作文件，可能需要提前在文件中添加一写数据</span>
    <span class="token comment">// line11</span>
    <span class="token comment">// line22</span>
    <span class="token comment">// line33</span>
    <span class="token comment">// line44</span>
    open<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span><span class="token string">"log.txt"</span><span class="token punctuation">)</span>
    <span class="token comment">// 最后关闭文件，释放资源</span>
    <span class="token keyword">defer</span> open<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// 如果有异常，返回空字符串</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">""</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 创建扫描器</span>
    scanner <span class="token operator">:=</span> bufio<span class="token punctuation">.</span><span class="token function">NewScanner</span><span class="token punctuation">(</span>open<span class="token punctuation">)</span>
    <span class="token keyword">for</span> scanner<span class="token punctuation">.</span><span class="token function">Scan</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> scanner<span class="token punctuation">.</span><span class="token function">Text</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token string">""</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">ProcessFirstLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token comment">// 读取第一行数据</span>
	line <span class="token operator">:=</span> <span class="token function">ReadFirstLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// 将数据中的“11”全部替换为“00”</span>
	destLine <span class="token operator">:=</span> strings<span class="token punctuation">.</span><span class="token function">ReplaceAll</span><span class="token punctuation">(</span>line<span class="token punctuation">,</span> <span class="token string">"11"</span><span class="token punctuation">,</span> <span class="token string">"00"</span><span class="token punctuation">)</span>
    <span class="token comment">// 返回修改后的数据</span>
	<span class="token keyword">return</span> destLine
<span class="token punctuation">}</span>

<span class="token comment">// read_test.go中的测试函数</span>
<span class="token keyword">func</span> <span class="token function">TestProcess</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    firstLine <span class="token operator">:=</span> <span class="token function">ProcessFirstLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	assert<span class="token punctuation">.</span><span class="token function">Equal</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> <span class="token string">"line00"</span><span class="token punctuation">,</span> firstLine<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230117223233564.png" alt="image-20230117223233564"></p>
<h4 id="_3-3-mock" tabindex="-1"><a class="header-anchor" href="#_3-3-mock" aria-hidden="true">#</a> 3.3 Mock</h4>
<blockquote>
<p>这里我们用了Monkey，monkey是一个开源的mock测试库，可以对method，或者实例的方法进行mock，
反射，指针赋值。Mockey Patch的作用域在Runtime，在运行时通过通过Go的unsafe包，能够将内存中函数的地址替换为运行时函数的地址，将待打桩函数或方法的实现跳转到。</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token comment">// 下载monkey包</span>
<span class="token keyword">go</span> get <span class="token operator">-</span>i github<span class="token punctuation">.</span>com<span class="token operator">/</span>bouk<span class="token operator">/</span>monkey
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">TestWithMock</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 对ReadFirstLine打桩测试，不再依赖本地文件</span>
    monkey<span class="token punctuation">.</span><span class="token function">Patch</span><span class="token punctuation">(</span>ReadFirstLine<span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"line110"</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment">// 释放资源</span>
    <span class="token keyword">defer</span> monkey<span class="token punctuation">.</span><span class="token function">Unpatch</span><span class="token punctuation">(</span>ReadFirstLine<span class="token punctuation">)</span>
    line <span class="token operator">:=</span> <span class="token function">ProcessFirstLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// 比较结果</span>
    assert<span class="token punctuation">.</span><span class="token function">Equal</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> <span class="token string">"line000"</span><span class="token punctuation">,</span> line<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-4-基准测试" tabindex="-1"><a class="header-anchor" href="#_3-4-基准测试" aria-hidden="true">#</a> 3.4 基准测试</h4>
<blockquote>
<p>Go 语言还提供了基准测试框架，基准测试是指测试一段程序的运行性能及耗费CPU的程度，而我们在实际项目开发中，经常会遇到代码性能瓶颈，为了定位问题经常要对代码做性能分析，这就用到了基准测试，使用方法类似于单元测试,</p>
</blockquote>
<h5 id="_3-4-1-例子" tabindex="-1"><a class="header-anchor" href="#_3-4-1-例子" aria-hidden="true">#</a> 3.4.1 例子</h5>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token comment">// jizhun.go文件函数详情</span>
<span class="token comment">// 模拟随机选择执行服务器</span>
<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"math/rand"</span>
<span class="token punctuation">)</span>
<span class="token comment">// 创建服务器数组</span>
<span class="token keyword">var</span> ServerIndex <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token builtin">int</span>
<span class="token comment">// 初始化服务器中的数据</span>
<span class="token keyword">func</span> <span class="token function">InitServerIndex</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        ServerIndex<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">100</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 模拟随机选择服务器</span>
<span class="token keyword">func</span> <span class="token function">Select</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> ServerIndex<span class="token punctuation">[</span>rand<span class="token punctuation">.</span><span class="token function">Intn</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token comment">// jizhun_test.go文件函数详情</span>
<span class="token comment">// 基准测试为benchmark，所以是*testing.B</span>
<span class="token keyword">func</span> <span class="token function">BenchmarkSelect</span><span class="token punctuation">(</span>b <span class="token operator">*</span>testing<span class="token punctuation">.</span>B<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 初始化数据</span>
	<span class="token function">InitServerIndex</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// 重置因为初始化耗费的时间，这些操作不应该作为基准测试的范围</span>
	b<span class="token punctuation">.</span><span class="token function">ResetTimer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// 对一个测试用例的默认测试时间是1秒，当测试用例函数返回时还不到1秒，那么 testing.B中的N值将按1、2、5、10、20、50...递增，并以递增后的值重新进行用例函数测试</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> b<span class="token punctuation">.</span>N<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token function">Select</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// runparallel是多协程并发测试，执行2个基准测试，发现代码在并发情况下存在劣化，主要原因是rand为了保证全局的随机性和并发安全，持有了一把全局锁。</span>
<span class="token keyword">func</span> <span class="token function">BenchmarkSelectParallel</span><span class="token punctuation">(</span>b <span class="token operator">*</span>testing<span class="token punctuation">.</span>B<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 初始化</span>
	<span class="token function">InitServerIndex</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// 重置时间</span>
	b<span class="token punctuation">.</span><span class="token function">ResetTimer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// 多协程并发测试</span>
	b<span class="token punctuation">.</span><span class="token function">RunParallel</span><span class="token punctuation">(</span><span class="token keyword">func</span><span class="token punctuation">(</span>pb <span class="token operator">*</span>testing<span class="token punctuation">.</span>PB<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> pb<span class="token punctuation">.</span><span class="token function">Next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token function">Select</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230117225445580.png" alt="image-20230117225445580"></p>
<h5 id="_3-4-2-优化" tabindex="-1"><a class="header-anchor" href="#_3-4-2-优化" aria-hidden="true">#</a> 3.4.2 优化</h5>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230117225617960.png" alt="image-20230117225617960"></p>
<blockquote>
<p>为了解决这一随机性能问题，字节开源了一个高性能脑加数方法<code v-pre>fastrand</code>，再做一下基准测试，性能提升了百倍。主要的思路是牺牲了一定的数列一致性，在大多数场合是适合的，如果在后面遇到随机的场景可以尝试用一下。</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">go</span> get <span class="token operator">-</span>i github<span class="token punctuation">.</span>com<span class="token operator">/</span>bytedance<span class="token operator">/</span>gopkg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230117225930669.png" alt="image-20230117225930669"></p>
</blockquote>
<h3 id="_4-项目实践" tabindex="-1"><a class="header-anchor" href="#_4-项目实践" aria-hidden="true">#</a> 4. 项目实践</h3>
<h4 id="_4-1-需求分析" tabindex="-1"><a class="header-anchor" href="#_4-1-需求分析" aria-hidden="true">#</a> 4.1 需求分析</h4>
<ul>
<li>展示话题（标题，文字描述）和回帖列表</li>
<li>暂不考虑前端页面实现，仅仅实现一个本地web服务</li>
<li>话题和回帖数据用文件存储</li>
</ul>
<h4 id="_4-2-需求用例" tabindex="-1"><a class="header-anchor" href="#_4-2-需求用例" aria-hidden="true">#</a> 4.2 需求用例</h4>
 <img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230118194327077.png" alt="image-20230118194327077 " style="zoom:67%;" />
<blockquote>
<p>从用例分析一步步拆解实现，主要涉及21功能点，用户浏览消费，涉及页面的展示，包括划题内容和回帖的列表，其实从图中我们应该会抽出2个实体的，而实体的属性以及它们之间的联系也需要好好考虑。</p>
</blockquote>
<h4 id="_4-3-e-r图" tabindex="-1"><a class="header-anchor" href="#_4-3-e-r图" aria-hidden="true">#</a> 4.3 E-R图</h4>
<blockquote>
<p>下面是个E-R图，用来描述现实世界的概念摸型，有了模型实体，属性以及之间的联系，对我们后续做开发就提供了比较清晰的思路。回到需求，两个实体主要包括，实体的属性，实体的联系，有了实体模型，下一步就是思考代码结构设计，我们采用典型的分层结构设计。</p>
<ul>
<li>Topic（one—话题）：</li>
<li>id</li>
<li>title</li>
<li>content</li>
<li>create_time</li>
<li>Post（many—帖子）：</li>
<li>id</li>
<li>topic_id</li>
<li>content</li>
<li>create_time</li>
</ul>
</blockquote>
<h4 id="_4-4-分成结构" tabindex="-1"><a class="header-anchor" href="#_4-4-分成结构" aria-hidden="true">#</a> 4.4 分成结构</h4>
<blockquote>
<p>整体分为三层，repository数据层，service逻辑层，controoler视图层。</p>
<p>Repository数据层关联底层数据摸型，也就是这里的model，封装外部数据的增删改查，我们的数据存储在本地文件，通过文件操作拉取话题、帖子数据；数据层面向逻辑层，对service层透明，屏蔽下游数据差异，也就是不管下游是文件，还是数据库，还是微服务等，对service层的接口模型是不变的。</p>
<p>Servcie逻辑层处理核心业务逻辑，计算打包业务实体entity，对应我们的需求，就是话题页面，包括话题和回帖列表，并上送给视图层。</p>
<p>Controller视图层负责处理和外部的交互逻辑，以view视图的形式返回给客户端，对于我们需求，我们封装json格式化的请求结果，api形式访问就好。</p>
<ul>
<li>数据层：数据 Model，外部数据的增删改查</li>
<li>逻辑层：业务 Entity，处理核心业务逻辑输出</li>
<li>视图层：视图 View，处理和外部的交互逻辑</li>
</ul>
</blockquote>
<h4 id="_4-5-组件工具" tabindex="-1"><a class="header-anchor" href="#_4-5-组件工具" aria-hidden="true">#</a> 4.5 组件工具</h4>
<blockquote>
<ul>
<li>Gin 高性能 go web 框架
<ul>
<li><a href="https://github.com/gin-gonic/gin#installation" target="_blank" rel="noopener noreferrer">https://github.com/gin-gonic/gin#installation<ExternalLinkIcon/></a></li>
</ul>
</li>
<li>Go Mod
<ul>
<li>go mod init</li>
<li>go get</li>
</ul>
</li>
</ul>
</blockquote>
<h4 id="_4-6-repository" tabindex="-1"><a class="header-anchor" href="#_4-6-repository" aria-hidden="true">#</a> 4.6 Repository</h4>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">type</span> Topic <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    id
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="go性能优化-高质量编程-青训营笔记" tabindex="-1"><a class="header-anchor" href="#go性能优化-高质量编程-青训营笔记" aria-hidden="true">#</a> Go性能优化-高质量编程 | 青训营笔记</h2>
<h3 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介" aria-hidden="true">#</a> 1. 简介</h3>
<blockquote>
<p>什么是<strong>高质量编程</strong>？</p>
<blockquote>
<p>编写的代码能够达到正确可靠、简洁清晰的目标可称之为高质量代码</p>
</blockquote>
<ul>
<li>正确性：是否考虑各种边界条件，错误的调用是否能够处理</li>
<li>可靠性：异常情况或者错误的处理策略是否明确，依赖的服务出现异常是否能够处理</li>
<li>简洁：逻辑是否简单，后续调整功能或新增功能是否能够快速支持</li>
<li>清晰：其他人在阅读理解代码的时候是否能清楚明白，重构或者修改功能是否不会担心出现无法预料的问题</li>
</ul>
</blockquote>
<blockquote>
<p><strong>编程原则</strong></p>
<blockquote>
<p>实际应用场景千变万化，各种语言的特性和语法各不相同但是高质量编程遵循的原则是相通的</p>
</blockquote>
<p><strong>简单性</strong></p>
<ul>
<li>消除”多余的复杂性”，以简单清晰的逻辑编写代码</li>
<li>不理解的代码无法修复改进（也就是常说的“屎山”）</li>
</ul>
<p><strong>可读性</strong></p>
<ul>
<li>代码是写给人看的，而不是机器</li>
<li>编写可维护代码的第一步是确保代码可读</li>
</ul>
<p><strong>生产力</strong></p>
<ul>
<li>团队整体工作效率非常重要
<ul>
<li>例如代码规范</li>
</ul>
</li>
</ul>
</blockquote>
<h3 id="_2-编码规范" tabindex="-1"><a class="header-anchor" href="#_2-编码规范" aria-hidden="true">#</a> 2. 编码规范</h3>
<h4 id="_2-1-代码格式" tabindex="-1"><a class="header-anchor" href="#_2-1-代码格式" aria-hidden="true">#</a> 2.1 代码格式</h4>
<blockquote>
<p>首先是推荐使用 <code v-pre>gofmt</code> 自动格式化代码，保证所有的Go代码与官方推荐格式保持一致，而且可以很方便的进行配置，像 <code v-pre>Goland</code> 内置了相关功能，直接开启即可在保存文件的时候自动格式化</p>
<p>另外可以考虑 <code v-pre>goimports</code>，会对依赖包进行管理，自动增删依赖的包引用，按字母序排序分类，具体可以根据团队实际情况配置使用之所以将格式化放在第一条，因为这是后续规范的基础，团队合作 <code v-pre>review</code> 其他人的代码时就能体会到这条规范的作用了</p>
</blockquote>
<h4 id="_2-2-注释" tabindex="-1"><a class="header-anchor" href="#_2-2-注释" aria-hidden="true">#</a> 2.2 注释</h4>
<blockquote>
<p>大多数时候我们都在关注代码实现，但是注释的重要性容易被忽视</p>
<ul>
<li>注释应该解释代码作用</li>
<li>注释应该解释代码如何做的</li>
<li>注释应该解释代码实现的原因</li>
<li>注释应该解释代码什么情况会出错</li>
</ul>
<blockquote>
<p>好的代码有很多注释，坏代码需要很多注释</p>
</blockquote>
</blockquote>
<h5 id="_1、注释应该解释代码作用" tabindex="-1"><a class="header-anchor" href="#_1、注释应该解释代码作用" aria-hidden="true">#</a> 1、注释应该解释代码作用</h5>
<blockquote>
<p>适合注释公共符号</p>
</blockquote>
<blockquote>
<p>首先是注释应该解释代码作用，这种注释适合说明公共符号，比如对外提供的函数注释描述它的功能和用途。只有在函数的功能简单而明显时才能省路这些注释（例如，简单的取值和设值函教）另外注释要避免啰嗦，不要对显而易见的内容进行说明。</p>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124111936110.png" alt="image-20230124111936110"></p>
<p>下面的代码中注释就没有必要加上，通过名称可以很容易的知道作用。</p>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124111956892.png" alt="image-20230124111956892"></p>
</blockquote>
<h5 id="_2、注释应该解释代码如何做的" tabindex="-1"><a class="header-anchor" href="#_2、注释应该解释代码如何做的" aria-hidden="true">#</a> 2、注释应该解释代码如何做的</h5>
<blockquote>
<p>适合注释实现过程</p>
</blockquote>
<blockquote>
<p>第二种注释是对代码中复杂的，并不明显的逻辑进行说明，适合注释实现过程</p>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124112205871.png" alt="image-20230124112205871"></p>
<p>上面这段代码是给新 <code v-pre>url</code> 加上最近的 <code v-pre>referer</code> 信息，并不是特别明显，所以注释说明了一下</p>
<p>下面的是一个反例，虽然是对过程注释，但是描述的是显而易见的流程，注意不要用自然语言直接翻译代码作为注释，信息冗余还好，有时候表述不一定和代码一致</p>
<img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124112230700.png" alt="image-20230124112230700 " style="zoom:50%;" />
</blockquote>
<h5 id="_3、注释应该解释代码实现的原因" tabindex="-1"><a class="header-anchor" href="#_3、注释应该解释代码实现的原因" aria-hidden="true">#</a> 3、注释应该解释代码实现的原因</h5>
<blockquote>
<ul>
<li>适合解释代码的外部因素</li>
<li>提供额外上下文</li>
</ul>
</blockquote>
<blockquote>
<p>第三条，注释可以解释代码的外部因素，这些因素脱离上下文后通常很难理解</p>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124112735125.png" alt="image-20230124112735125"></p>
<blockquote>
<p><a href="https://github.com/golang/go/blob/master/src/net/http/client.go#L521" target="_blank" rel="noopener noreferrer">https://github.com/golang/go/blob/master/src/net/http/client.go#L521<ExternalLinkIcon/></a></p>
</blockquote>
<p>示例中有一行 <code v-pre>shouldRedirect=false</code> 的语句，如果没有注释，无法清楚地明白为什么会设置 <code v-pre>false</code> ，所以注释里提到了这么做的原因，给出了上下文说明</p>
</blockquote>
<h5 id="_4、注释应该解释代码什么情况会出错" tabindex="-1"><a class="header-anchor" href="#_4、注释应该解释代码什么情况会出错" aria-hidden="true">#</a> 4、注释应该解释代码什么情况会出错</h5>
<blockquote>
<p>适合解释代码的限制条件</p>
</blockquote>
<blockquote>
<p>第四，注释应该提醒使用者—些潜在的限制条件或者会无法处理的情况</p>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124112946747.png" alt="image-20230124112946747"></p>
<blockquote>
<p><a href="https://github.com/golang/go/blob/master/src/time/format.go#L1411" target="_blank" rel="noopener noreferrer">https://github.com/golang/go/blob/master/src/time/format.go#L1411<ExternalLinkIcon/></a></p>
</blockquote>
<p>例如函数的注释中可以说明是否存在性能隐患，输入的限制条件，可能存在哪些错误情况，让使用者无需了解实现细节，示例介绍了解析时区字符串的流程，同时对可能遇到的不规范字符串处理进行了说明</p>
</blockquote>
<h5 id="_5、公共符号始终要注释" tabindex="-1"><a class="header-anchor" href="#_5、公共符号始终要注释" aria-hidden="true">#</a> 5、公共符号始终要注释</h5>
<blockquote>
<ul>
<li>包中声明的每个公共的符号:变量、常量、函数以及结构都需要添加注释</li>
<li>任何既不明显也不简短的公共功能必须予以注释</li>
<li>无论长度或复杂程度如何,对库中的任何函数都必须进行注释</li>
</ul>
</blockquote>
<blockquote>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124113415472.png" alt="image-20230124113415472"></p>
<blockquote>
<p><a href="https://github.com/golang/go/blob/master/src/io/io.go#L694" target="_blank" rel="noopener noreferrer">https://github.com/golang/go/blob/master/src/io/io.go#L694<ExternalLinkIcon/></a></p>
</blockquote>
<p>示例是一个公共函数的注释说明，结合之前提到的规范，注释表述了函数的功能和如何工作的</p>
<p><strong>当然也有例外</strong>，就是注释没有提供有用的信息。它没有告诉你这个方法做了什么，更糟糕是它告诉你去看其他地方的文档，在这种情况下，建议完全删除该注释</p>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124113717610.png" alt="image-20230124113717610"></p>
</blockquote>
<h5 id="_6、小结" tabindex="-1"><a class="header-anchor" href="#_6、小结" aria-hidden="true">#</a> 6、小结</h5>
<ul>
<li>代码是最好的注释</li>
<li>注释应该提供代码未表达出的上下文信息</li>
</ul>
<h4 id="_2-3-命名规范" tabindex="-1"><a class="header-anchor" href="#_2-3-命名规范" aria-hidden="true">#</a> 2.3 命名规范</h4>
<h5 id="_2-3-1-variable" tabindex="-1"><a class="header-anchor" href="#_2-3-1-variable" aria-hidden="true">#</a> 2.3.1 Variable</h5>
<blockquote>
<p>写代码中最常见的就是命名了，最头疼的也是命名了，想想就开始纠结了😂</p>
</blockquote>
<blockquote>
<ul>
<li><strong>简洁</strong>胜于冗长</li>
<li><strong>缩略词全大写</strong>，但当其位于变量开头且不需要导出时，使用全小写</li>
<li>例如使用ServeHTTP而不是ServeHttp</li>
<li>使用XMLHTTPRequest 或者xmlHTTPRequest</li>
<li>变量距离其被使用的地方<strong>越远</strong>，则需要携带<strong>越多的上下文信息</strong></li>
<li>全局变量在其名字中需要更多的上下文信息，使得在不同地方可以轻易辨认出其含义</li>
</ul>
</blockquote>
<blockquote>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124114442404.png" alt="image-20230124114442404"></p>
<p>i和index的作用域范围仅限于for循环内部时，index的额外冗长几乎没有增加对于程序的理解，所以更加简单的为好。但是索引的作用域扩展，在循环外也会用到的时候，就要考虑更加符合需求的名称了。</p>
</blockquote>
<blockquote>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124114710146.png" alt="image-20230124114710146"></p>
<ul>
<li>将deadline替换成t降低了变量名的信息量。t常代指任意时间，deadline指截止时间，有特定的含义</li>
<li>函数提供给外部调用时，签名的信息很重要，要将自己的功能准确表现出来，自动提示一般也会提示函数的方法签名，通过参数名更好的理解功能很有必要，节省时间</li>
</ul>
</blockquote>
<h5 id="_2-3-2-function" tabindex="-1"><a class="header-anchor" href="#_2-3-2-function" aria-hidden="true">#</a> 2.3.2 function</h5>
<blockquote>
<ul>
<li>函数名不携带包名的上下文信息，因为包名和函数名总是成对出现的</li>
<li>函数名尽量简短</li>
<li>当名为foo的包某个函数返回类型Foo时，可以省略类型信息而不导致歧义</li>
<li>当名为foo的包某个函数返回类型Ⅰ时(T并不是Foo)，可以在函数名中加入类型信息</li>
</ul>
</blockquote>
<h5 id="_2-3-3-package" tabindex="-1"><a class="header-anchor" href="#_2-3-3-package" aria-hidden="true">#</a> 2.3.3 package</h5>
<blockquote>
<ul>
<li>只由小写字母组成。不包含大写字母和下划线等字符</li>
<li>简短并包含一定的上下文信息。例如 <code v-pre>schema</code>、<code v-pre>task</code> 等</li>
<li>不要与标准库同名。例如不要使用 <code v-pre>sync</code> 或者 <code v-pre>strings</code></li>
</ul>
<p>以下规则尽量满足，以标准库包名为例</p>
<ul>
<li>不使用常用变量名作为包名。例如使用 <code v-pre>bufio</code> 而不是 <code v-pre>buf</code></li>
<li>使用单数而不是复数。例如使用 <code v-pre>encoding</code> 而不是 <code v-pre>encodings</code></li>
<li>谨慎地使用缩写。例如使用 <code v-pre>fmt</code> 在不破坏上下文的情况下比 <code v-pre>format</code> 更加简短</li>
</ul>
</blockquote>
<h5 id="_2-3-4-小结" tabindex="-1"><a class="header-anchor" href="#_2-3-4-小结" aria-hidden="true">#</a> 2.3.4 小结</h5>
<blockquote>
<ul>
<li>核心目标是降低阅读理解代码的成本</li>
<li>重点考虑上下文信息，设计简洁清晰的名称</li>
</ul>
<p>总体来说，命名的核心在于降低阅读理解代码的成本，人们在阅读理解代码的时候会尝试模拟计算机运行程序，好的命名能让人把关注点留在主流程上，清晰地理解程序的功能，避免频繁切换到分支细节，增加理解成本。</p>
<blockquote>
<p>好的命名就像一个好笑话。如果你必须解释它，那就不好笑了</p>
</blockquote>
</blockquote>
<h4 id="_2-4-控制流程" tabindex="-1"><a class="header-anchor" href="#_2-4-控制流程" aria-hidden="true">#</a> 2.4 控制流程</h4>
<blockquote>
<p>避免嵌套，保持正常流程清晰</p>
</blockquote>
<blockquote>
 <img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124125335625.png" alt="image-20230124125335625 " style="zoom:50%;" />
<p>从最简单的一个 <code v-pre>if else</code> 条件开始，如果两个分支都包含 <code v-pre>return</code> 语句，则可以去除冗余的 <code v-pre>else</code> 方便后续维护，<code v-pre>else</code> 一般是正常流程，如过需要在正常流程新增判断逻辑，避免分支嵌套</p>
</blockquote>
<blockquote>
<p>尽量保持正常代码路径为最小缩进，优先处理错误情况 / 特殊情况，尽早返回或继续循环来减少嵌套</p>
</blockquote>
<blockquote>
 <img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124125657151.png" alt="image-20230124125657151 " style="zoom:67%;" />
<ul>
<li>最常见的正常流程的路径被嵌套在两个 if 条件内</li>
<li>成功的退出条件是 <code v-pre>return nil</code>，必须仔细匹配大括号来发现</li>
<li>函数最后一行返回一个错误，需要追溯到匹配的左括号，才能了解何时会触发错误</li>
<li>如果后续正常流程需要增加一步操作，调用新的函数，则又会增加一层嵌套</li>
</ul>
 <img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124125808582.png" alt="image-20230124125808582 " style="zoom:67%;" />
<blockquote>
<p>调整后</p>
</blockquote>
 <img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124125855292.png" alt="image-20230124125855292 " style="zoom:67%;" />
<blockquote>
<p><a href="https://github.com/golang/go/blob/master/src/bufio/bufio.go#L277" target="_blank" rel="noopener noreferrer">https://github.com/golang/go/blob/master/src/bufio/bufio.go#L277<ExternalLinkIcon/></a></p>
</blockquote>
<p>上面是go仓库中的代码示例，也是优先处理err情况，保持正常流程的统一</p>
</blockquote>
<p>小结：</p>
<ul>
<li>线性原理，处理逻辑尽量走直线，避免复杂的嵌套分支</li>
<li>正常流程代码沿着屏幕向下移动</li>
<li>提升代码可维护性和可读性</li>
<li>故障问题大多出现在复杂的条件语句和循环语句中</li>
</ul>
<h4 id="_2-5-错误和异常处理" tabindex="-1"><a class="header-anchor" href="#_2-5-错误和异常处理" aria-hidden="true">#</a> 2.5 错误和异常处理</h4>
<h5 id="_2-5-1-简单错误" tabindex="-1"><a class="header-anchor" href="#_2-5-1-简单错误" aria-hidden="true">#</a> 2.5.1 简单错误</h5>
<blockquote>
<ul>
<li>简单的错误指的是仅出现一次的错误，且在其他地方不需要捕获该错</li>
<li>优先使用 <code v-pre>errors.New</code> 来创建匿名变量来直接表示简单错误</li>
<li>如果有格式化的需求，使用 <code v-pre>fmt.Errorf</code></li>
</ul>
</blockquote>
<blockquote>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124130336256.png" alt="image-20230124130336256"></p>
<blockquote>
<p><a href="https://github.com/golang/go/blob/master/src/net/http/client.go#L802" target="_blank" rel="noopener noreferrer">https://github.com/golang/go/blob/master/src/net/http/client.go#L802<ExternalLinkIcon/></a></p>
</blockquote>
</blockquote>
<h5 id="_2-5-2-错误的wrap和unwrap" tabindex="-1"><a class="header-anchor" href="#_2-5-2-错误的wrap和unwrap" aria-hidden="true">#</a> 2.5.2 错误的Wrap和Unwrap</h5>
<blockquote>
<ul>
<li>错误的 <code v-pre>Wrap</code> 实际上是提供了一个 <code v-pre>error</code> 嵌套另一个 <code v-pre>error</code> 的能力，从而生成一个 <code v-pre>error</code> 的跟踪链</li>
<li>在 <code v-pre>fmt.Errorf</code> 中使用：<code v-pre>%w</code> 关键字来将一个错误关联至错误链中</li>
</ul>
</blockquote>
<blockquote>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124130659770.png" alt="image-20230124130659770"></p>
<p>同时结合错误的判定方法来确认调用链中是否有关注的错误出现。这个能力的好处是每一层调用方可以补充自己对应的上下文，方便跟踪排查问题，确定问题的根本原因在哪里</p>
</blockquote>
<h5 id="_2-5-3-错误判定" tabindex="-1"><a class="header-anchor" href="#_2-5-3-错误判定" aria-hidden="true">#</a> 2.5.3 错误判定</h5>
<blockquote>
<ul>
<li>判定一个错误是否为特定错误，使用 <code v-pre>errors.ls</code></li>
<li>不同于使用 <code v-pre>==</code>，使用该方法可以判定错误链上的所有错误是否含有特定的错误</li>
</ul>
</blockquote>
<blockquote>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124132323703.png" alt="image-20230124132323703"></p>
<blockquote>
<p><a href="https://github.com/golang/go/blob/master/src/cmd/go/internal/modfetch/sumdb.go#L208" target="_blank" rel="noopener noreferrer">https://github.com/golang/go/blob/master/src/cmd/go/internal/modfetch/sumdb.go#L208<ExternalLinkIcon/></a></p>
</blockquote>
</blockquote>
<blockquote>
<ul>
<li>在错误链上获取特定种类的错误，使用 <code v-pre>errors.As</code></li>
</ul>
</blockquote>
<blockquote>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124132516245.png" alt="image-20230124132516245"></p>
<blockquote>
<p><a href="https://github.com/golang/go/blob/master/src/errors/wrap_test.go#L255" target="_blank" rel="noopener noreferrer">https://github.com/golang/go/blob/master/src/errors/wrap_test.go#L255<ExternalLinkIcon/></a></p>
</blockquote>
<p>它和is的区别在于as会提取出调用链中指定类型的错误，并将错误赋值给定义好的变量，方便后续处理，示例中是把问题的path打印出来了</p>
</blockquote>
<h5 id="_2-5-4-panic" tabindex="-1"><a class="header-anchor" href="#_2-5-4-panic" aria-hidden="true">#</a> 2.5.4 panic</h5>
<blockquote>
<ul>
<li>不建议在业务代码中使用 <code v-pre>panic</code></li>
<li>调用函数不包含 <code v-pre>recover</code> 会造成程序崩溃</li>
<li>若问题可以被屏蔽或解决，建议使用 <code v-pre>error</code> 代替 <code v-pre>panic</code></li>
<li>当程序启动阶段发生不可逆转的错误时，可以在 <code v-pre>init</code> 或 <code v-pre>main</code> 函数中使用 <code v-pre>panic</code></li>
</ul>
</blockquote>
<blockquote>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124133105546.png" alt="image-20230124133105546"></p>
<blockquote>
<p><a href="https://github.com/Shopify/sarama/blob/main/examples/consumergroup/main.go#L94" target="_blank" rel="noopener noreferrer">https://github.com/Shopify/sarama/blob/main/examples/consumergroup/main.go#L94<ExternalLinkIcon/></a></p>
</blockquote>
<p>比错误更加严重的就是 <code v-pre>panic</code>，因为它的出现就意味着程序无法正常工作了</p>
</blockquote>
<h5 id="_2-5-5-recover" tabindex="-1"><a class="header-anchor" href="#_2-5-5-recover" aria-hidden="true">#</a> 2.5.5 recover</h5>
<blockquote>
<ul>
<li><code v-pre>recover</code> 只能在被 <code v-pre>defer</code> 的函数中使用</li>
<li>嵌套无法生效</li>
<li>只在当前 <code v-pre>goroutine</code> 生效</li>
<li><code v-pre>defer</code> 的语句是后进先出</li>
</ul>
</blockquote>
<blockquote>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124133357745.png" alt="image-20230124133357745"></p>
<blockquote>
<p><a href="https://github.com/golang/go/blob/master/src/fmt/scan.go#L247" target="_blank" rel="noopener noreferrer">https://github.com/golang/go/blob/master/src/fmt/scan.go#L247<ExternalLinkIcon/></a></p>
</blockquote>
</blockquote>
<blockquote>
<ul>
<li>如果需要更多的上下文信息，可以 <code v-pre>recover</code> 后在 <code v-pre>log</code> 中记录当前的调用栈</li>
</ul>
</blockquote>
<blockquote>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124134040804.png" alt="image-20230124134040804"></p>
<blockquote>
<p><a href="https://github.com/golang/website/blob/master/internal/gitfs/fs.go#L228" target="_blank" rel="noopener noreferrer">https://github.com/golang/website/blob/master/internal/gitfs/fs.go#L228<ExternalLinkIcon/></a></p>
</blockquote>
</blockquote>
<h5 id="_2-5-6-小结" tabindex="-1"><a class="header-anchor" href="#_2-5-6-小结" aria-hidden="true">#</a> 2.5.6 小结</h5>
<ul>
<li><code v-pre>error</code> 尽可能提供简明的上下文信息链，方便定位问题</li>
<li><code v-pre>panic</code> 用于真正异常的情况</li>
<li><code v-pre>recover</code> 生效范围，在当前 <code v-pre>goroutine</code> 的被 <code v-pre>defer</code> 的函数中生效</li>
</ul>
<blockquote>
<p>因为错误和异常是不正常的情况，除了希望程序能兼容这些场景外，重要的也有记录问题的上下文信息，方便后续定位原因在明确 <code v-pre>panic recover</code> 这些功能的作用范围的情况下，编写更可靠的程序</p>
</blockquote>
<h3 id="_3-性能优化建议" tabindex="-1"><a class="header-anchor" href="#_3-性能优化建议" aria-hidden="true">#</a> 3. 性能优化建议</h3>
<h4 id="_3-0-简介" tabindex="-1"><a class="header-anchor" href="#_3-0-简介" aria-hidden="true">#</a> 3.0 简介</h4>
<blockquote>
<p>高质量的代码能够完成功能，但是在大规模程序部署的场景，仅仅支持正常功能还不够，我们还要尽可能的提升性能，节省资源成本，接下来就主要介绍性能相关的建议</p>
<p>高性能代码为了效率会用到许多技巧，没有相关背景的人难以理解，不过有些基础性能问题是和语言本身相关的，接下来主要介绍这类内容，对应的调整对可读性和可维护性影响不大在满足正确性、可靠性、健壮性、可读性等质量因素的前提下，设法提高程序的性能</p>
<p>有时候时间效率和空间效率可能对立，此时应当分析那个更重要，作出适当的折衷。例如多花费一些内存来提高性能针对Go语言编程，介绍Go相关的性能优化建议</p>
</blockquote>
<blockquote>
<ul>
<li>性能优化的前提是满足正确可靠、简洁清晰等质量因素</li>
<li>性能优化是综合评估，有时候时间效率和空间效率可能对立</li>
<li>针对Go语言特性，介绍Go相关的性能优化建议</li>
</ul>
</blockquote>
<h4 id="_3-1-benchmark" tabindex="-1"><a class="header-anchor" href="#_3-1-benchmark" aria-hidden="true">#</a> 3.1 Benchmark</h4>
<blockquote>
<ul>
<li>性能表现需要实际数据衡量</li>
<li>Go语高提供了支持基准性能测试的 <code v-pre>benchmark</code> 工具</li>
</ul>
</blockquote>
<blockquote>
<p>我们以斐波那契数列的函数为例，编写 <code v-pre>fib.go</code> 和测试文件 <code v-pre>fib_test.go</code>，然后通过命令行运行 	<code v-pre>benchmark</code> 可以得到详细的测试结果（<code v-pre>-benchmem</code> 表示也统计内存消息）</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token comment">// 在两个函数的当前文件下执行此命令（最好文件内只有这两个文件）</span>
<span class="token keyword">go</span> test <span class="token operator">-</span>bench <span class="token punctuation">.</span> <span class="token operator">-</span>benchmem
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div> <img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124174116273.png" alt="image-20230124174116273 " style="zoom:50%;" />
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124180605252.png" alt="image-20230124180605252"></p>
<blockquote>
<p>简单介绍一下各项的含义：</p>
<ul>
<li><code v-pre>BenchmarkFib10</code> 是测试函数名；-8表示 <code v-pre>GOMAXPROCS</code> 的值为8</li>
<li>表示一共执行 <code v-pre>4786677</code> 次即 <code v-pre>b.N</code> 的值</li>
<li>每次执行花费 <code v-pre>250.4ns</code></li>
<li>每次执行申请多大的内存</li>
<li>每次执行申请几次内存</li>
</ul>
</blockquote>
</blockquote>
<h4 id="_3-1-slice" tabindex="-1"><a class="header-anchor" href="#_3-1-slice" aria-hidden="true">#</a> 3.1 Slice</h4>
<blockquote>
<p><code v-pre>Slice</code> 是go中最常见的结构，也非常的方便，同样在使用过程中需要注意性能的点</p>
</blockquote>
<h5 id="_1、slice预分配内存" tabindex="-1"><a class="header-anchor" href="#_1、slice预分配内存" aria-hidden="true">#</a> 1、Slice预分配内存</h5>
<blockquote>
<p>尽可能在使用 <code v-pre>make()</code> 初始化切片的时候提供容量信息，特别是在追加切片的时候</p>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124184334270.png" alt="image-20230124184334270 " style="zoom:45%;" /><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124184355567.png" alt="image-20230124184355567 " style="zoom:45%;" /></p>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124185140964.png" alt="image-20230124185140964"></p>
<p>对比看下两种情况的性能表现，左边是没有提供初始化容量信息，右边是设置了容量大小结果中可以看出执行时间相差很多（第二个数据可以简单的看成1s执行了几次），预分配只有一次内存分配</p>
</blockquote>
<blockquote>
<p>why？为什么会有怎么大的性能差异？</p>
<ul>
<li>切片本质是一个数组片段的描述
<ul>
<li>包括数组指针</li>
<li>片段的长度</li>
<li>片段的容量（不改变内存分配情况下的最大长度）</li>
<li>切片操作并不复制切片指向的元素</li>
</ul>
</li>
<li>创建一个新的切片会复用原来切片的底层数组</li>
</ul>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124192410790.png" alt="image-20230124192410790 " style="zoom:50%;" /><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124192434534.png" alt="image-20230124192434534 " style="zoom:50%;" /></p>
<blockquote>
<p><a href="https://ueokande.github.io/go-slice-tricks/" target="_blank" rel="noopener noreferrer">https://ueokande.github.io/go-slice-tricks/<ExternalLinkIcon/></a></p>
</blockquote>
<blockquote>
<p>以切片的 <code v-pre>append</code> 为例，<code v-pre>append</code> 时有两种场景:</p>
<ul>
<li>
<p>当 <code v-pre>append</code> 之后的长度小于等于<code v-pre>cap</code>，将会直接利用原底层数组剩余的空间</p>
</li>
<li>
<p>当 <code v-pre>append</code> 后的长度大于 <code v-pre>cap</code> 时，则会分配一块更大的区域来容纳新的底层数组</p>
</li>
</ul>
<p>因此，为了避免内存发生拷贝，如果能够知道最终的切片的大小，预先设置 <code v-pre>cap</code> 的值能够避免额外的内存分配，获得更好的性能</p>
</blockquote>
</blockquote>
<h5 id="_2、大内存未释放" tabindex="-1"><a class="header-anchor" href="#_2、大内存未释放" aria-hidden="true">#</a> 2、大内存未释放</h5>
<blockquote>
<ul>
<li>在已有切片基础上创建切片，不会创建新的底层数组</li>
<li>场景</li>
<li>原切片较大，代码在原切片基础上新建小切片</li>
<li>原底层数组在内存中有引用，得不到释放</li>
<li>可使用 <code v-pre>copy</code> 替代，<code v-pre>re-slice</code></li>
</ul>
</blockquote>
<blockquote>
  <img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124200032945.png" alt="image-20230124200032945 " style="zoom:50%;" />
 <img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124200131291.png" alt="image-20230124200131291 " style="zoom:50%;" />
<blockquote>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">go</span> test <span class="token operator">-</span>run<span class="token operator">=</span><span class="token punctuation">.</span> <span class="token operator">-</span>v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或直接选中两个文件使用 <code v-pre>goland</code> 中的 <code v-pre>run</code>，里面有测试功能</p>
</blockquote>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124200405982.png" alt="image-20230124200405982"></p>
<p>两部分代码使用了不同的逻辑取 <code v-pre>slice</code> 的最后两位数创建新数组，同时统计输出了内存占用信息</p>
<p>结果差异非常明显，<code v-pre>lastBySlice</code> 耗费了100.2MB 内存，也就是说，申请的 100 个 1MB 大小的内存没有被回收。因为切片虽然只使用了最后2个元素，但是因为原来 1M 的切片引用了相同的底层数组，底层数组得不到释放，因此最终 100MB 的内存始终得不到释放；而 <code v-pre>lastByCopy</code> 仅消耗了 1.17MB 的内存，这是因为，通过copy，指向了一个新的底层数组，当 <code v-pre>origin</code> 不再被引用后，内存会被垃圾回收</p>
</blockquote>
<h4 id="_3-2-map" tabindex="-1"><a class="header-anchor" href="#_3-2-map" aria-hidden="true">#</a> 3.2 Map</h4>
<blockquote>
<p><code v-pre>map</code> 预分配内存</p>
</blockquote>
<blockquote>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124201434669.png" alt="image-20230124201434669 " style="zoom:43%;" /><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124201457199.png" alt="image-20230124201457199 " style="zoom:43%;" /></p>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124202201351.png" alt="image-20230124202201351"></p>
<p><sub>可能是电脑的问题，总是10000，估计配置不太行，运算速度太慢了</sub></p>
<blockquote>
<ul>
<li>不断向 <code v-pre>map</code> 中添加元素的操作会触发 <code v-pre>map</code> 的扩容</li>
<li>提前分配好空间可以减少内存拷贝和 <code v-pre>Rehash</code> 的消耗</li>
<li>建议根据实际需求提前预估好需要的空间</li>
</ul>
</blockquote>
</blockquote>
<h4 id="_3-3-字符串处理" tabindex="-1"><a class="header-anchor" href="#_3-3-字符串处理" aria-hidden="true">#</a> 3.3 字符串处理</h4>
<blockquote>
<p>使用 <code v-pre>strings.Builder</code></p>
</blockquote>
<blockquote>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124203330618.png" alt="image-20230124203330618 " style="zoom:37%;" /><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124203352486.png" alt="image-20230124203352486 " style="zoom:37%;" /></p>
<img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124203506740.png" alt="image-20230124203506740 " style="zoom:37%;" />
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124204507640.png" alt="image-20230124204507640"></p>
<p><sub>可能是电脑太拉了，跑Plus感觉跑了一万年😭</sub></p>
<blockquote>
<p>使用＋拼接性能最差，<code v-pre>strings.Builder</code>、<code v-pre>bytes.Buffer</code> 相近，<code v-pre>strings.Buffer</code> 更快</p>
</blockquote>
<ul>
<li>字符串在Go语言中是不可变类型，占用内存大小是固定的</li>
<li>使用＋每次都会重新分配内存</li>
<li><code v-pre>strings.Builder</code>、<code v-pre>bytes.Buffer</code> 底层都是 <code v-pre>[]byte</code> 数组</li>
<li>内存扩容策略，不需要每次拼接重新分配内存</li>
</ul>
</blockquote>
<blockquote>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124204853902.png" alt="image-20230124204853902 " style="zoom:32%;" /><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124204921317.png" alt="image-20230124204921317 " style="zoom:32%;" /></p>
<p>字符串拼接和 <code v-pre>slice</code> 一样，同样支持预分配，在预知字符串长度的情况下，我们可以进一步提升拼接性能注意这里能确认 <code v-pre>stringbuiler</code> 只有一次内存分配，<code v-pre>bytebuffer</code> 有两次</p>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124205409847.png" alt="image-20230124205409847"></p>
</blockquote>
<h4 id="_3-4-空结构图" tabindex="-1"><a class="header-anchor" href="#_3-4-空结构图" aria-hidden="true">#</a> 3.4 空结构图</h4>
<blockquote>
<p>性能优化有时是时间和空间的平衡，之前提到的都是提高时间效率的点，对于空间上是否有优化的手段呢？空结构体是节省内存空间的一个手段</p>
<ul>
<li>空结构体 <code v-pre>struct</code> 实例不占据任何的内存空间</li>
<li>可作为各种场景下的占位符使用
<ul>
<li>节省资源</li>
<li>空结构体本身具备很强的语义，即这里不需要任何值，仅作为占位符</li>
</ul>
</li>
</ul>
</blockquote>
<blockquote>
 <img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124205533423.png" alt="image-20230124205533423 " style="zoom:50%;" />
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124210454117.png" alt="image-20230124210454117"></p>
<p><sub>可能是电脑的问题，总是10000，估计配置不太行，运算速度太慢了</sub></p>
<blockquote>
<ul>
<li>实现 <code v-pre>Set</code>，可以考虑用 <code v-pre>map</code> 来代替</li>
<li>对于这个场景，只需要用到 <code v-pre>map</code> 的键，而不需要值</li>
<li>即使是将 <code v-pre>map</code> 的值设置为 <code v-pre>bool</code> 类型，也会多占据 1 个字节空间</li>
</ul>
</blockquote>
</blockquote>
<h4 id="_3-5-atomic包" tabindex="-1"><a class="header-anchor" href="#_3-5-atomic包" aria-hidden="true">#</a> 3.5 atomic包</h4>
<blockquote>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124211908872.png" alt="image-20230124211908872 " style="zoom:45%;" /><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124211938735.png" alt="image-20230124211938735 " style="zoom:45%;" /></p>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124211843297.png" alt="image-20230124211843297"></p>
<ul>
<li>锁的实现是通过操作系统来实现，属于系统调用</li>
<li><code v-pre>atomic</code> 操作是通过硬件实现，效率比锁高</li>
<li><code v-pre>sync.Mutex</code> 应该用来保护一段逻辑，不仅仅用于保护一个变量</li>
<li>对于非数值操作，可以使用 <code v-pre>atomic.Value</code>，能承载一个 <code v-pre>interface{}</code></li>
</ul>
</blockquote>
<h4 id="_3-6-小结" tabindex="-1"><a class="header-anchor" href="#_3-6-小结" aria-hidden="true">#</a> 3.6 小结</h4>
<blockquote>
<ul>
<li>避免常见的性能陷阱可以保证大部分程序的性能</li>
<li>普通应用代码，不要一味地追求程序的性能</li>
<li>越高级的性能优化手段越容易出现问题</li>
<li>在满足正确可靠、简洁清晰的质量要求的前提下提高程序性能</li>
</ul>
</blockquote>
<h2 id="go性能优化-性能调优实战-青训营笔记" tabindex="-1"><a class="header-anchor" href="#go性能优化-性能调优实战-青训营笔记" aria-hidden="true">#</a> Go性能优化-性能调优实战 | 青训营笔记</h2>
<h3 id="_1-简介-1" tabindex="-1"><a class="header-anchor" href="#_1-简介-1" aria-hidden="true">#</a> 1. 简介</h3>
<blockquote>
<p>性能调优原则</p>
<ul>
<li>要<strong>依靠数据</strong>不是猜测</li>
<li>要<strong>定位最大瓶颈</strong>而不是细枝末节</li>
<li>不要<strong>过早</strong>优化</li>
<li>不要<strong>过度</strong>优化</li>
</ul>
</blockquote>
<h3 id="_2-性能分析工具-pprof" tabindex="-1"><a class="header-anchor" href="#_2-性能分析工具-pprof" aria-hidden="true">#</a> 2. 性能分析工具-pprof</h3>
<blockquote>
<p>性能调优的前提是对应用程序性能表现有实际的数据指标，例如希望知道应用在什么地方耗费了多少<code v-pre>CPU</code>、<code v-pre>Memory</code>，而对 <code v-pre>go</code> 来说，<code v-pre>pprof</code> 是用于数据可视化和分析性能分析数据的非常方便的工具</p>
</blockquote>
<h4 id="_2-1-功能简介" tabindex="-1"><a class="header-anchor" href="#_2-1-功能简介" aria-hidden="true">#</a> 2.1 功能简介</h4>
<blockquote>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230125104945896.png" alt="image-20230125104945896"></p>
<ul>
<li>分析：有两种可视化方式</li>
<li>工具：可以在 <code v-pre>runtime/pprof</code> 中找到源码，同时 <code v-pre>Golang</code> 的 <code v-pre>http</code> 标准库中也对 <code v-pre>pprof</code> 做了一些封装，能让你在 <code v-pre>http</code> 服务中直接使用它</li>
<li>采样：它可以采样程序运行时的 <code v-pre>CPU</code>、堆内存、<code v-pre>goroutine</code>、锁竞争、阻塞调用和系统线程的使用数据</li>
<li>展示：用户可以通过列表、调用图、火焰图、源码、反汇编等视图去展示采集到的性能指标，方便分析</li>
</ul>
<blockquote>
<p>说这么多不如来个实践项目来熟悉 <code v-pre>pprof</code> 的使用😆</p>
</blockquote>
</blockquote>
<h4 id="_2-2-排查实战" tabindex="-1"><a class="header-anchor" href="#_2-2-排查实战" aria-hidden="true">#</a> 2.2 排查实战</h4>
<h5 id="_1、搭建-pprof-项目" tabindex="-1"><a class="header-anchor" href="#_1、搭建-pprof-项目" aria-hidden="true">#</a> 1、搭建 pprof 项目</h5>
<blockquote>
<p>既然是练习排查性能问题，那么就需要构造一个有问题的出现，然后利用 <code v-pre>pprof</code> 来定位性能问题点，这里有一个开源项目，已经构造了一些性能问题来供我们练习</p>
<p><sub>开源项目的详细介绍和操作步骤：<a href="https://blog.wolfogre.com/posts/go-ppof-practice/" target="_blank" rel="noopener noreferrer">https://blog.wolfogre.com/posts/go-ppof-practice/<ExternalLinkIcon/></a></sub></p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token comment">// 使用命令将其下载下来</span>
<span class="token keyword">go</span> get <span class="token operator">-</span>d github<span class="token punctuation">.</span>com<span class="token operator">/</span>wolfogre<span class="token operator">/</span><span class="token keyword">go</span><span class="token operator">-</span>pprof<span class="token operator">-</span>practice
<span class="token comment">// 移动到该项目文件下</span>
cd $GOPATH<span class="token operator">/</span>src<span class="token operator">/</span>github<span class="token punctuation">.</span>com<span class="token operator">/</span>wolfogre<span class="token operator">/</span><span class="token keyword">go</span><span class="token operator">-</span>pprof<span class="token operator">-</span>practice
<span class="token comment">// 构建该项目</span>
<span class="token keyword">go</span> build
<span class="token comment">// 执行该项目，控制台里应该会不停的打印日志，都是一些“猫狗虎鼠在不停地吃喝拉撒”的屁话，没有意义，不用细看</span>
<span class="token punctuation">.</span><span class="token operator">/</span><span class="token keyword">go</span><span class="token operator">-</span>pprof<span class="token operator">-</span>practice
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
<h5 id="_2、浏览器查看指标" tabindex="-1"><a class="header-anchor" href="#_2、浏览器查看指标" aria-hidden="true">#</a> 2、浏览器查看指标</h5>
<blockquote>
<p>浏览器打开<a href="http://localhost:6060/debug/pprof/%EF%BC%8C%E4%BC%9A%E7%9C%8B%E5%88%B0%EF%BC%9A" target="_blank" rel="noopener noreferrer">http://localhost:6060/debug/pprof/，会看到：<ExternalLinkIcon/></a></p>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230125120355850.png" alt="image-20230125120355850"></p>
<table>
<thead>
<tr>
<th>类型</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>alloc</td>
<td>内存分配情况的采样信息</td>
</tr>
<tr>
<td>blocks</td>
<td>阻塞操作情况的采样信息</td>
</tr>
<tr>
<td>cmdline</td>
<td>显示程序启动命令及参数</td>
</tr>
<tr>
<td>goroutine</td>
<td>当前所有协程的堆栈信息</td>
</tr>
<tr>
<td>heap</td>
<td>堆上内存使用情况的采样信息</td>
</tr>
<tr>
<td>mutex</td>
<td>锁争用情况的采样信息</td>
</tr>
<tr>
<td>profile</td>
<td>CPU 占用情况的采样信息</td>
</tr>
<tr>
<td>threadcreate</td>
<td>系统线程创建情况的采样信息</td>
</tr>
<tr>
<td>trace</td>
<td>程序运行跟踪信息</td>
</tr>
</tbody>
</table>
<blockquote>
<p>因为 <code v-pre>cmdline</code> 显示运行进程的命令，没有什么实验价值，<code v-pre>trace</code> 需要另外的工具解析，且与本文主题关系不大，<code v-pre>threadcreate</code> 涉及的情况偏复杂不透明，所以这三个类型的采样信息这里暂且不提。除此之外，其他所有类型的采样信息本文都会涉及到，且炸弹程序已经为每一种类型的采样信息埋藏了一个对应的性能问题，以供我们进行实践。</p>
</blockquote>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230125132259244.png" alt="image-20230125132259244"></p>
<p>看到的数据可读性很差，长这样，可以看出一些信息但很难阅读它，所以一会儿我们会借助 <code v-pre>pprof</code> 工具帮我们「阅读」这些指标。</p>
</blockquote>
<h5 id="_3、cpu" tabindex="-1"><a class="header-anchor" href="#_3、cpu" aria-hidden="true">#</a> 3、CPU</h5>
<blockquote>
<p>我们先从CPU问题排查开始，不同的操作系统工具可能不同，我们首先使用自己熟悉的工具看看程序进程的资源占用，CPU占用了20.1%，显然这里是有问题的。</p>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230125135132516.png" alt="image-20230125135132516"></p>
<p><code v-pre>pprof</code> 的采祥结果是将一段时间内的信息汇总输出到文件中，所以首先需要拿到这个 <code v-pre>profile</code> 文件。你可以直接使用暴露的接口链接下载文件后使用，也可以直接用 <code v-pre>pprof</code> 工具连接这个接口下载需要的数据，这里我们使用 <code v-pre>go tool pprof +采样链接</code> 来启动采样。</p>
<blockquote>
<p>go tool pprof <a href="http://loaclhost:6060/debug/pprof/profile?seconds=10" target="_blank" rel="noopener noreferrer">http://loaclhost:6060/debug/pprof/profile?seconds=10<ExternalLinkIcon/></a></p>
</blockquote>
<p>链接中就是【炸弹】程序暴露出来的推口，链接结尾的 <code v-pre>profile</code> 代表采样的对象是 <code v-pre>CPU</code> 使用。如果你在浏览器里直接打开这个链接，会启动一个60秒的采样，并在结束后下载文件，这里我们加上 <code v-pre>seconds=10</code> 的参数，让它采样十秒，稍等片刻，我们需要的采样数据已经记录和下载完成，并展示出 <code v-pre>pprof</code> 终端。</p>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230125134212904.png" alt="image-20230125134212904"></p>
</blockquote>
<h6 id="命令" tabindex="-1"><a class="header-anchor" href="#命令" aria-hidden="true">#</a> 命令</h6>
<p>1、topN</p>
<blockquote>
<p>查看占用资源最多的函数</p>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230125134526335.png" alt="image-20230125134526335"></p>
<table>
<thead>
<tr>
<th>flat</th>
<th>当前函数本身的执行耗时</th>
</tr>
</thead>
<tbody>
<tr>
<td>flat%</td>
<td>flat占CPU总时间的比例</td>
</tr>
<tr>
<td>sum%</td>
<td>上面每一行的flat%总和</td>
</tr>
<tr>
<td>cum</td>
<td>指当前函数本身加上其调用函数的总耗时</td>
</tr>
<tr>
<td>cum%</td>
<td>cumCPU时间的比例</td>
</tr>
</tbody>
</table>
<blockquote>
<p>可以简单的理解为数字越大占用情况越严重</p>
</blockquote>
<p>表格前面描述了采样的总体信息，默认会展示资源占用最高的 10 个函数，如果只需要直看最高的 N 个函数，可以输入 <code v-pre>topN</code>，例如查看最高的 3 个调用，输入 <code v-pre>top3</code> 可以看到表格的第一行里，<code v-pre>Tiger.Eat</code> 函数本身占用 3.41 秒的 <code v-pre>CPU</code> 时间，占总时间的 96.60%，显然问题就是这里引起的。</p>
<blockquote>
<p><em>但是可以看到上图，flat和cum有的是相等的，有点不相等，有的一边直接为0了，why？</em></p>
<p><code v-pre>cum-flat</code> 得到的是函数中<strong>调用其他函数所消耗的资源</strong>，所以在函数中没有对其他函数进行调用时，<code v-pre>cum-flat=0</code>，也就是 <code v-pre>flat=cum</code> 相应地，函数中除了调用另外的函数，没有其他逻辑时，<code v-pre>flat=0</code></p>
</blockquote>
</blockquote>
<p>2、list</p>
<blockquote>
<p>根据指定的正则表达式查找代码行</p>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230125140152152.png" alt="image-20230125140152152"></p>
<p><code v-pre>list</code> 命令会根据后面给定的正则表达式查找代码，并按行展示出每一行的占用，可以看到，第 24 行有一个100亿次的空循环，占用了 3.41 秒的CPU时间，问题就在这儿了，定位成功。</p>
</blockquote>
<p>3、web</p>
<blockquote>
<p>调用关系可视化</p>
</blockquote>
<h5 id="_4、heap-堆内存" tabindex="-1"><a class="header-anchor" href="#_4、heap-堆内存" aria-hidden="true">#</a> 4、Heap-堆内存</h5>
<blockquote>
<p>可以看到当我们注释掉问题代码，重新运行后，CPU消耗一下加下来了，然而内存使用依然很高。</p>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230125143636244.png" alt="image-20230125143636244"></p>
</blockquote>
<p>后面因为某些问题，无法执行 graphviz，请大家移步<a href="https://blog.wolfogre.com/posts/go-ppof-practice/%EF%BC%8C%E4%BB%A5%E5%90%8E%E8%A7%A3%E5%86%B3%E4%BA%86%E4%BC%9A%E8%A1%A5%E5%85%A8%E3%80%82" target="_blank" rel="noopener noreferrer">https://blog.wolfogre.com/posts/go-ppof-practice/，以后解决了会补全。<ExternalLinkIcon/></a></p>
<h4 id="_2-3-采样过程和原理" tabindex="-1"><a class="header-anchor" href="#_2-3-采样过程和原理" aria-hidden="true">#</a> 2.3 采样过程和原理</h4>
<h5 id="_2-3-1-cpu" tabindex="-1"><a class="header-anchor" href="#_2-3-1-cpu" aria-hidden="true">#</a> 2.3.1 CPU</h5>
<blockquote>
<ul>
<li>采样对象：函数调用和它们占用的时间</li>
<li>采样率：100次/秒，固定值</li>
<li>采样时间：从手动启动到手动结束</li>
</ul>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230125151936002.png" alt="image-20230125151936002"></p>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230125153111796.png" alt="image-20230125153111796"></p>
</blockquote>
<h5 id="_2-3-2-heap-堆内存" tabindex="-1"><a class="header-anchor" href="#_2-3-2-heap-堆内存" aria-hidden="true">#</a> 2.3.2 Heap-堆内存</h5>
<blockquote>
<ul>
<li>采样程序通过内存分配器在堆上分配和释放的内存，记录分配/释放的大小和数量</li>
<li>采样率：每分配512KB记录一次，可在运行开头修改，1为每次分配均记录</li>
<li>采样时间：从程序运行开始到采样时</li>
<li>采样指标：<code v-pre>alloc space</code>、<code v-pre>alloc_objects</code>、<code v-pre>inuse_space</code>、<code v-pre>inuse_objects</code></li>
<li>计算方式：<code v-pre>inuse = alloc - free</code></li>
</ul>
</blockquote>
<h5 id="_2-3-3-goroutine-协程-threadcreate-线程创建" tabindex="-1"><a class="header-anchor" href="#_2-3-3-goroutine-协程-threadcreate-线程创建" aria-hidden="true">#</a> 2.3.3 Goroutine-协程&amp; ThreadCreate-线程创建</h5>
<blockquote>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230125163123710.png" alt="image-20230125163123710"></p>
</blockquote>
<h5 id="_2-3-4-block-阻塞-mutex-锁" tabindex="-1"><a class="header-anchor" href="#_2-3-4-block-阻塞-mutex-锁" aria-hidden="true">#</a> 2.3.4 Block-阻塞&amp; Mutex-锁</h5>
<blockquote></blockquote>
<h5 id="_2-3-5-小结" tabindex="-1"><a class="header-anchor" href="#_2-3-5-小结" aria-hidden="true">#</a> 2.3.5 小结</h5>
<blockquote>
<ul>
<li>掌握常用 <code v-pre>pprof</code> 工具功能</li>
<li>灵活运用 <code v-pre>pprof</code> 工具分析解决性能问题</li>
<li>了解 <code v-pre>pprof</code> 的采样过程和工作原理</li>
</ul>
</blockquote>
<h3 id="_3-性能调优案例" tabindex="-1"><a class="header-anchor" href="#_3-性能调优案例" aria-hidden="true">#</a> 3. 性能调优案例</h3>
<blockquote>
<p>介绍实际业务服务性能优化的案例，对逻辑相对复杂的程序如何进行性能调优</p>
</blockquote>
<h4 id="_3-1-业务服务优化" tabindex="-1"><a class="header-anchor" href="#_3-1-业务服务优化" aria-hidden="true">#</a> 3.1 业务服务优化</h4>
<blockquote>
<p>业务服务一般指直接提供功能的程序，比如专门处理用户评论操作的程序</p>
</blockquote>
<h5 id="_1、基本概念" tabindex="-1"><a class="header-anchor" href="#_1、基本概念" aria-hidden="true">#</a> 1、基本概念</h5>
<blockquote>
<ul>
<li>服务：能单独部署，承载一定功能的程序</li>
<li>依赖：<code v-pre>Service A</code> 的功能实现依赖 <code v-pre>Service B</code> 的响应结果，称为 <code v-pre>Service A</code> 依赖 <code v-pre>Service B</code></li>
<li>调用链路：能支持一个接口请求的相关服务集合及其相互之间的依赖关系</li>
<li>基础库：公共的工具包、中间件</li>
</ul>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230125153941565.png" alt="image-20230125153941351"></p>
<p>上面是系统部署的简单示意图，客户端请求经过网关转发，由不同的业务服务处理，业务服务可能依赖其他的服务，也可能会依赖存储、消息队列等组件。接下来我们以业务服务优化为例，说明性能调优的流程，图中的 <code v-pre>Service B</code> 被 <code v-pre>Service A</code> 依赖，同时也依赖了存储和 <code v-pre>Service D</code></p>
</blockquote>
<h5 id="_2、流程" tabindex="-1"><a class="header-anchor" href="#_2、流程" aria-hidden="true">#</a> 2、流程</h5>
<blockquote>
<ul>
<li>
<p>建立服务性能评估手段</p>
</li>
<li>
<p>分析性能数据，定位性能瓶颈</p>
</li>
<li>
<p>核心，这里也是用的 <code v-pre>pprof</code> 采样性能数据，分析服务的表现</p>
</li>
<li>
<p>重点优化项改造</p>
</li>
<li>
<p>进行重构代码，使用更高效的组件</p>
</li>
<li>
<p>优化效果验证</p>
</li>
<li>
<p>通过压测对比和正确性验证之后，服务可以上线进行实际收益评估</p>
</li>
</ul>
<blockquote>
<p>整体的流程可以循环并行执行，每个优化点可能不同，可以分别评估验证</p>
</blockquote>
</blockquote>
<h5 id="_3、建立服务性能评估手段" tabindex="-1"><a class="header-anchor" href="#_3、建立服务性能评估手段" aria-hidden="true">#</a> 3、建立服务性能评估手段</h5>
<blockquote>
<ul>
<li>
<p>服务性能评估方式</p>
</li>
<li>
<p>单独 <code v-pre>benchmark</code> 无法满足复杂逻辑分析</p>
</li>
<li>
<p>不同负载情况下性能表现差异（下图是负载和单核qps的对应数据）</p>
</li>
</ul>
 <img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230125155448314.png" alt="image-20230125155448314 " style="zoom:35%;" />
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230125155549368.png" alt="image-20230125155549368"></p>
<ul>
<li>
<p>请求流量构造</p>
</li>
<li>
<p>不同请求参数覆盖逻辑不同</p>
</li>
<li>
<p>线上真实流量情况，才能分析真正的性能瓶颈</p>
</li>
<li>
<p>压测范围（会录制线上流量请求，通过控制回放速度来对服务进行测试）</p>
</li>
<li>
<p>单机器压测</p>
</li>
<li>
<p>集群压测</p>
</li>
<li>
<p>性能数据采集</p>
</li>
<li>
<p>单机性能数据</p>
</li>
<li>
<p>集群性能数据</p>
</li>
</ul>
<blockquote>
<p>评估手段建立后，它的产出实际是一个服务的性能指标分析报告</p>
</blockquote>
<blockquote>
<p>实际的压测报告截图，会统计压测期间服务的各项监控指标，包括qps，延迟等内容，同时在压测过程中，也可以采集服务的 <code v-pre>pprof</code> 数据，使用之前的方式分析性能问题</p>
</blockquote>
<p>有了服务优化前的性能报告和一些性能采样数据，我们可以进行性能瓶颈分析了</p>
<p>业务服务常见的性能问题可能是使用基础组件不规，比如这里通过火焰图看出 <code v-pre>JSON</code> 的解析部分占用了较多的CPU资源，那么我们就能定位到具体的逻辑代码，是在每次使用配置时都会进行 <code v-pre>JSON</code> 解析，拿到配置项，实际组件内部提供了缓存机制，只有数据变更的时候才需要重新解析JSON</p>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230125160740003.png" alt="image-20230125160740003"></p>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230125160805399.png" alt="image-20230125160805399"></p>
</blockquote>
<h5 id="_4、分析性能数据-定位性能瓶颈" tabindex="-1"><a class="header-anchor" href="#_4、分析性能数据-定位性能瓶颈" aria-hidden="true">#</a> 4、分析性能数据，定位性能瓶颈</h5>
<blockquote>
<ul>
<li>
<p>使用库不规范</p>
<blockquote>
<p>还有是类似日志使用不规范，一部分是调试日志发布到线上，一部分是线上服务在不同的调用链路上数据有差别，测试场景日志量还好，但是到了真实线上全量场景，会导致日志量增加，影响性能</p>
<img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230125161012809.png" alt="image-20230125161012809 " style="zoom:37%;" />
</blockquote>
</li>
<li>
<p>高并发场景优化不足</p>
<blockquote>
<p>另外常见的性能问题就是高并发场景的优化不足，上者是服务高峰期的火焰图，下者是低峰期的火焰图，可以发现 <code v-pre>metrics</code>，即监控组件的 <code v-pre>CPU</code> 资源占用变化较大，主要原因是监控数据上报是同步请求，在请求量上涨，监控打点数据量增加时，达到性能瓶颈，造成阻塞，影响业务逻辑的处理，后续是改成异步上报的机制提升了性能</p>
<img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230125161315255.png" alt="image-20230125161315255 " style="zoom:43%;" />
<img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230125161402087.png" alt="image-20230125161402087 " style="zoom:43%;" />
</blockquote>
</li>
</ul>
</blockquote>
<h5 id="_5、重点优化项改造" tabindex="-1"><a class="header-anchor" href="#_5、重点优化项改造" aria-hidden="true">#</a> 5、重点优化项改造</h5>
<blockquote>
<ul>
<li>正确性是基础</li>
<li>响应数据 <code v-pre>diff</code></li>
<li>线上请求数据录制回放</li>
<li>新旧逻辑接口数据 <code v-pre>diff</code></li>
</ul>
<p>性能忧化的前提是保证正确性，所以在变动较大的性能优化上线之前，还需要进行正确性验证，因为线上的场景和流程太多，所以要借助自动化手段来保证优化后程序的正确性</p>
<p>同样是线上请求的录制，不过这里不仅包含请求参数录制，还会录制线上的返回内容，重放时对比线上的返回内容和优化后服务的返回内容进行正确性验证</p>
<p>比如图中作者信息相关的字段值在优化有有变化，需要进一步排查原因</p>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230125161748262.png" alt="image-20230125161748262"></p>
</blockquote>
<h5 id="_6、优化效果验证" tabindex="-1"><a class="header-anchor" href="#_6、优化效果验证" aria-hidden="true">#</a> 6、优化效果验证</h5>
<blockquote>
<ul>
<li>重复压测验证</li>
<li>上线评估优化效果</li>
<li>关注服务监控</li>
<li>逐步放量</li>
<li>收集性能数据</li>
</ul>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230125162011970.png" alt="image-20230125162011970"><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230125162037251.png" alt="image-20230125162037251"></p>
<p>验证分两部分，首先依然是用同样的数据对优化后的服务进行压测，可以看到现在的数据比优化前好很多，能够支持更多的qps正式上线的时候会逐步放量，记录真正的优化效果</p>
<p>同时压测并不能保证和线上表现完全一致，有时还要通过线上的表现再进行分析改进，是个长期的过程</p>
</blockquote>
<h5 id="_7、进一步优化-服务整体链路分析" tabindex="-1"><a class="header-anchor" href="#_7、进一步优化-服务整体链路分析" aria-hidden="true">#</a> 7、进一步优化，服务整体链路分析</h5>
<blockquote>
<ul>
<li>规范上游服务调用接口，明确场景需求</li>
<li>分析链路，通过业务流程优化提升服务性能</li>
</ul>
<p>在熟悉服务的整体部署情况后，可以针对具体的接口链路进行分析调优，比如 <code v-pre>Service A</code> 调用 <code v-pre>Service B</code> 是否存在重复调用的情况，调 <code v-pre>Service B</code> 服务时，是否更小的结果数据集就能满足需求，接口是否一定要实时数据，能否在 <code v-pre>Service A</code> 层进行缓存，减轻调用压力</p>
<p>这种优化只使用与特定业务场景，适用范围窄，不过能更合理的利用资源</p>
</blockquote>
<h4 id="_3-2-基础库优化" tabindex="-1"><a class="header-anchor" href="#_3-2-基础库优化" aria-hidden="true">#</a> 3.2 基础库优化</h4>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230125162835686.png" alt="image-20230125162835686"></p>
<h4 id="_3-3-go语言优化" tabindex="-1"><a class="header-anchor" href="#_3-3-go语言优化" aria-hidden="true">#</a> 3.3 Go语言优化</h4>
<blockquote>
<p>适用范围最广的优化，就是针对Go本身进行的优化，会优化编译器和运行时的内存分配策略，构建更高效的go发行版本</p>
</blockquote>
<blockquote>
<p>编译器&amp;运行时优化</p>
<ul>
<li>优化内存分配策略</li>
<li>优化代码编译流程，生成更高效的程序</li>
<li>内部压测验证</li>
<li>推广业务服务落地验证</li>
</ul>
<p>优点</p>
<ul>
<li>接入简单，只需要调整编译配置</li>
<li>通用性强</li>
</ul>
</blockquote>
<h3 id="_4-总结" tabindex="-1"><a class="header-anchor" href="#_4-总结" aria-hidden="true">#</a> 4. 总结</h3>
<blockquote>
<ul>
<li>性能调优原则
<ul>
<li>要依靠数据不是猜测</li>
</ul>
</li>
<li>性能分析工具 <code v-pre>pprof</code>
<ul>
<li>熟练使用 <code v-pre>pprof</code> 工具排查性能问题并了解其基本原理</li>
</ul>
</li>
<li>性能调优
<ul>
<li>保证正确性</li>
<li>定位主要瓶颈</li>
</ul>
</li>
</ul>
</blockquote>
<h2 id="go自动内存管理-青训营笔记" tabindex="-1"><a class="header-anchor" href="#go自动内存管理-青训营笔记" aria-hidden="true">#</a> Go自动内存管理 | 青训营笔记</h2>
<h3 id="_1-自动内存管理" tabindex="-1"><a class="header-anchor" href="#_1-自动内存管理" aria-hidden="true">#</a> 1. 自动内存管理</h3>
<h4 id="_1-1-概念" tabindex="-1"><a class="header-anchor" href="#_1-1-概念" aria-hidden="true">#</a> 1.1 概念</h4>
<blockquote>
<ul>
<li>
<p>动态内存</p>
</li>
<li>
<p>程序在运行时根据需求动态分配的内存：<code v-pre>malloc()</code></p>
</li>
<li>
<p>自动内存管理（垃圾回收）：由程序语言的运行时系统回收动态内存</p>
</li>
<li>
<p>避免手动内存管理，专注于实现业务逻辑</p>
</li>
<li>
<p>保证内存使用的<strong>正确性</strong>和<strong>安全性</strong>：<code v-pre>double-free problem</code>，<code v-pre>use-after-free problem</code></p>
</li>
<li>
<p>三个任务</p>
</li>
<li>
<p>为新对象分配空间</p>
</li>
<li>
<p>找到存活对象</p>
</li>
<li>
<p>回收死亡对象的内存空间</p>
</li>
<li>
<p><code v-pre>Mutator</code>：业务线程，分配新对象，修改对象指向关系</p>
</li>
<li>
<p><code v-pre>Collector</code>：<code v-pre>GC</code> 线程，找到存活对象，回收死亡对象的内存空间</p>
</li>
<li>
<p><code v-pre>Serial GC</code>：只有一个 <code v-pre>collector</code></p>
</li>
<li>
<p><code v-pre>Parallel GC</code>：支持多个 <code v-pre>collectors</code> 同时回收的 <code v-pre>GC</code> 算法</p>
</li>
<li>
<p><code v-pre>Concurrent GC</code>：<code v-pre>mutator(s)</code> 和 <code v-pre>collector(s)</code> 可以<strong>同时执行</strong></p>
</li>
<li>
<p><strong>Collectors必须感知对象指向关系的改变！</strong></p>
</li>
<li>
<p>评价GC算法</p>
</li>
<li>
<p>安全性（Safety）：不能回收存活的对象		<strong><font color=#e31>基本要求</font></strong></p>
</li>
<li>
<p>吞吐率（Throughput）：1 - （GC时间 / 程序执行时间）<strong><font color=#e31>花在GC上的时间</font></strong></p>
</li>
<li>
<p>暂停时间（Pause time）：stop the world（STW）<strong><font color=#e31>业务是否感知</font></strong></p>
</li>
<li>
<p>内存开销（Space overhead）<strong><font color=#e31>GC元数据开销</font></strong></p>
</li>
<li>
<p>追踪垃圾回收（Tracing garbage collection）</p>
</li>
<li>
<p>引用计数（Reference counting）</p>
</li>
</ul>
</blockquote>
<h4 id="_1-2-追踪垃圾回收" tabindex="-1"><a class="header-anchor" href="#_1-2-追踪垃圾回收" aria-hidden="true">#</a> 1.2 追踪垃圾回收</h4>
<ul>
<li>对象被回收的条件:指针指向关系不可达的对象</li>
<li>标记根对象
<ul>
<li>静态变量、全局变量、常量、线程栈等</li>
</ul>
</li>
<li>标记：找到可达对象
<ul>
<li>求指针指向关系的传递闭包：从根对象出发，找到所有可达对象</li>
</ul>
</li>
<li>清理：所有不可达对象
<ul>
<li>将存活对象制到另外的内存空间（Copying GC）</li>
<li>将死亡对象的内存标记为“可分配”（Mark-sweep GC）</li>
<li>移动并整理存活对象（Mark-compact GC）</li>
</ul>
</li>
</ul>
<font color=#e31>根据对象的生命周期，使用不同的标记和清理策略</font><h4 id="_1-3-分代gc-generational-gc" tabindex="-1"><a class="header-anchor" href="#_1-3-分代gc-generational-gc" aria-hidden="true">#</a> 1.3 分代GC（Generational GC）</h4>
<blockquote>
<ul>
<li>分代假说（Generational hypothesis）：most objects die young</li>
<li><code v-pre>lntuition</code>：很多对象在分配出来后很快就不再使用了</li>
<li>每个对象都有年龄：经历过GC的次数</li>
<li>目的：对年轻和老年的对象，制定不同的GC策略，<strong>降低整体内存管理的开销</strong></li>
<li>不同年龄的对象处于 <code v-pre>heap</code> 的不同区域</li>
</ul>
<p>年轻代（Young generation）</p>
<ul>
<li>常规的对象分配</li>
<li>由于<strong>存活对象很少</strong>，可以采用 <code v-pre>copying collection</code></li>
<li>GC 吞吐率很高</li>
</ul>
<p>老年代（Old generation）</p>
<ul>
<li><strong>对象趋向于一直活着，反复复制开销较大</strong></li>
<li>可以采用 <code v-pre>mark-sweep collection</code></li>
</ul>
</blockquote>
<h4 id="_1-4-引用计数" tabindex="-1"><a class="header-anchor" href="#_1-4-引用计数" aria-hidden="true">#</a> 1.4 引用计数</h4>
<blockquote>
<ul>
<li>每个对象都有一个与之关联的引用数目</li>
<li>对象存活的条件:当且仅当引用数大于0</li>
</ul>
<p>优点</p>
<ul>
<li>内存管理的操作被平摊到程序执行过程中</li>
<li>内存管理不需要了解 <code v-pre>runtime</code> 的实现细节：C++ 智能指针（<code v-pre>smart pointer</code>）</li>
</ul>
<p>缺点</p>
<ul>
<li>维护引用计数的开销较大：通过<strong>原子操作</strong>保证对引用计数操作的<strong>原子性</strong>和<strong>可见性</strong></li>
<li>无法回收环形数据结构——<code v-pre>weak reference</code></li>
<li>内存开销：每个对象都引入的额外内存空间存储引用数目</li>
<li>回收内存时依然可能引发暂停</li>
</ul>
</blockquote>
<h4 id="_1-5-总结" tabindex="-1"><a class="header-anchor" href="#_1-5-总结" aria-hidden="true">#</a> 1.5 总结</h4>
<blockquote>
<ul>
<li>自动内存管理的背景和意义</li>
<li>概念和评价方法</li>
<li>追踪垃圾回收304</li>
<li>引用计数</li>
<li>分代GC</li>
<li>学术界和工业界在一直在致力于解决自动内存管理技术的不足之处</li>
<li>PLDI'22 Low-Latency,High-Throughput Garbage Collection</li>
</ul>
</blockquote>
<h3 id="_2-go-内存管理及优化" tabindex="-1"><a class="header-anchor" href="#_2-go-内存管理及优化" aria-hidden="true">#</a> 2. Go 内存管理及优化</h3>
</div></template>


