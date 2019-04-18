const http = require('http');
const file = require("./readFile");
const hostname = '127.0.0.8';

const server = http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type': 'text/json  '});
    res.write("Server started...");

    fileInputOutput(res);
});

server.listen(process.env.PORT || 3000, hostname, () => {
    console.log(`server is running at hostname ${hostname}`);

})

const fileInputOutput = (res)=>{
    // res.write('Async read file starts <br>');
    // file.asyncContent((err, data) => {
    //     err ? res.write(err) : res.write(data);
    //     res.end();
    // });

    res.write('Sync read file start...');
    res.write(file.syncContent());
    res.end("file read end");
}

