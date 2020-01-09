## 一、数字字符串

1. string强制转换为数字
```js
// 可以用*1来转化为数字((实际上是调用.valueOf方法) 然后使用Number.isNaN来判断是否为NaN，或者使用 a !== a 来判断是否为NaN)
'32' * 1            // 32
'ds' * 1            // NaN
null * 1            // 0
undefined * 1       // NaN
1 * { valueOf: ()=>'3' }        // 3
                    // 使用+来转化字符串为数字
+ '123'             // 123
+ 'ds'              // NaN
+ ''                // 0
+ null              // 0
+ undefined         // NaN
+ { valueOf: ()=>'3' }    // 3
```
2. 使用Boolean过滤数组中的所有假值
```js
const compact = arr => arr.filter(Boolean)
compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]) 
```

3. 数值取整 --去除小数点后面的值
```js
parseInt(2.33)
~~2.33
2.33 | 0
2.33 >> 0
// Math.floor()向下取整,值永远只会变小
```

4. 判断奇偶数,负数同样适用
```js
const num=3;
!!(num & 1)                    // true
!!(num % 2)                    // true
//以上两种形式返回true的都是奇数
 ```

5. JS|| && 妙用 多重if else 选择情况

假设对成长速度显示规定如下:

成长速度为5显示1个箭头

成长速度为10显示2个箭头

成长速度为12显示3个箭头

成长速度为15显示4个箭头

其他显示为0个箭头
```js
// 一般代码
var add_level = 0; 
if(add_step == 5){ 
add_level = 1; 
} 
else if(add_step == 10){ 
add_level = 2; 
} 
else if(add_step == 12){ 
add_level = 3; 
} 
else if(add_step == 15){ 
add_level = 4; 
} 
else { 
add_level = 0; 
} 

// 好一点的switch
var add_level = 0; 
switch(add_step){ 
    case 5 : add_level = 1; 
    break; 
    case 10 : add_level = 2; 
    break; 
    case 12 : add_level = 3; 
    break; 
    case 15 : add_level = 4; 
    break; 
    default : add_level = 0; 
    break; 
}

//更好一点的
var add_level = (add_step==5 && 1) || (add_step==10 && 2) || (add_step==12 && 3) || (add_step==15 && 4) || 0; 

//还有更好的
var add_level={'5':1,'10':2,'12':3,'15':4}[add_step] || 0; 
```

6. 5种方式实现值交换
```js
var temp = a; a = b; b = temp;      // (传统，但需要借助临时变量)
a ^= b; b ^= a; a ^= b;             // (需要两个整数)
b = [a, a = b][0]                   // (借助数组)
[a, b] = [b, a];                    // (ES6，解构赋值)
a = a + b; b = a - b; a = a - b;    // (小学奥赛题)
```

7. 判断 x 是否是整数
```js
function isInt(x) {
  return (x ^ 0) === x
}
return Math.round(x) === x
return (typeof x === 'number') && (x % 1 === 0)
Number.isInteger() // ES6
```

8. 递归求阶乘
```js
function factorial(n) {
  return (n > 1) ? n * f(n - 1) : n
}
```

9. 判断符号是否相同
```js
function sameSign(a, b) {
  return (a ^ b) >= 0
}
```

10. 数组最大值
```js
function maxArr(arr) {
  return Math.max.apply(null, arr)
}
```

11. 数组最小值
```js
function minArr(arr) {
  return Math.min.apply(null, arr)
}
```
12. 随机获取数组的一个成员
```js
function randomOne(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}
```

