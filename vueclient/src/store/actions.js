import * as types from "./types.js"
import axios from "../plugins/axios.js"

let actions ={
	[types.UPDATE_LIST]:({state,commit,dispatch},payload) =>{
		axios.get(`/user/goods${payload}`)
		.then(res=>{
			commit(types.UPDATE_LIST,res.data.data)
			console.log(res.data)
			dispatch('follow/findAll')
		})
	},
	
}

export default actions;