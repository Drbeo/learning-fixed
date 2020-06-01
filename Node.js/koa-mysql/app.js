const Sequelize = require('sequelize');
const config = require('./mysql');
// 创建一个sequelize对象实例：
let sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    port: config.port,
    dialect: 'mysql',  /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
    pool: {
        max: 5,
        min: 0,
        idle: 30000
    }
});
// 定义模型Student，告诉Sequelize如何映射数据库表：
let Student = sequelize.define('student', {
    name: Sequelize.STRING(100),
    sex: Sequelize.STRING(100),
    class_id: Sequelize.STRING(10),
    gender: Sequelize.STRING(100),
    score: Sequelize.BIGINT,
    id_card: Sequelize.BIGINT,
    createTime: {
        type: Sequelize.BIGINT, // 指定值的类型
        field: 'create_time' // 指定存储在表中的键名称
    },
    updateTime: {
        type: Sequelize.BIGINT, // 指定值的类型
        field: 'update_time' // 指定存储在表中的键名称
    },
}, {
    timestamps: false // 关闭Sequelize的自动添加timestamp的功能
});
// 差房间
let now = Date.now();

// Student.create({
//     name: '令狐伤',
//     sex: '男',
//     class_id: '1',
//     gender: 'M',
//     score: 88,
//     id_card: 115,
//     createTime: now,
//     updateTime: now
// }).then(function (p) {
//     console.log('created.' + JSON.stringify(p));
// }).catch(function (err) {
//     console.log('failed: ' + err);
// });

(async () => {
    let student = await Student.create({
        name: '令狐伤',
        sex: '男',
        class_id: '1',
        gender: 'M',
        score: 88,
        id_card: 115,
        createTime: now,
        updateTime: now
    });
    console.log('created: ' + JSON.stringify(student));
})();

// 查询数据

(async () => {
    let students = await Student.findAll({
        where: {
            name: '令狐伤'
        }
    });
    console.log(`find ${students.length} students:`);
    for (let p of students) {
        console.log(JSON.stringify(p));
    }
})();

// 如果要更新数据，可以对查询到的实例调用save()方法：
(async () => {
    let p = await queryFromSomewhere();
    p.gender = true;
    p.updatedAt = Date.now();
    p.version ++;
    await p.save();
})();


// 如果要删除数据，可以对查询到的实例调用destroy()方法：

(async () => {
    let p = await queryFromSomewhere();
    await p.destroy();
})();


/**
 * Model
 * 我们把通过sequelize.define()返回的Pet称为Model，它表示一个数据模型。
 * 我们把通过Pet.findAll()返回的一个或一组对象称为Model实例，每个实例都可以直接通过JSON.stringify序列化为JSON字符串。
 * 但是它们和普通JSON对象相比，多了一些由Sequelize添加的方法，比如save()和destroy()。调用这些方法我们可以执行更新或者删除操作。
 * 所以，使用Sequelize操作数据库的一般步骤就是：
 * 首先，通过某个Model对象的findAll()方法获取实例；
 * 如果要更新实例，先对实例属性赋新值，再调用save()方法；
 * 如果要删除实例，直接调用destroy()方法。
 * 注意findAll()方法可以接收where、order这些参数，这和将要生成的SQL语句是对应的。
 */
