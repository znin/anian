<template>
	<div class="msgbox">
		
			<WbNav  :navList="navList" :back="true"></WbNav>
			<div class="cell-wrap">
				<WbCell v-for="(item,index) in userInfo" :key="item._id" :item="item"></WbCell>
				<WbCell v-for="(item,index) in msgboxInfo" :key="item._id" :item="item"></WbCell>
			</div>
			
			
		
		
	</div>
</template>


<script>
	 import axios from '../plugins/axios.js'
	import WbNav from "../components/wb-nav/index.vue"
	import WbCell from "../components/wb-cell.vue"
	 export default {
		name:"msgbox",
		beforeRouteEnter(to,form,next) {
			console.log("内置前置在路由前置之后");
			// /前置   运行在beforeCreate 之前
			// 不！能！获取组件实例 `this`
			// 因为当守卫执行前，组件实例还没被创建
		axios.get('/user/goods/msgbox')
			.then(res=>{
				console.log(res.data)
				res.data.err == 0 ?
				next(_this => _this.msgboxInfo=res.data.data):
				next("/login")
			}).catch()
			
		},
		props:[],
		data(){
			return {
				userInfo:[
				{arrow:true,user:{avatar_large:"https://tvax2.sinaimg.cn/crop.0.0.178.178.180/61ecce97ly8gdi76ihgcwj204y04ygli.jpg?KID=imgbed,tva&Expires=1596891843&ssig=HaKDQ0zNNB",screen_name:"@我的"}},
				{arrow:true,user:{avatar_large:"https://tvax2.sinaimg.cn/crop.0.0.178.178.180/61ecce97ly8gdi76ihgcwj204y04ygli.jpg?KID=imgbed,tva&Expires=1596891843&ssig=HaKDQ0zNNB",screen_name:"评论"}},
				{arrow:true,user:{avatar_large:"https://tvax2.sinaimg.cn/crop.0.0.178.178.180/61ecce97ly8gdi76ihgcwj204y04ygli.jpg?KID=imgbed,tva&Expires=1596891843&ssig=HaKDQ0zNNB",screen_name:"赞"}},
				{arrow:true,user:{avatar_large:"https://tvax2.sinaimg.cn/crop.0.0.178.178.180/61ecce97ly8gdi76ihgcwj204y04ygli.jpg?KID=imgbed,tva&Expires=1596891843&ssig=HaKDQ0zNNB",screen_name:"未关注私信"}},
				],
				msgboxInfo:"",	
				navList:[
						{text:"消息箱",to:this.$route.path},
					],
				
			}
		},
		mounted(){
		},
		methods:{
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
.msgbox{

}
.cell-wrap{
	margin-top: .75rem;
}


</style>
