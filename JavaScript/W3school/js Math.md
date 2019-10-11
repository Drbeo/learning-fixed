
Math 对象并不像 Date 和 String 那样是对象的类，因此没有构造函数 Math()，像 Math.sin() 这样的函数只是函数，不是某个对象的方法。您无需创建它，通过把 Math 作为对象使用就可以调用其所有属性和方法。

> 由于js计算是先转换成二进制计算，小数会无限循环，js计算内部未做处理，所以计算不正确

其他语言也有此情况 只要是采用IEEE 754 Floating-point的浮点数编码方式来表示浮点数时，则会产生这类问题。[http://0.30000000000000004.com/](http://0.30000000000000004.com/)
```js
0.1+0.2 === 0.30000000000000004
1000000000000000128 === 1000000000000000129
0.7 * 180 === 125.99999999999999
```


**需要大量精确计算，请使用 [Math.js](https://github.com/josdejong/mathjs/)**

#### Math 对象属性

| 属性	     | 描述                     |
| ---        | ---                     |
|Math.E      | 算术常量 e，欧拉常数，也是自然对数的底数, 约等于 2.718 (2.718281828459045).|
|Math.LN2    | 2的自然对数, 约等于 0.693 (0.6931471805599453).|
|Math.LN10   | 10的自然对数, 约等于 2.303 (2.302585092994046).|
|Math.LOG2E  | 以2为底e的对数, 约等于 1.443 (1.4426950408889634).|
|Math.LOG10E | 以10为底e的对数, 约等于 0.434 (0.4342944819032518).|
|Math.PI     | 圆周率，一个圆的周长和直径之比，约等于 3.14159 (3.141592653589793).|
|Math.SQRT1_2| 1/2的平方根, 约等于 0.707 (0.7071067811865476).|
|Math.SQRT2  | 2的平方根,约等于 1.414 (1.4142135623730951).|

#### Math 对象方法

> 需要注意的是三角函数（`sin(), cos(), tan(),asin(), acos(), atan(), atan2()`）是以弧度返回值的。可以通过除法（Math.PI / 180）把弧度转换为角度，也可以通过其他方法来转换。

> 需要注意的是很多数学函数都有一个精度，并且精度在不同环境下也是不相同的。这就意味着不同的浏览器会给出不同的结果，甚至相同的 JS 引擎在不同的OS或者架构下也会给出不同的结果。

| 属性 ES(实验阶段)	      | 描述                     |
| ---                     | ---                     |
| Math.abs(x)             | 返回x的绝对值. |
| Math.floor(x)           | 返回x向下取整后的值。 |
| Math.ceil(x)            | 返回x向上取整后的值. |
| Math.max(\[x\[,y\[,…]]])| 返回0个到多个数值中最大值. |
| Math.min(\[x\[,y\[,…]]])| 返回0个到多个数值中最小值. |
| Math.random()           | 返回0到1之间的伪随机数. Math.floor(Math.random()*(m - n) + n); m-n之间的随机数|
| Math.round(x)           | 返回四舍五入后的整数. |
| Math.pow(x,y)           | 返回x的y次幂. |
| Math.sqrt(x)            | 返回x的平方根. |
| Math.cbrt(x)  ES        | 返回x的立方根. |
| Math.hypot(\[x\[,y\[,…]]]) ES| 返回其参数平方和的平方根。 |
| Math.exp(x)             | 返回 Ex, 当x为参数,  E 是欧拉常数 (2.718...), 自然对数的底. |
| Math.expm1(x) ES        | 返回 exp(x)-1 的值. |
| Math.log(x)             | 返回一个数的自然对数（loge， 即ln）。 |
| Math.log1p(x) ES        | 返回 1 加上一个数字的的自然对数（loge， 即ln）。 |
| Math.log10(x) ES        | 返回以10为底数的x的对数。 |
| Math.log2(x)  ES        | 返回以2为底数的x的对数。 |
| Math.clz32(x) ES        | 返回一个32位整数的前导零的数量。 |
| Math.imul(x)  ES        | 返回32位整数乘法的结果。 |
| Math.trunc(x) ES        | 返回x的整数部分,去除小数. |
| Math.fround(x) ES       | 返回数字的最接近的单精度浮点型表示。 |
| Math.sign(x)  ES        | 返回x的符号函数, 判定x是正数,负数还是0. |
| Math.sin(x)             | 返回正弦值. |
| Math.sinh(x)  ES        | 返回x的双曲正弦值. |
| Math.cos(x)             | 返回x的余弦值. |
| Math.cosh(x)  ES        | 返回x的双曲余弦值. |
| Math.acos(x)            | 返回x的反余弦值. |
| Math.acosh(x) ES        | 返回x的反双曲余弦值. |
| Math.asin(x)            | 返回x的反正弦值. |
| Math.asinh(x) ES        | 返回x的反双曲正弦值. |
| Math.tan(x)             | 返回x的正切值. |
| Math.tanh(x)  ES        | 返回x的双曲正切值. |
| Math.atan(x)            | 以介于 -PI/2 与 PI/2 弧度之间的数值来返回 x 的反正切值. |
| Math.atanh(x) ES        | 返回 x 的反双曲正切值. |
| Math.atan2(y, x)        | 返回 y/x 的反正切值. |
| Math.toSource()         | 返回字符串 "Math". 非标准|