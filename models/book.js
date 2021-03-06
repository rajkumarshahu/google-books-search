const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const BookSchema = new Schema({
  title: String,
  authors: Array,
  date: String,
  description: String,
  src: String,
  link: String
});


const Book = mongoose.model("Book", BookSchema);

module.exports = Book;
