import React, { Component } from 'react';
import axios from "axios";

class CreateUser extends Component {
    constructor(props){
        super();
        this.state = {
            userid:"",
            userloginid:"1",
            username: "",
            useremail:"",
            userpassword:"",
            usertype:"User",
            userstatus:"Active"

        }
        this.onChangeUserid = this.onChangeUserid.bind(this);
        this.onChangeUserloginid = this.onChangeUserloginid.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeUseremail = this.onChangeUseremail.bind(this);
        this.onChangeUserpassword = this.onChangeUserpassword.bind(this);
        this.onChangeUsertype = this.onChangeUsertype.bind(this);
        this.onChangeUserstatus = this.onChangeUserstatus.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChangeUserid(e) {
        this.setState({ userid: e.target.value})
    }
    onChangeUserloginid(e) {
        this.setState({ userloginid: e.target.value})
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
    onChangeUsertype(e) {
        this.setState({ usertype: e.target.value})
    }
    onChangeUserstatus(e) {
        this.setState({ userstatus: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault();
        const user = {
            userid: this.state.userid,
            userloginid: this.state.userloginid,
            username: this.state.username,
            useremail: this.state.useremail,
            userpassword: this.state.userpassword,
            usertype: this.state.usertype,
            userstatus: this.state.userstatus,
        }

        console.log(user);

        axios.post('http://localhost:5000/users/add', user)
            .then(res => console.log(res.data));
       
        this.setState({
            username: ''
        })
    }
    
    render() { 
        return ( 
            <div className="container">
                <h3>Create New User</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>User Id: </label>
                        <input
                            type="number" required
                            className="form-control"
                            value={this.state.userid}
                            onChange={this.onChangeUserid}
                        />
                         <label>User Login Id: </label>
                        <input
                            type="number" required
                            className="form-control"
                            value={this.state.userloginid}
                            onChange={this.onChangeloginid}
                        />
                         <label>Username: </label>
                        <input
                            type="text" required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                        />
                         <label>User Email: </label>
                        <input
                            type="text" required
                            className="form-control"
                            value={this.state.useremail}
                            onChange={this.onChangeUseremail}
                        />
                         <label>User Password: </label>
                        <input
                            type="text" required
                            className="form-control"
                            value={this.state.userpasssword}
                            onChange={this.onChangeUserpassword}
                        />
                         <label>User Type </label>
                        <input
                            type="text" required
                            className="form-control"
                            value={this.state.usertype}
                            onChange={this.onChangeUsertype}
                        />
                         <label>User Status </label>
                        <input
                            type="text" required
                            className="form-control"
                            value={this.state.userstatus}
                            onChange={this.onChangeUserstatus}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-primary" />
                    </div>
                </form>
            </div>
         );
    }
}
 
export default CreateUser;