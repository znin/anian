
let jwt=require('../../utils/jwt')
module.exports= (req,res,next)=>{
  //address
  req.query._page = req.query._page ? req.query._page-0 : require('../../config/global')._page-0;
  req.query._limit = req.query._limit ? req.query._limit-0 : require('../../config/global')._limit-0;
  req.query.q = req.query.q ? req.query.q+'' : require('../../config/global').q+'';
  req.query._sort = req.query._sort ? req.query._sort+'' : require('../../config/global')._sort+'';
  req.query._keyword = req.query._ketword ? req.query._keyword+'' : require('../../config/global')._keyword+'';

  //body
  req.body._page = req.body._page ? req.body._page-0 : require('../../config/global')._page-0;
  req.body._limit = req.body._limit ? req.body._limit-0 : require('../../config/global')._limit-0;
  req.body.q = req.body.q ? req.body.q+'' : require('../../config/global').q+'';
  req.body._sort = req.body._sort ? req.body._sort+'' : require('../../config/global')._sort+'';
  req.body._keyword = req.body._ketword ? req.body._keyword+'' : require('../../config/global')._keyword+'';
 // headers
  req.headers._page = req.headers._page ? req.headers._page-0 : require('../../config/global')._page-0;
  req.headers._limit = req.headers._limit ? req.headers._limit-0 : require('../../config/global')._limit-0;
  req.headers.q = req.headers.q ? req.headers.q+'' : require('../../config/global').q+'';
  req.headers._sort = req.headers._sort ? req.headers._sort+'' : require('../../config/global')._sort+'';
  req.headers._keyword = req.headers._ketword ? req.headers._keyword+'' : require('../../config/global')._keyword+'';
console.log("all")
console.log(req.url);
  if(/login|logout|register/.test(req.url)){
    next();
  }else{
    let token=req.headers.token||req.body.token||req.query.token;
    
    jwt.verify(token)
    .then(({decode})=>{
      req.headers.decode=decode;
      next();
    })
    .catch(err=>res.send(err))
  }

  
} 