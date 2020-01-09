
### 一、基本类型与引用类型
ECMAScript 中数据类型可分为：

* 基本类型：String、Number、Boolean、Symbol、null、undefined
* 引用类型：Object、Array、Date、RegExp、Function等

同类型的存储方式：

* 基本类型：基本类型值在内存中占据固定大小，保存在栈内存中
* 引用类型：引用类型的值是对象，保存在堆内存中，而栈内存保存的对象的变量标识符和对象存储在堆内存中的存储地址

不同类型的复制方式：

* 基本类型：从一个变量向另外一个新变量复制基本类型的值，会创建这个值的一个副本，并将该副本复制给新变量
```js
let foo = 1;
let bar = foo;
console.log(foo === bar); // -> true

// 修改foo变量的值并不会影响bar变量的值
let foo = 233;
console.log(foo); // -> 233
console.log(bar); // -> 1
```
* 引用类型：从一个变量向另一个新变量复制引用类型的值，其实复制的是指针，最终两个变量最终都指向同一个对象
```js
let foo = {
  name: 'leeper',
  age: 20
}
let bar = foo;
console.log(foo === bar); // -> true

// 改变foo变量的值会影响bar变量的值
foo.age = 19;
console.log(foo); // -> {name: 'leeper', age: 19}
console.log(bar); // -> {name: 'leeper', age: 19}
```

### 拷贝
* 浅拷贝（一层）：仅仅是复制了引用，彼此之间的操作会互相影响
* 深拷贝（多层）：在堆中重新分配内存，不同的地址，相同的值，互不影响

首先深复制和浅复制只针对像 Object, Array 这样的复杂对象的。简单来说，浅复制只复制一层对象的属性，而深复制则递归复制了所有层级。

#### 1. 浅拷贝

##### 1.1 Object.assign
```js
// 使用Object.assign()，你就可以没有继承就能获得另一个对象的所有属性，快捷好用。 
// Object.assign 方法只复制源对象中可枚举的属性和对象自身的属性。
let obj = { a:1, arr:[2,3]};
let res = Object.assign({}, obj)

console.log(res.arr === obj.arr); // true，指向同一个引用
console.log(res === obj); // false
```

##### 2.1.2 扩展运算符
```js
let obj = { a:1, arr:[2,3]};
let res = {...obj};

console.log(res.arr === obj.arr); // true，指向同一个引用
console.log(res === obj); // false
```

##### 2.1.3 浅拷贝原生实现
```js
const shallowCopy = (sourceObj) => {
  if (typeof sourceObj !== 'object') return;
  let newObj = sourceObj instanceof Array ? [] : {};
  
  for(let key in sourceObj){ 
    if(sourceObj.hasOwnProperty(key)) {
      // 只复制元素自身的属性，不复制原型链上的
      newObj[key] = sourceObj[key];
    }
  }
  return newObj;
}

let obj = { a:1, arr:[2,3]};
let res = shallowCopy(obj);
console.log(res.arr === obj.arr); // true，指向同一个引用
console.log(res.a === obj.a); // false
```
因为浅复制只会将对象的各个属性进行依次复制，并不会进行递归复制，  
而 JavaScript 存储对象都是存地址的，所以浅复制会导致 obj.arr 和 shallowObj.arr 指向同一块内存地址

#### 2.2 深拷贝
##### 2.2.1 JSON 序列化

JSON.stringify()：把一个 js 对象序列化为一个 JSON 字符串
JSON.parse()：把 JSON 字符串反序列化为一个 js 对象
```js
let a = {
    age: 1,
    jobs: {
        first: 'FE'
    }
}
let b = JSON.parse(JSON.stringify(a))
a.jobs.first = 'native'
console.log(b.jobs.first) // FE
```
但是该方法也是有局限性的：

- 会忽略 undefined
- 不能序列化函数（会忽略函数）
- 不能解决循环引用的对象

并且该函数是内置函数中处理深拷贝性能最快的。当然如果你的数据中含有以上三种情况下，可以使用 lodash 的深拷贝函数。
##### 2.2.2 深拷贝的原生实现
```js
const deepCopy = (sourceObj) => {
  if(typeof sourceObj !== 'object') return;
  let newObj = sourceObj instanceof Array ? [] : {};
  
  for(let key in sourceObj){
    if(sourceObj.hasOwnProperty(key)) {
     // 只复制元素自身的属性，不复制原型链上的
      newObj[key] = (typeof sourceObj[key] === 'object' ? deepCopy(sourceObj[key]) : sourceObj[key]);
     }
   }
   return newObj;
}

let obj = { a:1, arr:[2,3]};
let res = deepCopy(obj);
console.log(res.arr === obj.arr); // false，指向不同的引用
console.log(res === obj); // false
```
而深复制则不同，它不仅将原对象的各个属性逐个复制出去，而且将原对象各个属性所包含的对象也依次采用深复制的方法递归复制到新对象上。  
这就不会存在上面 obj 和 shallowObj 的 arr 属性指向同一个对象的问题。

### 2.3 Array 中的拷贝
#### 2.3.1 Array.prototype.slice()
```js
let a = [1, 2, 3, 4];
let b = a.slice();
console.log(a === b); // -> false(当引用类型时需要满足值相等和引用相等才为 true)

a[0] = 5;
console.log(a); // -> [5, 2, 3, 4]
console.log(b); // -> [1, 2, 3, 4]
```

#### 2.3.2 Array.prototype.concat()
```js
let a = [1, 2, 3, 4];
let b = a.concat();
console.log(a === b); // -> false

a[0] = 5;
console.log(a); // -> [5, 2, 3, 4]
console.log(b); // -> [1, 2, 3, 4]
```

#### 2.3.3 综上
看起来 Array 的 slice(), concat() 似乎是深拷贝，再接着看就知道它们究竟是深拷贝还是浅拷贝：
```js
let a = [[1, 2], 3, 4];
let b = a.slice();
console.log(a === b); // -> false

a[0][0] = 0;
console.log(a); // -> [[0, 2], 3, 4]
console.log(b); // -> [[0, 2], 3, 4]
```
同样，对于concat()也进行验证:
```js
let a = [[1, 2], 3, 4];
let b = a.concat();
console.log(a === b); // -> false

a[0][0] = 0;
console.log(a); // -> [[0, 2], 3, 4]
console.log(b); // -> [[0, 2], 3, 4]
```
综上， Array 的 slice 和 concat 方法并不是真正的深拷贝，  
对于 Array 的第一层的元素是深拷贝，而 Array 的第二层 slice 和 concat 方法是复制引用。  
所以，Array 的 slice 和 concat 方法都是浅拷贝。
