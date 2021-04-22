(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{723:function(t,s,a){"use strict";a.r(s);var n=a(46),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("strong",[t._v("使用 DTK 播放系统音效：")])]),t._v(" "),a("p",[t._v("DTK 在 dtkwidget 中对 Linux 平台（Q_OS_LINUX）下提供了播放系统音效的相关接口，DDesktopServices::playSystemSoundEffect()。")]),t._v(" "),a("p",[t._v("当需要播放系统音效时，可以通过 DDesktopServices::playSystemSoundEffect() 静态函数进行调用来达到播放系统音效的目的。其包含两个重载，签名如下：")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[t._v("   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("playSystemSoundEffect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" SystemSoundEffect "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("effect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("playSystemSoundEffect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" QString "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("其中可通过传递 SystemSoundEffect 枚举表示希望播放的系统音效，或直接指定文件名称来进行播放。为了方便移植和维护，一般建议通过传递枚举的形式进行调用。")]),t._v(" "),a("p",[t._v("此外，还提供了如下静态函数所包含的功能：")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[t._v("   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("previewSystemSoundEffect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" SystemSoundEffect "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("effect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("previewSystemSoundEffect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" QString "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" QString "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getNameByEffectType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" SystemSoundEffect "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("effect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("其中，预览音效接口总是会播放对应音效，播放音效则会根据系统是否禁用了对应音效来决定是否实际播放音效。也可以通过上述接口取得对应音效的实际文件名。")]),t._v(" "),a("p",[t._v("目前音效类型枚举包含如下可用的值：")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[t._v("   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("enum")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SystemSoundEffect")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       SSE_Notifications"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       SSE_Screenshot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       SSE_EmptyTrash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       SSE_SendFileComplete"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       SSE_BootUp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       SSE_Shutdown"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       SSE_Logout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       SSE_WakeUp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       SSE_VolumeChange"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       SSE_LowBattery"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       SSE_PlugIn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       SSE_PlugOut"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       SSE_DeviceAdded"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       SSE_DeviceRemoved"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       SSE_Error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("请注意，本页所描述功能均仅在 Linux 平台可用，若需跨平台开发，请考虑判断 Q_OS_LINUX 宏是否定义。")])])}),[],!1,null,null,null);s.default=e.exports}}]);