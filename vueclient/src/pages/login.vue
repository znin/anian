<template>
	<div class="login">
		<div class="topbox">
		</div>
		<WbInput  label="用户名:" type="text" v-model="username"/>
		<WbInput  label="密码:" type="password" v-model="password"/>
		<div class="regbox">
			<span class="err-info">{{errMsg}}</span>
			<br>
			<br>
			<Button  text="登录" bgColor="#FF8200" @click="login"></Button>
			
		</div>
		
		<span>忘记密码？</span>
		
		<router-link to="/register" tag="span">立即注册</router-link>
	</div>
</template>


<script>
	import WbInput from "../components/wb-input.vue"
	import Button from "../components/Button.vue"
	
	 export default {
		name:"login",
		props:{},
		data(){
			return {
				 username:"",
				 password:"",
				 errMsg:"",
				
			}
		},
	
		methods:{
			login(){
				this.$axios({
					url:"/user/login",
					data:{username:this.username,password:this.password},
					method:"post"
				}).then(res=>{
					if(res.data.err==0){
						console.log(res.data);
						window.localStorage.setItem('uuid',res.data.tk)
						this.$router.push("./home")
					}else{
						this.errMsg=res.data.msg;
					}
				})
			}
		},
		components:{
			WbInput,
			Button,
		
		},
		
	
	}

</script>

<style scoped>
.login{
text-align: center;
}
.login .topbox{
	
	height: 6.2rem;
	background: url("../assets/img/631.png") no-repeat 0 0;
	 background-size:100%; 
}
.login .regbox{
	width: 4.8rem;
	margin: .3rem auto;
}
.login .button-button{

}
.login .err-info{
	padding-top:.2rem ;
	color:red;	
}
.login span {
	color: #333;	
}
.login span:last-child{
	color: #007AFF;
   margin-left: 1.2rem;
}
</style>
