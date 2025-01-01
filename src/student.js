const mongoose = require("mongoose");
const {Schema} = require("mongoose");
const schema = mongoose.Schema;

const StudentSchema = new Schema({
  name: String
})

const Student = mongoose.model('Student', StudentSchema);

module.exports = Student;