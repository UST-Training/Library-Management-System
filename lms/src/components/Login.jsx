import React, { Component } from 'react';
import axios from "axios";

import {useHistory} from 'react-router-dom'
class Login extends Component {
    inhistory = () => {
        const { history } = this.props;
      
      history.push('/booklist')
    }
    constructor(props){
        super();
        this.state = {
            useremail: "",
           userpassword:"",
            users: []
        }
        this.onChangeUseremail = this.onChangeUseremail.bind(this);
        this.onChangeUserpassword = this.onChangeUserpassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
       /* axios.get('http://localhost:5000/user/'+this.props.match.params.id)
            .then(res => {
                this.setState({
                    username: res.data.username,
                    description: res.data.description,
                    duration: res.data.duration,
                    date: new Date(res.data.date),
                })
            })
            .catch(function (error){
                console.log(error);
            })*/

        axios.get('http://localhost:5000/user/')
            .then(response => {
                if(response.data.length > 0) {
                    this.setState({ 
                        users: response.data.map(user => user.useremail)
                    });
                    //{this.inhistory}
                   
                }
            })
    }

    onChangeUseremail(e) {
        this.setState({ useremail: e.target.value})
    }
    onChangeUserpassword(e) {
        this.setState({ userpassword: e.target.value})
    
    }
    onSubmit(e) {
        e.preventDefault();
        const login = {
            useremail: this.state.useremail,
            userpassword: this.state.userpassword,
        }

        console.log(login);

        
    }
    
    render() { 
        return ( 
            <div className="container">
                <h3>Login</h3>
                <form onSubmit={this.onSubmit}>
                    
                    <div className="form-group">
                        <label>User Email </label>
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
                        <input type="submit" onClick={this.inhistory} value="Login" className="btn btn-primary" />
                    </div>
                </form>
            </div>
         );
    }
}
 
export default Login;