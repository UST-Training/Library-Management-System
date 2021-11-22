import React, { Component } from 'react';
import axios from "axios";
//import "react-datepicker/dist/react-datepicker.css";

class EditBook extends Component {

    constructor(props){
        super();
        this.state = {
            book_author: "",
            book_category: "",
            book_publisher:"",
            book_title: "" ,
            stock:"",
            books: []
        }
        this.onChangeBook_author = this.onChangeBook_author.bind(this);
        this.onChangeBook_category = this.onChangeBook_category.bind(this);
        this.onChangeBook_publisher = this.onChangeBook_publisher.bind(this);
        this.onChangeBook_title = this.onChangeBook_title.bind(this);
        this.onChangeStock = this.onChangeStock.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:5000/book/'+this.props.match.params.id)
            .then(res => {
                this.setState({
                    book_author: res.data.book_author,
                    book_category: res.data.book_category,
                    book_publisher: res.data.book_publisher,
                   book_title: res.data.book_title,
                   stock: res.data.stock,
                })
            })
            .catch(function (error){
                console.log(error);
            })

        axios.get('http://localhost:5000/update/:id')
            .then(response => {
                if(response.data.length > 0) {
                    this.setState({ 
                        books: response.data.map(book => book.book_title)
                    });
                }
            })
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
        this.setState({book_title: e.target.value })
    }
    onChangeStock(e) {
        this.setState({stock: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault();
        const book = {
            book_author: this.state.book_author,
           book_category: this.state.book_category,
           book_publisher: this.state.book_publisher,
           book_title: this.state.book_title,
           stock: this.state.stock
        }

        console.log(book);

        axios.post('http://localhost:5000/book/update/'+this.props.match.params.id, book)
            .then(res => console.log(res.data));

        window.location = "/booklist";
    }
    
    render() { 
        return ( 
            <div className="container">
                <h3>Edit Book</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Book Author </label>
                        <input
                            type="text" required
                            className="form-control"
                            value={this.state.book_author}
                            onChange={this.onChangeBook_author}
                        /> 
                    </div>
                    <div className="form-group">
                        <label>Book Category </label>
                        <input
                            type="text" required
                            className="form-control"
                            value={this.state.book_category}
                            onChange={this.onChangeBook_category}
                        />
                    </div>
                    <div className="form-group">
                        <label>Book Publisher </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.book_publisher}
                            onChange={this.onChangeBook_publisher}
                        />
                    </div>
        
                    
                    <div className="form-group">
                        <label>Book Title</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.book_title}
                            onChange={this.onChangeBook_title}
                        />
                    </div>
                    <div className="form-group">
                    <div className="form-group">
                        <label>Stock</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.stock}
                            onChange={this.onChangeStock}
                        />
                    </div>
                        <input type="submit" value="Edit User Log" className="btn btn-primary" />
                    </div>
                </form>
            </div>
         );
    }
}
 
export default EditBook;