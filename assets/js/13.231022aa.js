(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{292:function(t,a,s){"use strict";s.r(a);var e=s(10),r=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"linux挂载硬盘"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux挂载硬盘"}},[t._v("#")]),t._v(" Linux挂载硬盘")]),t._v(" "),a("p",[t._v("这里主要考虑usb移动硬盘，并且主要考虑ext4和ntfs两种格式")]),t._v(" "),a("h2",{attrs:{id:"手动挂载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#手动挂载"}},[t._v("#")]),t._v(" 手动挂载")]),t._v(" "),a("h3",{attrs:{id:"挂载ext4盘"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#挂载ext4盘"}},[t._v("#")]),t._v(" 挂载ext4盘")]),t._v(" "),a("p",[t._v("直接执行")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" /mnt/diskxxx\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mount")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-t")]),t._v(" ext4 /dev/sdxxx /mnt/diskxxx\n")])])]),a("h3",{attrs:{id:"挂载ntfs盘"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#挂载ntfs盘"}},[t._v("#")]),t._v(" 挂载NTFS盘")]),t._v(" "),a("p",[t._v("首先参考"),a("a",{attrs:{href:"https://www.linuxprobe.com/partition-file-system.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.linuxprobe.com/partition-file-system.html"),a("OutboundLink")],1),t._v("查看硬盘分区Type（ext4？ntfs？）")]),t._v(" "),a("p",[t._v("其中经测试的靠谱的命令是在su下，"),a("code",[t._v("blkid")]),t._v("和"),a("code",[t._v("lsblk -f")])]),t._v(" "),a("p",[t._v("1）Debian系列安装相关包：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" fuse-utils ntfs-3g\n")])])]),a("p",[t._v("然后参考"),a("a",{attrs:{href:"https://blog.csdn.net/liushall/article/details/80684997",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://blog.csdn.net/liushall/article/details/80684997"),a("OutboundLink")],1),t._v("，"),a("a",{attrs:{href:"https://blog.csdn.net/wangxiaopeng0329/article/details/52786165",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://blog.csdn.net/wangxiaopeng0329/article/details/52786165"),a("OutboundLink")],1),t._v("输入以下命令实现挂载：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mount")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-t")]),t._v(" ntfs-3g /dev/"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("sdXX"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  /mnt/"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("DIR"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 或者")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mount")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-t")]),t._v(" ntfs "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-w")]),t._v(" /dev/sdb* /mnt/xxx\n")])])]),a("p",[t._v("有时取消挂载时会返回"),a("code",[t._v("target is busy")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("umount")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-l")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-f")]),t._v(" /dev/sd*\n")])])]),a("p",[t._v("2）Arch系列安装相关包：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" pacman "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-S")]),t._v(" ntfs-3g\n")])])]),a("p",[t._v("参考"),a("a",{attrs:{href:"https://wiki.archlinux.org/title/NTFS-3G",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://wiki.archlinux.org/title/NTFS-3G"),a("OutboundLink")],1),t._v("来执行：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" /mnt/diskxxx\nntfs-3g /dev/your_NTFS_partition /mnt/diskxxx\n")])])]),a("h2",{attrs:{id:"自动挂载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动挂载"}},[t._v("#")]),t._v(" 自动挂载")]),t._v(" "),a("p",[t._v("需要修改"),a("code",[t._v("/etc/fstab")]),t._v("文件。")]),t._v(" "),a("p",[t._v("推荐使用UUID方式添加盘，防止系统在某种不确定因素导致磁盘如/dev/sdxxx的这种label发生了变化。")]),t._v(" "),a("h3",{attrs:{id:"查看磁盘uuid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看磁盘uuid"}},[t._v("#")]),t._v(" 查看磁盘UUID")]),t._v(" "),a("p",[t._v("1）参考"),a("a",{attrs:{href:"https://wiki.archlinux.org/title/Fstab",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://wiki.archlinux.org/title/Fstab"),a("OutboundLink")],1)]),t._v(" "),a("blockquote",[a("p",[t._v("Run lsblk -f to list the partitions, and prefix the values in the UUID column with UUID= or alternatively run blkid and use the UUID values without the quotes::")])]),t._v(" "),a("p",[t._v("2）"),a("code",[t._v("ls -lt /dev/disk/by-uuid")])]),t._v(" "),a("p",[t._v("3）"),a("code",[t._v("lsblk -f")])]),t._v(" "),a("h3",{attrs:{id:"ext4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ext4"}},[t._v("#")]),t._v(" EXT4")]),t._v(" "),a("p",[t._v("参考"),a("a",{attrs:{href:"https://wiki.archlinux.org/title/Fstab",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://wiki.archlinux.org/title/Fstab"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# <device>                        <dir>   <type> <options> <dump> <fsck>")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("UUID")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("b411dc99-f0a0-4c87-9e05- /mnt/diskxxx ext4   defaults  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n")])])]),a("h3",{attrs:{id:"ntfs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ntfs"}},[t._v("#")]),t._v(" NTFS")]),t._v(" "),a("p",[t._v("参考"),a("a",{attrs:{href:"https://wiki.archlinux.org/title/NTFS-3G",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://wiki.archlinux.org/title/NTFS-3G"),a("OutboundLink")],1),t._v("，针对ntfs，在安装上面的ntfs-3g包之后添加如下记录：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# <device>      <dir>            <type>  <options> <dump> <fsck>")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("UUID")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("xxxxxxx\t\t/mnt/diskxxx\t\tntfs-3g \tdefaults\t  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("      \t"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);