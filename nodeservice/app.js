var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var multer=require('multer');
var bodyParser=require('body-parser')


//node端允许跨域请求
var cors = require('cors');




var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if(req.url.includes('admin')){
      cb(null, path.join(__dirname,'public','upload','admin'))
    }else if(req.url.includes('user')){
      cb(null, path.join(__dirname,'public','upload','user'))
    }else{
      cb(null, path.join(__dirname,'public','upload','product'))
    }
    
    
  }
  
})
 
var objmulter = multer({ storage: storage })

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(objmulter.any());



app.use(cors({
  //允许所有前端域名
  //"origin": ["http://localhost:1122","http://localhost:5000","http://localhost:8080"],  
  "credentials":true,//允许携带凭证
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE", //被允许的提交方式
 // "allowedHeaders":['Content-Type','Authorization']//被允许的post方式的请求头
}));
// app.use(bodyParser.urlencoded({
//   limit: 100
// }));
app.use(express.static(path.join(__dirname, 'public')));




//静态资源托管   接口的权重比资源托管 高
app.use(express.static(path.join(__dirname, 'public','template')));
app.use(express.static(path.join(__dirname, 'public','admin')));
app.use(express.static(path.join(__dirname, 'public')));





app.use('/admin/fill',  require('./routes/admin/fill'));
app.use('/admin/spilder',  require('./routes/admin/spilder'));
//app.use('/admin/login',  require('./routes/user/login'));

app.all('/user/*', require('./routes/user/params'));
app.use('/user/login',require('./routes/user/login'));
app.use('/user/logout',require('./routes/user/logout'));
app.use('/user/register',require('./routes/user/register'));
app.use('/user/home',require('./routes/user/home'));
app.use('/user/goods',require('./routes/user/goods'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  //render the error page
  res.status(err.status || 500);
  if(req.url.includes('/user')){//你再访问一个不存在的api/不存在
    res.send({err:1,msg:'不存在的接口'})
  }else if(req.url.includes('/admin')){
    res.render('error');
  }else{ //解决 vue项目部署后的问题
 
  }
  
});

module.exports = app;
