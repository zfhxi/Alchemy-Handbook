# Linux配置ssh密钥对实现免密登录

<!--
Tags: 所有用户可食用
category: Linux奇技淫巧, 效率神器
create_date: October 2, 2021 3:57 PM
description: 远程登录服务器配置ssh密钥，方便ssh、sftp、和vscode+remote ssh
-->

如下操作可能不适用于惯用xshell的用户，特别是windows用户，几乎对windows用户没啥大用（除非他们摆脱xshell，然而我用windows时都不能摆脱xshell）。对于Mac/Linux下惯用终端连接服务器的用户可能相对地提高效率。

参考自：[https://p3terx.com/archives/configuring-ssh-keys-with-sshkeygen-and-sshcopyid.html](https://p3terx.com/archives/configuring-ssh-keys-with-sshkeygen-and-sshcopyid.html)

1. 在本地终端中执行 `ssh-keygen`，生成密钥对（私钥和公钥），（除了修改`Enter file in which to save the key (/home/xxxx/.ssh/id_rsa):`，建议改为`/home/xxxx/.ssh/服务器名_rsa`，方便区分）一路回车 (En­ter)。
2. 假如1中~/.ssh下生成了amax_rsa.pub和amax_ras文件
3. 使用 `ssh-copy-id` 自动将公钥上传并配置到 服务器上，`ssh-copy-id -i ~/.ssh/amax_rsa.pub User@HostName -p Port`
4. 使用 SSH 配置文件管理会话，本地`vim ~/.ssh/config`：
    
    ```bash
    Host amax
        HostName 233.233.233.233
        Port 2333
        User myvps
        IdentityFile "~/.ssh/amax_rsa"
        IdentitiesOnly yes
    ```
    
    然后赋予权限`chmod 600 ~/.ssh/config`
    
5. 终端直接`ssh amax`实现免密登录。甚至可以方便执行`sftp amax`，来进行服务器间的文件传输。这种配置也方便vscode+remote ssh打开远程服务器。

windows下的免密配置：<[https://segmentfault.com/a/1190000023054090](https://segmentfault.com/a/1190000023054090)>

设备1已经完成免密操作，直接拷贝私钥文件到其他设备（设备2），SSH配置文件写入信息，可以直接完成免密操作

但是需要将拷贝后的私钥文件权限修改`chmod 600  id_rsa`

若还需要密码，见[https://blog.csdn.net/silentwolfyh/article/details/83656101](https://blog.csdn.net/silentwolfyh/article/details/83656101)：

尝试修改配置`/etc/ssh/sshd_config`：

```bash
#禁用root账户登录，如果是用root用户登录请开启 
PermitRootLogin yes 

# 是否让 sshd 去检查用户家目录或相关档案的权限数据， 
# 这是为了担心使用者将某些重要档案的权限设错，可能会导致一些问题所致。 
# 例如使用者的 ~.ssh/ 权限设错时，某些特殊情况下会不许用户登入 
StrictModes no 

# 是否允许用户自行使用成对的密钥系统进行登入行为，仅针对 version 2。 
# 至于自制的公钥数据就放置于用户家目录下的 .ssh/authorized_keys 内 
RSAAuthentication yes 
PubkeyAuthentication yes 
AuthorizedKeysFile .ssh/authorized_keys 

# 有了证书登录了，可以选择禁用密码登录，但此处仍然保留。 
PasswordAuthentication yes
```
<!--Valine-->