### js怎么生成重复字符串

JS生成重复字符串再新ES标准中很简单，只需使用字符串的repeat方法就可以实现：
1. repeat方法
```js
var str = 'Test';
str = str.repeat(3); // TestTestTest
// 但是这个方法是ES2015中新增的标准，在老规范中是无法被兼容的。但是，我们也可以用其他的方法实现：
```
2. 使用Array join 方法
```js
var str = 'Test';
str = new Array(3 + 1).join(str); // TestTestTest
```
3. for循环遍历
```js
// 另外，使用最原始的循环遍历也是可以的：
var str = 'Test';
for (var i = 3 - 1; i; i--) {
    str += 'Test';
}
// TestTestTest
```
4. 兼容的repeat方法
```js
// str => TestTestTest
// 因此，我们可以得到一个兼容的repeat方法：
String.prototype.repeat = String.prototype.repeat || function(num) {
    return new Array(num + 1).join(this);
};
 
'Test'.repeat(3); // TestTestTest
```