# Linux挂载硬盘

<!--
Tags: For管理员
category: Linux奇技淫巧
create_date: October 2, 2021 3:56 PM
description: 挂载ntfs、ext4盘
-->

这里主要考虑usb移动硬盘，并且主要考虑ext4和ntfs两种格式

## 手动挂载

### 挂载ext4盘

直接执行

```bash
mkdir /mnt/diskxxx
mount -t ext4 /dev/sdxxx /mnt/diskxxx
```

### 挂载NTFS盘

首先参考[https://www.linuxprobe.com/partition-file-system.html](https://www.linuxprobe.com/partition-file-system.html)查看硬盘分区Type（ext4？ntfs？）

其中经测试的靠谱的命令是在su下，`blkid`和`lsblk -f`

1）Debian系列安装相关包：

```bash
sudo apt install fuse-utils ntfs-3g
```

然后参考[https://blog.csdn.net/liushall/article/details/80684997](https://blog.csdn.net/liushall/article/details/80684997)，[https://blog.csdn.net/wangxiaopeng0329/article/details/52786165](https://blog.csdn.net/wangxiaopeng0329/article/details/52786165)输入以下命令实现挂载：

```bash
mount -t ntfs-3g /dev/<sdXX>  /mnt/<DIR>
# 或者
mount -t ntfs -w /dev/sdb* /mnt/xxx
```

有时取消挂载时会返回`target is busy`

```bash
sudo umount -l -f /dev/sd*
```

2）Arch系列安装相关包：

```bash
sudo pacman -S ntfs-3g
```

参考[https://wiki.archlinux.org/title/NTFS-3G](https://wiki.archlinux.org/title/NTFS-3G)来执行：

```bash
mkdir /mnt/diskxxx
ntfs-3g /dev/your_NTFS_partition /mnt/diskxxx
```

## 自动挂载

需要修改`/etc/fstab`文件。

推荐使用UUID方式添加盘，防止系统在某种不确定因素导致磁盘如/dev/sdxxx的这种label发生了变化。

### 查看磁盘UUID

1）参考[https://wiki.archlinux.org/title/Fstab](https://wiki.archlinux.org/title/Fstab)

> Run lsblk -f to list the partitions, and prefix the values in the UUID column with UUID= or alternatively run blkid and use the UUID values without the quotes::
> 

2）`ls -lt /dev/disk/by-uuid`

3）`lsblk -f`

### EXT4

参考[https://wiki.archlinux.org/title/Fstab](https://wiki.archlinux.org/title/Fstab)

```bash
# <device>                        <dir>   <type> <options> <dump> <fsck>
UUID=b411dc99-f0a0-4c87-9e05- /mnt/diskxxx ext4   defaults  0      0
```

### NTFS

参考[https://wiki.archlinux.org/title/NTFS-3G](https://wiki.archlinux.org/title/NTFS-3G)，针对ntfs，在安装上面的ntfs-3g包之后添加如下记录：

```bash
# <device>      <dir>            <type>  <options> <dump> <fsck>
UUID=xxxxxxx		/mnt/diskxxx		ntfs-3g 	defaults	  0      	0
```
<!--Valine-->