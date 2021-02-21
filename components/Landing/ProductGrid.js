import React from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";
import CategoryCard from "./CategoryCard";

const ProductGrid = ({ title, type }) => {
  const data = [
    {
      name: "Superior 600 Thread Count Deep Pocket Polka Dot",
      price: "Sale: $37.82 - $58.22",
      url: "",
      img:
        "https://ak1.ostkcdn.com/images/products/30970062/INK-IVY-Lennon-Organic-Cotton-Jacquard-Duvet-Cover-Set-f719d85a-198f-40e0-ba81-fa863f2b9f39_600.jpg?imwidth=320",
    },
    {
      name: "Superior 600 Thread Count Deep Pocket Polka Dot",
      price: "Sale: $37.82 - $58.22",
      url: "",
      img:
        "https://ak1.ostkcdn.com/images/products/30970062/INK-IVY-Lennon-Organic-Cotton-Jacquard-Duvet-Cover-Set-f719d85a-198f-40e0-ba81-fa863f2b9f39_600.jpg?imwidth=320",
    },
    {
      name: "Superior 600 Thread Count Deep Pocket Polka Dot",
      price: "Sale: $37.82 - $58.22",
      url: "",
      img:
        "https://ak1.ostkcdn.com/images/products/30970062/INK-IVY-Lennon-Organic-Cotton-Jacquard-Duvet-Cover-Set-f719d85a-198f-40e0-ba81-fa863f2b9f39_600.jpg?imwidth=320",
    },
    {
      name: "Superior 600 Thread Count Deep Pocket Polka Dot",
      price: "Sale: $37.82 - $58.22",
      url: "",
      img:
        "https://ak1.ostkcdn.com/images/products/30970062/INK-IVY-Lennon-Organic-Cotton-Jacquard-Duvet-Cover-Set-f719d85a-198f-40e0-ba81-fa863f2b9f39_600.jpg?imwidth=320",
    },
    {
      name: "Superior 600 Thread Count Deep Pocket Polka Dot",
      price: "Sale: $37.82 - $58.22",
      url: "",
      img:
        "https://ak1.ostkcdn.com/images/products/30970062/INK-IVY-Lennon-Organic-Cotton-Jacquard-Duvet-Cover-Set-f719d85a-198f-40e0-ba81-fa863f2b9f39_600.jpg?imwidth=320",
    },
    {
      name: "Superior 600 Thread Count Deep Pocket Polka Dot",
      price: "Sale: $37.82 - $58.22",
      url: "",
      img:
        "https://ak1.ostkcdn.com/images/products/30970062/INK-IVY-Lennon-Organic-Cotton-Jacquard-Duvet-Cover-Set-f719d85a-198f-40e0-ba81-fa863f2b9f39_600.jpg?imwidth=320",
    },
  ];
  return (
    <Wrapper>
      <Header>
        <H2>{title}</H2>
      </Header>
      <MainCont>
        {type === "PRODUCT" && data.map((info) => <ProductCard data={info} />)}
        {type === "CATEGORY" &&
          data.map((info) => <CategoryCard data={info} />)}
      </MainCont>
    </Wrapper>
  );
};

export default ProductGrid;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin-bottom: 100px;
`;
const Header = styled.div`
  display: flex;
  padding-bottom: 70px;
  justify-content: center;
`;
const H2 = styled.h2`
  font-size: 38px;
  font-weight: 500;
`;
const MainCont = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 50px 20px;
  @media ${(props) => props.theme.tablet} {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 50px 20px;
  }
  @media ${(props) => props.theme.laptop} {
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(1, 1fr);
    gap: 0px 20px;
  }
`;
