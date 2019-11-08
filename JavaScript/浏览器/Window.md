window 对象表示一个包含DOM文档的窗口，其 document 属性指向窗口中载入的 DOM文档 。使用 document.defaultView 属性可以获取指定文档所在窗口。

window作为全局变量，代表了脚本正在运行的窗口，暴露给 Javascript 代码。

本节为 DOM Window 对象中可用的所有方法、属性和事件提供简要参考。window 对象实现了 Window 接口，此接口继承自 AbstractView 接口。一些额外的全局函数、命名空间、对象、接口和构造函数与 window 没有典型的关联，但却是有效的，它们在 JavaScript参考 和 DOM参考 中列出。

在有标签页功能的浏览器中，每个标签都拥有自己的 window 对象；也就是说，同一个窗口的标签页之间不会共享一个 window 对象。有一些方法，如 window.resizeTo 和 window.resizeBy 之类的方法会作用于整个窗口而不是 window 对象所属的那个标签。一般而言，如果一样东西无法恰当地作用于标签，那么它就会作用于窗口。
#### Window 对象属性

| 属性	         | 描述                     |
| ---            | ---                     |
| closed	     | 返回窗口是否关闭。 |
| console	     | 返回 console 对象，提供了对浏览器调试控制台的访问。 |
| customElements | 返回对CustomElementRegistry对象的引用，该对象可用于注册新的自定义元素并获取有关先前注册的自定义元素的信息。 |
| crypto     	 | 返回浏览器 crypto 对象。 |
| devicePixelRatio | 返回当前显示器的物理像素和设备独立像素的比例。 |
| document	     | 对 Document 对象的只读引用。(请参阅对象) |
| event	         | 返回当前事件，当前事件是JavaScript代码上下文当前正在处理的事件，<br />如果当前未处理任何事件，则返回undefined。 应尽可能使用直接传递给事件处理程序的Event对象。 |
| frameElement	 | 返回嵌入窗口的元素，如果未嵌入窗口，则返回null。 |
| frames	     | 返回当前窗口中所有子窗体的数组。每个 Window 对象在窗口中含有一个框架。 |
| length	     | 返回窗口中的 frames 数量。参见 window.frames。 |
| fullScreen	 | 此属性表示窗口是否以全屏显示。 |
| history	     | 对 History 对象的只读引用。请参数 History 对象。 |
| innerHeight	 | 获得浏览器窗口的内容区域的高度，包含水平滚动条(如果有的话)。 |
| innerWidth	 | 获得浏览器窗口的内容区域的宽度，包含垂直滚动条(如果有的话)。 |
| localStorage	 | 在浏览器中存储 key/value 对。没有过期时间。 |
| location	     | 用于窗口或框架的 Location 对象。请参阅 Location 对象。 |
| locationbar	 | 返回 locationbar 对象，其可视性可以在窗口中切换。 |
| menubar	     | 返回菜单条对象，它的可视性可以在窗口中切换。 |
| name	         | 设置或返回窗口的名称。 |
| navigator	     | 对 Navigator 对象的只读引用。请参数 Navigator 对象。 |
| opener	     | 返回对创建此窗口的窗口的引用。 |
| outerHeight	 | 返回窗口的外部高度，包含工具条与滚动条。 |
| outerWidth	 | 返回窗口的外部宽度，包含工具条与滚动条。 |
| parent	     | 返回当前窗口或子窗口的父窗口的引用。 |
| performance	 | 返回一个Performance对象，其中包括计时和导航属性，每个属性都是提供与性能有关的数据的对象。|
| personalbar	 | 返回 personalbar 对象，它的可视性可以在窗口中切换。 |
| screen	     | 对 Screen 对象的只读引用。请参数 Screen 对象。 |
| pageXOffset	 | 设置或返回当前页面相对于窗口显示区左上角的 X 位置。 scrollX的别名。|
| pageYOffset	 | 设置或返回当前页面相对于窗口显示区左上角的 Y 位置。 scrollY的别名。|
| screenLeft/screenX | 返回相对于屏幕窗口的x坐标 |
| screenTop/screenY  | 返回相对于屏幕窗口的y坐标 |
| sessionStorage | 在浏览器中存储 key/value 对。 在关闭窗口或标签页之后将会删除这些数据。 |
| scrollbars	 | 返回滚动条对象，其可见性可以在窗口中切换。 |
| scrollX	     | 返回文档已经水平滚动的像素数。 |
| scrollY	     | 返回文档已经垂直滚动的像素数。 |
| self	         | 返回对当前窗口的引用。等价于 Window 属性。 |
| speechSynthesis| 返回SpeechSynthesis对象，该对象是使用Web Speech API语音合成功能的入口点。 |
| status	     | 获取/设置浏览器窗口状态栏中的文本。 |
| statusbar 	 | 返回状态栏对象，其可见性可以在窗口中切换。 |
| toolbar	     | 返回工具栏对象，其可见性可以在窗口中切换。 |
| top	         | 返回最顶层的父窗口。 |
| visualViewport | 返回一个VisualViewport对象，该对象表示给定窗口的可视视口。 |
| window 	     | 返回对当前窗口的引用。 |
| DOMMatrix	     | 返回对DOMMatrix对象的引用，该对象表示4x4矩阵，适用于2D和3D操作。 |
| DOMMatrixReadOnly | 返回对DOMMatrixReadOnly对象的引用，该对象代表适用于2D和3D操作的4x4矩阵。 |
| DOMPoint	     | 返回对DOMPoint对象的引用，该对象表示坐标系中的2D或3D点。 |
| DOMPointReadOnly | 返回对DOMPointReadOnly对象的引用，该对象表示坐标系中的2D或3D点。 |
| DOMQuad	     | 返回对DOMQuad对象的引用，该对象提供表示一个四边形对象，该对象具有四个角和四个边。 |
| DOMRect	     | 返回对DOMRect对象的引用，该对象代表一个矩形。 |
| DOMRectReadOnly| 返回对DOMRectReadOnly对象的引用，该对象表示一个矩形。 |
| WindowOrWorkerGlobalScope.caches| 返回与当前上下文关联的CacheStorage对象。 该对象启用功能，例如存储资产以供脱机使用以及生成对请求的自定义响应。 |
| WindowOrWorkerGlobalScope.indexedDB| 为应用程序提供一种机制来异步访问索引数据库的功能； 返回一个IDBFactory对象。 |
| WindowOrWorkerGlobalScope.isSecureContext| 返回一个布尔值，指示当前上下文是安全的（true）还是不安全的（false）。 |
| WindowOrWorkerGlobalScope.origin| 返回全局对象的原点，序列化为字符串。 （这似乎尚未在任何浏览器中实现。） |


