import React from "react";
import styled from "styled-components";

const ProductCard = ({ data }) => {
  return (
    <Wrapper>
      <Img src={data.img} />
      <TextCont>
        <H2>{data.price}</H2>
        <P>{data.name}</P>
      </TextCont>
    </Wrapper>
  );
};

export default ProductCard;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;
const Img = styled.img`
  width: 100%;
  object-fit: cover;
  height: 200px;
`;
const H2 = styled.h2`
  font-size: 18px;
  font-weight: 600;
  padding-bottom: 10px;
  color: ${(props) => props.theme.redText};
`;
const P = styled.p`
  font-size: 18px;
  font-weight: 400;
`;
const TextCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 20px;
`;
