const mongoose = require("mongoose");

mongoose.connect(
 "mongodb+srv://<username>:<password>@cluster0.y7t5czs.mongodb.net/?retryWrites=true&w=majority",
  () => {
    console.log("Connected to Database1");
  },
);
