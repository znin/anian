
module.exports = {
  css:{
	  loaderOptions:{
		  sass:{
			  additionalData:`
			  @import "@/assets/sass/base.sass";
			  `
		  },
		  scss:{
			  additionalData:`
			  @import "@/assets/scss/base.scss";
			  `
		  }
	  }
	},
  devServer:{
      //设置代理
      proxy: { //代理是从指定的target后面开始匹配的，不是任意位置；配置pathRewrite可以做替换
        '/user': { //axios访问 /api ==  target + /api
          //target: 'http://127.0.0.1:1122',
		  target: 'http://81.70.50.83:1122',
		  //target: 'http://39.97.106.199:1122',
          changeOrigin: true, //创建虚拟服务器
          ws: true, //websocket代理
        },
		'/admin': { //axios访问 /api ==  target + /api
		  target: 'http://81.70.50.83:1122',
		  //target: 'http://39.97.106.199:1122',
		  //target: 'http://127.0.0.1:1122',
		  changeOrigin: true, //创建虚拟服务器
		  ws: true, //websocket代理
		},
        '/douban': { // axios 访问 /douban/x1/x2 == target + '/douban/x1/x2'   真实: 'https://douban.uieee.com/x1/x2'
          target: 'https://douban.uieee.com',
          changeOrigin: true,
          pathRewrite: { //路径替换
            '^/douban': '', // axios 访问/douban/x1/x2 == target + /x1/x2
          }
        }
      }
    }
}