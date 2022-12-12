const express = require("express");
const router = express.Router();
const Bll = require("../BLLS/storeBLL");

// http://localhost:8000/store

router.get("/store", Bll.getAllStores);
router.get("/store/:id", Bll.getStore);
router.post("/store", Bll.createStore);
router.put("/store/:id", Bll.updatedStore);
router.delete("/store/:id", Bll.deleteStore);

module.exports = router;
