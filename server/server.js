const express = require("express");

const app = express();

const PORT = 8080;

const cors = require('cors')
require('dotenv').config();
const dbConfig = require('./config/dbConfig');
const userRoute = require('./routes/userRoute');


app.use(cors())
app.use(express.json());
app.use('/api/users',userRoute)

// app.get("/",(req,res)=>{
//     res.send("Hello BMS");
// })

app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`);
})