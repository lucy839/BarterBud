import React, {Component} from "react";
import Nav from "../components/Nav/index"

class Main extends Component{
    render(){
        return(
            <Nav _logout = {this.props._logout}></Nav>
        );
    }
}
export default Main;