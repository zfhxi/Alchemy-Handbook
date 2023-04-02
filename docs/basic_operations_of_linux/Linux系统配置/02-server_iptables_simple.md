# 服务器iptables规则配置简单版

<!--
Tags: For管理员
category: 环境配置
description: 设定防火墙，管理端口出入，以及防止端口扫描
-->

参考：[https://wiki.archlinux.org/title/iptables_(简体中文)](https://wiki.archlinux.org/title/iptables_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87))

## 初始配置

下面的操作以Archlinux为例，请事先保证安装了iptables和ipset包。

启动iptables

```bash
cp /etc/iptables/empty.rules /etc/iptables/iptables.rules
systemctl start iptables

iptables -nvL --line-numbers
```

停止iptables

```bash
iptables --flush #or iptables -F    //清空所有规则
systemctl stop iptables
```

## 常见操作

删除规则：

参考：[http://blog.51yip.com/linux/1404.html](http://blog.51yip.com/linux/1404.html)

```bash
iptables -nvL --line-numbers
iptables -D INPUT 3  //删除input的第3条规则
```

保存命令行输入的规则到默认规则：

```bash
iptables-save > /etc/iptables/iptables.rules

#修改配置文件后，需要重新加载服务：
systemctl reload iptables
#或者通过 iptables 直接加载：
iptables-restore < /etc/iptables/iptables.rules
```

放行端口：

```bash
#例如要放行8080-8089端口
iptables -I INPUT -p tcp --dport 8080-8089 -j ACCEPT
```

## 最后总结设置

```bash
# 先清除所有规则
ipset flush
iptables --flush

#禁用ping，icmp协议
iptables -I INPUT -p icmp -j DROP
#放行ssh端口
iptables -A INPUT -i 网卡设备 -p tcp --dport ssh端口号 -j ACCEPT

#在旧规则前插入新规则（在行首插入）
iptables -I INPUT -p tcp --dport 8080:8089 -j ACCEPT

# 此处可考虑引入anti-portscan防端口扫描脚本，参考[https://github.com/zfhxi/anti-portscan](https://github.com/zfhxi/anti-portscan)

#丢弃规则外的包
iptables -A INPUT -j DROP
****
# 保存命令行规则到默认规则文件中
iptables-save > /etc/iptables/iptables.rules
ipset save > /etc/ipset.conf
```

查看 `扫描服务器非开放端口的入侵者` ip：

```bash
watch -n1  ipset list scanner-ip-set
```

下次开机时：

```bash
# 清空规则
ipset flush
iptables --flush
# 首先启动ipset
systemctl start ipset
# 再启动iptables
systemctl start iptables
```

## 一些操作案例

## 禁止ping

参考：[https://www.jianshu.com/p/c1b786ba6b6b](https://www.jianshu.com/p/c1b786ba6b6b)

**1）默认直接禁ping的问题？**

```bash
iptables -I INPUT -p icmp -j DROP
```

//设置完上面的规则后，其他主机确实无法ping本机，但本机也无法ping其他主机

//当本机ping其他主机，其他主机回应也是使用icmp，对方的回应被丢弃

**2）禁止其他主机ping本机，允许本机ping其他主机**

```bash
iptables  -A  INPUT  -p icmp --icmp-type echo-request  -j  DROP
```

//仅禁止入站的ping请求，不拒绝入站的ping回应包

## 只允许SSH

参考：[https://zhuanlan.zhihu.com/p/413032776](https://zhuanlan.zhihu.com/p/413032776)

建议先去/etc/ssh/sshd_config修改默认端口，然后重启ssh服务。

仅允许与此服务器的传入 SSH 连接。您可以从任何地方通过 ssh 连接到此服务器。

```bash
iptables -A INPUT -i eth0 -p tcp --dport 22 -j ACCEPT
```

上面的 iptables 命令有以下 4 个组件。

- “-A INPUT”——这表明我们正在向 INPUT 链追加（或添加）一条新规则。因此，此规则适用于传入流量。
- “-i eth0” – 将根据此规则检查通过接口 eth0 的传入数据包。
- “-p tcp –dport 22” – 此规则适用于 TCP 数据包。这有一个名为“-dport 22”的 tcp 选项，它表示服务器上此规则的目标端口是 22（即 ssh）。
- “-j ACCEPT”——跳转到接受，它只是接受数据包。

简单来说，上述规则可以表述为：所有通过 eth0 for ssh 传入的数据包都将被接受。

## 规则最后—丢弃规则外的其他数据包

参考：[https://zhuanlan.zhihu.com/p/413032776](https://zhuanlan.zhihu.com/p/413032776)

一旦您指定了接受数据包的自定义规则，您还应该有一个默认规则来丢弃任何其他数据包。

这应该是您在 INPUT 链中的最后一条规则。

要丢弃所有传入的数据包，请执行以下操作。

```bash
iptables -A INPUT -j DROP
```

构建脚本配置规则：

```bash
# vi iptables.sh
iptables -A INPUT -i eth0 -p tcp --dport 22 -j ACCEPT
iptables -A INPUT -j DROP
iptables -L INPUT
```

## 防止端口扫描

见[https://github.com/zfhxi/anti-portscan](https://github.com/zfhxi/anti-portscan)

[https://github.com/EtherDream/anti-portscan/blob/master/install.sh](https://github.com/EtherDream/anti-portscan/blob/master/install.sh)

例子：

```bash
#!/usr/bin/env bash
#
# 使用 iptables/ipset 阻止端口扫描
#
# 如果有 IP 连接未开放端口，该 IP 将进入扫描者名单，过期时间 IP_DENY_SECOND 秒。
# 如果该 IP 继续连接未开放端口，过期时间不复位，但包计数器会累计，
# 如果累计超过 PORT_SCAN_MAX，该 IP 将无法连接任何端口，直到过期。
IP_DENY_SECOND=60
PORT_SCAN_MAX=3

# 目标网卡
DEV=enp2s0

#INPUT="-A INPUT"
INPUT="-I INPUT"
# INPUT=-t raw -A PREROUTING

# 开放的端口
ipset create pub-port-set bitmap:port range 0-65535

# 如果应用程序端口有变化，需及时更新该 set，否则正常用户会被当成扫描者
ipset add pub-port-set 22-39 # 访问22-39之外的端口，其ip会被加入黑名单

# 名单最大条数
# 例如 100Mbps 网络下 IP_DENY_SECOND 秒能收到多少 SYN 包？（SYN 最小 60B）
IP_SET_MAX=$((100 * 1024 * 1024 / 8 / 60 * $IP_DENY_SECOND))

# 扫描者名单
ipset create scanner-ip-set hash:ip \
  timeout $IP_DENY_SECOND \
  maxelem $IP_SET_MAX \
  counters

## function trap-scan ##
iptables \
  -N trap-scan

# 更新扫描者 packets/bytes 计数器
iptables \
  -A trap-scan \
  -m set --match-set scanner-ip-set src \
  -j DROP

# 将 IP 加入扫描者名单（仅首次）
# 使用 iptables 动态改变 ipset，避免了额外的交互。本程序亮点~
iptables \
  -A trap-scan \
  -j SET \
  --add-set scanner-ip-set src

iptables \
  -A trap-scan \
  -j DROP
## end function ##

# 连接未开放端口，大概率是扫描者，交给 trap-scan 处理
iptables \
  -i $DEV \
  $INPUT \
  -p tcp --syn \
  -m set ! --match-set pub-port-set dst \
  -j trap-scan

# 连接未开放端口超过 PORT_SCAN_MAX 次的 IP，禁止访问任何服务！
# 此处不更新计数器
# 已建立的 TCP 不影响，因为此处只针对 --syn
iptables \
  -i $DEV \
  $INPUT \
  -p tcp --syn \
  -m set ! --update-counters \
  --match-set scanner-ip-set src \
  --packets-gt $PORT_SCAN_MAX \
  -j DROP

# 屏蔽非 SYN 类型的端口扫描
# 例如扫描者发送 ACK，服务器默认会回复 RST，仍有可能暴露端口
# 因此对于非 SYN 包，如果不匹配已建立的连接，则丢弃
iptables \
  -i $DEV \
  -A INPUT \
  -p tcp ! --syn \
  -m conntrack ! --ctstate ESTABLISHED,RELATED \
  -j DROP
```

## 其他参考

[ipset常用命令](https://www.cnblogs.com/wangshui898/p/13591774.html)

<!--Valine-->