# 深度学习python代码使用pdb调试

<!--
Tags: 所有用户可食用
category: 环境配置
create_date: October 2, 2021 3:55 PM
description: 适用于没办法用ide调试的场景
-->

## 简介

pdb 模块定义了一个交互式源代码调试器，用于 Python 程序。它支持在源码行间设置（有条件的）断点和单步执行，检视堆栈帧，列出源码列表，以及在任何堆栈帧的上下文中运行任意 Python 代码。它还支持事后调试，可以在程序控制下调用。

## 用法

### 启用pdb的方式

非侵入式（不修改源码，在命令行中启用）

```bash
python3 -m pdb filename.py
```

侵入式（在需调试的源码中添加一行）

```python
import pdb;pdb.set_trace()
```

### pdb指令

<table>
    <tr>
        <td>操作</td>
        <td>指令</td>
        <td>备注</td>
    </tr>
    <tr>
        <td>查看源码list</td>
        <td>l: 查看当前位置前后11行源代码（多次会翻页）<br/>
ll: （longlist）查看当前函数或框架的所有源代码<br/>
l first: 列出first行周围11条代码<br/>
l first,second: 列出first--second范围的代码</td>
        <td>当前位置在代码中会用--&gt;这个符号标出来</td>
    </tr>
    <tr>
        <td>添加断点break</td>
        <td>b: 列出当前所有断点，和断点执行到统计次数<br/>
b lineno: 断点添加到哪一行<br/>
b filename:lineno: 断点添加到某文件的某一行<br/>
b functionname: 在函数执行的第一行设置断点
</td>
        <td></td>
    </tr>
    <tr>
        <td>添加临时断点
temporary break</td>
        <td>tbreak<br/>
tbreak lineno<br/>
tbreak filename:lineno<br/>
tbreak functionname</td>
        <td>相关操作同b</td>
    </tr>
    <tr>
        <td>清除断点
clear</td>
        <td>cl: 清除所有断点，会提示确认（包括临时断点）<br/>
cl filename:lineno: 清除指定文件行的断点<br/>
cl bpnumber [bpnumber ...]: 清除指定序号的断点</td>
        <td>bpnumber 断点序号（多个以空格分隔）</td>
    </tr>
    <tr>
        <td>停用/激活/忽略断点</td>
        <td>disable bpnumber: 停用断点，和cl的区别是，断点依然存在，只是不启用<br/>
enable bpnumber: 激活断点<br/>
ignore bpnumber [count]: 为指定的断点编号设置忽略次数。</td>
        <td>如果省略 count，则忽略次数将设置为 0。</td>
    </tr>
    <tr>
        <td>条件断点</td>
        <td>condition bpnumber [condition]: 为断点设置一个新 condition，它是一个表达式，且它的计算值为 true 时断点才起作用。</td>
        <td>如果没有给出 condition，则删除现有条件，也就是将断点设为无条件。</td>
    </tr>
    <tr>
        <td>打印变量值
print</td>
        <td>p expression<br/>
pp expression: pretty print</td>
        <td></td>
    </tr>
    <tr>
        <td>逐行调试</td>
        <td>s: （step）执行下一条命令<br/>
n: （next）执行下一条语句<br/>
r: （return）执行当前运行函数到结束</td>
        <td></td>
    </tr>
    <tr>
        <td>非逐行调试</td>
        <td>c: （continue）继续执行，直到遇到下一条断点<br/>
unt lineno: （until）执行到指定行<br/>
j lineno: （jump）直接跳转到指定行（被跳过的代码不执行）</td>
        <td></td>
    </tr>
    <tr>
        <td>查看函数参数
args</td>
        <td>a: 在函数中时打印当前函数的参数列表</td>
        <td></td>
    </tr>
    <tr>
        <td>打印变量类型</td>
        <td>whatis expression</td>
        <td></td>
    </tr>
    <tr>
        <td>启动交互式解释器</td>
        <td>interact: 启动一个python的交互式解释器，使用当前代码的全局命名空间（使用ctrl+d返回pdb）</td>
        <td></td>
    </tr>
    <tr>
        <td>打印堆栈信息
where</td>
        <td>w: 打印堆栈信息，最新的帧在最底部。箭头表示当前帧。</td>
        <td></td>
    </tr>
    <tr>
        <td>退出pdb</td>
        <td>q</td>
        <td></td>
    </tr>
</table>

## 参考

[https://zhuanlan.zhihu.com/p/37294138](https://zhuanlan.zhihu.com/p/37294138)

[https://docs.python.org/zh-cn/3/library/pdb.html](https://docs.python.org/zh-cn/3/library/pdb.html)

[https://www.cnblogs.com/klb561/p/12057436.html](https://www.cnblogs.com/klb561/p/12057436.html)
<!--Valine-->