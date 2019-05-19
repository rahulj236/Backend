const express = require('express');
const router = express.Router();
const request = require('../httpRequest');

router.post('/login',(req,res)=>{
    var isAuth = req.body.isAuthenticated;
    if(isAuth){
        res.send("user authenticated");
    }
    else{
        res.send("not authenticated");
    }
});

router.get('/users',(req,res)=>{
    request.getData().then(result=>{
        res.send(result);
    });
});

module.exports = router;