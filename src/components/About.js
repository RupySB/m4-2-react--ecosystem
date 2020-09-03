import React from "react";
import styled from "styled-components";
import Header from "./Header";

const About = (props) => {
  return (
    <>
      <p>
        Fruit emporium is founded on a very simple principle:
        <Span> Fruit is good.</Span>
      </p>

      <p>
        We carry the finest selection of produce from around the world, from
        tart citrus to sweet cherries. Our sellers are world-class, and your
        fruit is guaranteed to be worthy of auction in Asian markets.
      </p>
    </>
  );
};
const Span = styled.span`
  font-weight: bold;
`;
export default About;
