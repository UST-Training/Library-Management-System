import React, { Component } from 'react';
import axios from "axios";

class CreateBook extends Component {
    constructor(props){
        super();
        this.state = {
            book_author:"",
            book_category:"",
            book_publisher: "",
            book_title:"",
            stock:""
        }
        this.onChangeBook_author = this.onChangeBook_author.bind(this);
        this.onChangeBook_category = this.onChangeBook_category.bind(this);
        this.onChangeBook_publisher = this.onChangeBook_publisher.bind(this);
        this.onChangeBook_title = this.onChangeBook_title.bind(this);
        this.onChangeStock = this.onChangeStock.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChangeBook_author(e) {
        this.setState({ book_author: e.target.value})
    }
    onChangeBook_category(e) {
        this.setState({ book_category: e.target.value})
    }
    onChangeBook_publisher(e) {
        this.setState({ book_publisher: e.target.value})
    }
    onChangeBook_title(e) {
        this.setState({ book_title: e.target.value})
    }
    onChangeStock(e) {
        this.setState({ stock: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault();
        const book = {
            book_author: this.state.book_author,
            book_category: this.state.book_category,
            book_publisher: this.state.book_publisher,
            book_title: this.state.book_title,
            stock: this.state.stock,
           
        }

        console.log(book);

        axios.post('http://localhost:5000/book/add', book)
            .then(res => console.log(res.data));
       
        this.setState({
            book_author: '',
            book_category:'',
            book_publisher:'',
            book_title:'',
            stock:''
        })
    }
    
    render() { 
        return ( 
            <div className="container">
                <h3>Create New Book</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Book author </label>
                        <input
                            type="text" required
                            className="form-control"
                            value={this.state.book_author}
                            onChange={this.onChangeBook_author}
                        />
                         <label>Book Category</label>
                        <input
                            type="text" required
                            className="form-control"
                            value={this.state.book_category}
                            onChange={this.onChangeBook_category}
                        />
                         <label>Book publisher</label>
                        <input
                            type="text" required
                            className="form-control"
                            value={this.state.book_publisher}
                            onChange={this.onChangeBook_publisher}
                        />
                         <label>Book title</label>
                        <input
                            type="text" required
                            className="form-control"
                            value={this.state.book_title}
                            onChange={this.onChangeBook_title}
                        />
                         <label>Stock</label>
                        <input
                            type="number" required
                            className="form-control"
                            value={this.state.stock}
                            onChange={this.onChangeStock}
                        />
                        </div> 
                    <div className="form-group">
                        <input type="submit" value="Add Book" className="btn btn-primary" />
                    </div>
                </form>
            </div>
         );
    }
}
 
export default CreateBook;