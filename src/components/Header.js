import React from "react";
import { Link, Route, BrowserRouter, Switch } from "react-router-dom";
import styled from "styled-components";
import { render } from "react-dom";

const Header = (props) => {
  return (
    <NavBar>
      <Title>Fruit Emporium</Title>
      <Wrapper>
        <Link className="Homepage" to="/">
          Home
        </Link>
        <Link className="About" to="/about">
          About
        </Link>
      </Wrapper>
    </NavBar>
  );
};

const NavBar = styled.div`
  display: flex;
  margin-top: 15px;
`;
const Title = styled.h1`
  display: absolute;
  float: left;
  font-size: 25px;
  margin-left: 1px;
  margin-left: 0px;
  justify-content: flex-start;
`;
const Wrapper = styled.div`
  float: right;
`;
export default Header;
