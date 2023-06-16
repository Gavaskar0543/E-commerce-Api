const express = require('express');
require('dotenv').config();
const port = 8000;
const app = express();
app.use(express.urlencoded());

const db = require('./config/mongoose');
app.use('/',require('./router'));
app.listen(port,function(err){
    if(err){
        console.log('error in starting server',err);
        return;
    }
    console.log(`server running on port:${port}`);
})