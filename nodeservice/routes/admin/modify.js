let express=require('express');
let router=express.Router();
let mgdb=require('../../utils/mgdb');
const { ObjectID } = require('mongodb');
router.post('/:goodsname',(req,res,next)=> {
   
    //有传id，跳转到/:goodsname/:id接口 
    if (req.query._id) {
        res.redirect(`/user/modify/${req.params.goodsname}/${req.params._id}`)
        return;
    }
    
    res.send({err:1,msg:"请输入Id"})
    

})

router.post('/:goodsname/:_id',(req,res,next) => {


    let collectionName=req.params.goodsname;
    let _id = req.params._id;
    console.log(collectionName,_id)
    mgdb.open({collectionName})
    .then(({collection}) => {
        collection.find({_id:ObjectID(_id)}).toArray((err,result)=>{
           if(err){
            res.send({err:1,msg:"没找到数据",data:err})
               console.log(err)
               mgdb.close()
           }else{
               console.log(result[0])
            collection.updateOne({_id:ObjectID(_id)},{$set:{"isadd":!result[0].isadd}},(err,reply)=>{
                if(err) {
                    console.log(err)
                    res.send({err:1,msg:"更新失败",data:err})
                    mgdb.close()
                }else{
                    res.send({err:0,msg:"操作成功",data:reply})
                    mgdb.close()
                }
            })
            
           }
           
        })

        // collection.updateOne({_id:ObjectID(_id)},{$set:{"isadd":$not:{}}  },(err,result)=>{
        //     if(err){
        //         console.log(err)
        //         res.send({err:1,msg:"更新数据失败",data:err}) 
        //     }
        //     res.send({err:0,msg:"更新成功",data:result.result.n})
        //     mgdb.close()
        // })
    })
    .catch(result =>{
        res.send({err:1,msg:"数据库操作失败",data:result})
        console.log(result)
    } )
})
module.exports=router;