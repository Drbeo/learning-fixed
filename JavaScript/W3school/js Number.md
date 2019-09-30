#### JavaScript 数值始终是 64 位的浮点数
与许多其他编程语言不同，JavaScript 不会定义不同类型的数，比如整数、短的、长的、浮点的等等。

JavaScript 数值始终以双精度浮点数来存储，根据国际 IEEE 754 标准。

此格式用 64 位存储数值，其中 0 到 51 存储数字（片段），52 到 62 存储指数，63 位存储符号：

| 值(aka Fraction/Mantissa) | 	指数	         | 符号 |
| ---                       | ---                | ---                     |
| 52 bits(0 - 51)           | 11 bits (52 - 62)	 | 1 bit (63) |

```js
typeof NaN;             // 返回 "number"
typeof Infinity;        // 返回 "number"
var x = 123;            // typeof x 返回 number
var y = new Number(123);// typeof y 返回 object

```
Infinity （或 -Infinity）是 JavaScript 在计算数时超出最大可能数范围时返回的值。除以 0（零）也会生成 Infinity：

在所有数字运算中，JavaScript 会尝试将字符串转换为数字

#### Number 对象属性

| 属性	            | 描述                     |
| ---               | ---                     |
| Number.constructor	    | 返回对创建此对象的 Number 函数的引用。 |
| Number.prototype	        | 使您有能力向对象添加属性和方法。 |
| Number.EPSILON	        | 表示 1 与大于 1 的最小浮点数之间的差。小数可以接受的最小误差范围 Number.EPSILON === Math.pow(2, -52) // true|
| Number.MAX_VALUE	        | 可表示的最大的数。 |
| Number.MIN_VALUE	        | 可表示的最小的数。 |
| Number.MAX_SAFE_INTEGER	| JavaScript 中最大的安全整数 (2^53 - 1)。 |
| Number.MIN_SAFE_INTEGER	| JavaScript 中最小的安全整数 (-(2^53 - 1)). |
| Number.NaN	            | 非数字值。 |
| Number.NEGATIVE_INFINITY	| 负无穷大，溢出时返回该值。 |
| Number.POSITIVE_INFINITY	| 正无穷大，溢出时返回该值。 |

#### Number 对象方法

| 方法	                      | 描述                     |
| ---                         | ---                     |
| parseFloat(string\[, radix])| 和全局对象 parseFloat() 一样。 |
| parseInt(string\[, radix])  | 和全局对象 parseInt() 一样。 |
| isNaN()	                  | 确定值是否是 NaN。 |
| isFinite()	              | 确定值类型及本身是否是有限数。。 |
| isInteger()	              | 确定值类型是“number”，且是整数。 |
| isSafeInteger()	          | 确定值是否为安全整数 ( -(2^53 - 1) 至 2^53 - 1之间)。 |
| toString()	              | 把数字转换为字符串，使用指定的基数。 |
| toLocaleString()	          | 把数字转换为字符串，使用本地数字格式顺序。 |
| toFixed(num)	              | 把数字转换为字符串，结果的小数点后有指定位数的数字。 |
| toExponential(num)	      | 把对象的值转换为指数计数法。 |
| toPrecision(num)	          | 把数字格式化为指定的长度。 |
| valueOf()	                  | 返回一个 Number 对象的基本数字值。 |