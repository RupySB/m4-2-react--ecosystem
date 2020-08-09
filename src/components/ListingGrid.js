import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ListingGrid = ({ itemList }) => {
  return (
    <section className="item-list">
      <ol>
        {itemList.map((item) => {
          return (
            <MainPage>
              <FruitPhoto src={item.imageSrc} />
              <FruitName>{item.name}</FruitName>
              <FruitLatinName>{item.latinName}</FruitLatinName>
              <FruitOrigin>{item.countryOfOrigin}</FruitOrigin>
              <Link className="ItemDetails" to={"/items/" + item.id}>
                Go to Item Page{" "}
              </Link>
            </MainPage>
          );
        })}
      </ol>
    </section>
  );
};

const MainPage = styled.ol`
  display: block;
  grid-template-columns: repeat(autofit, minmax(150px, 2fr));
`;

const FruitPhoto = styled.img`
  display: block;
  border-radius: 5px;
  border: solid;
  box-shadow: 5px;
  width: 150px;
  height: 150px;
`;
const FruitName = styled.h2`
  font-size: 20px;
  font-weight: bold;
  display: flex;
`;
const FruitLatinName = styled.h3`
  font-size: 15px;
  font-style: italic;
`;
const FruitOrigin = styled.p`
  font-size: 10px;
`;

export default ListingGrid;
