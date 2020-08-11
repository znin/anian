let express=require('express');
let router=express.Router();
let mgdb=require('../../utils/mgdb');
let jwt=require('../../utils/jwt');
let bcrypt=require('../../utils/bcrypt');
//let x=require('../../config/global')
let randomName=require('chinese-random-name');
let fs =require('fs');
let pathLib=require('path');
const { path } = require('../../app');

router.post('/typing',(req,res,next)=>{
    let {username}=req.body;
    mgdb.open({collectionName:'user'})
    .then(({collection})=>{
       
        collection.find({username}).toArray((err,result)=>{
            if(err) res.send({err:1,msg:"数据库操作失败"})
            else if(result.length>0){
                res.send({err:1,msg:"名称重复"});
                mgdb.close();
            } 
            else{
                res.send({err:0,msg:"名称可用"})
                mgdb.close();
            } 
        })
    })
    .catch((err)=>res.send(err))

})
router.post('/submit',(req,res,next)=>{
	
 	res.setHeader('Access-Control-Allow-Origin', '*')
    let {username,password,nikename} = req.body;//
    console.log(req.body)
    console.log("submit");
    if(!username || !password){
        res.send({err:1,msg:'用户名密码缺失'});
        return;
      }
   
    
    nikename=nikename? nikename:randomName.generate();
    let follow = Math.floor(Math.random()*300);
    let fans = Math.floor(Math.random()*300);
    let wb = 0;
    let date = Date.now();//注册时间服务器生成
    let icon = require('../../config/global').normal;
    if(req.files&&req.files.length>0){
        //文件改名
        fs.renameSync(req.files[0].path,req.files[0].path+pathLib.parse(req.files[0].originalname).ext)
        icon = `${require('../../config/global').user.uploadUrl}${req.files[0].filename + pathLib.parse(req.files[0].originalname).ext}`
    }
    mgdb.open({collectionName:'user'})
    .then(({collection})=>{
        collection.find({username}).toArray((err,result)=>{
            if(err) {
                res.send({err:1,msg:"数据库操作失败"})
                mgdb.close();
            }
            else if(result.length>0){
                res.send({err:1,msg:"名称重复"});
                if(!icon.includes('default.jpg')){
                    fs.unlinkSync('./public' + icon)
                  }
                mgdb.close();
            } else{
              
                password=bcrypt.hashSync(password)
                console.log(password);
                collection.insertOne({username,password,nikename,fans,follow,wb,date,icon},(err,result)=>{
                    if(!err){
                        delete result.ops[0].username;
                        delete result.ops[0].password;
                        res.send({err:0,msg:"注册成功",data:result.ops[0]})
                    }else{
                        res.send({err:1,msg:"插入失败"})
                    }
                    mgdb.close();
                })
            }
            
        })
        
    })
    .catch(err=>res.send(err))
})

module.exports=router;