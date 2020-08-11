let express=require('express');
let router=express.Router();
let mgdb=require('../../utils/mgdb')
router.get('/:goodsname',(req,res,next)=> {
   
    //有传id，跳转到/:goodsname/:id接口 
    if (req.query._id) {
        res.redirect(`/user/goods/${req.params.goodsname}/${req.params._id}`)
        return;
    }
    
    let collectionName=req.params.goodsname;
    
    let { _page, _limit, _sort, q ,_kw} = req.body;
    console.log(collectionName, _page, _limit, _sort, q ,_kw)
    mgdb.findList({collectionName,_page,_limit,_sort,q,_kw})
    .then( result => res.send(result))
    .catch( err => res.send(err))

})

router.get('/:goodsname/:_id',(req,res,next) => {
    let collectionName=req.params.goodsname;
    let _id = req.params._id;
    console.log(collectionName,_id)
    mgdb.findDetail({collectionName,_id})
    .then( result => res.send(result))
    .catch(err => res.send(err))
})

module.exports=router;