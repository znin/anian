<template>
	<div class="skeleton">
	
			<ul>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
		
	</div>
</template>


<script>
	 export default {
		name:"skeleton",
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
		},
		updated(){

		},
		destoryed(){
		}
	}

</script>

<style scoped>
.skeleton{

}
.skeleton ul{
	display: flex;
	
	justify-content: space-around;
	flex-wrap: wrap;
}

.skeleton ul li {
	margin: .3rem;
	
	height: 1.3rem;
	width: 2rem;
	background-color: #ccc;
}

</style>
