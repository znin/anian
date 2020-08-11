数据结构

```json

product详情: 
  { 
    "_id" : xx, 
   "uniquekey": "7edd8c5dc12bbef230dcd8dbdd6ba946",
		"title": "澳大利亚主播在直播时遭到野生喜鹊攻击",
		"date": "2020-07-25 16:42",
		"category": "头条",
		"author_name": "3DMGAME",
		"url": "https:\/\/mini.eastday.com\/mobile\/200725164200598.html",
		"thumbnail_pic_s": "https:\/\/03imgmini.eastday.com\/mobile\/20200725\/20200725164200_22ba92d838c7097ce9f1e8bf8180b0b1_1_mwpm_03200403.jpg"
    } 
  }
user:	
  { 
    "_id" : xx, 
    "username" : "anin", 
    "password" : "123", 
    "follow" : 100, 
    "fans" : 200, 
    "nikename" : "赵", 
    "icon" : "/upload/968a3b7218ee744931276a64c9b7ea01.png", 
    "date" : 1551620448550 
  }

```

请求Api

```
分页	_page 第几页， _limit一页多少条
  GET /user/goods/product/?_page=7  不传递默认0
  GET /user/goods/product/?_page=7&_limit=20 不传递默认10条
排序 _sort设定排序的字段 默认升序
  
检索	GET /user/goods/product?q=title_kw=a

	q设定检索的目标，_kw设定检索关键字
	q可选title，date，category等
	
注册
 GET /user/register/submit  
登录
 GET /user/login
 注销
 GET /user/logout
 主页(自动登录)
 GET /user/home
```

