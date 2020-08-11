let express=require('express');
let router=express.Router();
let mgdb=require('../../utils/mgdb');
let bcrypt = require('../../utils/bcrypt');

let jwt=require('../../utils/jwt')
router.post('/',(req,res,next)=>{
    console.log("login")
    res.setHeader('Access-Control-Allow-Origin', '*')
    let {username,password}=req.body;
    if(!username || !password){
        res.send({err:1,msg:"用户名密码缺失"})
        return;
    }

    mgdb.open({collectionName:'user'})
    .then(({collection})=>{
        collection.find({username}).toArray((err,result)=>{
            if(err){
                res.send({err:1,msg:"查找操作失败"})
                mgdb.close();
            }else if(result.length===0){
                res.send({err:1,msg:"用户名不存在"})
                mgdb.close();
            }else{
                console.log(result)
                let bool=bcrypt.compareSync(password,result[0].password)
                if(bool){
                    res.send({err:1,msg:"密码错误"})
                    
                }else{
                  let token= jwt.sign({username,_id:result[0]._id}) 
                  res.send({err:0,msg:"登录成功",tk:token})
                }
                mgdb.close();
            }
            
        })
    })
    .catch(err=>res.send(err))


})

module.exports=router;