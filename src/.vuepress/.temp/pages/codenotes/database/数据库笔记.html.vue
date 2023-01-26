<template><div><h2 id="数据库" tabindex="-1"><a class="header-anchor" href="#数据库" aria-hidden="true">#</a> 数据库</h2>
<blockquote>
<p>by杰米Y</p>
</blockquote>
<h2 id="一、数据库基础知识" tabindex="-1"><a class="header-anchor" href="#一、数据库基础知识" aria-hidden="true">#</a> 一、数据库基础知识</h2>
<h3 id="_1、数据库系统基本构成" tabindex="-1"><a class="header-anchor" href="#_1、数据库系统基本构成" aria-hidden="true">#</a> 1、数据库系统基本构成</h3>
<ul>
<li><strong>数据库</strong>：数据库(DataBase 简称 DB)就是<u>信息的集合</u>或者说<u>数据库是由数据库管理系统管理的数据的集合</u></li>
<li><strong>数据库管理系统</strong>：数据库管理系统(Database Management System 简称 DBMS)是<u>一种操纵和管理数据库的大型软件，通常用于建立、使用和维护数据库</u></li>
<li><strong>数据库系统</strong>：数据库系统(Data Base System，简称 DBS)通常<u>由软件、数据库和数据管理员(DBA)组成</u></li>
<li><strong>数据库管理员</strong>：数据库管理员(Database Administrator，简称 DBA)<u>负责全面管理和控制数据库系统</u></li>
</ul>
<p>如下图所示：</p>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/e21120184e63406526a4e873cacd23f2.png" alt="数据库系统基本构成"></p>
<h3 id="什么是元组、码、候选码、主码、外码、主属性、非主属性" tabindex="-1"><a class="header-anchor" href="#什么是元组、码、候选码、主码、外码、主属性、非主属性" aria-hidden="true">#</a> 什么是元组、码、候选码、主码、外码、主属性、非主属性？</h3>
<ul>
<li><strong>元组</strong>：元组（tuple）是关系数据库中的基本概念，<strong>关系是一张表</strong>，<u>表中的每行（即数据库中的每条记录）就是一个元组，每列就是一个属性</u>，在二维表里，元组也称为行</li>
<li><strong>码</strong>：码就是<u>能唯一标识实体的属性</u>，对应表中的列</li>
<li><strong>候选码</strong>：<u>若关系中的某一属性或属性组的值能唯一的标识一个元组，而其任何子集都不能再标识，则称该属性组为候选码</u>。例如：在学生实体中，“学号”是能唯一的区分学生实体的，同时又假设“姓名”、“班级”的属性组合足以区分学生实体，那么{学号}和{姓名，班级}都是候选码</li>
<li><strong>主码</strong>：主码也叫主键。主码是从候选码中选出来的，一个实体集中只能有一个主码，但可以有多个候选码</li>
<li><strong>外码</strong>：外码也叫外键。如果一个关系中的一个属性是另外一个关系中的主码则这个属性为外码</li>
<li><strong>主属性</strong>：<u>候选码中出现过的属性称为主属性。</u>比如关系 工人（工号，身份证号，姓名，性别，部门），显然工号和身份证号都能够唯一标示这个关系，所以都是候选码。工号、身份证号这两个属性就是主属性。如果主码是一个属性组，那么属性组中的属性都是主属性</li>
<li><strong>非主属性</strong>：<u>不包含在任何一个候选码中的属性称为非主属性。</u>比如在关系——学生（学号，姓名，年龄，性别，班级）中，主码是“学号”，那么其他的“姓名”、“年龄”、“性别”、“班级”就都可以称为非主属性</li>
</ul>
<h3 id="主键和外键有什么区别" tabindex="-1"><a class="header-anchor" href="#主键和外键有什么区别" aria-hidden="true">#</a> 主键和外键有什么区别?</h3>
<ul>
<li><strong>主键(主码)</strong> ：主键<u>用于唯一标识一个元组，不能有重复，不允许为空</u>。<mark>一个表只能有一个主键</mark></li>
<li><strong>外键(外码)</strong> ：外键用来和其他表建立联系用，外键是另一表的主键，外键是可以有重复的，可以是空值，一个表可以有多个外键</li>
</ul>
<h3 id="为什么不推荐使用外键与级联" tabindex="-1"><a class="header-anchor" href="#为什么不推荐使用外键与级联" aria-hidden="true">#</a> 为什么不推荐使用外键与级联？</h3>
<p>对于外键和级联，阿里巴巴开发手册这样说到：</p>
<blockquote>
<p>【强制】不得使用外键与级联，一切外键概念必须在应用层解决</p>
<p>说明：以学生和成绩的关系为例，学生表中的 student_id 是主键，那么成绩表中的 student_id 则为外键。如果更新学生表中的 student_id，同时触发成绩表中的 student_id 更新，即为级联更新。外键与级联更新适用于单机低并发，不适合分布式、高并发集群；级联更新是强阻塞，存在数据库更新风暴的风险；外键影响数据库的插入速度</p>
</blockquote>
<p>为什么不要用外键呢？大部分人可能会这样回答：</p>
<blockquote>
<ol>
<li><strong>增加了复杂性</strong>：
<ol>
<li>每次做DELETE 或者UPDATE都必须考虑外键约束，会导致开发的时候很痛苦，测试数据极为不方便</li>
<li>外键的主从关系是定的，假如那天需求有变化，数据库中的这个字段根本不需要和其他表有关联的话就会增加很多麻烦</li>
</ol>
</li>
<li><strong>增加了额外工作</strong>： 数据库需要增加维护外键的工作，比如当我们做一些涉及外键字段的增、删、更新操作之后，需要触发相关操作去检查，保证数据的的一致性和正确性，这样会不得不消耗资源（个人觉得这个不是不用外键的原因，因为即使你不使用外键，你在应用层面也还是要保证的。所以，我觉得这个影响可以忽略不计）</li>
<li>外键还会因为需要请求对其他表内部加锁而容易出现死锁情况</li>
<li><strong>对分库分表不友好</strong>：因为分库分表下外键是无法生效的</li>
<li>......</li>
</ol>
</blockquote>
<p>我个人觉得上面这种回答不是特别的全面，只是说了外键存在的一个常见的问题。实际上，我们知道外键也是有很多好处的，比如：</p>
<ol>
<li>保证了数据库数据的一致性和完整性；</li>
<li>级联操作方便，减轻了程序代码量；</li>
<li>......</li>
</ol>
<p>所以说，不要一股脑的就抛弃了外键这个概念，既然它存在就有它存在的道理，如果系统不涉及分库分表，并发量不是很高的情况还是可以考虑使用外键的。</p>
<h3 id="什么是-er-图" tabindex="-1"><a class="header-anchor" href="#什么是-er-图" aria-hidden="true">#</a> 什么是 ER 图？</h3>
<blockquote>
<p>我们做一个项目的时候一定要试着画 ER 图来捋清数据库设计，这个也是面试官问你项目的时候经常会被问道的。</p>
</blockquote>
<p><strong>E-R 图</strong> 也称实体-联系图(Entity Relationship Diagram)，提供了表示实体类型、属性和联系的方法，用来描述现实世界的概念模型。它是描述现实世界关系概念模型的有效方法。 是表示概念关系模型的一种方式。</p>
<p>下图是一个学生选课的 ER 图，每个学生可以选若干门课程，同一门课程也可以被若干人选择，所以它们之间的关系是多对多（M：N）。另外，还有其他两种关系是：1 对 1（1：1）、1 对多（1：N）。</p>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/4717673e36966e0e4b33fccfd753f6ea.png" alt="ER图示例"></p>
<p>我们试着将上面的 ER 图转换成数据库实际的关系模型(实际设计中，我们通常会将任课教师也作为一个实体来处理)：</p>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/5897753dfb301dfa3a814ab06e718a5e.png" alt="关系模型"></p>
<h3 id="数据库范式了解吗" tabindex="-1"><a class="header-anchor" href="#数据库范式了解吗" aria-hidden="true">#</a> 数据库范式了解吗？</h3>
<h4 id="_1nf-第一范式" tabindex="-1"><a class="header-anchor" href="#_1nf-第一范式" aria-hidden="true">#</a> 1NF(第一范式)</h4>
<p>属性（对应于表中的字段）不能再被分割，也就是这个字段只能是一个值，不能再分为多个其他的字段了。<strong>1NF 是所有关系型数据库的最基本要求</strong> ，也就是说关系型数据库中创建的表一定满足第一范式。</p>
<h4 id="_2nf-第二范式" tabindex="-1"><a class="header-anchor" href="#_2nf-第二范式" aria-hidden="true">#</a> 2NF(第二范式)</h4>
<p>2NF 在 1NF 的基础之上，消除了非主属性对于码的部分函数依赖。如下图所示，展示了第一范式到第二范式的过渡。第二范式在第一范式的基础上增加了一个列，这个列称为主键，非主属性都依赖于主键。</p>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/bd1d31be3779342427fc9e462bf7f05c.png" alt="第二范式"></p>
<p>一些重要的概念：</p>
<ul>
<li><strong>函数依赖（functional dependency）</strong>：若在一张表中，在属性（或属性组）X 的值确定的情况下，必定能确定属性 Y 的值，那么就可以说 Y 函数依赖于 X，写作 X → Y。</li>
<li><strong>部分函数依赖（partial functional dependency）</strong>：如果 X → Y，并且存在 X 的一个真子集 X0，使得 X0 → Y，则称 Y 对 X 部分函数依赖。比如学生基本信息表 R 中（学号，身份证号，姓名）当然学号属性取值是唯一的，在 R 关系中，（学号，身份证号）→（姓名），（学号）→（姓名），（身份证号）→（姓名），所以姓名部分函数依赖于（学号，身份证号）；</li>
<li><strong>完全函数依赖(Full functional dependency)</strong>：在一个关系中，若某个非主属性数据项依赖于全部关键字称之为完全函数依赖。比如学生基本信息表 R（学号，班级，姓名）假设不同的班级学号有相同的，班级内学号不能相同，在 R 关系中，（学号，班级）→（姓名），但是（学号）→（姓名）不成立，（班级）→（姓名）不成立，所以姓名完全函数依赖与（学号，班级）；</li>
<li><strong>传递函数依赖</strong>：在关系模式 R(U)中，设 X，Y，Z 是 U 的不同的属性子集，如果 X 确定 Y、Y 确定 Z，且有 X 不包含 Y，Y 不确定 X，（X∪Y）∩ Z = 空集合，则称 Z 传递函数依赖(transitive functional dependency) 于 X。传递函数依赖会导致数据冗余和异常。传递函数依赖的 Y 和 Z 子集往往同属于某一个事物，因此可将其合并放到一个表中。比如在关系 R(学号 , 姓名, 系名，系主任)中，学号 → 系名，系名 → 系主任，所以存在非主属性系主任对于学号的传递函数依赖。</li>
</ul>
<h4 id="_3nf-第三范式" tabindex="-1"><a class="header-anchor" href="#_3nf-第三范式" aria-hidden="true">#</a> 3NF(第三范式)</h4>
<p>3NF 在 2NF 的基础之上，消除了非主属性对于码的传递函数依赖 。符合 3NF 要求的数据库设计，<strong>基本</strong>上解决了数据冗余过大，插入异常，修改异常，删除异常的问题。比如在关系 R(学号，姓名，系名，系主任)中，学号 → 系名，系名 → 系主任，所以存在非主属性系主任对于学号的传递函数依赖，所以该表的设计，不符合 3NF 的要求。</p>
<h4 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h4>
<ul>
<li>1NF：属性不可再分</li>
<li>2NF：1NF 的基础之上，消除了非主属性对于码的部分函数依赖</li>
<li>3NF：3NF 在 2NF 的基础之上，消除了非主属性对于码的传递函数依赖</li>
</ul>
<h3 id="什么是存储过程" tabindex="-1"><a class="header-anchor" href="#什么是存储过程" aria-hidden="true">#</a> 什么是存储过程?</h3>
<p>我们可以把存储过程看成是一些 SQL 语句的集合，中间加了点逻辑控制语句。存储过程在业务比较复杂的时候是非常实用的，比如很多时候我们完成一个操作可能需要写一大串 SQL 语句，这时候我们就可以写有一个存储过程，这样也方便了我们下一次的调用。存储过程一旦调试完成通过后就能稳定运行，另外，使用存储过程比单纯 SQL 语句执行要快，因为存储过程是预编译过的。</p>
<p>存储过程在互联网公司应用不多，因为存储过程难以调试和扩展，而且没有移植性，还会消耗数据库资源。</p>
<p>阿里巴巴 Java 开发手册里要求禁止使用存储过程。</p>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/0fa082bc4d4f919065767476a41b2156.png" alt="阿里巴巴Java开发手册: 禁止存储过程"></p>
<h3 id="drop、delete-与-truncate-区别" tabindex="-1"><a class="header-anchor" href="#drop、delete-与-truncate-区别" aria-hidden="true">#</a> drop、delete 与 truncate 区别？</h3>
<h4 id="用法不同" tabindex="-1"><a class="header-anchor" href="#用法不同" aria-hidden="true">#</a> 用法不同</h4>
<ul>
<li>drop（丢弃数据）：<code v-pre>drop table 表名</code> ，直接将表都删除掉，在删除表的时候使用</li>
<li>truncate （清空数据）：<code v-pre>truncate table 表名</code> ，只删除表中的数据，再插入数据的时候自增长 id 又从 1 开始，在清空表中数据的时候使用</li>
<li>delete（删除数据）：<code v-pre>delete from 表名 where 列名=值</code>，删除某一列的数据，如果不加 where 子句和<code v-pre>truncate table 表名</code>作用类似</li>
</ul>
<p>truncate 和不带 where 子句的 delete、以及 drop 都会删除表内的数据，但是 <strong>truncate 和 delete 只删除数据不删除表的结构(定义)，执行 drop 语句，此表的结构也会删除，也就是执行 drop 之后对应的表不复存在。</strong></p>
<h4 id="属于不同的数据库语言" tabindex="-1"><a class="header-anchor" href="#属于不同的数据库语言" aria-hidden="true">#</a> 属于不同的数据库语言</h4>
<p>truncate 和 drop 属于 DDL(数据定义语言)语句，操作立即生效，原数据不放到 rollback segment 中，不能回滚，操作不触发 trigger。而 delete 语句是 DML (数据库操作语言)语句，这个操作会放到 rollback segement 中，事务提交之后才生效。</p>
<p><strong>DML 语句和 DDL 语句区别：</strong></p>
<ul>
<li>DML 是数据库操作语言（Data Manipulation Language）的缩写，是指对数据库中表记录的操作，主要包括表记录的插入（insert）、更新（update）、删除（delete）和查询（select），是开发人员日常使用最频繁的操作。</li>
<li>DDL （Data Definition Language）是数据定义语言的缩写，简单来说，就是对数据库内部的对象进行创建、删除、修改的操作语言。它和 DML 语言的最大区别是 DML 只是对表内部数据的操作，而不涉及到表的定义、结构的修改，更不会涉及到其他对象。DDL 语句更多的被数据库管理员（DBA）所使用，一般的开发人员很少使用。</li>
</ul>
<h4 id="执行速度不同" tabindex="-1"><a class="header-anchor" href="#执行速度不同" aria-hidden="true">#</a> 执行速度不同</h4>
<p>一般来说：drop&gt;truncate&gt;delete（这个我没有设计测试过）</p>
<h3 id="数据库设计通常分为哪几步" tabindex="-1"><a class="header-anchor" href="#数据库设计通常分为哪几步" aria-hidden="true">#</a> 数据库设计通常分为哪几步?</h3>
<ol>
<li><strong>需求分析</strong>：分析用户的需求，包括数据、功能和性能需求。</li>
<li><strong>概念结构设计</strong>：主要采用 E-R 模型进行设计，包括画 E-R 图。</li>
<li><strong>逻辑结构设计</strong>：通过将 E-R 图转换成表，实现从 E-R 模型到关系模型的转换。</li>
<li><strong>物理结构设计</strong>：主要是为所设计的数据库选择合适的存储结构和存取路径。</li>
<li><strong>数据库实施</strong>：包括编程、测试和试运行</li>
<li><strong>数据库的运行和维护</strong>：系统的运行与数据库的日常维护。</li>
</ol>
<h2 id="二、字符集" tabindex="-1"><a class="header-anchor" href="#二、字符集" aria-hidden="true">#</a> 二、字符集</h2>
<p>MySQL 字符编码集中有两套 UTF-8 编码实现：<strong><code v-pre>utf8</code></strong> 和 <strong><code v-pre>utf8mb4</code></strong>。</p>
<p>如果使用 <strong><code v-pre>utf8</code></strong>  的话，存储emoji 符号和一些比较复杂的汉字、繁体字就会出错。</p>
<h3 id="_1、何为字符集" tabindex="-1"><a class="header-anchor" href="#_1、何为字符集" aria-hidden="true">#</a> 1、何为字符集？</h3>
<p>字符是各种文字和符号的统称，包括各个国家文字、标点符号、表情、数字等等。 <strong>字符集</strong>就是一系列字符的集合，字符集的种类较多，每个字符集可以表示的字符范围通常不同，就比如说有些字符集是无法表示汉字的。</p>
<p><strong>计算机只能存储二进制的数据，那英文、汉字、表情等字符应该如何存储呢？</strong></p>
<p>我们要将这些字符和二级制的数据一一对应起来，比如说字符“a”对应“01100001”，反之，“01100001”对应 “a”。我们将字符对应二进制数据的过程称为&quot;<strong>字符编码</strong>&quot;，反之，二进制数据解析成字符的过程称为“<strong>字符解码</strong>”。</p>
<h3 id="_2、有哪些常见的字符集" tabindex="-1"><a class="header-anchor" href="#_2、有哪些常见的字符集" aria-hidden="true">#</a> 2、有哪些常见的字符集？</h3>
<p>常见的字符集有 ASCII、GB2312、GBK、UTF-8......</p>
<p>不同的字符集的主要区别在于：</p>
<ul>
<li>可以表示的字符范围</li>
<li>编码方式</li>
</ul>
<h4 id="_2-1、ascii" tabindex="-1"><a class="header-anchor" href="#_2-1、ascii" aria-hidden="true">#</a> 2.1、ASCII</h4>
<p><strong>ASCII</strong>（<strong>A</strong>merican <strong>S</strong>tandard <strong>C</strong>ode for <strong>I</strong>nformation <strong>I</strong>nterchange，美国信息交换标准代码）是一套主要用于现代美国英语的字符集（这也是 ASCII 字符集的局限性所在）。</p>
<p>**为什么 ASCII 字符集没有考虑到中文等其他字符呢？**因为计算机是美国人发明的，当时，计算机的发展还处于比较雏形的时代，还未在其他国家大规模使用。因此，美国发布 ASCII 字符集的时候没有考虑兼容其他国家的语言。</p>
<p>ASCII 字符集至今为止共定义了 128 个字符，其中有 33 个控制字符（比如回车、删除）无法显示。</p>
<p>一个 ASCII 码长度是一个字节也就是 8 个 bit，比如“a”对应的 ASCII 码是“01100001”。不过，最高位是 0 仅仅作为校验位，其余 7 位使用 0 和 1 进行组合，所以，ASCII 字符集可以定义 128（2^7）个字符。</p>
<p>由于，ASCII 码可以表示的字符实在是太少了。后来，人们对其进行了扩展得到了 <strong>ASCII 扩展字符集</strong> 。ASCII 扩展字符集使用 8 位（bits）表示一个字符，所以，ASCII 扩展字符集可以定义 256（2^8）个字符。</p>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/c1c6375d08ca268690cef2b13591a5b4.png" alt="ASCII字符编码"></p>
<h4 id="_2、gb2312" tabindex="-1"><a class="header-anchor" href="#_2、gb2312" aria-hidden="true">#</a> 2、GB2312</h4>
<p>我们上面说了，ASCII 字符集是一种现代美国英语适用的字符集。因此，很多国家都捣鼓了一个适合自己国家语言的字符集。</p>
<p>GB2312 字符集是一种对汉字比较友好的字符集，共收录 6700 多个汉字，基本涵盖了绝大部分常用汉字。不过，GB2312 字符集不支持绝大部分的生僻字和繁体字。</p>
<p>对于英语字符，GB2312 编码和 ASCII 码是相同的，1 字节编码即可。对于非英字符，需要 2 字节编码。</p>
<h4 id="_3、gbk" tabindex="-1"><a class="header-anchor" href="#_3、gbk" aria-hidden="true">#</a> 3、GBK</h4>
<p>GBK 字符集可以看作是 GB2312 字符集的扩展，兼容 GB2312 字符集，共收录了 20000 多个汉字。</p>
<p>GBK 中 K 是汉语拼音 Kuo Zhan（扩展）中的“Kuo”的首字母。</p>
<h4 id="_4、gb18030" tabindex="-1"><a class="header-anchor" href="#_4、gb18030" aria-hidden="true">#</a> 4、GB18030</h4>
<p>GB18030 完全兼容 GB2312 和 GBK 字符集，纳入中国国内少数民族的文字，且收录了日韩汉字，是目前为止最全面的汉字字符集，共收录汉字 70000 多个。</p>
<h4 id="_5、big5" tabindex="-1"><a class="header-anchor" href="#_5、big5" aria-hidden="true">#</a> 5、BIG5</h4>
<p>BIG5 主要针对的是繁体中文，收录了 13000 多个汉字。</p>
<h4 id="_6、unicode-utf-8编码" tabindex="-1"><a class="header-anchor" href="#_6、unicode-utf-8编码" aria-hidden="true">#</a> 6、Unicode &amp; UTF-8编码</h4>
<p>为了更加适合本国语言，诞生了很多种字符集。</p>
<p>我们上面也说了不同的字符集可以表示的字符范围以及编码规则存在差异。这就导致了一个非常严重的问题：<strong>使用错误的编码方式查看一个包含字符的文件就会产生乱码现象。</strong></p>
<p>就比如说你使用 UTF-8 编码方式打开 GB2312 编码格式的文件就会出现乱码。示例：“牛”这个汉字 GB2312 编码后的十六进制数值为 “C5A3”，而 “C5A3” 用 UTF-8 解码之后得到的却是 “ţ”。</p>
<p>你可以通过这个网站在线进行编码和解码：<a href="https://www.haomeili.net/HanZi/ZiFuBianMaZhuanHuan" target="_blank" rel="noopener noreferrer">https://www.haomeili.net/HanZi/ZiFuBianMaZhuanHuan<ExternalLinkIcon/></a></p>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/836c49b117ee4408871b0020b74c991d.png" alt="img"></p>
<p>这样我们就搞懂了乱码的本质： <strong>编码和解码时用了不同或者不兼容的字符集</strong> 。</p>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/a8808cbabeea49caa3af27d314fa3c02-1.jpg" alt="img"></p>
<p>为了解决这个问题，人们就想：“如果我们能够有一种字符集将世界上所有的字符都纳入其中就好了！”。</p>
<p>然后，<strong>Unicode</strong> 带着这个使命诞生了。</p>
<p>Unicode 字符集中包含了世界上几乎所有已知的字符。不过，Unicode 字符集并没有规定如何存储这些字符（也就是如何使用二进制数据表示这些字符）。</p>
<p>然后，就有了 <strong>UTF-8</strong>（<strong>8</strong>-bit <strong>U</strong>nicode <strong>T</strong>ransformation <strong>F</strong>ormat）。类似的还有 UTF-16、 UTF-32。</p>
<p>UTF-8 使用 1 到 4 个字节为每个字符编码， UTF-16 使用 2 或 4 个字节为每个字符编码，UTF-32 固定位 4 个字节为每个字符编码。</p>
<p>UTF-8 可以根据不同的符号自动选择编码的长短，像英文字符只需要 1 个字节就够了，这一点 ASCII 字符集一样 。因此，对于英语字符，UTF-8 编码和 ASCII 码是相同的。</p>
<p>UTF-32 的规则最简单，不过缺陷也比较明显，对于英文字母这类字符消耗的空间是 UTF-8 的 4 倍之多。</p>
<p><strong>UTF-8</strong> 是目前使用最广的一种字符编码，。</p>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/1280px-Utf8webgrowth.svg.png" alt="img"></p>
<h3 id="_3、mysql-字符集" tabindex="-1"><a class="header-anchor" href="#_3、mysql-字符集" aria-hidden="true">#</a> 3、MySQL 字符集</h3>
<p>MySQL 支持很多种字符编码的方式，比如 UTF-8、GB2312、GBK、BIG5。</p>
<p>你可以通过 <code v-pre>SHOW CHARSET</code> 命令来查看。</p>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20211008164229671.png" alt="img"></p>
<p>通常情况下，我们建议使用 UTF-8 作为默认的字符编码方式。</p>
<p>不过，这里有一个小坑。</p>
<p>MySQL 字符编码集中有两套 UTF-8 编码实现：</p>
<ul>
<li><strong><code v-pre>utf8</code></strong> ： <code v-pre>utf8</code>编码只支持<code v-pre>1-3</code>个字节 。 在 <code v-pre>utf8</code> 编码中，中文是占 3 个字节，其他数字、英文、符号占一个字节。但 emoji 符号占 4 个字节，一些较复杂的文字、繁体字也是 4 个字节。</li>
<li><strong><code v-pre>utf8mb4</code></strong> ： UTF-8 的完整实现，正版！最多支持使用 4 个字节表示字符，因此，可以用来存储 emoji 符号。</li>
</ul>
<p><strong>为什么有两套 UTF-8 编码实现呢？</strong> 原因如下：</p>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20211008164542347.png" alt="img"></p>
<p>因此，如果你需要存储<code v-pre>emoji</code>类型的数据或者一些比较复杂的文字、繁体字到 MySQL 数据库的话，数据库的编码一定要指定为<code v-pre>utf8mb4</code> 而不是<code v-pre>utf8</code> ，要不然存储的时候就会报错了。</p>
<p>演示一下吧！（环境：MySQL 5.7+）</p>
<p>建表语句如下，我们指定数据库 CHARSET 为 <code v-pre>utf8</code> 。</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">`</span>user<span class="token punctuation">`</span></span> <span class="token punctuation">(</span>
  <span class="token identifier"><span class="token punctuation">`</span>id<span class="token punctuation">`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">66</span><span class="token punctuation">)</span> <span class="token keyword">CHARACTER</span> <span class="token keyword">SET</span> utf8mb4 <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>name<span class="token punctuation">`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">33</span><span class="token punctuation">)</span> <span class="token keyword">CHARACTER</span> <span class="token keyword">SET</span> utf8mb4 <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>phone<span class="token punctuation">`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">33</span><span class="token punctuation">)</span> <span class="token keyword">CHARACTER</span> <span class="token keyword">SET</span> utf8mb4 <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>password<span class="token punctuation">`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span> <span class="token keyword">CHARACTER</span> <span class="token keyword">SET</span> utf8mb4 <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span>
