let mgdb=require('./mgdb');
let fs=require('fs');
let path= require('path')
// try {
//   let buffer=  fs.readFileSync('./public/assets/juhe.json');
//    odata=JSON.parse(buffer).result
// } catch (error) {
    
// }
//填充数据库
let fill=({collectionName,file})=>{
    return new Promise((resolve,reject)=>{
   
      console.log(collectionName,file)
       let buffer=  fs.readFileSync(path.resolve('config',file+'.json'));
       let  odata=JSON.parse(buffer).data

        mgdb.open({collectionName})
        .then(({collection})=>{
             // for(let i=0;i<odata.length;i++){
             //     collection.insertOne(odata[i]         
             //       ,(err,result)=>{ resolve(result) })
             //   }
           collection.insertMany(odata,(err,result)=>{
               if(err){
                reject({err:1,msg:"插入错误",data:err})
               }else{
                resolve(result)
                mgdb.close();
               }
           })
               
          
        })
        .catch(err=>reject(err))
    })


   
}


module.exports=fill;