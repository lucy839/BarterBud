import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import LoginPage from "./pages/LoginPage";
import About from "./pages/About";
import Upload from "./pages/Upload";
import Market from "./pages/Market";

import Nav from "./components/Nav";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      user: null,
      redirectTo: null
    };
		this._logout = this._logout.bind(this);
    this._login = this._login.bind(this);
  }
  // as soon as app load, app needs to check if anyone is logged in or not.
  componentDidMount() {
    axios.get("/auth/user").then(response => {
      if (response.data.user) {
        this.setState({
          loggedIn: true,
          user: response.data.user._id
        })
        console.log(this.state.user);
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
          // console.log(err)
          alert("wrong username or password");
        }
      })
  }
  _logout(event) {
    event.preventDefault()
    console.log('logging out')
    axios.post('/auth/logout').then(response => {
      console.log(response.data)
      if (response.status === 200) {
        this.setState({
          loggedIn: false,
          user: null,
          redirectTo: "/",
          tradeRequest: false
        })
      }
      // obj.success();
    })
  }

  render() {
    if (this.state.redirectTo) {
			redirect = <Redirect to={{ pathname: this.state.redirectTo }} />
    }
    let main;
    let nav;
    let redirect;
 
    if (this.state.loggedIn){
      nav =  <Nav _logout = {this._logout} user = {this.state.user}></Nav>
      main = <Route path="/"exact render ={(props)=> <Market {...props}  user = {this.state.user} />}></Route>
    } else {
      main = <Route path="/" exact render={(props) => <LoginPage {...props} _login={this._login} loggedIn={this.state.loggedIn} />}></Route>
    }
    // if someone is loggedin, display navbar
    // if someone is logged in, go to main page,
    // if (this.state.loggedIn)
    //   main = <Route path="/main" exact component = {Main}></Route>

    // // if no one is loggedin , display login page
    // else
    
    return (
      <div>
    
        <Router>
        {redirect}
        {nav}
          <Switch>
            {/* <Route path="/main" exact component = {Main}></Route> */}
            <Route path="/about" exact component={About}></Route>
    <Route path="/upload" exact render = {(props) => <Upload {...props} user = {this.state.user}/>}></Route>
            <Route path="/market" exact render ={(props)=> <Market {...props}  user = {this.state.user}/>}></Route>       
            {main}
          </Switch>
        </Router>
      </div>
    );
  }}



export default App;
