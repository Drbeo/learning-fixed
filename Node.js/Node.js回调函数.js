
// Node.js 回调函数
let fs = require('fs')
let data = fs.readFileSync('README.md')
console.log('输出文本', data.toString());
