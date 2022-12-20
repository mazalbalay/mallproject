require("dotenv").config();
const express = require("express");
const userRouter = require("./ROUTERS/userRoute");
const productRouter = require("./ROUTERS/productRouter");
const orderRouter = require("./ROUTERS/orderRouter");
const nodemailer = require("nodemailer");
const cors = require("cors");

// const sendEmail = () => {
//   return new Promise((resolve, reject) => {
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: "",
//         pass: "",
//       },
//     });
//     const mailOptions = {
//         from: '', // sender address
//         to: '', // list of receivers
//         subject: 'Subject of your email', // Subject line
//         html: '<p>Your html here</p>'// plain text body
//       };

//       transporter.sendMail(mailOptions, function (err, info) {
//         if(err)
//           console.log(err)
//         else
//           console.log(info);
//      });
//   });
// };

require("./config");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/", userRouter);
app.use("/", orderRouter);
app.use("/", productRouter);

// app.get("/",(req,res)=>{
//     sendEmail()
//     .then(response=>res.send(response.message))
//     .catch(err=>res.status(500).send(err.message))
// })

app.listen(8000, () => console.log("app listen"));