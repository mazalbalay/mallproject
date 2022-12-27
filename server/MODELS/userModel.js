const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  username: String,
  email: String,
  password: String,
  id: String,
  profileImg: String,
  access: String,
  location: String,
  birthday:String,
  ReservedCreditCards: String,
  saveCards: Array,
});

const UsersModel = mongoose.model("users", userSchema);

module.exports = UsersModel;
