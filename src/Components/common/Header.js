import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";

function Header() {
  return (
    <Navbar sticky={"top"} bg={"dark"} variant={"dark"}>
      <Navbar.Brand as={NavLink} to={"/"}>
        Kwiaciarnia
      </Navbar.Brand>
      <Nav className={"mr-auto"}>
        <NavItem>
          <Nav.Link as={NavLink} exact to={"/"}>
            Home
          </Nav.Link>
        </NavItem>
        <NavItem href={"/flowers"}>
          <Nav.Link as={NavLink} to={"/flowers"}>
            Kwiaty
          </Nav.Link>
        </NavItem>
        <NavItem href={"/about"}>
          <Nav.Link as={NavLink} to={"/about"}>
            Kontakt
          </Nav.Link>
        </NavItem>
        <NavItem href={"/partner"}>
          <Nav.Link as={NavLink} to={"/partner"}>
            Partner
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
