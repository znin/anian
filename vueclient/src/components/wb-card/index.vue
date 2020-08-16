<template>
	
	<div  class="wb-card" >
		<div class="card-header">
			<img :src="item.avatar_hd">
			<ul>
				<li>{{item.screen_name}}</li>
				<li><span>{{item.created_at | date}}</span><span v-if="item.source">来自</span><span>{{item.source}}</span></li>
			</ul>
			<span @click="add" ref='add' :class="item.isadd ? 'active':''">+关注</span>
		</div>
		
		<div class="card-article" @click="getDetail">
			<div v-html="item.text" class="article-text">
			
			</div>
			<div class="imglist">
				<div class="img-wrap">
					<img v-for="(img,index) of item.pics":src="img.url" :key="index" >
				</div>
			</div>
		</div>
		<div class="crad-foot">
			<div class="foot-wrap">
				<span><i><img src="./assets/img/zhuan.png"></i>{{item.reposts_count}}</span>
				<span><i><img src="./assets/img/cmp.png"></i>{{item.comments_count}}</span>
				<span><i><img src="./assets/img/zan.png" ></i>{{item.attitudes_count}}</span>
				<span><i></i>. . .</span>
			</div>
		</div>	
	</div>
</template>


<script>

	 export default {
		name:"wb-card",
		props:{
			item:{
				type:Object,
				required:true,
			},
			url:{
				type:String,
				default:''
		    },
			to:{
				type: Object,
				default:null
			},
		},
		data(){
			return {
			isAdd:false
		}
		},
		methods:{
			getDetail(){
				
				if(this.url){
					window.open(this.url,"_blank")
				}else if(this.to){
					console.log({name:this.to.name,params:this.to.params,query:this.to.query})
					
					this.$router.push({name:this.to.name,params:this.to.params,query:this.to.query})
				}
			},
			add(){
				this.$emit('click',this.item)
				this.isAdd = !this.isAdd
				console.log(this.to.query.collectionName)
				this.$axios.post(`admin/modify/${this.to.query.collectionName}/${this.item._id}`)
				.then(res =>{
					if(res.data.err==0){
						this.item.isadd=!this.item.isadd
					}
					console.log(res.data)
				})
				//this.$refs.add.style.background=""
				
				
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
.wb-card{
padding: .2rem;
color: #939393;
clear: both;
border-bottom: 1px solid #ccc;
overflow: hidden;
}
.card-header{
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.card-header img{
	display: block;
	width: .8rem;
	height: .8rem;
	border-radius: 50%;
}
.card-header ul{
	flex-grow: 1;
	color: #333;
	font-size: .25rem;
	padding-left: .3rem;
}
.card-header ul li:last-child{
	
	font-size: .20rem;
}
.card-header ul li span{
	padding-right: .1rem;
}
.card-header>span{
	
	display: block;
	height: .3rem;
	padding: 0 .2rem;
	margin-right: .3rem;
	border: 1px solid #ccc;
}
.card-article .article-text{
	color: #333;
	font-size: .3rem;
	margin: .3rem 0;
}
.wb-card .card-article .article-text a{
	color: #3c6e0e;
	
}
.crad-foot{
	
	clear: both;
	overflow: hidden;
}
.crad-foot .foot-wrap span{
	

	padding: .3rem .3rem 0 0;
	float: left;
}
.crad-foot .foot-wrap span:last-child{
	float: right;
	font-size: .25rem;
	padding: .3rem 0 .3rem ;
}
.active{
	background:#dde3d9 ;
}
</style>
