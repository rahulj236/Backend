const express = require("express");
const router = express.Router();
const users = require('../userDetails');
const url = require('url');

router.get('/',(req,res)=>{
    // res.set("Access-Control-Allow-Origin","*");
    // res.set("Access-Control-Request-Headers","*");
    // res.set("Access-Control-Allow-Method","*","OPTIONS"); 
    var usersList =  users.list
    res.send(JSON.stringify(usersList));
});

router.delete('/deleteUser',(req,res)=>{
    // res.set("Access-Control-Allow-Origin","*");
    // res.set("Access-Control-Request-Headers","*");
    // res.set("Access-Control-Allow-Method","*","OPTIONS");   
    var pathobj = url.parse(req.url,true);
    var id = pathobj.query.id
    console.log("Id: ",id);

    var newUsers = users.list.filter((item)=>{
        return String(item.id) !== id
    })
    users.list = newUsers;
    res.send(JSON.stringify(users.list));
});

router.post('/addUser',(req,res)=>{
    var data = req.body;
    console.log("pathobj...",data);
    users.list.push(data);
    res.send(data);
});

router.get('/about',(req,res)=>{
    res.send("Created by RAHUL JAIN");
});

module.exports = router;
