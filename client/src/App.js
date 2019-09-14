import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import Main from "./pages/Main";
import LoginPage from "./pages/LoginPage";
import About from "./pages/About";
import Upload from "./pages/Upload";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      user: null
    };
  
  this._login = this._login.bind(this);
  }
  // as soon as app load, app needs to check if anyone is logged in or not.
  componentDidMount() {
    axios.get("/auth/user").then(response => {
      if (response.data.user) {
        this.setState({
          loggedIn: true,
          user: response
        })
      } else {
        this.setState({
          loggedIn: false,
          user: null
        })
      }
    })
  }
  _login(username, password, obj) {
    // console.log(username, password);
		axios
			.post('/auth/login', {
				username,
				password
			})
			.then(response => {
				console.log(response);
				if (response.status === 200) {
					// update the state
					this.setState({
						loggedIn: true,
						user: response.data.user,
					})
				}

				obj.success();

			}).catch(err => {
				if (err) {
					alert("wrong username or password");
				}
			})
  }
  
  render() {
    let main;
    if (this.state.loggedIn)
      main = <Route path="/" exact component = {Main}></Route>
    else 
      main = <Route path="/" exact render={(props) => <LoginPage {...props} _login={this._login} loggedIn={this.state.loggedIn} />}></Route>

    // if someone is loggedin, display navbar
    // if someone is logged in, go to main page,
    // if (this.state.loggedIn)
    //   main = <Route path="/main" exact component = {Main}></Route>

    // // if no one is loggedin , display login page
    // else

    return (
      <div>
        <Router>
          <Switch>
            {/* <Route path="/main" exact component = {Main}></Route> */}
            <Route path="/about" exact component = {About}></Route>
            <Route path="/upload" exact component = {Upload}></Route>

            {main}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
