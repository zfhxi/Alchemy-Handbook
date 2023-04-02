# Linux静态IP设定

<!--
Tags: For管理员
category: 环境配置
description: 固定服务器ip地址
-->

> 注：下面教程仅针对arch Linux，其他发行版待后续更新

搬运[https://zmcdbp.com/archlinux-static-ip/](https://zmcdbp.com/archlinux-static-ip/)

## 移除networkmanager

如果你装了networkmanager这个包来管理网络连接，即使设定了静态ip，也会变成动态分配ip。所以需要先移除相关包：

```bash
sudo pacman -Rsn `pacman -Qsq networkmanager` network-manager-applet
```

## 配置静态ip

1. 先使用`ip add`查看自己的网卡设备，比如`enp2s0`
2. `vi /etc/systemd/network/10-static-enp2s0.network`，来创建配置：
    
    ```bash
    [Match]
    Name=enp2s0
    
    [Network]
    Address=10.26.xxx.xxx/24
    Gateway=10.26.xxx.1
    DNS=8.8.8.8 114.114.114.114
    ```
    
3. `systemctl enable —now systemd-networkd`，即可实现绑定
4. 再输入`ip add`查看是否绑定成功

## 更改静态ip

1. 首先得知道ip是多少，window插上网线查看ipconfig
2. `vi /etc/systemd/network/10-static-enp2s0.network`
3. 修改Address和Gateway，参照上面创建配置得内容，修改xxx
4. `systemctl restart systemd-networkd` ，重启服务，实现更改
5. `ip a` 查看ip是否更改

## 测试

执行：

```bash
curl -i www.baidu.com
```

如果正常显示返回信息，则说明配置成功。

若返回错误：`curl: (6) Couldn’t resolve host ‘xxxxxx’`，则可能是`/etc/resolv.conf`问题。

<!--Valine-->