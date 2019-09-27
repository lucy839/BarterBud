import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            confirmPassword: "",
            email: "",
            redirectTo: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        console.log('sign-up handleSubmit, username: ')
        console.log(this.state.username)
        event.preventDefault()
        // if password is matching and email is valid format process signup
        var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (this.state.username==""||this.state.password==""||this.state.confirmPassword==""||this.state.email==""){
            alert("Please complete the form");
        }else {
            if (this.state.confirmPassword !== this.state.password){
                alert("Password not matching");
            }else{
                if (this.state.email.match(reg)) {
                    axios.post('/auth/signup', {
                        username: this.state.username,
                        password: this.state.password,
                        email: this.state.email
                    })
                    .then(response => {
                        // if signup completed successfuly, login automatically
                        if (!response.data.error) {
                            this.props._login(this.state.username, this.state.password, this);
                        } else {
                            alert("Already signed up. please login");
                            this.setState({
                                redirectTo: '/'
                            })
                        }
                    })
                } else {
                    alert("please enter valid email");
                }
            }
        }
    }

    // if logged in successfully, navigate to main page
    success() {
        this.setState({ redirectTo: '/' })
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (
                <div className="SignupForm">
                    <h3 id ="signup">Sign up</h3>
                    <form className="form-horizontal">
                        <div className="form-group">
                            <div>
                                <label className="form-label" htmlFor="username">Username</label>
                            </div>
                            <div>
                                <input className="form-control"
                                    type="text"
                                    id="username"
                                    name="username"
                                    placeholder="Username"
                                    value={this.state.username}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div>
                                <label className="form-label" htmlFor="password">Password: </label>
                            </div>
                            <div >
                                <input className="form-control"
                                    placeholder="password"
                                    type="password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div>
                                <label className="form-label" htmlFor="password">Confirm Password: </label>
                            </div>
                            <div>
                                <input className="form-control"
                                    placeholder="password"
                                    type="password"
                                    name="confirmPassword"
                                    value={this.state.confirmPassword}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div >
                                <label className="form-label" for="contact">Email address:</label>
                            </div>
                            <div >
                                <input type="email"
                                    className="form-control"
                                    id="contact"
                                    placeholder="name@example.com"
                                    type="email"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group ">
                            <button className="btn signup" onClick={this.handleSubmit} type="submit">Sign up</button>
                        </div>
                    </form>
                </div>
            )
        }
    }
}

export default Signup