13. 生成随机十六进制代码（生成随机颜色）
```js
function getRandomColor() {
    return `#${Math.random().toString(16).substr(2, 6)}`
    // return `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, '0')}`;
}
```

14. 随机生成指定长度的字符串
```js
function randomStr(n) {
  let standard = 'abcdefghijklmnopqrstuvwxyz9876543210'
  let len = standard.length
  let result = ''

  for (let i = 0; i < n; i++) {
    result += standard.charAt(Math.floor(Math.random() * len))
  }
  return result
}
```

15. 生成随机ID
```js
Math.random().toString(36).substring(0); // 0.gwi8iipeqoi
```

16. `isReserved`：检测字符串是否以 $ 或者 _ 开头
```js
// charCodeAt() 方法可返回指定位置的字符的 Unicode 编码
function isReserved (str: string): boolean {
  const c = (str + '').charCodeAt(0)
  return c === 0x24 || c === 0x5F
}
```

17. 从传递进来的字母序列中找到缺失的字母并返回它
```js
function fearNotLetter(str) {
  //将字符串转为ASCII码，并存入数组
  let arr=[];
  for(let i=0; i<str.length; i++){
    arr.push(str.charCodeAt(i));
  }
  for(let j=1; j<arr.length; j++){
    let num=arr[j]-arr[j-1];
    //判断后一项减前一项是否为1，若不为1，则缺失该字符的前一项
    if(num!=1){
      //将缺失字符ASCII转为字符并返回 
      return String.fromCharCode(arr[j]-1); 
    }
  }
  return undefined;
}
fearNotLetter("abce") // "d"
```

18. `camelize`: 连字符转驼峰
```js
function camelize (str: string): string {
  return str.replace(/-(\w)/g, (_, c) => c ? c.toUpperCase() : '')
})
```

19. `hyphenate`:驼峰转连字符
```js
function hyphenate (str: string): string {
  return str.replace(/\B([A-Z])/g, '-$1').toLowerCase()
})
```

20. `toString`: 将给定变量的值转换为 string 类型并返回
```js
function toString (val: any): string {
  return val == null ? ''
    : typeof val === 'object'? JSON.stringify(val, null, 2)
    : String(val)
}
```

## 二、函数

1. 惰性载入函数

这个判断依据在整个项目运行期间一般不会变化，所以判断分支在整个项目运行期间只会运行某个特定分支，那么就可以考虑惰性载入函数
```js
function foo(){
    if(a !== b){
        console.log('aaa')
    }else{
        console.log('bbb')
    }
}

// 优化后
function foo(){
    if(a != b){
        foo = function(){
            console.log('aaa')
        }
    }else{
        foo = function(){
            console.log('bbb')
        }
    }
    return foo();
}
```

2. 动态添加js
```js
document.write("<script src='" + context.path + "/resource/apps/logger.js'></script>");

/**
 * 动态添加JS
 * @param {Object} js
 */
function loadJs(js) {
    var s = document.createElement('script');
    s.setAttribute('type', 'text/javascript');
    s.setAttribute('src', js);
    var content = document.getElementById("container-fluid");
    content.appendChild(s);
}
```

3. 劫持别人写的函数
```js
function A () {
    console.log("我是原函数");
}
/**
 * 
 * @param {*要劫持的函数所在的对象} obj 
 * @param {*计划要劫持的函数名} method 
 * @param {*回调函数} fun 
 */
const hijack = (obj, method, fun) => {
    let orig = obj[method]; // 保存原函数
    obj[method] = fun(orig); // 将重写的函数作为回调函数的返回值赋给原函数变量
}
hijack(window,'A',function(orig){
    return function (){
        // 做任何你想函数A执行时候你想做的事情
        console.log("我劫持了函数A");
        orig.call(this);
    }
})
A();
```

4. AOP在JS当中的执行
```js
/**
* 织入执行前函数
* @param {*} fn 
*/
Function.prototype.aopBefore = function(fn){
    console.log(this)
    // 第一步：保存原函数的引用
    const _this = this
    // 第四步：返回包括原函数和新函数的“代理”函数
    return function() {
        // 第二步：执行新函数，修正this
        fn.apply(this, arguments)
        // 第三步 执行原函数
        return _this.apply(this, arguments)
    }
}
/**
 * 织入执行后函数
 * @param {*} fn 
 */
Function.prototype.aopAfter = function (fn) {
    const _this = this
    return function () {
        let current = _this.apply(this,arguments) // 先保存原函数
        fn.apply(this, arguments) // 先执行新函数
        return current
    }
}
/**
 * 使用函数
 */
let aopFunc = function() {
    console.log('aop')
}
// 注册切面
aopFunc = aopFunc.aopBefore(() => {
    console.log('aop before')
}).aopAfter(() => {
    console.log('aop after')
})
// 真正调用
aopFunc();
```

5. 一次性函数，适用于初始化的一些操作
```js
var sca = function() {
    console.log('msg') // 永远只会执行一次
    sca = function() {
        console.log('foo')
    }
}
sca()        // msg
sca()        // foo
sca()        // foo
```
6. 简易拷贝
```js
JSON.parse(JSON.stringify(obj)) // 第一function无法复制，第二原型丢失了
```


## 三、数组

1. reduce方法同时实现map和filter
```js
const numbers = [10, 20, 30, 40];
const doubledOver50 = numbers.reduce((finalList, num,currentIndex,numbers) => {
  
  console.log(finalList);
  console.log(num);
  console.log(currentIndex);
  console.log(numbers);
  num = num * 2;
  if (num > 50) {
    finalList.push(num);
  }
  return finalList;
}, []);
```

2. 克隆数组
```js
arr.slice(0)
```

3. 数组去重
```js
// ES6
[...new Set(arr)]
Array.from(new Set(arr))
// ES5
arr.filter(function(ele, index, array){
    return index===array.indexOf(ele)
})
```

4. 创建特定大小的数组
```js
[...Array(3).keys()] // [0, 1, 2]
```

5. 随机更改数组元素顺序，混淆数组
```js
(arr) => arr.slice().sort(() => Math.random() - 0.5)

