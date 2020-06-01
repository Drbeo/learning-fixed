/**
 * mysql 配置
 * @type {{database: string, password: string, port: number, host: string, username: string}}
 */
let config = {
    database: 'test', // 使用哪个数据库
    username: 'root', // 用户名
    password: 'root', // 口令
    host: 'localhost', // 主机名
    port: 3308 // 端口号，MySQL默认3306
};

module.exports = config;
