#### Location 对象属性

| 属性	    | 示例    |描述                     |
| ---       | ---     |---                     |
| origin	| https://www.baidu.com|设置或返回从井号 (#) 开始的 URL（锚）。|
| hash	    | #10|设置或返回从井号 (#) 开始的 URL（锚）。|
| host	    | www.baidu.com:80|设置或返回主机名，可能在该串最后带有一个"\:"并跟上URL的端口号。|
| hostname	| www.baidu.com |设置或返回当前 URL 的主机名。|
| href	    | https://www.baidu.com/s?ie=utf-8&wd=bitcoin/#10|设置或返回完整的 URL。|
| port	    | 80|设置或返回当前 URL 的端口号。|
| pathname	| /s |设置或返回当前 URL 的路径部分。|
| protocol	| https:|设置或返回当前 URL 的协议。|
| search	| ?ie=utf-8&wd=bitcoin |设置或返回从问号 (?) 开始的 URL（查询部分）。|

#### Location 对象方法

| 属性	               | 描述                     |
| ---                  | ---                     |
| assign(url)	       | 加载新的文档。（有历史记录） |
| reload(forcedReload) | 重新加载当前文档。 `forcedReload`为true重新从服务器拉取资源|
| replace(url)         | 用新的文档替换当前文档。（无历史记录） |
| toString()           | 返回整个URL和href效果相同  |