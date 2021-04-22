(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{695:function(t,e,v){"use strict";v.r(e);var _=v(46),i=Object(_.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("p",[v("strong",[t._v("DTK问题判定方法")])]),t._v(" "),v("p",[t._v("由于DTK范围较广，所以涉及到的问题也较多，在此只大致说说如何判断一个问题是不是DTK的问题。")]),t._v(" "),v("p",[t._v("要判断一个锅是不是DTK的，那我们首先得对DTK有一个基本的认识，包括它的功能、实现的原理，如此说来那要了解的东西就太多了，由于篇幅限制，在此只做最基本的分享，起一个抛砖引玉的作用，欢迎有兴趣深入了解的同学拍砖和更深层次的分享。")]),t._v(" "),v("p",[t._v("我们的@张文耕同学"),v("RouterLink",{attrs:{to:"/01.DTK/04.Dtk的历史起源、发展，和简单入门.html"}},[t._v("这篇文章")]),t._v("写的非常精彩，是了解DTK不可多得的精品。")],1),t._v(" "),v("p",[t._v("DTK的问题主要是集中在界面显示上，当然也会有一些其他的问题是DTK的锅（比如https://pms.uniontech.com/zentao/story-view-3778.html）。")]),t._v(" "),v("p",[t._v("判断一个问题是不是DTK问题，首先要确定两点：")]),t._v(" "),v("p",[t._v("1、该问题由什么原因导致。")]),t._v(" "),v("p",[t._v("2、导致该问题的原因是DTK的Bug吗。")]),t._v(" "),v("p",[t._v("看了上面两句话，我也觉得是废话，但是您莫笑，它还真就需要这样判断。")]),t._v(" "),v("p",[t._v("下面我们还是来看看DTK的功能以及大致实现原理吧，说大致是因为我自己也不太确定它的准确性和权威性，因为也是我自己通过学习源码以及跟DTK前辈以及同学请教自己分析得到的，只是一家之言，仅供大家参考。")]),t._v(" "),v("p",[t._v("目前DTK分为dtkcore、dtkwidget、dtkgui和qt5integration,关于它们的功能，借用一下@张文耕同学的总结：")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"center"}},[t._v("项目")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("功能描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("dtkcore")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("提供应用程序开发中的工具类，如程序日志、文件系统监控、格式转换等工具类")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("dtkgui")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("包含了开发图形用户界面应用程序所需的功能。主要是控制窗口主题这种外观性，调色板等信息。")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("dtkwidget")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("提供各种dtk基础控件，方便开发统一风格的应用。")])])])]),t._v(" "),v("p",[t._v("由于 qt5integratioin 项目一直是独立的，本不算 dtk 项目里的一员，不过实际上是和 dtk 配套的，故本文算到 dtk 框架中。")]),t._v(" "),v("p",[t._v("以下都是我的个人理解，供大家参考，如有错误，欢迎大家指正。")]),t._v(" "),v("p",[t._v("从源码中看出，qt5integratioin主要是DTK控件样式控制，目前系统中支持两种主题：深色和浅色主题。")]),t._v(" "),v("p",[t._v("qt5integratioin项目中我们最需要了解的就是ChameleonStyle，大部分的DTK控件都是调用它的接口绘制的，它是继承DStyle的，DStyle继承于QCommonStyle，可以这么说，ChameleonStyle、DStyle和QCommonStyle三个类基本上承包了DTK所有控件的绘制，DTK所有控件的绘制样式找它们准没错。")]),t._v(" "),v("p",[t._v("系统主题配色是由dtkgui控制的，主要参考DPalette类，该类继承于QPalette，主要控制DTK配色。dtkgui类似于Qt的gui库，还提供了DGuiApplicationHelper单例类，该类提供系统配色的设置和获取等接口，和DPalette一起实现系统配色。")]),t._v(" "),v("p",[t._v("从上面的功能大致可以看出，99%的界面或显示问题都是dtkwidget、qt5integration、dtkgui这三位大哥的锅，而这三位大哥的锅也各有偏好：")]),t._v(" "),v("p",[t._v("1、dtkwidget 多是控件类的，比如某个控件长的不是我们想要的样子。")]),t._v(" "),v("p",[t._v("2、qt5integration多是控件样式类的，比如某个控件外框多了线或者线的粗细与UI设计不一致等等。")]),t._v(" "),v("p",[t._v("3、dtkgui包括配色、窗口特效、窗口行为等，比如某个控件的前景色、背景色与UI设计不一致等等。")]),t._v(" "),v("p",[t._v("总的来说可以通过以下几步来判断一个问题是不是DTK的锅：")]),t._v(" "),v("p",[t._v("1、首先问题涉及到DTK日志模块、文件系统监控、格式转换、控件样式、颜色等。")]),t._v(" "),v("p",[t._v("2、如果条件1满足，那么再看是不是在最新DTK库下，其他的应用或控件也都有这个问题，也就是调用DTK相关接口的应用都有此问题，如果是基本上就可以确定是DTK的问题了。")]),t._v(" "),v("p",[t._v("以上两条也只是一个基本的判断，如果能找到问题的真正原因当然就更好了。")])])}),[],!1,null,null,null);e.default=i.exports}}]);