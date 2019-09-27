import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Signin extends Component {
    constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			redirectTo: null
		}

		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

    // when id and password is entered, set it to state
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

    // when button is clicked, call _login function from props, the reset the state
	handleSubmit(event) {
		event.preventDefault();
		this.props._login(this.state.username, this.state.password, this)
		this.setState({
			username: "",
			password: "",
		})
	}

	// state set only when this function is called, which is after _login succeeds
	success(){
		console.log("we did it");
		this.setState({ redirectTo: '/' })
	}

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (
                <div>
                    <h3 id = "signin">Login</h3>
                    <form className="form-horizontal">
                        <div className="form-group">
                            <div>
                                <label className="form-label" htmlFor="username">Username</label>
                            </div>
                            <div >
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
                            <div>
                                <input className="form-control"
                                    placeholder="password"
                                    type="password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group ">
                            <button
                                className="btn login"
                                onClick={this.handleSubmit}
                                type="submit">Login</button>
                        </div>
                    </form>
                </div>
            )
        }
    }
}

export default Signin;