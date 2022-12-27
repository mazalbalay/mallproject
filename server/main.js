const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./config");
const router = express.Router()
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const userRouter = require("./ROUTERS/userRoute");
const productRouter = require("./ROUTERS/productRouter");
const orderRouter = require("./ROUTERS/orderRouter");
const departmentRouter = require("./ROUTERS/departmentRouter");
const storeRouter = require("./ROUTERS/storeRouter");
const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: false }));
app.use("/", userRouter);
app.use("/", orderRouter);
app.use("/", productRouter);
app.use("/", departmentRouter);
app.use("/", storeRouter);

///// router for the contact us

app.use("/", router.post("/contact-us", (req,res)=>{
   const{name , email , massege} = req.body

   const mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "techteamproject555.@gmail.com",
      pass: "ndzfjousvysltkjk",
    },
  });
  const details = {
    from: "techteamproject555@gmail.com",
    to: email,
    subject: `${name} has send you a message`,
    html: massege,
  };

  mailTransporter.sendMail(details, (err) => {
    if (err) {
        return res.status(404).json(["Email hs ails try again later" , err]);
    } else {
        return res.status(200).json("Email hs send to you");
    }
  })
}));



app.listen(8000, () => console.log("app listen"));
