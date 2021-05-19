(self.webpackChunk=self.webpackChunk||[]).push([[6359],{7189:(e,s,n)=>{"use strict";n.r(s),n.d(s,{data:()=>r});const r={key:"v-7b7bf55c",path:"/serve/WS/PS/",title:"Power Shell",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"示例",slug:"示例",children:[{level:3,title:"更改本机 IP 地址",slug:"更改本机-ip-地址",children:[]}]}],filePathRelative:"serve/WS/PS/README.md",git:{updatedTime:1621435654e3,contributors:[]}}},1188:(e,s,n)=>{"use strict";n.r(s),n.d(s,{default:()=>P});var r=n(6252);const l=(0,r.Wm)("h1",{id:"power-shell"},[(0,r.Wm)("a",{class:"header-anchor",href:"#power-shell"},"#"),(0,r.Uk)(" Power Shell")],-1),a={class:"custom-container tip"},i=(0,r.Wm)("p",{class:"custom-container-title"},"TIP",-1),p=(0,r.Wm)("p",null,"PowerShell 是一种跨平台的任务自动化解决方案，由命令行 shell、脚本语言和配置管理框架组成。 PowerShell 在 Windows、Linux 和 macOS 上运行。",-1),t={href:"https://docs.microsoft.com/zh-cn/powershell/",target:"_blank",rel:"noopener noreferrer"},o=(0,r.Uk)("PowerShell 文档 - PowerShell | Microsoft Docs"),d=(0,r.uE)('<h2 id="示例"><a class="header-anchor" href="#示例">#</a> 示例</h2><h3 id="更改本机-ip-地址"><a class="header-anchor" href="#更改本机-ip-地址">#</a> 更改本机 IP 地址</h3><p>查询本机所有 IPv4 地址：</p><div class="language-ps ext-ps line-numbers-mode"><pre class="language-ps"><code>Get-NetIPAddress -AddressFamily IPv4\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>返回结果示例：</p><div class="language-ps ext-ps line-numbers-mode"><pre class="language-ps"><code>IPAddress         : 10.20.70.80\nInterfaceIndex    : 16\nInterfaceAlias    : 以太网\nAddressFamily     : IPv4\nType              : Unicast\nPrefixLength      : 24\nPrefixOrigin      : Manual\nSuffixOrigin      : Manual\nAddressState      : Preferred\nValidLifetime     : Infinite ([TimeSpan]::MaxValue)\nPreferredLifetime : Infinite ([TimeSpan]::MaxValue)\nSkipAsSource      : False\nPolicyStore       : ActiveStore\n</code></pre><div class="highlight-lines"><br><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>此处记住 <code>InterfaceIndex</code>，先使用如下命令删除对应的 IPv4 地址：</p><div class="language-ps ext-ps line-numbers-mode"><pre class="language-ps"><code>Remove-NetIPAddress -InterfaceIndex 16 -AddressFamily IPv4\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><p>可以关闭确认提示，使用参数： <code>-Confirm:$false</code></p></blockquote><p>然后添加一个新的地址：</p><div class="language-ps ext-ps line-numbers-mode"><pre class="language-ps"><code>New-NetIPAddress -InterfaceIndex 16 -AddressFamily IPv4 -PrefixLength 24 -IPAddress 192.168.100.66\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>将命令保存为 <code>.ps1</code> 文件，并以<strong>管理员身份运行</strong> 可快速切换本机 IP。</p>',12),c=(0,r.Wm)("p",null,"参考：",-1),m={href:"https://docs.microsoft.com/en-us/powershell/module/nettcpip/get-netipaddress?view=windowsserver2019-ps",target:"_blank",rel:"noopener noreferrer"},u=(0,r.Uk)("Get-NetIPAddress (NetTCPIP) | Microsoft Docs"),b={href:"https://docs.microsoft.com/en-us/powershell/module/nettcpip/remove-netipaddress?view=windowsserver2019-ps",target:"_blank",rel:"noopener noreferrer"},h=(0,r.Uk)("Remove-NetIPAddress (NetTCPIP) | Microsoft Docs"),f={href:"https://docs.microsoft.com/en-us/powershell/module/nettcpip/new-netipaddress?view=windowsserver2019-ps",target:"_blank",rel:"noopener noreferrer"},v=(0,r.Uk)("New-NetIPAddress (NetTCPIP) | Microsoft Docs"),P={render:function(e,s){const n=(0,r.up)("OutboundLink");return(0,r.wg)(),(0,r.j4)(r.HY,null,[l,(0,r.Wm)("div",a,[i,p,(0,r.Wm)("p",null,[(0,r.Wm)("a",t,[o,(0,r.Wm)(n)])])]),d,(0,r.Wm)("blockquote",null,[c,(0,r.Wm)("ul",null,[(0,r.Wm)("li",null,[(0,r.Wm)("a",m,[u,(0,r.Wm)(n)])]),(0,r.Wm)("li",null,[(0,r.Wm)("a",b,[h,(0,r.Wm)(n)])]),(0,r.Wm)("li",null,[(0,r.Wm)("a",f,[v,(0,r.Wm)(n)])])])])],64)}}}}]);