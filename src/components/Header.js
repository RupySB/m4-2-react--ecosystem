import React from "react";
import { Link, Route, BrowserRouter, Switch } from "react-router-dom";
import styled from "styled-components";
import { render } from "react-dom";

const Header = (props) => {
  return (
    <NavBar>
      <Title>Fruit Emporium</Title>
      <Link className="Homepage" to="/">
        Home
      </Link>
      <Link className="About" to="/about">
        About
      </Link>
    </NavBar>
  );
};

const NavBar = styled.div`
  display: flex;
  margin-top: 15px;
`;
const Title = styled.h1`
  display: absolute;
  font-size: 25px;
  margin-left: 1px;
  margin-left: 0px;
  justify-content: flex-start;
`;

export default Header;
