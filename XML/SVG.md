
## 语法

### svg概述

```html
<svg width="100px" height="100px">
 <circle id="mycircle" cx="50" cy="50" r="50" />
</svg>
```
<svg width="100px" height="100px">
 <circle id="mycircle" cx="50" cy="50" r="50" />
</svg>

`width`属性和`height`属性，指定了 SVG 图像在 HTML 元素中所占据的宽度和高度。
除了相对单位，也可以采用绝对单位（单位：像素）。
如果不指定这两个属性，SVG 图像的大小默认为300像素（宽）x 150像素（高）。

如果只想展示 SVG 图像的一部分，就要指定`viewBox`属性。

* style 属性用来定义 CSS 属性
    - fill 填充颜色（rgb 值、颜色名或者十六进制值）
    - fill-opacity 填充颜色透明度（合法的范围是：0 - 1）
    - stroke 边框的颜色
    - stroke-width 边框的宽度
    - stroke-opacity 边框颜色的透明度（合法的范围是：0 - 1）
    - opacity 整个元素的透明值（合法的范围是：0 - 1）
* transform 用来定义SVG的基本变换
### 线条 line
* x1 属性在 x 轴定义线条的开始
* y1 属性在 y 轴定义线条的开始
* x2 属性在 x 轴定义线条的结束
* y2 属性在 y 轴定义线条的结束

```html
<svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <line x1="0" y1="0" x2="300" y2="300"
    style="stroke:rgb(99,99,99);stroke-width:2"/>
</svg>
```
<svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <line x1="0" y1="0" x2="300" y2="300"
    style="stroke:rgb(99,99,99);stroke-width:2"/>
</svg>

### 折线 polyline
> 用来创建仅包含直线的形状。
```html
<svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <polyline points="0,0 0,20 20,20 20,40 40,40 40,60"
    style="fill:white;stroke:red;stroke-width:2"/>
</svg>
```

<svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <polyline points="0,0 0,20 20,20 20,40 40,40 40,60"
    style="fill:white;stroke:red;stroke-width:2"/>
</svg>

### 方形 rect
* rect 元素的 width 和 height 属性可定义矩形的高度和宽度
* x 属性定义矩形的左侧位置（例如，x="0" 定义矩形到浏览器窗口左侧的距离是 0px）
* y 属性定义矩形的顶端位置（例如，y="0" 定义矩形到浏览器窗口顶端的距离是 0px）
* rx 和 ry 属性可使矩形产生圆角。

```html
<svg width="100%" height="100%" version="1.1"xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="20" rx="20" ry="20" width="250" height="100" 
    style="fill:red;stroke:black;stroke-width:5;opacity:0.5"/>
</svg>
```
<svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" style="background-color:#fff;">
    <rect x="20" y="20" rx="20" ry="20" width="250" height="100" 
    style="fill:red;fill-opacity: 0.8;stroke:black;stroke-opacity:0.7;stroke-width:6;opacity:0.8"/>
</svg>

### 圆形 circle
* cx 和 cy 属性定义圆点的 x 和 y 坐标。如果省略 cx 和 cy，圆的中心会被设置为 (0, 0)
* r 属性定义圆的半径。
```html
<svg width="100%" height="100%" version="1.1"xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="50" r="40" stroke="black" stroke-width="2" fill="red"/>
</svg>
```
<svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="50" r="40" stroke="black" stroke-width="2" fill="red"/>
</svg>

### 椭圆 ellipse
* cx 属性定义圆点的 x 坐标
* cy 属性定义圆点的 y 坐标
* rx 属性定义水平半径
* ry 属性定义垂直半径
```html
<svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="300" cy="150" rx="200" ry="80"
    style="fill:rgb(200,100,50);stroke:rgb(0,0,100);stroke-width:2"/>
</svg>
```
<svg width="100%" height="300" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="300" cy="150" rx="200" ry="80"
    style="fill:rgb(200,100,50);stroke:rgb(0,0,100);stroke-width:2"/>
</svg>

