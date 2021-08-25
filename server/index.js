const express = require('express');
const app= express();
const mongoose= require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const authRoute = require('./routes/auth');
const userRoute=require('./routes/users');
const movieRoute= require('./routes/movies')
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{console.log("DB Connected")}).catch((error)=>{console.log(error)})
app.use(express.json());//we guide the express that can be accept json files 
app.use("/api/auth",authRoute) // initial gateway for acces the values of data base and anothers 
app.use("/api/users",userRoute) // initial gateway for acces the values of data base and anothers 
app.use("/api/movies",movieRoute) // initial gateway for acces the values of data base and anothers 

app.listen(8800,()=>{
    console.log("Backend Server IS Running")
})