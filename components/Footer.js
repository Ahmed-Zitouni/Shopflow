import React from "react"
import Styled from "styled-components"

export default function Footer(){
    return(
        <Wrapper>
            <Container>
                <FooterLinks>
                    <Column>
                        <ColumnTitle>
                            MY ACCOUNT
                        </ColumnTitle>
                        <LinkDiv>
                            <Link>
                                Orders and Returns
                            </Link>
                        </LinkDiv>
                        <LinkDiv>
                            <Link>
                                My Reviews
                            </Link>
                        </LinkDiv>
                        <LinkDiv>
                            <Link>
                                Account Settings
                            </Link>
                        </LinkDiv>
                    </Column>
                    <Column>
                        <ColumnTitle>
                            LET US HELP
                        </ColumnTitle>
                        <LinkDiv>
                            <Link>
                                Customer Service
                            </Link>
                        </LinkDiv>
                        <LinkDiv>
                            <Link>
                                Shipping Information
                            </Link>
                        </LinkDiv>
                        <LinkDiv>
                            <Link>
                                Accessibility
                            </Link>
                        </LinkDiv>
                    </Column>
                    <Column>
                        <ColumnTitle>
                            COMPANY INFORMATION
                        </ColumnTitle>
                        <LinkDiv>
                            <Link>
                                About
                            </Link>
                        </LinkDiv>
                        <LinkDiv>
                            <Link>
                                Careers
                            </Link>
                        </LinkDiv>
                        <LinkDiv>
                            <Link>
                                NewsRoom
                            </Link>
                        </LinkDiv>
                        <LinkDiv>
                            <Link>
                                Equity
                            </Link>
                        </LinkDiv>
                    </Column>
                    <Column>
                        <ColumnTitle>
                            SHOPPING
                        </ColumnTitle>
                        <LinkDiv>
                            <Link>
                                Overstock Coupons
                            </Link>
                        </LinkDiv>
                        <LinkDiv>
                            <Link>
                                Deals
                            </Link>
                        </LinkDiv>
                        <LinkDiv>
                            <Link>
                                Clearance
                            </Link>
                        </LinkDiv>
                        <LinkDiv>
                            <Link>
                                New Arrivals
                            </Link>
                        </LinkDiv>
                    </Column>
                </FooterLinks>
                <LegalInfo>
                    <CopyRight>
                        © Copyright 2021, Overstock Inc. 
                        All Rights Reserved
                    </CopyRight>
                    <Info>
                        <InfoLink>
                            Privacy Policy
                        </InfoLink>
                        <InfoLink>
                            Terms and Conditions
                        </InfoLink>
                        <InfoLink>
                            Promotional Terms
                        </InfoLink>
                    </Info>
                </LegalInfo>
            </Container>
        </Wrapper>
    )
}
export const Wrapper = Styled.div`
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:#444;
    color:white;
    font-family: 'Helvetica', 'Arial', sans-serif;
`;

export const Container = Styled.div`
    width:90%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
`;

export const FooterLinks = Styled.div`
    width:100%;
    height:80%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:row;
`;

export const Column = Styled.div`
    width:25%;
    height:auto;
    dispplay:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

export const ColumnTitle = Styled.div`
    padding:20px;
    font-weight:600;
`;

export const LinkDiv = Styled.div`
    padding:20px;
`;

export const Link = Styled.a`
    
`;

export const LegalInfo = Styled.div`
    width:100%;
    height:20%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding-top:100px;
`;

export const CopyRight = Styled.div`
    padding:25px;
`;

export const Info = Styled.div`

`;

export const InfoLink = Styled.a`
    padding:25px;
`;