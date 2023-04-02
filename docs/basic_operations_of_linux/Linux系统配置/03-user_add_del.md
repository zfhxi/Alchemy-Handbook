# 用户增删

<!--
Tags: For管理员
category: Linux奇技淫巧
create_date: October 2, 2021 1:30 PM
description: 添加、删除、添加组、口令管理
-->

## 用户账号管理（root权限下操作）

### useradd命令创建用户

选项：

（红色背景框代表该选项为常用项）

- -c：指定一段注释性描述。
- -m：用户主目录（家目录）
- -M：用户没有家目录
- -d：指定用户主目录，如果此目录不存在，则同时使用-m选项，可以创建主目录。
- -g：指定用户所属的主用户组。
- -G：指定用户所属的附加群组。
- -n：取消建立以用户名称为名的群组。
- -s：指定用户的登录Shell。
- -u：指定用户的uid用户号，如果同时有-o选项，则可以重复使用其他用户的标识号。需要说明的是，设定ID值时尽量要大于500，以免冲突。因为Linux安装后会建立一些特殊用户，一般0到499之间的值留给bin、mail这样的系统账号。
- -e：指定的日期是帐号失效的日期，日期格式YYYY-MM-DD

more：[https://linux.die.net/man/8/useradd](https://linux.die.net/man/8/useradd)

示例：

1）创建用户：

```bash
# 创建一个用户$username，其中-d和-m选项用来为登录名$username产生一个主目录 /home/$username
useradd -d /home/$username -m $username

#新建一个用户$username，该用户的登录Shell是 /bin/bash，它属于$group1用户组，同时又属于$group2和$group3用户组，其中$group1用户组是其主组。
useradd -s /bin/bash -g $group1 -G $group2,$group3 $username

# 为其指定登录密码
passwd $username
```

2）因此创建一个新用户，可以一次执行如下命令：

```bash
useradd -m -d /home/$username -s /bin/bash $username
```

3）如果新建用户要同时将用户加入组的话：

```bash
useradd -m -d /home/$username -s /bin/bash -g $group1-G $group2,$group3 $username
```

### usermod修改用户

选项

- -c：修改用户帐号的备注文字
- -d：修改用户登入时的目录；
- -e：修改帐号的有效期限；
- -f：修改在密码过期后多少天即关闭该帐号；
- -g：修改用户所属的群组；
- -G：修改用户所属的附加群组；
- -l：修改用户帐号名称；
- -L：锁定用户密码，使密码无效；
- -s：修改用户登入后所使用的shell；
- -u：修改用户UID；
- -U：解除密码锁定。

more：[https://linux.die.net/man/8/usermod](https://linux.die.net/man/8/usermod)

示例：

1）追加用户的附加组

```bash
# 查看用户所属组
groups $username # or cat /etc/group
# 追加组，无-a选项则代表重设用户的群组
usermod -a -G $groupxxx $username
```

2）修改用户名称$username为$newusername

```bash
usermod -l $newusername $username
```

3）锁定用户$username、解除锁定

```bash
usermod -L $username #锁定
usermod -U $username #解除
```

4）修改$username的登入后的shell

```bash
usermod -s /sbin/nologin $username #可实现禁止ssh登录，但ftp还可以访问
usermod -s /bin/bash $username #更改用户默认shell为/bin/bash
```

参考[https://blog.csdn.net/qq_42276808/article/details/104145927](https://blog.csdn.net/qq_42276808/article/details/104145927)

另外还有一个操作用户默认shell的命令chsh:

```bash
# 查看当前系统中的可用shell，其实是列出/etc/shells
chsh -l
# 指定当前用户的shell为bash
chsh -s /bin/bash
# root用户下，修改其他用户的shell(适用于创建用户时未指定shell时，或者需要更改默认shell时)
chsh $username
```

参考[https://blog.csdn.net/weixin_33860553/article/details/92670108](https://blog.csdn.net/weixin_33860553/article/details/92670108)

### userdel删除用户

- -f：强制删除用户，即使用户当前已登录；***极其dangerous！！！***即使该用户相关的home、mail spool被占用也会被删除，并且其主用户组（即使被其他用户共用）也会被删除，容易导致系统的不一致！详见[https://linux.die.net/man/8/userdel](https://linux.die.net/man/8/userdel)
- -r：删除用户的同时，删除与用户相关的所有文件。

more：[https://linux.die.net/man/8/userdel](https://linux.die.net/man/8/userdel)

先终结其所有进程：

```bash
pkill -u $username
```

再删除：

```bash
userdel -r $username # 如果去掉-r选项，那么只删除用户，不删除相关目录（如家目录/home/$username）
```

### passwd管理用户口令

```bash
passwd 选项 用户名
```

可使用的选项：

- -d：清空密码，仅有系统管理者才能使用，这是禁止用户登录的一种快捷方式；
- -e：立即使用户密码过期，强制用户在下次登录时更改密码。
- -l,—lock：锁定密码，用户不能修改密码
- -S：列出密码的相关信息，仅有系统管理者才能使用；可配合-a选项使用
- -u：解开已上锁的帐号，针对-l选项。

也可当前用户执行passwd来修改当前用户的密码。

示例：

```bash
[root@localhost ~]# passwd -d linuxde  //清除linuxde用户密码；
Removing password for user linuxde.
passwd: Success                         //清除成功；

[root@localhost ~]# passwd -S linuxde    //查询linuxde用户密码状态；
Empty password.                         //空密码，也就是没有密码；
```

## 用户组管理（root权限下操作）

用户组的管理涉及用户组的添加、删除和修改。组的增加、删除和修改实际上就是对/etc/group文件的更新。有的翻译为工作组、群组。

### groupadd创建用户组

- -g：指定新建工作组的id；
- -r：创建系统工作组，系统工作组的组ID小于500；
- -K：覆盖配置文件“/ect/login.defs”；
- -o：允许添加组ID号不唯一的工作组。

more：[https://linux.die.net/man/8/groupadd](https://linux.die.net/man/8/groupadd)

示例：

1）创建新组$group1

```bash
groupadd -g 555 $group1
```

此时在/etc/passwd文件中产生一个组ID（GID）是555的项目。如果不加-g选项，新组的组标识号是在当前已有的最大组标识号的基础上加1。

### groupmod修改工作组

- -g<工作组识别码>：修改工作组识别码gid；
- -o：允许工作组组识别码gid有其他值；
- -n<新工作组名称>：修改工作组名称。

示例：

1）修改$group1的gid为666

```bash
groupmod -g 666 $group1
```

2）将\$group1的gid设置为10000，名字改为\$group2

```bash
groupmod –g 10000 -n $group2 $group1
```

3）如果一个用户同时属于多个用户组，那么用户可以在用户组之间切换，以便具有其他用户组的权限：

```bash
newgrp $group2
```

当前用户切换到$group2工作组来操作。

### groupdel删除工作组

- <\$groupname>：删除\$groupname的工作组。

示例：

1）从系统中删除$group2，root用户执行

```bash
groupdel $group2
```

## 各种系统用户、组信息文件

**1）与用户账号有关的系统文件/etc/passwd，存放用户主要信息，其相关字段解释如下：**

```
用户名:口令:用户标识号:组标识号:注释性描述:主目录:登录Shell
```

**2）用户帐户安全文件/etc/shadow，其记录行与/etc/passwd中的一一对应**

它由pwconv命令根据/etc/passwd中的数据自动产生。（由于/etc/passwd文件是所有用户都可读的，如果用户的密码太简单或规律比较明显的话，一台普通的计算机就能够很容易地将它破解，因此对安全性要求较高的Linux系统都把加密后的口令字分离出来，单独存放在一个文件中，这个文件是/etc/shadow文件。 有超级用户才拥有该文件读权限，这就保证了用户密码的安全性。）

```bash
登录名:加密口令:最后一次修改时间:最小时间间隔:最大时间间隔:警告时间:不活动时间:失效时间:标志
```

1. "登录名"是与/etc/passwd文件中的登录名相一致的用户账号
2. "口令"字段存放的是加密后的用户口令字，长度为13个字符。如果为空，则对应用户没有口令，登录时不需要口令；如果含有不属于集合 { ./0-9A-Za-z }中的字符，则对应的用户不能登录。
3. "最后一次修改时间"表示的是从某个时刻起，到用户最后一次修改口令时的天数。时间起点对不同的系统可能不一样。例如在SCO Linux 中，这个时间起点是1970年1月1日。
4. "最小时间间隔"指的是两次修改口令之间所需的最小天数。
5. "最大时间间隔"指的是口令保持有效的最大天数。
6. "警告时间"字段表示的是从系统开始警告用户到用户密码正式失效之间的天数。
7. "不活动时间"表示的是用户没有登录活动但账号仍能保持有效的最大天数。
8. "失效时间"字段给出的是一个绝对的天数，如果使用了这个字段，那么就给出相应账号的生存期。期满后，该账号就不再是一个合法的账号，也就不能再用来登录了。

**3）用户组的所有信息都存放在/etc/group文件中。**

```bash
组名:口令:组标识号:组内用户列表
```

1. "组名"是用户组的名称，由字母或数字构成。与/etc/passwd中的登录名一样，组名不应重复。
2. "口令"字段存放的是用户组加密后的口令字。一般Linux 系统的用户组都没有口令，即这个字段一般为空，或者是*。
3. "组标识号"与用户标识号类似，也是一个整数，被系统内部用来标识组。
4. "组内用户列表"是属于这个组的所有用户的列表/b]，不同用户之间用逗号(,)分隔。这个用户组可能是用户的主组，也可能是附加组。

## 实例：批量添加用户

可参考[https://www.runoob.com/linux/linux-user-manage.html](https://www.runoob.com/linux/linux-user-manage.html)中的文尾。

另外可以先新建一个文本`users.list`，里面每一行都是要添加的用户名，然后执行如下shell脚本：

```bash
#!/bin/bash

for username in $(more users.list)
do
if [ -n $username ]
then
  useradd -m $username -d /home/$username -s /bin/bash
  echo
  PASSWORD="$username""123"
  echo -e "$PASSWORD\n$PASSWORD" | passwd "$username"
  echo
  echo "User $username's password is changed to $PASSWORD!"
  mkdir /data/$username
  chown $username /data/$username
  cp /home/test/Miniconda3-py38_4.10.3-Linux-x86_64.sh /data/$username
else
  echo "The username is null!"
fi
done
```

那么批量删除的shell脚本：

```bash
#!/bin/bash

for username in $(more remove_users.list)
do
if [ -n $username ]
then
  userdel -r $username
  echo
  echo "User $username has been deleted!"
  rm -rf /data/$username
else
  echo "The username is null!"
fi
done
```

参考：

[https://zhuanlan.zhihu.com/p/205217949](https://zhuanlan.zhihu.com/p/205217949)  
[https://man.linuxde.net/](https://man.linuxde.net/)  
[https://linux.die.net/man/8/](https://linux.die.net/man/8/)  
[https://man7.org/linux/man-pages/man1](https://man7.org/linux/man-pages/man1)  
[https://www.runoob.com/linux/linux-user-manage.html](https://www.runoob.com/linux/linux-user-manage.html)  
[https://www.cnblogs.com/xd502djj/archive/2011/11/23/2260094.html](https://www.cnblogs.com/xd502djj/archive/2011/11/23/2260094.html)  