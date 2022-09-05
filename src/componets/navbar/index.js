import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbaeElements";

const Navbar = () => {
  return (
    <>
      <Nav style={{ height: window.innerHeight * 0.08 }}>
        <NavLink to="/home">
          <h1>petersell.dev</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>

          <NavLink to="/projects" activeStyle>
            Projects
          </NavLink>

          <NavLink to="/socials" activeStyle>
            Socials
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/login">Login</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