### 多边形 polygon
> 创建含有不少于三个边的图形。
* points 属性定义多边形每个角的 x 和 y 坐标
```html
<svg width="100%" height="250px" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <polygon points="220,100 300,210 170,250"
    style="fill:#cccccc;stroke:#f30;stroke-width:2"/>
</svg>
```
<svg width="100%" height="250px" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <polygon points="220,100 300,210 170,250 123,234"
    style="fill:#cccccc;stroke:#f30;stroke-width:2"/>
</svg>

> 空心五角星
```html
<svg height="210" width="500">
    <polygon points="100,10 40,198 190,78 10,78 160,198" 
    style="fill:lime;stroke:purple;stroke-width:5;fill-rule:evenodd;" />
</svg>
```

<svg height="210" width="500">
    <polygon points="100,10 40,198 190,78 10,78 160,198" 
    style="fill:lime;stroke:purple;stroke-width:5;fill-rule:evenodd;" />
</svg>

### 路径 path
path 标签用来创建一条路径，路径元素的基本属性是路径数据，用 d='path data' 语法来定义。路径数据中包含了点集和绘制指令。

点集就是一组“x y”格式的坐标，以空格隔开，以指令字母开头。

* M = moveto 移动到某坐标位置
* L = lineto 直线连线
* H = horizontal lineto 水平连线
* V = vertical lineto 垂直连线
* C = curveto 曲线连接
* S = smooth curveto 平滑曲线连接
* Q = quadratic Bézier curve 二次贝塞尔曲线连接
* T = smooth quadratic Bézier curveto 平滑二次贝塞尔曲线连接
* A = elliptical Arc 椭圆弧连接
* Z = closepath 关闭路径
> 注释：以上所有命令均允许小写字母。大写表示绝对定位，小写表示相对定位。

1. **三角形**
```html
<!--首先移动到坐标(150,0)，接着连线到坐标(75,200)，再接着连线到坐标(225,220)，最后结束路径回到起点(150,0)。-->
<svg height="210" width="400">
  <path d="M150 0 L75 200 L225 200 Z" />
</svg>
```
<svg height="210" width="400">
  <path d="M150 0 L75 200 L225 200 Z" />
</svg>

2. 一个螺旋
```html
<svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M153 334
    C153 334 151 334 151 334
    C151 339 153 344 156 344
    C164 344 171 339 171 334
    C171 322 164 314 156 314
    C142 314 131 322 131 334
    C131 350 142 364 156 364
    C175 364 191 350 191 334
    C191 311 175 294 156 294
    C131 294 111 311 111 334
    C111 361 131 384 156 384
    C186 384 211 361 211 334
    C211 300 186 274 156 274"
    style="fill:white;stroke:red;stroke-width:2"/>
</svg>
```
<svg width="300px" height="400px" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M153 334
    C153 334 151 334 151 334
    C151 339 153 344 156 344
    C164 344 171 339 171 334
    C171 322 164 314 156 314
    C142 314 131 322 131 334
    C131 350 142 364 156 364
    C175 364 191 350 191 334
    C191 311 175 294 156 294
    C131 294 111 311 111 334
    C111 361 131 384 156 384
    C186 384 211 361 211 334
    C211 300 186 274 156 274"
    style="fill:white;stroke:red;stroke-width:2"/>
</svg>

3. 贝塞尔曲线
贝塞尔曲线是计算机矢量图形学中曲线绘制的基础，一般的矢量图形软件通过它来精确画出曲线。
贝塞尔曲线由线段与节点组成，节点是可拖动的支点，线段像可伸缩的皮筋，我们在Photoshop里看到的钢笔工具就是来做这种矢量曲线的。

多个贝塞尔曲线连接起来就可以拟合出真实感的手绘曲线。而这通过鼠标绘制是难以完成的。

三次贝塞尔曲线（Cubic）使用4个点，2个端点和2个控制点来控制曲线绘制

二次贝塞尔曲线使用3个点来控制曲线的绘制，即2个端点和中间的控制点，通过移动控制点来改变曲线

