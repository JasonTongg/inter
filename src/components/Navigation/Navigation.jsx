import React from "react";
import Logo from "../../Assets/logo.png";

import { Header, Nav, NavLeft, NavRight } from "./NavigationStyle.js";

export default function Navigation() {
  return (
    <Header>
      <Nav>
        <NavLeft className="nav-left">
          <img src={Logo} alt="" />
        </NavLeft>
        <NavRight className="nav-right">
          <a href="/">About</a>
          <a href="/">Testimonial</a>
          <a href="/">Contact</a>
        </NavRight>
      </Nav>
    </Header>
  );
}
