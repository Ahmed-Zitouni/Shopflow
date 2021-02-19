import React from "react";
import styled from "styled-components";

export default function JumboSaleDisplay({ First, img }) {
  return (
    <Wrapper First={First}>
      <SaleImg src={img} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 75vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${(props) => (props.First ? "125px" : "0px")};
  margin-bottom: 50px;
  max-height: 500px;
`;

const SaleImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
`;
