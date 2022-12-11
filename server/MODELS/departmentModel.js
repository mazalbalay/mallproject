const mongoose = require('mongoose')

const DepartmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  Description: {
    type: String,
    required: true
  },

})

const DepartmentModel = mongoose.model('departments', DepartmentSchema)

module.exports = DepartmentModel