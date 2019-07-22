### SQL是结构化查询语言的缩写，用来访问和操作数据库系统

注意：SQL对大小写不敏感！！！

***关系数据库的表和表之间需要建立“一对多”，“多对一”和“一对一”的关系，这样才能够按照应用程序的逻辑来组织和存储数据。***

#### 常用数据类型

对于一个关系表，除了定义每一列的名称外，还需要定义每一列的数据类型。关系数据库支持的标准数据类型包括数值、字符串、时间等：

| 名称           |	类型            |	说明                                                                           |
|:---           | :---              |:---                                                                              |
| int           |	整型            |	4字节整数类型，范围约+/-21亿                                                      |
| bigint        |	长整型          |	8字节整数类型，范围约+/-922亿亿                                                   |
| real          |	浮点型          |	4字节浮点数，范围约+/-1038                                                       |
| double        |	浮点型          |	8字节浮点数，范围约+/-10308                                                      |
| decimal(m,n)  |	高精度小数       |	由用户指定精度的小数，例如，DECIMAL(20,10)表示一共20位，其中小数10位，通常用于财务计算 |
| char(n)       |	定长字符串       |	存储指定长度的字符串，例如，CHAR(100)总是存储100个字符的字符串                       |
| varchar(n)    |	变长字符串       |	存储可变长度的字符串，例如，VARCHAR(100)可以存储0~100个字符的字符串                  |
| boolean       |	布尔类型        |	存储True或者False                                                               |
| date          |	日期类型        |	存储日期，例如，2018-06-22                                                       |
| time          |	时间类型        |	存储时间，例如，12:20:59                                                         |
| datetime      |	日期和时间类型   |	存储日期+时间，例如，2018-06-22 12:20:59                                         |

总的来说，SQL语言定义了这么几种操作数据库的能力：

* DDL：Data Definition Language

    DDL允许用户定义数据，也就是创建表、删除表、修改表结构这些操作。通常，DDL由数据库管理员执行。
* DML：Data Manipulation Language

    DML为用户提供添加、删除、更新数据的能力，这些是应用程序对数据库的日常操作。
* DQL：Data Query Language

    DQL允许用户查询数据，这也是通常最频繁的数据库日常操作。
    
### 关系模型

#### 主键

主键是关系表中记录的唯一标识。主键的选取非常重要：主键不要带有业务含义，而应该使用BIGINT自增或者GUID类型。主键也不应该允许NULL。

- 唯一区分不同的记录的这个字段被称为`主键`。
- 选取主键的一个基本原则是：不使用任何业务相关的字段作为主键。
- 作为主键最好是完全业务无关的字段，我们一般把这个字段命名为`id`。
    + 自增整数类型：数据库会在插入数据时自动为每一条记录分配一个自增整数，这样我们就完全不用担心主键重复，也不用自己预先生成主键；
    + 全局唯一GUID类型：使用一种全局唯一的字符串作为主键，类似8f55d96b-8acc-4636-8cb8-76bf8abc2f57。GUID算法通过网卡MAC地址、时间戳和随机数保证任意计算机在任意时间生成的字符串都是不同的，大部分编程语言都内置了GUID算法，可以自己预算出主键。

对于大部分应用来说，通常自增类型的主键就能满足需求。
```warning
 如果使用INT自增类型，那么当一张表的记录数超过2147483647（约21亿）时，会达到上限而出错。使用BIGINT自增类型则可以最多约922亿亿条记录。
```
    
* 联合主键

    关系数据库实际上还允许通过多个字段唯一标识记录，即两个或更多的字段都设置为主键，这种主键被称为联合主键。
    
    可以使用多个列作为联合主键，但联合主键并不常用。

#### 外键

在`students`表中，通过`class_id`的字段，可以把数据与另一张表关联起来，这种列称为外键。

外键并不是通过列名实现的，而是通过定义外键约束实现的：
```
ALTER TABLE students
ADD CONSTRAINT fk_class_id
FOREIGN KEY (class_id)
REFERENCES classes (id);
```
其中，外键约束的名称`fk_class_id`可以任意，`FOREIGN KEY (class_id)`指定了`class_id`作为外键，`REFERENCES classes (id)`指定了这个外键将关联到`classes`表的`id`列（即`classes`表的主键）。

通过定义外键约束，关系数据库可以保证无法插入无效的数据。即如果`classes`表不存在`id=99`的记录，`students`表就无法插入`class_id=99`的记录。

要删除一个外键约束，也是通过`ALTER TABLE`实现的：
```
ALTER TABLE students
DROP FOREIGN KEY fk_class_id;
```
注意：删除外键约束并没有删除外键这一列。删除列是通过`DROP COLUMN ...`实现的。

#### 索引
    
通过对数据库表创建索引，可以提高查询速度。

如果要经常根据`score`列进行查询，就可以对`score`列创建索引：
```
ALTER TABLE students
ADD INDEX idx_score (score);
```
使用`ADD INDEX idx_score (score)`就创建了一个名称为`idx_score`，使用列`score`的索引。索引名称是任意的，索引如果有多列，可以在括号里依次写上，例如：
```
ALTER TABLE students
ADD INDEX idx_name_score (name, score);
```
    
* 唯一索引

    可以保证某一列的值具有唯一性。
    
    在设计关系数据表的时候，看上去唯一的列，例如身份证号、邮箱地址等，因为他们具有业务含义，因此不宜作为主键。
    
    但是，这些列根据业务要求，又具有唯一性约束：即不能出现两条记录存储了同一个身份证号。这个时候，就可以给该列添加一个唯一索引。例如，我们假设students表的name不能重复：
    ```
    ALTER TABLE students
    ADD UNIQUE INDEX uni_name (name);
    ```
    通过`UNIQUE`关键字我们就添加了一个唯一索引。
    
    也可以只对某一列添加一个唯一约束而不创建唯一索引：
    ```
    ALTER TABLE students
    ADD CONSTRAINT uni_name UNIQUE (name);
    ```

### 操作数据库

