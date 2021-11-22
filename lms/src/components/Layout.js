import React, { Component } from "react";
import { Link } from "react-router-dom";
class Instruction extends Component { 
render() {
return (
<nav className="navbar navbar-dark bg-dark navbar-expand-lg">
<Link to="/" className="navbar-brand">LMS</Link>
<div className="collapse navbar-collapse">
<ul className="navbar-nav">
<li className="navbar-item">
<Link to="/login" className="nav-link">User</Link>
</li>
<li className="navbar-item">
<Link to="/user" className="nav-link"></Link>
</li>
<li className="navbar-item">
<Link to="/" className="nav-link">Users List</Link>
</li>
<li className="navbar-item">
<Link to="/book" className="nav-link">Add Book</Link>
</li>
<li className="navbar-item">
<Link to="/booklist" className="nav-link">Book List</Link>
</li>
<li className="navbar-item">
<Link to="/edit" className="nav-link">Edit Book</Link>
</li>
<li className="navbar-item">
<Link to="/booklist" className="nav-link">Search Book</Link>
</li>
</ul>
</div>
</nav>
);
}
}
export default Instruction;
