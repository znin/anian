import axios from "axios";
import Vue from "vue"
import router from "./router.js"
import vm from "../main.js"
//请求拦截器
axios.interceptors.request.use(function(config){
	let token=window.localStorage.getItem('uuid')
	config.headers={
		token
	}
	vm.wLoding=true;
	return config;
})

//响应拦截器
// 添加一个响应的拦截器
axios.interceptors.response.use(function(response) {
  //response  ~~ axios请求后的res
  // 响应数据回来后，到达目标组件之前，做点事   res.status   res.data.err == 2
  //校验返回数据，token过期，路由跳转login,传递当前路由地址
  let currentRoute = router.currentRoute.fullPath;//获取当前路由全路径，string

  if(response.data.err===10 && !currentRoute.includes('/login')){
    router.replace({
      path:'/login',
      query:{p:currentRoute}
    })
  }
  
  // 隐藏loading
  vm.wLoding=false;
  return response;//奔向组件
}, function(error) {
  // 错误的响应，拦截
  return Promise.reject(error);
});

Vue.prototype.$axios=axios;
//window.axios=axios

export default axios

