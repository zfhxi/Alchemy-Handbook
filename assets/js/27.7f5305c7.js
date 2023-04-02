(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{306:function(t,a,n){"use strict";n.r(a);var e=n(10),p=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"pip-conda离线安装软件包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pip-conda离线安装软件包"}},[t._v("#")]),t._v(" pip/conda离线安装软件包")]),t._v(" "),a("p",[t._v("针对服务器无网络的情况，当然也可以尝试服务器联网，见"),a("a",{attrs:{href:"https://liandan.idzc.top/basic_operations_of_linux/Linux%E7%B3%BB%E7%BB%9F%E9%85%8D%E7%BD%AE/04-campus_network.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("《校园内网联网\n》"),a("OutboundLink")],1),t._v("，在无网络情况下，只有先将离线下载的包传到网上再安装。")]),t._v(" "),a("p",[t._v("安装包的方式有两种，"),a("code",[t._v("pip install xxxx")]),t._v("和"),a("code",[t._v("conda install xxxx")]),t._v("，两者的区别见"),a("a",{attrs:{href:"https://blog.csdn.net/FrankieHello/article/details/106083428",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://blog.csdn.net/FrankieHello/article/details/106083428"),a("OutboundLink")],1),t._v("，不过个人常用"),a("code",[t._v("pip install xxx")])]),t._v(" "),a("h2",{attrs:{id:"pip-install方式的离线安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pip-install方式的离线安装"}},[t._v("#")]),t._v(" pip install方式的离线安装")]),t._v(" "),a("p",[t._v("1）直接搜索引擎输入”pypi 包名”，去寻找对应包的whl文件的下载链接，或者直接输入"),a("a",{attrs:{href:"https://mirrors.tuna.tsinghua.edu.cn/pypi/web/simple/cmake/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://mirrors.tuna.tsinghua.edu.cn/pypi/web/simple/cmake/"),a("OutboundLink")],1),t._v(" ，替换“cmake”为报名，然后下载对应版本。或者在有网的机器上执行"),a("code",[t._v("pip download 包名")]),t._v("下载包（这种方式最好，因为它会自动下载依赖包，前面的方式还需要理清依赖包如果有的话）。")]),t._v(" "),a("p",[t._v("2）再安装按照《15-PC和服务器间进行文件传输》的方式将离线包上传到服务器上。")]),t._v(" "),a("p",[t._v("3）如果你使用的是anaconda/miniconda，先激活需要安装包的环境，否则跳过此步。")]),t._v(" "),a("p",[t._v("4）直接执行"),a("code",[t._v("pip install <包文件xxx.whl>")])]),t._v(" "),a("p",[t._v("批量离线操作方式见"),a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/70065906",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://zhuanlan.zhihu.com/p/70065906"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"conda-install方式的离线安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conda-install方式的离线安装"}},[t._v("#")]),t._v(" conda install方式的离线安装")]),t._v(" "),a("p",[t._v("和pip install方式差不多的流程")]),t._v(" "),a("p",[t._v("1）搜索“conda 包名”，寻找对于包的tar.bz2文件，下载")]),t._v(" "),a("p",[t._v("2）再安装按照《15-PC和服务器间进行文件传输》的方式将离线包上传到服务器上。")]),t._v(" "),a("p",[t._v("3）先激活需要安装包的环境。")]),t._v(" "),a("p",[t._v("4）直接执行"),a("code",[t._v("conda install --use-local <包文件xxx.tar.bz2>")])]),t._v(" "),a("h2",{attrs:{id:"python-setup-py-install方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#python-setup-py-install方式"}},[t._v("#")]),t._v(" python setup.py install方式")]),t._v(" "),a("p",[t._v("这种方式常见于github上开源的第三方包，可能暂未纳入pypi库中。")]),t._v(" "),a("p",[t._v("因此先要从仓库下载整个源文件列表，然后上传到服务器，执行"),a("code",[t._v("python setup.py install")])])])}),[],!1,null,null,null);a.default=p.exports}}]);