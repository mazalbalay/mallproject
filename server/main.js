const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./config");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const userRouter = require("./ROUTERS/userRoute");
const productRouter = require("./ROUTERS/productRouter");
const orderRouter = require("./ROUTERS/orderRouter");
const departmentRouter = require("./ROUTERS/departmentRouter");
const storeRouter = require("./ROUTERS/storeRouter");
const app = express();
// const mailTransporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "techteamproject555@gmail.com",
//     pass: "ozuahinyhwwwvxhi",
//   },
// });
// const details = {
//   from: "techteamproject555@gmail.com",
//   to: "mazalbalay3@gmail.com",
//   subject: "Subject of your email",
//   html: "<p>Your html here</p>",
// };
// mailTransporter.sendMail(details, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("email hs send");
//   }
// });
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: false }));
app.use("/", userRouter);
app.use("/", orderRouter);
app.use("/", productRouter);
app.use("/", departmentRouter);
app.use("/", storeRouter);
app.listen(8000, () => console.log("app listen"));