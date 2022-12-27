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
  saveCards: [
    {
      cardNumber: String,
      cardValidity: String,
      threeDigits: String,
    },
  ],
});

const UsersModel = mongoose.model("users", userSchema);

module.exports = UsersModel;
