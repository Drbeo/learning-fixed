
### JavaScript 字符串

转义字符（\）用于在字符串中插入其他特殊字符。

| 代码	| 结果| 
| ---   | ---    |
| \b	| 退格键 |
| \f	| 换页 |
| \n	| 新行 |
| \r	| 回车 |
| \t	| 水平制表符 |
| \v	| 垂直制表符 |
| \0	| 空字符 |
| \'	| 单引号 |
| \"	| 双引号 |
| \\	| 反斜杠 |
| \uXXXX|	unicode 码 |
| \u{X} |... \u{XXXXXX}	unicode codepoint |
| \xXX	| Latin-1 字符(x小写)|

### JavaScript 字符串方法

字符串是不可变的：字符串不能更改，只能替换。
```js
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt.length;
var indexOfTxt = txt.indexOf("AB"); // 第二个参数为起始位置
var lastIndexOfTxt = txt.lastIndexOf("AB"); // 第二个参数为起始位置
var searchTxt = txt.search("CD");
// search()  方法无法设置第二个开始位置参数。
// indexOf() 方法无法设置更强大的搜索值（正则表达式）。

// 提取部分字符串
slice(start, end) // 起始索引（开始位置），终止索引（结束位置）。
substring(start, end) // 无法接受负的索引
substr(start, length) // 起始索引（开始位置）, 第二个参数规定被提取部分的长度。

// 替换字符串内容
var n = str.replace("Microsoft", "W3School"); // 只替换首个匹配 对大小写敏感。 如需替换所有匹配，请使用正则表达式的 g 标志（用于全局搜索）：

// 转换为大写和小写
var text1 = "Hello World!";       // 字符串
var text2 = text1.toUpperCase();  // text2 是被转换为大写的 text1
var text3= text1.toLowerCase();  // text3 是被转换为小写的 text1

text3 = text1.concat(" ",text2); // 连接两个或多个字符串 可以直接使用 + ‘字符串’ + 或`模板字符串拼接`
text3.trim()  // 只能删除字符串两端的空白符

// 提取字符串字符
text1.charAt(0);    // 返回字符串中指定下标（位置）的字符串
text1.charCodeAt(0);    // 返回字符串中指定索引的字符 unicode 编码

// 属性访问（Property Access）

text1[0];  // H 允许对字符串的属性访问 [ ]

txt.split("|");   // 把字符串转换为数组(以括号里面的字符串分割)

```

#### String 对象属性
| 属性	      | 描述                     |
| ---         | ---                     |
| constructor | 对创建该对象的函数的引用   |
| length	  | 字符串的长度              |
| prototype	  | 允许您向对象添加属性和方法 |

#### String 对象方法

| 方法 （Q不推荐）                          | 描述| 
| ---                                     | --- |
| --- 与HTML有关 ---                       ||
| anchor(anchorname)	                  | 创建 HTML 锚。 |
| link() 	                              | 将字符串显示为链接。 |
| big()	            Q                     | 用大号字体显示字符串。 |
| blink()	        Q                     | 显示闪动字符串。 |
| bold()	        Q                     | 使用粗体显示字符串。 |
| fixed()	        Q                     | 以打字机文本显示字符串。 |
| fontcolor(color)	Q                     | 使用指定的颜色来显示字符串。 |
| fontsize(size)	Q                     | 使用指定的尺寸来显示字符串。 |
| italics()	        Q                     | 使用斜体显示字符串。 |
| strike()	        Q                     | 使用删除线来显示字符串。 |
| sub()	            Q                     | 把字符串显示为下标。 |
| sup()	            Q                     | 把字符串显示为上标。 |
| small()	        Q                     | 使用小字号来显示字符串。 |
|---- 与HTML无关的方法---                   | |
| charAt(index)	                          | 返回在指定位置的字符。 |
| charCodeAt(index)	                      | 返回在指定的位置的字符的 Unicode 编码。 |
| codePointAt(index)                      | 返回在字符串中的给定索引的编码单元体现的数字，如果在索引处没找到元素则返回 undefined 。 |
| concat(str, str1,...)	                  | 连接字符串。 |
| indexOf(searchvalue \[, fromindex])	  | 检索字符串。未找到返回-1 |
| lastIndexOf(searchvalue \[, fromindex]) | 从后向前搜索字符串。未找到返回-1 |
| includes(searchvalue \[, fromindex])    | 如果当前字符串包含被搜寻的字符串，就返回 true；否则返回 false。 |
| endsWith(searchvalue \[, length])       | 如果传入的子字符串在搜索字符串的末尾则返回true；否则将返回 false。 |
| startsWith(searchvalue \[, length])      | 如果传入的子字符串在搜索字符串的起始位置则返回true；否则将返回 false。 |
| match(searchvalue/regexp )	          | 找到一个或多个正则表达式的匹配。 |
| replace(regexp/substr, replacement)     | 替换与正则表达式匹配的子串。 |
| repeat(count)                           | 返回指定重复次数的字符串 |
| search(regexp)	                      | 检索与正则表达式相匹配的值。 |
| slice(start, end)	                      | 提取字符串的片断，并在新的字符串中返回被提取的部分。 |
| split(separator \[, howmany])	          | 把字符串分割为字符串数组。 |
| substr(start \[, length])	              | 从起始索引号提取字符串中指定数目的字符。 |
| substring(start \[, stop])	          | 提取字符串中两个指定的索引号之间的字符。 |
| localeCompare(target)	                  | 用本地特定的顺序来比较两个字符串。 |
| toLocaleLowerCase()	                  | 把字符串转换为本地特色小写。 |
| toLocaleUpperCase()	                  | 把字符串转换为本地特色大写。 |
| toLowerCase()	                          | 把字符串转换为小写。 |
| toUpperCase()	                          | 把字符串转换为大写。 |
| toSource()	                          | 代表对象的源代码。 |
| toString()	                          | 返回字符串。 |
| padStart(targetLength \[, padString])   | 返回在当前字符串头部填充指定的字符串，直到达到指定的长度。 如果这个数值小于当前字符串的长度，则返回当前字符串本身。|
| padEnd(targetLength \[, padString])	  | 返回在当前字符串尾部填充指定的字符串，直到达到指定的长度。 如果这个数值小于当前字符串的长度，则返回当前字符串本身。|
| valueOf()	                              | 返回某个字符串对象的原始值。 |
| normalize(\[form])	                  | 返回调用字符串值的Unicode标准化形式。 from四种 Unicode 正规形式 "NFC", "NFD", "NFKC", "NFKD" 其中的一个, 默认值为 "NFC".|
| localeCompare(compareString\[, locales\[, options]])| 如果引用字符存在于比较字符之前则为负数; 如果引用字符存在于比较字符之后则为正数; 相等的时候返回 0 。 |
| fromCharCode(Unicode, Unicode1, ...)	  | 从字符编码创建一个字符串。 |
| fromCodePoint(Unicode, Unicode1, ...)	  | 使用指定的 Unicode 编码位置创建的字符串。。 |
