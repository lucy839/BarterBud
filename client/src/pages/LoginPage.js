import React, { Component } from "react";
import Modal, { ModalHeader, ModalBody } from "../components/Modal/index";
import Jumbotron from "../components/Jumbotron/index"
import Signin from "../components/Signin/index";
import Signup from "../components/Signup/index";
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

    // assign button to open either signup form or signin form and 
    // assing modal state for open or close
    toggle = event => {
        const { name, value } = event.target;
        this.setState({ modal: !this.state.modal, [name]: value });
    }

    render() {
        // display form according to assigned button
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

        // display modal according to modal state
        var modal = "";
        switch (this.state.modal) {
            case true:
                modal = <Modal isOpen={this.state.modal} className="modal">
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

            case false:
                modal = <Jumbotron>
                    <div>
                        <h1 className="intro">Welcome to <strong id = "appName">Barter Bud</strong> <i className="fas fa-sync-alt"></i><div id="#user"></div></h1>
                        <br></br>
                        <button name="button" type="button" className="btn" value="signup" onClick={this.toggle}>Sign Up</button>
                        <button name="button" type="button" className="btn" value="signin" onClick={this.toggle}>Login</button>
                    </div>
                </Jumbotron>
                break
            default:
        }

        return (
            <div>
                {modal}
            </div>
        );
    }
}

export default LoginPage;