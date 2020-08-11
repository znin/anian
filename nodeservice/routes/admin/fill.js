let express=require('express');

let fill=require('../../utils/filldatabase')

let router=express.Router();
router.get('/:file',(req,res,next)=>{

    fill({collectionName:req.params.file,file:req.params.file}).then(
        (result)=>{console.log(result)
        res.send({err:0,msg:"success",data:result})
        }

    ).catch(
        (err)=>console.log(err)
    )
})
module.exports=router;