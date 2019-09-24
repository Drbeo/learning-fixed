const mysql = require('./mysql')
// 其他配置
let config = {
    appName: 'Nodejs,Koajs,MySql', // 项目名称
    appApi: '/fixed' // api 路径
}
module.exports = {mysql, config};