#### 连接数据库

* mysql
远程 `mysql -h 主机名 -P 端口号默认3306 -D 数据库名 -u 用户名 -p` 例：`mysql -h 192.168.3.99 -P 3306 -D mydb -u root -p`
本地`mysql -u 用户名 -p` 例：`mysql -u root -p`
回车后输入数据库密码

#### 列出所有数据库 `SHOW DATABASES;`

```
mysql> SHOW DATABASES;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
| sys                |
| test_db            |
| test_sql_db        |
+--------------------+
6 rows in set (0.00 sec)
```
其中，`information_schema`、`mysql`、`performance_schema`和`sys`是系统库，不要去改动它们。其他的是用户创建的数据库。

#### 创建一个数据库 `CREATE DATABASE test;`

```
mysql> CREATE DATABASE test;
Query OK, 1 row affected (0.01 sec)
```
    
#### 删除一个数据库 `DROP DATABASE test;`

```
mysql> drop database test;
Query OK, 0 rows affected (0.01 sec)
```
    
#### 切换为当前数据库 `USE test;`

```
mysql> use test
Database changed
```

### 表

* 列出当前数据库的所有表 `SHOW TABLES;`
    ```
    mysql> SHOW TABLES;
    +----------------+
    | Tables_in_test |
    +----------------+
    | students       |
    +----------------+
    1 row in set (0.00 sec)
    ```
* 查看一个表的结构 `DESC students;`
    ```
    mysql> DESC students;
    +-------+--------------+------+-----+---------+-------+
    | Field | Type         | Null | Key | Default | Extra |
    +-------+--------------+------+-----+---------+-------+
    | id    | int(11)      | NO   | PRI | NULL    |       |
    | name  | varchar(255) | NO   |     | NULL    |       |
    | sex   | int(255)     | YES  |     | NULL    |       |
    +-------+--------------+------+-----+---------+-------+
    3 rows in set (0.00 sec)
    ```
* 查看创建表的SQL语句 `SHOW CREATE TABLE students;`
    ```
    mysql> SHOW CREATE TABLE students;
    +----------+----------------------------+
    | Table    | Create Table                |                                                                                                                                                |
    +----------+----------------------------+
    | students | CREATE TABLE `students` (
      `id` int(11) NOT NULL,
      `name` varchar(255) NOT NULL,
      `sex` int(255) DEFAULT NULL,
      PRIMARY KEY (`id`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8 |
    +----------+----------------------------+
    1 row in set (0.00 sec)
    ```
    
* 创建表 `CREATE TABLE table_name`
    ```
    mysql> CREATE TABLE `teachers` (
           `id` int(11) NOT NULL,
           `name` varchar(255) NOT NULL,
           PRIMARY KEY (`id`)
         ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
    Query OK, 0 rows affected, 1 warning (0.02 sec)
    ```
* 删除表 `DROP TABLE table_name`
    ```
    mysql> DROP TABLE teachers;
    Query OK, 0 rows affected (0.01 sec)
    ```
* 修改表
    要给`students`表新增一列`birth`
    ```
    mysql> ALTER TABLE students ADD COLUMN birth VARCHAR(10) NOT NULL;
    Query OK, 0 rows affected (0.01 sec)
    Records: 0  Duplicates: 0  Warnings: 0
    ```
    要修改`birth`列，例如把列名改为`birthday`，类型改为`VARCHAR(20)`：
    ```
    mysql> ALTER TABLE students CHANGE COLUMN birth birthday VARCHAR(20) NOT NULL;
    Query OK, 0 rows affected (0.01 sec)
    Records: 0  Duplicates: 0  Warnings: 0
    ```
* 删除列
    ```
    mysql> ALTER TABLE students DROP COLUMN birthday;
    Query OK, 0 rows affected (0.17 sec)
    Records: 0  Duplicates: 0  Warnings: 0
    ```

### 退出MySQL
* exit 断开了客户端和服务器的连接
    ```
    mysql> exit;
    Bye
    ```

### 使用SQL语句

>本次人物来自`剑网3`

* 插入或替换

    如果我们希望插入一条新记录（`INSERT`），但如果记录已经存在，就先删除原记录，再插入新记录。此时，可以使用`REPLACE`语句，这样就不必先查询，再决定是否先删除再插入：
    ```sql
    REPLACE INTO students (id, class_id, name, gender, score, sex) VALUES (1, 1, '叶凡', 'F', 99, 1);
    --Query OK, 2 rows affected (0.00 sec)
    ```
    若`id=1`的记录不存在，`REPLACE`语句将插入新记录，否则，当前`id=1`的记录将被删除，然后再插入新记录。就是替换掉原来数据,替换之前字段需先添加。

* 插入或更新
    如果我们希望插入一条新记录（`INSERT`），但如果记录已经存在，就更新该记录，此时，可以使用`INSERT INTO ... ON DUPLICATE KEY UPDATE ...`语句：
    ```sql
    INSERT INTO students (id, class_id, name, gender, score, sex) VALUES (3, 1, '叶凡', 'F', 99, '男') ON DUPLICATE KEY UPDATE name='叶凡', gender='F', score=99;
    --Query OK, 1 row affected (0.00 sec)
    ```
    若`id=1`的记录不存在，`INSERT`语句将插入新记录，否则，当前id=1的记录将被更新，更新的字段由`UPDATE`指定。

* 插入或忽略
    如果我们希望插入一条新记录（`INSERT`），但如果记录已经存在，就啥事也不干直接忽略，此时，可以使用`INSERT IGNORE INTO ...`语句：
    ```sql
    INSERT IGNORE INTO students (id, class_id, name, gender, score, sex) VALUES (1, 1, '唐小婉', 'F', 99, '女');
    --Query OK, 0 rows affected, 1 warning (0.00 sec)
    ```
    若`id=1`的记录不存在，`INSERT`语句将插入新记录，否则，不执行任何操作。
