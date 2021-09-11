const express = require('express')
const mongoose = require('mongoose')  
const jwt = require('jsonwebtoken')
const {jwtkey} = require("../keys")
const router = express.Router()
const User = mongoose.model('User') //importing modelUser For Getting Structure

router.post('/signUp' , async(req,res)=>{
    // console.log(req.body);
    const {email , password} = req.body; //Getting Parameter From FrontEnd And Destructuring It...
    try {
        const user = new User({email,password}) //Putting userDetail in model that we have created
        await user.save(); //Mongo Command to Save in Db
        const token = jwt.sign({userId:user._id} , jwtkey) 
        res.send("Data Added To Mongo Successfully" , {token})
    } catch (err) {
        res.status(422).send(err.message)
    }
})

module.exports= router