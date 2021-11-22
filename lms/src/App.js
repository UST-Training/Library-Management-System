import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
//import CreateExercise from "./components/CreateExercise";
import CreateUser from "./components/CreateUser";
import UserList from './components/ExercisesList';
import CreateBook from './components/Addbook';
import BookList from './components/Booklist';
import EditBook from './components/Editbook';
import Login from './components/Login';
import SearchBook from './Searchbook';

function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <br />
      <Route path="/login" component={Login} />
      <Route path="/user" component={CreateUser} />
      <Route exact path="/" component={UserList} />
      <Route path="/book" component={CreateBook} />
      <Route path="/booklist" component={BookList} />
      <Route path="/edit" component={EditBook} />
      <Route path="/booklist" component={SearchBook} />
    </BrowserRouter>
  );
}
  
export default App;
