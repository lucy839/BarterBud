import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import axios from "axios";
import Main from "./pages/Main";
import LoginPage from "./pages/LoginPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      user: null
    };
  }

  // as soon as app load, app needs to check if anyone is logged in or not.
  componentDidMount() {
    // axios.get("/auth/user").then(response => {
      // if (response.data.user) {
      //   this.setState({
      //     loggedIn: true,
      //     user: response
      //   })
      // } else {
      //   this.setState({
      //     loggedIn: false,
      //     user: null
      //   })
      // }
    // })
  }
  render() {
    let main;
    // if someone is logged in, go to main page,
    if (this.state.loggedIn)
      main = <Route path="/" exact component = {Main}></Route>

    // if no one is loggedin , display login page
    else
      main = <Route path="/" exact component={LoginPage}></Route>

    return (
      <div>
        <Router>
          <Switch>
            {main}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
