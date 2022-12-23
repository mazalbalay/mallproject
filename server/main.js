require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser")
const cors = require("cors");
const userRouter = require("./ROUTERS/userRoute");
const productRouter = require("./ROUTERS/productRouter");
const orderRouter = require("./ROUTERS/orderRouter");
const storeRouter = require("./ROUTERS/storeRouter");
require("./config");
const app = express();


app.use(cors());
app.use(express.json());

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: false }));

app.use("/", userRouter);
app.use("/", orderRouter);
app.use("/", productRouter);
app.use("/", storeRouter);



app.listen(8000, () => console.log("app listen"));