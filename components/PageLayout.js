import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const PageLayout = (props) => {
  return (
    <>
      <NavBar />
      {props.children}
      <Footer />
    </>
  );
};

export default PageLayout;
