const express = require("express");
const router = express.Router();
const Bll = require("../BLLS/departmentBLL");

// http://localhost:8000/department

router.get("/department", Bll.getAllDepartments);
router.get("/department/:id", Bll.getDepartment);
router.post("/department", Bll.createDepartment);
router.post("/department", Bll.createDepartment);
router.put("/department/:id", Bll.updatedDepartment);
router.delete("/department/:id", Bll.deleteDepartment);

module.exports = router;