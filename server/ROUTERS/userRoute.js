const express = require("express");
const Bll = require("../BLLS/usersProductBLL");
const router = express.Router();

//http://localhost:8000/order

router.post("/user", Bll.register());
router.put("/user/:id", Bll.updateUser());
router.delete("/user/:id", Bll.deleteUser());
router.get("/user", Bll.getAllUsers());

module.exports = router;
