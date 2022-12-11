const express = require("express");
const BLL = require("../BLLS/usersProductBLL");



const router = express.Router();

router.post("/user", BLL.register());

router.put("/user/:id",BLL.updateUser() )

router.delete("/user/:id",BLL.deleteUser())

router.get("/user", BLL.getAllUsers());

module.exports = router;
