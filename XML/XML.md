# XML 可扩展标记语言
 > XML 被设计用来传输和存储数据。  
 > HTML 被设计用来显示数据。

### 什么是 XML?
- XML 指可扩展标记语言（EXtensible Markup Language）
- XML 是一种标记语言，很类似 HTML
- XML 的设计宗旨是传输数据，而非显示数据
- XML 标签没有被预定义。您需要自行定义标签。
- XML 被设计为具有自我描述性。
- XML 是 W3C 的推荐标准

### XML 树结构

 > 文档形成了一种树结构，它从“根部”开始，然后扩展到“枝叶”。
```xml
<?xml version="1.0" encoding="utf-8"?>
<note>
<to>George</to>
<from>John</from>
<heading>Reminder</heading>
<body>Don't forget the meeting!</body>
</note>
```

#### XML 文档形成一种树结构
XML 文档必须包含根元素。该元素是所有其他元素的父元素。

XML 文档中的元素形成了一棵文档树。这棵树从根部开始，并扩展到树的最底端。
```xml
<root>
  <child>
    <subchild>.....</subchild>
  </child>
</root>
```

#### 所有 XML 元素都须有关闭标签
#### XML 标签对大小写敏感
#### XML 必须正确地嵌套
#### XML 文档必须有根元素
#### XML 的属性值须加引号
#### 实体引用
| 代号    | 符号| 描述   |
|---      | --- | ---    |
| `&lt;`  | <   | 小于   |
| `&gt;`  | >   | 大于   |
| `&amp;` | &   | 和号   |
| `&apos;`| '   | 单引号 |
| `&quot;`| "   | 引号   |
#### XML 中的注释
```xml
<!-- This is a comment --> 
```
#### 在 XML 中，空格会被保留
HTML 会把多个连续的空格字符裁减（合并）为一个：

```
HTML:	Hello           my name is David.
输出:	Hello my name is David.
```
在 XML 中，文档中的空格不会被删节。

####  XML 以 LF 存储换行
在 Windows 应用程序中，换行通常以一对字符来存储：回车符 (CR) 和换行符 (LF)。

这对字符与打字机设置新行的动作有相似之处。在 Unix 应用程序中，新行以 LF 字符存储。而 Macintosh 应用程序使用 CR 来存储新行。

#### XML 命名规则
XML 元素必须遵循以下命名规则：

- 名称可以含字母、数字以及其他的字符
- 名称不能以数字或者标点符号开始
- 名称不能以字符 “xml”（或者 XML、Xml）开始
- 名称不能包含空格
- 可使用任何名称，没有保留的字词。

### 使用 CSS 显示 XML
```xml
<?xml version="1.0" encoding="ISO-8859-1"?>
<!--  Copyright w3school.com.cn -->
<!--添加css这行，标签名称隐藏，文本成行文本-->
<!--George John Reminder Don't forget the meeting!-->
<?xml-stylesheet type="text/css" href="cd_catalog.css"?>
<note>
    <to>George</to>
    <from>John</from>
    <heading>Reminder</heading>
    <body>Don't forget the meeting!</body>
</note>
```
```css
CATALOG {
    background-color: #ffffff;
    width: 100%;
}
CD {
    display: block;
    margin-bottom: 30pt;
    margin-left: 0;
}
TITLE {
    color: #FF0000;
    font-size: 20pt;
}
ARTIST {
    color: #0000FF;
    font-size: 20pt;
}
COUNTRY,PRICE,YEAR,COMPANY {
    display: block;
    color: #000000;
    margin-left: 20pt;
}
```
#### 使用 XSLT 显示 XML

XSLT 是首选的 XML 样式表语言。

XSLT (eXtensible Stylesheet Language Transformations) 远比 CSS 更加完善。

