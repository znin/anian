<template>
	<div id="home">
				
	</div>
</template>


<script>
	import WbNav from "../components/wb-nav/index.vue"
	import WbCell from "../components/wb-cell.vue"
	 export default {
		name:"home",
		beforeRouteEnter(to,form,next) {
			console.log("内置前置在路由前置之后");
			// /前置   运行在beforeCreate 之前
			// 不！能！获取组件实例 `this`
			// 因为当守卫执行前，组件实例还没被创建
			next();
		},
		props:[],
		data(){
			return {
				
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
.home{

}
.home-top{
	border-bottom: 1px solid #697480;
	height: 2.9rem;
}
.user-header{
	padding: 0 .2rem;
	height: .9rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.user-header img{
	display: block;
	width: .8rem;
	height: .8rem;
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
.user-header ul li:last-child{
	
	font-size: .20rem;
}
.user-header ul li span{
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
	border: 1px solid #697480;
}
</style>
