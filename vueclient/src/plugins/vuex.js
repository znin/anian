import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)


import actions from '../store/actions.js'
import mutations from '../store/mutations.js'
import getters from '../store/getters.js'
import state from '../store/state.js'

import follow from "../store/modules/follow.js"

let store = new Vuex.Store({
	 actions,mutations,getters,state,
	 modules:{
		 //模块名：模块变量名
		 follow,
	 }
})

export default store