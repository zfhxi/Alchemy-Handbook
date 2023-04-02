# htop信息简介

<!--
Tags: 所有用户可食用
category: Linux奇技淫巧
description: htop的每一栏大致展示的信息介绍
-->

摘抄自：[https://zhuanlan.zhihu.com/p/296803907](https://zhuanlan.zhihu.com/p/296803907)，[https://cloud.tencent.com/developer/article/1115041](https://cloud.tencent.com/developer/article/1115041)‘

![https://img.idzc.top/picgoimg/202110051810511.png](https://img.idzc.top/picgoimg/202110051810511.png)

### **红色边框**

数字1，2，3，4分别代表CPU处理器/核，上图是一个四核的处理器

### **灰色边框（progress bar）**

每一个CPU的总用量情况，注意这条上面会有不同的颜色：

1. 蓝色：显示低优先级(low priority)进程使用的CPU百分比。
2. 绿色：显示用于普通用户(user)拥有的进程的CPU百分比。
3. 红色：显示系统进程(kernel threads)使用的CPU百分比。
4. 橙色：显示IRQ(中断)时间使用的CPU百分比。
5. 洋红色(Magenta)：显示Soft IRQ(软件中断)时间消耗的CPU百分比。
6. 灰色：显示IO等待时间消耗的CPU百分比。
7. 青色：显示窃取时间(Steal time)消耗的CPU百分比。

### **黄色边框**

提供了内存（Memory）和交换（Swap）使用情况。 类似于CPU中的进度条，内存监视也包含具有多种颜色的进度条：

1. 绿色：显示内存页面占用的RAM百分比
2. 蓝色：显示缓冲区页面占用的RAM百分比
3. 橙色：显示缓存页面占用的RAM百分比

![https://img.idzc.top/picgoimg/202110051810511.png](https://img.idzc.top/picgoimg/202110051810511.png)

### **蓝色边框**

- **第一行 (Tasks, thr, running)**
    - 参考上面的屏幕截图，我们在计算机上运行的106个任务(tasks)被分解为113个线程(thread)，其中只有1个进程处于运行(running)状态。
    - 任务(tasks)是打开的进程总数的代表，但并不是每个打开的进程都在不断消耗CPU。 每个进程都处于几种状态
        - R: Running：表示进程(process)正在使用CPU
        - S: Sleeping: 通常进程在大多数时间都处于睡眠状态，并以固定的时间间隔执行小检查，或者等待用户输入后再返回运行状态。
        - T/S: Traced/Stoped: 表示进程正在处于暂停的状态
        - Z:Zombie or defunct:已完成执行但在进程表中仍具有条目的进程。
        - 更多见：[https://askubuntu.com/questions/1144036/process-status-of-s-s-s-sl](https://askubuntu.com/questions/1144036/process-status-of-s-s-s-sl)
- **第二行 Load Average**
    - 三个值是指系统在最后1分钟，最近5分钟和最后15分钟的平均负载 (0.21,0.19,0.15)
- **第三行 Uptime**
    - 表示这个系统一共运行了多长的时间，这里一共运行了78天
    

### **下半部分**

![https://img.idzc.top/picgoimg/202110051811555.png](https://img.idzc.top/picgoimg/202110051811555.png)

- PID – 描述进程的ID号
- USER – 描述进程的所有者（谁跑的）
- PRI – 描述Linux内核查看的进程优先级
- NI – 描述由用户或root重置的进程优先级
- VIR – 它描述进程正在使用的虚拟内存 （virtual memory）
- RES – 描述进程正在消耗的物理内存（physical memory）
- SHR – 描述进程正在使用的共享内存（shared memory）
- S – 描述流程的当前状态 (state)
- CPU％ – 描述每个进程消耗的CPU百分比
- MEM％ – 描述每个进程消耗的内存百分比
- TIME+ – 显示自流程开始执行以来的时间
- Command –它与每个进程并行显示完整的命令执行 (比如/usr/lib/R)

### htop选项：

-u \<username>：显示指定用户的进程；

-d：设置刷新时间，单位为秒；

-C：设置界面为无颜色；

-s ：以指定的列排序；如htop -s PID

<!--Valine-->