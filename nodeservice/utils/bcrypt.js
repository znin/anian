let bcrypt=require('bcrypt');

module.exports={
    // hashSync:function(password){bcrypt.hashSync(password,5)},
    hashSync: password => bcrypt.hashSync(password, 10),
   // compareSync:(sendpassword,hash)=>bcrypt.compareSync(sendpassword,hash),
    compareSync: (sendPassWord,hash) => bcrypt.compareSync(sendPassWord,hash)
}