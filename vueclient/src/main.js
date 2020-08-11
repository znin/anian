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
 let vm=new Vue({
	data:{
		wTop:true,
		wNav:true,
		wLoding:true,
	},
  render: h => h(Default),
  router,
  
}).$mount('#app')

export default vm