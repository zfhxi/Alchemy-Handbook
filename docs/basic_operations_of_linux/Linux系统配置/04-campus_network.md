# 校园内网联网

<!--
Tags: For管理员, 部分适用于所有用户
category: Linux奇技淫巧
create_date: October 2, 2021 1:50 PM
description: 哆点连接、vpn连接
-->

## 哆点连接校园网

### 啰嗦的介绍

首先你需要有一个校园网账号。

可以参考[https://github.com/hisaner/Drcom-Padavan](https://github.com/hisaner/Drcom-Padavan)，使用curl发送POST请求来登录校园网。

也可以参考[https://github.com/mchome/dogcom](https://github.com/mchome/dogcom)，编译一份登录程序，然后修改配置文件以适配你自己的学校校园网。

### 直接食用

1. 我已经编译好了一份可执行的登录程序，**[下载](https://gitee.com/julianchern/arch/raw/master/pkgs/drcom-for-Linux.tar.bz2)**
2. 将下载的`drcom.tar.bz2`上传到服务器解压，如解压到家目录`tar xjvf drcom.tar.bz2 -C $HOME`。（如果不知道如何上传，见《15-PC和服务器间进行文件传输》）
3. 注意解压后得到的文件夹为`.drcom`，是一个隐藏文件夹，执行`ls -a`查看到该文件夹。这是为了考虑隐私问题，防止账号密码被其他人查看，因此你甚至还可以对`.drcom`文件夹设置仅自己账户可读写执行权限：`chmod 700 -R .drcom`
4. 先修改`drcom.conf`中的账户和密码，然后赋予`dogcom`、`dr.sh`可执行权限（`chmod u+x dogcom`、`chmod u+x dr.sh`），最后运行`./dr.sh`。
5. 你可能需要再开一个窗口完成其他任务，或者ctrl+C直接终端此次联网。

综上，即：

```bash
tar xjvf drcom.tar.bz2 -C $HOME
chmod 700 -R .drcom
cd $HOME/.drcom
chmod u+x dogcom
chmod u+x dr.sh
vi drcom.conf # 修改账户和密码
./dr.sh
```

## 连接PPTP协议VPN（限管理员操作）

首先你需要有一个vpn账号。

若为Debian系列：

```bash
sudo apt install pptp-linux
sudo apt install route
sudo apt install net-tools
sudo apt install curl

sudo pptpsetup --create [vpn_name] --server [vpn_ip] --username [vpn_usrname] --password [vpn_passwd] --encrypt
sudo pon [vpn_name] updetach persist

sudo route add default dev ppp0
curl -i www.baidu.com
```

如果是archlinux

```bash
sudo pacman -S pptpclient,curl
sudo pptpsetup --create [vpn_name] --server [vpn_ip] --username [vpn_usrname] --password [vpn_passwd] --encrypt
sudo pon [vpn_name] updetach persist

sudo ip route add default dev ppp0 #1）可能已经存在默认路由，可以ip route del default 删除原先的默认路由。

curl -i www.baidu.com
```

以后每次连接vpn：

```bash
sudo pon [vpn_name] updetach persist
sudo ip route add default dev ppp0 
curl -i www.baidu.com
```

关闭vpn连接：

```bash
sudo poff [vpn_name]
# 下面的操作看情况使用，在archlinux上跳过如下，直接systemctl restart systemd-networkd
ip route del default dev ppp0
ip route add default gw <网关> <网卡设备名> # or ip route add default via <网关>
```

修改vpn密码，`vim /etc/ppp/chap-secrets` ，见[https://www.codenong.com/js078ac704c92c/](https://www.codenong.com/js078ac704c92c/)

vpn的删除：

```bash
# route
Kernel IP routing table
Destination     Gateway         Genmask         Flags Metric Ref    Use Iface
default         10.xx.101.1    0.0.0.0         UG    0      0        0 enp8s0f1
10.xx.101.0    0.0.0.0         255.255.255.0   U     0      0        0 enp8s0f1
172.17.0.0      0.0.0.0         255.255.0.0     U     0      0        0 docker0
xx.1x8.1x6.xx  10.xx6.101.1    255.255.255.255 UGH   0      0        0 enp8s0f1
```

```bash
route del -net xx.1x8.1x6.xx netmask 255.255.255.255
pptpsetup --delete [vpn_label]
```
<!--Valine-->