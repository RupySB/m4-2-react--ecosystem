import React from "react";
import styled from "styled-components";
import ListingGrid from "./ListingGrid";
import { items, sellers } from "../data";
import ItemDetails from "./ItemDetails";
const Home = (props) => {
  const fruits = Object.values(items);

  return (
    <>
      <p>Fruit emporium sells the finest fruits from this world and beyond.</p>
      <p> Browse items:</p>
      <Grid style={{ margin: "50px 50px" }}>
        <ListingGrid itemList={fruits} />
      </Grid>
    </>
  );
};
const Grid = styled.div`
  display: grid;
  grid: repeat(3, auto) / repeat(11, auto);
  gap: 2em;
`;
export default Home;
