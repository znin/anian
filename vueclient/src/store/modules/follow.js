import mState from "../state.js"
const state= {
	follows:[],
}

const actions ={
	findAll:({state,commit},payload)=>{
		let arr=[...state.follows]
		
		mState.datalist.forEach((item,index)=>{
			if(item.isadd){
				//使用这种方式不会得到预期结果，
				//indexOf方法查找引用类型永远得到-1，
				// console.log(arr.indexOf(item))
				// if((arr.indexOf(item))==-1){
				// 	arr.push(item)
				// }
				
				//可以使用 JSON.stringify(),把数组转换字符串再查找
				
				//遍历对象 通常用for in来遍历对象的键名
				//，for in遍历的是数组的索引（即键名），而for of遍历的是数组元素值。
				// for of遍历的只是数组内的元素，而不包括数组的原型属性method和索引name
				
				let find=false
				for(let prop of arr){
					if(prop._id==item._id) find=true
				}
				
				// let find=false
				// arr.forEach((itm,idx)=>{
				// 	if(itm._id==item._id) find=true
				// })
				
				if(!find) arr.push(item)
			}
				 
		})
		
		commit('findAll',arr)
	},
	change:({state,commit},payload)=>{
		let find=false
		console.log(state)
		let arr=[...state.follows]
		state.follows.forEach((item,index)=>{
			if(item._id==payload._id) {
				find=true
				arr.splice(index,1);
			}
		})
		if(!find) arr.push(payload)
		commit('change',arr)
	}
}

const mutations ={
	
		change:(state,payload)=> state.follows=payload,
		findAll:(state,payload) => state.follows=payload,
		
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