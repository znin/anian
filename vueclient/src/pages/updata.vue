<template>
	<div class="updata">
		<WbNav  :navList="navList" :back="true"></WbNav>
		
		<div class="updata-wrap">
			<div class="bannr-wrap">
			<swipe class="my-swipe"  ref="swipe">
			 <swipe-item style="position: relative;" class="slide1" v-for="(item,index) of banner">
				 <img style="width: 100%; height: 3rem;" :src="item.banner" >
				 <p class="b-title">{{item.title}}</p>
			 </swipe-item>
			
			</swipe>
			</div>
			
			<div class="up-btn">
				<button @click="upList($event,'toplist')" class="btn">更新榜单</button>
				<button @click="upList($event,'hotlist')" class="btn">更新游戏</button>
				<button @click="upList($event,'musiclist')" class="btn">更新音乐</button>
				<button @click="upList($event,'movielist')" class="btn">更新电影</button>
				<button @click="upList($event,'newlist')" class="btn">更新新鲜事</button>
				<button @click="upList($event,'sciencelist')" class="btn">更新科技</button>
				<button @click="upAll($event)" class="btn">更新所有</button>
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
	 import 'vue-swipe/dist/vue-swipe.css'
	import { Swipe, SwipeItem } from 'vue-swipe';
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
				banner:[],
					
			}
		},
		mounted(){
			
			
			
		
			this.$axios({
			        url:'/user/goods/banner',
			        params:{_limit:3}
			      }).then(
			        res=>{this.banner=res.data.data
					console.log(res.data)
			      })
			
		},
		methods:{
			
			upList(ev,trendtop){
				this.$axios.post(`admin/spilder/${trendtop}`)
				.then(res=>{
					this.upMsg=`${res.data.msg}更新了${res.data.data.data.n}条(默认时间排序，新数据可能不在顶端)`
					console.log(res.data.data.data)
				})
			},
			upAll(){
				Promise.all([
					this.$axios.post("admin/spilder/toplist"),
					this.$axios.post("admin/spilder/newlist"),
					this.$axios.post("admin/spilder/sciencelist"),
					this.$axios.post("admin/spilder/hotlist"),
					this.$axios.post("admin/spilder/movielist"),
					this.$axios.post("admin/spilder/musiclist"),
					]).then(
				  res=>{
					 
	 console.log(res.reduce((count,item)=>count+item.data.data.data.n,0))
				 let n=	res.reduce((count,item)=>count+item.data.data.data.n,0)
					this.upMsg=`共更新了${n}条(默认时间排序，新数据可能不在顶端)`
				  }
				)
				 
				 
				// //一次性 抓取多次请求的结果
				// axios.all([
				//   axios({url:'/api/home'}), 
				//   axios({url:'/api/follow'})
				// ]).then(axios.spread((home, follow)=>{
				//    this.home=home.data.data;
				//    this.follow=follow.data.data;
				// }))
			}
		},
		components:{
			WbNav,WbCell,Button,
			'swipe':Swipe,
			'swipe-item':SwipeItem
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
.bannr-wrap{
	height: 4rem;
	margin-top: 1rem;
	overflow: hidden;
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
.my-swipe {
  height: 3.3rem;
  color: #702cac;
  font-size: .2rem;
  text-align: center;
}

.b-title{
	
	height: .3rem;
	background-color:rgba(61, 59, 59, 0.2);
}





</style>
