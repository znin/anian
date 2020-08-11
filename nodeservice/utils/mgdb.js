let mongodb=require('mongodb');
const { promiseImpl, resolveInclude } = require('ejs');
let ObjectId = mongodb.ObjectId;

let mongoclient=mongodb.MongoClient

let address = 'mongodb://127.0.0.1:27017'
let options = { useUnifiedTopology: true };
let mogodbName='node'
let connect=null;
let open=({url=address,dbName=mogodbName,collectionName})=>{
    
    return new Promise((resolve,reject)=>{
        if(!collectionName){
            reject({err:1,msg:"collectionName为必选参数"})
            return;
        }
        mongoclient.connect(url,options,(err,client)=>{
            if(err){
                reject({err:1, msg:"数据库连接失败"});//连接失败
            }else{
                connect=client;
                let db=client.db(dbName);
                let collection=db.collection(collectionName);
                resolve({collection,ObjectId});
            }
        })
    })

   

}
let close=()=>connect&&connect.close();

let findList=({dbName=mogodbName,collectionName, _page, _limit, _sort,q, _kw})=>{
      return new Promise((resolve,reject)=>{
          if(!collectionName){
              reject({err:1,msg:"collectionName为必须参数"})
              return;
          }
          open({dbName,collectionName})
          .then(({collection})=>{
              // collection.find({条件},{skip:1,limit:1,projection:{key:1},sort:{key:-1}},(err,result)=>{result=对象})
              
              let rule={};
              if(q && _kw){
                 rule={[q]:new RegExp(_kw,'ig')}  //正则表达式，不精确查找 
              }
              console.log(rule)
              collection.find(rule,{
                   skip:_page* _limit,//页数
                   limit:_limit,//条数
                   projecton:{},//要不要显示
                   sort:{[_sort]:-1}//排序
            }
            ).toArray((err,result)=>{
                if(err){
                    reject({err:1,msg:"查找失败"})
                    close();
                }else{
                    if(result.length==0){
                        resolve({err:0,msg:"没找到数据",data:[]})
                    }else{
                        resolve({err:0,msg:"查找成功",data:result})
                    }
                }
                close();
              
            })
            
          }).catch(
              err=>reject({err:2,err})
          )
      })      
}
let findDetail=({dbName=mogodbName,collectionName,_id})=>{
    return new Promise((resolve,reject)=>{
       
        console.log(collectionName,_id)
        if(!collectionName || !_id){
            
            reject({err:1,msg:"_id和collectionName为必选参数"})
        }
        console.log(collectionName,_id)
        open({dbName,collectionName})
        .then(({collection})=>{
          
            collection.find({_id:ObjectId(_id)}).toArray((err,result)=>{
               if(err){
                   reject({err:1,msg:"查询错误",data:err})
                   close();
               }else{
                   if(result.length>0){
                       resolve(result);
                   }else{
                       resolve({err:1,msg:"没找到数据"})
                   }
                   close();
               }
            
              
            })
          
        })
        .catch(err=>{
            reject({err:1,msg:err})
        })
    })
   
}
let updata=()=>{}
let del=()=>{}

exports.open=open;
exports.close=close;
exports.findList=findList;
exports.findDetail=findDetail;
exports.updata=updata;
exports.del=del;