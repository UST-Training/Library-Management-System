import React, { Component } from "react";
//import { render } from "react-dom";
import axios from "axios";
//import StudentApp from "../components/app";
//import './home.css'

import {Table} from './Tables/table'
//import StudentDetails from "./studententry";

export default class Booksearch extends Component {
    state = {
        books:[]
      }
    
    componentDidMount() {
        axios.get(`http://localhost:5000/book`)
          .then(res => {
            const books = res.data;
            this.setState({ books });
            console.log("=============>data==========>",books);
          })
      }

   

render() {
    const columns = [
        { accessor: 'book_author', label: 'bookauthor' },
            { accessor: 'book_category', label: 'bookcategory' },
            { accessor: 'book_publisher', label: 'book publisher', },
            { accessor: 'book_title', label: 'booktitle', },
            { accessor: 'stock', label: 'stock' },
           
       ]
        return(
            <div >
                <header >
                    
                </header>
                
                <div >
				
				<div className="ytg">
					<h2 className="gg">Search Book List</h2>
                    {console.log('api Response',this.state.books)}
					<div ><Table rows={this.state.books} columns={columns} /></div>
                    
				</div>
			</div>
            </div>
        )
}    
};