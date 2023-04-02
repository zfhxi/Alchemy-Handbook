# Linux下CPU频率调整

<!--
Tags: For管理员
category: Linux奇技淫巧
create_date: October 2, 2021 4:01 PM
description: 使用cpupower包
-->

## 查看CPU性能

查看cpu频率

1）从系统文件查看

```bash
cat /proc/cpuinfo |grep MHz|uniq
# or
watch grep \"cpu MHz\" /proc/cpuinfo

```

2）安装第三方包bashtop查看

[https://github.com/aristocratos/bashtop](https://github.com/aristocratos/bashtop)

## 调节性能

| Name         | 流畅度     | description                                                                                                                        |
|--------------|---------|------------------------------------------------------------------------------------------------------------------------------------|
| ondemand     |  一般，流畅  | 系统默认的超频模式，按需调节，内核提供的功能，不是很强大，但有效实现了动态频率调节，平时以低速方式运行，当系统负载提高时候自动提高频率。以这种模式运行不会因为降频造成性能降低，同时也能节约电能和降低温度。一般官方内核，还有CM7的默认的方式都是ondemand |
| interactive  | 最高，极流畅  | 交互模式，直接上最高频率，然后看CPU负荷慢慢降低，比较耗电。是以 CPU 排程数量而调整频率，从而实现省电。InteractiveX 是以 CPU 负载来调整 CPU 频率，不会过度把频率调低。所以比 Interactive 反应好些，但是省电的效果一般   |
| conservative | 高，流畅    | 保守模式，类似于ondemand，但调整相对较缓，想省电就用他吧。Google官方内核，kang内核默认模式。                                                                            |
| smartass     | 最高，流畅   | 聪明模式，是I和C模式的升级，该模式在比i模式不差的响应的前提下会做到了更加省电                                                                                           |
| performance  | 最高，极极流畅 | 性能模式！只有最高频率，从来不考虑消耗的电量，性能没得说，但是耗电量.......                                                                                          |
| powersave    | 极低      | 省电模式，通常以最低频率运行，打不死我也不用。                                                                                                            |
| userspace    | 根据设置而定  | 用户自定义模式，系统将变频策略的决策权交给了用户态应用程序，并提供了相应的接口供用户态应用程序调节CPU 运行频率使用。也就是长期以来都在用的那个模式。可以通过手动编辑配置文件进行配置                                       |
| Hotplug      | 一般，流畅   | 类似于ondemand, 但是cpu会在关屏下尝试关掉一个cpu，并且带有deep sleep，比较省电。                                                                              |



非Arch系可参考：[https://blog.csdn.net/llanlianggui/article/details/106136250](https://blog.csdn.net/llanlianggui/article/details/106136250)，[https://wsgzao.github.io/post/cpupower/](https://wsgzao.github.io/post/cpupower/) 来调节

Arch系参考[https://wiki.archlinux.org/title/CPU_frequency_scaling](https://wiki.archlinux.org/title/CPU_frequency_scaling)，安装cpupower这个包：

```bash
pacman -S cpupower
```

查看cpu性能信息：

```bash
cpupower frequency-info
```

设置cpu的工作模式为性能模式

```bash
cpupower frequency-set -g performance
```

自启服务

```bash
systemctl enable --now cpupower
```
<!--Valine-->