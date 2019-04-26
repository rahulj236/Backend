const http = require('http');
const PORT = 3000;
const url = require('url');
const users = require('./userDetails');
const students = require('./studentDetails');

const server = http.createServer(handleRequestResponse);

server.listen(PORT, () => {
    console.log(`server is running at PORT:${PORT}`);
})

function handleRequestResponse(req, res) {
    let pathObj = url.parse(req.url, true)
    switch (pathObj.pathname) {
        case '/users':
            autocomplete(pathObj, res)
            break;
        case '/students':
            filterStudent(pathObj,res)
    }
}

function autocomplete(pathObj, res) {
    let userQuery = pathObj.query;
    res.setHeader("access-control-allow-origin","*");
    res.setHeader("access-control-allow-method","*");
    
    if (userQuery.username.length > 3) {
        var filteredList = users.list.filter((user) => {
            return user.username.startsWith(userQuery.username)
        })
        res.end(JSON.stringify(filteredList));
    } 
    else {
        res.end(JSON.stringify([]))
    }
}

function filterStudent(pathObj, res){
    // let studentQuery = pathObj.query;
    res.setHeader("access-control-allow-origin","*");
    res.setHeader("access-control-allow-method","*");
    if(pathObj.query.branch !== ''){
        var studentData = students.studentList.filter((student) => {
            return student.branchName === pathObj.query.branch
        });
    } else {
        var studentData = students.studentList;
    }
        

    studentData = JSON.stringify(studentData);
    res.end(studentData);
}