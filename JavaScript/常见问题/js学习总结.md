1. JavaScript一切皆对象，对象分类型，typeof 返回的是字符串 数组用Array.isArray() null 用=== undefind检测变量是否定义  

2. Array有slice,splice,concat,join,indexof map,reduce,filter sort(直接根据比较结果排序，把所有元素转化为字符串，字符串根据ASCII码排)  

3. 闭包是携带状态的函数，返回的函数没有立即调用，所以不能使用可能改变的变量，返回的函数记录了外部函数的参数和局部变量。  

4. function* 生成器函数返回生成器对象，然后通过多次调用yield返回值，也是记录状态的函数。  

5. 除了null,undefind外都有toString方法  

6. 避免语法冲突，例如匿名函数调用时要加（）,(123).toString  

7. Arrow function 是匿名函数 两种形式 this已经定带词法作用域（自动绑定）。  

8. 函数定义有两种形式 函数单独调用this指向undefined或者window（非strict）,函数对象调用apply和call方法绑带this（手动绑定）  

9. const let 定义块级作用域 var 声明的变量在函数内部就是函数作用域，全局变量都绑定在window上。  

10. 解构赋值多个变量数组需要用[],一般对象用{}括好，可以缺省，可以有默认值，可以当参数接收对象类对象，Array对象

11. for in 遍历对象属性 for of，forEach遍历集合对象，map对应的是entry

12. 对象类对象键值默认只能是字符串，新类型Map的键值可以是其他类型

13. iterable类型的forEach，Array的filer的回调函数有三个参数，元素，索引，self

14. 函数可以接受任意个变量，可以不定义参数，通过agruements（不是数组，类似）获取变量值。...rest可变参数（以数组的形式接收）

15. 包装对象类型是object