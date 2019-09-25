import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

class Signup extends Component {
	constructor(props) {
		super(props)
		this.state = {
			username: '',
			password: '',
			// needs to work on this
			confirmPassword: '',
			email:'',
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
		var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

		if (this.state.email.match(reg) ){
		//request to server to add a new username/password
		axios.post('/auth/signup', {
			username: this.state.username,
			password: this.state.password,
			email: this.state.email
		})
			.then(response => {
				console.log(response)
				if (!response.data.error) {
					console.log('youre good')
					this.props._login(this.state.username, this.state.password, this);


				} else {
					alert("Already signed up. please login")
					console.log('duplicate')
					this.setState({
						redirectTo: '/'
					})
				}
			})} else {
				alert("please enter valid email");
			}

	}
	success() {
		console.log("we did it");
		this.setState({ redirectTo: '/' })
	}

	render() {
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		} else {
			return (
				<div className="SignupForm">
					<h4>Sign up</h4>
					<form className="form-horizontal">
						<div className="form-group">
							<div className="col-1 col-ml-auto">
								<label className="form-label" htmlFor="username">Username</label>
							</div>
							<div className="col-3 col-mr-auto">
								<input className="form-input"
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
							<div className="col-1 col-ml-auto">
								<label className="form-label" htmlFor="password">Password: </label>
							</div>
							<div className="col-3 col-mr-auto">
								<input className="form-input"
									placeholder="password"
									type="password"
									name="password"
									value={this.state.password}
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
									type = "email"
									name = "email"
									value = {this.state.email}
									onChange = {this.handleChange}
								/>
							</div>
						</div>

						<div className="form-group ">
							<button
								className="btn btn-primary "
								onClick={this.handleSubmit}
								type="submit"
							>Sign up</button>
						</div>
					</form>
				</div>

			)
		}
	}
}

export default Signup