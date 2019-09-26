
### JavaScript 数组
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