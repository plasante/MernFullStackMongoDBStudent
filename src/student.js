const mongoose = require("mongoose");
const {Schema} = require("mongoose");
const schema = mongoose.Schema;
const ArticleSchema = require("./article_schema");

const StudentSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    validate: {
      validator: function(name) {
        return name.length > 2;
      },
      message: 'Name is too short'
    }
  },
  studentNumber: Number,
  articleCount: Number,
  grade: Number,
  articles: {ArticleSchema}
})

const Student = mongoose.model('Student', StudentSchema);

module.exports = Student;