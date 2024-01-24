const express = require("express");

const app = express();

const PORT = 8080;

require('dotenv').config();
const dbConfig = require('./config/dbConfig');
const userRoute = require('./routes/userRoute');

app.use(express.json());
app.use('/',userRoute)

// app.get("/",(req,res)=>{
//     res.send("Hello BMS");
// })

app.listen(PORT,()=>{
    console.log("Server is running");
})