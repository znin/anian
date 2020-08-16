<template>
	<div class="toplist">
		
		<div v-if="$store.state.datalist">
			<WbItem v-on:click="change" v-for="(item,index) in $store.state.datalist" :key="item._id" :item="item" :to="{name:'detail',params:{_id:item._id}, query:{collectionName:$route.path}}"></WbItem>
		</div>
		<Skeleton v-else></Skeleton>
	</div>
</template>


<script>
	import axios from "../plugins/axios.js"
	import WbItem from "../components/wb-card/index.vue"
	import Skeleton from "../components/skeleton.vue"
	import {createNamespacedHelpers} from "vuex"
	 const {mapActions,mapMutations,mapState} =createNamespacedHelpers('follow')
	 export default {
		name:"toplist",
		props:[],
		
		mounted(){
		
			this.$store.dispatch(this.$types.UPDATE_LIST,this.$route.path)
			
		},
		methods:{
			//...mapMutations(['add',]),
			...mapActions(['change']),
		},
		components:{
			WbItem,Skeleton,
		},
		updated(){

		},
		destoryed(){
		}
	}

</script>

<style scoped lang="scss">
.toplist{

}
</style>
