let jwt=require('jsonwebtoken');
let rule='xyyg'

module.exports={
    sign:({username,_id})=>{
        return jwt.sign(
            {username,_id},
            rule,
            { expiresIn: 60*60*24*7 //秒
            }
          )
    },
    verify:(token)=>new Promise((reslove,reject)=>{
        jwt.verify(token,rule,(err,decode)=>{
                if(err){
                    reject({err:10,msg:"验证失败，token失效"})
                }else{
                    reslove({decode})
                }
        })
    })
}