<template>
	<div class="hotlist">
		<div v-if="datalist">
			<WbItem v-for="(item,index) in datalist" :key="item._id" :item="item" :to="{name:'detail',params:{_id:item._id}, query:{collectionName:'hotlist'}}"></WbItem>
			
		</div>
		<Skeleton v-else></Skeleton>
	</div>
</template>


<script>
	import axios from "../plugins/axios.js"
	import WbItem from "../components/wb-card/index.vue"
	import Skeleton from "../components/skeleton.vue"
	 export default {
		name:"hotlist",
		props:[],
		data(){
			return {
				
				datalist:"",
				
			}
		},
		mounted(){
			axios.get("/user/goods/hotlist")
			.then(res=>{
				this.datalist=res.data.data
				console.log(res.data)
			})
		},
		methods:{
		},
		components:{
			WbItem,Skeleton
		},
		updated(){

		},
		destoryed(){
		}
	}

</script>

<style scoped>
.hotlist{

}
</style>
