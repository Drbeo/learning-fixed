#### History 对象属性

| 属性	            | 描述                     |
| ---               | ---                     |
| length	        | 返回浏览器历史列表中的 URL 数量。包括当前加载的页。|
| scrollRestoration	| 允许Web应用程序在历史导航上显式地设置默认滚动恢复行为。此属性可以是自动的（auto）或者手动的（manual）。|
| state	            | 返回一个表示历史堆栈顶部的状态的值。这是一种可以不必等待popstate 事件而查看状态而的方式。|

#### History 对象方法

| 属性	                          | 描述                     |
| ---                             | ---                     |
| back()	                      | 前往上一页, 用户可点击浏览器左上角的返回按钮模拟此方法. 等价于 history.go(-1). |
| forward()                       | 在浏览器历史记录里前往下一页，用户可点击浏览器左上角的前进按钮模拟此方法. 等价于 history.go(1).|
| go(±num)                        |加载 history 列表中的某个具体页面。 |
| pushState(state, title, url)    |按指定的名称和URL（如果提供该参数）将数据push进会话历史栈 |
| replaceState(state, title, url) |按指定的数据，名称和URL(如果提供该参数)，更新历史栈上最新的入口。 |
