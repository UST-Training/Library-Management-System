import React, { Component } from 'react';
import axios from "axios";
//import "react-datepicker/dist/react-datepicker.css";

class EditUser extends Component {

    constructor(props){
        super();
        this.state = {
            username: "",
            useremail: "",
            userpassword:"",
            userstatus: "" ,
            users: []
        }
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeUseremail = this.onChangeUseremail.bind(this);
        this.onChangeUserpassword = this.onChangeUserpassword.bind(this);
        this.onChangeUserstatus = this.onChangeUserstatus.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:5000/users/'+this.props.match.params._id)
            .then(res => {
                this.setState({
                    username: res.data.username,
                    useremail: res.data.useremail,
                    userpassword: res.data.userpassword,
                   userstatus: res.data.userstatus,
                })
            })
            .catch(function (error){
                console.log(error);
            })

        axios.get('http://localhost:5000/users/')
            .then(response => {
                if(response.data.length > 0) {
                    this.setState({ 
                        users: response.data.map(user => user.username)
                    });
                }
            })
    }

    onChangeUsername(e) {
        this.setState({ username: e.target.value})
    }
    onChangeUseremail(e) {
        this.setState({ useremail: e.target.value})
    }
    onChangeUserpassword(e) {
        this.setState({ userpassword: e.target.value})
    }
    onChangeUserstatus(e) {
        this.setState({userstatus: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault();
        const user = {
            username: this.state.username,
           useremail: this.state.useremail,
           userpassword: this.state.userpassword,
           userstatus: this.state.userstatus
        }

        console.log(user);

        axios.post('http://localhost:5000/users/update/'+this.props.match.params._id,user )
            .then(res => console.log(res.data));

        window.location = "/";
    }
    
    render() { 
        return ( 
            <div className="container">
                <h3>Edit User Log</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <select 
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername} >
                            {
                                this.state.users.map(function(user) {
                                    return <option key={user} value={user}>{user}</option>;
                                })
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Useremail: </label>
                        <input
                            type="text" required
                            className="form-control"
                            value={this.state.useremail}
                            onChange={this.onChangeUseremail}
                        />
                    </div>
                    <div className="form-group">
                        <label>User Password </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.userpassword}
                            onChange={this.onChangeUserpassword}
                        />
                    </div>
        
                    <div className="form-group">
                    <div className="form-group">
                        <label>User Status </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.userstatus}
                            onChange={this.onChangeUserstatus}
                        />
                    </div>
                        <input type="submit" value="Edit User Log" className="btn btn-primary" />
                    </div>
                </form>
            </div>
         );
    }
}
 
export default EditUser;