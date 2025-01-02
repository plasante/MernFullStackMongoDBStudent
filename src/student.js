const mongoose = require("mongoose");
const {Schema} = require("mongoose");
const schema = mongoose.Schema;

const StudentSchema = new Schema({
  name: String,
  studentNumber: Number,
})

const Student = mongoose.model('Student', StudentSchema);

module.exports = Student;