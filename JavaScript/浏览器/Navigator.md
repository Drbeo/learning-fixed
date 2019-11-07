Navigator 接口表示用户代理的状态和标识。 它允许脚本查询它和注册自己进行一些活动。

#### Navigator 对象属性

| 属性	         | 示例      | 描述                     |
| ---            | ---    | ---                     |
| appCodeName | "Mozilla" | 内部“开发代号”名称。 不能保证此属性返回的值是正确的。|
| appName | "Netscape" | 浏览器官方名称。 不能保证此属性返回的值是正确的。|
| appVersion | "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3941.4 Safari/537.36" | 返回浏览器版本。不能保证此属性返回的值是正确的。 |
| cookieEnabled | true | 当忽略 cookie 时返回 false，否则返回 true |
| platform | "Win32" | 返回浏览器平台名，不确定此值是否有效。 |
| **userAgent** | "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3941.4 Safari/537.36" | 返回当前浏览器的用户代理。 |
| language | "zh-CN" | 返回一个DOMString表示用户的首先语言，通常是浏览器用户界面的语言。当未知的时，返回null。 |
| languages |\["zh-CN", "zh-HK", "zh"] | 用户已知语言的DOMString数组，并按优先顺序排列。|
| onLine | true | 返回Boolean来表明浏览器是否联网。 |
| maxTouchPoints | 0 | 返回当前设备支持的最大同时触摸接触点数。 |
| battery | "" |  返回一个 BatteryManager 对象，你可以用它来获取一些电池充电状态的信息。 |
| connection | NetworkInformation {onchange: null, effectiveType: "4g", rtt: 200, downlink: 10, saveData: false} | 提供一个NetworkInformation对象来获取设备的网络连接信息。|
| geolocation | Geolocation {} | 返回一个 Geolocation 对象，据之可访问设备的地理位位置信息。 |
| hardwareConcurrency | 4 | 返回可用逻辑处理器（cpu）核心的数量。 |
| keyboard | Keyboard {}| 返回一个Keyboard对象，该对象提供对以下功能的访问：检索键盘布局图和切换从物理键盘捕获按键的功能。|
| mimeTypes | MimeTypeArray {0: MimeType, 1: MimeType, 2: MimeType, 3: MimeType, length: 4} | 返回MimeTypeArray对象数组，用于列举浏览器所支持的MIME类型。 |
| locks | LockManager {} | 返回一个LockManager对象，该对象提供用于请求新Lock对象和查询现有Lock对象的方法 |
| mediaCapabilities | MediaCapabilities {} | 返回MediaCapabilities对象，该对象可以公开有关给定格式和输出功能的解码和编码功能的信息。 |
| oscpu | Windows NT x.y; Win64; x64 | 返回当前操作系统名。 |
| permissions | Permissions {} | 返回一个Permissions对象，该对象可用于查询和更新Permissions API涵盖的API的权限状态。 |
| plugins | PluginArray {0: Chrome PDF Plugin, 1: Chrome PDF Viewer, 2: Native Client, length: 3} | 返回PluginArray数组用于列举出浏览器安装的插件。|
| product | "Gecko" | 在任意浏览器下都只返回'Gecko'，此属性只用于兼容的目的。|
| serviceWorker | ServiceWorkerContainer {ready: Promise, controller: null, oncontrollerchange: null, onmessage: null}| 返回ServiceWorkerContainer 对象用于提供注册、删除、更新以及为了associated document的ServiceWorker对象之间的通信。|
| storage | StorageManager {} | 返回单例StorageManager对象，该对象用于管理持久性权限并在逐站点/逐应用的基础上估计可用存储。 |
| doNotTrack | "1" | 报告用户的不追踪参数值，当值为yes，你的网址或应用将不追踪用户|
| vendor | "Google Inc." | 返回当前浏览器的供应商名称。 |
| vendorSub | "" | 返回供应商版本号。 |
| productSub | "20030107" | 返回当前浏览器的内部版本号。 |
| deviceMemory | 8 | 只读属性返回千兆字节为单位的大概的机器内存。 这个值是一个2的次方数除以1024，舍去小数点的近似值。|
| clipboard | Clipboard {} | 剪切板 API 为 Navigator 接口添加了 clipboard 只读属性，该属性返回一个可以读写剪切板内容的 Clipboard 对象。 剪切板 API 可用于在 web 应用中实现剪切、复制、粘贴的功能。|
| credentials | CredentialsContainer {} | 暴露了请求凭证的方法。|
| mediaDevices | MediaDevices {ondevicechange: null} | 返回一个 MediaDevices 对象, 该对象可提供对相机和麦克风等媒体输入设备的连接访问，也包括屏幕共享。 |
| activeVRDisplays | [] | 筛选所有的 VRDisplay 对象，把其中所有VRDisplay.ispresenting属性的值为true的对象以数组的形式返回。|
| presentation | Presentation {receiver: null, defaultRequest: null}
| webkitTemporaryStorage | DeprecatedStorageQuota {}
| webkitPersistentStorage | DeprecatedStorageQuota {}
| userActivation | UserActivation {hasBeenActive: true, isActive: true}
| mediaSession | MediaSession {metadata: null, playbackState: "none"}
| bluetooth | Bluetooth {}
| usb | USB {onconnect: null, ondisconnect: null}
| xr | XR {ondevicechange: null}


#### Navigator 对象方法

| 属性	         | 描述                     |
| ---            | ---                     |
|getVRDisplays() | 返回一个promise，该promise解析为代表与计算机连接的所有可用VR设备的VRDisplay对象的数组。 |
|share() |  调用当前平台的本机共享机制。|
|sendBeacon(url, data) | 用于使用HTTP从用户代理异步传输少量数据到Web服务器。 |
|getGamepads() | 返回一个数组：第一个值为 null ，其他的值均为 Gamepad 对象，表示每一个与设备连接的游戏手柄。 |
|vibrate(pattern) |  在支持它的设备上引起振动。 如果没有振动支持，则不执行任何操作。|
|registerProtocolHandler(protocol, url, title) | 允许网站将自己注册为给定协议的可能处理程序。 |
|requestMediaKeySystemAccess() |  返回MediaKeySystemAccess对象的Promise。|
|getUserMedia() |  提示用户允许后，返回与本地计算机上的摄像头或麦克风关联的音频或视频流。|
|requestMIDIAccess() | 允许电子乐器、电脑和其他设备相互连接传输数据。 |
