let express=require('express');
let router=express.Router();
//session注销
router.get('/',(req,res,next)=>{
    //res.session['xyyg']=undefined;
    res.send({err:0,msg:"注销成功"})
})

module.exports=router;