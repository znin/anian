<template>
	<div class="updata">
		<WbNav  :navList="navList" :back="true"></WbNav>
		
		<div class="updata-wrap">
			
			<div class="up-btn">
				<button @click="upList($event,'toplist')" class="btn">更新榜单</button>
				<button @click="upList($event,'hotlist')" class="btn">更新游戏</button>
				<button @click="upList($event,'musiclist')" class="btn">更新音乐</button>
				<button @click="upList($event,'movielist')" class="btn">更新电影</button>
				<button @click="upList($event,'newlist')" class="btn">更新新鲜事</button>
				<button @click="upList($event,'sciencelist')" class="btn">更新科技</button>
			</div>	
			<div class="up-msg">
				<h2>{{upMsg}}</h2>
			</div>
		</div>
		
		
	</div>
</template>


<script>
	import axios from '../plugins/axios.js'
	import WbNav from "../components/wb-nav/index.vue"
	import WbCell from "../components/wb-cell.vue"
	import Button from "../components/Button.vue"
	
	 export default {
		name:"updata",
	
		props:[],
		data(){
			return {
				updataInfo:"",
				
				navList:[
						{text:"更新数据",to:this.$route.path},
					],
				upMsg:"",	
					
			}
		},
		mounted(){
		},
		methods:{
			
			upList(ev,trendtop){
				
				this.$axios.post(`admin/spilder/${trendtop}`)
				.then(res=>{
					this.upMsg=`${res.data.msg}更新了${res.data.data.data.n}条`
					console.log(res.data.data.data)
				})
				
			
			}
		},
		components:{
			WbNav,WbCell,Button,
		},
		updated(){

		},
		destoryed(){
		}
	}

</script>

<style scoped>
.updata{

}
.updata-wrap{
margin-top: .7rem;
}
.up-btn{
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
	align-items: center;
}
.btn{
	margin: .3rem;
	padding: .3rem;
}
.up-msg{
	text-align: center;
}


</style>
