const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  regNo: {
    type: String,
    default: 0,
  },
  batch: {
    type: Number,
    default: 0,
  },
  module: {
    type: String,
    required: true,
  },
});

const Student = mongoose.model("Student", StudentSchema);

module.exports = Student;