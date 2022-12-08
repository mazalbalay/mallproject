const mongoose = require('mongoose')


const userSchema = mongoose.Schema({
   name:String,
   username:String,
   email:String,
   password:String,
   id: String,
   profileImg:String,
   accsess:String,
   location:String
})

const Users = mongoose.model('users' , userSchema)

module.exports = Users