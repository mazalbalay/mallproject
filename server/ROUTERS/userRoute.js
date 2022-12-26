const express = require("express");
const BLL = require("../BLLS/usersProductBLL");
const router = express.Router();
// http://localhost:8000/singup

router.post("/singup", BLL.singUp());
router.post("/singin", BLL.singIn());
router.post("/forgot-password", BLL.forgotPassword());
router.get("/user/:id", BLL.getUserById());
router.put("/user/:id", BLL.updateUser());
router.delete("/user/:id", BLL.deleteUser());
router.get("/user", BLL.getAllUsers());

router.post("/facebooklogin", BLL.facebooklogin());
router.post("/googlelogin", BLL.googlelogin());

module.exports = router;
