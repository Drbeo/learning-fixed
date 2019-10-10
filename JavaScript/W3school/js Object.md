尽量不要以构造函数形式来调用 `new Object(\[value])`，任何时候请使用对象字面量
`{}`

#### Object 构造函数属性

| 属性	             | 描述                     |
| ---                | ---                     |
| Object.length	     | length 属性，值为 1。 |
| Object.prototype	 | 可以为所有 Object 类型的对象添加属性。 |

#### Object 构造函数方法

| 属性	                                         | 描述                     |
| ---                                            | ---                     |  
| Object.assign(target, ...sources)              |通过复制一个或多个对象来创建一个新的对象。 |
| Object.keys(object)                            |返回一个包含所有给定对象自身可枚举属性名称的数组。 |
| Object.values(object)                          |返回给定对象自身可枚举值的数组。 |
| Object.entries(object)                         |返回给定对象自身可枚举属性的 \[key, value] 数组。 |
| Object.create(proto\[, propertiesObject])      |使用指定的原型对象和属性创建一个新对象。 |
| Object.defineProperty(object, prop, descriptor)|给对象添加一个属性并指定该属性的配置。 |
| Object.defineProperties(object, props)         |给对象添加多个属性并分别指定它们的配置。 |
| Object.freeze(object)                          |冻结对象：其他代码不能删除或更改任何属性。 |
| Object.getOwnPropertyDescriptor(object, prop)  |返回对象指定的属性配置。 |
| Object.getOwnPropertyNames(object)             |返回一个数组，它包含了指定对象所有的可枚举或不可枚举的属性名。 |
| Object.getOwnPropertySymbols(object)           |返回一个数组，它包含了指定对象自身所有的符号属性。 |
| Object.getPrototypeOf(object)                  |返回指定对象的原型对象。 |
| Object.is(value1, value2)                      |比较两个值是否相同。所有 NaN 值都相等（这与==和===不同）。 |
| Object.isExtensible(object)                    |判断对象是否可扩展。 |
| Object.isFrozen(object)                        |判断对象是否已经冻结。 |
| Object.isSealed(object)                        |判断对象是否已经密封。 |
| Object.preventExtensions(object)               |防止对象的任何扩展。 |
| Object.seal(object)                            |防止其他代码删除对象的属性。 |
| Object.setPrototypeOf(object, prototype)       |设置对象的原型（即内部 \[\[Prototype]] 属性）。 |


#### Object 实例和 Object 原型对象

| 属性	                           | 描述                     |
| ---                              | ---                     |  
| obj.constructor                  |返回创建实例对象的 Object 构造函数的引用。 |
| obj.hasOwnProperty(prop)         |返回一个布尔值，表示某个对象是否含有指定的属性，而且此属性非原型链继承的。 |
| obj.prototype.isPrototypeOf(prop)|返回一个布尔值，表示指定的对象是否在本对象的原型链中。 |
| obj.propertyIsEnumerable(prop)   |返回一个布尔值，表示指定的属性是否可枚举。 |
| obj.toString()                   |返回对象的字符串表示。 |
| obj.toLocaleString()             |直接调用 toString()方法。 |
| obj.valueOf()                    |方法返回指定对象的原始值。 |
| obj.toSource()                   |返回字符串表示此对象的源代码形式，可以使用此字符串生成一个新的相同的对象。 |
