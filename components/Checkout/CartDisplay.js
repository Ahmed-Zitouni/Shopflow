import React from "react";
import styled from "styled-components";
import CartItem from "./CartItem";

export default function CartDisplay({ ItemArray, updateNums }) {
  return (
    <Wrapper>
      <Container>
        {ItemArray.map((item) => (
          <CartItem
            key={item.id}
            imageURL={item.imageURL}
            productName={item.productName}
            color={item.color}
            price={item.price}
            quantity={item.quantity}
            Productidid={item.id}
            updateNums={updateNums}
          />
        ))}
      </Container>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;