<svg height="400" width="450">
    <path id="lineAB" d="M 100 350 l 150 -300" stroke="red" stroke-width="3" fill="none" />
    <path id="lineBC" d="M 250 50 l 150 300" stroke="red" stroke-width="3" fill="none" />
    <path d="M 175 200 l 150 0" stroke="green" stroke-width="3" fill="none" />
    <path d="M 100 350 q 150 -300 300 0" stroke="blue" stroke-width="5" fill="none" />
    <!-- 标注起点、终点和控制点 -->
    <g stroke="black" stroke-width="3" fill="black">
        <circle id="pointA" cx="100" cy="350" r="3" />
        <circle id="pointB" cx="250" cy="50" r="3" />
        <circle id="pointC" cx="400" cy="350" r="3" />
    </g>
    <!-- 给点加上文本标签 -->
    <g font-size="30" font-family="sans-serif" fill="black" stroke="none" text-anchor="middle">
        <text x="100" y="350" dx="-30">A</text>
        <text x="250" y="50" dy="-10">B</text>
        <text x="400" y="350" dx="30">C</text>
    </g>
</svg>

* 中间的蓝色曲线是二次贝塞尔曲线，使用小写`q`指令绘制，其他线条和圆点是用来辅助说明贝塞尔曲线的数学原理的。
* A是起点、C是终点，B是中间控制点。
* 注意小写l指令使用相对位移来进行连线，比如“l 150 -300”，代表从当前点x方向向右（正方向）移动150，y方向向上（负方向）移动300。小写q指令语法类似。

