# CUDA/cuDNN安装

<!--
Tags: For管理员, 部分适用于所有用户
category: 环境配置
create_date: October 2, 2021 1:51 PM
description: 安装nvidia驱动和cuda、cudnn。并且可选择安装多个cuda版本
-->

## 前言

1）大多数情况下，用户会事先安装nvidia驱动。

Linux如果已经安装nvidia驱动，可输入`nvidia-smi`查看`driver api`的cuda版本。

而当你成功cuda后，输入`nvcc --version`得到的`runtime api`的cuda版本与`driver api`的cuda版本不一致。

windows下，右键→nvidia控制面板→帮助→系统信息→组件→NVCUDA64.DLL项的产品名称会显示`driver api`的cuda版本。

2）上面版本不一致，大概率是因为用户事先单独安装了nvidia驱动，而不是使用cuda包中集成的GPU Installer Driver。当然下面是先单独安装了nvidia驱动（因为有时有多cuda版本的需求，没必要使用集成驱动，也可以灵活处理），如何处理确实考验用户的敏捷了。

> `driver api`的版本能向下兼容`runtime api`的版本，即nvidia-smi 显示的版本大于nvcc --version 的版本通常不会出现大问题。
> 

参考：[https://www.jianshu.com/p/eb5335708f2a](https://www.jianshu.com/p/eb5335708f2a)

## 版本对应表

### PyTorch

最新版本参考：[https://pytorch.org/get-started/locally/](https://pytorch.org/get-started/locally/)

历史版本参考：[https://pytorch.org/get-started/previous-versions/](https://pytorch.org/get-started/previous-versions/)

### TensorFlow

[https://tensorflow.google.cn/install/source#linux](https://tensorflow.google.cn/install/source#linux)

### cuda与cudnn版本对应

[https://developer.nvidia.com/rdp/cudnn-archive](https://developer.nvidia.com/rdp/cudnn-archive)

## ArchLinux下安装（限管理员）

- 这是不建议的方式，尽管ArchLinux的AUR仓库提供了很多深度学习、机器学习软件包，但是他们严重依赖某一cuda版本，不建议用AUR安装大多数的、深度学习相关的包。
    
    
    以下在GTX 1660TI、RTX 3090下测试。
    
    1）如果你能保证仓库中的最新版CUDA、cuDNN适合你的环境的话，直接执行：
    
    ```bash
    pacman -S nvidia-lts cuda cudnn
    ```
    
    然而通常并不能做这样的保证，所以需要自己下载对应的版本
    
    2）你可以先在[https://archive.archlinux.org/packages/c/](https://archive.archlinux.org/packages/c/)或清华源[https://arch-archive.tuna.tsinghua.edu.cn/](https://arch-archive.tuna.tsinghua.edu.cn/)的community库中（推荐后者）找到合适的cuda、cudnn版本，下载pkg.tar.zst文件
    
    [可选]然后拷贝文件到`/var/pacman/cache/pkg`目录，并cd到此
    
    然后执行：
    
    ```bash
    sudo pacman -U cuda-xxxx-x86_64.pkg.tar.zst
    sudo pacman -U cudnn-xxxx-x86_64.pkg.tar.zst
    ```
    
    如果你安装了最新的版本，也可以通过2）的操作配合[downgrade](https://wiki.archlinux.org/title/Downgrading_packages_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87))工具来降级。
    
    最后为了防止管理员手抽筋执行了`sudo pacman -Syyu`导致升级cuda、cudnn，因此修改/etc/pacman.conf来忽略这些包的升级：
    
    ```bash
    IgnorePkg = cuda cudnn
    ```
    

## Debian下安装

驱动需要管理员身份安装，CUDA、cuDNN部分可由普通用户选择安装自己有权限的目录里（这适用于需要使用多cuda版本的场景）。

以下在TITAN RTX V下测试。

### 安装NVIDIA驱动

由于各种原因，Debian10安装好后，我已将开源驱动给禁掉了。

注意事项：

- 据说在以下步骤进行之前，你需要在bios里关闭secure boot，否则安装NVIDIA驱动时会报错；
    
    `The target kernel has CONFIG_MODULE_SIG set, which means that it supports cryptographic signatures on kernel modules. On some systems, the kernel may refuse to load modules without a valid signature from a trusted key. This system also has UEFI Secure Boot enabled; many distributions enforce module signature verification on UEFFI systems when SecureBoot is enable. Would you like to sign NVIDIA kernel module?`
    
- 以下步骤都在tty下进行，所以建议关闭图形界面。
    
    ***方案1:关闭图形界面***
    
    参考：[debian关闭图形界面_配置Debian系统不启用图形界面，只有命令行界面的方法_51CTO博客_debian 关闭图形界面](https://blog.51cto.com/u_15127583/4259155)
    
    1.打开grup配置文件：`sudo vi /etc/default/grub`
    
    2.修改：将`GRUB_CMDLINE_LINUX=""` 修改为：`GRUB_CMDLINE_LINUX="text"`
    
    3.更新grub：`sudo update-grub`
    
    4.更新系统服务管理器配置：`sudo  systemctl set-default multi-user.target`
    
    5.重启：`sudo init 6`
    
    ***方案2:临时关闭X server***
    
    1.查看当前桌面管理器: `cat /etc/X11/default-display-manager`
    
    2.停止服务: `sudo systemctl stop lightdm`
    

先禁用闭源驱动：

`sudo vi /etc/modprobe.d/black_nouveau.conf`

```bash
blacklist nouveau
options nouveau modeset=0
```

需要卸载已有的驱动：

```bash
sudo apt remove --purge nvidia*
sudo apt remove --purge *nvidia*
sudo apt autoremove
```

然后更新内核：

```bash
sudo update-initramfs -u
```

显卡是TITAN RTX，去官网下载对应驱动`NVIDIA-Linux-x86_64-460.84.run`

安装之前安装以下需要依赖的包：

```bash
sudo apt install build-essential pkg-config # 未测式不安装会不会出问题
# (编译Sample时所需的依赖包) 以下命令我并未执行
sudo apt install freeglut3-dev libx11-dev libxmu-dev libxi-dev libgl1-mesa libgl1-mesa-dri libglu1-mesa libglu1-mesa-dev
```

安装`linux-headers`：

```bash
uname -r # 返回4.19.xxx
sudo apt install linux-headers-4.19 # 4.19根据uname -r
```

保证是在tty下进行：

```bash
chmod +x NVIDIA-Linux-x86_64-460.84.run
./NVIDIA-Linux-x86_64-460.84.run
```

基本上一直选YES就对了

然后执行如下来检测驱动是否装上：

```bash
nvidia-smi
```

### 安装CUDA

> 注：如果你作为普通用户安装，那么下面的安装目录就不要选/usr/local/cudaxxx了，并且去除命令中的sudo。
> 

官网[CUDA最新版本](https://developer.nvidia.com/cuda-downloads)

官网[CUDA历史版本](https://developer.nvidia.com/cuda-toolkit-archive)

查看architecture：`uname -a`

查看distribution：`lsb_release -a`

Installer Type 选择runfile(local)

下载cuda：`cuda_10.2.89_440.33.01_linux.run`

执行：

```bash
chmod u+x cuda_10.2.89_440.33.01_linux.run
sudo bash cuda_10.2.89_440.33.01_linux.run
```

- 如果要自定义目录，你可能需要使用`--toolkitpath=/path`选项或者在下图的Options里选择；
- 如果出现gcc不兼容，加入`—override`选项（参考[https://blog.csdn.net/HaoZiHuang/article/details/109544443](https://blog.csdn.net/HaoZiHuang/article/details/109544443)）

选择如下（不覆盖驱动）：

![https://img.idzc.top/picgoimg/202108162355416.png](https://img.idzc.top/picgoimg/202108162355416.png)

安装完后的信息：

```bash
lzq@titan:~/Downloads$ sh cuda_10.2.89_440.33.01_linux.run 
===========
= Summary =
===========

Driver:   Not Selected
Toolkit:  Installed in /usr/local/cuda-10.2/
Samples:  Installed in /home/lzq/, but missing recommended libraries

Please make sure that
 -   PATH includes /usr/local/cuda-10.2/bin
 -   LD_LIBRARY_PATH includes /usr/local/cuda-10.2/lib64, or, add /usr/local/cuda-10.2/lib64 to /etc/ld.so.conf and run ldconfig as root

To uninstall the CUDA Toolkit, run cuda-uninstaller in /usr/local/cuda-10.2/bin

Please see CUDA_Installation_Guide_Linux.pdf in /usr/local/cuda-10.2/doc/pdf for detailed information on setting up CUDA.
***WARNING: Incomplete installation! This installation did not install the CUDA Driver. A driver of version at least 440.00 is required for CUDA 10.2 functionality to work.
To install the driver using this installer, run the following command, replacing <CudaInstaller> with the name of this run file:
    sudo <CudaInstaller>.run --silent --driver

Logfile is /var/log/cuda-installer.log
```

然后修改.bashrc，注意替换路径

```bash
export CUDA_HOME=/usr/local/cuda-10.2
export LD_LIBRARY_PATH=$CUDA_HOME/lib64:$LD_LIBRARY_PATH
export PATH=$CUDA_HOME/bin:$PATH
```

然后`source .bashrc`，再`nvcc -V`

```bash
nvcc: NVIDIA (R) Cuda compiler driver
Copyright (c) 2005-2019 NVIDIA Corporation
Built on Wed_Oct_23_19:24:38_PDT_2019
Cuda compilation tools, release 10.2, V10.2.89
```

or

```bash
cat  /usr/local/cuda/version.txt
```

### 安装cuDNN

官网[https://developer.nvidia.com/rdp/cudnn-archive](https://developer.nvidia.com/rdp/cudnn-archive)按版本对应下载`cudnn-10.2-linux-x64-v8.2.0.53.tgz`

解压`tar xzvf cudnn*.tgz`或`tar xvf cudnn*.tar.xz`后，执行（注意版本号对应）：

```bash
cd cudnn-*-archive/
sudo cp include/cudnn*.h /usr/local/cuda/include 
sudo cp -P lib/libcudnn* /usr/local/cuda/lib64
cd /usr/local/cuda[-xx.x]/
sudo chmod a+r include/cudnn*.h lib64/libcudnn*
```

通过`cat /usr/local/cuda-10.2/include/cudnn.h | grep CUDNN_MAJOR -A 2`，确认是否安装成功（或者`cat /usr/local/cuda-10.2/include/cudnn_version.h`）

![https://img.idzc.top/picgoimg/202108162356580.png](https://img.idzc.top/picgoimg/202108162356580.png)

## Windows下

以下在GTX 1050TI下测试。

1）官网[https://link.ailemon.net/?target=https://developer.nvidia.com/cuda-downloads](https://link.ailemon.net/?target=https://developer.nvidia.com/cuda-downloads)(最新版本)or[https://link.ailemon.net/?target=https://developer.nvidia.com/cuda-toolkit-archive](https://link.ailemon.net/?target=https://developer.nvidia.com/cuda-toolkit-archive)(历史版本) 

下载cuda：`cuda_11.1.1_456.81_win10.exe`

在[https://developer.nvidia.com/rdp/cudnn-archive](https://developer.nvidia.com/rdp/cudnn-archive)下载cudnn：`cudnn-11.1-windows-x64-v8.0.5.39.zip`

2）下载完后，先安装cuda，打开exe文件，基本上点点就完事儿，注意下面的选择（只选cuda）：

![https://img.idzc.top/picgoimg/202110031014907.png](https://img.idzc.top/picgoimg/202110031014907.png)

NVIDIA GeForce Experience是游戏相关的驱动（不会没人还没装吧？）Other里好像是physx，Driver components是显示驱动，讲道理你如果事先安装了NVIDIA驱动，下面这3个都是已经安装了的，没必要又替换。

3）下面调整下安装路径（任意）：

![https://img.idzc.top/picgoimg/202110031021084.png](https://img.idzc.top/picgoimg/202110031021084.png)

4）执行`nvcc --version`查看cuda是否安装成功。

5）解压缩cudnn-xxx.zip，将对应的bin、include、lib文件夹与cuda安装目录下的对应目录进行合并，理论上不会出现覆盖。

win+R 输入sysdm.cpl→高级→环境变量，来添加环境变量

系统变量的`CUDA_PATH`保证值为刚才的安装目录：如`D:\02DevelopTools\cuda11.1\computing_toolkit`

然后Path里添加记录：

`%CUDA_PATH%\bin`

`D:\02DevelopTools\cuda11.1\computing_toolkit\lib\x64`

## 测试

假如你已经安装了pytorch或者tensorflow：

```bash
# 检查是否可用，理应返回True、0
python -c 'import torch;print(torch.cuda.is_available())'
python -c 'import torch;print(torch.cuda.current_device())'
python -c 'import tensorflow as tf;print(tf.test.is_gpu_available())'

# 查看当前环境的cuda、cudnn版本
python -c 'import torch;print(torch.version.cuda)'
python -c 'import torch;print(torch.backends.cudnn.version())'
```

## 其他

注：当我安装CUDA 11.1时，似乎直接通过pip install torch安装的torch并不能识别到cuda，因此参考了官方的[https://pytorch.org/get-started/locally/](https://pytorch.org/get-started/locally/) ，去[https://download.pytorch.org/whl/torch_stable.html](https://download.pytorch.org/whl/torch_stable.html) 里下对应cu111/xxxx-cpxxx-xxx.whl文件来安装后（或者直接`pip3 install torch==1.9.1+cu111 torchvision==0.10.1+cu111 torchaudio===0.9.1 -f [https://download.pytorch.org/whl/torch_stable.html](https://download.pytorch.org/whl/torch_stable.html)`），就可以识别cuda。

> 如果使用PyCharm，可能需要按照以下条目复制粘贴到PyCharm的右上角→ Edit Configurations→Environment  variables里：
> 

```bash
# 注意以下理应只需更改cuda的安装路径，以下是/usr/local/cuda-10.2，可以使用which nvcc查看安装的路径
LD_LIBRARY_PATH=/usr/local/cuda-10.2/lib64:$LD_LIBRARY_PATH
PATH=/usr/local/cuda-10.2/bin:$PATH
```

参考：

[https://blog.csdn.net/zhouchen1998/article/details/107778087](https://blog.csdn.net/zhouchen1998/article/details/107778087)

[https://blog.ailemon.net/2020/07/27/windows-install-cuda-and-cudnn-environment/](https://blog.ailemon.net/2020/07/27/windows-install-cuda-and-cudnn-environment/)

[https://zhuanlan.zhihu.com/p/29841665](https://zhuanlan.zhihu.com/p/29841665)

<!--Valine-->