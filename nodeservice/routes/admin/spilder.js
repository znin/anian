let express=require("express");
let spilder=require("../../utils/spilder")
let router= express.Router();
let i=0
//toplist hotlist newlist sciencelist movielist musiclist
router.post("/:trendtop",(req,res,next)=>{
i++
if (i>10) i=1
//let {url,collectionName} =require("../../config/global")[req.params.trendtop]
console.log("页数",i)
let url=`${require("../../config/global")[req.params.trendtop].url}&page=${i}`
let collectionName=require("../../config/global")[req.params.trendtop].collectionName;
    spilder({url,collectionName})
    .then(result=>{
        res.send({err:"0",msg:`页数${i}`,data:result});
    }
    )
    .catch(result=>res.send({err:1,msg:"spilder",data:result}))







})
module.exports=router