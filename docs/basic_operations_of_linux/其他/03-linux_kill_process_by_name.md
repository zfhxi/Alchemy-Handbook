# Linux通过进程名来杀死进程

<!--
Tags: 所有用户可食用
category: Linux奇技淫巧
create_date: October 2, 2021 4:02 PM
description: 类似killall命令
-->

```bash
#!/bin/sh
kill -9 `ps -ef |grep 进程名 | grep -v grep | awk '{print $2}'`
```

参考：[https://blog.csdn.net/qq_38486203/article/details/113634142](https://blog.csdn.net/qq_38486203/article/details/113634142)

如果还要通过用户名来再次过滤，请使用：

```bash
kill $(ps aux | grep 进程名 | grep 用户名 |grep -v grep | awk '{print $2}')
```

参考：[https://stackoverflow.com/questions/3510673/find-and-kill-a-process-in-one-line-using-bash-and-regex](https://stackoverflow.com/questions/3510673/find-and-kill-a-process-in-one-line-using-bash-and-regex)

有时需要根据用户筛序，而ps命令一般显示的是`用户一部分名称+`，可以考虑执行`ps -o ruser=userForLongName -e -o pid,ppid,c,stime,tty,time,cmd，`

```bash
ps -o ruser=userForLongName -e -o pid,cmd |grep 用户名|grep 进程名|grep -v grep | awk '{print $2}'
```

参考：

[https://blog.csdn.net/qq_15682815/article/details/87921482](https://blog.csdn.net/qq_15682815/article/details/87921482)