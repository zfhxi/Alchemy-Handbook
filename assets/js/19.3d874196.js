(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{298:function(a,s,t){"use strict";t.r(s);var e=t(10),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"linux通过进程名来杀死进程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux通过进程名来杀死进程"}},[a._v("#")]),a._v(" Linux通过进程名来杀死进程")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token shebang important"}},[a._v("#!/bin/sh")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("kill")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-9")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-ef")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" 进程名 "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("awk")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'{print $2}'")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v("\n")])])]),s("p",[a._v("参考："),s("a",{attrs:{href:"https://blog.csdn.net/qq_38486203/article/details/113634142",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://blog.csdn.net/qq_38486203/article/details/113634142"),s("OutboundLink")],1)]),a._v(" "),s("p",[a._v("如果还要通过用户名来再次过滤，请使用：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("kill")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v(" aux "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" 进程名 "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" 用户名 "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("awk")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'{print $2}'")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\n")])])]),s("p",[a._v("参考："),s("a",{attrs:{href:"https://stackoverflow.com/questions/3510673/find-and-kill-a-process-in-one-line-using-bash-and-regex",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://stackoverflow.com/questions/3510673/find-and-kill-a-process-in-one-line-using-bash-and-regex"),s("OutboundLink")],1)]),a._v(" "),s("p",[a._v("有时需要根据用户筛序，而ps命令一般显示的是"),s("code",[a._v("用户一部分名称+")]),a._v("，可以考虑执行"),s("code",[a._v("ps -o ruser=userForLongName -e -o pid,ppid,c,stime,tty,time,cmd，")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("ruser")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("userForLongName "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" pid,cmd "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" 用户名"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" 进程名"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("awk")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'{print $2}'")]),a._v("\n")])])]),s("p",[a._v("参考："),s("a",{attrs:{href:"https://blog.csdn.net/qq_15682815/article/details/87921482",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://blog.csdn.net/qq_15682815/article/details/87921482"),s("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=r.exports}}]);