#### Window 对象方法

| 属性	                      | 描述                     |
| ---                         | ---                     |
| alert(message)	          | 显示带有一段消息和一个确认按钮的警告框。返回undefined|
| confirm(message)	          | 显示带有一段消息以及确认按钮和取消按钮的对话框。返回true/false|
| prompt(text, value)         | 显示可提示用户输入的对话框。返回输入值，取消返回null|
| blur()	                  | 把键盘焦点从顶层窗口移开。|
| setInterval(function, time) | 按照指定的周期（以毫秒计）来调用函数或计算表达式。|
| setTimeout(function, time)  | 在指定的毫秒数后调用函数或计算表达式。|
| clearInterval(timerName)    | 取消由 setInterval() 设置的 timeout。|
| clearTimeout(timerName)     | 取消由 setTimeout() 方法设置的 timeout。|
| close()	                  | 关闭浏览器窗口。|
| find(String, CaseSensitive, Backwards, WrapAround, WholeWord, SearchInFrames, ShowDialog)	  | 在窗口中搜索给定的字符串。|
| focus()	                  | 把键盘焦点给予一个窗口。|
| getComputedStyle(element\[, pseudoElt]) | 获取指定元素的计算样式。 计算样式表示元素的所有CSS属性的计算值。|
| getDefaultComputedStyle(element\[, pseudoElt])  | 获取指定元素的计算样式。 计算样式表示元素的所有CSS属性的计算值。|
| getSelection(element\[, pseudoElt])  | 返回一个  Selection 对象，表示用户选择的文本范围或光标的当前位置。|
| matchMedia(mediaQueryString)	      | 返回表示指定媒体查询字符串的MediaQueryList对象。|
| maximize()	               | 最小化窗口。|
| moveBy(deltaX, deltaY)	   | 相对窗口的当前坐标把它移动指定的位置。|
| moveTo(x, y)	               | 把窗口的左上角移动到一个指定的坐标。|
| open()	                   | 打开一个新的浏览器窗口或查找一个已命名的窗口。|
| postMessage(message, targetOrigin, \[transfer])	      | 提供一个安全的方法，使一个窗口可以将数据字符串发送到另一个窗口，该窗口不必与第一个窗口位于同一域中。|
| print()	                   | 打印当前窗口的内容。|
| resizeBy(xDelta, yDelta)	   | 按照指定的像素调整窗口的大小。|
| resizeTo(Width, Height)	   | 把窗口的大小调整到指定的宽度和高度。|
| scrollBy(x-coord, y-coord)   | 滚动窗口至文档中的特定位置。|
| scrollBy(x-coord, y-coord)   | 按照指定的像素值来滚动内容。|
| scrollTo(x-coord, y-coord)   | 把内容滚动到指定的坐标。|
| stop()	                   | 把内容滚动到指定的坐标。|
| target.addEventListener(type, listener\[, options]);  | 将事件处理程序注册到窗口上的特定事件类型。|
| target.removeEventListener(type, listener\[, options]); |从窗口中删除事件侦听器。|
| fetch()	                   | 开始从网络获取资源的过程。|
| atob()	                   | 对经过 base-64 编码的字符串进行解码。|
| btoa()	                   | 从 String 对象中创建一个 base-64 编码的 ASCII 字符串，其中字符串中的每个字符都被视为一个二进制数据字节。|
| createImageBitmap(image\[, options]).then(function(response) { ... }); <br> createImageBitmap(image, sx, sy, sw, sh\[, options]).then(function(response) { ... });	  | 方法存在 windows 和 workers 中. 它接受各种不同的图像来源, 并返回一个Promise, resolve为ImageBitmap. 可选地参数,图像被剪裁成自（sx，sy）且宽度为sw,高度为sh的像素的矩形。|



