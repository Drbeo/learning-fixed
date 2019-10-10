创建一个 JavaScript Date 实例，该实例呈现时间中的某个时刻。Date 对象则基于 Unix Time Stamp，即自1970年1月1日（UTC）起经过的毫秒数。

#### Date 语法
```js
new Date(); // Thu Oct 10 2019 11:26:19 GMT+0800 (中国标准时间)
new Date(UnixTimeStamp); // 
new Date(dateString);
new Date(year, month [, day [, hours [, minutes [, seconds [, milliseconds]]]]]);
```

#### 获取自 Unix 起始时间以来经过的秒数
```js
var seconds = Math.floor(Date.now() / 1000); // 1570693085
```

#### Date()构造函数有四种基本形式

1. 没有参数
   
    如果没有提供参数，那么新创建的Date对象表示实例化时刻的日期和时间。

2. Unix时间戳
 
   一个 Unix 时间戳（Unix Time Stamp），它是一个整数值，表示自1970年1月1日00:00:00 UTC（the Unix epoch）以来的毫秒数，忽略了闰秒。请注意大多数 Unix 时间戳功能仅精确到最接近的秒。时间戳字符串

3. dateString
   
    表示日期的字符串值。该字符串应该能被 Date.parse() 正确方法识别

4. 分别提供日期与时间的每一个成员

    当至少提供了年份与月份时，这一形式的 Date() 返回的 Date 对象中的每一个成员都来自下列参数。没有提供的成员将使用最小可能值（对日期为1，其他为0）。

    * **year**
    
        表示年份的整数值。 0到99会被映射至1900年至1999年，其它值代表实际年份。参见 示例。
    
    * **month**
    
        表示月份的整数值，从 0（1月）到 11（12月）。
        
    * **day** 可选
    
       表示一个月中的第几天的整数值，从1开始。默认值为1。
       
    * **hours** 可选
    
       表示一天中的小时数的整数值 (24小时制)。默认值为0（午夜）。
       
    * **minutes** 可选
    
       表示一个完整时间（如 01:10:00）中的分钟部分的整数值。默认值为0。
       
    * **seconds** 可选
    
       表示一个完整时间（如 01:10:00）中的秒部分的整数值。默认值为0。
       
    * **milliseconds** 可选
    
       表示一个完整时间的毫秒部分的整数值。默认值为0。

#### Date 对象属性

| 属性	             | 描述                     |
| ---                | ---                     |
| Boolean.length     | Date.length 的值是 7。这是该构造函数可接受的参数个数。 |
| Boolean.prototype	 | Date 构造函数的原型对象。 |
| Boolean.constructor| 返回对创建此对象的 Date 函数的引用。 |

#### Date 对象方法

| 属性	             | 描述                     |
| ---                | ---                     |
| Date.now()	     | 返回自 1970-1-1 00:00:00  UTC（世界标准时间）至今所经过的毫秒数。 |
| Date.parse(dateString)| 解析一个表示日期的字符串，并返回从 1970-1-1 00:00:00 所经过的毫秒数。 |
| Date.UTC(year,month\[,date\[,hours\[,minutes\[,seconds\[,milliseconds]]]]])| 接受和构造函数最长形式的参数相同的参数（从2到7），并返回从 1970-01-01 00:00:00 UTC 开始所经过的毫秒数。 |    

#### Date 实例方法

