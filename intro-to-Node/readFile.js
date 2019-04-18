const fs = require('fs');

const syncContent = ()=>{
    return fs.readFileSync('./users.json','utf8');
} 

const asyncContent = (callback)=>{
    fs.readFile('./users.json','utf8',callback)
}

module.exports = {
    syncContent,
    asyncContent
}