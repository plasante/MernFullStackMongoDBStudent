const mongoose = require("mongoose");
const {Schema} = require("mongoose");
const schema = mongoose.Schema;

const StudentSchema = new Schema({
  name: String,
  studentNumber: Number,
  articleCount: Number,
  grade: Number
})

const Student = mongoose.model('Student', StudentSchema);

module.exports = Student;