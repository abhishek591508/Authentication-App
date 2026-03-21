const express = require('express')
const app = express();

const PORT = process.env.PORT || 3000

app.use(express.json());

// const router = require('routes/')
const router = require('./routes/user')
app.use("/api/v1", router);


app.get("/", (req,res)=>{
    res.send("Hello Abhishek");
})

const DB_Connect = require('./config/database');
DB_Connect();

app.listen(PORT, ()=>{
    console.log(`App is live on port ${PORT}`);
})