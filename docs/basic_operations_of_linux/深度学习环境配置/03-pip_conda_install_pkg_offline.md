# pip/conda离线安装软件包

<!--
Tags: 所有用户可食用
category: 环境配置
description: conda install；pip install；python setup.py install
-->

针对服务器无网络的情况，当然也可以尝试服务器联网，见[《校园内网联网
》](https://liandan.idzc.top/basic_operations_of_linux/Linux%E7%B3%BB%E7%BB%9F%E9%85%8D%E7%BD%AE/04-campus_network.html)，在无网络情况下，只有先将离线下载的包传到网上再安装。

安装包的方式有两种，`pip install xxxx`和`conda install xxxx`，两者的区别见[https://blog.csdn.net/FrankieHello/article/details/106083428](https://blog.csdn.net/FrankieHello/article/details/106083428)，不过个人常用`pip install xxx`

## pip install方式的离线安装

1）直接搜索引擎输入”pypi 包名”，去寻找对应包的whl文件的下载链接，或者直接输入[https://mirrors.tuna.tsinghua.edu.cn/pypi/web/simple/cmake/](https://mirrors.tuna.tsinghua.edu.cn/pypi/web/simple/cmake/) ，替换“cmake”为报名，然后下载对应版本。或者在有网的机器上执行`pip download 包名`下载包（这种方式最好，因为它会自动下载依赖包，前面的方式还需要理清依赖包如果有的话）。

2）再安装按照《15-PC和服务器间进行文件传输》的方式将离线包上传到服务器上。

3）如果你使用的是anaconda/miniconda，先激活需要安装包的环境，否则跳过此步。

4）直接执行`pip install <包文件xxx.whl>`

批量离线操作方式见[https://zhuanlan.zhihu.com/p/70065906](https://zhuanlan.zhihu.com/p/70065906)

## conda install方式的离线安装

和pip install方式差不多的流程

1）搜索“conda 包名”，寻找对于包的tar.bz2文件，下载

2）再安装按照《15-PC和服务器间进行文件传输》的方式将离线包上传到服务器上。

3）先激活需要安装包的环境。

4）直接执行`conda install --use-local <包文件xxx.tar.bz2>`

## python setup.py install方式

这种方式常见于github上开源的第三方包，可能暂未纳入pypi库中。

因此先要从仓库下载整个源文件列表，然后上传到服务器，执行`python setup.py install`

<!--Valine-->