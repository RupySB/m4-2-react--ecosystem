import React from "react";
import ListingGrid from "./ListingGrid";
import { items } from "../data";
import { sellers } from "../data";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const SellerDetails = () => {
  const { sellers } = useParams();
  let seller = sellers.seller;
  return (
    <Vendors>
      <span>Sold By</span>
      <p>{seller.sellers}</p>
    </Vendors>
  );
};

const ItemDetails = () => {
  const { itemId } = useParams();
  let item = items[itemId];
  let fruitQuantity;
  if (item.quantity > 0) {
    fruitQuantity = "Buy Now!";
  } else {
    fruitQuantity = "No More in Stock";
  }
  return (
    <Main>
      <img src={item.imageSrc} />
      <p>{item.name}</p>
      <p>{item.latinName}</p>
      <p>{item.description}</p>
      <p>{item.countryOfOrigin}</p>
      <p>{item.sellerId}</p>
      <p>{item.price}</p>
      <button>{fruitQuantity}</button>
    </Main>
  );
};
const Vendors = styled.div`
  display: flex;
  font-weight: bold;
  font-size: 20px;
`;
const Main = styled.ol`
  display: flex;
  padding: 10px;
`;

const Photo = styled.img`
  width: 15px;
  height: 15px;
  border-radius: 10px;
`;

const Name = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 40px;
  font-weight: bold;
  display: flex;
`;

const LatinName = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  font-style: italic;
  display: flex;
  color: grey;
`;

const Description = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  display: flex;
`;

export default ItemDetails;