#### Window 对象事件

| 方法	                | 描述                     |
| ---                   | ---                     |
| onappinstalled        | 当页面作为Web应用程序安装时调用。请参阅appinstalled事件。|
| onbeforeinstallprompt | 在提示用户将网站保存到移动设备上的主屏幕之前调度的事件处理程序属性。|
| ondevicelight         | 任何环境光水平发生变化的事件处理程序属性 |
| ondevicemotion        | 如果加速度计检测到变化则调用（对于移动设备）|
| ondeviceorientation   | 更改方向时调用（对于移动设备）|
| ondeviceproximity     | 设备接近事件的事件处理程序属性 |
| ongamepadconnected    | 表示一个事件处理程序，该事件处理程序将在连接游戏手柄时（当gamepadconnected事件触发时）运行。|
| onpaint               | 窗口上的绘画事件的事件处理程序属性。|
| -----从其他地方实现的事件处理程序---- |  |
| onabort               | 当资源的加载已中止时调用，例如在用户仍在进行加载时取消其加载时调用|
| onafterprint          | 关闭打印对话框时调用。请参阅印后事件。 |
| onbeforeprint         | 打开打印对话框时调用。请参阅预印事件。|
| onbeforeunload        | 窗口上的pre-unload事件的事件处理程序属性。|
| onblur                | 在窗口失去焦点（例如由于弹出窗口）之后调用。 |
| onchange              | 窗口上的更改事件的事件处理程序属性。 |
| onclick               | 在按下并释放任何鼠标按钮后调用|
| ondblclick            | 当使用任何鼠标按钮双击时调用。|
| onclose               | 窗口关闭后调用 |
| oncontextmenu         | 按下鼠标右键时调用 |
| onerror               | 资源加载失败或运行时发生错误时调用。请参阅错误事件。 |
| onfocus               | 在窗口接收或重新获得焦点之后调用。查看焦点事件。 |
| onhashchange          | 窗口上的hashchange事件的事件处理程序属性；当井号（“＃”）之后的网址部分发生更改时调用。 |
| oninput               | 当\<input>元素的值更改时调用 |
| onkeydown             | 当您开始按任意键时调用。请参阅keydown事件。 |
| onkeypress            | 当某个键（Shift，Fn和CapsLock除外）处于按下位置时调用。请参阅按键事件。 |
| onkeyup               | 完成释放任意键时调用。请参阅keyup事件。 |
| onlanguagechange      | 窗口上的languagechange事件的事件处理程序属性。|
| onload                | 在所有资源和DOM完全加载后调用。 从缓存中加载页面时，例如使用后退按钮，将不会被调用。 |
| onmessage             | 表示引发消息事件时要调用的代码。 |
| onmousedown           | 当按下任何鼠标按钮时调用。|
| onmousemove           | 鼠标在窗口内移动时连续调用。|
| onmouseout            | 当指针离开窗口时调用。 |
| onmouseover           | 当指针进入窗口时调用 |
| onmouseup             | 释放任何鼠标按钮时调用 |
| onoffline             | 网络连接丢失时调用。 查看离线事件。 |
| ononline              | 建立网络连接时调用。 查看在线活动。|
| onpagehide            | 当用户在onunload事件之前离开页面导航时调用。 参见pagehide事件。 |
| onpageshow            | 在所有资源和DOM完全加载后调用。 参见页面显示事件。 |
| onpopstate            | 当按下后退按钮时调用。 |
| onreset               | 重置表单时调用 |
| onresize              | 调整窗口大小时连续调用。|
| onscroll              | 通过任何方式移动滚动条时调用。 如果资源完全适合窗口，则无法调用此事件 |
| onwheel               | 当鼠标滚轮绕任何轴旋转时调用 |
| onselect              | 选择输入字段中的文本后调用 |
| onselectionchange     | 表示引发selectionchange事件时要调用的代码。 |
| onstorage             | 会话存储或本地存储发生更改时调用。 |
| onsubmit              | 提交表单时调用。 |
| onunhandledrejection  | 未处理的Promise拒绝事件的事件处理程序。 |
| onunload              | 当用户离开页面导航时调用。|
| ----动画事件----       |  |
| animationstart/onanimationstart      | 动画开始时触发。|
| animationend/onanimationend        | 动画正常完成时触发。 |
| animationcancel/onanimationcancel     | 当动画意外中止时触发。 |
| animationiteration/onanimationiteration  | 动画迭代完成时触发。|
| ----粘贴板事件----     |  |
| clipboardchange       | 系统剪贴板内容更改时触发。|
| copy/oncopy           | 当用户通过浏览器的用户界面启动复制操作时触发。|
| cut/oncut             | 当用户通过浏览器的用户界面发起剪切操作时触发。|
| paste/onpaste         | 当用户通过浏览器的用户界面发起粘贴操作时触发。|
| ----链接事件----       |  |
| offline/onoffline     | 当浏览器无法访问网络并且navigator.onLine的值切换为false时触发。|
| online/ononline       | 当浏览器可以访问网络并且navigator.onLine的值切换为true时触发。|
| ----焦点事件----       |  |
| blur/onblur           | 当元素失去焦点时触发。|
| focus/onfocus         | 当某个元素获得焦点时触发。|
| ----历史事件----       |  |
| hashchange/onhashchange | URL的片段标识符已更改时触发（URL的部分以＃符号开头和之后）。|
| pagehide/onpagehide   | 在浏览器隐藏到当前文档的过程中，当切换到在其位置中显示与会话历史记录不同的文档时发送。|
| pageshow/onpageshow   | 当浏览器由于导航任务而使文档可见时发送，不仅包括首次加载页面时，还包括用户在导航至同一选项卡中的另一个页面后又导航回该页面的情况。|
| popstate/onpopstate   | 活动历史记录条目更改时触发。|
| ----加载事件----       |  |
| beforeunload/onbeforeunload | 当窗口文档及其资源即将被卸载时触发。|
| load/onload           | 加载整个页面（包括所有相关资源，例如样式表图像）时触发。|
| unload/onunload       | 卸载文档或子资源时触发。|
| DOMContentLoaded      | 当文档完全加载并解析时触发，而无需等待样式表，图像和子帧完成加载。|
| ----安装应用事件----   |  |
| afterprint/onafterprint | 当浏览器已成功将页面安装为应用程序时触发。|
| beforeinstallprompt/onbeforeinstallprompt  | 当系统将提示用户安装Web应用程序时触发。|
| ----消息事件----       |  |
| message/onmessage     | 当窗口接收到消息时触发，例如从另一个浏览上下文调用Window.postMessage（）时触发。|
| beforeprint/onbeforeprint  | 当Window对象收到无法反序列化的消息时触发。|
| ----打印事件----       |  |
| appinstalled/onappinstalled | 在关联文档开始打印或关闭打印预览后触发。|
| beforeinstallprompt/onbeforeinstallprompt  | 当相关文档将要打印或预览以进行打印时触发。|
| ----Promise 拒绝事件---- |  |
| rejectionhandled/onrejectionhandled | 每次拒绝JavaScript Promise时发送，无论是否有处理程序来捕获拒绝。|
| unhandledrejection/onunhandledrejection  | 当JavaScript Promise被拒绝但没有适当的处理程序来捕获拒绝时发送。|
| ----Promise 翻译事件---- |  |
| transitioncancel/ontransitioncancel | 取消CSS转换时触发。|
| transitionrun/ontransitionrun | 首次创建CSS过渡时触发。|
| transitionstart/ontransitionstart  | 当CSS转换实际开始时触发。|
| transitionend/ontransitionend  | CSS转换完成时触发。|
