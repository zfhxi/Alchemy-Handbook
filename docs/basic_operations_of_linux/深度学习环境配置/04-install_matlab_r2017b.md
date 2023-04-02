# 命令行安装Matlab R2017b

<!--
Tags: For管理员
category: 环境配置
description: 当服务器没有安装桌面时，进行matlab的安装
-->
如果在服务器无GUI桌面，可能不需要安装java（待测试）。下面以matlab r2017b(matlab 9.3)为例。

下载对应的iso包和MATLABR2017b_Linux_Crack.rar文件（假设在/home/xxx/Downloads目录）。下面的命令都以root身份执行。

## 挂载

```bash
unrar x MATLABR2017b_Linux_Crack.rar
mkdir /home/xxx/iso
mount -o loop /home/xxx/Downloads/R2017b_glnxa64.iso /home/xxx/iso
```

## 拷贝配置文件

```bash
mkdir -p /opt/matlab/etc # 静默安装时所需的配置文件目录
mkdir -p /opt/matlab/r2017b # matlab最终安装文件
cp /home/xxx/iso/installer_input.txt /opt/matlab/etc
cp /home/xxx/iso/activate.ini /opt/matlab/etc
chmod +w /opt/matlab/etc/*
cp /home/xxx/Downloads/MATLABR2017b_Linux_Crack/license_standalone.lic /opt/matlab/etc/
```

## 修改配置文件

`installer_input.txt`的修改（注意以下项，先去掉#后修改）：

```bash
destinationFolder='/opt/matlab/r2017b'（软件安装目录，注意目录和文件权限)
fileInstallationKey=09806-07443-53955-64350-21751-41297 (激活码)
agreeToLicense=yes (同意安装)
mode=silent (静默安装，不弹出GUI交互界面)
activationPropertiesFile='/opt/matlab/etc/activate.ini'(激活配置文件的绝对路径)
licensePath='/opt/matlab/etc/license_standalone.lic'(license文件的绝对路径)
```

`activate.ini`的修改：

```bash
isSilent=true(静默模式)
activateCommand=activateOffline(离线激活)
licenseFile='/opt/matlab/etc/license_standalone.lic'(license文件绝对路径)
activationKey=09806-07443-53955-64350-21751-41297(激活码)
installLicenseFileDir='/opt/matlab/etc/'(license文件绝对路径的目录)
installLicenseFileName='license_standalone.lic'(license文件名称)
```

## 静默安装

执行（虽然installer_input.txt中已经有了安装配置，比如激活码和license文件路径等，但是有时安装时并没有起效，所以依然采用命令行方式配置）：

```bash
iso/install -inputFile /opt/matlab/etc/installer_input.txt -mode silent -fileInstallationKey 09806-07443-53955-64350-21751-41297 -agreeToLicense yes -activationPropertiesFile -agreeToLicense yes -activationPropertiesFile destinationFolder /opt/matlab/R2017b
```

## 激活

等几分钟后，执行如下命令进行激活：

```bash
/opt/matlab/R2017b/bin/activate_matlab.sh -propertiesFile /opt/matlab/etc/activate.ini
```

接着执行：

```bash
cp /home/xxx/Downloads/MATLABR2017b_Linux_Crack/license_standalone.lic /opt/matlab/R2017b/licenses/
cp /home/xxx/Downloads/MATLABR2017b_Linux_Crack/libmwservices.so /opt/matlab/R2017b/bin/glnxa64/
```

## 卸载盘

安装完成后，cd到/opt/matlab/R2017b/bin执行

```bash
./matlab
```

然后取消挂载：

```bash
umount /home/xxx/iso
```

## 附言

如果还要安装matlabengineforpython

可参考：[https://ww2.mathworks.cn/help/matlab/matlab_external/install-the-matlab-engine-for-python.html](https://ww2.mathworks.cn/help/matlab/matlab_external/install-the-matlab-engine-for-python.html)

root下执行

```bash
chmod 777 -R /opt/matlab/R2017b/extern/engines/python
```

用户身份下

```bash
cd /opt/matlab/R2017b/extern/engines/python
pyton setup.py install

# 测试
pip list |grep matlab
python -c 'import matlab.engine;print(matlab.engine.start_matlab())' # 测试引擎是否安装成功
```

参考：[https://www.cnblogs.com/scboy/articles/13206185.html](https://www.cnblogs.com/scboy/articles/13206185.html)
<!--Valine-->