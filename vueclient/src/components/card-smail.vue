<template functional>
	
	<div  class="card-smail" >
		<div class="card-header">
			
			<img :src="props.item.avatar_hd">
			<ul>
				<li>{{props.item.screen_name}}</li>
				<li><span>{{props.item.created_at | date}}</span><span v-if="props.item.source">来自</span><span>{{props.item.source}}</span></li>
			</ul>
			
		</div>
		
		</div>
	
</template>



<style scoped>
.card-smail{
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
	
</style>
