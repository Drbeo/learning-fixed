
### 数据库相关概念
1. DB：数据库，保存一组有组织的数据的容器
2. DBMS: 数据库管理系统，管理DB中的数据
3. RDBMS: 指关系型数据库管理系统，全称 Relational Database Management System。
4. SQL: 结构化查询语言，用于和DBMS通信的语言

`MySQL` 记住总是选择`InnoDB`引擎就好了。

### MySQL有三大类数据类型
* 数字类型
    - 整数: tinyint、smallint、mediumint、int、bigint

        | MySQL数据类型  | 含义（有符号）                         |	范围（无符号）                     |
        |:---           |:---                                   |:---                                 |
        |tinyint(m)	    | 1个字节  范围(-128~127)                |	(0，255)                          |
        |smallint(m)	| 2个字节  范围(-32768~32767)            |   (0，65 535)                       |
        |mediumint(m)	| 3个字节  范围(-8388608~8388607)        |	(0，16 777 215)                   |
        |int(m)	        | 4个字节  范围(-2147483648~2147483647)  |   (0，4 294 967 295)                |
        |bigint(m)	    | 8个字节  范围(+-9.22*10的18次方)        |   (0，18 446 744 073 709 551 615)   |
            取值范围如果加了`unsigned`，则最大值翻倍，如`tinyint unsigned`的取值范围为`(0~256)`。
        `int(m)`里的m是表示SELECT查询结果集中的显示宽度，并不影响实际的取值范围，没有影响到显示的宽度，不知道这个m有什么用。
    - 浮点数: float、double、real、decimal
    
        |MySQL数据类型  |	含义                                            | 范围（有符号）  | 	范围（无符号） |
        |:---          |:---                                                |:---           |:---             |
        |float(m,d)    |	单精度浮点型    8位精度(4字节)     m总个数，d小数位 |(-3.402 823 466 E+38，-1.175 494 351 E-38)，0，(1.175 494 351 E-38，3.402 823 466 351 E+38) |0，(1.175 494 351 E-38，3.402 823 466 E+38)|
        |double(m,d)   |	双精度浮点型    16位精度(8字节)    m总个数，d小数位 |	(-1.797 693 134 862 315 7 E+308，-2.225 073 858 507 201 4 E-308)，0，(2.225 073 858 507 201 4 E-308，1.797 693 134 862 315 7 E+308) |0，(2.225 073 858 507 201 4 E-308，1.797 693 134 862 315 7 E+308) |
            设一个字段定义为`float(5,3)`，如果插入一个数123.45678,实际数据库里存的是123.457，但总个数还以实际为准，即6位。
    - 定点数
    
        浮点型在数据库中存放的是近似值，而定点类型在数据库中存放的是精确值。decimal(m,d) 参数m<65 是总个数，d<30且 d<m 是小数位。
* 日期/时间
    - date、time、datetime、timestamp、year
    
        | MySQL数据类型 |	含义                          | 范围                                     |
        |:---          |:---                             |:---                                      |
        | year         |	年份 '2008'                   | 1901/2155                               |
        | date         |	日期 '2008-12-2'              | 1000-01-01/9999-12-31                   |
        | time         |	时间 '12:25:36'               | 		'-838:59:59'/'838:59:59'        |
        | datetime     |	日期时间 '2008-12-2 22:06:44'  | 1000-01-01 00:00:00/9999-12-31 23:59:59 |
        | timestamp    |	自动存储记录修改时间            |1970-01-01 00:00:00/2038 结束时间是第 2147483647 秒，北京时间 2038-1-19 11:14:07，格林尼治时间 2038年1月19日 凌晨 03:14:07 |
            若定义一个字段为timestamp，这个字段里的时间数据会随其他字段修改的时候自动刷新，所以这个数据类型的字段可以存放这条记录最后被修改的时间。