* 快照
    如果想要对一个表进行快照，即复制一份当前表的数据到一个新表，可以结合`CREATE TABLE`和`SELECT`：
    ```sql
    -- 对class_id=1的记录进行快照，并存储为新表students_of_class1:
    CREATE TABLE students_of_class SELECT * FROM students WHERE class_id=1;
    -- 只取`class_id`存在的值,就不写后面=哪个值
    ```
    新创建的表结构和`SELECT`使用的表结构完全一致。

* 写入查询结果集
    如果查询结果集需要写入到表中，可以结合`INSERT`和`SELECT`，将`SELECT`语句的结果集直接插入到指定表中。
    
    例如，创建一个统计成绩的表`statistics`，记录各班的平均成绩：
    ```sql
    CREATE TABLE statistics (
        id BIGINT NOT NULL AUTO_INCREMENT,
        class_id BIGINT NOT NULL,
        average DOUBLE NOT NULL,
        PRIMARY KEY (id)
    );
    --Query OK, 0 rows affected (0.02 sec)
    ```
    然后，我们就可以用一条语句写入各班的平均成绩：
    ```sql
    INSERT INTO statistics (class_id, average) SELECT class_id, AVG(score) FROM students GROUP BY class_id;
    --Query OK, 3 rows affected (0.00 sec)
    --Records: 3  Duplicates: 0  Warnings: 0
    ```
    确保`INSERT`语句的列和`SELECT`语句的列能一一对应，就可以在`statistics`表中直接保存查询的结果：
    ```
    select * from statistics;
    +----+----------+---------+
    | id | class_id | average |
    +----+----------+---------+
    |  3 |        2 |      99 |
    |  4 |        6 |      66 |
    |  5 |        1 |      98 |
    +----+----------+---------+
    3 rows in set (0.00 sec)
    ```
    
### 查询数据

#### 基本查询 

`SELECT * FROM <表名>` 查询一个表的所有行和所有列的数据。

使用`SELECT * FROM students`时，`SELECT`是关键字，表示将要执行一个查询，`*`表示“所有列”，`FROM`表示将要从哪个表查询
```
mysql> SELECT * FROM students;
+----+-----------+------+----------+--------+-------+---------+
| id | name      | sex  | class_id | gender | score | id_card |
+----+-----------+------+----------+--------+-------+---------+
|  1 | 唐小婉     | 女   |        2 | F      |    99 | 111     |
|  2 | 叶婧衣     | 女   |        6 | E      |    66 | 212     |
|  3 | 叶凡       | 男   |        1 | F      |    98 | 122     |
+----+-----------+------+----------+--------+-------+---------+
3 rows in set (0.00 sec)
```
```
--计算100+200
SELECT 100+200;
```
许多检测工具会执行一条`SELECT 1;`来测试数据库连接。
`SELECT`查询的结果是一个二维表。

#### 条件查询

` SELECT * FROM <表名> WHERE <条件表达式>` 查询满足查询条件的记录。
```sql
SELECT * FROM students WHERE score >= 80;
+----+-----------+------+----------+--------+-------+---------+
| id | name      | sex  | class_id | gender | score | id_card |
+----+-----------+------+----------+--------+-------+---------+
|  3 | 叶凡       | 男   |        1 | F      |    98 | 122     |
|  1 | 唐小婉     | 女   |        2 | F      |    99 | 111     |
+----+-----------+------+----------+--------+-------+---------+
2 rows in set (0.00 sec)
```
- 多条件都满足查询，使用 `AND` 连接 值为字符串时需要使用`''`, `名 = '值'` `<条件1> AND <条件2>`
    ```sql
    SELECT * FROM students WHERE score >= 80 AND gender = 'M';
    +----+--------+------+----------+--------+-------+---------+
    | id | name   | sex  | class_id | gender | score | id_card |
    +----+--------+------+----------+--------+-------+---------+
    |  3 | 叶凡   | 男   |        1 | M      |    98 | 122     |
    +----+--------+------+----------+--------+-------+---------+
    1 row in set (0.00 sec)
    ```
- 多条件满足其一，使用 `OR` 连接 `<条件1> OR <条件2>`
    ```
    SELECT * FROM students WHERE score >= 80 OR gender = 'M';
    +----+-----------+------+----------+--------+-------+---------+
    | id | name      | sex  | class_id | gender | score | id_card |
    +----+-----------+------+----------+--------+-------+---------+
    |  1 | 唐小婉    | 女   |        2 | F      |    99 | 111     |
    |  2 | 叶婧衣    | 女   |        6 | F      |    66 | 212     |
    |  3 | 叶凡      | 男   |        1 | M      |    98 | 122     |
    +----+-----------+------+----------+--------+-------+---------+
    3 rows in set (0.00 sec)
    ```
- 不符合条件的使用 `NOT`
    `NOT`条件`NOT class_id = 2`其实等价于`class_id <> 2`，因此，`NOT`查询不是很常用。
    ```
    SELECT * FROM students WHERE NOT class_id = 2;
    +----+-----------+------+----------+--------+-------+---------+
    | id | name      | sex  | class_id | gender | score | id_card |
    +----+-----------+------+----------+--------+-------+---------+
    |  2 | 叶婧衣    | 女   |        6 | F      |    66 | 212     |
    |  3 | 叶凡      | 男   |        1 | M      |    98 | 122     |
    +----+-----------+------+----------+--------+-------+---------+
    2 rows in set (0.00 sec)
    ```
- 要组合三个或者更多的条件，就需要用小括号`()`表示如何进行条件运算
    ```
    SELECT * FROM students WHERE (score < 80 OR score > 90) AND gender = 'M';
    +----+--------+------+----------+--------+-------+---------+
    | id | name   | sex  | class_id | gender | score | id_card |
    +----+--------+------+----------+--------+-------+---------+
    |  3 | 叶凡   | 男   |        1 | M      |    98 | 122     |
    +----+--------+------+----------+--------+-------+---------+
    1 row in set (0.00 sec)
    ```
- 条件优先级
    `NOT` > `AND` > 'OR'
