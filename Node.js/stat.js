
// 获取文件信息
'use strict'
let fs = require('fs');
fs.stat('helloword.js', (err, stat) => {
    if (err) {
        console.log(err);
    } else {
        console.log(stat)
    }
})
// Stats {
//     dev: 3243071515,
//     mode: 33206,
//     nlink: 1,
//     uid: 0,
//     gid: 0,
//     rdev: 0,
//     blksize: undefined,
//     ino: 562949954057046,
//     size: 37, // 大小 字节B
//     blocks: undefined,
//     atimeMs: 1563420442723.259,
//     mtimeMs: 1563420442723.259,
//     ctimeMs: 1563420442723.259,
//     birthtimeMs: 1563420442722.7605,
//     atime: 2019-07-18T03:27:22.723Z, // 最后一次访问此文件的时间
//     mtime: 2019-07-18T03:27:22.723Z, // modified 修改时间
//     ctime: 2019-07-18T03:27:22.723Z, // 上次更改状态的时间
//     birthtime: 2019-07-18T03:27:22.723Z // 创建时间
// }
