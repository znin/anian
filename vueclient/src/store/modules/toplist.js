import * as types from "../types.js"
import axios from "../../plugins/axios.js"

const state ={
	datalist:"",
}

const actions ={
	[types.UPDATE_TOPLIST]:({state,commit},payload) =>{
		axios.get("/user/goods/toplist")
		.then(res=>{
			commit(types.UPDATE_TOPLIST,res.data.data)
			console.log(res.data)
		})
	},
}
const mutations ={
	[types.UPDATE_TOPLIST]:(state,payload) =>{
		state.datalist={...state.datalist,...payload}
	}
}

const getters ={
	
}

export default {
	namespaced:true,
	state,actions,mutations,getters
}