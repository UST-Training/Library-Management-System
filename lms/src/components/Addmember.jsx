import React, { Component } from 'react';
import axios from "axios";
//import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class CreateAddmember extends Component {

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

    /*componentDidMount() {
        axios.get('http://localhost:5000/users/')
            .then(response => {
                if(response.data.length > 0) {
                    this.setState({ 
                        users: response.data.map(user => user.username),
                        username: response.data[0].username
                    });
                }
            })
    }*/

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
        const addmember = {
            userid: this.state.userid,
            userloginid: this.state.userloginid,
            username: this.state.username,
            useremail: this.state.useremail,
            userpassword: this.state.userpassword,
            usertype: this.state.usertype,
            userstatus: this.state.userstatus,
        }

        console.log(addmember);

        axios.post('http://localhost:5000/exercises/add', addmember)
            .then(res => console.log(res.data));
            this.setState({
                userid: '',
                userloginid:'',
               username:'',
               useremail:'',
               userpassword:'',
               usertype:'',
               userstatus:''
            })

        window.location = "/";
    }
    
    render() { 
        return ( 
            <div className="container">
                <h3>Create New User</h3>
                <form onSubmit={this.onSubmit}>
                    
                    <div className="form-group">
                        <label>User Id: </label>
                        <input
                            type="text" required
                            className="form-control"
                            value={this.state.userid}
                            onChange={this.onChangeUserid}
                        />
                    </div>
                    <div className="form-group">
                        <label>User Login Id </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.userloginid}
                            onChange={this.onChangeUserloginid}
                        />
                    </div>
                    <div className="form-group">
                        <label>User Name </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                        />
                    </div>
                    <div className="form-group">
                        <label>User Email</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.useremail}
                            onChange={this.onChangeUseremail}
                        />
                    </div>
                    <div className="form-group">
                        <label>User Password</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.userpassword}
                            onChange={this.onChangeUserpassword}
                        />
                    </div>
                    <div className="form-group">
                        <label>User Type </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.usertype}
                            onChange={this.onChangeUsertype}
                        />
                    </div>
                    <div className="form-group">
                        <label>User Status </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.userstatus}
                            onChange={this.onChangeUserstatus}
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
                    </div>
                </form>
            </div>
         );
    }
}
 
export default CreateAddmember;