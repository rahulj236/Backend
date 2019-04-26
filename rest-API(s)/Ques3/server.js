const PORT = 3000;
const http = require('http');
const url = require('url');
const fs = require('fs');


function renderHTML(path,res){
    fs.readFile(path, null, (err,data)=>{
        if(err){
            res.writeHead(400);
            res.write("data not found");
        }
        else{
            res.writeHead(200,{'Content-Type': 'text/html'})
            res.write(data);
        }
        res.end();
    })
}



var server = http.createServer((req,res)=>{
    var Url = req.url;
    let pathObj = url.parse(Url,true);

    switch(pathObj.pathname){
        case '/':
            renderHTML("./public/index.html",res)
            break;
        case '/about':
            renderHTML("./public/about.html",res);
            break;
        case '/contact_us':
            renderHTML("./public/contact_us.html",res);
            break;
        default:
            renderHTML("./public/index.html",res);
    }
});




server.listen(PORT, ()=>{
    console.log(`server started at port: ${PORT}`);    
});