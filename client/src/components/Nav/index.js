import React, { Component } from "react";
import "./style.css";

class Nav extends Component {    
    // Navigation bar
    render() {
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
                                    <a href="/about">about</a>
                                </li>
                                <li class="nav-item">
                                    <a href="/market">market</a>
                                </li>
                                <li class="nav-item">
                                    <a href="/upload">upload</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/profile">profile</a>
                                </li>
                                <li class="nav-item">
                                    <a onClick={this.props._logout}>Logout</a>
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