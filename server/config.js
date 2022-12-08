const mongoose = require("mongoose");


mongoose.connect(
 "mongodb+srv://mallProject:mallProject123@cluster0.0ktj6dn.mongodb.net/?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true } , mongoose.set('strictQuery', false)).then(()=>console.log('connected'))
  .catch(e=>console.log(e));
