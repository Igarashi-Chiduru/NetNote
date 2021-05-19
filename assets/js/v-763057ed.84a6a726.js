(self.webpackChunk=self.webpackChunk||[]).push([[1927],{81:(e,t,l)=>{"use strict";l.r(t),l.d(t,{data:()=>c});const c={key:"v-763057ed",path:"/net/manual/command/14-4.html",title:"夏令时命令",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"clock summer-time absolute",slug:"clock-summer-time-absolute",children:[]},{level:2,title:"clock summer-time recurring",slug:"clock-summer-time-recurring",children:[]},{level:2,title:"clock summer-time recurring",slug:"clock-summer-time-recurring-1",children:[]}],filePathRelative:"net/manual/command/14-4.md",git:{updatedTime:1621435654e3,contributors:[]}}},6391:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>o});const c=(0,l(6252).uE)('<h1 id="夏令时命令"><a class="header-anchor" href="#夏令时命令">#</a> 夏令时命令</h1><h2 id="clock-summer-time-absolute"><a class="header-anchor" href="#clock-summer-time-absolute">#</a> <code>clock summer-time absolute</code></h2><ul><li>命令： <ul><li><code>clock summer-time &lt;word&gt; absolute &lt;HH:MM&gt; &lt;YYYY.MM.DD&gt; &lt;HH:MM&gt; &lt;YYYY.MM.DD&gt; [&lt;offset&gt;]</code></li><li><code> no clock summer-time</code></li></ul></li><li>功能：配置夏令时时间范围的具体值，在该范围的时间为夏令时时间，其余为非夏令时时间。本命令的no操作为删除夏令时配置。</li><li>参数：<code>&lt;word&gt;</code>为夏令时时区名；<code>&lt;HH:MM&gt;</code>为起始时间，具体格式小时（范围 0-23 ）：分钟（范围 0-59 ）；<code>&lt;YYYY.MM.DD&gt;</code>为起始日期，具体格式年（范围 1970-2038 ）.月（范围 1-12 ）.日（范围 1-31 ）；<code>&lt;HH:MM&gt;</code>为结束时间，具体格式小时（范围 0-23 ）：分钟（范围 0-59 ）；<code>&lt;YYYY.MM.DD&gt;</code>为结束日期，具体格式年（范围 1970-2038 ）.月（范围 1-12 ）.日（范围 1-31 ）；<code>&lt;offset&gt;</code>为时间偏移量，范围是 1-1440，单位：分，缺省值为60分。</li><li>缺省情况：系统缺省为没有配置夏令时时间范围。</li><li>命令模式：全局配置模式。使用指南：本命令设置夏令时起始和结束的绝对时间点，当系统时间到达夏令时开始时间点时，时钟进行跳变，增加<code>&lt;offset&gt;</code>值，系统进入夏令时。当系统时间到达夏令时结束时间点时，时钟再次跳变，减去<code>&lt;offset&gt;</code>值，系统结束夏令时。进行配置时，夏令时结束时间应大于夏令时开始时间。</li><li>举例：配置夏令时时间范围为2010年4月6日12点10分到2010年8月6日12点10分，偏移值为70分钟，且命名为 aaa。</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Switch(config)# clock summer-time aaa absolute 12:10 2010.4.6 12:10 2010.8.6 70\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="clock-summer-time-recurring"><a class="header-anchor" href="#clock-summer-time-recurring">#</a> <code>clock summer-time recurring</code></h2><ul><li>命令： <ul><li><code>clock summer-time &lt;word&gt; recurring &lt;HH:MM&gt; &lt;MM.DD&gt; &lt;HH:MM&gt; &lt;MM.DD&gt; [&lt;offset&gt;]</code></li><li><code>no clock summer-time</code></li></ul></li><li>功能：配置循环的夏令时时间范围值，在该范围的时间为夏令时时间，其余为非夏令时。</li><li>参数：<code>&lt;word&gt;</code>为夏令时时区名；<code>&lt;HH:MM&gt;</code>为起始时间，具体格式小时（范围0-23）：分钟（范围0-59）；<code>&lt;MM.DD&gt;</code>为起始日期，具体格式月（范围1-12）.日（范围1-31）；<code>&lt;HH:MM&gt;</code>为结束时间，具体格式小时（范围0-23）：分钟（范围0-59）；<code>&lt;MM.DD&gt;</code>为结束日期，具体格式月（范围1-12）.日（范围1-31）；<code>&lt;offset&gt;</code>为时间偏移量，范围是1-1440，单位：分，缺省值为60分。</li><li>缺省情况：系统缺省为没有配置夏令时时间范围。</li><li>命令模式：全局配置模式。</li><li>使用指南：本命令设置循环夏令时起始和结束的时间点，当系统时间到达夏令时开始时间点，则系统时钟进行跳变，增加<code>&lt;offset&gt;</code>值，系统进入夏令时。当系统时间到达夏令时结束时间点时，时钟再次跳变，减去<code>&lt;offset&gt;</code>值，系统结束夏令时。循环夏令时与年份无关，每一年当系统时钟运行到夏令时开始和结束时间点时，都会出现夏令时跳变。本命令支持南半球夏令时。</li><li>举例：配置夏令时时间为每年的4月6日12点10分到8月6日12点10分，偏移值为70分钟，且命名为aaa。</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Switch(config)# clock summer-time aaa recurring 12:10 4.6 12:10 8.6 70\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="clock-summer-time-recurring-1"><a class="header-anchor" href="#clock-summer-time-recurring-1">#</a> <code>clock summer-time recurring</code></h2><ul><li>命令： <ul><li><code>clock summer-time &lt;word&gt; recurring &lt;HH:MM&gt; &lt;week&gt; &lt;day&gt; &lt;month&gt; &lt; HH:MM &gt; &lt;week&gt; &lt;day&gt; &lt;month&gt; [&lt;offset&gt;]</code></li><li><code>no clock summer-time</code></li></ul></li><li>功能：配置循环的夏令时时间范围值，在该范围的时间为夏令时时间，其余为非夏令时。</li><li>参数：<code>&lt;word&gt;</code>为夏令时时区名；<code>&lt;HH:MM&gt;</code>为起始时间，具体格式小时（范围0-23）：分钟（范围0-59）；<code>&lt;week&gt;</code>为第几周，配置值为：1-4，first或last；<code>&lt;day&gt;</code>为星期值，配置值为：“Sun”, “Mon”, “Tue”, “Wed”, “Thu”, “Fri”, “Sat”；<code>&lt;month&gt;</code>为月份值，配置值为：“Jan”, “Feb”, “Mar”, “Apr”, “May”,“Jun”,“Jul”, “Aug”, “Sep”, “Oct”, “Nov”, “Dec”；<code>&lt;HH:MM&gt;</code>为结束时间，具体格式小时（范围0-23）：分钟（范围0-59）；<code>&lt;week&gt;</code>为第几周，配置值为：1-4，first或last；<code>&lt;day&gt;</code>为星期值，配置值为：“Sun”, “Mon”, “Tue”, “Wed”, “Thu”, “Fri”, “Sat”；<code>&lt;month&gt;</code>为月份值，配置值为：“Jan”, “Feb”, “Mar”, “Apr”, “May”, “Jun”,“Jul”, “Aug”, “Sep”, “Oct”, “Nov”, “Dec”；<code>&lt;offset&gt;</code>为时间偏移量，范围是1-1440，单位：分，缺省值为60分。</li><li>缺省情况：系统缺省为没有配置夏令时时间范围。</li><li>命令模式：全局配置模式。使用指南：本命令可灵活设置循环夏令时起始和结束的时间点，既可以设置某月的第几个星期几进入或退出夏令时，也可设置某月的第一个或最后一个星期几进入或退出夏令时。当系统时间到达夏令时开始时间点，则系统时钟进行跳变，增加<code>&lt;offset&gt;</code>值，系统进入夏令时。当系统时间到达夏令时结束时间点时，时钟再次跳变，减去<code>&lt;offset&gt;</code>值，系统结束夏令时。循环夏令时与年份无关，每一年当系统时钟运行到夏令时开始和结束时间点时，都会出现夏令时跳变。本命令支持南半球夏令时。</li><li>举例：配置夏令时时间为每年4月第一个星期一12点10分开始到8月最后一个星期六12点10分结束，偏移值为70分钟，且命名为aaa。</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Switch(config)# clock summer-time aaa recurring 12:10 1 mon apr 12:10 last sat aug 70\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',10),o={render:function(e,t){return c}}}}]);