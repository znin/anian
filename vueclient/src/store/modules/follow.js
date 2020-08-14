
const state= {
	follows:[],
}

const actions ={
	
	add:({state,commit},payload)=>{
		let find=false
		
		let arr=[...state.follows]
		state.follows.forEach((item,index)=>{
			if(item._id==payload._id) {
				find=true
				arr.splice(index,1);
			}
		})
		if(!find) arr.push(payload)
		commit('add',arr)
	}
}

const mutations ={
	
		add:(state,payload)=> state.follows=payload,
		
		
		// follows.findIndex((item)=>item._id=payload._id)>-1 ? follows.splice(follows.findIndex((item)=>item._id=payload._id),1)
		// :follows.push(item)

	remove:(state,payload) => state.follows=payload
}

const getters= {
	
}

export default {
	namespaced:true,
	state,actions,mutations,getters
}