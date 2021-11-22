import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
const User = props => (
<tr>
<td>{props.user.userid}</td>   
<td>{props.user.username}</td>
<td>{props.user.useremail}</td>
<td>{props.user.userpassword}</td>
<td>{props.user.usertype}</td>
<td>{props.user.userstatus}</td>
<td>
<button className="btn btn-secondary"><Link to={"/edit/"+props.user._id} style={{color:"white"}}>Edit</Link></button> | <button className="btn btn-danger" onClick={() => {props.deleteUser(props.user._id) }}>Delete</button>
</td>
</tr>
)
class UserList extends Component {
constructor(props) {
super(props);
this.state = {
users: []
}
this.deleteUser = this.deleteUser.bind(this);
}
componentDidMount() {
axios.get('http://localhost:5000/users/')
.then(res => {
this.setState({ users: res.data })
})
.catch(error => console.log(error));
}
deleteUser(userid) {
axios.delete('http://localhost:5000/users/' +userid)
.then(res => console.log(res.data));
this.setState({ users: this.state.users.filter(el => el._userid !== userid)})
}
List() {
return this.state.users.map(currentuser => {
return <User user={currentuser} deleteUser={this.deleteUser} key={currentuser._userid} />
})
}
render() {
return (
<div className="container">
<h3>Users List</h3>
<table className="table">
<thead className="thead-light">
<tr>
<th>Userid</th>
<th>Username</th>
<th>Useremail</th>
<th>Userpassword</th>
<th>Usertype</th>
<th>Userstatus</th>
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
export default UserList;