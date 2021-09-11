const express = require("express")  //For Running Server 
const bodyParser = require('body-parser') // For conversion of JSON coming from Front To backend
const mongoose = require('mongoose') //importing Mongoose
const app = express()
const {mongoUrl} = require('./keys') //Loading Mongo URL we got from Cluster
require("./models/User") //importion USer 
const authRoutes = require('./routes/authRoutes') //importing routes *This should be done after User Bcoz we are using UserModel in authRoutes*
app.use(bodyParser.json()) // Creating MiddleWare
app.use(authRoutes) //middleWare for Routes
mongoose.connect(mongoUrl)

mongoose.connection.on('connected' , ()=>{
    console.log(" MongoDb Connected SuccesFully ");
})

mongoose.connection.on('error' , (err)=>{
    console.log(" SomeThing Went Wrong  " , err);
})

app.listen(800, ()=>{
    console.log("Running.......");
})