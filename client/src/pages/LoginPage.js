import React, { Component } from 'react';
// link signup page and sign in page
class LoginPage extends Component {
    render(){
        return(
            // signup button and sign in button
            <div>
                {/* If login button is clicked, have login page pop up */}
                <button>Login</button>
                {/* If sign up button is clicked, have sign up page pop up */}
                <button>Sign Up</button>
            </div>
        );
    }
}
export default LoginPage;