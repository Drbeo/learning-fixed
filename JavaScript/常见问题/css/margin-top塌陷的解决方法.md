### 什么是margin-top塌陷

margin-top塌陷是在CSS的盒子模型中出现的一种现象，描述的是当父元素包裹着一个子元素的时候，  
当给子元素设置margin-top属性时，此时只是想让子元素的边框距离父元素边框有一段距离，  
而却出现了父元素的顶端距离body这个边框出现了位移，这就是margin-top塌陷的现象。

1. 给父盒子添加 border
```css
.parent {
   border: 1px solid transparent; 
}
```
2. 给父盒子添加 padding-top
```css
.parent {
    padding-top: 1px;
}
```
3. 溢出隐藏
```css
.parent {
    overflow:hidden
}
```
4. 给父元素添加position:fixed;
```css
.parent {
    position:fixed
}
```
5. 给父元素设置display：table;
```css
.parent {
    display:table
}
```
6. 给子元素的前面添加一个兄弟元素
```css
.clearfix::before{ 
    content: ''; 
    display: table; 
} 
```


### 页面中元素都有一个隐藏的属性--Block Formatting Content块级格式化上下文（简称BFC）

我们这里简单说一下BFC

具有bfc的元素我们可以抽象的理解成为隔离了的独立容器

那这个隐藏的属性我们如何触发（开启）呢？

方法：

满足下面任一条件即可

浮动元素   float属性值为除了none以外的值

绝对定位元素 position 为 absolute、fixed

display 为inline-blocks,table-cells,table-captions

overflow 为 hidden,auto,scroll

BFC的三个特性：
- 阻止外边距折叠
- 可以包含浮动的元素
- 可以阻止元素被浮动元素覆盖
