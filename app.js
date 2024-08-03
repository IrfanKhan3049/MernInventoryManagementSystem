//Basic Lib Import
const express = require('express');
const router = require('./src/routes/api');
const app = new express();
const bodyParser = require('body-parser');

// Security Middleware Lib Import
const rateLimit=require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize=require('express-mongo-sanitize');
const xss=require('xss-clean');
const hpp=require('hpp');
const cors=require('cors');

//Database Lib Import
const mongoose = require('mongoose');

//Security Middleware Implement
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());

app.use(express.json({limit:'50mb'}));
app.use(express.urlencoded({limit:'50mb'}));

//Body Parser Implement
app.use(bodyParser.json());

//Request Rate Limiter Implement
const limiter = rateLimit({windowMs:15*60*1000,max:3000});
app.use(limiter);

//Route Implement
app.use("/api/v1",router)

//Undefined Route Implement
app.use("*",(req,res)=>{
  res.status(404).json({status:"fail",data:"Not Found"})
})


//Database Connection
mongoose.connect('mongodb+srv://IR-test:test@cluster0.nwgias7.mongodb.net/inventory').then((res) => {
  console.log("Connection Success")
}).catch((err) => {
  console.log("Connection Failed")
})
module.exports=app;