* 字符串
    - 字符串: char、varchar
    - 文本: tinytext、text、mediumtext、longtext
    
        | MySQL数据类型 |	含义                        |
        |:---          |:---                           |
        | char(n)      |	固定长度，最多255个字符       |
        | varchar(n)   |	变长字符串，最多65535个字符     |
        | tinytext     |	可变长度，最多255个字符       |
        | text         |	可变长度，最多65535个字符 64k    |
        | mediumtext   |	可变长度，最多2的24次方-1个字符 16m|
        | longtext     |	可变长度，最多2的32次方-1个字符 32m|
        char和varchar：
        
        1.char(n) 若存入字符数小于n，则以空格补于其后，查询之时再将空格去掉。所以char类型存储的字符串末尾不能有空格，varchar不限于此。
        
        2.char(n) 固定长度，char(4)不管是存入几个字符，都将占用4个字节，varchar是存入的实际字符数+1个字节（n<=255）或2个字节(n>255)，所以varchar(4),存入3个字符将占用4个字节。
        
        3.char类型的字符串检索速度要比varchar类型的快。
        
        varchar和text：
        
        1.varchar可指定n，text不能指定，内部存储varchar是存入的实际字符数+1个字节（n<=255）或2个字节(n>255)，text是实际字符数+2个字节。
        
        2.text类型不能有默认值。
        
        3.varchar可直接创建索引，text创建索引要指定前多少个字符。varchar查询速度快于text,在都创建索引的情况下，text的索引似乎不起作用。
    - 二进制(可用来存储图片、音乐等): tinyblob、blob、mediumblob、longblob
    
        | MySQL数据类型  |		大小            |	含义                        |
        |:---           |:---                   |:---                           |
        |TINYBLOB	    | 0-255字节	            | 不超过 255 个字符的二进制字符串  |
        |BLOB	        | 0-65 535字节	        | 二进制形式的长文本数据          |
        |MEDIUMBLOB	    | 0-16 777 215字节	    | 二进制形式的中等长度文本数据     |
        |LONGBLOB	    | 0-4 294 967 295字节	| 二进制形式的极大文本数据         |
        1._BLOB和_text存储方式不同，_TEXT以文本方式存储，英文存储区分大小写，而_Blob是以二进制方式存储，不分大小写。
        
        2._BLOB存储的数据只能整体读出。
        
        3._TEXT可以指定字符集，_BLO不用指定字符集。
