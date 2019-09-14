import React from 'react';
import "./style.css";

function Nav() {
    return (
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
                    <a class="nav-link" href="/about">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/market">Market</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/upload">Profile</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" method="GET" href="/logout">Logout</a>
                </li>
            </ul>
        </ul>
    </div>
</nav>
    );
}
  
export default Nav;