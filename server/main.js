require("dotenv").config();
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const cookieSession = require("cookie-session");
const orderRouter = require("./ROUTERS/orderRouter");
const userRouter = require("./ROUTERS/userRoute");
const passportSetup = require('./passport')
require("./config");
const app = express();
app.use(
  cookieSession({
    name: "session",
    keys: ["cyberwolve"],
    maxAge: 24 * 60 * 60 * 100,
  })
);
app.use(passport.initialize())
app.use(passport.session())

app.use(cors());
app.use(express.json());
app.use("/", userRouter);
app.listen(8000, () => console.log("app listen"));
