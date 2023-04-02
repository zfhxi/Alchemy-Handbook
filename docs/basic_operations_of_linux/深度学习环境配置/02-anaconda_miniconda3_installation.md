# Anaconda/Miniconda3安装

<!--
Tags: 所有用户可食用
category: 环境配置
create_date: October 2, 2021 3:00 PM
description: 安装环境的基操
-->

由于Miniconda3相比轻量一些，而且两者操作基本无区别（区别见[https://blog.csdn.net/qq_18668137/article/details/80807829](https://blog.csdn.net/qq_18668137/article/details/80807829)），因此推荐使用miniconda3

## 下载Miniconda3包

[https://mirrors.tuna.tsinghua.edu.cn/#](https://mirrors.tuna.tsinghua.edu.cn/#) →”获取下载链接“→应用软件→Conda→Miniconda3-pyxx x.xx.x (Linux/x86_64, sh)

## 安装miniconda3

先赋予执行权限，再执行，也可直接使用`“.”`来执行：

```bash
chmod +x Miniconda3-pyxx.sh
./Miniconda3-pyxx.sh

# or
. Miniconda3-pyxx.sh
```

`"."`和`"./"`的区别见[https://blog.csdn.net/u014471752/article/details/84565908](https://blog.csdn.net/u014471752/article/details/84565908)

按照提示输入就行。注意miniconda3的安装路径，输入时可选择为`/home/你的用户名/.miniconda3`，允许执行`conda init`方便添加shell自动初始化conda环境。

然后防止默认激活base环境（登录打开shell不激活环境）：`conda config --set auto_activate_base false`

## 修改源

如何修改，可参考[https://mirrors.help/anaconda/](https://mirrors.help/anaconda/)。下面给出一个示例：

全部复制以下命令直接粘贴到终端执行：
```bash
echo 'auto_activate_base: false
channels:
  - defaults
show_channel_urls: true
default_channels:
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/r
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/msys2
custom_channels:
  conda-forge: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  pytorch: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  nvidia: https://mirrors.sustech.edu.cn/anaconda-extra/cloud/' > ~/.condarc
```

执行`conda clean -i`，清除缓存

## 创建虚拟环境

执行如下命令：

```bash
conda create -n 环境名 python=python版本
# 激活环境
conda activate 环境名
# 更改pip源为清华源
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
# 安装其他包
```

## 粗暴克隆环境（慎选）

注：有些环境里的包是通过编译来安装的，如horovod，克隆后，在新的服务器上可能不会正常工作……

在某些情况下，在多台服务器间或多用户间克隆环境是常见需求。有这个暴力操作的原因是，conda自带的克隆选项(conda create —name  xxx —clone 环境名或路径名)不怎么好用（反正我没操作成功过）。当然似乎有其他更专业的方法，参考[https://zhuanlan.zhihu.com/p/87344422](https://zhuanlan.zhihu.com/p/87344422)，但经我测试，都没通过（可能操作原因）。

我曾经使用这种暴力方式给我的同门拷贝环境，在为第二个同门拷贝时，改进了一些缺陷（写了批量修改解释器注释的shell脚本），不知道它们是否发现了其他bug 🤣。

1）将别人的环境使用如下方式打包、传输、解压：

```bash
# cd到要打包的环境
cd xxx/envs
# 打包环境名xxx
tar cjvf xxx.tar.bz2 xxx
# 可选用sftp方式来传输环境
# 然后拷贝环境到目标miniconda3环境的envs目录下，解压
tar xjvf xxx.tar.bz2
```

2）按照如下方式批量修改环境bin目录中的Python script文件中的第一行，若不修改其声明的解释器会报错"`Bad Interpreter: No such file or directory`"：

新建change_interpreter.sh，粘贴以下内容：

```bash
#!/bin/bash

BIN_PATH=$1/bin
PYTHON_INTERPRETER="#!$(realpath $BIN_PATH/python)"
for file in $BIN_PATH/*
do
  if [[ $(file -b "$file") == *"Python script"* ]];then
    sed -i "1s|.*|$PYTHON_INTERPRETER|g" $file
  fi
done
```

然后

```bash
cd /xxx/miniconda3/envs
./change_interpreter.sh <环境目录名>
```

3）这种拷贝环境的操作，可能导致gpustat报错”_curses.error: setupterm: could not find terminfo database“（暂未查明原因），因此添加terminfo路径到环境变量：

```bash
echo 'export TERMINFO=/etc/terminfo' >> ~/.bashrc
```

参考[https://stackoverflow.com/questions/9485699/setupterm-could-not-find-terminal-in-python-program-using-curses](https://stackoverflow.com/questions/9485699/setupterm-could-not-find-terminal-in-python-program-using-curses)

4）激活环境

```bash
# 先查看已有的环境
conda env list
# 发现转移过来的环境xxx在列表中，激活它
conda activate xxx
# 为了使每次登录shell都能默认激活环境，因此把激活命令写入.bashrc（注意是两个右箭头）
echo 'conda activate xxx' >> ~/.bashrc
```