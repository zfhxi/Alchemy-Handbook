# linux server使用clash

> 注：以下方案适用的场景为：为某一 命令行 设置代理

## 安装ProxyChains4

先安装代理设置工具proxychains:
```bash
sudo apt install proxychains4
```

这样就可以为需要执行的命令行设定代理了，比如测试谷歌是否能访问：
```bash
curl -i google.com               # 没有通过代理，通常无法正确获得结果
proxychains4 curl -i google.com  # 通过代理访问，可以获得正确返回结果
```
设置代理端口`sudo vim /etc/proxychains4.conf`:
```bash
#socks4         127.0.0.1 9050
socks5 127.0.0.1 7890
```
注释socks4，添加socks5，并设定代理端口为7890

## 安装clash

去[此处](https://github.com/zhongfly/Clash-premium-backup/releases/tag/2023-09-05-gdcc8d87)下载clash的linux版本（传到linux服务器上）:

```bash
gunzip clash-linux-amd64-***.gz
mv clash-linux-amd64-v1.14.0 your_path/clash
```
运行clash需要Country.mmdb文件，依靠其利用GeoIP2服务能识别互联网用户的地点位置，以供规则分流时使用。去[此处](https://github.com/Dreamacro/maxmind-geoip/releases)下载。
```bash
mv Country.mmdb your_path
```

另外需要新建clash的配置文件`your_path/config.yaml`，由于官方避险删库了，这里提供一个模板：
```yaml
mixed-port: 7890
allow-lan: true
mode: rule
log-level: info
external-controller: '0.0.0.0:9090'
external-ui: ui
secret: '123456'

## 保留上面，在下面填写你的机场订阅地址下载得到的your_config.yaml内容，删除your_config.yaml中上面对应的项，并删除本行。
```

为了能保证外部web ui的访问，新建ui文件夹：
```bash
mkdir your_path/ui
```

## 运行
```bash
your_path/clash -d your_path

INFO[0000] Start initial compatible provider 故障转移       
INFO[0000] Start initial compatible provider 自动选择       
INFO[0000] Start initial compatible provider 节点选择       
INFO[0000] Mixed(http+socks5) proxy listening at: :7890 
INFO[0000] RESTful API listening at: 0.0.0.0:9090 
```

浏览器打开控制台地址：

<http://yacd.haishan.me/>

在控制台页面，点击 “配置” -> “切换后端”，填入地址：

```text
API Base URL：linux服务器ip:设定的端口9090
密钥： 123456
```
之后就可以通过控制台页面进行配置了，但要注意的是：控制台页面操作的结果并不会保存到配置文件，只能是临时生效。

## 测试
常用方式：
```bash
proxychains4 <your_cmd>       # 会有log信息
proxychains4 -q <your_cmd>    # 无log信息
```
假设需要克隆GitHub某个仓库的代码：
```bash
proxychains4 git clone https://github.com/xxx/xxx
```


上述所需要下载的工具，我统一放在了[此处](https://pan.idzc.top/99Public/OneDrive/Tools/clash_for_linux)

参考：  
https://blog.iswiftai.com/posts/clash-linux/  
https://skyao.io/learning-linux-mint/docs/daily/network/clash.html  