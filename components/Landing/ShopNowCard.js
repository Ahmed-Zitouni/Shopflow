import React from "react";
import styled from "styled-components";

const ShopNowCard = ({ data, mb }) => {
  return (
    <Wrapper mb={mb}>
      <ImgCont>
        <Img src={data.img} />
      </ImgCont>
      <TextCont>
        <H2>{data.price}</H2>
        <P>{data.name}</P>
      </TextCont>
    </Wrapper>
  );
};

export default ShopNowCard;

const Wrapper = styled.a`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding-bottom: 20px;
  box-sizing: border-box;
  padding: 0px 8px;
  margin-bottom: ${(props) => props.mb};
  cursor: pointer;
  @media ${(props) => props.theme.tablet} {
    width: 33.33%;
    margin-bottom: 0px;
  }
`;
const ImgCont = styled.div`
  width: 100%;
  overflow: hidden;
`;
const Img = styled.img`
  width: 100%;
  object-fit: cover;
  transition: transform 0.35s ease-in-out;
  &:hover {
    transform: scale(1.06);
  }
`;
const H2 = styled.h2`
  font-size: 20px;
  padding-bottom: 10px;
`;
const P = styled.p`
  font-size: 16px;
  font-weight: 400;
`;
const TextCont = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 20px 40px;
  background: ${(props) => props.theme.lightGrey};
`;
