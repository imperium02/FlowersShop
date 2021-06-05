import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";

function Header() {
  return (
    <Navbar sticky={"top"} bg={"dark"} variant={"dark"}>
      <Navbar.Brand as={NavLink} to={"/"}>
        Apteka
      </Navbar.Brand>
      <Nav className={"mr-auto"}>
        <NavItem>
          <Nav.Link as={NavLink} exact to={"/"}>
            Home
          </Nav.Link>
        </NavItem>
        <NavItem href={"/flowers"}>
          <Nav.Link as={NavLink} to={"/flowers"}>
            Leki bez recepty
          </Nav.Link>
        </NavItem>
        <NavItem href={"/prescription"}>
          <Nav.Link as={NavLink} to={"/prescription"}>
            Recepta
          </Nav.Link>
        </NavItem>
      </Nav>
      <Nav className={"ml-auto"}>
        <NavItem href={"/basket"} className={"mr-sm-2"}>
          <Nav.Link as={NavLink} to={"/basket"}>
            Koszyk
          </Nav.Link>
        </NavItem>
      </Nav>
    </Navbar>
  );
}

export default Header;
