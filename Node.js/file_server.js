'use strict'
let fs = require('fs') // 读取本地文件
let url = require('url') // 解析URL
let path = require('path') // 解析本地文件目录
let http = require('http') // 处理网络请求

let workDir = path.resolve() // D:\Development\learning-fixed\nodejs
// console.log(workDir)
console.log(workDir, process.argv)
    // [
    //     'D:\\Program Files\\nodejs\\node.exe',
    //     'D:\\Development\\learning-fixed\\nodejs\\file_server.js'
    // ]
// let filePath = path.join(workDir, 'output1.txt')

let server = http.createServer((request, response) => {
    if (path.normalize(decodeURI(request.url)) !== decodeURI(request.url)) {
        response.statusCode = 403;
        response.end();
        return;
    }
    let pathName = url.parse(request.url).pathname;
    let filePath = path.join(workDir, pathName);
    fs.stat(filePath, (err, stats) => {
        if (!err && stats.isFile()) {
            // 没有出错并且文件存在:
            console.log(200, request.url);
            // 发送200响应:
            response.writeHead(200);
            // 将文件流导向response:
            fs.createReadStream(filePath).pipe(response);
        } else {
            // 出错了或者文件不存在:
            console.log('404 ' + request.url);
            // 发送404响应:
            response.writeHead(404);
            response.end('404 Not Found');
        }
    })
})
server.listen(8000);

console.log('Server is running at http://127.0.0.1:8000/');
