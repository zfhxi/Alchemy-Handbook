# 多设备实时同步工具syncthing

<!--
Tags: 所有用户可食用
category: 效率神器
create_date: October 2, 2021 3:54 PM
description: 只要设备间能ping通就可以实时同步的工具，只在一个设备上写代码，其他设备实时同步，配合vscode+remote ssh食用，简直不要太爽！
-->

> Syncthing 是一个开源免费的数据同步神器，被称为 Resilio Sync 的替代品，支持 Android、Linux、Windows、Mac OS X 等系统，可以使我们在 2 台任何系统任何设备之间，实现文件实时同步，很强大。而且数据很安全，不会存储在你的设备以外的其他地方。所有通信都使用 TLS 进行保护。所使用的加密包括完美的前向保密，以防止窃听者获得对您的数据的访问权限。很适合我们用来搭建私有同步网盘。
> 

## 安装

### Linux平台上安装

**下载安装**

> 注：建议通过which syncthing命令查看服务器是否安装了，避免重复安装。
> 

在[https://github.com/syncthing/syncthing/releases/](https://github.com/syncthing/syncthing/releases/) 找linux amd64版，如[https://github.com/syncthing/syncthing/releases/download/v1.18.1/syncthing-linux-amd64-v1.18.1.tar.gz](https://github.com/syncthing/syncthing/releases/download/v1.18.1/syncthing-linux-amd64-v1.18.1.tar.gz) 下载解压后copy执行文件到path目录：

```bash
wget https://github.com/syncthing/syncthing/releases/download/v1.18.1/syncthing-linux-amd64-v1.18.1.tar.gz
tar xzvf syncthing-linux-amd64-v1.2.0.tar.gz
sudo cp syncthing-linux-amd64-v1.18.1/syncthing /usr/local/bin
sudo chmod +x /usr/local/bin/syncthing
```

**开放端口**

syncthing针对个人用户使用如下两个端口：

- 8384 是Web访问控制端口
- 22000 是节点访问端口

附开启端口的教程帖子：

[https://www.cnblogs.com/wei9593/p/10419367.html](https://www.cnblogs.com/wei9593/p/10419367.html)

[https://wiki.archlinux.org/title/iptables_(简体中文)](https://wiki.archlinux.org/title/iptables_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87))

**启动syncthing**

1. 直接启动（建议tmux下运行）syncthing。
2. 当log出现`GUI and API listening on xxx 127.0.0.1:8384xxx`就可以直接ctrl c终止，目的是通过第一次运行程序来自动生成`~/.config/syncthing/config.xml`配置文件。
3. 而一般我们需要让其他设备来访问服务器的web GUI，因此要将config.xml的127.0.0.1:8384改为0.0.0.0:8384。可执行`sed -i 's/127.0.0.1:8384/0.0.0.0:8384/g' ~/.config/syncthing/config.xml`，这里的8384也可以换为其他端口，以免和别人冲突。
4. 重新运行syncthing，或者执行`nohup syncthing > /xxx/log文件保存路径位置.log 2>&1 &`到后台运行，终止的话（待补充）。

### Win & Mac安装

去 [https://docs.syncthing.net/users/contrib.html#gui-wrappers](https://docs.syncthing.net/users/contrib.html#gui-wrappers) 下载对应的图像界面程序`SyncTrayzor`或`syncthing-macos`，

安装后运行，会在状态栏有个图标

点击图标，有个open栏，点击就打开了本地的`127.0.0.1:8384`

打开web GUI后可以点操作→设置→图像用户界面→GUI监听地址/图形管理界面用户名密码，来修改地址和设定打开web GUI的登录验证（强烈建议打开登录验证）。

## 使用示例

打开web GUI后，可以选择先添加设备后设置共享文件夹，假设有一台远程linux服务器，本地为一台mac端个人电脑，并且本地可以ping通远程linux服务器（远程服务器不必ping通个人PC，因为远程Linux服务器可能为一级路由下的设备，个人PC为二级路由下的设备）

![https://img.idzc.top/picgoimg/202108162347822.png](https://img.idzc.top/picgoimg/202108162347822.png)

设置实时同步流程：

1. 打开个人PC的web GUI（一般为`127.0.0.1:8364`）。
2. 添加远程设备，输入设备ID，并输入设备名称（一般为hostname，或者好记的名称），在高级选项里设置地址列表”`tcp://xxxxx:22000, dynamic`“，这里的ip换为远程服务器ip。保存设置。
    
    ![点击右下角的`添加远程设备`](https://img.idzc.top/picgoimg/202108162348361.png)
    
    点击右下角的`添加远程设备`
    
    ![输入设备ID和设备名，建议在高级选项卡里添加远程服务器的地址`tcp://xxxxx:22000, dynamic`](https://img.idzc.top/picgoimg/202108162349590.png)
    
    输入设备ID和设备名，建议在高级选项卡里添加远程服务器的地址`tcp://xxxxx:22000, dynamic`
    
3. 打开远程linux服务器的web GUI（一般为`远程ip:8364`），接受个人PC的连接请求。
    
    ![点击添加设备](https://img.idzc.top/picgoimg/202108162352417.png)
    
    点击添加设备
    
4. 再回到个人PC的web GUI，添加文件夹：输入文件夹标签（随意），文件夹ID（不能随意，所有同步的文件夹使用统一ID）,文件夹路径写个人PC上项目路径。
    
    ![Untitled](https://img.idzc.top/picgoimg/202108162353769.png)
    
5. 点击共享选项卡，共享给刚才添加的远程设备：
    
    ![Untitled](https://img.idzc.top/picgoimg/202108162354101.png)
    
6. 在高级选项卡里设置扫描时间（即实时同步的间隔），文件夹类型设为”发送与接收“（即双向同步）点击保存即可
    
    ![Untitled](https://img.idzc.top/picgoimg/202108162354932.png)
    
7. 回到远程服务器的web GUI，按照同样的方式添加文件夹，保存文件夹ID相同，其他设置随意
8. 然后就可以实现设备间实时同步了。（为了保证远程服务器生成的大量日志或模型文件不被同步到本地，可以在文件夹选项里的忽略模式中添加忽略规则：如
    
    ```
    output
    tmp
    **/*.pyc
    **/.DS_Store
    **/__pycache__
    **/.idea
    ```
    

注意：

- 有时远程服务器有多个用户同时使用syncthing来同步，需要每个用户修改远程服务器的监听端口，具体操作如下：web GUI→操作→设置→连接→`tcp://:22001(自定义端口)`

参考：

[https://github.com/syncthing/syncthing](https://github.com/syncthing/syncthing)

[https://www.moewah.com/archives/1127.html](https://www.moewah.com/archives/1127.html)

[https://www.cnblogs.com/jackadam/p/8568833.html](https://www.cnblogs.com/jackadam/p/8568833.html)
<!--Valine-->