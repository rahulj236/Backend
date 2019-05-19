const express = require('express');
const app = express();
const PORT = 3000;
const middlewareAuth = require('./middleware/customAuth');
const userRoute = require('./routes/userRoute');
const bodyparser = require('body-parser');
const printBuffer = require('./bufferExample');
const pipeExample = require('./streamExample');
const childProcess = require('./childPocess');

app.use(bodyparser.json());
app.use(middlewareAuth.customAuth);
app.use('/',userRoute);

app.listen(PORT,()=>{
    console.log(`server running at PORT: ${PORT}`);
});


//Buffer Example
printBuffer.printBuffer();

//streamExample
pipeExample.pipeExample();

//childProcess
childProcess


