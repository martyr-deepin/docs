(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{729:function(t,s,a){"use strict";a.r(s);var e=a(46),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("strong",[t._v("简  述：")]),t._v("　有人问，"),a("code",[t._v("DTK")]),t._v(" 怎么配置开发环境？ 我头上有呆毛了，，，又水一篇，确实没想到问的人会有这么多。")]),t._v(" "),a("p",[t._v("[TOC]")]),t._v(" "),a("br"),t._v(" "),a("blockquote",[a("p",[t._v("本文初发于 "),a("strong",[t._v("偕臧")]),t._v(" "),a("a",{attrs:{href:"https://xmuli.tech",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://xmuli.tech"),a("OutboundLink")],1),t._v("，同步转载于此。")])]),t._v(" "),a("br"),t._v(" "),a("h2",{attrs:{id:"准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#准备"}},[t._v("#")]),t._v(" 准备")]),t._v(" "),a("p",[t._v("在官网下载 "),a("code",[t._v("uniontechos-desktop-20-professional-1030-fix_amd64")]),t._v("  镜像（或找测试小仙女们要一个最新的），常规装系统后，顺利进入到桌面；")]),t._v(" "),a("br"),t._v(" "),a("h2",{attrs:{id:"开启开发者模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开启开发者模式"}},[t._v("#")]),t._v(" 开启开发者模式")]),t._v(" "),a("p",[t._v("进入 "),a("code",[t._v("控制中心-通用-开发者模式-进入开发者模式")]),t._v("，激活开发者模式成功后，重启系统；")]),t._v(" "),a("img",{attrs:{src:"https://raw.githubusercontent.com/xmuli/xmuliPic/pic/2020/20201231152215.png",width:"60%"}}),t._v(" "),a("br"),t._v(" "),a("h2",{attrs:{id:"配置dtk-开发环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置dtk-开发环境"}},[t._v("#")]),t._v(" 配置DTK 开发环境")]),t._v(" "),a("p",[a("font",{attrs:{size:"4",color:"#FF0000"}},[t._v(" 将第二行的 "),a("code",[t._v("deb-src")]),t._v(" 的注释解开，更新源（若使用内网源，下载某些软件失败，记得换源）")]),t._v("，最后外网镜像默认自带的源如下")],1),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Generated by deepin-installer")]),t._v("\ndeb "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("by-hash"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("force"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" https://professional-packages.chinauos.com/desktop-professional eagle main contrib non-free\ndeb-src "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("by-hash"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("force"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" https://professional-packages.chinauos.com/desktop-professional eagle main contrib non-free\n")])])]),a("br"),t._v(" "),a("p",[t._v("看了一下，默认 "),a("code",[t._v("gcc")]),t._v(" = 4.8.3，无 "),a("code",[t._v("g++")]),t._v(" 、无 "),a("code",[t._v("cmake")]),t._v("、无 "),a("code",[t._v("git")]),t._v("；")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 更新源")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" update\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# C++ 开发环境配置好了")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" qt5-default qtcreator cmake  g++ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# DTK 开发环境配置好了")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" libdtkwidget-dev libdtkgui-dev libdtkcore-dev \n")])])]),a("br"),t._v(" "),a("h2",{attrs:{id:"验证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#验证"}},[t._v("#")]),t._v(" 验证")]),t._v(" "),a("h3",{attrs:{id:"验证-c-开发环境-配置是否成功"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#验证-c-开发环境-配置是否成功"}},[t._v("#")]),t._v(" 验证 C++ 开发环境 配置是否成功：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("开 "),a("code",[t._v("QtCreator")]),t._v(" ，创建一个空的 "),a("code",[t._v("Qt")]),t._v(" 空项目，执行运行，发现 "),a("strong",[t._v("C++ 开发环境")]),t._v("  配置成功。")]),t._v(" "),a("img",{attrs:{src:"https://raw.githubusercontent.com/xmuli/xmuliPic/pic/2020/20201231172208.png",width:"80%"}})])]),t._v(" "),a("br"),t._v(" "),a("h3",{attrs:{id:"验证-dtk-开发环境-配置是否成功"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#验证-dtk-开发环境-配置是否成功"}},[t._v("#")]),t._v(" 验证 DTK 开发环境 配置是否成功：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("执行 "),a("code",[t._v("git clone https://github.com/linuxdeepin/dtkcore.git")]),t._v("， 下载源码")])]),t._v(" "),a("li",[a("p",[t._v("进入文件夹 "),a("code",[t._v("dtkcore")]),t._v("， 执行 "),a("code",[t._v("sudo apt build-dep dtkcore")]),t._v(" 生成依赖")])]),t._v(" "),a("li",[a("p",[t._v("执行 "),a("code",[t._v("sudo apt policy libdtkcore5")]),t._v("，看到"),a("strong",[t._v("本机显示")]),t._v(" "),a("code",[t._v("libdtkcore5 为 5.4.0")])])]),t._v(" "),a("li",[a("p",[t._v("执行 "),a("code",[t._v("git checkout 5.4.0")]),t._v(" 切换分支")])]),t._v(" "),a("li",[a("p",[t._v("用 "),a("code",[t._v("QtCreator")]),t._v(" 打开 "),a("code",[t._v("dtkcore.pro")]),t._v("， 点击编译运行，为 "),a("strong",[t._v("DTK 开发环境")]),t._v("  配置成功。")]),t._v(" "),a("img",{attrs:{src:"https://raw.githubusercontent.com/xmuli/xmuliPic/pic/2020/20201231172007.png",width:"80%"}})])]),t._v(" "),a("br"),t._v(" "),a("h3",{attrs:{id:"验证其它项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#验证其它项目"}},[t._v("#")]),t._v(" 验证其它项目")]),t._v(" "),a("p",[t._v("如验证 "),a("code",[t._v("dtkwidget")]),t._v(" 开发项目，因为其依赖于 "),a("code",[t._v("dtkcore")]),t._v(" 和 "),a("code",[t._v("dtkgui")]),t._v("，所以推荐配置其对应的 "),a("code",[t._v("tag")]),t._v(" 这三者是一致的（一般来说，都是各自最新也不会有什么问题，向下兼容很稳定了）。")]),t._v(" "),a("p",[t._v("且"),a("code",[t._v("dtkwidget")]),t._v(" 若是运行在虚拟机，若是内存仅 2G，会编译失败；调整为 >= 4G 即可；"),a("font",{attrs:{size:"4",color:"#FF0000"}},[a("strong",[t._v("若是其它项目生成项目依赖，也都是如此。")])])],1),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" build-dep 项目名  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 生成项目依赖")]),t._v("\n")])])]),a("p",[t._v("比如 "),a("code",[t._v("dtkwidget")]),t._v(" 运行后：")]),t._v(" "),a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/xmuli/xmuliPic@pic/2020/20210105155933.png",width:"70%"}}),t._v(" "),a("br"),t._v(" "),a("h2",{attrs:{id:"命令配置更新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命令配置更新"}},[t._v("#")]),t._v(" 命令配置更新")]),t._v(" "),a("p",[t._v("为了便于配置 "),a("code",[t._v("DTK")]),t._v(" 的开发环境，也可直接执行如下：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# deepin-sdk 为虚包，相当于安装 libdtkwidget-dev libdtkgui-dev libdtkcore-dev ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 为自动生成 DTK 项目模板")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" deepin-sdk qtcreator-template-dtk\n")])])]),a("br"),t._v(" "),a("h2",{attrs:{id:"个人习惯"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#个人习惯"}},[t._v("#")]),t._v(" 个人习惯")]),t._v(" "),a("p",[t._v("附上个人习惯的开发环境，可自行决定：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# gammaray： 安装 Qt 调试工具 ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# flameshot: 安装截图工具")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# com.notepadqq.notepadqq: 安装 notepadqq； "设置-首选项-外观"选择duotone-light')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# gitg: git 可视化工具")]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 商店里面安装讯飞输入法、typora、wps（或官网里面的）")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" gammaray flameshot com.notepadqq.notepadqq tree gitg\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" qt5-default    // qt源码包，此会安装在当前所处目录下，建议更换目录再执行\n")])])]),a("p",[t._v("同时安装 "),a("code",[t._v("dde-dock")]),t._v(" 网速插件: "),a("a",{attrs:{href:"https://github.com/xmuli/lfxspeed",target:"_blank",rel:"noopener noreferrer"}},[t._v("lfxspeed"),a("OutboundLink")],1),t._v("  或  "),a("a",{attrs:{href:"https://github.com/xmuli/lfxNet",target:"_blank",rel:"noopener noreferrer"}},[t._v("lfxNet"),a("OutboundLink")],1),t._v("；")]),t._v(" "),a("br"),t._v(" "),a("p",[a("strong",[t._v("附：")])]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://blog.csdn.net/qq_33154343/article/details/106510975",target:"_blank",rel:"noopener noreferrer"}},[t._v("重装uos/deepin v20后必安装软件(个人习惯)"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://blog.csdn.net/qq_33154343/article/details/103733327",target:"_blank",rel:"noopener noreferrer"}},[t._v("安装UOS20，在uos20里面安装QtCreator，配置dtk开发环境"),a("OutboundLink")],1)])]),t._v(" "),a("br"),t._v(" "),a("h3",{attrs:{id:"系列地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#系列地址"}},[t._v("#")]),t._v(" 系列地址：")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/xmuli/QtExamples",target:"_blank",rel:"noopener noreferrer"}},[t._v("QtExamples"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("欢迎 "),a("code",[t._v("star")]),t._v(" 和 "),a("code",[t._v("fork")]),t._v(" 这个系列的 "),a("code",[t._v("QT / DTK")]),t._v(" 学习，附学习由浅入深的目录。")])])}),[],!1,null,null,null);s.default=r.exports}}]);