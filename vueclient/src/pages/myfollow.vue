<template>
	<div class="myfollow">
		<CardSmail v-for="(item,index) of $store.state.follow.follows" :item="item"></CardSmail>
	</div>
</template>


<script>
	import CardSmail from "../components/card-smail.vue"
	 export default {
		name:"myfollow",
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
			CardSmail,
		},
		updated(){

		},
		destoryed(){
		}
	}

</script>

<style scoped>
.myfollow{

}
</style>
