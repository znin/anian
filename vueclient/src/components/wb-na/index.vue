
<template>
	<div class="wb-nav" :style="{background:bgColor}">
		<span v-if="back">
			<i @click="$router.go(-1)"></i>
		</span>
		<ul class="nav-content">
			<li v-for="(text,index) in texts"><a href="">{{text}}</a><i :style="{border:texts.length>1 ? '1px solid #282F3C':'none'}"></i></li>
			
		</ul>
	</div>
</template>


<script>
	 export default {
		name:"wb-nav",
		props:{
			bgColor:{
				type:String,
				default:"#fff"
			},
			texts:{
			},
			back:{
				type:Boolean,
				default:true,
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
.wb-nav{
position: fixed;
top: 0;

width: 100%;
font-size: .3rem;
display: flex;
height: .8rem;

}
.wb-nav span{
	position: absolute;
}
.wb-nav span i{
	display: block;
	width: .71rem;
	height: .71rem;
	background: url(assets/img/arrow-left_1.png) no-repeat;
}
.wb-nav ul{
	width: 100%;
	display: flex;
	justify-items: center;
	justify-content: center;
}
.wb-nav ul li{
	
	display: flex;
	justify-content: center;
	padding: 0 .3rem;
	align-items: center;
	flex-direction: column;
}
.wb-nav ul li a{
	color: #282f3c;
	padding-bottom:.06rem ;
}
.wb-nav ul li i{
	width: .2rem;
	
}
</style>