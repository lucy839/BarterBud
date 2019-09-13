import React, { Component } from "react";
import Modal, { ModalHeader, ModalBody } from '../components/Modal/index';

// link signup page and sign in page
import Signin from "./Signin";
import Signup from "./Signup";

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            button: "",
        }
        this.toggle = this.toggle.bind(this);
    }

    toggle = event => {
        const { name, value } = event.target;
        this.setState({ modal: !this.state.modal, [name]: value });
    }
    // handleSignin() {
    //     this.setState({formToPresent:<Signin/>});
    //     // this.setState({formToPresent: <Login></Login>})
    // }
    // handleSignup(){
    //     this.setState({formToPresent:<Signup/>});

    // }
    render() {
        var form = "";
        switch (this.state.button) {
            case "signin":
                form = <Signin />
                break
            case "signup":
                form = <Signup />
                break
            default:
        }

        return (
            // signup button and sign in button
            <div>
                {/* If sign up button is clicked, have sign up page pop up */}
                <button name="button" value="signup" onClick={this.toggle}>Sign Up</button>
                {/* If login button is clicked, have login page pop up */}
                <button name="button" value="signin" onClick={this.toggle}>Login</button>
                <Modal isOpen={this.state.modal} className="modal">
                    <ModalHeader>
                        <button
                            type="button"
                            className="close"
                            aria-label="Close"
                            onClick={this.toggle}
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </ModalHeader>
                    <ModalBody>
                        {form}
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}
export default LoginPage;