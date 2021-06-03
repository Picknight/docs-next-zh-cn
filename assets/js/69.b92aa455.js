(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{584:function(s,t,a){"use strict";a.r(t);var e=a(57),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"在-vs-code-中调试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在-vs-code-中调试"}},[s._v("#")]),s._v(" 在 VS Code 中调试")]),s._v(" "),a("p",[s._v("每个应用，不论大小，都需要理解程序是为何运行失败的。在本案例中，我们会探索一些 VS Code 用户在浏览器中调试应用的工作流程。")]),s._v(" "),a("p",[s._v("这个案例展示了如何在 VS Code 中调试浏览器中运行的通过 "),a("a",{attrs:{href:"https://github.com/vuejs/vue-cli",target:"_blank",rel:"noopener noreferrer"}},[s._v("Vue CLI"),a("OutboundLink")],1),s._v(" 生成的 Vue.js 应用。")]),s._v(" "),a("h2",{attrs:{id:"先决条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#先决条件"}},[s._v("#")]),s._v(" 先决条件")]),s._v(" "),a("p",[s._v("请确保你安装了 VS Code 以及适合的浏览器，并且安装激活了最新版的相应的 Debugger 扩展：")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome",target:"_blank",rel:"noopener noreferrer"}},[s._v("Debugger for Chrome"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=hbenl.vscode-firefox-debug",target:"_blank",rel:"noopener noreferrer"}},[s._v("Debugger for Firefox"),a("OutboundLink")],1)])]),s._v(" "),a("p",[s._v("请通过 "),a("a",{attrs:{href:"https://github.com/vuejs/vue-cli",target:"_blank",rel:"noopener noreferrer"}},[s._v("vue-cli"),a("OutboundLink")],1),s._v("，遵循它的 "),a("a",{attrs:{href:"https://cli.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Vue CLI 教程"),a("OutboundLink")],1),s._v("并创建一个项目。然后进入这个新创建的应用的目录，打开 VS Code。")]),s._v(" "),a("h3",{attrs:{id:"在浏览器中展示源代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在浏览器中展示源代码"}},[s._v("#")]),s._v(" 在浏览器中展示源代码")]),s._v(" "),a("p",[s._v("在可以从 VS Code 调试你的 Vue 组件之前，你需要更新 Webpack 配置以构建 source map。做了这件事之后，我们的调试器就有机会将一个被压缩的文件中的代码对应回其源文件相应的位置。这会确保你可以在一个应用中调试，即便你的资源已经被 Webpack 优化过了也没关系。")]),s._v(" "),a("p",[s._v("如果你使用的是 Vue CLI 2，请设置并更新 "),a("code",[s._v("config/index.js")]),s._v(" 内的 "),a("code",[s._v("devtool")]),s._v(" property：")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[s._v("devtool"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" 'source-map'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("如果你使用的是 Vue CLI 3，请设置并更新 "),a("code",[s._v("vue.config.js")]),s._v(" 内的 "),a("code",[s._v("devtool")]),s._v(" property：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  configureWebpack"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    devtool"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'source-map'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"从-vs-code-启动应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从-vs-code-启动应用"}},[s._v("#")]),s._v(" 从 VS Code 启动应用")]),s._v(" "),a("div",{staticClass:"custom-block info"},[a("p",{staticClass:"custom-block-title"},[s._v("INFO")]),a("p",[s._v("我们这里假设端口号为 "),a("code",[s._v("8080")]),s._v("。如果与实际情况不符 (比如 "),a("code",[s._v("8080")]),s._v(" 端口已经被占用且 Vue CLI 为你自动选取了另一个端口号)，可以修改相应的配置。")])]),a("p",[s._v("点击在 Activity Bar 里的 Debugger 图标来到 Debug 视图，然后点击那个齿轮图标来配置一个 launch.json 的文件，选择 "),a("strong",[s._v("Chrome/Firefox: Launch")]),s._v(" 环境。然后将生成的 launch.json 的内容替换成为相应的配置：")]),s._v(" "),a("p",[a("img",{attrs:{src:"/images/config_add.png",alt:"添加 Chrome 配置"}})]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"version"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0.2.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"configurations"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"chrome"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"request"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"launch"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuejs: chrome"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://localhost:8080"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"webRoot"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"${workspaceFolder}/src"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"breakOnLoad"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"sourceMapPathOverrides"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"webpack:///src/*"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"${webRoot}/*"')]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"firefox"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"request"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"launch"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuejs: firefox"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://localhost:8080"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"webRoot"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"${workspaceFolder}/src"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"pathMappings"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"webpack:///src/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"path"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"${webRoot}/"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br")])]),a("h2",{attrs:{id:"设置一个断点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置一个断点"}},[s._v("#")]),s._v(" 设置一个断点")]),s._v(" "),a("ol",[a("li",[s._v("在 "),a("strong",[s._v("src/components/HelloWorld.vue")]),s._v(" 的 "),a("code",[s._v("line 90")]),s._v(" 的地方设置一个断点，这里的 "),a("code",[s._v("data")]),s._v(" 函数返回一个字符串。")])]),s._v(" "),a("p",[a("img",{attrs:{src:"/images/breakpoint_set.png",alt:"断点渲染器"}})]),s._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[s._v("在根目录打开你惯用的终端并使用 Vue CLI 开启这个应用：")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("npm run serve\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[a("p",[s._v("来到 Debug 视图，选择 "),a("strong",[s._v("“vuejs: chrome/firefox”")]),s._v(" 配置，然后按 F5 或点击那个绿色的 play 按钮。")])]),s._v(" "),a("li",[a("p",[s._v("随着一个新的浏览器实例打开 "),a("code",[s._v("http://localhost:8080")]),s._v("，你的断点现在应该被命中了。")])])]),s._v(" "),a("p",[a("img",{attrs:{src:"/images/breakpoint_hit.png",alt:"命中断点"}})]),s._v(" "),a("h2",{attrs:{id:"替代方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#替代方案"}},[s._v("#")]),s._v(" 替代方案")]),s._v(" "),a("h3",{attrs:{id:"vue-devtools"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-devtools"}},[s._v("#")]),s._v(" Vue Devtools")]),s._v(" "),a("p",[s._v("我们还有一些其它的调试方法，复杂度不尽相同。其中最流行和简单的是使用非常棒的 "),a("a",{attrs:{href:"https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd",target:"_blank",rel:"noopener noreferrer"}},[s._v("Chrome 版本"),a("OutboundLink")],1),s._v("和 "),a("a",{attrs:{href:"https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Firefox 版本"),a("OutboundLink")],1),s._v("的 Vue.js devtools。使用 devtools 有很多好处，比如它可以让你能够实时编辑数据 property 并立即看到其反映出来的变化。另一个主要的好处是能够为 Vuex 提供时间旅行式的调试体验。")]),s._v(" "),a("p",[a("img",{attrs:{src:"/images/devtools-timetravel.gif",alt:"Devtools Timetravel Debugger"}})]),s._v(" "),a("p",[s._v("请留意如果页面使用了一个生产环境/压缩后的 Vue.js 构建版本 (例如来自一个 CDN 的标准的链接)，devtools 的审查功能是默认被禁用的，所以 Vue 面板不会出现。如果你切换到一个非压缩版本，你可能需要强制刷新该页面来看到它。")]),s._v(" "),a("h3",{attrs:{id:"简单的-debugger-语句"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简单的-debugger-语句"}},[s._v("#")]),s._v(" 简单的 debugger 语句")]),s._v(" "),a("p",[s._v("上述示例的工作流程非常好。不过这里还有一个替代选项，就是你可以直接在代码中使用"),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/debugger",target:"_blank",rel:"noopener noreferrer"}},[s._v("原生的 debugger 语句"),a("OutboundLink")],1),s._v("。如果你选择了这种方式，请千万记得当你调试完毕之后把这个语句移除。")]),s._v(" "),a("div",{staticClass:"language-vue line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      message"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mounted")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" hello "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Hello World!'")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("debugger")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("message "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" hello\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("h2",{attrs:{id:"致谢"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#致谢"}},[s._v("#")]),s._v(" 致谢")]),s._v(" "),a("p",[s._v("这个案例是基于 "),a("a",{attrs:{href:"https://twitter.com/auchenberg",target:"_blank",rel:"noopener noreferrer"}},[s._v("Kenneth Auchenberg"),a("OutboundLink")],1),s._v(" 贡献的，"),a("a",{attrs:{href:"https://github.com/Microsoft/VSCode-recipes/tree/master/vuejs-cli",target:"_blank",rel:"noopener noreferrer"}},[s._v("可在此"),a("OutboundLink")],1),s._v(" 阅读。")])])}),[],!1,null,null,null);t.default=r.exports}}]);