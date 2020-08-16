<template>
	<div id="app">
		<WbTop v-show="$store.state.wTop" @keydown="search($event)"></WbTop>
		<WbNav ptop=".75rem" :navList="navList" v-show="$store.state.wNav"></WbNav>
		<!-- <Header v-show="$root.wNav"></Header> -->
		<Loding v-show="$store.state.wLoding"></Loding>
		<div  :style="{marginTop: $store.state.wNav ? '1.6rem' : '0'}">
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
				searchText:"",
				
			}
		},
		mounted(){
		},
		methods:{
			checkRouterData(path){
					
				if(/login|user|register|logout|msgbox|detail|updata/.test(path)) {
					this.$store.commit(this.$types.UPDATE_WNAV,false)
					this.$store.commit(this.$types.UPDATE_WTOP,false)
					
				}
				if(/home|toplist|newlist|hotlist|movielist|musiclist|sciencelist/.test(path)) {
					this.$store.commit("UPDATE_WNAV",true)
					this.$store.commit("UPDATE_WTOP",true)
					//this.$root.wNav=this.$root.wTop=true
				}
				
			},
			search(text){
				this.searchText=text
				
				console.log(this.$route.path)
				this.$axios.get(`/user/goods${this.$route.path}?q=text&_kw=${this.searchText}`)
				.then(res=>{
					this.$store.state.datalist=res.data.data
					console.log(res.data)
				})
				
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
