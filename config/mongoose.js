const mongoose = require('mongoose');
require('dotenv').config();

// Get the MongoDB connection string from the environment variable
const uri = process.env.MONGODB_CONNECTION_STRING;
mongoose.connect(uri);
const db = mongoose.connection;

db.on('error',console.error.bind(console,'error in connecting with mongodb'));
//once connected
db.once('open',function(){
    console.log('MongoDb::connected successfully');
})