> 由于绘制路径的复杂性，因此强烈建议您使用 SVG 编辑器(如：[Inscape](https://inkscape.org/))来创建复杂的图形。


### text
传统图像中的文本实际上是已经栅格（像素）化为了点阵图，并不再具备文本的特性。  
而SVG图像中的文本由于是独立对象存在，要灵活得多，可以实现更多的图文交互效果，而且可以被搜索引擎所索引。  
不过SVG文本不能自动换行，不适合用来描述大段动态文本，这是一个缺点。

* x 指明文字的左下角的X坐标。如果定义的属性值没有给出单位，则缺省是当前用户坐标系的单位，缺省值为0。
* y 指明文字的左下角的Y坐标。缺省值为0。
* fill 用来指明文本的填充颜色。
* xmlns:xlink=""这一句引入了xlink命名空间，以支持链接元素属性定义。
* xlink:href和html中的a链接类似，只是多了xlink的命名空间前缀，用来表示链接的目的地址。
```html
<svg height="60" width="200">
  <text x="0" y="15" fill="red" transform="rotate(30 20,40)">I love SVG</text>
</svg>
<svg height="90" width="200">
    <text x="10" y="20" style="fill:red;">text 元素可以通过
        <tspan x="10" y="45">tspan 元素来分组成多行来显示。</tspan>
        <tspan x="10" y="70">每个 tspan 元素可以定义自己独特的格式和位置。</tspan>
    </text>
    <a xlink:href="https://techbrood.com" target="_blank">
        <text x="0" y="15" fill="red">SVG中也可以使用链接元素，和文本结合构成跳转链接文本。</text>
    </a>
</svg>
```
<svg height="60" width="200">
  <text x="0" y="15" fill="red" transform="rotate(30 20,40)">I love SVG</text>
</svg>

<svg height="100" width="100%">
    <text x="10" y="20" style="fill:red;">text 元素可以通过
        <tspan x="10" y="45">tspan 元素来分组成多行来显示。</tspan>
        <tspan x="10" y="70">每个 tspan 元素可以定义自己独特的格式和位置。</tspan>
    </text>
    <a xlink:href="https://techbrood.com" target="_blank">
        <text x="0" y="95" fill="blue">SVG中也可以使用链接元素，和文本结合构成跳转链接文本。</text>
    </a>
</svg>

### SVG 描边
* stroke 定义线条、文本或元素轮廓（outline）的颜色。
* stroke-width 定义线条、文本或元素轮廓的宽度。
* stroke-linecap 定义线帽，也就是线条两端的外观。(可取值为：butt | round | square | inherit)
* stroke-linejoin 定义线条连接类型，也就是两个线条交接点的外观。(可取值为：miter | round | bevel | inherit)
* stroke-dasharray 创建虚线。
    - stroke-dasharray的语法为：逗号或空格分隔的长度（或百分比）数值列表
    - 第一条虚线为长度5的线段+长度5的空白，如此反复，从起点X坐标5绘制到215。
    - 第二条虚线类似，小段线段的长度为10。
    - 第三条线型复杂一些：线段20+空白10+线段5+空白5+线段5+空白10，如此反复，绘制出整条虚线
```html
<svg width="12cm" height="2cm" viewBox="0 0 1200 200" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink">
    <desc>三种线帽示意图</desc>
    <rect x="1" y="1" width="1198" height="198" fill="none" stroke="blue" />
    <style type="text/css">
        <![CDATA[ .thick {
            stroke: black;
            stroke-width: 70
        }
        .thin {
            stroke: #ffcccc;
            stroke-width: 5
        }
        text {
            text-anchor: middle;
            font-size: 50px;
            font-family: Verdana
        }
        circle {
            fill: #ffcccc;
            stroke: none
        }
        ]]>
    </style>
    <defs>
        <line id="line1" x1="-125" x2="125" y1="0" y2="0" fill="none" />
        <g id="circles">
            <circle id="circle1" cx="-125" cy="0" r="8" />
            <circle id="circle2" cx="125" cy="0" r="8" />
        </g>
    </defs>
    <g transform="translate(200,75)">
        <use class="thick" xlink:href="#line1" stroke-linecap="butt" />
        <use class="thin" xlink:href="#line1" />
        <use xlink:href="#circles" />
        <text y="90">'butt' cap</text>
    </g>
    <g transform="translate(600,75)">
        <use class="thick" xlink:href="#line1" stroke-linecap="round" />
        <use class="thin" xlink:href="#line1" />
        <use xlink:href="#circles" />
        <text y="90">'round' cap</text>
    </g>
    <g transform="translate(1000,75)">
        <use class="thick" xlink:href="#line1" stroke-linecap="square" />
        <use class="thin" xlink:href="#line1" />
        <use xlink:href="#circles" />
        <text y="90">'square' cap</text>
    </g>
</svg>
```
<svg width="12cm" height="3cm" viewBox="0 0 1200 200" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink">
    <desc>三种线帽示意图</desc>
    <rect x="1" y="1" width="1198" height="198" fill="none" stroke="blue" />
    <style type="text/css">
        <![CDATA[ .thick {
            stroke: black;
            stroke-width: 70
        }
        .thin {
            stroke: #ffcccc;
            stroke-width: 5
        }
        text {
            text-anchor: middle;
            font-size: 50px;
            font-family: Verdana
        }
        circle {
            fill: #ffcccc;
            stroke: none
        }
        ]]>
    </style>
    <defs>
        <line id="line1" x1="-125" x2="125" y1="0" y2="0" fill="none" />
        <g id="circles">
            <circle id="circle1" cx="-125" cy="0" r="8" />
            <circle id="circle2" cx="125" cy="0" r="8" />
        </g>
    </defs>
    <g transform="translate(200,75)">
        <use class="thick" xlink:href="#line1" stroke-linecap="butt" />
        <use class="thin" xlink:href="#line1" />
        <use xlink:href="#circles" />
        <text y="90">'butt' cap</text>
    </g>
    <g transform="translate(600,75)">
        <use class="thick" xlink:href="#line1" stroke-linecap="round" />
        <use class="thin" xlink:href="#line1" />
        <use xlink:href="#circles" />
        <text y="90">'round' cap</text>
    </g>
    <g transform="translate(1000,75)">
        <use class="thick" xlink:href="#line1" stroke-linecap="square" />
        <use class="thin" xlink:href="#line1" />
        <use xlink:href="#circles" />
        <text y="90">'square' cap</text>
    </g>
</svg>

```html
<svg width="12cm" height="3.5cm" viewBox="0 0 1200 350" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink">
    <desc>Example linecap - demonstrates three stroke-linecap values</desc>
    <rect x="1" y="1" width="1198" height="348" fill="none" stroke="blue" />
    <style type="text/css">
        <![CDATA[ .thick {
            stroke: black;
            stroke-width: 70
        }
        .thin {
            stroke: #ffcccc;
            stroke-width: 5
        }
        text {
            text-anchor: middle;
            font-size: 50px;
            font-family: Verdana
        }
        circle {
            fill: #ffcccc;
            stroke: none
        }
        ]]>
    </style>
    <defs>
        <path id="path1" d="M -125,150 L 0,0 L 125,150" fill="none" />
        <circle id="circle1" cx="0" cy="0" r="8" />
    </defs>
    <g transform="translate(200,75)">
        <use class="thick" xlink:href="#path1" stroke-linejoin="miter" />
        <use class="thin" xlink:href="#path1" />
        <use xlink:href="#circle1" />
        <text y="230">'miter' join</text>
    </g>
    <g transform="translate(600,75)">
        <use class="thick" xlink:href="#path1" stroke-linejoin="round" />
        <use class="thin" xlink:href="#path1" />
        <use xlink:href="#circle1" />
        <text y="230">'round' join</text>
    </g>
    <g transform="translate(1000,75)">
        <use class="thick" xlink:href="#path1" stroke-linejoin="bevel" />
        <use class="thin" xlink:href="#path1" />
        <use xlink:href="#circle1" />
        <text y="230">'bevel' join</text>
    </g>
</svg>
```
<svg width="12cm" height="3.5cm" viewBox="0 0 1200 350" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink">
    <desc>Example linecap - demonstrates three stroke-linecap values</desc>
    <rect x="1" y="1" width="1198" height="348" fill="none" stroke="blue" />
    <style type="text/css">
        <![CDATA[ .thick {
            stroke: black;
            stroke-width: 70
        }
        .thin {
            stroke: #ffcccc;
            stroke-width: 5
        }
        text {
            text-anchor: middle;
            font-size: 50px;
            font-family: Verdana
        }
        circle {
            fill: #ffcccc;
            stroke: none
        }
        ]]>
    </style>
    <defs>
        <path id="path1" d="M -125,150 L 0,0 L 125,150" fill="none" />
        <circle id="circle1" cx="0" cy="0" r="8" />
    </defs>
    <g transform="translate(200,75)">
        <use class="thick" xlink:href="#path1" stroke-linejoin="miter" />
        <use class="thin" xlink:href="#path1" />
        <use xlink:href="#circle1" />
        <text y="230">'miter' join</text>
    </g>
    <g transform="translate(600,75)">
        <use class="thick" xlink:href="#path1" stroke-linejoin="round" />
        <use class="thin" xlink:href="#path1" />
        <use xlink:href="#circle1" />
        <text y="230">'round' join</text>
    </g>
    <g transform="translate(1000,75)">
        <use class="thick" xlink:href="#path1" stroke-linejoin="bevel" />
        <use class="thin" xlink:href="#path1" />
        <use xlink:href="#circle1" />
        <text y="230">'bevel' join</text>
    </g>
</svg>

```html
<svg height="80" width="300">
  <g fill="none" stroke="black" stroke-width="4">
    <path stroke-dasharray="5,5" d="M5 20 l215 0" />
    <path stroke-dasharray="10,10" d="M5 40 l215 0" />
    <path stroke-dasharray="20,10,5,5,5,10" d="M5 60 l215 0" />
  </g>
</svg>
```
<svg height="80" width="300">
  <g fill="none" stroke="black" stroke-width="4">
    <path stroke-dasharray="5,5" d="M5 20 l215 0" />
    <path stroke-dasharray="10,10" d="M5 40 l215 0" />
    <path stroke-dasharray="20,10,5,5,5,10" d="M5 60 l215 0" />
  </g>
</svg>

### use
### g
### defs
### pattern
### image
### animate
### animateTransform

### SVG 滤镜
SVG过滤器（也称为滤镜）用来给SVG图形添加特效，和PS软件中的滤镜效果类似。
* filter 引用一个滤镜
* feBlend 图片混合
* feColorMatrix 颜色变换
* feComponentTransfer 
  - feFuncR
  - feFuncG
  - feFuncB
  - feFuncA
* feComposite 图片合成
* feConvolveMatrix 卷积变换
* feDiffuseLighting 散射光
* feDisplacementMap 位移图
* feFlood 探照灯
* feGaussianBlur 高斯模糊
* feImage 图像
* feMerge 合并
* feMorphology 变形
* feOffset 投影效果
* feSpecularLighting 特殊光照
* feTile 瓦片效果
* feTurbulence 紊乱效果
* feDistantLight 远光效果
* fePointLight 点射效果
* feSpotLight 聚光效果

#### SVG高斯模糊

所有的SVG过滤器定义在一个 `<defs> `元素中。`<defs>` 元素是definition的简写，用来包含特定元素的定义。

`<filter>` 元素用来定义一个SVG过滤器。`<filter>` 元素有一个必需的id属性用来唯一标识该过滤器。然后图形通过这个id来应用该过滤器。
* <filter> 标签的 id 属性可为滤镜定义一个唯一的名称（同一滤镜可被文档中的多个元素使用）
* filter:url 属性用来把元素链接到滤镜。当链接滤镜 id 时，和CSS id选择器语法类似，要使用 `#` 字符
* 滤镜效果是通过 <feGaussianBlur> 标签进行定义的。
* fe前缀是filter effects的缩写，可用于所有的滤镜。
* <feGaussianBlur> 标签的 stdDeviation 属性可定义模糊的程度
* in="SourceGraphic" 表示效果应用于整个图形元素
```html
<svg height="110" width="110">
  <defs>
    <filter id="f1" x="0" y="0">
      <feGaussianBlur in="SourceGraphic" stdDeviation="20"></feGaussianBlur>
    </filter>
  </defs>
  <rect width="90" height="90" stroke="green" stroke-width="3" fill="yellow" filter="url(#f1)"></rect>
</svg>
```
<svg height="110" width="110">
  <defs>
    <filter id="f1" x="0" y="0">
      <feGaussianBlur in="SourceGraphic" stdDeviation="20"></feGaussianBlur>
    </filter>
  </defs>
  <rect width="90" height="90" stroke="green" stroke-width="3" fill="yellow" filter="url(#f1)"></rect>
</svg>

####  SVG投影效果
```html
<svg height="140" width="140">
  <defs>
    <filter id="f4" x="0" y="0" width="200%" height="200%">
      <feOffset result="offOut" in="SourceGraphic" dx="20" dy="20"></feOffset>
      <feColorMatrix result="matrixOut" in="offOut" type="matrix" 
      values="0.5 0 0 0   0 0 0.5 0 0   0 0 0 0.5 0   0 0 0 0 1 0"></feColorMatrix>
      <feGaussianBlur result="blurOut" in="matrixOut" stdDeviation="10"></feGaussianBlur>
      <feBlend in="SourceGraphic" in2="blurOut" mode="normal"></feBlend>
    </filter>
  </defs>
  <rect width="90" height="90" stroke="green" stroke-width="3" fill="yellow" filter="url(#f4)"></rect>
</svg>
```
<svg height="140" width="140">
  <defs>
    <filter id="f4" x="0" y="0" width="200%" height="200%">
      <feOffset result="offOut" in="SourceGraphic" dx="20" dy="20"></feOffset>
      <feColorMatrix result="matrixOut" in="offOut" type="matrix" 
      values="0.5 0 0 0   0 0 0.5 0 0   0 0 0 0.5 0   0 0 0 0 1 0"></feColorMatrix>
      <feGaussianBlur result="blurOut" in="matrixOut" stdDeviation="10"></feGaussianBlur>
      <feBlend in="SourceGraphic" in2="blurOut" mode="normal"></feBlend>
    </filter>
  </defs>
  <rect width="90" height="90" stroke="green" stroke-width="3" fill="yellow" filter="url(#f4)"></rect>
</svg>

* 定义1个矩形（rect）元素和2个滤镜元素feOffset和feBlend
* rect元素通过id（为f1）链接到滤镜feOffset，表示将产生一个在x和y方向上偏移（20px，20px）的投影
* feBlend滤镜效果使得源元素覆盖在投影元素之上
* in="SourceGraphic" 表示效果应用于整个图形元素
* in="SourceGraphic" 只把模糊效果使用在Alpha通道上，而不是整个RGBA像素。
* 在例子1上通过feGaussianBlur滤镜添加了模糊效果，该模糊效果只应用在投影元素上。
* stdDeviation属性用来定义高斯模糊的程度。
* <feColorMatrix> 过滤器用来把投影图片的RGB色值分别调整为原来的0.2倍，效果就是图片变暗接近黑色，如果把矩阵乘法的系数调整为0，就是black颜色=rbga（0,0,0,1)。

#### SVG线性渐变
和CSS3一样，SVG也支持渐变，渐变就是从一个颜色到另外一个颜色的平滑过渡，SVG支持单个元素使用多个渐变。渐变方式有两种：线性和径向。

<linearGradient> 元素必须被包含在一个 <defs> 标签中。如前面所述，<defs> 标签用来包含特殊元素（如滤镜、渐变等）。

线性渐变可以被定义为水平、垂直或角度渐变：
* 当y1和y2相等，x1和x2不同时，创建水平渐变
* 当x1和x2相等，y1和y2不同时，创建垂直渐变
* 当y1和y2不同并且x1和x2也不同时，创建角度渐变（Angular gradients）
* <linearGradient> 标签的id属性定义了该渐变的唯一标识名称
* 渐变的颜色范围可以由2个或多个颜色组成。每一种颜色都通过一个<stop>标签来指定。 offset属性用来定义渐变颜色开始和结束的位置。
* fill 属性把椭圆（ellipse）元素链接到该渐变。
```html
<svg height="150" width="400">
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:rgb(255,255,0);stop-opacity:1"></stop>
      <stop offset="100%" style="stop-color:rgb(255,0,0);stop-opacity:1"></stop>
    </linearGradient>
  </defs>
  <ellipse cx="200" cy="70" rx="85" ry="55" fill="url(#grad1)"></ellipse>
    <text fill="#ffffff" font-size="45" font-family="Verdana" x="150" y="86">SVG</text>
</svg>
```
<svg height="150" width="400">
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:rgb(255,255,0);stop-opacity:1"></stop>
      <stop offset="100%" style="stop-color:rgb(255,0,0);stop-opacity:1"></stop>
    </linearGradient>
  </defs>
  <ellipse cx="200" cy="70" rx="85" ry="55" fill="url(#grad1)"></ellipse>
  <text fill="#ffffff" font-size="45" font-family="Verdana" x="200" y="86">SVG</text>
</svg>

#### SVG径向渐变
* <radialGradient> 标签的id属性定义了该渐变的唯一标识名称
* cx, cy 和 r 属性定义了最外面的圆，fx 和 fy 定义了最里面的圆
* 渐变的颜色范围可以由2个或多个颜色组成。每个颜色通过一个 <stop> 标签来指定。offset属性用来定义渐变颜色开始和结束的位置。
* fill 属性把椭圆（ellipse）元素链接到该渐变。
修改cx, cy, r, fx, fy的值，你就可以实现不同的径向渐变效果。

```html
<svg height="150" width="500">
  <defs>
    <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
      <stop offset="0%" style="stop-color:rgb(255,255,255);      stop-opacity:0"></stop>
      <stop offset="100%" style="stop-color:rgb(0,0,255);stop-opacity:1"></stop>
    </radialGradient>
  </defs>
  <ellipse cx="200" cy="70" rx="85" ry="55" fill="url(#grad1)"></ellipse>
</svg>
```
<svg height="150" width="500">
  <defs>
    <radialGradient id="grad2" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
      <stop offset="0%" style="stop-color:rgb(255,255,255);      stop-opacity:0"></stop>
      <stop offset="100%" style="stop-color:rgb(0,0,255);stop-opacity:1"></stop>
    </radialGradient>
  </defs>
  <ellipse cx="200" cy="70" rx="85" ry="55" fill="url(#grad2)"></ellipse>
</svg>