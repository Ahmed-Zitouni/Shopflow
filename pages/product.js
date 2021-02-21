import React from "react";
import styled from "styled-components";
import PageLayout from "../components/PageLayout";
import Product from "../components/ProductPage/Product";
import OverView from "../components/ProductPage/Overview";
import Returns from "../components/ProductPage/Returns";

export default function ProductPage() {
  return (
    <PageLayout type={"PRODUCT"}>
      <MainCont>
        <Product />
        <OverView />
        <Returns />
      </MainCont>
    </PageLayout>
  );
}
const MainCont = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  height: 100%;
  justify-content: center;
  padding: 0 24px;
  @media ${(props) => props.theme.laptop} {
  }
`;
