require("dotenv").config();
const express = require("express");

// const userRouter = require("./ROUTERS/userRouter");
const productRouter = require("./ROUTERS/productRouter");
const orderRouter = require("./ROUTERS/orderRouter");
const departmentRouter = require("./ROUTERS/departmentRouter");
// const passportSetup = require("./passport");
const cors = require("cors");
// const passport = require("passport");
// const cookieSession = require("cookie-session");
const bodyParser = require('body-parser');

require("./config");
const app = express();
// app.use(
//   cookieSession({
//     name: "session",
//     keys: ["cyberwolve"],
//     maxAge: 24 * 60 * 60 * 100,
//   })
// );
// app.use(passport.initialize());
// app.use(passport.session());

app.use(cors())
app.use(express.json())

app.use(bodyParser.json({ limit: "50mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));



// app.use('/' , userRouter)
app.use('/' , orderRouter)
app.use('/' , productRouter)
app.use('/' , departmentRouter)

app.listen(8000, ()=>console.log("app listen"))

