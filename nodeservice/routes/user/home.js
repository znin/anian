var express = require('express');
var router = express.Router();
var mgdb=require('../../utils/mgdb');
const { token } = require('morgan');

/* GET users listing. */
router.get('/', function(req, res, next) {
    console.log(req.headers.decode)
    mgdb.open({collectionName:'user'})
    .then(
        ({collection,ObjectId})=> {
            collection.find({
                username: req.headers.decode.username,
                _id: ObjectId(req.headers.decode._id)
            }).toArray((err,result) => {
                if(err){
                    res.send({err:1,msg:"数据库操作失败"})
                    mgdb.close();
                }else{
                    if(result.length>0){
                        delete result[0].username
                        delete result[0].password
                        res.send({err:0,msg:"sucess",data:result[0]});
                    }else{
                        res.send({err:1,msg:"没找到信息"});
                    }
                   

                    mgdb.close();
                }
            })
        }
       
    ).catch(err => res.send(err))

});

module.exports = router;