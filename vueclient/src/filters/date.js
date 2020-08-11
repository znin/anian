import {fillzero} from "./fillzero.js";

export const date = time => {
	let now = new Date();
	let t = new Date();
	t.setTime(time);

	if(now - time < 3600000){  //一小时之内
		return Math.floor((now - time) / (1000 * 60 )) + "分钟前"
	}else if (now - time < 86400000) { //一天之内返回多少小时前
		return Math.floor((now - time) / (1000 * 60 * 60)) + "小时前"
	} else if (now - time < 172800000) { //两天 返回昨天的发布时间
		let hour = t.getHours()
		let min = t.getMinutes()
		return "昨天" + hour + ":" + min
	} else { //返回发布日期
		let year = t.getFullYear() == now.getFullYear() ? "" : t.getFullYear()
		let month = t.getMonth() + 1
		let date = t.getDate()
		return year + month + "-" + date
	}
}
