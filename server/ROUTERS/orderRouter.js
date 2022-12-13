const express = require("express");
const router = express.Router();
const Bll = require("../BLLS/orderBll");

// http://localhost:8000/order

router.get("/order", Bll.getAllOrder);
router.get("/order/:id", Bll.getOrder);
router.post("/order", Bll.createOrder);
router.put("/order/:id", Bll.updatedorder);
router.delete("/order/:id", Bll.deleteOrder);

module.exports = router;
