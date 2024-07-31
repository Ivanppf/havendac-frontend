import React from "react";
import NavBarItem from "./NavBarItem";

function NavBar(props) {

  let href = "/signin"

  if (props.nickname != "signin") {
    href = "/logout"
  }

  return (
    <nav className="ps-4 navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Haven
        </a>
        <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <NavBarItem href="/properties" label="Property" />
              <NavBarItem href="/rooms" label="Room" />
            </ul>
          <ul className="navbar-nav">
            <NavBarItem href={href} label={props.nickname} />
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
