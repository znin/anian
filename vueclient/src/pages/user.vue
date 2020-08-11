<template>
	<div class="user">
		<WbNav  :navList="navList" :back="true"></WbNav>
		
		<div class="user-wrap">
			<div class="user-top">
				<div class="user-header">
					<img :src="$baseUrl+userInfo.icon">
					<ul>
						<li>{{userInfo.nikename}}</li>
						<li><span>暂无简介</span></li>
					</ul>
				</div>
				<div class="user-foot">
					<span><i>{{userInfo.wb}}</i><i>微博</i></span>
					<span><i>{{userInfo.follow}}</i><i>关注</i></span>
					<span><i>{{userInfo.fans}}</i><i>粉丝</i></span>
					<span>编辑个人资料</span>
				</div>
			</div>
			<div class="setting">
				<div>
					<WbCell v-for="(item,index) in setList1" :key=index :item="item"></WbCell>
				</div>
				<div>
					<WbCell v-for="(item,index) in setList2" :key=index :item="item"></WbCell>
				</div>
				
				<div @click="logout"class="logout">
					<span>退出当前账号</span>
				</div>
			</div>
			
		</div>
		
		
	</div>
</template>


<script>
	import axios from '../plugins/axios.js'
	import WbNav from "../components/wb-nav/index.vue"
	import WbCell from "../components/wb-cell.vue"
	
	 export default {
		name:"user",
		beforeRouteEnter(to,form,next) {
			console.log("内置前置在路由前置之后");
			// /前置   运行在beforeCreate 之前
			// 不！能！获取组件实例 `this`
			// 因为当守卫执行前，组件实例还没被创建
		axios.get('/user/home')
			.then(res=>{
				console.log(res.data)
				res.data.err == 0 ?
				next(_this => _this.userInfo=res.data.data):
				next("/login")
			}).catch()
			
		},
		props:[],
		data(){
			return {
				userInfo:"",
				setList1:[
					{arrow:true,user:{screen_name:"个人资料"}},
					{arrow:true,user:{screen_name:"隐私设置"}},
					{arrow:true,user:{screen_name:"屏蔽设置"}},
					{arrow:true,user:{screen_name:"悄悄关注"}},
				
					],
				setList2:[
					{arrow:true,user:{screen_name:"账号安全"}},
					{arrow:true,user:{screen_name:"版本切换"}},
					{arrow:true,user:{screen_name:"客服中心"}},
					{arrow:true,user:{screen_name:"关于"}},
					],
				navList:[
						{text:"设置",to:this.$route.path},
					],
					
			}
		},
		mounted(){
		},
		methods:{
			logout(){
				window.localStorage.setItem('uuid','');
				this.$router.push('login');
			}
		},
		components:{
			WbNav,WbCell,
		},
		updated(){

		},
		destoryed(){
		}
	}

</script>

<style scoped>
.user{

}
.user-wrap{
margin-top: .7rem;
}
.user-top{
	border-bottom: 1px solid #d3d3d3;
	height: 2.7rem;
}
.user-header{
	
	padding: 0 .2rem;
	height: 1.6rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.user-header img{
	display: block;
	width: 1.2rem;
	height: 1.2rem;
	border-radius: 50%;
}
.user-header ul{
	flex-grow: 1;
	color: #333;
	font-size: .25rem;
	padding-left: .3rem;
}
.user-header ul li{
	color: #000;
	font-size: .4rem;
}

.user-header ul li span{
	font-size: .25rem;
	padding-right: .1rem;
	
}
.user-foot{
	
	font-size: .26rem;
	display: flex;
	padding: 0 .2rem;
	justify-content: space-between;
	align-items: center;
}
.user-foot span{
	display: flex;
	
	flex-direction: column;
}
.user-foot span:last-child{

	padding: .1rem .3rem;
	text-align: center;
	color: #697480;
	border: 1px solid #d3d3d3;
}
.setting{
	background:#F2F2F2;
	padding-bottom: .3rem;
}
.setting>div{
	margin-bottom: .3rem;
}
.logout{
	background: #fff;
	font-size: .3rem;
	text-align: center;
	color: red;
	line-height: .9rem;
	height: .9rem;

}

</style>
