import React, { Component } from "react";
import "./style.css";

class Nav extends Component {   
    state = {
        redirectTo: null
    } 
    // Navigation bar
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg fixed-top">
                    <div className="navbar-brand">Barter Bud <i className="fas fa-sync-alt"></i></div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <ul className="nav nav-pills">
                                <li className="nav-item">
                                    <a href="/about">About</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/market">Market</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/upload">Upload</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/profile">Profile</a>
                                </li>
                                <li className="nav-item">
                                    <a href = "/" onClick={this.props._logout}>Logout</a>
                                </li>
                            </ul>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Nav;