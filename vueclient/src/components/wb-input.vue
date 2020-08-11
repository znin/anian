<template>
	<div class="wb-input">
			<input 
			:type="type"
			:value="value"
			:placeholder="placeholder"
			@input="$emit('input',$event.target.value)"
			
			>
		<span v-show="label">{{label}}</span>	
	</div>
</template>


<script>
	 export default {
		name:"wb-input",
		props:{
			type:{
				type:String,
				default:'text'
			},
			value:{
				type:String,
				default:""
			},
			label:{
				type:String,
				default:""
			},
			placeholder:{
				type:String,
				default:"",
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
.wb-input{

	box-shadow: 1px 1px 5px #dedede;
}
 .wb-input{border-bottom:1px solid #e5e7e8;height:0.95rem; position:relative;}
  .wb-input input{ padding-left:1.24rem;width:4.54rem;height:100%; font-size:0.3rem;}
  .wb-input span{width:1.23rem;height:0.49rem; position:absolute;top:0.26rem;left:0; border-right:1px solid #676868; color:#676868; font-size:0.25rem; line-height:0.49rem; text-align:center;}
</style>

</style>
