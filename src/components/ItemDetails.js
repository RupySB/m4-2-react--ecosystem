import React from "react";
import { items, sellers } from "../data";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const ItemDetails = () => {
  const { itemId, sellerId } = useParams();
  let item = items[itemId];
  let seller = sellers[item.sellerId];

  let fruitQuantity;
  if (item.quantity > 0) {
    fruitQuantity = "Buy Now!";
  } else {
    fruitQuantity = "No More in Stock";
  }

  return (
    <Main>
      <FruitPhoto src={item.imageSrc} />
      <Wrapper>
        <FruitName>{item.name}</FruitName>
        <FruitLatinName>{item.latinName}</FruitLatinName>
        <Description>{item.description}</Description>
        <Origin>{item.countryOfOrigin}</Origin>
        <p>{seller.avatarSrc} </p>
        <p>{seller.storeName}</p>
        <Button>
          $ {item.price}
          {fruitQuantity}
        </Button>
      </Wrapper>
    </Main>
  );
};

const FruitPhoto = styled.img`
  display: inline-block;
  border-radius: 5px;
  border: none;
  box-shadow: 5px;
  width: 300px;
  height: 300px;
`;

const Main = styled.div`
  display: inline-block;
  padding: 10px;
`;
const Wrapper = styled.div`
  display: inline-block;
`;

const Button = styled.button``;

const FruitName = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 40px;
  font-weight: bold;
  display: flex;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const FruitLatinName = styled.p`
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

const Origin = styled.p`
  font-size: 15px;
  font-style: italic;
  opacity: 50%;
`;

export default ItemDetails;
