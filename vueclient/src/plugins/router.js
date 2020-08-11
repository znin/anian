import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../pages/home.vue"
import Login from "../pages/login.vue"
import Logout from "../pages/logout.vue"
import Err from "../pages/err.vue"
import TopList from "../pages/toplist.vue"
import HotList from "../pages/hotlist.vue"
import NewList from "../pages/newlist.vue"
import MovieList from "../pages/movielist.vue"
import MusicList from "../pages/musiclist.vue"
import ScienceList from "../pages/sciencelist.vue"
import Register from "../pages/register.vue"
import User from "../pages/user.vue"
import MsgBox from "../pages/msgbox.vue"
import Detail from "../pages/detail.vue"
import Updata from "../pages/updata.vue"

Vue.use(VueRouter)

let routes=[
	{path:"/",redirect:"/home"},
	{
		name:"toplist",
		path:"/toplist",
		component:TopList,
		meta:{a:1,b:2}
	},
	{
		name:"newlist",
		path:"/newlist",
		component:NewList,
		meta:{a:1,b:2}
	},
	{
		name:"updata",
		path:"/updata",
		component:Updata,
		meta:{a:1,b:2}
	},
	{
		name:"musiclist",
		path:"/musiclist",
		component:MusicList,
		meta:{a:1,b:2}
	},
	{
		name:"movielist",
		path:"/movielist",
		component:MovieList,
		meta:{a:1,b:2}
	},
	{
		name:"sciencelist",
		path:"/sciencelist",
		component:ScienceList,
		meta:{a:1,b:2}
	},
	{
		name:"hotlist",
		path:"/hotlist",
		component:HotList,
		meta:{a:1,b:2}
	},
	{
		name:"home",
		redirect:"/toplist",
		path:"/home",
		component:Home,
		meta:{a:1,b:2}
	},
	{
		path:"/login",
		name:"login",
		component:Login,
	},
	{
		name:"register",
		path:"/register",
		component:Register,
		meta:{a:1,b:2}
	},
	{
		name:"user",
		path:"/user",
		component:User,
		meta:{a:1,b:2}
	},
	{
		name:"detail",
		path:"/detail",
		component:Detail,
		meta:{a:1,b:2}
	},
	{
		name:"msgbox",
		path:"/msgbox",
		component:MsgBox,
		meta:{a:1,b:2}
	},
	{
		path:"/logout",
		component:Logout,
		beforeEnter:(to,from,next)=>{
			console.log("路由独享前置")
			//next("/home");
			next()
		}
	},
	{path:"/*",component:Err},
]

let router=new VueRouter({
	routes,
	//属性名
	 //routes:routes,
	 //mode:"hash",
	
	 //mode:"history",
	 scrollBehavior: (to,from,savedPosition) => {
	 	return {x:0,y:0}
	 },
	
})
//独享，没有后置
 router.beforeEach ((to,from,next) =>{
		 console.log("全局前置守卫");
		// console.log(to,from);
		 
				//{name: "home", meta: {…}, path: "/home", hash: "", query: {…}, …}
				// fullPath: "/home"
				// hash: ""
				// matched: [{…}]
				// meta: {a: 1, b: 2}
				// name: "home"
				// params: {}
				// path: "/home"
				// query: {}
				// __proto__: Object
		
		if(to.path=="/login"||to.path=="/home"){
			next()
		}else{
			next()
		}		 
})
router.afterEach((to,from,next)=>{
	console.log("全局后置守卫")
})
 export default router


