import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import styled from "styled-components";

const PageLayout = (props) => {
  return (
    <Wrapper>
      <MainCont>
        <NavBar />
        {props.children}
      </MainCont>
      <Footer />
    </Wrapper>
  );
};

export default PageLayout;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background: white;
`;
const MainCont = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background: white;
  max-width: 1680px;
  flex-direction: column;
  line-height: 1.2;
`;
