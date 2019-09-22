import React, {Component} from 'react';
import Container from "../Container";
import About from "../../pages/About";
import Upload from "../../pages/Upload";
import Market from "../../pages/Market";
// import { Redirect } from 'react-router-dom'
import "./style.css";

class Nav extends Component {
    constructor(props){
        super(props)
        this.state = {
            button:""
        }
        this.toggle = this.toggle.bind(this);
    }
    toggle = event => {
        const {name, value} = event.target;
        this.setState({[name]: value });
    }
    render() {
        let page = "";
        switch (this.state.button){
            case "about":
                page = <About/>
                break
            case "market":
                page = <Market user = {this.props.user}/>
                break
            case "upload":
                page = <Upload user = {this.props.user}/>
                break
            default:
                // page = <Market user = {this.props.user}/>
        }
        return (
            <div>
            <nav class="navbar navbar-expand-lg fixed-top">

                <div class="navbar-brand">Barter Bud <i class="fas fa-sync-alt"></i></div>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <ul class="nav nav-pills">
                            <li class="nav-item">
                                <button  name="button"
            type="button"
            value="about"
            onClick={this.toggle}>About</button>
                            </li>
                            <li class="nav-item">
                            {/* <button  name="button"
            type="button"
            value="market"
            onClick={this.toggle}>Market</button>               */}
            <a href = "/market">market</a>
                          </li>
                            <li class="nav-item">
                                <a href = "/upload">upload</a>
                            {/* <button  name="button"
            type="button"
            value="upload"
            onClick={this.toggle}>Upload</button>           */}
                              </li>
                            <li class="nav-item">
                                <button onClick = {this.props._logout}>Logout</button>
                                {/* <a class="nav-link" method="GET" href="/logout"></a> */}
                            </li>
                        </ul>
                    </ul>
                </div>
            </nav>
            {/* <Container> */}
                {/* {page} */}
            {/* </Container> */}
            </div>
        );
    }


}

export default Nav;