- 不常见语法
    `<>`判断不相等 `name <> 'abc'`
    `LIKE`判断相似 `name LIKE '%bc%'` `%`表示任意字符，例如`'ab%'`将匹配`'ab'，'abc'，'abcd'`
    
#### 投影查询
  
查询没列或某几列数据, 按查询顺序排列

返回某些列的数据，而不是所有列的数据，使用`SELECT 列1, 列2, 列3 FROM ...`，让结果集仅包含指定列。这种操作称为投影查询。
```
SELECT id, score, name FROM students;
+----+-------+-----------+
| id | score | name      |
+----+-------+-----------+
|  3 |    98 | 叶凡      |
|  2 |    66 | 叶婧衣    |
|  1 |    99 | 唐小婉    |
+----+-------+-----------+
3 rows in set (0.00 sec)
```
`SELECT`语句可以对结果集的列进行重命名。它的语法是`SELECT 列1 别名1, 列2 别名2, 列3 别名3 FROM ...`。
```
SELECT id, score points, name FROM students;
+----+--------+-----------+
| id | points | name      |
+----+--------+-----------+
|  3 |     98 | 叶凡      |
|  2 |     66 | 叶婧衣    |
|  1 |     99 | 唐小婉    |
+----+--------+-----------+
3 rows in set (0.00 sec)
```
同样可以和`WHERE`同时使用
```
SELECT id, score points, name FROM students WHERE gender = 'M';
+----+--------+--------+
| id | points | name   |
+----+--------+--------+
|  3 |     98 | 叶凡   |
+----+--------+--------+
1 row in set (0.00 sec)
```

#### 排序

默认`ASC`按从小到大顺序排列, `ASC`可以省略, `SELECT */列名 FROM 表 ORDER BY 条件`
```
SELECT id, name, gender, score FROM students ORDER BY score;
+----+-----------+--------+-------+
| id | name      | gender | score |
+----+-----------+--------+-------+
|  2 | 叶婧衣    | F      |    66 |
|  3 | 叶凡      | M      |    98 |
|  1 | 唐小婉    | F      |    99 |
+----+-----------+--------+-------+
3 rows in set (0.00 sec)
```
按从大到小倒序排列
```
SELECT id, name, gender, score FROM students ORDER BY score DESC;
+----+-----------+--------+-------+
| id | name      | gender | score |
+----+-----------+--------+-------+
|  1 | 唐小婉    | F      |    99 |
|  3 | 叶凡      | M      |    98 |
|  2 | 叶婧衣    | F      |    66 |
+----+-----------+--------+-------+
3 rows in set (0.00 sec)
```
多条件排序
```
SELECT id, name, gender, score FROM students ORDER BY score DESC, gender;
+----+-----------+--------+-------+
| id | name      | gender | score |
+----+-----------+--------+-------+
|  1 | 唐小婉    | F      |    99 |
|  3 | 叶凡      | M      |    98 |
|  4 | 叶知秋    | M      |    98 |
|  2 | 叶婧衣    | F      |    66 |
+----+-----------+--------+-------+
4 rows in set (0.00 sec)
```
如果有`WHERE`子句，那么`ORDER BY`子句要放到`WHERE`子句后面。即先查询再排序
```
SELECT id, name, gender, score FROM students WHERE class_id = 1 ORDER BY score DESC;
+----+-----------+--------+-------+
| id | name      | gender | score |
+----+-----------+--------+-------+
|  3 | 叶凡      | M      |    98 |
|  4 | 叶知秋    | M      |    98 |
+----+-----------+--------+-------+
2 rows in set (0.00 sec)
```

#### 分页查询

`LIMIT <M> OFFSET <N>` 对结果集从`N`号记录开始, 最多取`M`条。
- `LIMIT`总是设定为`pageSize`；
- `OFFSET`计算公式为`pageSize * (pageIndex - 1)`。
```
SELECT id, name, gender, score FROM students ORDER BY score DESC LIMIT 2 OFFSET 10;
+----+-----------+--------+-------+
| id | name      | gender | score |
+----+-----------+--------+-------+
|  1 | 唐小婉    | F      |    99 |
|  4 | 叶知秋    | M      |    98 |
+----+-----------+--------+-------+
2 rows in set (0.00 sec)
```
OFFSET超过了查询的最大数量并不会报错，而是得到一个空的结果集。
```
SELECT id, name, gender, score FROM students ORDER BY score DESC LIMIT 2 OFFSET 10;
Empty set (0.00 sec)
```

> 在`MySQL`中，`LIMIT 10 OFFSET 30`还可以简写成`LIMIT 30, 10`。

> 使用`LIMIT <M> OFFSET <N>`分页时，随着`N`越来越大，查询效率也会越来越低。

#### 聚合查询

`SQL`内置的`COUNT()`函数, 统计查询的数量
```
SELECT COUNT(*) FROM students;
+----------+
| COUNT(*) |
+----------+
|        4 |
+----------+
1 row in set (0.00 sec)
```
为表名设置别名
```
SELECT COUNT(*) num FROM students;
+-----+
| num |
+-----+
|   4 |
+-----+
1 row in set (0.00 sec)
```
- **聚合函数**

    | 函数    |	说明                               |
    | :---   |	:---                               |
    | COUNT  |	统计查询的数量                      |
    | SUM    |	计算某一列的合计值，该列必须为数值类型 |
    | AVG    |	计算某一列的平均值，该列必须为数值类型 |
    | MAX    |	计算某一列的最大值                   |
    | MIN    |	计算某一列的最小值                   |
    
