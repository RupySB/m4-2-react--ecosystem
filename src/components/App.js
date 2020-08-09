import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Header";
import styled from "styled-components";
import Home from "./Home";
import About from "./About";
import ItemDetails from "./ItemDetails";
const App = (props) => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/items/:itemId">
          <ItemDetails />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
