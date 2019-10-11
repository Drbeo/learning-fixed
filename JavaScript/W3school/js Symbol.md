Symbol()函数会返回symbol类型的值，该类型具有静态属性和静态方法。它的静态属性会暴露几个内建的成员对象；
它的静态方法会暴露全局的symbol注册，且类似于内建对象类，但作为构造函数来说它并不完整，因为它不支持语法：`"new Symbol()"`。

每个从Symbol()返回的symbol值都是唯一的。一个symbol值能作为对象属性的标识符；这是该数据类型仅有的目的。

symbol 是一种基本数据类型。

### 语法
```
Symbol([description])
```
使用Symbol() 函数的语法，不会在你的整个代码库中创建一个可用的全局symbol类型。
要创建跨文件可用的symbol，甚至跨域（每个都有它自己的全局作用域）,
使用 `Symbol.for()` 方法和 `Symbol.keyFor()` 方法从全局的symbol注册?表设置和取得symbol。

#### Symbol 对象属性
| 属性	             | 描述                     |
| ---                | ---                     |
| Symbol.length	 | 长度属性值为0。 |
| Symbol.prototype	 | 描述symbol构造函数的原型。 |


除了自己创建的symbol，JavaScript还内建了一些在ECMAScript 5 之前没有暴露给开发者的symbol，它们代表了内部语言行为。

| 属性	                  | 描述                     |
| ---                     | ---                     |
| ---迭代 symbols---      |                          |
| Symbol.iterator	      | 一个返回一个对象默认迭代器的方法。被 for...of 使用。 |
| Symbol.asyncIterator    | 一个返回对象默认的异步迭代器的方法。被 for await of 使用。 |
| ---正则表达式 symbols--- |                          |
| Symbol.match	          | 一个用于对字符串进行匹配的方法，也用于确定一个对象是否可以作为正则表达式使用。被 `String.prototype.match()` 使用。 |
| Symbol.replace          | 一个替换匹配字符串的子串的方法. 被`String.prototype.replace()`使用。 |
| Symbol.search           | 一个返回一个字符串中与正则表达式相匹配的索引的方法。被`String.prototype.search()`使用。 |
| Symbol.split            | 一个在匹配正则表达式的索引处拆分一个字符串的方法.。被`String.prototype.split()`使用。|
| ---其他 symbols---      |                          |
|Symbol.hasInstance       |一个确定一个构造器对象识别的对象是否为它的实例的方法。被 instanceof 使用。|
|Symbol.isConcatSpreadable|一个布尔值，表明一个对象是否应该flattened为它的数组元素。被 Array.prototype.concat() 使用。|
|Symbol.unscopables       |拥有和继承属性名的一个对象的值被排除在与环境绑定的相关对象外。|
|Symbol.species           |一个用于创建派生对象的构造器函数。|
|Symbol.toPrimitive       |一个将对象转化为基本数据类型的方法。|
|Symbol.toStringTag       |用于对象的默认描述的字符串值。被 `Object.prototype.toString()` 使用。|

#### Symbol 对象方法

| 属性	             | 描述                     |
| ---                | ---                     |
| Symbol.for(key)	 | 使用给定的key搜索现有的symbol，如果找到则返回该symbol。否则将使用给定的key在全局symbol注册表中创建一个新的symbol。 |
| Symbol.keyFor(sym) | 从全局 symbol 注册表中与某个 symbol 关联的key。 |

#### Symbol 原型属性

| 属性	                      | 描述                     |
| ---                         | ---                     |
| Symbol.prototype.constructor| 返回创建实例原型的函数。默认为Symbol函数。 |
| Symbol.prototype.description| 一个包含symbol描述的只读字符串。 |

#### Symbol 原型方法

| 属性	                           | 描述                     |
| ---                              | ---                     |
| Symbol.prototype.toString()      | 返回包含Symbol描述符的字符串。 |
| Symbol.prototype.valueOf()       | 返回Symbol对象的初始值。 |
| Symbol.prototype\[@@toPrimitive] | 返回Symbol对象的初始值。 |