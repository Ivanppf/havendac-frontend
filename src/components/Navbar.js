import React from "react";
import NavBarItem from "./NavBarItem";

function NavBar() {


    return (
        <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Haven</a>
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