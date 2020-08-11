<template>
	<div class="wb-top" @keydown.13="search">
		<div class="top-wrap">
			<router-link to="/user" tag="span"><img src="./assets/img/wo.png"></router-link>
			
			<div class="top-input">
				<img src="./assets/img/fangdajing.png"><input type="text" placeholder="大家都在搜" v-model="searchText"></div>
			<router-link to="/msgbox" class="top-msg" tag="div"><em>3</em></router-link>
			
				
			<router-link to="/updata" style="width: .8rem;" tag="span"><img src="./assets/img/xiezi.png"></router-link>
		
		</div>
	</div>
</template>


<script>
	 export default {
		name:"wb-top",
		props:[],
		data(){
			return {
			searchText:"",	
			}
		},
		mounted(){
		},
		methods:{
			search(){
				alert("2");
			}
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
.wb-top{
width:100%;
 position:fixed;
 height: .75rem;
 padding: .1rem;
 top:0;
 left:0;
 z-index:2;
 background:#fafafa;
}
.top-wrap{
	display: flex;
	justify-content: space-around;
}
.top-input{
	display: flex;
	
	background-color: #dfdfdf;
	border-radius:.3rem ;
	width: fit-content;
}
.top-msg{
	position: relative;
	width: .5rem;
	background: url(assets/img/xinjian.png) no-repeat;
}
.top-msg em{
	text-align: center;
	color: #fff;
	background: #ff5b36;
	display: block;
	right: -25%;
	position: absolute;
	padding: .02rem;
	border-radius: .15rem;
	min-width: .28rem;
	font-style: normal;
}
</style>
