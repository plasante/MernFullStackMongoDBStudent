const mongoose = require("mongoose");
const {Schema} = require("mongoose");
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
  grade: Number,
  articles: [ArticleSchema]
})

StudentSchema.virtual('articleCount').get(function () {
  return this.articles.length;
})

const Student = mongoose.model('Student', StudentSchema);

module.exports = Student;