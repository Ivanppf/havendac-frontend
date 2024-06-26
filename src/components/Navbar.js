import React from "react";
import NavBarItem from "./NavBarItem";

function NavBar() {


    return (
        <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Haven</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav me-auto">
                        <NavBarItem href="/properties" label="Property"/>
                        <NavBarItem href="/rooms" label="Room"/>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;