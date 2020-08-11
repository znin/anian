<template>
	<div id="app">
		<nav>
			<router-link to="/home" active-class="nav__li--active">主页</router-link>
			<router-link to="/login" active-class="nav__li--active">登录</router-link>
			<router-link to="/logout" active-class="nav__li--active">注销</router-link>
			<router-link to="/err" active-class="nav__li--active">404</router-link>
			 <!-- <router-link to="/logout" tag='li' active-class='类名'>声明式跳转</router-link> -->
		</nav>
		
		<div>展示
			
			<router-view>展示区</router-view>
		</div>

		<Button text="注册" bgColor="#2cd2ff"></Button>
		<!-- <WbCell v-for="(item,index) in wbList"  :key="item.id" :data="item"></WbCell> -->
		<WbCell v-for="(item,index) in 4" :item="{title:'在'}"></WbCell>
		<WbInput  label="用户名:" type="text" v-model="username"/>
		<WbInput :type="text" label="传递" v-model="username"></WbInput>
		<WbNav></WbNav>
		<!-- <swiper></swiper> -->
		<!-- <skeleton></skeleton> -->
		<!-- <WbToolBar></WbToolBar> -->
		<!-- <Header></Header> -->
	</div>
	
	
	
</template>
<script>
	import home from "./pages/home.vue"
	import Button from "./components/Button.vue"
	import WbCell from "./components/wb-cell.vue"
	import WbInput from "./components/wb-input.vue"
	import WbNav from "./components/wb-nav"
	import swiper from "./components/swiper"
	import  Skeleton from "./components/skeleton.vue"
	import WbToolBar from "./components/wb-toolBar/index.vue"
	
	export default {
		name: 'App',
		components: {
		home,
		Button,
		WbCell,
		WbInput,
		WbNav,
		swiper,
		Skeleton,
		WbToolBar,
	
		
		},
		data(){
			return {
				text:"qwe",
				username:"",
				wbList:[
					{
					id:"1",
					imgSrc:"../public/1.jpg",
					title:"带动",
					detail:"甲方",
					dot:"3",
					date:"12-223",
					showArrow:false,
					},
					{
					id:"2",
					imgSrc:"./public/2.jpg",
					title:"我",
					showArrow:true,
					},
					{
					id:"3",
					title:"跳",
					detail:"篮球",
					date:"12-3",
					showArrow:false,
					},
				],
			}
		},
	}
</script>

<style>
	#app {}
	.nav__li--active{
		color: red;
	}
</style>
