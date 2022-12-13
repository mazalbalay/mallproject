const mongoose = require("mongoose");

const storeSchema = new mongoose.Schema({
  name:String,
  image:String,
  description:String,
  department:String,
  location:String,
  rating: String,
});

const storModel = mongoose.model("stores", storeSchema);

module.exports = storModel;
