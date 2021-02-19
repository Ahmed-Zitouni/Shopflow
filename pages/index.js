import React from "react";
import PageLayout from "../components/PageLayout";
import JumboSaleDisplay from "../components/Landing/JumboSaleDisplay";
import styled from "styled-components";
import ProductGrid from "../components/Landing/ProductGrid";

export default function home() {
  return (
    <PageLayout>
      <JumboSaleDisplay
        img="https://i.ibb.co/vwJrtzm/31h5jn1j2n3ndbgqf1t3.png"
        First
      />
      <MainCont>
        <ProductGrid
          title={"Limited Time Presidents Day Deals"}
          type={"CATEGORY"}
        />
        <ProductGrid title={"Things We Know You'll Love"} type={"PRODUCT"} />
        <JumboSaleDisplay img="https://ak1.ostkcdn.com/img/mxc/20200201-Living-Desktop-BKG.jpg" />
        <CategoryGrid />
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
  @media ${(props) => props.theme.laptop} {
    padding: 0 24px;
  }
`;
