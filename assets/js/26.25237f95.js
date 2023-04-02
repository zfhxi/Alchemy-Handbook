(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{305:function(a,t,s){"use strict";s.r(t);var n=s(10),e=Object(n.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"anaconda-miniconda3安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#anaconda-miniconda3安装"}},[a._v("#")]),a._v(" Anaconda/Miniconda3安装")]),a._v(" "),t("p",[a._v("由于Miniconda3相比轻量一些，而且两者操作基本无区别（区别见"),t("a",{attrs:{href:"https://blog.csdn.net/qq_18668137/article/details/80807829",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://blog.csdn.net/qq_18668137/article/details/80807829"),t("OutboundLink")],1),a._v("），因此推荐使用miniconda3")]),a._v(" "),t("h2",{attrs:{id:"下载miniconda3包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载miniconda3包"}},[a._v("#")]),a._v(" 下载Miniconda3包")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://mirrors.tuna.tsinghua.edu.cn/#",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://mirrors.tuna.tsinghua.edu.cn/#"),t("OutboundLink")],1),a._v(" →”获取下载链接“→应用软件→Conda→Miniconda3-pyxx x.xx.x (Linux/x86_64, sh)")]),a._v(" "),t("h2",{attrs:{id:"安装miniconda3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装miniconda3"}},[a._v("#")]),a._v(" 安装miniconda3")]),a._v(" "),t("p",[a._v("先赋予执行权限，再执行，也可直接使用"),t("code",[a._v("“.”")]),a._v("来执行：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("chmod")]),a._v(" +x Miniconda3-pyxx.sh\n./Miniconda3-pyxx.sh\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# or")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v(" Miniconda3-pyxx.sh\n")])])]),t("p",[t("code",[a._v('"."')]),a._v("和"),t("code",[a._v('"./"')]),a._v("的区别见"),t("a",{attrs:{href:"https://blog.csdn.net/u014471752/article/details/84565908",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://blog.csdn.net/u014471752/article/details/84565908"),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("按照提示输入就行。注意miniconda3的安装路径，输入时可选择为"),t("code",[a._v("/home/你的用户名/.miniconda3")]),a._v("，允许执行"),t("code",[a._v("conda init")]),a._v("方便添加shell自动初始化conda环境。")]),a._v(" "),t("p",[a._v("然后防止默认激活base环境（登录打开shell不激活环境）："),t("code",[a._v("conda config --set auto_activate_base false")])]),a._v(" "),t("h2",{attrs:{id:"修改源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改源"}},[a._v("#")]),a._v(" 修改源")]),a._v(" "),t("p",[a._v("如何修改，可参考"),t("a",{attrs:{href:"https://mirrors.help/anaconda/",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://mirrors.help/anaconda/"),t("OutboundLink")],1),a._v("。下面给出一个示例：")]),a._v(" "),t("p",[t("code",[a._v("vi .condarc")]),a._v("添加如下到"),t("code",[a._v(".condarc")]),a._v("中：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("auto_activate_base: "),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),a._v("\nchannels:\n  - defaults\nshow_channel_urls: "),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),a._v("\ndefault_channels:\n  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main\n  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/r\n  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/msys2\ncustom_channels:\n  conda-forge: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud\n  pytorch: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud\n  nvidia: https://mirrors.sustech.edu.cn/anaconda-extra/cloud/\n")])])]),t("p",[a._v("执行"),t("code",[a._v("conda clean -i")]),a._v("，清除缓存")]),a._v(" "),t("h2",{attrs:{id:"创建虚拟环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建虚拟环境"}},[a._v("#")]),a._v(" 创建虚拟环境")]),a._v(" "),t("p",[a._v("执行如下命令：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("conda create "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-n")]),a._v(" 环境名 "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("python")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("python版本\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 激活环境")]),a._v("\nconda activate 环境名\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 更改pip源为清华源")]),a._v("\npip config "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" global.index-url https://pypi.tuna.tsinghua.edu.cn/simple\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 安装其他包")]),a._v("\n")])])]),t("h2",{attrs:{id:"粗暴克隆环境-慎选"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#粗暴克隆环境-慎选"}},[a._v("#")]),a._v(" 粗暴克隆环境（慎选）")]),a._v(" "),t("p",[a._v("注：有些环境里的包是通过编译来安装的，如horovod，克隆后，在新的服务器上可能不会正常工作……")]),a._v(" "),t("p",[a._v("在某些情况下，在多台服务器间或多用户间克隆环境是常见需求。有这个暴力操作的原因是，conda自带的克隆选项(conda create —name  xxx —clone 环境名或路径名)不怎么好用（反正我没操作成功过）。当然似乎有其他更专业的方法，参考"),t("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/87344422",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://zhuanlan.zhihu.com/p/87344422"),t("OutboundLink")],1),a._v("，但经我测试，都没通过（可能操作原因）。")]),a._v(" "),t("p",[a._v("我曾经使用这种暴力方式给我的同门拷贝环境，在为第二个同门拷贝时，改进了一些缺陷（写了批量修改解释器注释的shell脚本），不知道它们是否发现了其他bug 🤣。")]),a._v(" "),t("p",[a._v("1）将别人的环境使用如下方式打包、传输、解压：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# cd到要打包的环境")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" xxx/envs\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 打包环境名xxx")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" cjvf xxx.tar.bz2 xxx\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 可选用sftp方式来传输环境")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 然后拷贝环境到目标miniconda3环境的envs目录下，解压")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" xjvf xxx.tar.bz2\n")])])]),t("p",[a._v('2）按照如下方式批量修改环境bin目录中的Python script文件中的第一行，若不修改其声明的解释器会报错"'),t("code",[a._v("Bad Interpreter: No such file or directory")]),a._v('"：')]),a._v(" "),t("p",[a._v("新建change_interpreter.sh，粘贴以下内容：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[a._v("#!/bin/bash")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("BIN_PATH")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$1")]),a._v("/bin\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("PYTHON_INTERPRETER")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"#!'),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("realpath $BIN_PATH/python"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v('"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[a._v("file")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("in")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$BIN_PATH")]),a._v("/*\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("do")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("file")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-b")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$file")]),a._v('"')]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),a._v(" *"),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Python script"')]),a._v("* "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("then")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sed")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"1s|.*|'),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$PYTHON_INTERPRETER")]),a._v('|g"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$file")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("fi")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("done")]),a._v("\n")])])]),t("p",[a._v("然后")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" /xxx/miniconda3/envs\n./change_interpreter.sh "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("环境目录名"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),t("p",[a._v("3）这种拷贝环境的操作，可能导致gpustat报错”_curses.error: setupterm: could not find terminfo database“（暂未查明原因），因此添加terminfo路径到环境变量：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'export TERMINFO=/etc/terminfo'")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" ~/.bashrc\n")])])]),t("p",[a._v("参考"),t("a",{attrs:{href:"https://stackoverflow.com/questions/9485699/setupterm-could-not-find-terminal-in-python-program-using-curses",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://stackoverflow.com/questions/9485699/setupterm-could-not-find-terminal-in-python-program-using-curses"),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("4）激活环境")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 先查看已有的环境")]),a._v("\nconda "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("env")]),a._v(" list\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 发现转移过来的环境xxx在列表中，激活它")]),a._v("\nconda activate xxx\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 为了使每次登录shell都能默认激活环境，因此把激活命令写入.bashrc（注意是两个右箭头）")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'conda activate xxx'")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" ~/.bashrc\n")])])]),t("h2",{attrs:{id:"针对30系显卡-环境的安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#针对30系显卡-环境的安装"}},[a._v("#")]),a._v(" 针对30系显卡，环境的安装")]),a._v(" "),t("p",[a._v("1）可参考"),t("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/382353184",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://zhuanlan.zhihu.com/p/382353184"),t("OutboundLink")],1),a._v("使用conda来单独安装cuda、cudnn，然后再安装pytorch。")]),a._v(" "),t("p",[a._v("2）如果继续使用系统预装的cuda、cudnn。安装pytorch时，可能需要去"),t("a",{attrs:{href:"https://download.pytorch.org/whl/torch_stable.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://download.pytorch.org/whl/torch_stable.html"),t("OutboundLink")],1),a._v("下载相关包（这些包已经下载到3090服务器的/data/.pkgs/cu111_torch、/data/.pkgs/cu111_torchvision），或直接")]),a._v(" "),t("p",[t("code",[a._v("pip3 install torch==1.9.1+cu111 torchvision==0.10.1+cu111 torchaudio==0.9.1 -f [https://download.pytorch.org/whl/torch_stable.html](https://download.pytorch.org/whl/torch_stable.html)")])]),a._v(" "),t("p",[a._v("参考"),t("a",{attrs:{href:"https://pytorch.org/get-started/locally/",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://pytorch.org/get-started/locally/，"),t("OutboundLink")],1),t("a",{attrs:{href:"https://github.com/nanoporetech/bonito/issues/153",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/nanoporetech/bonito/issues/153"),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("验证环境是否可用：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ python\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("import")]),a._v(" torch\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" torch.cuda.is_available"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\nTrue\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" torch.cuda.current_device"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);