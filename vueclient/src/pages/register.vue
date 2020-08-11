<template>
	<div class="register">
		<div class="topbox" @click="upload">
			<input style="display: none;" id="icon" type="file">
			<span>give me five</span>
		</div>
		<span class="info">{{errMsg}}</span>
		<WbInput  label="用户名:" type="text" v-model="username" @input="typing"/>
		<WbInput  label="密码:" type="password" v-model="password"/>
		<WbInput  label="昵称:" placeholder="可选"  v-model="nikename"/>
		<div class="regbox">
			<Button  text="注册" bgColor="#26e2ff" @click="login"></Button>
		</div>
		<span>已有账号？</span>
		
		<router-link to="/login" tag="span">立即登录</router-link>
	</div>
</template>


<script>
	import WbInput from "../components/wb-input.vue"
	import Button from "../components/Button.vue"
	
	 export default {
		name:"register",
		props:{},
		data(){
			return {
				 username:"",
				 password:"",
				 nikename:"",
				 errMsg:"",
				ids:"",
			}
		},
	
		methods:{
			upload(){
				let iconFile = document.getElementById('icon');
				iconFile.click();//模拟input File 点击
			},
			typing(){
				if(this.ids)return
					this.ids=setTimeout(()=>{
					clearTimeout(this.ids);
					this.ids="";
					console.log("防抖")
					this.$axios({
						url:"/user/register/typing",
						data:{username:this.username},
						method:"post"
					}).then(res=>{
						document.querySelector(".info").style.color=res.data.err==0 ?"green":"red";
						this.errMsg=res.data.msg;
						
					})
						},500)
				
					
				
				
			},
			login(){
				let formData =new FormData();
				formData.append('username',this.username)
				formData.append('password',this.password)
				formData.append('nikename',this.nikename)
				
				let iconfile=document.getElementById('icon')
				formData.append('icon',iconfile.files[0])
				
				this.$axios({
					url:"/user/register/submit",
					data:formData,
					method:"post"
				}).then(res=>{
					if(res.data.err==0) this.$router.push("./login")
					document.querySelector(".info").style.color="red";
					this.errMsg=res.data.msg;
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
.register{
text-align: center;
}
.register .topbox{
	
	height: 4.2rem;
	background: url("../assets/img/630.png") no-repeat 0 0;
	 background-size:100%; 
}
.register .topbox span{
	position: absolute;
	color: #55A532;
	top: 1.2rem;
	font-size: .3rem;
	}
.register .regbox{
	width: 4.8rem;
	margin: .3rem auto;
}
.register .button-button{

}
.register .info {
	color: red;
	display: block;
	padding: .2rem;
}
.register span {
	color: #333;
}
.register span:last-child{
	color: #007AFF;
	margin-left: 1.2rem;
}

</style>
