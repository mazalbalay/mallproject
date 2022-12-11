const Department = require("../MODELS/departmentModel");

const getAllDepartments = async (req, res) => {
  try {
    const departments = await Department.find();
    return res.status(200).json(departments);
  } catch (e) {
    return res.status(400).json(e);
  }
};

const getDepartment = async (req, res) => {
  try {
    const { id } = req.params;
    const department = await Department.findById(id);
    return res.status(200).json(department);
  } catch (e) {
    return res.status(400).json(e);
  }
};

const createDepartment = async (req, res) => {
  const obj = req.body;
  try {
    const department = await Department.create(obj);
    return res.status(200).json(department);
  } catch (e) {
    return res.status(400).json(e);
  }
};

const updatedDepartment = async (req, res) => {
  try {
    const { id } = req.params;
    const obj = req.body;
    const department = await Department.findByIdAndUpdate(id, obj);
    return res.status(200).json(department);
  } catch (e) {
    return res.status(400).json(e);
  }
};

const deleteDepartment = async (req, res) => {
  try {
    const { id } = req.params;
    const department = await Department.findByIdAndRemove(id);

    return res.status(200).json(department);
  } catch (e) {
    return res.status(400).json(e);
  }
};

module.exports = {
  getAllDepartments,
  getDepartment,
  updatedDepartment,
  deleteDepartment,
  createDepartment,
};