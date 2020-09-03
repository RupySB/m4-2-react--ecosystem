import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ListingGrid = ({ itemList }) => {
  return (
    <section className="item-list">
      {itemList.map((item) => {
        return (
          <MainPage>
            <FruitPhoto src={item.imageSrc} />
            <FruitName>{item.name}</FruitName>
            <FruitLatinName>{item.latinName}</FruitLatinName>
            <Link className="ItemDetails" to={"/items/" + item.id}>
              Go to Item Page{" "}
            </Link>
          </MainPage>
        );
      })}
    </section>
  );
};

const MainPage = styled.div`
  display: inline-block;
  grid: repeat(3) / repeat(11);
  gap: 5em;
  padding: 20px;
`;

const FruitPhoto = styled.img`
  display: inline-block;
  border-radius: 5px;
  border: none;
  box-shadow: 5px;
  width: 150px;
  height: 150px;
`;
const FruitName = styled.h2`
  font-size: 20px;
  font-weight: bold;
  display: flex;
  border-bottom: lightgrey solid;
`;
const FruitLatinName = styled.h3`
  font-size: 15px;
  font-style: italic;
  opacity: 50%;
`;

export default ListingGrid;
