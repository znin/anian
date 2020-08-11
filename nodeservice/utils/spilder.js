let axios=require("axios");
let mgdb=require("../utils/mgdb")
const { json } = require("body-parser");
//let url="https://m.weibo.cn/api/feed/trendtop?containerid=102803_ctg1_3288_-_ctg1_3288"



function getWb(arr,data) {
    let statuses=data.data.statuses 
   
    for(let i=0 ;i<statuses.length;i++){
        let obj={
            created_at:Date.parse(statuses[i].created_at),//编辑时间
            comments_count:statuses[i].comments_count,//评论
            attitudes_count:statuses[i].attitudes_count,//赞
            reposts_count:statuses[i].reposts_count,//转发,
            source:statuses[i].source,//来源
            screen_name:statuses[i].user.screen_name,//昵称
            avatar_hd:statuses[i].user.avatar_hd,//头像
            pics:statuses[i].pics,//图片
            text:statuses[i].text
        } 
        arr.push(obj)
    }
}



let spilder=({url,collectionName})=>{
    return new Promise((resolve,reject)=>{
         axios({url,data:"json"})
         .then(res=>{
           
            let arr=[];
            getWb(arr,res.data);
            console.log(arr[0]);
             mgdb.open({collectionName:collectionName})
             .then( ({collection})=>{
                     console.log("数据库打开")
                     collection.insertMany(arr,(err,result)=>{
                         console.log("数据库插入")
                        if(err){
                            console.log("插入失败")
                            console.log(err);
                            reject({err:1,msg:"插入失败",data:err})
                            mgdb.close();
                             return
                        } else{
                            console.log("插入成功")
                            console.log(result.result);
                            resolve({err:0,msg:"成功",data:result.result})
                            mgdb.close();
                        }
                       
                     })
                
                 })
             .catch(res =>{})
            //     // console.log("数据库打开失败")
            //     // reject({err:1,msg:"数据库打开失败",data:res})//数据库打开失败
            
         })
         .catch(res=>{})
    })      
}
module.exports=spilder;