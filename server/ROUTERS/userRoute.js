const express = require("express");
const BLL = require("../BLLS/usersProductBLL");
const passport = require("passport");
const router = express.Router();

router.post("/singup", BLL.singUp());
router.post("/singin", BLL.singIn());
router.get("/user/:id", BLL.getUserById());
router.put("/user/:id", BLL.updateUser());
router.delete("/user/:id", BLL.deleteUser());
router.get("/user", BLL.getAllUsers());

router.get(
  "/auth/google",
  passport.authenticate("google", {
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

router.get("/google", passport.authenticate("google"[("profile", "email")]));

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect(process.env.CLIENT_URL);
});
module.exports = router;