**`注意`**，`MAX()`和`MIN()`函数并不限于数值类型。如果是字符类型，`MAX()`和`MIN()`会返回排序最后和排序最前的字符。
```
mysql> SELECT AVG(score) average FROM students WHERE gender = 'M';
+---------+
| average |
+---------+
| 98.0000 |
+---------+
1 row in set (0.00 sec)
```
**`特别注意`**：如果聚合查询的WHERE条件没有匹配到任何行，`COUNT()`会返回`0`，而`SUM()`、`AVG()`、`MAX()`和`MIN()`会返回`NULL`：
```
| average |
+---------+
|    NULL |
+---------+
1 row in set (0.00 sec)
```
- 分组
    - 单行分组
    ```
    SELECT class_id, COUNT(*) num FROM students GROUP BY class_id;
    +----------+-----+
    | class_id | num |
    +----------+-----+
    |        2 |   1 |
    |        6 |   1 |
    |        1 |   2 |
    +----------+-----+
    3 rows in set (0.00 sec)
    ```
    - 使用多个列进行分组。
    ```
    SELECT class_id, gender, COUNT(*) num FROM students GROUP BY class_id, gender;
    +----------+--------+-----+
    | class_id | gender | num |
    +----------+--------+-----+
    |        2 | F      |   1 |
    |        6 | F      |   1 |
    |        1 | M      |   2 |
    |        2 | M      |   1 |
    +----------+--------+-----+
    4 rows in set (0.00 sec)
    ```
    
#### 多表查询

`SELECT * FROM <表1> <表2>` 它是`表1`和`表2`的“乘积”

结果集的列数是`students`表和`teachers`表的列数之和，行数是`students`表和`teachers`表的行数之积。

**`注意`**：多表查询的结果集可能非常巨大，要小心使用。

```
SELECT * FROM students, teachers;
+----+-----------+------+----------+--------+-------+---------+----+-----------+-----------------+
| id | name      | sex  | class_id | gender | score | id_card | id | name      | job             |
+----+-----------+------+----------+--------+-------+---------+----+-----------+-----------------+
|  1 | 唐小婉    | 女   |        2 | F      |    99 | 111     |  1 | 王遗风    | 恶人谷谷主      |
|  1 | 唐小婉    | 女   |        2 | F      |    99 | 111     |  2 | 谢渊      | 浩气萌萌主      |
|  1 | 唐小婉    | 女   |        2 | F      |    99 | 111     |  3 | 谢云流    | 纯阳大弟子      |
|  1 | 唐小婉    | 女   |        2 | F      |    99 | 111     |  4 | 方乾      | 侠客岛岛主      |
|  2 | 叶婧衣    | 女   |        6 | F      |    66 | 212     |  1 | 王遗风    | 恶人谷谷主      |
|  2 | 叶婧衣    | 女   |        6 | F      |    66 | 212     |  2 | 谢渊      | 浩气萌萌主      |
|  2 | 叶婧衣    | 女   |        6 | F      |    66 | 212     |  3 | 谢云流    | 纯阳大弟子      |
|  2 | 叶婧衣    | 女   |        6 | F      |    66 | 212     |  4 | 方乾      | 侠客岛岛主      |
|  3 | 叶凡      | 男   |        1 | M      |    98 | 122     |  1 | 王遗风    | 恶人谷谷主      |
|  3 | 叶凡      | 男   |        1 | M      |    98 | 122     |  2 | 谢渊      | 浩气萌萌主      |
|  3 | 叶凡      | 男   |        1 | M      |    98 | 122     |  3 | 谢云流    | 纯阳大弟子      |
|  3 | 叶凡      | 男   |        1 | M      |    98 | 122     |  4 | 方乾      | 侠客岛岛主      |
|  4 | 叶知秋    | 男   |        1 | M      |    98 | 123     |  1 | 王遗风    | 恶人谷谷主      |
|  4 | 叶知秋    | 男   |        1 | M      |    98 | 123     |  2 | 谢渊      | 浩气萌萌主      |
|  4 | 叶知秋    | 男   |        1 | M      |    98 | 123     |  3 | 谢云流    | 纯阳大弟子      |
|  4 | 叶知秋    | 男   |        1 | M      |    98 | 123     |  4 | 方乾      | 侠客岛岛主      |
|  5 | 柳浮云    | 男   |        2 | M      |    97 | 124     |  1 | 王遗风    | 恶人谷谷主      |
|  5 | 柳浮云    | 男   |        2 | M      |    97 | 124     |  2 | 谢渊      | 浩气萌萌主      |
|  5 | 柳浮云    | 男   |        2 | M      |    97 | 124     |  3 | 谢云流    | 纯阳大弟子      |
|  5 | 柳浮云    | 男   |        2 | M      |    97 | 124     |  4 | 方乾      | 侠客岛岛主      |
+----+-----------+------+----------+--------+-------+---------+----+-----------+-----------------+
15 rows in set (0.00 sec)
```
- 可以使用投影查询重命名
```
SELECT
students.id sid,
students.name,
students.gender,
students.score,
teachers.id tid,
teachers.name tname,
teachers.job tjob
FROM students, teachers;
+-----+-----------+--------+-------+-----+-----------+-----------------+
| sid | name      | gender | score | tid | tname    | tjob           |
+-----+-----------+--------+-------+-----+-----------+-----------------+
|   1 | 唐小婉    | F      |    99 |   1 | 王遗风    | 恶人谷谷主      |
|   1 | 唐小婉    | F      |    99 |   2 | 谢渊      | 浩气萌萌主      |
|   1 | 唐小婉    | F      |    99 |   3 | 谢云流    | 纯阳大弟子      |
|   1 | 唐小婉    | F      |    99 |   4 | 方乾      | 侠客岛岛主      |
|   2 | 叶婧衣    | F      |    66 |   1 | 王遗风    | 恶人谷谷主      |
|   2 | 叶婧衣    | F      |    66 |   2 | 谢渊      | 浩气萌萌主      |
|   2 | 叶婧衣    | F      |    66 |   3 | 谢云流    | 纯阳大弟子      |
|   2 | 叶婧衣    | F      |    66 |   4 | 方乾      | 侠客岛岛主      |
|   3 | 叶凡      | M      |    98 |   1 | 王遗风    | 恶人谷谷主      |
|   3 | 叶凡      | M      |    98 |   2 | 谢渊      | 浩气萌萌主      |
|   3 | 叶凡      | M      |    98 |   3 | 谢云流    | 纯阳大弟子      |
|   3 | 叶凡      | M      |    98 |   4 | 方乾      | 侠客岛岛主      |
|   4 | 叶知秋    | M      |    98 |   1 | 王遗风    | 恶人谷谷主      |
|   4 | 叶知秋    | M      |    98 |   2 | 谢渊      | 浩气萌萌主      |
|   4 | 叶知秋    | M      |    98 |   3 | 谢云流    | 纯阳大弟子      |
|   4 | 叶知秋    | M      |    98 |   4 | 方乾      | 侠客岛岛主      |
|   5 | 柳浮云    | M      |    97 |   1 | 王遗风    | 恶人谷谷主      |
|   5 | 柳浮云    | M      |    97 |   2 | 谢渊      | 浩气萌萌主      |
|   5 | 柳浮云    | M      |    97 |   3 | 谢云流    | 纯阳大弟子      |
|   5 | 柳浮云    | M      |    97 |   4 | 方乾      | 侠客岛岛主      |
+-----+-----------+--------+-------+-----+-----------+-----------------+
20 rows in set (0.00 sec)
```
- 简洁版

