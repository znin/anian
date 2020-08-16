<template>
	<div class="nav" :style="{top:ptop ||'0rem'}">
		<ul>
			<span v-if="back">
				<i @click="$router.go(-1)"></i>
			</span>
			<router-link :to="item.to" v-for="(item,index) of navList" active-class="active" tag="li"><a href="javascript:;">{{item.text}}</a><i :style="{border:navList.length>1 ? '1px solid #282F3C':'none'}"></i></router-link>

              <!-- <router-link to="/hotlist" active-class="active" tag="li"><a href="javascript:;">游戏</a><i></i></router-link>
			<!--hotlist微博热门数据结构和其他不同，懒得改了，把地址换成了游戏分类，名字也懒得改了 -->
			
			
		</ul>
		
	</div>
</template>


<script>
	 export default {
		name:"Wb-Nav",
		props:{
			back:{
				type:Boolean,
				default:false,
			},
			navList:{
				type:Array,
				default:null,
			},
			ptop:{
				type:String,
				default:'0rem',
			}
		},
		data(){
			return {
				
	
			}
		},
		mounted(){
		},
		methods:{
		},
		components:{
		},
		updated(){

		},
		destoryed(){
		}
	}

</script>

<style scoped>
.nav span{
	position: absolute;
	left: 0;
}
.nav span i{
	display: block;
	width: .71rem;
	height: .71rem;
	background: url(assets/img/arrow-left_1.png) no-repeat;
}
.nav {width:100%; position:fixed; left:0; z-index:2; background:#fafafa;overflow: scroll;}
.nav ul{height:0.75rem; margin:0 auto;text-align: center;display: flex;width: fit-content;}
.nav ul li{width:1.46rem;height:0.75rem; }
.nav ul li a{ display:block;width:1.46rem;height:0.5rem; line-height:0.75rem; text-align:center; font-size:0.3rem; color:#A9B1B9;padding-bottom: .06rem;}
.nav ul li i{ display: none }
.nav ul li.active a{height:0.5rem; color:#5A5A5A;text-align: center;}
.nav ul li.active i{display: block; width: .2rem; border-bottom:.1rem solid #000b12; color:#5477b2;margin: .1rem auto;}
</style>

