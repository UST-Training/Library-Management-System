import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
const Book = props => (
<tr>
<td>{props.book.book_author}</td>
<td>{props.book.book_category}</td>
<td>{props.book.book_title}</td>
<td>{props.book.book_publisher}</td>
<td>{props.book.stock}</td>
<td>
<button className="btn btn-secondary"><Link to={"/edit/"+props.book._id} style={{color:"white"}}>Edit</Link></button> | <button className="btn btn-danger" onClick={() => {props.deleteBook(props.book._id) }}>Delete</button>
</td>
</tr>
)
class BookList extends Component {
constructor(props) {
super(props);
this.state = {
books: []
}
this.deleteBook = this.deleteBook.bind(this);
}
componentDidMount() {
axios.get('http://localhost:5000/book/')
.then(res => {
this.setState({ books: res.data })
})
.catch(error => console.log(error));
}
deleteBook(id) {
axios.delete('http://localhost:5000/book/' +id)
.then(res => console.log(res.data));
this.setState({ books: this.state.books.filter(el => el._id !== id)})
}
List() {
return this.state.books.map(currentbook => {
return <Book book={currentbook} deleteBook={this.deleteBook} key={currentbook._book_title} />
})
}
render() {
return (
<div className="container">
<h3>Book List</h3>
<table className="table">
<thead className="thead-light">
<tr>
<th>Book Author</th>
<th>Book Category</th>
<th>Book Publisher</th>
<th>Book Title</th>
<th>Stock</th>
<th>Actions</th>
</tr>
</thead>
<tbody>
{this.List()}
</tbody>
</table>
</div>
);
}
}
export default BookList;