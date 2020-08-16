数据结构

```json



```

请求Api

```
分页	_page 第几页， _limit一页多少条
  GET /user/goods/toplist/?_page=7  不传递默认0
  GET /user/goods/toplist/?_page=7&_limit=20 不传递默认10条
排序 _sort设定排序的字段 默认升序
  
检索	GET /user/goods/toplist?q=title_kw=a

	q设定检索的域，_kw设定检索关键字
	
	
更新
 post /admin/spilder/:toplist 
修改
 post /admin/goods/:toplist/:_id	
 填充数据库
 post /admin/fill/xx.json
注册
 GET /user/register/submit  
登录
 GET /user/login
 注销
 GET /user/logout
 主页(自动登录)
 GET /user/home
```

