const mongoose = require("mongoose");


mongoose.connect(
 "mongodb+srv://mallProject:mallProject123@cluster0.0ktj6dn.mongodb.net/?retryWrites=true&w=majority",
 mongoose.set('strictQuery', true),
  () => {
    console.log("Connected to Database1");
  },
);
