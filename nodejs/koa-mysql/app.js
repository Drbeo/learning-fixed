const Sequelize = require('sequelize');
const config = require('./mysql');
let sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    port: config.port,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 30000
    }
});

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
    timestamps: false
});

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
