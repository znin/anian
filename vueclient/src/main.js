import Vue from 'vue'
import App from './App.vue'
import Default from "./layouts/default.vue"
import router from "./plugins/router.js"
Vue.config.productionTip = false
import  "./assets/font/font.js"
import  "./assets/css/base.css"
import "./plugins/axios.js"
import filters from "./filters"
Object.keys(filters).map(key=>Vue.filter(key,filters[key]))

import {baseUrl} from "./config/base.js"
Vue.prototype.$baseUrl=baseUrl;

//状态管理
 import store from "./plugins/vuex.js"
import * as types from "./store/types.js"
 Vue.prototype.$types=types;
 

 let vm=new Vue({
	data:{
		
	},
  render: h => h(Default),
  router,
  store,
  
}).$mount('#app')

export default vm