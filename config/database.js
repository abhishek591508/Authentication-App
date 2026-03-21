const mongoose = require('mongoose')
require('dotenv').config();

const DB_Connect = async ()=>{
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{console.log("Successfully connected to Database")})
    .catch((error)=>{
        console.log("Error in connecting with database");
        console.error(error.message);
        process.exit(1);
    })
}

module.exports = DB_Connect;