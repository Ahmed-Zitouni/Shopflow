import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import {
  BsSearch,
  BsFillTagFill,
  BsFillPersonFill,
  BsBell,
} from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import Hamburger from "hamburger-react";

export default function Navbar() {
  const [windowDimension, setWindowDimension] = useState(null);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const mini = windowDimension <= 800;
  const isMobile = windowDimension <= 1000;
  const isTablet = windowDimension <= 1200;

  return (
    <Wrapper>
      <Container>
        {isOpen ? (
          <MobileContainer>
            <MobileSelect>
              <MobileLogo></MobileLogo>
              <Heading></Heading>
              <Category></Category>
            </MobileSelect>
            <Shadow></Shadow>
          </MobileContainer>
        ) : null}
        <TopNav>
          {isMobile && <Hamburger toggled={isOpen} toggle={setOpen} />}
          {!mini && <Logo>Overstock</Logo>}
          <SearchBar>
            <Search type="text" placeholder="Search" />
            <SBtn>
              <BsSearch />
            </SBtn>
          </SearchBar>
          <NavIcons>
            {!mini ? (
              <IconDiv>
                <Icon href="#">
                  <BsFillTagFill />
                </Icon>

                {!isTablet ? <IconText href="#">Deals</IconText> : null}
              </IconDiv>
            ) : null}
            {!isTablet ? (
              <IconDiv>
                <Icon href="#">
                  <BsFillPersonFill />
                </Icon>
                <IconText href="#">Account</IconText>
              </IconDiv>
            ) : null}
            {!mini ? (
              <IconDiv>
                <Icon href="#">
                  <BsBell />
                </Icon>
                {!isTablet ? <IconText href="#">Notifications</IconText> : null}
              </IconDiv>
            ) : null}
            <IconDiv>
              <Icon href="#">
                <FiShoppingCart />
              </Icon>
              {!isTablet ? <IconText href="#">Cart</IconText> : null}
            </IconDiv>
          </NavIcons>
        </TopNav>
        {!isMobile ? (
          <Categories>
            <Item>
              <ItemLink href="#">Furniture</ItemLink>
              <HoverDiv></HoverDiv>
            </Item>
            <Item>
              <ItemLink href="#">Rugs</ItemLink>
              <HoverDiv></HoverDiv>
            </Item>
            <Item>
              <ItemLink href="#">Decor</ItemLink>
              <HoverDiv></HoverDiv>
            </Item>
            <Item>
              <ItemLink href="#">Bedroom</ItemLink>
              <HoverDiv></HoverDiv>
            </Item>
          </Categories>
        ) : null}
      </Container>
    </Wrapper>
  );
}
const Wrapper = Styled.div`
    width:100%;
    height:125px;
    display:flex;
    justify-content:space-around;
    align-items:center;
    position:fixed;
    font-family: 'Helvetica', 'Arial', sans-serif;
    background:white;
`;

const Container = Styled.div`
    width:100%;
    height:125px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

const MobileContainer = Styled.div`
    width:100%;
    height:100%
    display:flex;
    flex-direction:row;
`;

const MobileSelect = Styled.div`
    position:absolute;
    width:45%;
    height:100%;
`;

const MobileLogo = Styled.div`

`;

const Heading = Styled.div`

`;

const Category = Styled.div`

`;

const Shadow = Styled.div`
    position:absolute;
    width:55%;
    background:rgba(0,0,0,.15);
`;

const TopNav = Styled.div`
    width:100%;
    height:100px;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    border-bottom:1px solid #dadcdf;
`;

const Logo = Styled.div`
    font-size:30px;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:row;
`;

const SearchBar = Styled.div`
    width:60%;
    height:35px;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:row;
`;

const Search = Styled.input`
    width:85%;
    height:25px;
    border: 1px solid #dadcdf;
    border-top-left-radius:5px;
    border-bottom-left-radius:5px;
    padding:5px;
    font-size:15px;
`;

const SBtn = Styled.button`
    height:35px;
    color: white;
    background:red;
    font-size:16px;
    border-top-right-radius:5px;
    border-bottom-right-radius:5px;
`;

const NavIcons = Styled.div`
    width:20%;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
`;

const IconDiv = Styled.div`
    width: 25%;
    height:auto;
    display:flex;
    flex-direction:column;
    justify-content:center;

`;

const Icon = Styled.a`
    width:100%;
    height:100%;
    font-size:20px;
    display:flex;
    justify-content:center;
    text-decoration:none;
    color: black;
    @media only screen and (max-width: 1200px){
        font-size:30px;
    }
`;

const IconText = Styled.a`
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    font-size:14px;
    text-decoration:none;
    color: black;
`;

const Categories = Styled.div`
    width:100%;
    height:35px;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    border-bottom:1px solid #dadcdf;
`;

const HoverDiv = Styled.div`
    width:400px;
    height:200px;
    position:absolute;
    background:black;
    top:125px;
    display:none;
`;

const Item = Styled.div`
    width:50px;
    height:35px;
    display:flex;
    flex-direction:row;
    
    align-items:center;
    margin:0 40px;
    &:hover{
        ${HoverDiv}{
            display:flex;
        }
    }
`;

const ItemLink = Styled.a`
    text-decoration:none;
    color: black;
`;
