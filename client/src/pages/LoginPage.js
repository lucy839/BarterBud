import React, { Component } from "react";
import Modal, { ModalHeader, ModalBody } from "../components/Modal/index";
import Jumbotron from "../components/Jumbotron/index"
// link signup page and sign in page
import Signin from "./Signin";
import Signup from "./Signup";
import "./style.css";

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
                form = <Signin _login={this.props._login} />
                break
            case "signup":
                form = <Signup _login={this.props._login} />
                break
            default:
        }
        var modal = "";
        switch (this.state.modal){
            case true:
                modal =   <Modal isOpen={this.state.modal} className="modal">
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
                <br></br>
                <ModalBody>
                    {form}
                </ModalBody>
            </Modal>
                 break
       
            case false :
                modal =    <Jumbotron>
                <div>
                    <h1 class="intro">Welcome to Barter Bud <i class="fas fa-sync-alt"></i><div id="#user"></div></h1>
                    <br></br>
                    <button name="button" type="button" className="btn" value="signup" onClick={this.toggle}>Sign Up</button>
                    {/* If login button is clicked, have login page pop up */}
                    <button name="button" type="button" className="btn" value="signin" onClick={this.toggle}>Login</button>
                </div>
            </Jumbotron>
                 break
             default:
        }

        return (
            // signup button and sign in button
            <div>
                {/* If sign up button is clicked, have sign up page pop up */}
                {/* <Modal isOpen={this.state.modal} className="modal">
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
                </Modal> */}
                {/* <Jumbotron>
                    <div>
                        <h1 class="intro">Welcome to Barter Bud <i class="fas fa-sync-alt"></i><div id="#user"></div></h1>
                        <br></br>
                        <button name="button" type="button" className="btn" value="signup" onClick={this.toggle}>Sign Up</button> */}
                        {/* If login button is clicked, have login page pop up */}
                        {/* <button name="button" type="button" className="btn" value="signin" onClick={this.toggle}>Login</button>
                    </div>
                </Jumbotron> */}
    {modal}
             
            </div>
        );
    }
}
export default LoginPage;