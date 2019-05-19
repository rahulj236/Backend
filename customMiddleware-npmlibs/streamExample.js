const fs = require('fs');

let readStream = fs.createReadStream('FileToRead.txt');

let writeStream = fs.createWriteStream('FileToWrite.txt');

writeStream.on('finish',()=>{
    console.log("*******************file copied**********************");
})

function pipeExample(){
    readStream.pipe(writeStream);
}

module.exports = {
    pipeExample
}