const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
   name:{type:String , require:true},
   username: String ,
   email:{type: String , required: true},
   password:{type: String , required: true},
   id: String,
   profileImg:String,
   accsess:String,
   location:String
})

const UsersModel = mongoose.model('users' , userSchema)

module.exports = UsersModel