import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../img/logo.svg";
import {
  FaFacebook,
  FaInstagramSquare,
  FaYoutube,
  FaShoppingBag,
} from "react-icons/fa";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";

function NavbarFunc() {
  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" variant="light">
      <Container>
        <Navbar.Brand href="./">
          <img className="logo" src={logo} alt=""></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto is-active">
            <NavLink
              className="headerLink"
              activeClassName="is-active"
              activeStyle={{
                color: "#9F78FF",
                fontWeight: "bold",
                textDecoration: "underline",
              }}
              exact={true}
              to="/"
            >
              HOME
            </NavLink>
            <NavLink
              className="headerLink"
              activeClassName="is-active"
              activeStyle={{
                color: "#9F78FF",
                fontWeight: "bold",
                textDecoration: "underline",
              }}
              exact={true}
              to="/about"
            >
              ABOUT
            </NavLink>
            <NavLink
              className="headerLink"
              activeClassName="is-active"
              activeStyle={{
                color: "#9F78FF",
                fontWeight: "bold",
                textDecoration: "underline",
              }}
              exact={true}
              to="/shop"
            >
              SHOP
            </NavLink>
            <NavLink
              className="headerLink"
              activeClassName="is-active"
              activeStyle={{
                color: "#9F78FF",
                fontWeight: "bold",
                textDecoration: "underline",
              }}
              exact={true}
              to="/contact"
            >
              CONTACT
            </NavLink>
            <NavLink
              className="headerLink"
              activeClassName="is-active"
              activeStyle={{
                color: "#9F78FF",
                fontWeight: "bold",
                textDecoration: "underline",
              }}
              exact={true}
              to="/login"
            >
              LOGIN
            </NavLink>
          </Nav>

          <Nav className="Social-links m-2">
            <Row>
              <Nav.Link
                className="facebook-icon m-2"
                href="https://www.facebook.com/"
                target="_blank"
              >
                <FaFacebook size={24} />
              </Nav.Link>
              <Nav.Link
                className="instagram-icon m-2"
                href="https://www.instagram.com/"
                target="_blank"
              >
                <FaInstagramSquare size={24} />
              </Nav.Link>
              <Nav.Link
                className="youtube-icon m-2"
                href="https://www.youtube.com/"
                target="_blank"
              >
                <FaYoutube size={24} />
              </Nav.Link>
              <NavLink exact={true} className="shopping-icon m-2" to="/cart">
                <FaShoppingBag size={24} />
              </NavLink>
            </Row>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarFunc;
