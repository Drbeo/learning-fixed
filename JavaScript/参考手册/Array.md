        
### JavaScript 数组

数组是一种特殊的变量，它能够一次存放一个以上的值。数组可以用一个单一的名称存放很多值，并且还可以通过引用索引号来访问这些值。
```js
var cars = ["Saab", "Volvo", "BMW"];
var cars = new Array("Saab", "Volvo", "BMW"); // 请使用 [] 取代new Array()
```
请不要最后一个元素之后写逗号（比如 "BMW",）。可能存在跨浏览器兼容性问题。

数组是一种特殊类型的对象。

您可以在数组保存对象。您可以在数组中保存函数。你甚至可以在数组中保存数组：

**数组和对象的区别**

在 JavaScript 中，数组使用数字索引。

在 JavaScript 中，对象使用命名索引。

数组是特殊类型的对象，具有数字索引。


### 判断数组
```js
Array.isArray(fruits);     // 返回 true

function isArray(x) {
    return x.constructor.toString().indexOf("Array") > -1;
}

var fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits instanceof Array     // 返回 true
```


### Array 对象属性

| 属性	        | 描述                     |
| ---           | ---                     |
| constructor	| 返回对创建此对象的数组函数的引用。 |
| length	    | 设置或返回数组中元素的数目。 |
| prototype	    | 使您有能力向对象添加属性和方法。 |

### Array 对象方法

| 方法	          | 描述                     |
| ---             | ---                     |
| Array.from(arrayLike\[, mapFn\[, thisArg]])	  | 从类数组对象或者可迭代对象中创建一个新的数组实例。 |
| Array.isArray(arr) | 用来判断某个变量是否是一个数组对象。 |
| Array.of(element0\[, element1\[, ...\[, elementN]]])	  | 根据一组参数来创建新的数组实例，支持任意的参数数量和类型。 |


### Array 修改器方法 

这些方法会改变调用它们的对象自身的值。

| 方法	                               | 描述                     |
| ---                                  | ---                     |
| copyWithin(target\[, start\[, end]]) |浅复制数组的一部分到同一数组中的另一个位置，并返回它，不会改变原数组的长度。|
| fill(value\[, start\[, end]])        |用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引。|
| shift()                              | 删除数组的第一个元素，并返回这个元素。|
| pop()                                | 删除数组的最后一个元素，并返回这个元素。|
| unshift(element1, ..., elementN)     | 在数组的开头增加一个或多个元素，并返回数组的新长度。|
| push(element1, ..., elementN)        |在数组的末尾增加一个或多个元素，并返回数组的新长度。 |
| reverse()                            | 将数组中元素的位置颠倒，并返回该数组。|
| sort(\[compareFunction])             | 对数组元素进行排序，并返回当前数组。|
| splice(start\[, deleteCount\[, item1\[, item2\[, ...]]]])| 在任意的位置给数组添加或删除任意个元素。|

### Array 访问方法 

这些方法绝对不会改变调用它们的对象的值，只会返回一个新的数组或者返回一个其它的期望值。

| 方法	                                 | 描述                     |
| ---                                    | ---                     |
| slice(\[begin\[, end]])                | 抽取当前数组中的一段元素组合成一个新数组。|
| concat(arr1\[, arr2\[, ...\[, arrN]]]) | 合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。|
| join(\[separator])                     | 连接所有数组元素组成一个字符串。|
| toString()                             | 返回由所有数组元素组合而成的字符串。以,隔开每项。|
| toLocaleString()                       | 返回由所有数组元素组合而成的本地化后的字符串。|
| includes(valueToFind\[, fromIndex])    | 判断当前数组是否包含某指定的值，如果是返回 true，否则返回 false。|
| indexOf()                              | 返回数组中第一个与指定值相等的元素的索引，如果找不到这样的元素，则返回 -1。|
| lastIndexOf()                          | 返回数组中最后一个（从右边数第一个）与指定值相等的元素的索引，如果找不到这样的元素，则返回 -1。|
| valueOf()	                             | 返回数组对象的原始值 |

### Array 迭代方法 

在下面的众多遍历方法中，有很多方法都需要指定一个回调函数作为参数。  

在每一个数组元素都分别执行完回调函数之前，数组的length属性会被缓存在某个地方，  

所以，如果你在回调函数中为当前数组添加了新的元素，那么那些新添加的元素是不会被遍历到的。  

此外，如果在回调函数中对当前数组进行了其它修改，比如改变某个元素的值或者删掉某个元素，  
 
那么随后的遍历操作可能会受到未预期的影响。总之，不要尝试在遍历过程中对原数组进行任何修改，  

虽然规范对这样的操作进行了详细的定义，但为了可读性和可维护性，请不要这样做。

| 方法	                                                         | 描述                     |
| ---                                                            | ---                     |
| forEach(callback(currentValue\[, index\[, array]])\[, thisArg])| 对数组的每个元素执行一次提供的函数。|
| map(callback(currentValue\[, index\[, array]])\[, thisArg])    | 返回一个由回调函数的返回值组成的新数组。|
| every((callback(element\[, index\[, array]])\[, thisArg])      | 如果数组中的每个元素都满足测试函数，则返回 true，否则返回 false。|
| some((callback(element\[, index\[, array]])\[, thisArg])       | 如果数组中至少有一个元素满足测试函数，则返回 true，否则返回 false。|
| filter(callback(element\[, index\[, array]])\[, thisArg])      | 将所有在过滤函数中返回 true 的数组元素放进一个新数组中并返回。|
| find(element\[, index\[, array]])\[, thisArg])                 | 返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。|
| findIndex(element\[, index\[, array]])\[, thisArg])            | 找到第一个满足测试函数的元素并返回那个元素的索引，如果找不到，则返回 -1。|
| reduce(callback(accumulator, currentValue\[, index\[, array]])\[, initialValue])     | 从左到右为每个数组元素执行一次回调函数，并把上次回调函数的返回值放在一个暂存器中传给下次回调函数，并返回最后一次回调函数的返回值。|
| reduceRight(callback(accumulator, currentValue\[, index\[, array]])\[, initialValue])| 从右到左为每个数组元素执行一次回调函数，并把上次回调函数的返回值放在一个暂存器中传给下次回调函数，并返回最后一次回调函数的返回值。|
| flat(\[depth])| 扁平化数组，按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。|
| flatMap(callback(currentValue\[, index\[, array]])\[, thisArg])| 扁平化数组，首先使用映射函数映射每个元素，然后将结果压缩成一个新数组。它与 map 和 深度值1的 flat 几乎相同，但 flatMap 通常在合并成一种方法的效率稍微高一些。|
| entries()                                                      | 返回一个新的数组迭代器对象，该迭代器会包含所有数组元素的键值对。|
| keys()                                                         | 返回一个数组迭代器对象，该迭代器会包含所有数组元素的键。|
| values()                                                       | 返回一个数组迭代器对象，该迭代器会包含所有数组元素的值。|
| \[Symbol.iterator]()                                           | @@iterator 属性和 Array.prototype.values() 属性的初始值均为同一个函数对象。|
| \[Symbol.species]()                                            | 访问器属性返回 Array 的构造函数。|
