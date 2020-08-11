import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

import actions from "../store/actions.js"
import mutations from "../store/mutations.js"
import getters from "../store/getters.js"
import state from "../store/state.js"

let store = new Vuex.Store({
	 actions,mutations,getters,state
})

export default store