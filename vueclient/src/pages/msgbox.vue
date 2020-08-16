<template>
	<div class="msgbox">
		
			<WbNav  :navList="navList" :back="true"></WbNav>
			<!-- <div class="cell-wrap">
				<WbCell v-for="(item,index) in userInfo" :key="item._id" :item="item"></WbCell>
				<CardSmall v-for="(item,index) of $store.state.follow.follows" :item="item"></CardSmall>
				<WbCell v-for="(item,index) in msgboxInfo" :key="item._id" :item="item"></WbCell>
			</div> -->
			<div style="margin-top: .75rem;"></div>
			<!-- 子路由 -->
		<router-view></router-view>
		
	</div>
</template>


<script>
import WbNav from "../components/wb-nav/index.vue"
	
	 export default {
		name:"msgbox",
		
		props:[],
		data(){
			return {
				
				navList:[
					{text:"我的关注",to:'/msgbox/myfollow'},
					{text:"消息箱",to:'/msgbox/msginfo'},	
					],	
			}
		},
		mounted(){
		},
		methods:{
		},
		components:{
			WbNav
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
