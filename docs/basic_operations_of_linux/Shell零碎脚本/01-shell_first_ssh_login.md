# Shell识别是否为开机后的第一次ssh登陆

<!--
description: 无需root权限实现类似开机自启某些程序的效果
-->

## 需求

由于我使用了syncthing同步软件，有时服务器重新开机后，我忘记了启动syncthing去进行同步，而是直接修改了代码，然后才想起没启动syncthing。如果我在其他服务器也修改了代码，那么就有两份新版本的代码，如果两边再打开syncthing，那么该工具同步时就会报文件冲突错误……

因此我希望开机后直接启动syncthing，并且这种启动只能是以普通用户身份执行，如果用root账户自启syncthing，那么启动的实例仅属于root账户。而且在一些服务器上，我并没有root权限操作。

## 解决方案

`who -b`，可以查看最近一次启动时间。参考[https://blog.csdn.net/wzb56_earl/article/details/51868304](https://blog.csdn.net/wzb56_earl/article/details/51868304)

`last $username`，查看该用户最近登录记录，包含时间。PS: 好像lastlog -u $username更好。

如果第一次开机，那么用户最近的登录时间一定在系统最近一次启动时间前，由此作为用户的当前ssh会话是否为第一次ssh登录。实现见下：

## 实现

`/home/$USER/.LOSC.sh`文件

```bash
#!/bin/bash

username=$USER
last_login_timestr=`last $username | head -n 2 | awk 'NR==2' |awk '{print $5,$6,$7}'`
last_login_timestamp=`date -d "$last_login_timestr" +%s`
last_boot_timestr=`who -b | awk '{print $3,$4}'`
last_boot_timestamp=`date -d "$last_boot_timestr" +%s`

#echo "$last_login_timestamp"
#echo "$last_boot_timestamp"

diff=`expr $last_login_timestamp - $last_boot_timestamp`

if [ $diff -lt 3 ];then
  echo 'first login!'
  # check syncthing
  proccess_owner=`ps -o ruser=userForLongName -e -o cmd |grep $username |grep syncthing |grep -v grep | awk '{print $1}'`
  if [ "$proccess_owner" != "" ]; then
    echo "syncthing is running!"
  else
    echo "syncthing is not running!"
    nohup syncthing > /home/$username/AppLogs/syncthing.log 2>&1 &
    echo "syncthing start to run!"
  fi
fi
```
<!--Valine-->