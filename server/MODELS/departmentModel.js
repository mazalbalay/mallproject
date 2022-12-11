const mongoose = require('mongoose')

const DepartmentSchema = new mongoose.Schema({
  name:String,
  image: String,
  Description:String,
})

const DepartmentModel = mongoose.model('departments', DepartmentSchema)

module.exports = DepartmentModel