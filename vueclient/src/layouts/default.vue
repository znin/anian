<template>
	<div id="app">
		<WbTop v-show="$root.wTop"></WbTop>
		<WbNav ptop=".75rem" :navList="navList" v-show="$root.wNav"></WbNav>
		<!-- <Header v-show="$root.wNav"></Header> -->
		<Loding v-show="$root.wLoding"></Loding>
		<div  :style="{marginTop: $root.wNav ? '1.6rem' : '0'}">
			<router-view></router-view>
		</div>
		
	</div>
</template>


<script>

	import WbNav from "../components/wb-nav"
	import WbTop from "../components/wb-top/index.vue"
	import Loding from "../components/loading.vue"
	 export default {
		name:"default",
		props:[],
		data(){
			return {
				navList:[
					{text:"游戏",to:"/hotlist"},
					{text:"榜单",to:"/toplist"},
					{text:"电影",to:"/movielist"},
					{text:"音乐",to:"/musiclist"},
					{text:"科技",to:"/sciencelist"},
					{text:"新鲜事",to:"/newlist"},
				],
			}
		},
		mounted(){
		},
		methods:{
			checkRouterData(path){
		
				if(/login|user|register|logout/.test(path)){} this.$root.wNav=this.$root.wTop=false
				if(/home|toplist|newlist|hotlist|movielist|musiclist|sciencelist/.test(path)) this.$root.wNav=this.$root.wTop=true
				
			}
		},
		watch:{
			$route:{
				handler(newpath,oldpath){
					let path=newpath.path;
					console.log(path)
					this.checkRouterData(path)
				},
				immediated:true,
				//deep:true,
			}
		},
		components:{
			WbTop,Loding,WbNav,
		},
		updated(){

		},
		destoryed(){
		}
	}

</script>

<style scoped>
.default{

}
</style>
