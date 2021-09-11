const mongoose = require('mongoose')
// Defining The Fields That Will Store UserNAme & PassWord We Can Create more if we Want ....
const userSchema = new mongoose.Schema({
    email :{
        type:String,
        unique :true,
        required :true
    },
    password :{
        type:String,
        unique :false,
        required :true
    }
})

mongoose.model('User', userSchema) //We Can Use module.export also but when we use require() where we want it will give Error