<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span><span class="token operator">=</span><span class="token keyword">InnoDB</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CHARSET</span><span class="token operator">=</span>utf8<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当我们执行下面的 insert 语句插入数据到数据库时，果然报错！</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>user<span class="token punctuation">`</span></span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>id<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>name<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>phone<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>password<span class="token punctuation">`</span></span><span class="token punctuation">)</span>
<span class="token keyword">VALUES</span>
	<span class="token punctuation">(</span><span class="token string">'A00003'</span><span class="token punctuation">,</span> <span class="token string">'guide哥😘😘😘'</span><span class="token punctuation">,</span> <span class="token string">'181631312312'</span><span class="token punctuation">,</span> <span class="token string">'123456'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>报错信息如下：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>Incorrect string value: '\xF0\x9F\x98\x98\xF0\x9F...' for column 'name' at row 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="三、mysql" tabindex="-1"><a class="header-anchor" href="#三、mysql" aria-hidden="true">#</a> 三、MySQL</h2>
<h3 id="_1、mysql知识点" tabindex="-1"><a class="header-anchor" href="#_1、mysql知识点" aria-hidden="true">#</a> 1、MySQL知识点</h3>
<h4 id="_1-1、mysql-基础" tabindex="-1"><a class="header-anchor" href="#_1-1、mysql-基础" aria-hidden="true">#</a> 1.1、MySQL 基础</h4>
<h5 id="_1-1-1、关系型数据库介绍" tabindex="-1"><a class="header-anchor" href="#_1-1-1、关系型数据库介绍" aria-hidden="true">#</a> 1.1.1、关系型数据库介绍</h5>
<p>顾名思义，关系型数据库就是一种建立在关系模型的基础上的数据库。关系模型表明了数据库中所存储的数据之间的联系（一对一、一对多、多对多）。</p>
<p>关系型数据库中，我们的数据都被存放在了各种表中（比如用户表），表中的每一行就存放着一条数据（比如一个用户的信息）。</p>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/5e3c1a71724a38245aa43b02_99bf70d46cc247be878de9d3a88f0c44.png" alt="img"></p>
<p>大部分关系型数据库都使用 SQL 来操作数据库中的数据。并且，大部分关系型数据库都支持事务的四大特性(ACID)。</p>
<p><strong>有哪些常见的关系型数据库呢？</strong></p>
<p>MySQL、PostgreSQL、Oracle、SQL Server、SQLite（微信本地的聊天记录的存储就是用的 SQLite） ......</p>
<h5 id="_1-1-2、mysql-介绍" tabindex="-1"><a class="header-anchor" href="#_1-1-2、mysql-介绍" aria-hidden="true">#</a> 1.1.2、MySQL 介绍</h5>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/20210327143351823.png" alt="img"></p>
<p><strong>MySQL 是一种关系型数据库，主要用于持久化存储我们的系统中的一些数据比如用户信息。</strong></p>
<p>由于 MySQL 是开源免费并且比较成熟的数据库，因此，MySQL 被大量使用在各种系统中。任何人都可以在 GPL(General Public License) 的许可下下载并根据个性化的需要对其进行修改，MySQL 的默认端口号是<strong>3306</strong>。</p>
<h4 id="_2-2、存储引擎" tabindex="-1"><a class="header-anchor" href="#_2-2、存储引擎" aria-hidden="true">#</a> 2.2、存储引擎</h4>
<h5 id="_2-2-1、存储引擎相关的命令" tabindex="-1"><a class="header-anchor" href="#_2-2-1、存储引擎相关的命令" aria-hidden="true">#</a> 2.2.1、存储引擎相关的命令</h5>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre v-pre class="language-mysql"><code>// 查看 MySQL 提供的所有存储引擎
mysql&gt; show engines;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/mysql-engines.png" alt="查看MySQL提供的所有存储引擎"></p>
<p>从上图我们可以查看出 MySQL 当前默认的存储引擎是 InnoDB，并且在 5.7 版本所有的存储引擎中只有 InnoDB 是事务性存储引擎，也就是说只有 InnoDB 支持事务。</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">// 查看 MySQL 当前默认的存储引擎</span>
mysql<span class="token operator">></span> <span class="token keyword">show</span> variables <span class="token operator">like</span> <span class="token string">'%storage_engine%'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">// 查看表的存储引擎</span>
<span class="token keyword">show</span> <span class="token keyword">table</span> <span class="token keyword">status</span> <span class="token operator">like</span> <span class="token string">"table_name"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20221222165658760.png" alt="image-20221222165658760"></p>
<h5 id="_2-2-2、myisam-和-innodb-的区别" tabindex="-1"><a class="header-anchor" href="#_2-2-2、myisam-和-innodb-的区别" aria-hidden="true">#</a> 2.2.2、MyISAM 和 InnoDB 的区别</h5>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/20210327145248960.png" alt="img"></p>
<p>MySQL 5.5 之前，MyISAM 引擎是 MySQL 的默认存储引擎，可谓是风光一时。</p>
<p>虽然，MyISAM 的性能还行，各种特性也还不错（比如全文索引、压缩、空间函数等）。但是，<strong>MyISAM 不支持事务和行级锁</strong>，而且<strong>最大的缺陷就是崩溃后无法安全恢复</strong>。</p>
<p>5.5 版本之后，MySQL 引入了 InnoDB（事务性数据库引擎），MySQL 5.5 版本后默认的存储引擎为 InnoDB。小伙子，一定要记好这个 InnoDB ，你每次使用 MySQL 数据库都是用的这个存储引擎吧？</p>
<p>言归正传！咱们下面还是来简单对比一下两者：</p>
<ol>
<li><strong>是否支持行级锁</strong></li>
</ol>
<p>MyISAM 只有表级锁（table-level locking），而 InnoDB 支持行级锁（row-level locking）和表级锁，默认为行级锁。</p>
<p>也就说，MyISAM 一锁就是锁住了整张表，这在并发写的情况下是多么滴憨憨啊！这也是为什么 InnoDB 在并发写的时候，性能更牛皮了！</p>
<ol start="2">
<li><strong>是否支持事务</strong></li>
</ol>
<p>MyISAM 不提供事务支持。</p>
<p>InnoDB 提供事务支持，具有提交（commit）和回滚（rollback）事务的能力。</p>
<ol start="3">
<li><strong>是否支持外键</strong></li>
</ol>
<p>MyISAM 不支持，而 InnoDB 支持。</p>
<blockquote>
<p>🌈 拓展一下：</p>
<p>一般我们也是不建议在数据库层面使用外键的，应用层面可以解决。不过，这样会对数据的一致性造成威胁，具体要不要使用外键还是要根据你的项目来决定。</p>
</blockquote>
<ol start="4">
<li><strong>是否支持数据库异常崩溃后的安全恢复</strong></li>
</ol>
<p>MyISAM 不支持，而 InnoDB 支持。</p>
<p>使用 InnoDB 的数据库在异常崩溃后，数据库重新启动的时候会保证数据库恢复到崩溃前的状态，这个恢复的过程依赖于 <code v-pre>redo log</code> 。</p>
<blockquote>
<p>🌈 拓展一下：</p>
<ul>
<li>MySQL InnoDB 引擎使用 <strong>redo log(重做日志)</strong> 保证事务的<strong>持久性</strong>，使用 <strong>undo log(回滚日志)</strong> 来保证事务的<strong>原子性</strong></li>
<li>MySQL InnoDB 引擎通过 <strong>锁机制</strong>、<strong>MVCC</strong> 等手段来保证事务的隔离性（默认支持的隔离级别是 <strong><code v-pre>REPEATABLE-READ</code></strong>）</li>
<li>保证了事务的持久性、原子性、隔离性之后，一致性才能得到保障</li>
</ul>
</blockquote>
<p><strong>5.是否支持 MVCC</strong></p>
<p>MyISAM 不支持，而 InnoDB 支持。</p>
<p>讲真，这个对比有点废话，毕竟 MyISAM 连行级锁都不支持。</p>
<p>MVCC 可以看作是行级锁的一个升级，可以有效减少加锁操作，提供性能。</p>
<h5 id="_2-2-3、关于-myisam-和-innodb-的选择问题" tabindex="-1"><a class="header-anchor" href="#_2-2-3、关于-myisam-和-innodb-的选择问题" aria-hidden="true">#</a> 2.2.3、关于 MyISAM 和 InnoDB 的选择问题</h5>
<p>大多数时候我们使用的都是 InnoDB 存储引擎，在某些读密集的情况下，使用 MyISAM 也是合适的。不过，前提是你的项目不介意 MyISAM 不支持事务、崩溃恢复等缺点（可是~我们一般都会介意啊！）。</p>
<p>《MySQL 高性能》上面有一句话这样写到：</p>
<blockquote>
<p>不要轻易相信“MyISAM 比 InnoDB 快”之类的经验之谈，这个结论往往不是绝对的。在很多我们已知场景中，InnoDB 的速度都可以让 MyISAM 望尘莫及，尤其是用到了聚簇索引，或者需要访问的数据都可以放入内存的应用。</p>
</blockquote>
<p>一般情况下我们选择 InnoDB 都是没有问题的，但是某些情况下你并不在乎可扩展能力和并发能力，也不需要事务支持，也不在乎崩溃后的安全恢复问题的话，选择 MyISAM 也是一个不错的选择。但是一般情况下，我们都是需要考虑到这些问题的。</p>
<p>因此，对于咱们日常开发的业务系统来说，你几乎找不到什么理由再使用 MyISAM 作为自己的 MySQL 数据库的存储引擎。</p>
<h4 id="_2-3、锁机制与-innodb-锁算法" tabindex="-1"><a class="header-anchor" href="#_2-3、锁机制与-innodb-锁算法" aria-hidden="true">#</a> 2.3、锁机制与 InnoDB 锁算法</h4>
<p><strong>MyISAM 和 InnoDB 存储引擎使用的锁：</strong></p>
<ul>
<li>MyISAM 采用表级锁(table-level locking)</li>
<li>InnoDB 支持行级锁(row-level locking)和表级锁，默认为行级锁</li>
</ul>
<p><strong>表级锁和行级锁对比：</strong></p>
<ul>
<li><strong>表级锁：</strong> MySQL 中锁定 <strong>粒度最大</strong> 的一种锁，对当前操作的整张表加锁，实现简单，资源消耗也比较少，加锁快，不会出现死锁。其锁定粒度最大，触发锁冲突的概率最高，并发度最低，MyISAM 和 InnoDB 引擎都支持表级锁。</li>
<li><strong>行级锁：</strong> MySQL 中锁定 <strong>粒度最小</strong> 的一种锁，只针对当前操作的行进行加锁。 行级锁能大大减少数据库操作的冲突。其加锁粒度最小，并发度高，但加锁的开销也最大，加锁慢，会出现死锁。</li>
</ul>
<p><strong>InnoDB 存储引擎的锁的算法有三种：</strong></p>
<ul>
<li>Record lock：记录锁，单个行记录上的锁</li>
<li>Gap lock：间隙锁，锁定一个范围，不包括记录本身</li>
<li>Next-key lock：record+gap 临键锁，锁定一个范围，包含记录本身</li>
</ul>
<h4 id="_2-4、查询缓存" tabindex="-1"><a class="header-anchor" href="#_2-4、查询缓存" aria-hidden="true">#</a> 2.4、查询缓存</h4>
<p>执行查询语句的时候，会先查询缓存。不过，MySQL 8.0 版本后移除，因为这个功能不太实用</p>
<p><code v-pre>my.cnf</code> 加入以下配置，重启 MySQL 开启查询缓存</p>
<div class="language-properties line-numbers-mode" data-ext="properties"><pre v-pre class="language-properties"><code><span class="token key attr-name">query_cache_type</span><span class="token punctuation">=</span><span class="token value attr-value">1</span>
<span class="token key attr-name">query_cache_size</span><span class="token punctuation">=</span><span class="token value attr-value">600000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>MySQL 执行以下命令也可以开启查询缓存</p>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre v-pre class="language-mysql"><code>set global query_cache_type=1;
set global query_cache_size=600000;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如上，<strong>开启查询缓存后在同样的查询条件以及数据情况下，会直接在缓存中返回结果</strong>。这里的查询条件包括查询本身、当前要查询的数据库、客户端协议版本号等一些可能影响结果的信息。（<strong>查询缓存不命中的情况：（1）</strong>）因此任何两个查询在任何字符上的不同都会导致缓存不命中。此外，（<strong>查询缓存不命中的情况：（2）</strong>）如果查询中包含任何用户自定义函数、存储函数、用户变量、临时表、MySQL 库中的系统表，其查询结果也不会被缓存。（<strong>查询缓存不命中的情况：（3）</strong>）<strong>缓存建立之后</strong>，MySQL 的查询缓存系统会跟踪查询中涉及的每张表，如果这些表（数据或结构）发生变化，那么和这张表相关的所有缓存数据都将失效。</p>
<p><strong>缓存虽然能够提升数据库的查询性能，但是缓存同时也带来了额外的开销，每次查询后都要做一次缓存操作，失效后还要销毁。</strong> 因此，开启查询缓存要谨慎，尤其对于写密集的应用来说更是如此。如果开启，要注意合理控制缓存空间大小，一般来说其大小设置为几十 MB 比较合适。此外，<strong>还可以通过 sql_cache 和 sql_no_cache 来控制某个查询语句是否需要缓存：</strong></p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> sql_no_cache <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">from</span> usr<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2-5、事务" tabindex="-1"><a class="header-anchor" href="#_2-5、事务" aria-hidden="true">#</a> 2.5、事务</h4>
<h5 id="_2-5-1、何为事务" tabindex="-1"><a class="header-anchor" href="#_2-5-1、何为事务" aria-hidden="true">#</a> 2.5.1、何为事务？</h5>
<p>一言蔽之，<strong>事务是逻辑上的一组操作，要么都执行，要么都不执行。</strong></p>
<p><strong>可以简单举一个例子不？</strong></p>
<p>事务最经典也经常被拿出来说例子就是转账了。假如小明要给小红转账 1000 元，这个转账会涉及到两个关键操作就是：</p>
<ol>
<li>将小明的余额减少 1000 元</li>
<li>将小红的余额增加 1000 元。</li>
</ol>
<p>事务会把这两个操作就可以看成逻辑上的一个整体，这个整体包含的操作要么都成功，要么都要失败。</p>
<p>这样就不会出现小明余额减少而小红的余额却并没有增加的情况。</p>
<h5 id="_2-5-2、何为数据库事务" tabindex="-1"><a class="header-anchor" href="#_2-5-2、何为数据库事务" aria-hidden="true">#</a> 2.5.2、何为数据库事务？</h5>
<p>数据库事务在我们日常开发中接触的最多了。如果你的项目属于单体架构的话，你接触到的往往就是数据库事务了。</p>
<p>平时，我们在谈论事务的时候，如果没有特指<strong>分布式事务</strong>，往往指的就是<strong>数据库事务</strong>。</p>
<p><strong>那数据库事务有什么作用呢？</strong></p>
<p>简单来说：数据库事务可以保证多个对数据库的操作（也就是 SQL 语句）构成一个逻辑上的整体。构成这个逻辑上的整体的这些数据库操作遵循：<strong>要么全部执行成功，要么全部不执行</strong> 。</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment"># 开启一个事务</span>
<span class="token keyword">START</span> <span class="token keyword">TRANSACTION</span><span class="token punctuation">;</span>
<span class="token comment"># 多条 SQL 语句</span>
SQL1<span class="token punctuation">,</span>SQL2<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token comment">## 提交事务</span>
<span class="token keyword">COMMIT</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/640-20201207160554677.png" alt="img"></p>
<p>另外，关系型数据库（例如：<code v-pre>MySQL</code>、<code v-pre>SQL Server</code>、<code v-pre>Oracle</code> 等）事务都有 <strong>ACID</strong> 特性：</p>
<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20221224182637264.png" alt="image-20221224182637264"></p>
<h5 id="_2-5-3、何为-acid-特性呢" tabindex="-1"><a class="header-anchor" href="#_2-5-3、何为-acid-特性呢" aria-hidden="true">#</a> 2.5.3、何为 ACID 特性呢？</h5>
<ol>
<li><strong>原子性</strong>（<code v-pre>Atomicity</code>） ： 事务是最小的执行单位，不允许分割。事务的原子性确保动作要么全部完成，要么完全不起作用；</li>
<li><strong>一致性</strong>（<code v-pre>Consistency</code>）： 执行事务前后，数据保持一致，例如转账业务中，无论事务是否成功，转账者和收款人的总额应该是不变的；</li>
<li><strong>隔离性</strong>（<code v-pre>Isolation</code>）： 并发访问数据库时，一个用户的事务不被其他事务所干扰，各并发事务之间数据库是独立的；</li>
<li><strong>持久性</strong>（<code v-pre>Durability</code>）： 一个事务被提交之后。它对数据库中数据的改变是持久的，即使数据库发生故障也不应该对其有任何影响。</li>
</ol>
<p><strong>数据事务的实现原理呢？</strong></p>
<p>我们这里以 MySQL 的 InnoDB 引擎为例来简单说一下。</p>
<p>MySQL InnoDB 引擎使用 <strong>redo log(重做日志)</strong> 保证事务的<strong>持久性</strong>，使用 <strong>undo log(回滚日志)</strong> 来保证事务的<strong>原子性</strong>。</p>
<p>MySQL InnoDB 引擎通过 <strong>锁机制</strong>、<strong>MVCC</strong> 等手段来保证事务的隔离性（ 默认支持的隔离级别是 <strong><code v-pre>REPEATABLE-READ</code></strong> ）。</p>
<p>保证了事务的持久性、原子性、隔离性之后，一致性才能得到保障。</p>
<h5 id="_2-5-4、并发事务带来哪些问题" tabindex="-1"><a class="header-anchor" href="#_2-5-4、并发事务带来哪些问题" aria-hidden="true">#</a> 2.5.4、并发事务带来哪些问题?</h5>
<p>在典型的应用程序中，多个事务并发运行，经常会操作相同的数据来完成各自的任务（多个用户对同一数据进行操作）。并发虽然是必须的，但可能会导致以下的问题。</p>
<ul>
<li><strong>脏读（Dirty read）:</strong> 当一个事务正在访问数据并且对数据进行了修改，而这种修改还没有提交到数据库中，这时另外一个事务也访问了这个数据，然后使用了这个数据。因为这个数据是还没有提交的数据，那么另外一个事务读到的这个数据是“脏数据”，依据“脏数据”所做的操作可能是不正确的。</li>
<li><strong>丢失修改（Lost to modify）:</strong> 指在一个事务读取一个数据时，另外一个事务也访问了该数据，那么在第一个事务中修改了这个数据后，第二个事务也修改了这个数据。这样第一个事务内的修改结果就被丢失，因此称为丢失修改。 例如：事务 1 读取某表中的数据 A=20，事务 2 也读取 A=20，事务 1 修改 A=A-1，事务 2 也修改 A=A-1，最终结果 A=19，事务 1 的修改被丢失。</li>
<li><strong>不可重复读（Unrepeatable read）:</strong> 指在一个事务内多次读同一数据。在这个事务还没有结束时，另一个事务也访问该数据。那么，在第一个事务中的两次读数据之间，由于第二个事务的修改导致第一个事务两次读取的数据可能不太一样。这就发生了在一个事务内两次读到的数据是不一样的情况，因此称为不可重复读。</li>
<li><strong>幻读（Phantom read）:</strong> 幻读与不可重复读类似。它发生在一个事务（T1）读取了几行数据，接着另一个并发事务（T2）插入了一些数据时。在随后的查询中，第一个事务（T1）就会发现多了一些原本不存在的记录，就好像发生了幻觉一样，所以称为幻读。</li>
</ul>
<p><strong>不可重复读和幻读区别：</strong></p>
<p>不可重复读的重点是修改比如多次读取一条记录发现其中某些列的值被修改，幻读的重点在于新增或者删除比如多次读取一条记录发现记录增多或减少了。</p>
<h5 id="_2-5-5、事务隔离级别有哪些" tabindex="-1"><a class="header-anchor" href="#_2-5-5、事务隔离级别有哪些" aria-hidden="true">#</a> 2.5.5、事务隔离级别有哪些?</h5>
<p>SQL 标准定义了四个隔离级别：</p>
<ul>
<li><strong>READ-UNCOMMITTED(读取未提交)：</strong> 最低的隔离级别，允许读取尚未提交的数据变更，<strong>可能会导致脏读、幻读或不可重复读</strong>。</li>
<li><strong>READ-COMMITTED(读取已提交)：</strong> 允许读取并发事务已经提交的数据，<strong>可以阻止脏读，但是幻读或不可重复读仍有可能发生</strong>。</li>
<li><strong>REPEATABLE-READ(可重复读)：</strong> 对同一字段的多次读取结果都是一致的，除非数据是被本身事务自己所修改，<strong>可以阻止脏读和不可重复读，但幻读仍有可能发生</strong>。</li>
<li><strong>SERIALIZABLE(可串行化)：</strong> 最高的隔离级别，完全服从 ACID 的隔离级别。所有的事务依次逐个执行，这样事务之间就完全不可能产生干扰，也就是说，<strong>该级别可以防止脏读、不可重复读以及幻读</strong>。</li>
</ul>
<hr>
<table>
<thead>
<tr>
<th style="text-align:center">隔离级别</th>
<th style="text-align:center">脏读</th>
<th style="text-align:center">不可重复读</th>
<th style="text-align:center">幻读</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">READ-UNCOMMITTED</td>
<td style="text-align:center">√</td>
<td style="text-align:center">√</td>
<td style="text-align:center">√</td>
</tr>
<tr>
<td style="text-align:center">READ-COMMITTED</td>
<td style="text-align:center">×</td>
<td style="text-align:center">√</td>
<td style="text-align:center">√</td>
</tr>
<tr>
<td style="text-align:center">REPEATABLE-READ</td>
<td style="text-align:center">×</td>
<td style="text-align:center">×</td>
<td style="text-align:center">√</td>
</tr>
<tr>
<td style="text-align:center">SERIALIZABLE</td>
<td style="text-align:center">×</td>
<td style="text-align:center">×</td>
<td style="text-align:center">×</td>
</tr>
</tbody>
</table>
<h5 id="_2-5-6、mysql-的默认隔离级别是什么" tabindex="-1"><a class="header-anchor" href="#_2-5-6、mysql-的默认隔离级别是什么" aria-hidden="true">#</a> 2.5.6、MySQL 的默认隔离级别是什么?</h5>
<p>MySQL InnoDB 存储引擎的默认支持的隔离级别是 <strong>REPEATABLE-READ（可重读）</strong>。我们可以通过<code v-pre>SELECT @@tx_isolation;</code>命令来查看，MySQL 8.0 该命令改为<code v-pre>SELECT @@transaction_isolation;</code></p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code>mysql<span class="token operator">></span> <span class="token keyword">SELECT</span> @<span class="token variable">@tx_isolation</span><span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">-----------------+</span>
<span class="token operator">|</span> @<span class="token variable">@tx_isolation</span>  <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">-----------------+</span>
<span class="token operator">|</span> <span class="token keyword">REPEATABLE</span><span class="token operator">-</span><span class="token keyword">READ</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">-----------------+</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里需要注意的是：与 SQL 标准不同的地方在于 InnoDB 存储引擎在 <strong>REPEATABLE-READ（可重读）</strong> 事务隔离级别下使用的是 Next-Key Lock 锁算法，因此可以避免幻读的产生，这与其他数据库系统(如 SQL Server)是不同的。所以说 InnoDB 存储引擎的默认支持的隔离级别是 <strong>REPEATABLE-READ（可重读）</strong> 已经可以完全保证事务的隔离性要求，即达到了 SQL 标准的 <strong>SERIALIZABLE(可串行化)</strong> 隔离级别。</p>
<p>🐛 问题更正：<strong>MySQL InnoDB 的 REPEATABLE-READ（可重读）并不保证避免幻读，需要应用使用加锁读来保证。而这个加锁度使用到的机制就是 Next-Key Locks。</strong></p>
<p>因为隔离级别越低，事务请求的锁越少，所以大部分数据库系统的隔离级别都是 <strong>READ-COMMITTED(读取提交内容)</strong> ，但是你要知道的是 InnoDB 存储引擎默认使用 <strong>REPEATABLE-READ（可重读）</strong> 并不会有任何性能损失。</p>
<p>InnoDB 存储引擎在 <strong>分布式事务</strong> 的情况下一般会用到 <strong>SERIALIZABLE(可串行化)</strong> 隔离级别。</p>
<blockquote>
<p>🌈 拓展一下(以下内容摘自《MySQL 技术内幕：InnoDB 存储引擎(第 2 版)》7.7 章)：</p>
<p>InnoDB 存储引擎提供了对 XA 事务的支持，并通过 XA 事务来支持分布式事务的实现。分布式事务指的是允许多个独立的事务资源（transactional resources）参与到一个全局的事务中。事务资源通常是关系型数据库系统，但也可以是其他类型的资源。全局事务要求在其中的所有参与的事务要么都提交，要么都回滚，这对于事务原有的 ACID 要求又有了提高。另外，在使用分布式事务时，InnoDB 存储引擎的事务隔离级别必须设置为 SERIALIZABLE。</p>
</blockquote>
<h3 id="_2、一千行mysql" tabindex="-1"><a class="header-anchor" href="#_2、一千行mysql" aria-hidden="true">#</a> 2、一千行MySQL</h3>
<h4 id="_2-1、基本操作" tabindex="-1"><a class="header-anchor" href="#_2-1、基本操作" aria-hidden="true">#</a> 2.1、基本操作</h4>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">/* Windows服务 */</span>
<span class="token comment">-- 启动MySQL</span>
    net <span class="token keyword">start</span> mysql
<span class="token comment">-- 创建Windows服务</span>
    sc <span class="token keyword">create</span> mysql binPath<span class="token operator">=</span> mysqld_bin_path<span class="token punctuation">(</span>注意：等号与值之间有空格<span class="token punctuation">)</span>
<span class="token comment">/* 连接与断开服务器 */</span>
mysql <span class="token operator">-</span>h 地址 <span class="token operator">-</span>P 端口 <span class="token operator">-</span>u 用户名 <span class="token operator">-</span>p 密码
<span class="token keyword">SHOW</span> PROCESSLIST <span class="token comment">-- 显示哪些线程正在运行</span>
<span class="token keyword">SHOW</span> VARIABLES <span class="token comment">-- 显示系统变量信息</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-2、数据库操作" tabindex="-1"><a class="header-anchor" href="#_2-2、数据库操作" aria-hidden="true">#</a> 2.2、数据库操作</h4>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">/* 数据库操作 */</span> <span class="token comment">------------------</span>
<span class="token comment">-- 查看当前数据库</span>
    <span class="token keyword">SELECT</span> <span class="token keyword">DATABASE</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">-- 显示当前时间、用户名、数据库版本</span>
    <span class="token keyword">SELECT</span> <span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">user</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> version<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">-- 创建库</span>
    <span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> <span class="token punctuation">[</span><span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span><span class="token punctuation">]</span> 数据库名 数据库选项
    数据库选项：
        <span class="token keyword">CHARACTER</span> <span class="token keyword">SET</span> charset_name
        <span class="token keyword">COLLATE</span> collation_name
<span class="token comment">-- 查看已有库</span>
    <span class="token keyword">SHOW</span> <span class="token keyword">DATABASES</span> <span class="token punctuation">[</span><span class="token operator">LIKE</span> <span class="token string">'PATTERN'</span><span class="token punctuation">]</span>
<span class="token comment">-- 查看当前库信息</span>
    <span class="token keyword">SHOW</span> <span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> 数据库名
<span class="token comment">-- 修改库的选项信息</span>
    <span class="token keyword">ALTER</span> <span class="token keyword">DATABASE</span> 库名 选项信息
<span class="token comment">-- 删除库</span>
    <span class="token keyword">DROP</span> <span class="token keyword">DATABASE</span> <span class="token punctuation">[</span><span class="token keyword">IF</span> <span class="token keyword">EXISTS</span><span class="token punctuation">]</span> 数据库名
        同时删除该数据库相关的目录及其目录内容
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-3、表的操作" tabindex="-1"><a class="header-anchor" href="#_2-3、表的操作" aria-hidden="true">#</a> 2.3、表的操作</h4>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 创建表</span>
    <span class="token keyword">CREATE</span> <span class="token punctuation">[</span><span class="token keyword">TEMPORARY</span><span class="token punctuation">]</span> <span class="token keyword">TABLE</span> <span class="token punctuation">[</span><span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>库名<span class="token punctuation">.</span><span class="token punctuation">]</span>表名 <span class="token punctuation">(</span> 表的结构定义 <span class="token punctuation">)</span><span class="token punctuation">[</span> 表选项<span class="token punctuation">]</span>
        每个字段必须有数据类型
        最后一个字段后不能有逗号
        <span class="token keyword">TEMPORARY</span> 临时表，会话结束时表自动消失
        对于字段的定义：
            字段名 数据类型 <span class="token punctuation">[</span><span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token operator">|</span> <span class="token boolean">NULL</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token keyword">DEFAULT</span> default_value<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token keyword">UNIQUE</span> <span class="token punctuation">[</span><span class="token keyword">KEY</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token punctuation">[</span><span class="token keyword">PRIMARY</span><span class="token punctuation">]</span> <span class="token keyword">KEY</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token keyword">COMMENT</span> <span class="token string">'string'</span><span class="token punctuation">]</span>
<span class="token comment">-- 表选项</span>
    <span class="token comment">-- 字符集</span>
        <span class="token keyword">CHARSET</span> <span class="token operator">=</span> charset_name
        如果表没有设定，则使用数据库字符集
    <span class="token comment">-- 存储引擎</span>
        <span class="token keyword">ENGINE</span> <span class="token operator">=</span> engine_name
        表在管理数据时采用的不同的数据结构，结构不同会导致处理方式、提供的特性操作等不同
        常见的引擎：<span class="token keyword">InnoDB</span> MyISAM Memory<span class="token operator">/</span>Heap <span class="token keyword">BDB</span> <span class="token keyword">Merge</span> Example CSV MaxDB Archive
        不同的引擎在保存表的结构和数据时采用不同的方式
        MyISAM表文件含义：<span class="token punctuation">.</span>frm表定义，<span class="token punctuation">.</span>MYD表数据，<span class="token punctuation">.</span>MYI表索引
        <span class="token keyword">InnoDB</span>表文件含义：<span class="token punctuation">.</span>frm表定义，表空间数据和日志文件
        <span class="token keyword">SHOW</span> ENGINES <span class="token comment">-- 显示存储引擎的状态信息</span>
        <span class="token keyword">SHOW</span> <span class="token keyword">ENGINE</span> 引擎名 {LOGS<span class="token operator">|</span><span class="token keyword">STATUS</span>} <span class="token comment">-- 显示存储引擎的日志或状态信息</span>
    <span class="token comment">-- 自增起始数</span>
    	<span class="token keyword">AUTO_INCREMENT</span> <span class="token operator">=</span> 行数
    <span class="token comment">-- 数据文件目录</span>
        <span class="token keyword">DATA</span> DIRECTORY <span class="token operator">=</span> <span class="token string">'目录'</span>
    <span class="token comment">-- 索引文件目录</span>
        <span class="token keyword">INDEX</span> DIRECTORY <span class="token operator">=</span> <span class="token string">'目录'</span>
    <span class="token comment">-- 表注释</span>
        <span class="token keyword">COMMENT</span> <span class="token operator">=</span> <span class="token string">'string'</span>
    <span class="token comment">-- 分区选项</span>
        <span class="token keyword">PARTITION</span> <span class="token keyword">BY</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">(</span>详细见手册<span class="token punctuation">)</span>
<span class="token comment">-- 查看所有表</span>
    <span class="token keyword">SHOW</span> <span class="token keyword">TABLES</span> <span class="token punctuation">[</span><span class="token operator">LIKE</span> <span class="token string">'pattern'</span><span class="token punctuation">]</span>
    <span class="token keyword">SHOW</span> <span class="token keyword">TABLES</span> <span class="token keyword">FROM</span>  库名
<span class="token comment">-- 查看表结构</span>
    <span class="token keyword">SHOW</span> <span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> 表名 （信息更详细）
    <span class="token keyword">DESC</span> 表名 <span class="token operator">/</span> <span class="token keyword">DESCRIBE</span> 表名 <span class="token operator">/</span> <span class="token keyword">EXPLAIN</span> 表名 <span class="token operator">/</span> <span class="token keyword">SHOW</span> <span class="token keyword">COLUMNS</span> <span class="token keyword">FROM</span> 表名 <span class="token punctuation">[</span><span class="token operator">LIKE</span> <span class="token string">'PATTERN'</span><span class="token punctuation">]</span>
    <span class="token keyword">SHOW</span> <span class="token keyword">TABLE</span> <span class="token keyword">STATUS</span> <span class="token punctuation">[</span><span class="token keyword">FROM</span> db_name<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">LIKE</span> <span class="token string">'pattern'</span><span class="token punctuation">]</span>
<span class="token comment">-- 修改表</span>
    <span class="token comment">-- 修改表本身的选项</span>
        <span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> 表名 表的选项
        eg: <span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> 表名 <span class="token keyword">ENGINE</span><span class="token operator">=</span>MYISAM<span class="token punctuation">;</span>
    <span class="token comment">-- 对表进行重命名</span>
        <span class="token keyword">RENAME</span> <span class="token keyword">TABLE</span> 原表名 <span class="token keyword">TO</span> 新表名
        <span class="token keyword">RENAME</span> <span class="token keyword">TABLE</span> 原表名 <span class="token keyword">TO</span> 库名<span class="token punctuation">.</span>表名 （可将表移动到另一个数据库）
        <span class="token comment">-- RENAME可以交换两个表名</span>
    <span class="token comment">-- 修改表的字段机构（13.1.2. ALTER TABLE语法）</span>
        <span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> 表名 操作名
        <span class="token comment">-- 操作名</span>
            <span class="token keyword">ADD</span><span class="token punctuation">[</span> <span class="token keyword">COLUMN</span><span class="token punctuation">]</span> 字段定义       <span class="token comment">-- 增加字段</span>
                <span class="token keyword">AFTER</span> 字段名          <span class="token comment">-- 表示增加在该字段名后面</span>
                <span class="token keyword">FIRST</span>               <span class="token comment">-- 表示增加在第一个</span>
            <span class="token keyword">ADD</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span><span class="token punctuation">(</span>字段名<span class="token punctuation">)</span>   <span class="token comment">-- 创建主键</span>
            <span class="token keyword">ADD</span> <span class="token keyword">UNIQUE</span> <span class="token punctuation">[</span>索引名<span class="token punctuation">]</span> <span class="token punctuation">(</span>字段名<span class="token punctuation">)</span><span class="token comment">-- 创建唯一索引</span>
            <span class="token keyword">ADD</span> <span class="token keyword">INDEX</span> <span class="token punctuation">[</span>索引名<span class="token punctuation">]</span> <span class="token punctuation">(</span>字段名<span class="token punctuation">)</span> <span class="token comment">-- 创建普通索引</span>
            <span class="token keyword">DROP</span><span class="token punctuation">[</span> <span class="token keyword">COLUMN</span><span class="token punctuation">]</span> 字段名      <span class="token comment">-- 删除字段</span>
            <span class="token keyword">MODIFY</span><span class="token punctuation">[</span> <span class="token keyword">COLUMN</span><span class="token punctuation">]</span> 字段名 字段属性     <span class="token comment">-- 支持对字段属性进行修改，不能修改字段名(所有原有属性也需写上)</span>
            CHANGE<span class="token punctuation">[</span> <span class="token keyword">COLUMN</span><span class="token punctuation">]</span> 原字段名 新字段名 字段属性      <span class="token comment">-- 支持对字段名修改</span>
            <span class="token keyword">DROP</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span>    <span class="token comment">-- 删除主键(删除主键前需删除其AUTO_INCREMENT属性)</span>
            <span class="token keyword">DROP</span> <span class="token keyword">INDEX</span> 索引名 <span class="token comment">-- 删除索引</span>
            <span class="token keyword">DROP</span> <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> 外键    <span class="token comment">-- 删除外键</span>
<span class="token comment">-- 删除表</span>
    <span class="token keyword">DROP</span> <span class="token keyword">TABLE</span><span class="token punctuation">[</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span><span class="token punctuation">]</span> 表名 <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token comment">-- 清空表数据</span>
    <span class="token keyword">TRUNCATE</span> <span class="token punctuation">[</span><span class="token keyword">TABLE</span><span class="token punctuation">]</span> 表名
<span class="token comment">-- 复制表结构</span>
    <span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> 表名 <span class="token operator">LIKE</span> 要复制的表名
<span class="token comment">-- 复制表结构和数据</span>
    <span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> 表名 <span class="token punctuation">[</span><span class="token keyword">AS</span><span class="token punctuation">]</span> <span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> 要复制的表名
<span class="token comment">-- 检查表是否有错误</span>
    <span class="token keyword">CHECK</span> <span class="token keyword">TABLE</span> tbl_name <span class="token punctuation">[</span><span class="token punctuation">,</span> tbl_name<span class="token punctuation">]</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">[</span><span class="token keyword">option</span><span class="token punctuation">]</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token comment">-- 优化表</span>
    <span class="token keyword">OPTIMIZE</span> <span class="token punctuation">[</span><span class="token keyword">LOCAL</span> <span class="token operator">|</span> NO_WRITE_TO_BINLOG<span class="token punctuation">]</span> <span class="token keyword">TABLE</span> tbl_name <span class="token punctuation">[</span><span class="token punctuation">,</span> tbl_name<span class="token punctuation">]</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token comment">-- 修复表</span>
    REPAIR <span class="token punctuation">[</span><span class="token keyword">LOCAL</span> <span class="token operator">|</span> NO_WRITE_TO_BINLOG<span class="token punctuation">]</span> <span class="token keyword">TABLE</span> tbl_name <span class="token punctuation">[</span><span class="token punctuation">,</span> tbl_name<span class="token punctuation">]</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">[</span><span class="token keyword">QUICK</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token keyword">EXTENDED</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>USE_FRM<span class="token punctuation">]</span>
<span class="token comment">-- 分析表</span>
    <span class="token keyword">ANALYZE</span> <span class="token punctuation">[</span><span class="token keyword">LOCAL</span> <span class="token operator">|</span> NO_WRITE_TO_BINLOG<span class="token punctuation">]</span> <span class="token keyword">TABLE</span> tbl_name <span class="token punctuation">[</span><span class="token punctuation">,</span> tbl_name<span class="token punctuation">]</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-4、数据操作" tabindex="-1"><a class="header-anchor" href="#_2-4、数据操作" aria-hidden="true">#</a> 2.4、数据操作</h4>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">/* 数据操作 */</span> <span class="token comment">------------------</span>
<span class="token comment">-- 增</span>
    <span class="token keyword">INSERT</span> <span class="token punctuation">[</span><span class="token keyword">INTO</span><span class="token punctuation">]</span> 表名 <span class="token punctuation">[</span><span class="token punctuation">(</span>字段列表<span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span>值列表<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>值列表<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">]</span>
        <span class="token comment">-- 如果要插入的值列表包含所有字段并且顺序一致，则可以省略字段列表。</span>
        <span class="token comment">-- 可同时插入多条数据记录！</span>
        <span class="token keyword">REPLACE</span> 与 <span class="token keyword">INSERT</span> 完全一样，可互换。
    <span class="token keyword">INSERT</span> <span class="token punctuation">[</span><span class="token keyword">INTO</span><span class="token punctuation">]</span> 表名 <span class="token keyword">SET</span> 字段名<span class="token operator">=</span>值<span class="token punctuation">[</span><span class="token punctuation">,</span> 字段名<span class="token operator">=</span>值<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">]</span>
<span class="token comment">-- 查</span>
    <span class="token keyword">SELECT</span> 字段列表 <span class="token keyword">FROM</span> 表名<span class="token punctuation">[</span> 其他子句<span class="token punctuation">]</span>
        <span class="token comment">-- 可来自多个表的多个字段</span>
        <span class="token comment">-- 其他子句可以不使用</span>
        <span class="token comment">-- 字段列表可以用*代替，表示所有字段</span>
<span class="token comment">-- 删</span>
    <span class="token keyword">DELETE</span> <span class="token keyword">FROM</span> 表名<span class="token punctuation">[</span> 删除条件子句<span class="token punctuation">]</span>
        没有条件子句，则会删除全部
<span class="token comment">-- 改</span>
    <span class="token keyword">UPDATE</span> 表名 <span class="token keyword">SET</span> 字段名<span class="token operator">=</span>新值<span class="token punctuation">[</span><span class="token punctuation">,</span> 字段名<span class="token operator">=</span>新值<span class="token punctuation">]</span> <span class="token punctuation">[</span>更新条件<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-5、字符集编码" tabindex="-1"><a class="header-anchor" href="#_2-5、字符集编码" aria-hidden="true">#</a> 2.5、字符集编码</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>/* 字符集编码 */ ------------------
-- MySQL、数据库、表、字段均可设置编码
-- 数据编码与客户端编码不需一致
SHOW VARIABLES LIKE 'character_set_%'   -- 查看所有字符集编码项
    character_set_client        客户端向服务器发送数据时使用的编码
    character_set_results       服务器端将结果返回给客户端所使用的编码
    character_set_connection    连接层编码
SET 变量名 = 变量值
    SET character_set_client = gbk;
    SET character_set_results = gbk;
    SET character_set_connection = gbk;
SET NAMES GBK;  -- 相当于完成以上三个设置
-- 校对集
    校对集用以排序
    SHOW CHARACTER SET [LIKE 'pattern']/SHOW CHARSET [LIKE 'pattern']   查看所有字符集
    SHOW COLLATION [LIKE 'pattern']     查看所有校对集
    CHARSET 字符集编码     设置字符集编码
    COLLATE 校对集编码     设置校对集编码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-6、数据类型-列类型" tabindex="-1"><a class="header-anchor" href="#_2-6、数据类型-列类型" aria-hidden="true">#</a> 2.6、数据类型(列类型)</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>/* 数据类型（列类型） */ ------------------
1. 数值类型
-- a. 整型 ----------
    类型         字节     范围（有符号位）
    tinyint     1字节    -128 ~ 127      无符号位：0 ~ 255
    smallint    2字节    -32768 ~ 32767
    mediumint   3字节    -8388608 ~ 8388607
    int         4字节
    bigint      8字节
    int(M)  M表示总位数
    - 默认存在符号位，unsigned 属性修改
    - 显示宽度，如果某个数不够定义字段时设置的位数，则前面以0补填，zerofill 属性修改
        例：int(5)   插入一个数'123'，补填后为'00123'
    - 在满足要求的情况下，越小越好。
    - 1表示bool值真，0表示bool值假。MySQL没有布尔类型，通过整型0和1表示。常用tinyint(1)表示布尔型。
-- b. 浮点型 ----------
    类型             字节     范围
    float(单精度)     4字节
    double(双精度)    8字节
    浮点型既支持符号位 unsigned 属性，也支持显示宽度 zerofill 属性。
        不同于整型，前后均会补填0.
    定义浮点型时，需指定总位数和小数位数。
        float(M, D)     double(M, D)
        M表示总位数，D表示小数位数。
        M和D的大小会决定浮点数的范围。不同于整型的固定范围。
        M既表示总位数（不包括小数点和正负号），也表示显示宽度（所有显示符号均包括）。
        支持科学计数法表示。
        浮点数表示近似值。
-- c. 定点数 ----------
    decimal -- 可变长度
    decimal(M, D)   M也表示总位数，D表示小数位数。
    保存一个精确的数值，不会发生数据的改变，不同于浮点数的四舍五入。
    将浮点数转换为字符串来保存，每9位数字保存为4个字节。
2. 字符串类型
-- a. char, varchar ----------
    char    定长字符串，速度快，但浪费空间
    varchar 变长字符串，速度慢，但节省空间
    M表示能存储的最大长度，此长度是字符数，非字节数。
    不同的编码，所占用的空间不同。
    char,最多255个字符，与编码无关。
    varchar,最多65535字符，与编码有关。
    一条有效记录最大不能超过65535个字节。
        utf8 最大为21844个字符，gbk 最大为32766个字符，latin1 最大为65532个字符
    varchar 是变长的，需要利用存储空间保存 varchar 的长度，如果数据小于255个字节，则采用一个字节来保存长度，反之需要两个字节来保存。
    varchar 的最大有效长度由最大行大小和使用的字符集确定。
    最大有效长度是65532字节，因为在varchar存字符串时，第一个字节是空的，不存在任何数据，然后还需两个字节来存放字符串的长度，所以有效长度是65535-1-2=65532字节。
    例：若一个表定义为 CREATE TABLE tb(c1 int, c2 char(30), c3 varchar(N)) charset=utf8; 问N的最大值是多少？ 答：(65535-1-2-4-30*3)/3
-- b. blob, text ----------
    blob 二进制字符串（字节字符串）
        tinyblob, blob, mediumblob, longblob
    text 非二进制字符串（字符字符串）
        tinytext, text, mediumtext, longtext
    text 在定义时，不需要定义长度，也不会计算总长度。
    text 类型在定义时，不可给default值
-- c. binary, varbinary ----------
    类似于char和varchar，用于保存二进制字符串，也就是保存字节字符串而非字符字符串。
    char, varchar, text 对应 binary, varbinary, blob.
3. 日期时间类型
    一般用整型保存时间戳，因为PHP可以很方便的将时间戳进行格式化。
    datetime    8字节    日期及时间     1000-01-01 00:00:00 到 9999-12-31 23:59:59
    date        3字节    日期         1000-01-01 到 9999-12-31
    timestamp   4字节    时间戳        19700101000000 到 2038-01-19 03:14:07
    time        3字节    时间         -838:59:59 到 838:59:59
    year        1字节    年份         1901 - 2155
datetime    YYYY-MM-DD hh:mm:ss
timestamp   YY-MM-DD hh:mm:ss
            YYYYMMDDhhmmss
            YYMMDDhhmmss
            YYYYMMDDhhmmss
            YYMMDDhhmmss
date        YYYY-MM-DD
            YY-MM-DD
            YYYYMMDD
            YYMMDD
            YYYYMMDD
            YYMMDD
time        hh:mm:ss
            hhmmss
            hhmmss
year        YYYY
            YY
            YYYY
            YY
4. 枚举和集合
-- 枚举(enum) ----------
enum(val1, val2, val3...)
    在已知的值中进行单选。最大数量为65535.
    枚举值在保存时，以2个字节的整型(smallint)保存。每个枚举值，按保存的位置顺序，从1开始逐一递增。
    表现为字符串类型，存储却是整型。
    NULL值的索引是NULL。
    空字符串错误值的索引值是0。
-- 集合（set） ----------
set(val1, val2, val3...)
    create table tab ( gender set('男', '女', '无') );
    insert into tab values ('男, 女');
    最多可以有64个不同的成员。以bigint存储，共8个字节。采取位运算的形式。
    当创建表时，SET成员值的尾部空格将自动被删除。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-7、列属性-列约束" tabindex="-1"><a class="header-anchor" href="#_2-7、列属性-列约束" aria-hidden="true">#</a> 2.7、列属性(列约束)</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>/* 列属性（列约束） */ ------------------
1. PRIMARY 主键
    - 能唯一标识记录的字段，可以作为主键。
    - 一个表只能有一个主键。
    - 主键具有唯一性。
    - 声明字段时，用 primary key 标识。
        也可以在字段列表之后声明
            例：create table tab ( id int, stu varchar(10), primary key (id));
    - 主键字段的值不能为null。
    - 主键可以由多个字段共同组成。此时需要在字段列表后声明的方法。
        例：create table tab ( id int, stu varchar(10), age int, primary key (stu, age));
2. UNIQUE 唯一索引（唯一约束）
    使得某字段的值也不能重复。
3. NULL 约束
    null不是数据类型，是列的一个属性。
    表示当前列是否可以为null，表示什么都没有。
    null, 允许为空。默认。
    not null, 不允许为空。
    insert into tab values (null, 'val');
        -- 此时表示将第一个字段的值设为null, 取决于该字段是否允许为null
4. DEFAULT 默认值属性
    当前字段的默认值。
    insert into tab values (default, 'val');    -- 此时表示强制使用默认值。
    create table tab ( add_time timestamp default current_timestamp );
        -- 表示将当前时间的时间戳设为默认值。
        current_date, current_time
5. AUTO_INCREMENT 自动增长约束
    自动增长必须为索引（主键或unique）
    只能存在一个字段为自动增长。
    默认为1开始自动增长。可以通过表属性 auto_increment = x进行设置，或 alter table tbl auto_increment = x;
6. COMMENT 注释
    例：create table tab ( id int ) comment '注释内容';
7. FOREIGN KEY 外键约束
    用于限制主表与从表数据完整性。
    alter table t1 add constraint `t1_t2_fk` foreign key (t1_id) references t2(id);
        -- 将表t1的t1_id外键关联到表t2的id字段。
        -- 每个外键都有一个名字，可以通过 constraint 指定
    存在外键的表，称之为从表（子表），外键指向的表，称之为主表（父表）。
    作用：保持数据一致性，完整性，主要目的是控制存储在外键表（从表）中的数据。
    MySQL中，可以对InnoDB引擎使用外键约束：
    语法：
    foreign key (外键字段） references 主表名 (关联字段) [主表记录删除时的动作] [主表记录更新时的动作]
    此时需要检测一个从表的外键需要约束为主表的已存在的值。外键在没有关联的情况下，可以设置为null.前提是该外键列，没有not null。
    可以不指定主表记录更改或更新时的动作，那么此时主表的操作被拒绝。
    如果指定了 on update 或 on delete：在删除或更新时，有如下几个操作可以选择：
    1. cascade，级联操作。主表数据被更新（主键值更新），从表也被更新（外键值更新）。主表记录被删除，从表相关记录也被删除。
    2. set null，设置为null。主表数据被更新（主键值更新），从表的外键被设置为null。主表记录被删除，从表相关记录外键被设置成null。但注意，要求该外键列，没有not null属性约束。
    3. restrict，拒绝父表删除和更新。
    注意，外键只被InnoDB存储引擎所支持。其他引擎是不支持的。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-8、建表规范" tabindex="-1"><a class="header-anchor" href="#_2-8、建表规范" aria-hidden="true">#</a> 2.8、建表规范</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>/* 建表规范 */ ------------------
    -- Normal Format, NF
        - 每个表保存一个实体信息
        - 每个具有一个ID字段作为主键
        - ID主键 + 原子表
    -- 1NF, 第一范式
        字段不能再分，就满足第一范式。
    -- 2NF, 第二范式
        满足第一范式的前提下，不能出现部分依赖。
        消除复合主键就可以避免部分依赖。增加单列关键字。
    -- 3NF, 第三范式
        满足第二范式的前提下，不能出现传递依赖。
        某个字段依赖于主键，而有其他字段依赖于该字段。这就是传递依赖。
        将一个实体信息的数据放在一个表内实现。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-9、select" tabindex="-1"><a class="header-anchor" href="#_2-9、select" aria-hidden="true">#</a> 2.9、SELECT</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>/* SELECT */ ------------------
SELECT [ALL|DISTINCT] select_expr FROM -> WHERE -> GROUP BY [合计函数] -> HAVING -> ORDER BY -> LIMIT
a. select_expr
    -- 可以用 * 表示所有字段。
        select * from tb;
    -- 可以使用表达式（计算公式、函数调用、字段也是个表达式）
        select stu, 29+25, now() from tb;
    -- 可以为每个列使用别名。适用于简化列标识，避免多个列标识符重复。
        - 使用 as 关键字，也可省略 as.
        select stu+10 as add10 from tb;
b. FROM 子句
    用于标识查询来源。
    -- 可以为表起别名。使用as关键字。
        SELECT * FROM tb1 AS tt, tb2 AS bb;
    -- from子句后，可以同时出现多个表。
        -- 多个表会横向叠加到一起，而数据会形成一个笛卡尔积。
        SELECT * FROM tb1, tb2;
    -- 向优化符提示如何选择索引
        USE INDEX、IGNORE INDEX、FORCE INDEX
        SELECT * FROM table1 USE INDEX (key1,key2) WHERE key1=1 AND key2=2 AND key3=3;
        SELECT * FROM table1 IGNORE INDEX (key3) WHERE key1=1 AND key2=2 AND key3=3;
c. WHERE 子句
    -- 从from获得的数据源中进行筛选。
    -- 整型1表示真，0表示假。
    -- 表达式由运算符和运算数组成。
        -- 运算数：变量（字段）、值、函数返回值
        -- 运算符：
            =, &lt;=>, &lt;>, !=, &lt;=, &lt;, >=, >, !, &amp;&amp;, ||,
            in (not) null, (not) like, (not) in, (not) between and, is (not), and, or, not, xor
            is/is not 加上ture/false/unknown，检验某个值的真假
            &lt;=>与&lt;>功能相同，&lt;=>可用于null比较
d. GROUP BY 子句, 分组子句
    GROUP BY 字段/别名 [排序方式]
    分组后会进行排序。升序：ASC，降序：DESC
    以下[合计函数]需配合 GROUP BY 使用：
    count 返回不同的非NULL值数目  count(*)、count(字段)
    sum 求和
    max 求最大值
    min 求最小值
    avg 求平均值
    group_concat 返回带有来自一个组的连接的非NULL值的字符串结果。组内字符串连接。
e. HAVING 子句，条件子句
    与 where 功能、用法相同，执行时机不同。
    where 在开始时执行检测数据，对原数据进行过滤。
    having 对筛选出的结果再次进行过滤。
    having 字段必须是查询出来的，where 字段必须是数据表存在的。
    where 不可以使用字段的别名，having 可以。因为执行WHERE代码时，可能尚未确定列值。
    where 不可以使用合计函数。一般需用合计函数才会用 having
    SQL标准要求HAVING必须引用GROUP BY子句中的列或用于合计函数中的列。
f. ORDER BY 子句，排序子句
    order by 排序字段/别名 排序方式 [,排序字段/别名 排序方式]...
    升序：ASC，降序：DESC
    支持多个字段的排序。
g. LIMIT 子句，限制结果数量子句
    仅对处理好的结果进行数量限制。将处理好的结果的看作是一个集合，按照记录出现的顺序，索引从0开始。
    limit 起始位置, 获取条数
    省略第一个参数，表示从索引0开始。limit 获取条数
h. DISTINCT, ALL 选项
    distinct 去除重复记录
    默认为 all, 全部记录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-10、union" tabindex="-1"><a class="header-anchor" href="#_2-10、union" aria-hidden="true">#</a> 2.10、UNION</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>/* UNION */ ------------------
    将多个select查询的结果组合成一个结果集合。
    SELECT ... UNION [ALL|DISTINCT] SELECT ...
    默认 DISTINCT 方式，即所有返回的行都是唯一的
    建议，对每个SELECT查询加上小括号包裹。
    ORDER BY 排序时，需加上 LIMIT 进行结合。
    需要各select查询的字段数量一样。
    每个select查询的字段列表(数量、类型)应一致，因为结果中的字段名以第一条select语句为准。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-11、子查询" tabindex="-1"><a class="header-anchor" href="#_2-11、子查询" aria-hidden="true">#</a> 2.11、子查询</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>/* 子查询 */ ------------------
    - 子查询需用括号包裹。
-- from型
    from后要求是一个表，必须给子查询结果取个别名。
    - 简化每个查询内的条件。
    - from型需将结果生成一个临时表格，可用以原表的锁定的释放。
    - 子查询返回一个表，表型子查询。
    select * from (select * from tb where id>0) as subfrom where id>1;
-- where型
    - 子查询返回一个值，标量子查询。
    - 不需要给子查询取别名。
    - where子查询内的表，不能直接用以更新。
    select * from tb where money = (select max(money) from tb);
    -- 列子查询
        如果子查询结果返回的是一列。
        使用 in 或 not in 完成查询
        exists 和 not exists 条件
            如果子查询返回数据，则返回1或0。常用于判断条件。
            select column1 from t1 where exists (select * from t2);
    -- 行子查询
        查询条件是一个行。
        select * from t1 where (id, gender) in (select id, gender from t2);
        行构造符：(col1, col2, ...) 或 ROW(col1, col2, ...)
        行构造符通常用于与对能返回两个或两个以上列的子查询进行比较。
    -- 特殊运算符
    != all()    相当于 not in
    = some()    相当于 in。any 是 some 的别名
    != some()   不等同于 not in，不等于其中某一个。
    all, some 可以配合其他运算符一起使用。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-12、连接查询-join" tabindex="-1"><a class="header-anchor" href="#_2-12、连接查询-join" aria-hidden="true">#</a> 2.12、连接查询(join)</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>/* 连接查询(join) */ ------------------
    将多个表的字段进行连接，可以指定连接条件。
-- 内连接(inner join)
    - 默认就是内连接，可省略inner。
    - 只有数据存在时才能发送连接。即连接结果不能出现空行。
    on 表示连接条件。其条件表达式与where类似。也可以省略条件（表示条件永远为真）
    也可用where表示连接条件。
    还有 using, 但需字段名相同。 using(字段名)
    -- 交叉连接 cross join
        即，没有条件的内连接。
        select * from tb1 cross join tb2;
-- 外连接(outer join)
    - 如果数据不存在，也会出现在连接结果中。
    -- 左外连接 left join
        如果数据不存在，左表记录会出现，而右表为null填充
    -- 右外连接 right join
        如果数据不存在，右表记录会出现，而左表为null填充
-- 自然连接(natural join)
    自动判断连接条件完成连接。
    相当于省略了using，会自动查找相同字段名。
    natural join
    natural left join
    natural right join
select info.id, info.name, info.stu_num, extra_info.hobby, extra_info.sex from info, extra_info where info.stu_num = extra_info.stu_id;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-13、truncate" tabindex="-1"><a class="header-anchor" href="#_2-13、truncate" aria-hidden="true">#</a> 2.13、TRUNCATE</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>/* TRUNCATE */ ------------------
TRUNCATE [TABLE] tbl_name
清空数据
删除重建表
区别：
1，truncate 是删除表再创建，delete 是逐条删除
2，truncate 重置auto_increment的值。而delete不会
3，truncate 不知道删除了几条，而delete知道。
4，当被用于带分区的表时，truncate 会保留分区
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-14、备份与还原" tabindex="-1"><a class="header-anchor" href="#_2-14、备份与还原" aria-hidden="true">#</a> 2.14、备份与还原</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>/* 备份与还原 */ ------------------
备份，将数据的结构与表内数据保存起来。
利用 mysqldump 指令完成。
-- 导出
mysqldump [options] db_name [tables]
mysqldump [options] ---database DB1 [DB2 DB3...]
mysqldump [options] --all--database
1. 导出一张表
　　mysqldump -u用户名 -p密码 库名 表名 > 文件名(D:/a.sql)
2. 导出多张表
　　mysqldump -u用户名 -p密码 库名 表1 表2 表3 > 文件名(D:/a.sql)
3. 导出所有表
　　mysqldump -u用户名 -p密码 库名 > 文件名(D:/a.sql)
4. 导出一个库
　　mysqldump -u用户名 -p密码 --lock-all-tables --database 库名 > 文件名(D:/a.sql)
可以-w携带WHERE条件
-- 导入
1. 在登录mysql的情况下：
　　source  备份文件
2. 在不登录的情况下
　　mysql -u用户名 -p密码 库名 &lt; 备份文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-15、视图" tabindex="-1"><a class="header-anchor" href="#_2-15、视图" aria-hidden="true">#</a> 2.15、视图</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>什么是视图：
    视图是一个虚拟表，其内容由查询定义。同真实的表一样，视图包含一系列带有名称的列和行数据。但是，视图并不在数据库中以存储的数据值集形式存在。行和列数据来自由定义视图的查询所引用的表，并且在引用视图时动态生成。
    视图具有表结构文件，但不存在数据文件。
    对其中所引用的基础表来说，视图的作用类似于筛选。定义视图的筛选可以来自当前或其它数据库的一个或多个表，或者其它视图。通过视图进行查询没有任何限制，通过它们进行数据修改时的限制也很少。
    视图是存储在数据库中的查询的sql语句，它主要出于两种原因：安全原因，视图可以隐藏一些数据，如：社会保险基金表，可以用视图只显示姓名，地址，而不显示社会保险号和工资数等，另一原因是可使复杂的查询易于理解和使用。
-- 创建视图
CREATE [OR REPLACE] [ALGORITHM = {UNDEFINED | MERGE | TEMPTABLE}] VIEW view_name [(column_list)] AS select_statement
    - 视图名必须唯一，同时不能与表重名。
    - 视图可以使用select语句查询到的列名，也可以自己指定相应的列名。
    - 可以指定视图执行的算法，通过ALGORITHM指定。
    - column_list如果存在，则数目必须等于SELECT语句检索的列数
-- 查看结构
    SHOW CREATE VIEW view_name
-- 删除视图
    - 删除视图后，数据依然存在。
    - 可同时删除多个视图。
    DROP VIEW [IF EXISTS] view_name ...
-- 修改视图结构
    - 一般不修改视图，因为不是所有的更新视图都会映射到表上。
    ALTER VIEW view_name [(column_list)] AS select_statement
-- 视图作用
    1. 简化业务逻辑
    2. 对客户端隐藏真实的表结构
-- 视图算法(ALGORITHM)
    MERGE       合并
        将视图的查询语句，与外部查询需要先合并再执行！
    TEMPTABLE   临时表
        将视图执行完毕后，形成临时表，再做外层查询！
    UNDEFINED   未定义(默认)，指的是MySQL自主去选择相应的算法。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-16、事务-transaction" tabindex="-1"><a class="header-anchor" href="#_2-16、事务-transaction" aria-hidden="true">#</a> 2.16、事务(transaction)</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>事务是指逻辑上的一组操作，组成这组操作的各个单元，要不全成功要不全失败。
    - 支持连续SQL的集体成功或集体撤销。
    - 事务是数据库在数据完整性方面的一个功能。
    - 需要利用 InnoDB 或 BDB 存储引擎，对自动提交的特性支持完成。
    - InnoDB被称为事务安全型引擎。
-- 事务开启
    START TRANSACTION; 或者 BEGIN;
    开启事务后，所有被执行的SQL语句均被认作当前事务内的SQL语句。
-- 事务提交
    COMMIT;
-- 事务回滚
    ROLLBACK;
    如果部分操作发生问题，映射到事务开启前。
-- 事务的特性
    1. 原子性（Atomicity）
        事务是一个不可分割的工作单位，事务中的操作要么都发生，要么都不发生。
    2. 一致性（Consistency）
        事务前后数据的完整性必须保持一致。
        - 事务开始和结束时，外部数据一致
        - 在整个事务过程中，操作是连续的
    3. 隔离性（Isolation）
        多个用户并发访问数据库时，一个用户的事务不能被其它用户的事务所干扰，多个并发事务之间的数据要相互隔离。
    4. 持久性（Durability）
        一个事务一旦被提交，它对数据库中的数据改变就是永久性的。
-- 事务的实现
    1. 要求是事务支持的表类型
    2. 执行一组相关的操作前开启事务
    3. 整组操作完成后，都成功，则提交；如果存在失败，选择回滚，则会回到事务开始的备份点。
-- 事务的原理
    利用InnoDB的自动提交(autocommit)特性完成。
    普通的MySQL执行语句后，当前的数据提交操作均可被其他客户端可见。
    而事务是暂时关闭“自动提交”机制，需要commit提交持久化数据操作。
-- 注意
    1. 数据定义语言（DDL）语句不能被回滚，比如创建或取消数据库的语句，和创建、取消或更改表或存储的子程序的语句。
    2. 事务不能被嵌套
-- 保存点
    SAVEPOINT 保存点名称 -- 设置一个事务保存点
    ROLLBACK TO SAVEPOINT 保存点名称 -- 回滚到保存点
    RELEASE SAVEPOINT 保存点名称 -- 删除保存点
-- InnoDB自动提交特性设置
    SET autocommit = 0|1;   0表示关闭自动提交，1表示开启自动提交。
    - 如果关闭了，那普通操作的结果对其他客户端也不可见，需要commit提交后才能持久化数据操作。
    - 也可以关闭自动提交来开启事务。但与START TRANSACTION不同的是，
        SET autocommit是永久改变服务器的设置，直到下次再次修改该设置。(针对当前连接)
        而START TRANSACTION记录开启前的状态，而一旦事务提交或回滚后就需要再次开启事务。(针对当前事务)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-17、锁表" tabindex="-1"><a class="header-anchor" href="#_2-17、锁表" aria-hidden="true">#</a> 2.17、锁表</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>/* 锁表 */
表锁定只用于防止其它客户端进行不正当地读取和写入
MyISAM 支持表锁，InnoDB 支持行锁
-- 锁定
    LOCK TABLES tbl_name [AS alias]
-- 解锁
    UNLOCK TABLES
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-18、触发器" tabindex="-1"><a class="header-anchor" href="#_2-18、触发器" aria-hidden="true">#</a> 2.18、触发器</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>/* 触发器 */ ------------------
    触发程序是与表有关的命名数据库对象，当该表出现特定事件时，将激活该对象
    监听：记录的增加、修改、删除。
-- 创建触发器
CREATE TRIGGER trigger_name trigger_time trigger_event ON tbl_name FOR EACH ROW trigger_stmt
    参数：
    trigger_time是触发程序的动作时间。它可以是 before 或 after，以指明触发程序是在激活它的语句之前或之后触发。
    trigger_event指明了激活触发程序的语句的类型
        INSERT：将新行插入表时激活触发程序
        UPDATE：更改某一行时激活触发程序
        DELETE：从表中删除某一行时激活触发程序
    tbl_name：监听的表，必须是永久性的表，不能将触发程序与TEMPORARY表或视图关联起来。
    trigger_stmt：当触发程序激活时执行的语句。执行多个语句，可使用BEGIN...END复合语句结构
-- 删除
DROP TRIGGER [schema_name.]trigger_name
可以使用old和new代替旧的和新的数据
    更新操作，更新前是old，更新后是new.
    删除操作，只有old.
    增加操作，只有new.
-- 注意
    1. 对于具有相同触发程序动作时间和事件的给定表，不能有两个触发程序。
-- 字符连接函数
concat(str1,str2,...])
concat_ws(separator,str1,str2,...)
-- 分支语句
if 条件 then
    执行语句
elseif 条件 then
    执行语句
else
    执行语句
end if;
-- 修改最外层语句结束符
delimiter 自定义结束符号
    SQL语句
自定义结束符号
delimiter ;     -- 修改回原来的分号
-- 语句块包裹
begin
    语句块
end
-- 特殊的执行
1. 只要添加记录，就会触发程序。
2. Insert into on duplicate key update 语法会触发：
    如果没有重复记录，会触发 before insert, after insert;
    如果有重复记录并更新，会触发 before insert, before update, after update;
    如果有重复记录但是没有发生更新，则触发 before insert, before update
3. Replace 语法 如果有记录，则执行 before insert, before delete, after delete, after insert
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-19、sql编程" tabindex="-1"><a class="header-anchor" href="#_2-19、sql编程" aria-hidden="true">#</a> 2.19、SQL编程</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>/* SQL编程 */ ------------------
--// 局部变量 ----------
-- 变量声明
    declare var_name[,...] type [default value]
    这个语句被用来声明局部变量。要给变量提供一个默认值，请包含一个default子句。值可以被指定为一个表达式，不需要为一个常数。如果没有default子句，初始值为null。
-- 赋值
    使用 set 和 select into 语句为变量赋值。
    - 注意：在函数内是可以使用全局变量（用户自定义的变量）
--// 全局变量 ----------
-- 定义、赋值
set 语句可以定义并为变量赋值。
set @var = value;
也可以使用select into语句为变量初始化并赋值。这样要求select语句只能返回一行，但是可以是多个字段，就意味着同时为多个变量进行赋值，变量的数量需要与查询的列数一致。
还可以把赋值语句看作一个表达式，通过select执行完成。此时为了避免=被当作关系运算符看待，使用:=代替。（set语句可以使用= 和 :=）。
select @var:=20;
select @v1:=id, @v2=name from t1 limit 1;
select * from tbl_name where @var:=30;
select into 可以将表中查询获得的数据赋给变量。
    -| select max(height) into @max_height from tb;
-- 自定义变量名
为了避免select语句中，用户自定义的变量与系统标识符（通常是字段名）冲突，用户自定义变量在变量名前使用@作为开始符号。
@var=10;
    - 变量被定义后，在整个会话周期都有效（登录到退出）
--// 控制结构 ----------
-- if语句
if search_condition then
    statement_list   
[elseif search_condition then
    statement_list]
...
[else
    statement_list]
end if;
-- case语句
CASE value WHEN [compare-value] THEN result
[WHEN [compare-value] THEN result ...]
[ELSE result]
END
-- while循环
[begin_label:] while search_condition do
    statement_list
end while [end_label];
- 如果需要在循环内提前终止 while循环，则需要使用标签；标签需要成对出现。
    -- 退出循环
        退出整个循环 leave
        退出当前循环 iterate
        通过退出的标签决定退出哪个循环
--// 内置函数 ----------
-- 数值函数
abs(x)          -- 绝对值 abs(-10.9) = 10
format(x, d)    -- 格式化千分位数值 format(1234567.456, 2) = 1,234,567.46
ceil(x)         -- 向上取整 ceil(10.1) = 11
floor(x)        -- 向下取整 floor (10.1) = 10
round(x)        -- 四舍五入去整
mod(m, n)       -- m%n m mod n 求余 10%3=1
pi()            -- 获得圆周率
pow(m, n)       -- m^n
sqrt(x)         -- 算术平方根
rand()          -- 随机数
truncate(x, d)  -- 截取d位小数
-- 时间日期函数
now(), current_timestamp();     -- 当前日期时间
current_date();                 -- 当前日期
current_time();                 -- 当前时间
date('yyyy-mm-dd hh:ii:ss');    -- 获取日期部分
time('yyyy-mm-dd hh:ii:ss');    -- 获取时间部分
date_format('yyyy-mm-dd hh:ii:ss', '%d %y %a %d %m %b %j'); -- 格式化时间
unix_timestamp();               -- 获得unix时间戳
from_unixtime();                -- 从时间戳获得时间
-- 字符串函数
length(string)          -- string长度，字节
char_length(string)     -- string的字符个数
substring(str, position [,length])      -- 从str的position开始,取length个字符
replace(str ,search_str ,replace_str)   -- 在str中用replace_str替换search_str
instr(string ,substring)    -- 返回substring首次在string中出现的位置
concat(string [,...])   -- 连接字串
charset(str)            -- 返回字串字符集
lcase(string)           -- 转换成小写
left(string, length)    -- 从string2中的左边起取length个字符
load_file(file_name)    -- 从文件读取内容
locate(substring, string [,start_position]) -- 同instr,但可指定开始位置
lpad(string, length, pad)   -- 重复用pad加在string开头,直到字串长度为length
ltrim(string)           -- 去除前端空格
repeat(string, count)   -- 重复count次
rpad(string, length, pad)   --在str后用pad补充,直到长度为length
rtrim(string)           -- 去除后端空格
strcmp(string1 ,string2)    -- 逐字符比较两字串大小
-- 流程函数
case when [condition] then result [when [condition] then result ...] [else result] end   多分支
if(expr1,expr2,expr3)  双分支。
-- 聚合函数
count()
sum();
max();
min();
avg();
group_concat()
-- 其他常用函数
md5();
default();
--// 存储函数，自定义函数 ----------
-- 新建
    CREATE FUNCTION function_name (参数列表) RETURNS 返回值类型
        函数体
    - 函数名，应该合法的标识符，并且不应该与已有的关键字冲突。
    - 一个函数应该属于某个数据库，可以使用db_name.funciton_name的形式执行当前函数所属数据库，否则为当前数据库。
    - 参数部分，由"参数名"和"参数类型"组成。多个参数用逗号隔开。
    - 函数体由多条可用的mysql语句，流程控制，变量声明等语句构成。
    - 多条语句应该使用 begin...end 语句块包含。
    - 一定要有 return 返回值语句。
-- 删除
    DROP FUNCTION [IF EXISTS] function_name;
-- 查看
    SHOW FUNCTION STATUS LIKE 'partten'
    SHOW CREATE FUNCTION function_name;
-- 修改
    ALTER FUNCTION function_name 函数选项
--// 存储过程，自定义功能 ----------
-- 定义
存储存储过程 是一段代码（过程），存储在数据库中的sql组成。
一个存储过程通常用于完成一段业务逻辑，例如报名，交班费，订单入库等。
而一个函数通常专注与某个功能，视为其他程序服务的，需要在其他语句中调用函数才可以，而存储过程不能被其他调用，是自己执行 通过call执行。
-- 创建
CREATE PROCEDURE sp_name (参数列表)
    过程体
参数列表：不同于函数的参数列表，需要指明参数类型
IN，表示输入型
OUT，表示输出型
INOUT，表示混合型
注意，没有返回值。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-20、存储过程" tabindex="-1"><a class="header-anchor" href="#_2-20、存储过程" aria-hidden="true">#</a> 2.20、存储过程</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>/* 存储过程 */ ------------------
存储过程是一段可执行性代码的集合。相比函数，更偏向于业务逻辑。
调用：CALL 过程名
-- 注意
- 没有返回值。
- 只能单独调用，不可夹杂在其他语句中
-- 参数
IN|OUT|INOUT 参数名 数据类型
IN      输入：在调用过程中，将数据输入到过程体内部的参数
OUT     输出：在调用过程中，将过程体处理完的结果返回到客户端
INOUT   输入输出：既可输入，也可输出
-- 语法
CREATE PROCEDURE 过程名 (参数列表)
BEGIN
    过程体
END
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-21、用户和权限管理" tabindex="-1"><a class="header-anchor" href="#_2-21、用户和权限管理" aria-hidden="true">#</a> 2.21、用户和权限管理</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>/* 用户和权限管理 */ ------------------
-- root密码重置
1. 停止MySQL服务
2.  [Linux] /usr/local/mysql/bin/safe_mysqld --skip-grant-tables &amp;
    [Windows] mysqld --skip-grant-tables
3. use mysql;
4. UPDATE `user` SET PASSWORD=PASSWORD("密码") WHERE `user` = "root";
5. FLUSH PRIVILEGES;
用户信息表：mysql.user
-- 刷新权限
FLUSH PRIVILEGES;
-- 增加用户
CREATE USER 用户名 IDENTIFIED BY [PASSWORD] 密码(字符串)
    - 必须拥有mysql数据库的全局CREATE USER权限，或拥有INSERT权限。
    - 只能创建用户，不能赋予权限。
    - 用户名，注意引号：如 'user_name'@'192.168.1.1'
    - 密码也需引号，纯数字密码也要加引号
    - 要在纯文本中指定密码，需忽略PASSWORD关键词。要把密码指定为由PASSWORD()函数返回的混编值，需包含关键字PASSWORD
-- 重命名用户
RENAME USER old_user TO new_user
-- 设置密码
SET PASSWORD = PASSWORD('密码')  -- 为当前用户设置密码
SET PASSWORD FOR 用户名 = PASSWORD('密码') -- 为指定用户设置密码
-- 删除用户
DROP USER 用户名
-- 分配权限/添加用户
GRANT 权限列表 ON 表名 TO 用户名 [IDENTIFIED BY [PASSWORD] 'password']
    - all privileges 表示所有权限
    - *.* 表示所有库的所有表
    - 库名.表名 表示某库下面的某表
    GRANT ALL PRIVILEGES ON `pms`.* TO 'pms'@'%' IDENTIFIED BY 'pms0817';
-- 查看权限
SHOW GRANTS FOR 用户名
    -- 查看当前用户权限
    SHOW GRANTS; 或 SHOW GRANTS FOR CURRENT_USER; 或 SHOW GRANTS FOR CURRENT_USER();
-- 撤消权限
REVOKE 权限列表 ON 表名 FROM 用户名
REVOKE ALL PRIVILEGES, GRANT OPTION FROM 用户名   -- 撤销所有权限
-- 权限层级
-- 要使用GRANT或REVOKE，您必须拥有GRANT OPTION权限，并且您必须用于您正在授予或撤销的权限。
全局层级：全局权限适用于一个给定服务器中的所有数据库，mysql.user
    GRANT ALL ON *.*和 REVOKE ALL ON *.*只授予和撤销全局权限。
数据库层级：数据库权限适用于一个给定数据库中的所有目标，mysql.db, mysql.host
    GRANT ALL ON db_name.*和REVOKE ALL ON db_name.*只授予和撤销数据库权限。
表层级：表权限适用于一个给定表中的所有列，mysql.talbes_priv
    GRANT ALL ON db_name.tbl_name和REVOKE ALL ON db_name.tbl_name只授予和撤销表权限。
列层级：列权限适用于一个给定表中的单一列，mysql.columns_priv
    当使用REVOKE时，您必须指定与被授权列相同的列。
-- 权限列表
ALL [PRIVILEGES]    -- 设置除GRANT OPTION之外的所有简单权限
ALTER   -- 允许使用ALTER TABLE
ALTER ROUTINE   -- 更改或取消已存储的子程序
CREATE  -- 允许使用CREATE TABLE
CREATE ROUTINE  -- 创建已存储的子程序
CREATE TEMPORARY TABLES     -- 允许使用CREATE TEMPORARY TABLE
CREATE USER     -- 允许使用CREATE USER, DROP USER, RENAME USER和REVOKE ALL PRIVILEGES。
CREATE VIEW     -- 允许使用CREATE VIEW
DELETE  -- 允许使用DELETE
DROP    -- 允许使用DROP TABLE
EXECUTE     -- 允许用户运行已存储的子程序
FILE    -- 允许使用SELECT...INTO OUTFILE和LOAD DATA INFILE
INDEX   -- 允许使用CREATE INDEX和DROP INDEX
INSERT  -- 允许使用INSERT
LOCK TABLES     -- 允许对您拥有SELECT权限的表使用LOCK TABLES
PROCESS     -- 允许使用SHOW FULL PROCESSLIST
REFERENCES  -- 未被实施
RELOAD  -- 允许使用FLUSH
REPLICATION CLIENT  -- 允许用户询问从属服务器或主服务器的地址
REPLICATION SLAVE   -- 用于复制型从属服务器（从主服务器中读取二进制日志事件）
SELECT  -- 允许使用SELECT
SHOW DATABASES  -- 显示所有数据库
SHOW VIEW   -- 允许使用SHOW CREATE VIEW
SHUTDOWN    -- 允许使用mysqladmin shutdown
SUPER   -- 允许使用CHANGE MASTER, KILL, PURGE MASTER LOGS和SET GLOBAL语句，mysqladmin debug命令；允许您连接（一次），即使已达到max_connections。
UPDATE  -- 允许使用UPDATE
USAGE   -- “无权限”的同义词
GRANT OPTION    -- 允许授予权限
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-22、表维护" tabindex="-1"><a class="header-anchor" href="#_2-22、表维护" aria-hidden="true">#</a> 2.22、表维护</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>/* 表维护 */
-- 分析和存储表的关键字分布
ANALYZE [LOCAL | NO_WRITE_TO_BINLOG] TABLE 表名 ...
-- 检查一个或多个表是否有错误
CHECK TABLE tbl_name [, tbl_name] ... [option] ...
option = {QUICK | FAST | MEDIUM | EXTENDED | CHANGED}
-- 整理数据文件的碎片
OPTIMIZE [LOCAL | NO_WRITE_TO_BINLOG] TABLE tbl_name [, tbl_name] ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-23、杂项" tabindex="-1"><a class="header-anchor" href="#_2-23、杂项" aria-hidden="true">#</a> 2.23、杂项</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>/* 杂项 */ ------------------
1. 可用反引号（`）为标识符（库名、表名、字段名、索引、别名）包裹，以避免与关键字重名！中文也可以作为标识符！
2. 每个库目录存在一个保存当前数据库的选项文件db.opt。
3. 注释：
    单行注释 # 注释内容
    多行注释 /* 注释内容 */
    单行注释 -- 注释内容     (标准SQL注释风格，要求双破折号后加一空格符（空格、TAB、换行等）)
4. 模式通配符：
    _   任意单个字符
    %   任意多个字符，甚至包括零字符
    单引号需要进行转义 \'
5. CMD命令行内的语句结束符可以为 ";", "\G", "\g"，仅影响显示结果。其他地方还是用分号结束。delimiter 可修改当前对话的语句结束符。
6. SQL对大小写不敏感
7. 清除已有语句：\c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


