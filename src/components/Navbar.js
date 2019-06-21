import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

export default class Navbar extends Component {
  render() {
    return (
      <NavWarpper className="navbar navbar-expand-sm  navbar-darck px-sm-5">
        <Link to="/" className="">
          <img src={logo} alt="store" className="navbar-brand" />
        </Link>
        <nav className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              pizzas
            </Link>
          </li>
        </nav>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus" />
            </span>
            my cart
          </ButtonContainer>
        </Link>
      </NavWarpper>
    );
  }
}

const NavWarpper = styled.nav`
  background: var(--mainBlue);
  height: 4rem;

  .nav-link {
    color: var(--mainWhite);
    font-size: 1.3rem;
    text-transform: capitalize;
  }
  .navbar-brand {
    height: 3rem;
  }
`;