`FROM`子句给表设置别名的语法是`FROM <表名1> <别名1>, <表名2> <别名2>`
```
SELECT
s.id sid,
s.name,
s.gender,
s.score,
t.id tid,
t.name tname,
t.job tjob
FROM students s, teachers t
WHERE s.gender = 'M' AND t.id = 2;
+-----+-----------+--------+-------+-----+--------+-----------------+
| sid | name      | gender | score | tid | tname  | tjob            |
+-----+-----------+--------+-------+-----+--------+-----------------+
|   3 | 叶凡      | M      |    98 |   2 | 谢渊   | 浩气萌萌主      |
|   4 | 叶知秋    | M      |    98 |   2 | 谢渊   | 浩气萌萌主      |
|   5 | 柳浮云    | M      |    97 |   2 | 谢渊   | 浩气萌萌主      |
+-----+-----------+--------+-------+-----+--------+-----------------+
3 rows in set (0.00 sec)
```

#### 连接查询
```
SELECT ... FROM tableA ??? JOIN tableB ON tableA.column1 = tableB.column2;
```
`JOIN`查询需要先确定主表，然后把另一个表的数据“附加”到结果集上；

`INNER JOIN`是最常用的一种`JOIN`查询，它的语法是`SELECT ... FROM <表1> INNER JOIN <表2> ON <条件...>`；

`JOIN`查询仍然可以使用`WHERE`条件和`ORDER BY`排序。


* 内连接`INNER JOIN` 并集

    注意INNER JOIN查询的写法是：
    - 先确定主表，仍然使用`FROM <表1>`的语法；
    - 再确定需要连接的表，使用`INNER JOIN <表2>`的语法；
    - 然后确定连接条件，使用`ON <条件...>`，这里的条件是`s.class_id = c.id`，表示`students`表的`class_id`列与`classes`表的`id`列相同的行需要连接；
    - 可选：加上`WHERE`子句、`ORDER BY`等子句。
    ```
    SELECT s.id, s.name, s.class_id, c.name class_name, s.gender, s.score
    FROM students s
    INNER JOIN classes c
    ON s.class_id = c.id;
    +----+-----------+----------+------------+--------+-------+
    | id | name      | class_id | class_name | gender | score |
    +----+-----------+----------+------------+--------+-------+
    |  1 | 唐小婉    |        2 | 二班       | F      |    99 |
    |  2 | 叶婧衣    |        3 | 三班       | F      |    66 |
    |  3 | 叶凡      |        1 | 一班       | M      |    98 |
    |  4 | 叶知秋    |        1 | 一班       | M      |    98 |
    |  5 | 柳浮云    |        2 | 二班       | M      |    97 |
    +----+-----------+----------+------------+--------+-------+
    5 rows in set (0.00 sec)
    ```
* 外连接
    - RIGHT OUTER JOIN 右边加左边的交集
    ```
    SELECT s.id, s.name, s.class_id, c.name class_name, s.gender, s.score
    FROM students s
    RIGHT OUTER JOIN classes c
    ON s.class_id = c.id;
    +------+-----------+----------+------------+--------+-------+
    | id   | name      | class_id | class_name | gender | score |
    +------+-----------+----------+------------+--------+-------+
    |    1 | 唐小婉    |        2 | 二班       | F      |    99 |
    |    2 | 叶婧衣    |        3 | 三班       | F      |    66 |
    |    3 | 叶凡      |        1 | 一班       | M      |    98 |
    |    4 | 叶知秋    |        1 | 一班       | M      |    98 |
    |    5 | 柳浮云    |        2 | 二班       | M      |    97 |
    | NULL | NULL      |     NULL | 四班       | NULL   |  NULL |
    +------+-----------+----------+------------+--------+-------+
    6 rows in set (0.00 sec)
    ```
    - LEFT OUTER JOIN 左边加右边的交集
    ```
    SELECT s.id, s.name, s.class_id, c.name class_name, s.gender, s.score
    FROM students s
    full OUTER JOIN classes c
    ON s.class_id = c.id;
    +----+-----------+----------+------------+--------+-------+
    | id | name      | class_id | class_name | gender | score |
    +----+-----------+----------+------------+--------+-------+
    |  1 | 唐小婉    |        2 | 二班       | F      |    99 |
    |  2 | 叶婧衣    |        3 | 三班       | F      |    66 |
    |  3 | 叶凡      |        1 | 一班       | M      |    98 |
    |  4 | 叶知秋    |        1 | 一班       | M      |    98 |
    |  5 | 柳浮云    |        2 | 二班       | M      |    97 |
    |  6 | 无名      |        5 | NULL       | M      |    90 |
    +----+-----------+----------+------------+--------+-------+
    6 rows in set (0.00 sec)
    ```
    - FULL OUTER JOIN 并集
    ```
    -- mysql8.0不支持
    SELECT s.id, s.name, s.class_id, c.name class_name, s.gender, s.score
    FROM students s
    full OUTER JOIN classes c
    ON s.class_id = c.id;
    
    对于MySQL不支持FULL OUTER
    select s.id, s.class_id, s.name, c.name class_name, s.gender, s.score
    from students s 
    left outer join classes c
    on s.class_id = c.id 
    union select s.id, s.class_id, s.name, c.name class_name, s.gender, s.score 
    from students s
    right outer join classes c 
    on s.class_id = c.id;
    ```
    - `INNER JOIN`只返回同时存在于两张表的行数据，由于`students`表的`class_id`包含1，2，3，`classes`表的id包含1，2，3，4，所以，`INNER JOIN`根据条件`s.class_id = c.id`返回的结果集仅包含1，2，3。
    
    - `RIGHT OUTER JOIN`返回右表都存在的行。如果某一行仅在右表存在，那么结果集就会以`NULL`填充剩下的字段。
    
    - `LEFT OUTER JOIN`则返回左表都存在的行。如果我们给`students`表增加一行，并添加`class_id=5`，由于`classes`表并不存在`id=5`的行，所以，`LEFT OUTER JOIN`的结果会增加一行，对应的`class_name`是`NULL`：
    
    - `FULL OUTER JOIN`它会把两张表的所有记录全部选择出来，并且，自动把对方不存在的列填充为`NULL`