| 属性	              | 描述                     |
| ---                 | ---                      |
| ----Getter----	  |                          |
| getDate()	          | 根据本地时间返回指定日期对象的月份中的第几天（1-31）。 |
| getDay()            | 根据本地时间返回指定日期对象的星期中的第几天（0-6）。 |  
| getFullYear()       | 根据本地时间返回指定日期对象的年份（四位数年份时返回四位数字）。注意年份|
| getHours()          | 根据本地时间返回指定日期对象的小时（0-23）。|
| getMilliseconds()   | 根据本地时间返回指定日期对象的毫秒（0-999）。|
| getMinutes()        | 根据本地时间返回指定日期对象的分钟（0-59）。|
| getMonth()          | 根据本地时间返回指定日期对象的月份（0-11）。|
| getSeconds()        | 根据本地时间返回指定日期对象的秒数（0-59）。|
| getTime()           | 返回从1970-1-1 00:00:00 UTC（协调世界时）到该日期经过的毫秒数，对于1970-1-1 00:00:00 UTC之前的时间返回负值。|
| getTimezoneOffset() | 返回当前时区的时区偏移。|
| getUTCDate()        | 根据世界时返回特定日期对象一个月的第几天（1-31）。|
| getUTCDay()         | 根据世界时返回特定日期对象一个星期的第几天（0-6）。|
| getUTCFullYear()    | 根据世界时返回特定日期对象所在的年份（4位数）。|
| getUTCHours()       | 根据世界时返回特定日期对象当前的小时（0-23）。|
| getUTCMilliseconds()| 根据世界时返回特定日期对象的毫秒数（0-999）。|
| getUTCMinutes()     | 根据世界时返回特定日期对象的分钟数（0-59）。|
| getUTCMonth()       | 根据世界时返回特定日期对象的月份（0-11）。|
| getUTCSeconds()     | 根据世界时返回特定日期对象的秒数（0-59）。|
| getYear() Q         | 根据特定日期返回年份 (通常 2-3 位数). 使用 getFullYear()。|
| ----Setter----      |                       |
| setDate()           |根据本地时间为指定的日期对象设置月份中的第几天。|
| setFullYear()       |根据本地时间为指定日期对象设置完整年份（四位数年份是四个数字）。|
| setHours()          |根据本地时间为指定日期对象设置小时数。|
| setMilliseconds()   |根据本地时间为指定日期对象设置毫秒数。|
| setMinutes()        |根据本地时间为指定日期对象设置分钟数。|
| setMonth()          |根据本地时间为指定日期对象设置月份。|
| setSeconds()        |根据本地时间为指定日期对象设置秒数。|
| setTime()           |通过指定从 1970-1-1 00:00:00 UTC 开始经过的毫秒数来设置日期对象的时间，对于早于 1970-1-1 00:00:00 UTC的时间可使用负值。|
| setUTCDate()        |根据世界时设置 Date 对象中月份的一天 (1 ~ 31)。|
| setUTCFullYear()    |根据世界时设置 Date 对象中的年份（四位数字）。|
| setUTCHours()       |根据世界时设置 Date 对象中的小时 (0 ~ 23)。|
| setUTCMilliseconds()|根据世界时设置 Date 对象中的毫秒 (0 ~ 999)。|
| setUTCMinutes()     |根据世界时设置 Date 对象中的分钟 (0 ~ 59)。|
| setUTCMonth()       |根据世界时设置 Date 对象中的月份 (0 ~ 11)。|
| setUTCSeconds()     |根据世界时设置 Date 对象中的秒钟 (0 ~ 59)。|
| setYear() Q         |setYear() 方法用于设置年份。请使用 setFullYear() 方法代替。|
| ----Conversion Getter----|                       |
| toTimeString()      |返回Date对象时间部分的字符串。|
| toDateString()      |返回Date对象日期部分的字符串。|
| toISOString()       |把一个日期转换为符合 ISO 8601 扩展格式的字符串。|
| toUTCString()       |把一个日期对象转换为一个以UTC时区计时的字符串。|
| toGMTString() Q     |返回一个基于GMT时区的字符串来表示该日期。请使用toUTCString()方法代替。|
| toJSON()            |方法返回 Date 对象的字符串形式。|
| toLocaleString()    |根据本地时间格式，把 Date 对象转换为字符串。|
| toLocaleTimeString()|根据本地时间格式，把 Date 对象的时间部分转换为字符串。|
| toLocaleDateString()|根据本地时间格式，把 Date 对象的日期部分转换为字符串。|
| toLocaleFormat()    |使用格式字符串将日期转换为字符串。|
| toSource()          |返回该对象的源代码。|
| toString()          |返回一个表示该日期对象的字符串。|
| valueOf()           |返回一个日期对象的原始值。|