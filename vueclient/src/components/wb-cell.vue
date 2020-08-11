<template>
	<div class="wb-cell">
		<a href="#" @click="getDetail">
			<img v-if="item.user.avatar_large" :src="item.user.avatar_large">
		
			<div class="cell-wrap">
				<div v-if="item.text" class="cell-content1">
					<h2>{{item.user.screen_name}}</h2>
					<h3>{{item.text}}</h3>
				</div>
				<div v-else class="cell-content2">
					<h2>{{item.user.screen_name}}</h2>
				</div>
				<div class="cell-right">
					<h2>{{item.created_at}}</h2>
					<span v-if="item.unread">{{item.unread}}</span>
					<i v-if="item.arrow"></i>
				</div>
			</div>
			
		
			
		</a>
	</div>
</template>


<script>
	 export default {
		name:"wb-cell",
		props:{
			item:{
				type:Object,
				required:true
			},
			url:{
				type:String,
				default:""
			},
			to:{
				type:Object,
				default:null
			},
				
		},
		
		mounted(){
			
		},
		methods:{
			
			getDetail(){
				console.log("sss")
				if(this.url){
					console.log("aaaaaaaa")
					window.open(this.url,'_blank');
				}else if(this.to){
					console.log("dddddd")
					console.log({name:this.to.name,params:this.to.params,query:this.to.query})
					this.$router.push({name:this.to.name,params:this.to.params,query:this.to.query})
				}
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
.wb-cell a{
display: flex;
align-items: center;
background: #fff;
 height: fit-content;
 padding: 0 .12rem;
}
.wb-cell a img{
	display: block;
	width: 1rem;
	height: 1rem;
	border-radius: 50%;
}

.wb-cell .cell-wrap{
	padding: .2rem 0 .2rem .1rem;
	border-bottom: 1px solid #EBEBEB;
	flex-grow: 1;
	display: flex;
	box-sizing:border-box;
	height: 100%;
	justify-content: space-around;
	
}
.wb-cell .cell-wrap .cell-content1{
	flex-shrink: 0;
}
.wb-cell .cell-wrap .cell-content1 h2{
	color: #333;
	font-size: .28rem;    font-weight: 500;
}
.wb-cell .cell-wrap .cell-content1 h3{
	color: #939393;
	overflow: hidden;
	width: 4rem;
	padding: .1rem 0;
	text-overflow:ellipsis;
	white-space: nowrap;
	font-size: .20rem;
	font-weight: 100;
}
.wb-cell .cell-wrap .cell-content2{
	flex-grow: 1;
	display: flex;
	
	align-items: center;
}
.wb-cell .cell-wrap .cell-content2 h2{
	color: #333;
	font-size: .28rem;    font-weight: 500;
}

.wb-cell .cell-wrap .cell-right{
	width: 1rem;
	text-align: end;
	position: relative;
	
}
.wb-cell .cell-wrap .cell-right h2{
	color: #939393;
	margin-bottom: .1rem;
	overflow: hidden;
	font-size: .20rem;
	font-weight: 100;
}
/* 行内元素只能设置左右,不能设置上下 */
.wb-cell .cell-wrap .cell-right span{
	box-sizing: border-box;
	margin-left: .3rem ;
	min-width: .15rem;
	height: .3rem;
	padding: 0 .08rem;
	border-radius: .15rem;
	background: #ff5b36;
	color: #fff;
	text-align: center;
}
.wb-cell .cell-wrap .cell-right i{
	display: block;
	position: absolute;
	
	right:0;
	top:0 ;
	bottom: 0;
	margin: auto;
	width: .4rem;
	height: .4rem;
	background:url(assets/img/arrow.png);
}


</style>
