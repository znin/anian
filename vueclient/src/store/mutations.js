import {UPDATE_WNAV,UPDATE_WTOP,UPDATE_WLOADING,UPDATE_LIST} from "./types.js"

let mutations ={
	[UPDATE_WNAV]:(state,payload) => state.wNav=payload,
	[UPDATE_WTOP]:(state,payload) => state.wTop=payload,
	[UPDATE_WLOADING]:(state,payload) => state.wLoding=payload,
	[UPDATE_LIST]:(state,payload) => state.datalist=payload,
	
	
}

export default mutations;