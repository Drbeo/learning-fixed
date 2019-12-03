### 纯CSS七大居中方法

如何让元素在浏览器窗口中上下左右居中。  

1. line-height居中法
```css
.parent {
    text-align: center;
    line-height:600px;
    font-size: 0;
}
.child {
    display: inline-block;
    vertical-align: middle;
}
```
注：600px必须为父元素的高度，这里还需注意的一点是font-size需设为零，若未写该属性将导致元素并不能精确垂直居中。  
    
该方法即为我面试时所答的方法，缺点很明显，父元素高度须确定。（兼容IE8+）

2. table-cell居中法
```css
.parent {
    display: table-cell;
    text-align: center;
    vertical-align: middle;
}
.child {
    display: inline-block;
}
```
    注：兼容IE8+

3. 上下左右定位+margin居中法
```css
.parent {
    position: relative;
}
.child {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
}
```
注：兼容IE8+

4. 50%定位+margin居中法
```css
.parent {
    position: relative;
}
.child {
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -200px 0 0 -200px;
}
```
注：200px须为该子元素的宽高的一半。例如该子元素宽为100px，高为50px，那么margin取值为-25px 0 0 -50px。该方法缺点是须确定子元素宽高。（兼容IE8+）

5. 50%定位+translate居中法
```css
.parent {
    position: relative;
}
.child {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}
```
注：该方法使用了CSS3 transform属性，适合用于移动端。（兼容IE9+）

6. Flexbox居中法
```css
.parent {
    display: flex;
    justify-content: center;
    align-items: center;
}
```    
注：该方法使用了Flexbox弹性布局，移动端兼容性也存在很大问题。（兼容IE10+）

7. Flexbox+margin居中法
```css
.parent {
    display: flex;
}
.child {
    margin: auto;
}
```
注：同上，兼容IE10+
    
以上就是今天所要介绍的七种纯CSS居中方法，各有各的优缺点，须根据实际情况选择最佳方案。