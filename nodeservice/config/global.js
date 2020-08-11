module.exports={
    //用户端接口参数
  _page: 0,
  _limit: 10,
  q:'',//检索
  _keyword:'',
  _sort:'created_at',
    //上传资源限定
 
    product: {
      uploadUrl:'/upload/product/'
    },
   
    user: {
      uploadUrl:'/upload/user/'
    },
   
    banner: {
      uploadUrl:'/upload/banner/'
    },
   
    normal: '/upload/default.jpg',
//toplist hotlist newlist sciencelist movielist musiclist
   
    toplist:{
      url:"https://m.weibo.cn/api/feed/trendtop?containerid=102803_ctg1_8999_-_ctg1_8999_home",
     
      collectionName:"toplist"
    },
    hotlist:{
           //热门数据结构不同，懒得改了，此部分实际数据是游戏分类。
       url:"https://m.weibo.cn/api/feed/trendtop?containerid=102803_ctg1_5088_-_ctg1_5088",
       //url:"https://m.weibo.cn/api/container/getIndex?containerid=102803&openApp=0",
      collectionName:"hotlist"
    },
    newlist:{
      url:"https://m.weibo.cn/api/feed/trendtop?containerid=102803_ctg1_7978_-_ctg1_7978",
      collectionName:"newlist"
    },
    sciencelist:{
      url:"https://m.weibo.cn/api/feed/trendtop?containerid=102803_ctg1_2088_-_ctg1_2088",
      collectionName:"sciencelist"
    },
    movielist:{
      url:"https://m.weibo.cn/api/feed/trendtop?containerid=102803_ctg1_3288_-_ctg1_3288",
      collectionName:"movielist"
    },
    musiclist:{
      url:"https://m.weibo.cn/api/feed/trendtop?containerid=102803_ctg1_5288_-_ctg1_5288",
      collectionName:"musiclist"
    }
}