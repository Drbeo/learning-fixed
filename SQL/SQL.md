### SQL是结构化查询语言的缩写，用来访问和操作数据库系统
注意：SQL对大小写不敏感！！！

* 常用数据类型

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
    
    
### 操作
### 数据库
* 列出所有数据库 `SHOW DATABASES;`
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
* 创建一个数据库 `CREATE DATABASE test;`
    ```
    mysql> CREATE DATABASE test;
    Query OK, 1 row affected (0.01 sec)
    ```
* 删除一个数据库 `DROP DATABASE test;`
    ```
    mysql> drop database test;
    Query OK, 0 rows affected (0.01 sec)
    ```
* 切换为当前数据库 `USE test;`
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
        ->   `id` int(11) NOT NULL,
        ->   `name` varchar(255) NOT NULL,
        ->   PRIMARY KEY (`id`)
        -> ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
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
* exit
    ```
    mysql> exit;
    Bye
    ```