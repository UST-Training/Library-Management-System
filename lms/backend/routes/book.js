//book.js
const router = require('express').Router();
let Book = require('../models/book.model');
router.route('/').get((req,res) => {
Book.find()
.then(books => res.json(books))
.catch(err => res.status(400).json('Error: ' +err));
});
router.route('/add').post((req,res) => {
const book_author = req.body.book_author;
const book_publisher = req.body.book_publisher;
const book_title = req.body.book_title;
const book_category = req.body.book_category;
const stock = Number(req.body.stock);
const newBook = new Book({book_author, book_category, book_publisher, book_title,stock});
newBook.save()
.then(() => res.json('Book added!'))
.catch(err => res.status(400).json('Error: '+err));
});
router.route('/:id').get((req,res) => {
Book.findById(req.params.id)
.then(book => res.json(book))
.catch(err => res.status(400).json('Error: '+err));
});
router.route('/:id').delete((req,res) => {
Book.findByIdAndDelete(req.params.id)
.then(book => res.json('book deleted'))
.catch(err => res.status(400).json('Error: '+err));
});
router.route('/update/:id').post((req,res) => {
Book.findById(req.params.id)
.then(book => {
book.book_author = req.body.book_author;
book.book_category = req.body.book_category;
book.book_title = req.body.book_title;
book.book_publisher = req.body.book_publisher;
book.stock = Number(req.body.stock);

book.save()
.then(() => res.json('Book updated !'))
.catch(err => res.status(400).json('Error: '+err));
})
.catch(err => res.status(400).json('Error: '+err));
});
module.exports = router;