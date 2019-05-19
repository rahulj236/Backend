const fetch = require('node-fetch');

function getData(){
    return fetch('https://api.github.com/users/rahulj236')
    .then(res=>res.json());
}

module.exports = {
    getData
}