<template>
	<div class="detail">
		<WbNav  :navList="navList" :back="true" bgColor="#fafafa"></WbNav>
	
	<div class="detail-wrap">
		<div v-if="card">
		<WbCard :item="card"></WbCard>
		</div>
		<Skeleton v-else></Skeleton>
	</div>
		
	</div>
</template>


<script>
	import WbCard from "../components/wb-card/index.vue"
	import Skeleton from "../components/skeleton.vue"
	import WbNav from "../components/wb-nav/index.vue"
	 export default {
		name:"detail",
		props:[],
		data(){
			return {
			card:"",
				navList:[
						{text:"微博正文",to:this.$route.path},
					],
			}
		},
		mounted(){
			console.log(this.$route.fullPath)
			let collectionName=this.$route.query.collectionName
			let _id=this.$route.params._id
			this.$axios.get(`/user/goods/${collectionName}/${_id}`)
				.then(res => 
				//console.log(res.data))
				this.card= res.data[0])
				.catch(res => console.log(res))
		},
		methods:{
		},
		components:{
			WbCard,Skeleton,WbNav,
		},
		updated(){

		},
		destoryed(){
		}
	}

</script>

<style scoped>
.detail{

}
.detail-wrap{
	margin-top: .8rem;
}
</style>
