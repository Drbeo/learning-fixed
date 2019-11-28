JavaScript中的月份日期要格式化处理的，从日期中取出月份后做如下处理就可以表示成两位数了：
```js
var  d = new Date(); 
var formatedMonth = ("0" + (d.getMonth() + 1)).slice(-2);

或者也可以这么处理:
Date.prototype.getMonthFormatted = function() {
    var month = this.getMonth() + 1;
    return month < 10 ? '0' + month : '' + month; // 如果是1-9月，那么前面补0
}
```
slice() 方法可提取字符串的某个部分，并以新的字符串返回被提取的部分。

语法
`stringObject.slice(start,end)`

参数	描述

start	要抽取的片断的起始下标。如果是负数，则该参数规定的是从字符串的尾部开始算起的位置。也就是说，-1 指字符串的最后一个字符，-2 指倒数第二个字符，以此类推。

end	紧接着要抽取的片段的结尾的下标。若未指定此参数，则要提取的子串包括 start 到原字符串结尾的字符串。如果该参数是负数，那么它规定的是从字符串的尾部开始算起的位置。