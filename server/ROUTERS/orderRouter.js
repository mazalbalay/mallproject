const express = require("express");
const bll = require("../BLLS/orderBll");
const router = express.Router();

// http://localhost:8000/order

router.route("/order").get(async function (req, resp) {
  const data = await bll.getAllorder();
  return resp.json(data);
});

router.route("/order/:id").get(async function (req, resp) {
  let id = req.params.id;
  let user = await bll.getorderById(id);
  return resp.json(user);
});

router.route("/order").post(async function (req, resp) {
  let obj = req.body;
  let status = await bll.createorder(obj);
  return resp.json(status);
});

router.route("/order/:id").put(async function (req, resp) {
  let obj = req.body;
  let id = req.params.id;

  let status = await bll.updateorder(id, obj);
  return resp.json(status);
});

router.route("/order/:id").delete(async function (req, resp) {
  let id = req.params.id;

  let status = await bll.deleteorder(id);
  return resp.json(status);
});

module.exports = router;
