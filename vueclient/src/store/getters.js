import {baseUrl} from "../config/base.js"
 let getters={
	 isDetail(state){
		 if(state.detail.detail){
			 return state.detail.detail.icon
		 }
	 }
 }
 
 export default getters;