### 安装MySQL
要在Windows或Mac上安装MySQL，首先从MySQL官方网站[下载最新的MySQL Community Server版本](https://dev.mysql.com/downloads/mysql/)

选择对应的操作系统版本，下载安装即可。在安装过程中，MySQL会自动创建一个`root`用户，并提示输入`root`口令。

要在Linux上安装MySQL，可以使用发行版的包管理器。例如，Debian和Ubuntu用户可以简单地通过命令·apt-get install mysql-server·安装最新的MySQL版本。

### 使用MySQL数据库
* 登录到MySQL

    `mysql -h 主机名 -u 用户名 -p`
    + -h : 该命令用于指定客户端所要登录的MySQL主机名, 登录当前机器该参数可以省略;
    + -u : 所要登录的用户名;
    + -p : 告诉服务器将会使用一个密码来登录, 如果所要登录的用户名密码为空, 可以忽略此选项。
    
        以登录刚刚安装在本机的MySQL数据库为例, 在命令行下输入 `mysql -u root -p` 按回车确认, 如果安装正确且MySQL正在运行, 会得到以下响应:
    
        Enter password:
    
        若密码存在, 输入密码登录, 不存在则直接按回车登录, 按照本文中的安装方法, 默认 root 账号是无密码的。登录成功后你将会看到 Welecome to the MySQL monitor... 的提示语。
    
        然后命令提示符会一直以 mysql> 加一个闪烁的光标等待命令的输入, 输入 exit 或 quit 退出登录。
* 创建一个数据库

    `create database 数据库名 [其他选项];`

    例如：`create database test_db character set utf8;`
        
    为了便于在命令提示符下显示中文, 在创建时通过 character set gbk 将数据库字符编码指定为 gbk。创建成功时会得到 Query OK, 1 row affected(0.02 sec) 的响应。
    
    `注意`: MySQL语句以分号`(;)`作为语句的结束, 若在语句结尾不添加分号时, 命令提示符会以 -> 提示你继续输入(有个别特例, 但加分号是一定不会错的);
    
    提示: 可以使用 `show databases;` 命令查看已经创建了哪些数据库。
        
* 选择所要操作的数据库

    两种方式对数据库进行使用的选择:
    - 一: 在登录数据库时指定, 命令: `mysql -D 所选择的数据库名 -h 主机名 -u 用户名 -p`
        例如登录时选择刚刚创建的数据库: `mysql -D test_db -u root -p`

    - 二: 在登录后使用 use 语句指定, 命令: use 数据库名;
        use 语句可以不加分号, 执行 `use test_db` 来选择刚刚创建的数据库, 选择成功后会提示: Database changed
* 创建数据库表

    `create table 表名称(列声明);` 
    
   以创建 students 表为例, 表中将存放 学号(id)、姓名(name)、性别(sex)、年龄(age)、联系电话(tel) 这些内容:
    ```mysql
    create table students
    （
        id int unsigned not null auto_increment primary key,
        name char(8) not null,
        sex char(4) not null,
        age tinyint unsigned not null,
        tel char(13) null default "-"
    );
    ```	
    对于一些较长的语句在命令提示符下可能容易输错, 因此我们可以通过任何文本编辑器将语句输入好后保存为 createtable.sql 的文件中, 通过命令提示符下的文件重定向执行执行该脚本。

    打开命令提示符, 输入: `mysql -D samp_db -u root -p < createtable.sql`

    **语句解说:**

    `create table tablename(columns)` 为创建数据库表的命令, 列的名称以及该列的数据类型将在括号内完成;
    
    括号内声明了5列内容, id、name、sex、age、tel为每列的名称, 后面跟的是数据类型描述, 列与列的描述之间用逗号(,)隔开;
    
    以 "id int unsigned not null auto_increment primary key" 行进行介绍:
    - "id" 为列的名称;
    - "int" 指定该列的类型为 int(取值范围为 -8388608到8388607), 在后面我们又用 "unsigned" 加以修饰, 表示该类型为无符号型, 此时该列的取值范围为 0到16777215;
    - "not null" 说明该列的值不能为空, 必须要填, 如果不指定该属性, 默认可为空;
    - "auto_increment" 需在整数列中使用, 其作用是在插入数据时若该列为 NULL, MySQL将自动产生一个比现存值更大的唯一标识符值。在每张表中仅能有一个这样的值且所在列必须为索引列。
    - "primary key" 表示该列是表的主键, 本列的值必须唯一, MySQL将自动索引该列。
    下面的 char(8) 表示存储的字符长度为8, tinyint的取值范围为 -127到128, default 属性指定当该列值为空时的默认值。
    
    更多的数据类型请参阅 [《MySQL数据类型》](http://www.cnblogs.com/zbseoag/archive/2013/03/19/2970004.html) 
    
    提示: 1. 使用 `show tables;` 命令可查看已创建了表的名称; 2. 使用 `describe` 表名; 命令可查看已创建的表的详细信息。
    
### 操作MySQL数据库 
* 向表中插入数据
    insert 语句可以用来将一行或多行数据插到数据库表中, 使用的一般形式如下:
    
    `insert [into] 表名 [(列名1, 列名2, 列名3, ...)] values (值1, 值2, 值3, ...);`
    
    其中 [] 内的内容是可选的, 例如, 要给 samp_db 数据库中的 students 表插入一条记录, 执行语句:
    
    `insert into students values(NULL, "王刚", "男", 20, "13811371377");`
    
    按回车键确认后若提示 Query Ok, 1 row affected (0.05 sec) 表示数据插入成功。 若插入失败请检查是否已选择需要操作的数据库。
    
    
    有时我们只需要插入部分数据, 或者不按照列的顺序进行插入, 可以使用这样的形式进行插入:
    
    `insert into students (name, sex, age) values("孙丽华", "女", 21);`

* 查询表中的数据
    select 语句常用来根据一定的查询规则到数据库中获取数据, 其基本的用法为:

    `select 列名称 from 表名称 [查询条件];`

    例如要查询 students 表中所有学生的名字和年龄, 输入语句 select name, age from students; 执行结果如下:
    ```
    mysql> select name, age from students;
    +--------+-----+
    | name   | age |
    +--------+-----+
    | 王刚   |  20 |
    | 孙丽华 |  21 |
    | 王永恒 |  23 |
    | 郑俊杰 |  19 |
    | 陈芳   |  22 |
    | 张伟朋 |  21 |
    +--------+-----+
    6 rows in set (0.00 sec)
    
    mysql>
    ```
    也可以使用通配符 * 查询表中所有的内容, 语句: `select * from students;`

* 按特定条件查询:
    where 关键词用于指定查询条件, 用法形式为: `select 列名称 from 表名称 where 条件;`
    
    以查询所有性别为女的信息为例, 输入查询语句: `select * from students where sex="女";`
    
    where 子句不仅仅支持 "where 列名 = 值" 这种名等于值的查询形式, 对一般的比较运算的运算符都是支持的, 例如 =、>、<、>=、<、!= 以及一些扩展运算符 is [not] null、in、like 等等。 还可以对查询条件使用 or 和 and 进行组合查询, 以后还会学到更加高级的条件查询方式, 这里不再多做介绍。
    
    示例:
    
    查询年龄在21岁以上的所有人信息: `select * from students where age > 21;`
    
    查询名字中带有 "王" 字的所有人信息: `select * from students where name like "%王%";`
    
    查询id小于5且年龄大于20的所有人信息: `select * from students where id<5 and age>20;`

* 更新表中的数据
    update 语句可用来修改表中的数据, 基本的使用形式为:

    `update 表名称 set 列名称=新值 where 更新条件;`

    使用示例:

    将id为5的手机号改为默认的"-": `update students set tel=default where id=5;`

    将所有人的年龄增加1: `update students set age=age+1;`

    将手机号为 13288097888 的姓名改为 "张伟鹏", 年龄改为 19: `update students set name="张伟鹏", age=19 where tel="13288097888";`

* 删除表中的数据
    delete 语句用于删除表中的数据, 基本用法为:
    
    `delete from 表名称 where 删除条件;`
    
    使用示例:
    
    删除id为2的行: `delete from students where id=2;`
    
    删除所有年龄小于21岁的数据: `delete from students where age<20;`
    
    删除表中的所有数据: `delete from students;`

 

### 创建后表的修改
    alter table 语句用于创建后对表的修改, 基础用法如下:

* 添加列
    基本形式: `alter table 表名 add 列名 列数据类型 [after 插入位置];`
    
    示例:
    
    在表的最后追加列 address: `alter table students add address char(60);`
    
    在名为 age 的列后插入列 birthday: `alter table students add birthday date after age;`

* 修改列
    基本形式: `alter table 表名 change 列名称 列新名称 新数据类型;`
    
    示例:
    
    将表 tel 列改名为 telphone: `alter table students change tel telphone char(13) default "-";`
    
    将 name 列的数据类型改为 char(16): `alter table students change name name char(16) not null;`

* 删除列
    基本形式: `alter table 表名 drop 列名称;`
    
    示例:
    
    删除 birthday 列: `alter table students drop birthday;`
    
* 重命名表
    基本形式: `alter table 表名 rename 新表名;`
    
    示例:
    
    重命名 students 表为 workmates: `alter table students rename workmates;`
    
* 删除整张表
    基本形式: `drop table 表名;`
    
    示例: 删除 workmates 表: `drop table workmates;`
    
* 删除整个数据库
    基本形式: `·`drop database 数据库名;`
    
    示例: 删除 samp_db 数据库: `drop database samp_db;`
   