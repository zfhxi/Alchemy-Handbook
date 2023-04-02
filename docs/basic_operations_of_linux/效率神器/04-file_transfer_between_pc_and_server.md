# PC和服务器间进行文件传输

<!--
Tags: 所有用户可食用
category: Linux奇技淫巧
description: winscp、xftp等gui工具；scp、sftp命令。
-->

## GUI文件传输

1）直接使用winscp、xftp等工具连接服务器，进行可视化的操作。

2）PC使用pycharm、vscode（+remote ssh插件）等通过ssh协议连接服务其后，是可以进行GUI的间接传输文件（两者基本上都可以把桌面的文件直接拖到同步目录下来上传到服务器，也可以打开远程服务器文件列表视图，来download远程文件）。

## scp命令

详细见[https://www.runoob.com/linux/linux-comm-scp.html](https://www.runoob.com/linux/linux-comm-scp.html)，下面展示几个常用的命令范式：

```bash
# 向远程服务器上传文件
scp <local_file> <remote_username@remote_ip:remote_folder> # 将本地文件上传到远程目录
scp <local_file> <remote_username@remote_ip:/xxxx/remote_file> # 将本地文件上传到远程路径xxx并命名为remote_file

# 向远程服务器上传文件夹
scp -r <local_folder> <remote_username@remote_ip:remote_folder> # 将本地文件夹上传到远程目录

# 从远程下载文件到本地
scp -r <remote_username@remote_ip:remote_folder> <local_folder> # 将远程目录下载到本地
scp <remote_username@remote_ip:remote_file> <local_file> # 将远程文件下载到本地
```

如果远程ssh端口不是默认的22，那么执行`scp -P <port> xxxx xxxx`

## sftp命令

详见[https://zhuanlan.zhihu.com/p/51749905](https://zhuanlan.zhihu.com/p/51749905)，下面介绍常用操作：

1）连接操作

```bash
sftp -P <port> remote_user@remote_host # 如果远程ssh端口是默认的22，那么-P选项可省略
sftp <~/.ssh/config中的服务器名> # 高级玩家用法，配置过程见《11-Linux配置ssh密钥对实现免密登录》
```

2）支持的bash命令

对远程服务器的bash命令：`cd`、`ls`、`mkdir`、`pwd`

对本地PC的bash命令：`lcd`、`lls`、`lmkdir`、`lpwd`

如：

```bash
# 显示当前所在的远程服务器目录
sftp> pwd

# 显示当前所在的本地pc目录
sftp> lpwd
```

3）文件传输命令

通过2）的命令进入到操作目录后：

- 下载远程文件：`get <remoteFile> <localPath or localFileName>`
- 下载远程文件夹：`get -r <remoteFile> <localPath>`
- 上传本地文件：`put <localFile > <remotePath or remoteFileName>`
- 上传本地文件夹：`put -r <localPath > <remotePath>`

## 其他

比如rsync命令等没用过。
<!--Valine-->