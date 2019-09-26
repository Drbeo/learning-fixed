JavaScript 关键词

* `break`	终止 switch 或循环。
* `continue`	跳出循环并在顶端开始。
* `debugger`	停止执行 JavaScript，并调用调试函数（如果可用）。
* `do ... while`	执行语句块，并在条件为真时重复代码块。
* `for`	标记需被执行的语句块，只要条件为真。
* `function`	声明函数。
* `if ... else`	标记需被执行的语句块，根据某个条件。
* `return`	退出函数。
* `switch`	标记需被执行的语句块，根据不同的情况。
* `try ... catch`	对语句块实现错误处理。
* `var`	声明变量。

### JavaScript 标识符 

标识符用于命名变量（以及关键词、函数和标签）。在大多数编程语言中，合法名称的规则大多相同。
* 名称可包含字母、数字、下划线和美元符号
* 名称必须以字母开头
* 名称也可以 `$` 和 `_` 开头（但是在本教程中我们不会这么做）
* **名称对大小写敏感**（y 和 Y 是不同的变量）
* 保留字（比如 JavaScript 的关键词）无法用作变量名称

### JavaScript 推荐使用以小写字母开头的驼峰大小写
```js
firstName, lastName, masterCard, interCity
```

### JavaScript 使用 Unicode 字符集。覆盖世界上几乎所有的字符、标点和符号。最常用的编码(UTF-8/UTF-16)

### 注释

* 单行注释以 `//` 开头。
* 多行注释以 `/*` 开头，以 `*/` 结尾。

### 变量
声明变量
```js
var carName;
var catName = 'Tom';
```
不推荐 **一条语句，多个变量**

### JavaScript 运算符

| 运算符	| 描述 |
|---    |---   |
| +	    | 加法 |
| -	    | 减法 |
| *	    | 乘法 |
| **    | 幂 [（ES2016）](https://www.w3school.com.cn/js/js_es6.asp) |
| /	    | 除法 |
| %	    | 求余 |
| ++    | 递增 |
| --	| 递减 |

### JavaScript 赋值运算符

|运算符|例子     |等同于        |
|---  |---      |---          |
|=	  | x = y   |x = y        |
|+=	x | += y    | x = x + y   |
|-=	x | -= y    | x = x - y   |
|*=	x | *= y    | x = x * y   |
|/=	x | /= y    | x = x / y   |
|%=	x | %= y    | x = x % y   |
|<<=  | x <<= y	| x = x << y  |
|>>=  | x >>= y	| x = x >> y  |
|>>>= | x >>>= y| x = x >>> y |
|&=	  | x &= y	| x = x & y   |
|^=	  | x ^= y	| x = x ^ y   |
|\|=  | x \|= y	| x = x \| y  |
|**=  | x **= y	| x = x ** y  |
	
### JavaScript 比较运算符

|运算符| 描述       |
|---  |---         |
|==	  |等于         |
|===  |等值等型     |
|!=	  |不相等       |
|!==  |不等值或不等型|
|>	  |大于         |
|<	  |小于         |
|>=	  |大于或等于    |
|<=	  |小于或等于    |
|? :  |三元运算符    |

### JavaScript 逻辑运算符

|运算符|描述  |
|---  |---   |
|&&	  |逻辑与|
|||	  |逻辑或|
|!	  |逻辑非|

### JavaScript 类型运算符

|运算符|描述  |
|---  |---   |
|typeof	  |返回变量的类型。|
|instanceof  |返回 true，如果对象是对象类型的实例。|

### JavaScript 位运算符
位运算符处理 32 位数。

该运算中的任何数值运算数都会被转换为 32 位的数。结果会被转换回 JavaScript 数。

| 运算符	|名称	        | 例子	      | 等同于	    | 结果	    | 十进制 |描述|
|---    |---            |---          |---          |---        |---    |---|
| &	    |与	            | 5 & 1	      | 0101 & 0001 | 0001	    | 1     |如果两位都是 1 则设置每位为 1|
| \|	|或	            | 5 \| 1      | 0101 \| 0001| 0101	    | 5     |如果两位之一为 1 则设置每位为 1|
| ~	    |非	            | ~ 5	      | ~ 0101	    | 1010	    | 10    |反转所有位|
| ^	    |异或	        | 5 ^ 1	      | 0101 ^ 0001 | 0100	    | 4     |如果两位只有一位为 1 则设置每位为 1|
| <<	|零填充左位移	| 5 << 1	  | 0101 << 1	| 1010	    | 10    |通过从右推入零向左位移，并使最左边的位脱落。|
| >>	|有符号右位移	| 5 >> 1	  | 0101 >> 1	| 0010	    | 2     |通过从左推入最左位的拷贝来向右位移，并使最右边的位脱落。|
| >>>	|零填充右位移	| 5 >>> 1	  | 0101 >>> 1	| 0010	    | 2     |通过从左推入零来向右位移，并使最右边的位脱落。|
上例使用 4 位无符号的例子。但是 JavaScript 使用 32 位有符号数。

因此，在 JavaScript 中，~ 5 不会返回 10，而是返回 -6。

~00000000000000000000000000000101 将返回 11111111111111111111111111111010。



### [JavaScript 运算符优先级值](https://www.w3school.com.cn/js/js_arithmetic.asp)


### JavaScript 数据类型

基础数据类型禁止使用`new`

```js
var length = 7;                             // 数字
var isFlag = true;                             // 布尔
var lastName = "Gates";                      // 字符串
var cars = ["Porsche", "Volvo", "BMW"];         // 数组
var x = {firstName:"Bill", lastName:"Gates"};    // 对象 
var name;                  // 值是 undefined，类型是 undefined
var person = null;           // 值是 null，但是类型仍然是对象

typeof undefined              // undefined
typeof null                   // object
null === undefined            // false
null == undefined             // true
```
* 原始数据类型
    - string
    - number
    - boolean
    - undefined
    - null
* 引用类型
    - function
    - object


### 函数

```js
var x = myFunction(4, 3);        // 调用函数，返回值被赋值给 x

function myFunction(a, b) {
    return a * b;                // 函数返回 a 和 b 的乘积
}
```