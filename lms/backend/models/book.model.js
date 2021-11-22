//book.model.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bookSchema = new Schema({
book_author: {type: String, required: true},
book_category: {type: String, required: true},
book_publisher: {type: String, required: true},
book_title: {type: String,required: true},
stock: {type: Number,required: true}

}, {
timestamps: true
});
const Book = mongoose.model('Book', bookSchema);
module.exports = Book;