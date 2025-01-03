const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const ArticleSchema = new Schema({
  title: {
      type: String,
  },
})

module.exports = ArticleSchema;