使用 XSLT 的方法之一是在浏览器显示 XML 文件之前，先把它转换为 HTML
```xml
<?xml version="1.0" encoding="ISO-8859-1"?>
<?xml-stylesheet type="text/xsl" href="simple.xsl"?>
<breakfast_menu>
  <food>
    <name>Belgian Waffles</name>
    <price>$5.95</price>
    <description>
       two of our famous Belgian Waffles
    </description>
    <calories>650</calories>
  </food>
</breakfast_menu>
```
```xml
<?xml version="1.0" encoding="ISO-8859-1"?>
<!-- Edited with XML Spy v2007 (http://www.altova.com) -->
<html xsl:version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns="http://www.w3.org/1999/xhtml">
  <body style="font-family:Arial,helvetica,sans-serif;font-size:12pt;
        background-color:#EEEEEE">
    <xsl:for-each select="breakfast_menu/food">
      <div style="background-color:teal;color:white;padding:4px">
        <span style="font-weight:bold;color:white">
        <xsl:value-of select="name"/></span>
        - <xsl:value-of select="price"/>
      </div>
      <div style="margin-left:20px;margin-bottom:1em;font-size:10pt">
        <xsl:value-of select="description"/>
        <span style="font-style:italic">
          (<xsl:value-of select="calories"/> calories per serving)
        </span>
      </div>
    </xsl:for-each>
  </body>
</html>
```
#### XML 命名空间（XML Namespaces）
```xml
<h:table xmlns:h="http://www.w3.org/TR/html4/">
   <h:tr>
   <h:td>Apples</h:td>
   <h:td>Bananas</h:td>
   </h:tr>
</h:table>
```
```xml
<f:table xmlns:f="http://www.w3school.com.cn/furniture">
   <f:name>African Coffee Table</f:name>
   <f:width>80</f:width>
   <f:length>120</f:length>
</f:table>
```
#### 默认的命名空间（Default Namespaces）
```
xmlns="namespaceURI"
```
#### XML Namespace (xmlns) 属性
```
xmlns:namespace-prefix="namespaceURI"
```
#### 统一资源标识符（Uniform Resource Identifier (URI)）
统一资源标识符是一串可以标识因特网资源的字符。最常用的 URI 是用来标示因特网域名地址的统一资源定位器(URL)。另一个不那么常用的 URI 是统一资源命名(URN)。在我们的例子中，我们仅使用 URL。
#### 命名空间的实际应用
当开始使用 XSL 时，您不久就会看到实际使用中的命名空间。XSL 样式表用于将 XML 文档转换为其他格式，比如 HTML。

如果您仔细观察下面的这个 XSL 文档，就会看到大多数的标签是HTML标签。
非 HTML 的标签都有前缀 xsl，并由此命名空间标示："http://www.w3.org/1999/XSL/Transform"：
```xml
<?xml version="1.0" encoding="ISO-8859-1"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
<html>
<body>
  <h2>My CD Collection</h2>
  <table border="1">
    <tr>
      <th align="left">Title</th>
      <th align="left">Artist</th>
    </tr>
    <xsl:for-each select="catalog/cd">
    <tr>
      <td><xsl:value-of select="title"/></td>
      <td><xsl:value-of select="artist"/></td>
    </tr>
    </xsl:for-each>
  </table>
</body>
</html>
</xsl:template>

</xsl:stylesheet>
```
### XML CDATA

术语 CDATA 指的是不应由 XML 解析器进行解析的文本数据（Unparsed Character Data）。

在 XML 元素中，"<" 和 "&" 是非法的。

"<" 会产生错误，因为解析器会把该字符解释为新元素的开始。

"&" 也会产生错误，因为解析器会把该字符解释为字符实体的开始。

某些文本，比如 JavaScript 代码，包含大量 "<" 或 "&" 字符。为了避免错误，可以将脚本代码定义为 CDATA。

CDATA 部分中的所有内容都会被解析器忽略。

CDATA 部分由 "<![CDATA[" 开始，由 "]]>" 结束：

解析器会忽略 CDATA 部分中的所有内容。
```xml
<script>
<![CDATA[
function matchwo(a,b)
{
if (a < b && a < 0) then
  {
  return 1;
  }
else
  {
  return 0;
  }
}
]]>
</script>
```

### XML 编码
```
<?xml version="1.0" encoding="UTF-8"?>
```