/* 
let a = (arr) => arr.slice().sort(() => Math.random() - 0.5)
let b = a([1,2,3,4,5])
console.log(b)
*/
```

6.数组添加值防止报错

```js
var a = '';
(a || (a = [])).push(1)
```

7.斐波那契数列

```js
function fib(num) {
    if (num === 0) return 0;
    if (num === 1) return 1;
    return fib(num - 2) + fib(num - 1);
}
fib(6) // 8
```

8. 扁平化n维数组

```js

[1,[2,3]].flat(2) // [1,2,3]

[1,[2,3,[4,5]].flat(3) // [1,2,3,4,5]

[1[2,3,[4,5[...]].flat(Infinity) // [1,2,3,4...n]


function flatten(arr) {
    while(arr.some(item=>Array.isArray(item))) {
        arr = [].concat(...arr);
    }
    return arr;
}

flatten([1,[2,3]]) //[1,2,3]
flatten([1,[2,3,[4,5]]) //[1,2,3,4,5]
```

9. 排序
```js
[1,2,3,4].sort(); // [1, 2,3,4],默认是升序

[1,2,3,4].sort((a, b) => b - a); // [4,3,2,1] 降序
```

10. 合并
```js
[1,2,3,4].concat([5,6]) // [1,2,3,4,5,6]
[...[1,2,3,4],...[4,5]] // [1,2,3,4,5,6]
[1,2,3,4].push.apply([1,2,3,4],[5,6]) // [1,2,3,4,5,6]

[5,6].map(item => {
    [1,2,3,4].push(item)
}) // [1,2,3,4,5,6]
```

11. 类数组转化成数组
```js
Array.prototype.slice.call(arguments) //arguments是类数组(伪数组)
Array.prototype.slice.apply(arguments)
Array.from(arguments)
[...arguments]
```

12. 每一项设置值
```js
[1,2,3].fill(false) //[false,false,false]
[1,2,3].map(() => 0)
```

13. 每一项是否满足
```js
[1,2,3].every(item=>{return item>2}) // false every是ES5的api,，每一项满足返回 true。
```

14. 有一项满足
```js
[1,2,3].some(item=>{return item>2}) // true some是ES5的api，有一项满足返回 true
```

15. 过滤数组
```js
[1,2,3].filter(item=>{return item>2}) // [3]

// 筛选素数
arr.filter(a=>a===2||a===3||a===5||a===7||(a>1&&a%2&&a%3&&a%5&&a%7));
```
## 四、元素操作

1. 判断一个元素是否函数某个class，存在就删除，不存在就添加
```js
let $this = $(this);
let $target = $(target);
$this[$target.hasClass('am-in') ? 'addClass' : 'removeClass']('am-collapsed');
```
## 五、其他

1. 空('' null undefined)验证
```js
let obj = '';
function fun1 () {
    console.log("obj");
    return true;
}
let obj1  = obj || fun1();
```

2. 三目运算后面使用函数
```js
let string = true;
function fun1 () {
    console.log("fun1");
}
function fun2 () {
    console.log("fun2");
}
string ? fun1() : fun2();
```

3. 字符串比较时间先后
```js
var a = "2014-08-08";
var b = "2014-09-09";
 
console.log(a>b, a<b); // false true
console.log("21:00"<"09:10");  // false
console.log("21:00"<"9:10");   // true   时间形式注意补0
```

4. nb / sb [查看原理](https://zhidao.baidu.com/question/433731856769399284.html)
```js
([][[]] + [])[+!![]] + ([] + {})[!+[] + !![]] // nb
(!(~+[]) + {})[--[~+''][+[]] * [~+[]] + ~~!+[]] + ({} + [])[[~!+[]] * ~+[]] // sb
```

5. 美化console
```js
console.info("%c哈哈", "color: #3190e8; font-size: 30px; font-family: sans-serif");
```

6. 日历

创建过去七天的数组，如果将代码中的减号换成加号，你将得到未来7天的数组集合
```js
[...Array(7).keys()].map(days => new Date(Date.now() - 86400000 * days)); // 创建过去七天的数组
```

7. 一个臭名昭著的面试题
``` js
for(i=0;++i<101;console.log(i%5?f||i:f+'Buzz'))f=i%3?'':'Fizz'
// 1 // 2 // Fizz // 4 // Buzz // Fizz // 7 // 8 // Fizz // Buzz // 11 // Fizz // 13 // 14 // FizzBuzz // 16 // 17 // Fizz // 19 // Buzz // Fizz // 22 // 23 // Fizz // Buzz // 26 // Fizz // 28 // 29 // FizzBuzz // 31 // 32 // Fizz // 34 // Buzz // Fizz // 37 // 38 // Fizz // Buzz // 41 // Fizz // 43 // 44 // FizzBuzz // 46 // 47 // Fizz // 49 // Buzz // Fizz // 52 // 53 // Fizz // Buzz // 56 // Fizz // 58 // 59 // FizzBuzz // 61 // 62 // Fizz // 64 // Buzz // Fizz // 67 // 68 // Fizz // Buzz // 71 // Fizz // 73 // 74 // FizzBuzz // 76 // 77 // Fizz // 79 // Buzz // Fizz // 82 // 83 // Fizz // Buzz // 86 // Fizz // 88 // 89 // FizzBuzz // 91 // 92 // Fizz // 94 // Buzz // Fizz // 97 // 98 // Fizz // Buzz // ""
```

8. 获取URL的查询参数
```js
q={};
location.search.replace(/([^?&=]+)=([^&]+)/g,(_,k,v)=>q[k]=v);
q;
```

9. 返回一个键盘（惊呆了）

``` js
(_=>[..."`1234567890-=~~QWERTYUIOP[]\\~ASDFGHJKL;'~~ZXCVBNM,./~"].map(x=>(o+=`/${b='_'.repeat(w=x<y?2:' 667699'[x=["BS","TAB","CAPS","ENTER"][p++]||'SHIFT',p])}\\|`,m+=y+(x+' ').slice(0,w)+y+y,n+=y+b+y+y,l+=' __'+b)[73]&&(k.push(l,m,n,o),l='',m=n=o=y),m=n=o=y='|',p=l=k=[])&&k.join`
`)()

/*   ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ________
    ||` |||1 |||2 |||3 |||4 |||5 |||6 |||7 |||8 |||9 |||0 |||- |||= |||BS    ||
    ||__|||__|||__|||__|||__|||__|||__|||__|||__|||__|||__|||__|||__|||______||
    |/__\|/__\|/__\|/__\|/__\|/__\|/__\|/__\|/__\|/__\|/__\|/__\|/__\|/______\|
     ________ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____
    ||TAB   |||Q |||W |||E |||R |||T |||Y |||U |||I |||O |||P |||[ |||] |||\ ||
    ||______|||__|||__|||__|||__|||__|||__|||__|||__|||__|||__|||__|||__|||__||
    |/______\|/__\|/__\|/__\|/__\|/__\|/__\|/__\|/__\|/__\|/__\|/__\|/__\|/__\|
     _________ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ________
    ||CAPS   |||A |||S |||D |||F |||G |||H |||J |||K |||L |||; |||' |||ENTER ||
    ||_______|||__|||__|||__|||__|||__|||__|||__|||__|||__|||__|||__|||______||
    |/_______\|/__\|/__\|/__\|/__\|/__\|/__\|/__\|/__\|/__\|/__\|/__\|/______\|
     ___________ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ___________
    ||SHIFT    |||Z |||X |||C |||V |||B |||N |||M |||, |||. |||/ |||SHIFT `  ||
    ||_________|||__|||__|||__|||__|||__|||__|||__|||__|||__|||__|||_________||
    |/_________\|/__\|/__\|/__\|/__\|/__\|/__\|/__\|/__\|/__\|/__\|/_________\|*/
```
10. 另外一种undefined
```js
void 0; // undefined
```
11. 多行字符串可以使用模板字符串

```js
`这是一个
多行
字符串`;
```

## 六、当前环境的一系列判断
1. `inBrowser`: 检测当前宿主环境是否是浏览器
```js
// 通过判断 `window` 对象是否存在即可
export const inBrowser = typeof window !== 'undefined'
```
2. `hasProto`:检查当前环境是否可以使用对象的 `__proto__` 属性
```js
// 一个对象的 __proto__ 属性指向了其构造函数的原型
// 从一个空的对象字面量开始沿着原型链逐级检查。
export const hasProto = '__proto__' in {}
```

## 七、User-Agent常量的一系列操作
1. 获取当浏览器的user Agent
```js
// toLowerCase目的是 为了后续的各种环境检测
export const UA = inBrowser && window.navigator.userAgent.toLowerCase()
```
2. IE浏览器判断
```js
// 使用正则去匹配 UA 中是否包含'msie'或者'trident'这两个字符串即可判断是否为 IE 浏览器
export const isIE = UA && /msie|trident/.test(UA)
```
3. IE9| Edge | Chrome 判断
```js
export const isIE9 = UA && UA.indexOf('msie 9.0') > 0
export const isEdge = UA && UA.indexOf('edge/') > 0
export const isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge
```