#### 添加数据 insert 插入
- 基础语法 
```
INSERT INTO <表名> (字段1, 字段2, ...) VALUES (值1, 值2, ...);
```
- 一次性添加一条记录
```
-- 插入一条数据并查看插入后的数据
INSERT INTO students (class_id, name, gender, score) VALUES (2, '大牛', 'M', 80);
Query OK, 1 row affected (0.04 sec)

SELECT * FROM students;
+----+-----------+------+----------+--------+-------+---------+
| id | name      | sex  | class_id | gender | score | id_card |
+----+-----------+------+----------+--------+-------+---------+
|  1 | 唐小婉    | 女   |        2 | F      |    99 | 111     |
|  2 | 叶婧衣    | 女   |        3 | F      |    66 | 212     |
|  3 | 叶凡      | 男   |        1 | M      |    98 | 122     |
|  4 | 叶知秋    | 男   |        1 | M      |    98 | 123     |
|  5 | 柳浮云    | 男   |        2 | M      |    97 | 124     |
|  6 | 无名      | 男   |        5 | M      |    90 | 125     |
|  7 | 大牛      | NULL |        2 | M      |    80 | NULL    |
+----+-----------+------+----------+--------+-------+---------+
7 rows in set (0.00 sec)
```
- 一次性添加多条记录
```
-- 插入多条数据并查看
INSERT INTO students (class_id, name, gender, score) VALUES
  (1, '大宝', 'M', 87),
  (2, '二宝', 'M', 81);
Query OK, 2 rows affected (0.01 sec)
Records: 2  Duplicates: 0  Warnings: 0

SELECT * FROM students;
  
+----+-----------+------+----------+--------+-------+---------+
| id | name      | sex  | class_id | gender | score | id_card |
+----+-----------+------+----------+--------+-------+---------+
|  1 | 唐小婉    | 女   |        2 | F      |    99 | 111     |
|  2 | 叶婧衣    | 女   |        3 | F      |    66 | 212     |
|  3 | 叶凡      | 男   |        1 | M      |    98 | 122     |
|  4 | 叶知秋    | 男   |        1 | M      |    98 | 123     |
|  5 | 柳浮云    | 男   |        2 | M      |    97 | 124     |
|  6 | 无名      | 男   |        5 | M      |    90 | 125     |
|  7 | 大牛      | NULL |        2 | M      |    80 | NULL    |
|  8 | 大宝      | NULL |        1 | M      |    87 | NULL    |
|  9 | 二宝      | NULL |        2 | M      |    81 | NULL    |
+----+-----------+------+----------+--------+-------+---------+
9 rows in set (0.00 sec)
```

#### 修改数据 update 更新
- 基础语法
```
UPDATE <表名> SET 字段1=值1, 字段2=值2, ... WHERE ...;
```
- 更新一条记录
```
UPDATE students SET name='小牛', score=66 WHERE id=8;
Query OK, 1 row affected (0.00 sec)
Rows matched: 1  Changed: 1  Warnings: 0
-- 查询并观察结果:
SELECT * FROM students WHERE id=8;
+----+--------+------+----------+--------+-------+---------+
| id | name   | sex  | class_id | gender | score | id_card |
+----+--------+------+----------+--------+-------+---------+
|  8 | 小牛   | NULL |        1 | M      |    66 | NULL    |
+----+--------+------+----------+--------+-------+---------+
1 row in set (0.00 sec)
```
- 更新多条记录
```
UPDATE students SET name='小牛', score=77 WHERE id>=8 AND id<=9;
Query OK, 2 rows affected (0.01 sec)
Rows matched: 2  Changed: 2  Warnings: 0

-- 查询并观察结果:
SELECT * FROM students;
+----+-----------+------+----------+--------+-------+---------+
| id | name      | sex  | class_id | gender | score | id_card |
+----+-----------+------+----------+--------+-------+---------+
|  1 | 唐小婉    | 女   |        2 | F      |    99 | 111     |
|  2 | 叶婧衣    | 女   |        3 | F      |    66 | 212     |
|  3 | 叶凡      | 男   |        1 | M      |    98 | 122     |
|  4 | 叶知秋    | 男   |        1 | M      |    98 | 123     |
|  5 | 柳浮云    | 男   |        2 | M      |    97 | 124     |
|  6 | 无名      | 男   |        5 | M      |    90 | 125     |
|  7 | 大牛      | NULL |        2 | M      |    80 | NULL    |
|  8 | 小牛      | NULL |        1 | M      |    77 | NULL    |
|  9 | 小牛      | NULL |        2 | M      |    77 | NULL    |
+----+-----------+------+----------+--------+-------+---------+
9 rows in set (0.00 sec)
```
- update可以使用表达式

