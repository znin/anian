<template>
	<span id="Button" >
		<input 
		type="button"
		@click="$emit('click')"
		:style="{background:bgColor}"
		:value="text"
		class="button-button"
		>
	</span>
</template>


<script>
	 export default {
		name:"Button",
		props:{
			text:{
				type:String,
				default:"按钮"
			},
			bgColor:{
				type:String,
				default:"#073311"
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
.Button{
	
}
.button-button{
	width:4.65rem;height:0.65rem; background:#4c4f50; color:#fff; text-align:center; line-height:0.65rem; border-radius:8px; display:block;  font-size:0.28rem;
}
.button-button:active{
	opacity: 0.5;
}
</style>
