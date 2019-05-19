const childprocess = require('child_process').exec;


ch_process = childprocess('ls',(err,stdout,stderr)=>{
    if(err){
        console.log("Error is ",err);
        return
    }
        console.log("\n printing list of files: ",stdout);
});

module.exports = {
    ch_process
}

