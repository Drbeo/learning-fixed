

在node运行环境下

### global 全局对象（相当于浏览器的window）

```nodejs
C:\Users\Administrator\Desktop>node
> global.console
Console {
  log: [Function: bound consoleCall],
  debug: [Function: bound consoleCall],
  info: [Function: bound consoleCall],
  dirxml: [Function: bound consoleCall],
  warn: [Function: bound consoleCall],
  error: [Function: bound consoleCall],
  dir: [Function: bound consoleCall],
  time: [Function: bound consoleCall],
  timeEnd: [Function: bound consoleCall],
  timeLog: [Function: bound timeLog],
  trace: [Function: bound consoleCall],
  assert: [Function: bound consoleCall],
  clear: [Function: bound consoleCall],
  count: [Function: bound consoleCall],
  countReset: [Function: bound consoleCall],
  group: [Function: bound consoleCall],
  groupCollapsed: [Function: bound consoleCall],
  groupEnd: [Function: bound consoleCall],
  table: [Function: bound consoleCall],
  Console: [Function: Console],
  markTimeline: [Function: markTimeline],
  profile: [Function: profile],
  profileEnd: [Function: profileEnd],
  timeline: [Function: timeline],
  timelineEnd: [Function: timelineEnd],
  timeStamp: [Function: timeStamp],
  context: [Function: context],
  [Symbol(counts)]: Map {},
  [Symbol(kColorMode)]: 'auto' }
```

### process 当前Node.js进程

```node
> process === global.process;
true
> process.version;
'v10.16.0'
> process.platform;
'win32'
> process.arch;
'x64'
> process.cwd(); // 当前工作目录
'C:\\Users\\Administrator\\Desktop'
> process.chdir('D:/Development/learning-fixed/nodejs'); // 切换当前工作目录
undefined
> process.cwd(); // 当前工作目录
'D:\\Development\\learning-fixed\\nodejs'
```
`process.nextTick()`的函数不是立刻执行，而是要等到下一次事件循环。


Node.js进程本身的事件就由process对象来处理。如果我们响应exit事件，就可以在程序即将退出时执行某个回调函数：

```js
// 程序即将退出时的回调函数:
process.on('exit', function (code) {
    console.log('about to exit with code: ' + code);
});
```

### 判断JavaScript执行环境
```js
if (typeof(window) === 'undefined') {
    console.log('node.js');
} else {
    console.log('browser');
}
```
