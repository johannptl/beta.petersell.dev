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
      <Nav>
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
          <NavBtnLink
            href="https://github.com/JohannLULW/petersell.dev"
            target="_blank"
          >
            Source Code
          </NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