```
UPDATE students SET score=score+10 WHERE score<80;
Query OK, 3 rows affected (0.01 sec)
Rows matched: 3  Changed: 3  Warnings: 0
-- 查询并观察结果:
SELECT * FROM students;
+----+-----------+------+----------+--------+-------+---------+
| id | name      | sex  | class_id | gender | score | id_card |
+----+-----------+------+----------+--------+-------+---------+
|  1 | 唐小婉    | 女   |        2 | F      |    99 | 111     |
|  2 | 叶婧衣    | 女   |        3 | F      |    76 | 212     |
|  3 | 叶凡      | 男   |        1 | M      |    98 | 122     |
|  4 | 叶知秋    | 男   |        1 | M      |    98 | 123     |
|  5 | 柳浮云    | 男   |        2 | M      |    97 | 124     |
|  6 | 无名      | 男   |        5 | M      |    90 | 125     |
|  7 | 大牛      | NULL |        2 | M      |    80 | NULL    |
|  8 | 小牛      | NULL |        1 | M      |    87 | NULL    |
|  9 | 小牛      | NULL |        2 | M      |    87 | NULL    |
+----+-----------+------+----------+--------+-------+---------+
9 rows in set (0.00 sec)
```
- 更新不存在的数据不会报错，也不会有任何记录被更新。
```
UPDATE students SET score=100 WHERE id=999;
Query OK, 0 rows affected (0.00 sec)
Rows matched: 0  Changed: 0  Warnings: 0

-- 查询并观察结果:
SELECT * FROM students;
+----+-----------+------+----------+--------+-------+---------+
| id | name      | sex  | class_id | gender | score | id_card |
+----+-----------+------+----------+--------+-------+---------+
|  1 | 唐小婉    | 女   |        2 | F      |    99 | 111     |
|  2 | 叶婧衣    | 女   |        3 | F      |    76 | 212     |
|  3 | 叶凡      | 男   |        1 | M      |    98 | 122     |
|  4 | 叶知秋    | 男   |        1 | M      |    98 | 123     |
|  5 | 柳浮云    | 男   |        2 | M      |    97 | 124     |
|  6 | 无名      | 男   |        5 | M      |    90 | 125     |
|  7 | 大牛      | NULL |        2 | M      |    80 | NULL    |
|  8 | 小牛      | NULL |        1 | M      |    87 | NULL    |
|  9 | 小牛      | NULL |        2 | M      |    87 | NULL    |
+----+-----------+------+----------+--------+-------+---------+
9 rows in set (0.00 sec)
```
- `**注意**` 不带WHERE条件的UPDATE语句会更新整个表的数据
```
UPDATE students SET score=60;
```


#### 修改数据 delete 删除
- 基础语法
```
DELETE FROM <表名> WHERE ...;
```
- 一次删除一条
```
DELETE FROM students WHERE id=8;
Query OK, 1 row affected (0.02 sec)

-- 查询并观察结果:
SELECT * FROM students;
+----+-----------+------+----------+--------+-------+---------+
| id | name      | sex  | class_id | gender | score | id_card |
+----+-----------+------+----------+--------+-------+---------+
|  1 | 唐小婉    | 女   |        2 | F      |    99 | 111     |
|  2 | 叶婧衣    | 女   |        3 | F      |    76 | 212     |
|  3 | 叶凡      | 男   |        1 | M      |    98 | 122     |
|  4 | 叶知秋    | 男   |        1 | M      |    98 | 123     |
|  5 | 柳浮云    | 男   |        2 | M      |    97 | 124     |
|  6 | 无名      | 男   |        5 | M      |    90 | 125     |
|  7 | 大牛      | NULL |        2 | M      |    80 | NULL    |
|  9 | 小牛      | NULL |        2 | M      |    87 | NULL    |
+----+-----------+------+----------+--------+-------+---------+
8 rows in set (0.00 sec)
```

- 一次删除多条

```
DELETE FROM students WHERE id>=7 AND id<=9;
Query OK, 2 rows affected (0.01 sec)

-- 查询并观察结果:
SELECT * FROM students;
+----+-----------+------+----------+--------+-------+---------+
| id | name      | sex  | class_id | gender | score | id_card |
+----+-----------+------+----------+--------+-------+---------+
|  1 | 唐小婉    | 女   |        2 | F      |    99 | 111     |
|  2 | 叶婧衣    | 女   |        3 | F      |    76 | 212     |
|  3 | 叶凡      | 男   |        1 | M      |    98 | 122     |
|  4 | 叶知秋    | 男   |        1 | M      |    98 | 123     |
|  5 | 柳浮云    | 男   |        2 | M      |    97 | 124     |
|  6 | 无名      | 男   |        5 | M      |    90 | 125     |
+----+-----------+------+----------+--------+-------+---------+
6 rows in set (0.00 sec)
```

- 删除不存在的数据不会报错 也不会有任何记录被删除。
```
DELETE FROM students WHERE id=999;
Query OK, 0 rows affected (0.00 sec)

-- 查询并观察结果:
SELECT * FROM students;
+----+-----------+------+----------+--------+-------+---------+
| id | name      | sex  | class_id | gender | score | id_card |
+----+-----------+------+----------+--------+-------+---------+
|  1 | 唐小婉    | 女   |        2 | F      |    99 | 111     |
|  2 | 叶婧衣    | 女   |        3 | F      |    76 | 212     |
|  3 | 叶凡      | 男   |        1 | M      |    98 | 122     |
|  4 | 叶知秋    | 男   |        1 | M      |    98 | 123     |
|  5 | 柳浮云    | 男   |        2 | M      |    97 | 124     |
|  6 | 无名      | 男   |        5 | M      |    90 | 125     |
+----+-----------+------+----------+--------+-------+---------+
6 rows in set (0.00 sec)
```
- `**注意**` 不带WHERE条件的DELETE语句会删除整个表的数据

```
DELETE FROM students;
```