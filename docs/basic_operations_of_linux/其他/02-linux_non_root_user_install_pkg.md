# Linux非root用户安装一些包

<!--
Tags: 所有用户可食用
category: Linux奇技淫巧
create_date: October 2, 2021 3:52 PM
description: 主要是通过编译安装来装软件包，抄了以前写的帖子
-->

最近常用公用服务器运行代码，作为强迫症重度患者，首先配置工作环境，需要很多包，但没权限。因此，小探究了下，目前主要知道如下两种方案，一些场景下需结合使用。

## 编译安装

如果会编译安装，那么无需root权限也可安装对应的软件包

常用操作流程：

```bash
git clone xxx.git [or wget xxx.tar.gz & tar xvf xxx.tar.gz]
cd xxx
./configure --prefix=<path>
make
make install
```

下面是一些示例：

[非特权用户安装zsh和Oh-My-Zsh](http://ijinjay.github.io/blog/2016-04/%E9%9D%9E%E7%89%B9%E6%9D%83%E7%94%A8%E6%88%B7%E5%AE%89%E8%A3%85zsh%E5%92%8COh-My-Zsh.html)

[Announcing ncurses 6.2](https://invisible-island.net/ncurses/announce.html#h3-documentation)

## Debian包提取（只适用于Debian/Ubuntu）

有时也可以通过`apt-get`来下载debian仓库里的预编译二进制包，然后解压，放进对应环境变量中

```bash
apt-get download <pkg-name> # 获取预编译的二进制包
dpkg -x package.deb <pkg_dir> # 解压获取的包
```

## 实践

安装tmuxv3.2版本并用以覆盖服务器中的低版本2.x：

1. [https://github.com/tmux/tmux](https://github.com/tmux/tmux) 中列出了编译前需要的依赖
    - libevent 2.x
    - nucrses
2. `apt-get download libevent-dev`获取仓库中的预编译包`libevent-dev_2.0.21-stable-3_amd64.deb`
3. `dpkg -x libevent-dev_2.0.21-stable-3_amd64.deb ~/.apps/libevent_dev`
4. 终端添加环境变量
    
    ```bash
    #gcc找到头文件的路径                                                                                               
    C_INCLUDE_PATH=$C_INCLUDE_PATH:/home/chenzhongming/.local/include
    export C_INCLUDE_PATH
    # 
    # #g++找到头文件的路径
    # CPLUS_INCLUDE_PATH=$CPLUS_INCLUDE_PATH:/usr/include/libxml2:/MyLib
    # export CPLUS_INCLUDE_PATH
    #  
    #  #gcc和g++在编译的链接(link)阶段查找库文件的目录列表
    LIBRARY_PATH=$LIBRARY_PATH:/home/chenzhongming/.local/lib
    export LIBRARY_PATH
    ```
    
    这样编译时，编译器就能按照环境变量中的路径去寻找相关的头和库
    
    此处参考：[https://blog.csdn.net/liuxiao723846/article/details/97617681](https://blog.csdn.net/liuxiao723846/article/details/97617681)
    
    注：这里使用`libevent-dev`，而不是`libevent`的原因是，前者提供了后者不带有的头文件等，更适用于编译
    
    有时还需要添加运行时动态库：
    
    ```bash
    export LD_LIBRARY_PATH=$NCURSES_HOME/lib:$LD_LIBRARY_PATH
    ```
    
5. `./configure --prefix=/home/xxxx/.apps/mytmux` 然后`make &make install`
6. 将bin目录添加到path：
    
    ```bash
    export PATH=/home/xxxx/.apps/mytmux/bin:$PATH
    ```
    
    注：为了覆盖自带的tmux，所以bin目录在`$PATH`前。
    

## 参考

[http://ijinjay.github.io/blog/2016-04/非特权用户安装zsh和Oh-My-Zsh.html](http://ijinjay.github.io/blog/2016-04/%E9%9D%9E%E7%89%B9%E6%9D%83%E7%94%A8%E6%88%B7%E5%AE%89%E8%A3%85zsh%E5%92%8COh-My-Zsh.html)

[https://stickcui.github.io/2019/05/07/Linux下非root用户安装软件至本地/](https://stickcui.github.io/2019/05/07/Linux%E4%B8%8B%E9%9D%9Eroot%E7%94%A8%E6%88%B7%E5%AE%89%E8%A3%85%E8%BD%AF%E4%BB%B6%E8%87%B3%E6%9C%AC%E5%9C%B0/)

[https://blog.csdn.net/liuxiao723846/article/details/97617681](https://blog.csdn.net/liuxiao723846/article/details/97617681)
<!--Valine-->