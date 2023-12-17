const mongoose= require('mongoose')
const User= new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    password:{type:String},
    phone:{type:String},
})
module.exports= mongoose.model('User',User)