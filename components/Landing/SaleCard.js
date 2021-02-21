import React from "react";
import styled from "styled-components";

const SaleCard = ({ data, mb, last }) => {
  return (
    <Wrapper mb={mb} last={last}>
      <ImgCont>
        <Img src={data.img} />
      </ImgCont>
    </Wrapper>
  );
};

export default SaleCard;

const Wrapper = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin: 0px 8px;
  margin-bottom: ${(props) => props.mb};
  background: ${(props) =>
    props.last ? props.theme.red : props.theme.lightGrey};
  cursor: pointer;
  @media ${(props) => props.theme.tablet} {
    width: 33.3%;
    margin-bottom: 0px;
  }
`;
const ImgCont = styled.div`
  padding: 20px 0px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Img = styled.img``;
