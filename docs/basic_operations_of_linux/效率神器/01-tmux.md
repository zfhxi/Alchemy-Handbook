# tmux使用简记

<!--
Tags: 所有用户可食用
category: 效率神器
create_date: October 2, 2021 3:53 PM
description: tmux简单记录
-->

## 概念

tmux 是一个终端复用器（terminal multiplexer）

tmux中的重要概念

1. 会话(session): 建立一个 tmux 工作区会话，会话可以长期驻留，重新连接服务器不会丢失，我们只需重新 tmux attach 到之前的工作区就可以恢复会话，这样你的工作区就可以常驻服务器了，非常方便
2. 窗口(window): 容纳多个窗格
3. 窗格(pane): 可以在窗口中分成多个窗格，每个窗格都可以运行各种命令

![https://img.idzc.top/picgoimg/202108170002169.png](https://img.idzc.top/picgoimg/202108170002169.png)

安装过程略，暂未研究配置。下面直接开始记录三个概念中的常用操作

## 使用基础

### 系统指令

| 操作       | 快捷键          |
|----------|--------------|
| 帮助文档     | &lt;CB&gt; ? |
| 强制重载当前会话 | &lt;CB&gt; r |
| 进入命令行模式  | &lt;CB&gt; : |


### 会话

声明：tmux中前缀键为`ctrl+b`，以下简记为`<CB>`，用于激活控制台，激活后快捷键才生效

<table>
    <tr>
        <td>操作</td>
        <td>命令</td>
        <td>快捷键</td>
        <td>备注</td>
        <td>适用坐标</td>
    </tr>
    <tr>
        <td>[常用]新建会话</td>
        <td>tmux
tmux new -s &lt;session_name&gt;</td>
        <td>新建无名会话
新建名为session_name的会话</td>
        <td>终端中</td>
    </tr>
    <tr>
        <td>[常用]分离会话&amp;挂起会话</td>
        <td>tmux detach</td>
        <td>&lt;CB&gt; d
&lt;CB&gt; ctrl z
&lt;CB&gt; D</td>
        <td>将当前会话分离到后台运行，并返回终端，使用&lt;CB&gt; ctrl z也可以实现类似分离效果，&lt;CB&gt; D在多个会话被载入时可选择分离其他会话</td>
        <td>会话中
其他会话中</td>
    </tr>
    <tr>
        <td>[常用]载入会话</td>
        <td>tmux a[ttach-session]
tmux a[ttach-session] -t &lt;session_name</td>
        <td>从终端默认载入第一个会话
载入指定名的会话</td>
        <td>终端中</td>
    </tr>
    <tr>
        <td>[常用]列出所有会话</td>
        <td>tmux list-session or tmux ls</td>
        <td>&lt;CB&gt; s</td>
        <td>快捷键仅用于会话中，可上下选择载入其他会话</td>
        <td>终端或会话</td>
    </tr>
    <tr>
        <td>切换会话</td>
        <td>tmux switch -t &lt;session_name&gt;</td>
        <td>切入到指定会话</td>
        <td>会话中</td>
    </tr>
    <tr>
        <td>重命名会话</td>
        <td>tmux rename-session -t &lt;session_name&gt; &lt;new_name&gt;</td>
        <td>&lt;CB&gt; $</td>
        <td>快捷键仅是命名当前会话</td>
        <td>终端或会话</td>
    </tr>
    <tr>
        <td>终止会话</td>
        <td>tmux kill-session -t &lt;session_name&gt;
tmux kill-server</td>
        <td>终止指定名会话（也可以是编号），可终止自身
关闭服务器，终止所有会话</td>
        <td>终端或会话</td>
    </tr>
</table>

### 窗口

<table>
    <tr>
        <td>操作</td>
        <td>快捷键</td>
        <td>备注</td>
    </tr>
    <tr>
        <td>[常用]新建窗口</td>
        <td>&lt;CB&gt; c</td>
        <td>在当前会话新建窗口，左下角窗口列表新增一项</td>
    </tr>
    <tr>
        <td>[常用]关闭窗口</td>
        <td>&lt;CB&gt; &amp;</td>
        <td>需要输入[y/n]来确认</td>
    </tr>
    <tr>
        <td>[常用]切换窗口</td>
        <td>&lt;CB&gt; [&#x27;] 0-9
&lt;CB&gt; p，&lt;CB&gt; n</td>
        <td>切换到指定窗口
切换到前/下一个窗口</td>
    </tr>
    <tr>
        <td>[常用]窗口列表</td>
        <td>&lt;CB&gt; w</td>
        <td>打开窗口列表，可选择切换窗口</td>
    </tr>
    <tr>
        <td>[常用]重命名窗口</td>
        <td>&lt;CB&gt; ,</td>
        <td>为当前窗口重新命名</td>
    </tr>
    <tr>
        <td>修改窗口编号</td>
        <td>&lt;CB&gt; .</td>
        <td>为当前窗口重新赋值编号，所有窗口再按编号排序</td>
    </tr>
    <tr>
        <td>检索窗口</td>
        <td>&lt;CB&gt; f</td>
        <td>快速定位到含有关键字的窗口</td>
    </tr>
</table>

### 面板

<table>
    <tr>
        <td>操作</td>
        <td>快捷键</td>
        <td>备注</td>
    </tr>
    <tr>
        <td>[常用]新建面板</td>
        <td>&lt;CB&gt; &quot;
&lt;CB&gt; %</td>
        <td>在当前面板下侧新建面板
在当前面板右侧新建面板</td>
    </tr>
    <tr>
        <td>[常用]关闭面板</td>
        <td>&lt;CB&gt; x</td>
        <td>需要输入[y/n]来确认</td>
    </tr>
    <tr>
        <td>[常用]切换面板</td>
        <td>&lt;CB&gt; 方向键
&lt;CB&gt; o</td>
        <td>切换到指定方向的面板
循环切换到下一面板</td>
    </tr>
    <tr>
        <td>新窗口打开面板</td>
        <td>&lt;CB&gt; !</td>
        <td>需窗口中有一个以上的面板</td>
    </tr>
    <tr>
        <td>查看面板编号</td>
        <td>&lt;CB&gt; q</td>
        <td>在编号消失前输入数字可切换到指定面板</td>
    </tr>
    <tr>
        <td>顺时针移位面板</td>
        <td>&lt;CB&gt; ctrl＋o</td>
        <td>将当前窗口所有面板按顺时针移位</td>
    </tr>
    <tr>
        <td>置换面板</td>
        <td>&lt;CB&gt; {
&lt;CB&gt; }</td>
        <td>向前置换面板
向后置换面板</td>
    </tr>
    <tr>
        <td>最大化面板</td>
        <td>&lt;CB&gt; z</td>
        <td>执行第二次还原大小</td>
    </tr>
    <tr>
        <td>调整面板大小</td>
        <td>&lt;CB&gt; alt+方向键
&lt;CB&gt; ctrl+方向键</td>
        <td>以５单元格调整面板边缘
以１单元格调整面板边缘</td>
    </tr>
    <tr>
        <td>显示时钟</td>
        <td>&lt;CB&gt; t</td>
        <td>当前面板显示时钟</td>
    </tr>
    <tr>
        <td>循环改变面板布局</td>
        <td>&lt;CB&gt; 空格键</td>
        <td>在自带的面板布局中循环切换</td>
    </tr>
</table>


## 高级操作

### 远程shell默认开启tmux（不建议这种操作，我最近失败了）

在 `~/.bash_profile` 文件添加：

```bash
if [ -z "$TMUX" ]; then
    tmux attach -t default || tmux new -s default
fi
```

### 配置文件

1. 新建`~/.tmux.conf`
2. 修改配置。使用oh-my-tmux可参考[https://zhuanlan.zhihu.com/p/112426848](https://zhuanlan.zhihu.com/p/112426848)
3. 在会话中使用`<CB> :`，输入系统命令`source-file ~/.tmux.conf`重载配置

我的配置

先安装oh-my-tmux：[https://github.com/gpakosz/.tmux](https://github.com/gpakosz/.tmux)

```bash
tmux_conf_theme_left_separator_main='\uE0B0'  # /!\ you don't need to install Power      line
tmux_conf_theme_left_separator_sub='\uE0B1'   #   you only need fonts patched with
tmux_conf_theme_right_separator_main='\uE0B2' #   Powerline symbols or the standalo
tmux_conf_theme_right_separator_sub='\uE0B3'  #   

tmux_conf_theme_status_right=" #{prefix}#{mouse}#{pairing}#{synchronized}#{?battery_status,#{battery_status},}#{?battery_bar, #{battery_bar},}#{?battery_percentage, #{battery_percentage},} %R , %d %b | #{username}#{root} | #{hostname} "

# 修改会话数据的保持路径，此处不能使用除了$HOME, $HOSTNAME, ~之外的环境变量
set -g @resurrect-dir '/home/julian/AppLogs/tmux'
# set -g @continuum-restore 'on' # 启用自动恢复
set -g @continuum-save-interval '15'
setw -g mode-keys vi # 复制模式的光标移动风格改为vi模式

run-shell ~/.tmux/plugins/tmux-resurrect/resurrect.tmux
run-shell ~/.tmux/plugins/tmux-continuum/continuum.tmux

bind -r m set-option -g mouse on # 鼠标模式开启
bind -r M set-option -g mouse off # 鼠标模式关闭
```

### 开启鼠标支持

v2.1之前，配置文件中加入

```bash
setw -g mode-mouse on # 支持鼠标选取文本等
setw -g mouse-resize-pane on # 支持鼠标拖动调整面板的大小(通过拖动面板间的分割线)
setw -g mouse-select-pane on # 支持鼠标选中并切换面板
setw -g mouse-select-window on # 支持鼠标选中并切换窗口(通过点击状态栏窗口名称)
```

v2.1之后

```bash
set-option -g mouse on # 等同于以上4个指令的效果
```

### **复制模式**

１．查看复制模式默认快捷键风格：`tmux show-window-options -g mode-keys # mode-keys emacs`

２．切换为`vi`模式：`tmux setw -g mode-keys vi`（建议加入配置文件中），开启vi风格后，支持vi的C-d、C-u、hjkl等快捷键

３．`<CB> [`进入复制模式，

- 移动光标到需要复制的内容的起点
- 按空格开始复制
- 移动到终点
- 按回车结束

４．`<CB> ]`粘贴复制的内容

### 多个窗口合并为面板

在当前窗口，按下`<CB> :`，打开命令行，然后输入如下命令：

```bash
join-pane -s [window] # 合并名称为window的窗口的默认（第一个）面板到当前窗口中
join-pane -s [window].1 # .1显式指定了第一个面板，.2就是第二个面板
```

每次执行join-pane命令都会合并一个面板，并且指定的窗口会减少一个面板，直到面板数量为0，窗口关闭。

除了在当前会话中操作外，join-pane命令甚至可以从其它指定会话中合并面板，格式为

```bash
join-pane -s [session_name]:[window].[pane]
```

如`join-pane -s 2:1.1` 即合并第二个会话的第一个窗口的第一个面板到当前窗口，当目标会话的窗口和面板数量为0时，会话便会关闭。

## 参考

[http://www.ruanyifeng.com/blog/2019/10/tmux.html](http://www.ruanyifeng.com/blog/2019/10/tmux.html)

[https://zhuanlan.zhihu.com/p/43687973](https://zhuanlan.zhihu.com/p/43687973)

[http://louiszhai.github.io/2017/09/30/tmux/](http://louiszhai.github.io/2017/09/30/tmux/)
<!--Valine-->