
Console 对象可以接入浏览器控制台

Console 对象可以从任何全局对象中访问到，如 Window，WorkerGlobalScope 以及控制台属性中的特殊变量。它被定义为 Window.console，而且可直接通过 console

#### Console 对象方法

| 属性	                         | 描述                     |
| ---                            | ---                     |
| log(obj1 [, obj2, ..., objN)   | 向 Web 控制台输出一条消息。|
| info(obj1 [, obj2, ..., objN)  | 向web控制台输出一个通知信息。|
| warn(obj1 \[, obj2, ..., objN])| 打印一个警告信息|
| error(obj1 \[, obj2, ..., objN])| 打印一条错误信息|
| debug(obj1 \[, obj2, ..., objN])| 在控制台打印一条 "debug" 级别的消息。|
| assert(assertion, obj1 \[, obj2, ..., objN])|判断第一个参数是否为真，false 的话抛出异常并且在控制台输出相应信息。|
| clear()                        | 清空控制台，并输出 Console was cleared。|
| count(name)                    | 以参数为标识记录调用的次数，调用时在控制台打印标识以及调用次数。|
| countReset(name)               | 重置指定标签的计数器值。|
| dir(object)                    | 打印一条以三角形符号开头的语句，可以点击三角展开查看对象的属性。|
| dirxml(object)                 | 打印 XML/HTML 元素表示的指定对象，否则显示 JavaScript 对象视图。|
| group(groupName)               | 在 Web控制台上创建一个新的分组.随后输出到控制台上的内容都会被添加一个缩进,表示该内容属于当前分组,直到调用console.groupEnd()之后,当前分组结束.|
| groupCollapsed(groupName)      | 创建一个新的内联 group。使用方法和 group() 相同，不同的是，groupCollapsed() 方法打印出来的内容默认是折叠的。|
| groupEnd(groupName)            | 在 Web控制台中退出一格缩进(结束分组)|
| profile(profileName)           | 开始记录性能描述信息|
| profileEnd(profileName)        | 停止记录之前已经由Console.profile()开始记录的性能描述信息|
| table(array \[, columns])      | 将列表型的数据打印成表格。|
| time(timerName)                | 启动一个计时器来跟踪某一个操作的占用时长。浏览器将以毫秒为单位，输出对应计时器所经过的时间.|
| timeEnd(timerName)             | 停止一个通过 console.time() 启动的计时器|
| timeLog(timerName)             | 在控制台输出计时器的值，该计时器必须已经通过 console.time() 启动。|
| timeStamp(timerName)           | 添加一个标记到浏览器的 Timeline 或 Waterfall 工具。|
| trace()                        | 消息来源，输出一个 stack trace。|
| context()                      | 输出console可用的方法|
| memory                         | 查看当前的堆的使用情况。|

 
```js
console.log("%d年%d月%d日",2011,3,26);
```
```js
	
console.log("log")	// log
console.info("info") // info
console.warn("warn") // ▶warn
console.error("error") // ▶error
console.debug("debug")
console.assert(true === false, "判断条件不成立") // ▶Assertion failed: 判断条件不成立
console.clear() // Console was cleared 清屏
console.count('count');  // count: 1 调一次+1
console.countReset('count'); // 重置计数无返回 下次调用具名count时从1开始
console.dir({a: 111}) // ▶Object

console.group('第一层');
  console.group('第二层');

    console.log('error');
    console.error('error');
    console.warn('error');

  console.groupEnd(); 
console.groupEnd();
// ▼第一层  默认展开
//     ▼第二层
//         error
//         ▶error
//         ▶error

console.groupCollapsed('第一层');
  console.groupCollapsed('第二层');

    console.log('error');
    console.error('error');
    console.warn('error');

  console.groupEnd(); 
console.groupEnd();
// ▼第一层   默认折叠
//     ▼第二层
//         error
//         ▶error
//         ▶error

console.group('Group One');
console.group('Group Two');
// some code
console.groupEnd(); // Group Two 结束
console.groupEnd(); // Group One 结束

// ▼Group One 结束内联分组
//     ▼Group Two

console.profile('profile') // Profile 'profile' started.
console.profileEnd('profile') // Profile 'profile' finished.
console.table([{a: 1, b:2},{a: 1, b:2}])
// (index) a   b  表格和源数组
// 0       1   2
// 1       1   2
// Array(2)
// 0: {a: 1, b: 2}
// 1: {a: 1, b: 2}


console.time('time') // 开始计时
console.timeLog('time') // time: 31751.35791015625ms
console.timeStamp('time') // 标记时间
console.timeEnd('time') // 结束计时time: 13104.509033203125ms

function d(a) { 
  console.trace();
  return a;
}
function b(a) { 
  return c(a);
}
function c(a) { 
  return d(a);
}
var a = b('123');
// ▼console.trace
// d @ VM710:2
// c @ VM710:9
// b @ VM710:6
// (anonymous) @ VM710:11
console.context() // 浏览器可用方法
// ▼Context {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}
//   ▶assert: ƒ assert()
//   ▶clear: ƒ clear()
//   ▶count: ƒ count()
//   ▶countReset: ƒ countReset()
//   ▶debug: ƒ debug()
//   ▶dir: ƒ dir()
//   ▶dirXml: ƒ dirXml()
//   ▶error: ƒ error()
//   ▶group: ƒ group()
//   ▶groupCollapsed: ƒ groupCollapsed()
//   ▶groupEnd: ƒ groupEnd()
//   ▶info: ƒ info()
//   ▶log: ƒ log()
//   ▶profile: ƒ profile()
//   ▶profileEnd: ƒ profileEnd()
//   ▶table: ƒ table()
//   ▶time: ƒ time()
//   ▶timeEnd: ƒ timeEnd()
//   ▶timeLog: ƒ timeLog()
//   ▶timeStamp: ƒ timeStamp()
//   ▶trace: ƒ trace()
//   ▶warn: ƒ warn()
//   ▶__proto__: Object

console.memory // 内存信息
// ▼MemoryInfo {totalJSHeapSize: 27600000, usedJSHeapSize: 19300000, jsHeapSizeLimit: 2330000000}
//  jsHeapSizeLimit: 2330000000
//  totalJSHeapSize: 27600000
//  usedJSHeapSize: 19300000
//  ▶__proto__: MemoryInfo
```

console上述的集中度支持printf的占位符格式，支持的占位符有：字符（%s）、整数（%d或%i）、浮点数（%f）和对象（%o）:

| 占位符	  | 描述                     |
| ---     | ---                     |
|%s	      | 字符串|
|%d or %i | 整数|
|%f	      | 浮点数|
|%o	      | 可展开的DOM|
|%O	      | 列出DOM的属性|
|%c	      | 根据提供的css样式格式化字符串|
