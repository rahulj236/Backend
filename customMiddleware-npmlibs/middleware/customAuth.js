const credentials = require('../credentials');

const customAuth = (req,res,next)=>{
    var url =  req.body;
    if(url.username === credentials.credentials.username && url.password === credentials.credentials.password){
        req.body.isAuthenticated=true;
        next();
    }
    else{
        req.body.isAuthenticated=false;
        next();  
    }
}
module.exports = {
    customAuth
}