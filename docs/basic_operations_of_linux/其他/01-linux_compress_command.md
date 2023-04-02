# Linux压缩命令速查

<!--
Tags: 所有用户可食用
category: Linux奇技淫巧
create_date: October 2, 2021 3:30 PM
description: rar、zip、gzip、tar相关打包解压操作
-->

## rar&unrar

```bash
unrar e test.rar #提取仅文件（不包含其所在的目录）到当前目录
unrar x test.rar #提取文件并包含其完整路径

rar a filename.rar /path/to/file_or_folder #打包

rar l[t,b] filename.rar #列出档案[technical, bare]
rar v[t,b] filename.rar #列出压缩档案的详细信息[technical,bare]
unrar t filename.rar #测试是否可以成功解压
```

## zip&unzip / gzip&gunzip

```bash
gzip filename #将文件编码后得到filename.gz
gunzip filename.gz #解码后得到filename

# 为保留原文件，加上重定向
gzip -c filename > /path/to/filename.gz #将文件编码后得到filename.gz
gunzip -c /path/to/filename.gz > ./filename #解码后得到filename

gzip -l filename.gz #列出压缩档案的详细信息
gzip -t filename.gz #测试解压
```

```bash
zip filename.zip filename #压缩

unzip filename.zip #直接解压到当前目录
unzip filename.zip -d /path/to/folder #解压到指定目录

unzip -l filename.zip #列出压缩档案的详细信息
unzip -t filename.zip #测试解压
```

## tar

```bash
# 压缩
tar -cvf filename.tar.xz /path/to/file_or_folder #压缩为tar 或者.tar.xz
tar -czvf filename.tar.gz /path/to/file_or_folder #压缩为tar.gz or .tgz
tar -cjvf filename.tar.bz2 /path/to/file_or_folder #先压缩为.tar，再用bzip2压缩为.tar.bz2
tar -cjvhf filename.tar.bz2 /path/to/link_path #压缩带有软连接的文件或文件夹
tar -cZvf filename.tar.Z /path/to/file_or_folder #先打包为tar，再用compress(一般不自带该命令？)压缩，生成一个umcompress压缩过的包

# 对应解压
tar -xvf filename.tar.xz
tar -xzvf filename.tar.gz
tar -xjvf filename.tar.bz2
tar -xZvf filename.tar.Z

# 查看
tar -tvf filename.tar.gz
```

**参数详解**

五个命令中必选一个

- c: 建立压缩档案
- x：解压
- t：查看内容
- r：向压缩归档文件末尾追加文件
- u：更新原压缩包中的文件

这几个参数是可选的

- z：有gzip属性的
- j：有bz2属性的
- Z：有compress属性的
- v：显示所有过程
- O：将文件解开到标准输出

f必选参数

- f: 使用档案名字，这个参数是最后一个参数，后面只能接档案名。

## 批量解压

(来自wanghaotian学弟的使用场景的探索），有这样一个场景：

```jsx
$ ls .
a.tgz b.tgz c.tgz ...
```

如何使用命令实现对每一个文件解压呢？

在当前文件夹下使用以下命令之一：

```bash
$ for f in *.tgz; do tar -xvzf "$f"; done
$ ls *.tgz | xargs -n1 tar xzvf
```

这将批量解压缩当前文件夹下的所有.tgz文件。如果需要解压缩其他格式的文件，只需将“*.tgz”更改为相应的文件名模式即可。

## 压缩比率

压缩同一个文件的一次测试：

![https://img.idzc.top/picgoimg/202108170002721.png](https://img.idzc.top/picgoimg/202108170002721.png)

初次得到压缩比率比较： tar.bz2>gzip>tgz>>zip>tar

参考：

[https://www.jianshu.com/p/b835a4d5bb4e](https://www.jianshu.com/p/b835a4d5bb4e)

[https://www.cnblogs.com/dyh-air/articles/9069642.html](https://www.cnblogs.com/dyh-air/articles/9069642.html)

[http://www.360doc.com/content/14/1212/11/18578054_432344502.shtml](http://www.360doc.com/content/14/1212/11/18578054_432344502.shtml)
<!--Valine-->