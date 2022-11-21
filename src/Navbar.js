import React from "react";
import Logo from "./images/react-icon-small.png";

export default function Navbar() {
  return (
    <nav>
      <img src={Logo} alt="react-logo" className="nav--icon" />
      <h4 className="nav--title">React Course - Project 1</h4>
    </nav>
  );
}
