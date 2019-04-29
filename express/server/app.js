const express = require('express');
const app = express();
const PORT = 3000; 
const cors = require('cors');
const userRoute = require("./routes/userRoute");
const createdOn = require('./middleware/time')



const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use('/',cors());
app.use(createdOn.AddCreatedOn);
app.use('/',userRoute);

app.listen(PORT,()=>{
    console.log("server running at Port:",PORT);
});