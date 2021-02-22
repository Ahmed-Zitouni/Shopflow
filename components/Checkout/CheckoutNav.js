import React from "react"
import styled from "styled-components"
import{AiOutlineLock} from "react-icons/ai"

export default function CheckoutNav(){
    return(
        <Wrapper>
            <Container>
                <Logo>
                    Overstock
                </Logo>
                <Checkout>
                    <Icon>
                        <AiOutlineLock />
                    </Icon>
                    <Text>
                        Checkout
                    </Text>
                </Checkout>
            </Container>
        </Wrapper>
    )
}

export const Wrapper = styled.div`
    width:100%;
    height:auto;
    display:flex;
    justify-content:center;
    align-items:center;
`;

export const Container = styled.div`
    width:60%;
    height:auto;
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-direction:row;
    border-bottom:1px solid #dadcdf;
    @media (max-width:1200px){
        width:100%;
    }
`;

export const Logo = styled.div`
    font-size:32px;
    font-weight:400;
    padding:25px;
`;

export const Checkout = styled.div`
    padding:25px;
    display:flex;
    flex-direction:row;
    align-items:center;
`;

export const Icon = styled.div`
    font-size:20px;
    display:flex;
    align-items:center;
`;

export const Text = styled.div`
    font-size: 20px;
    font-weight: 700;
    display:flex;
    align-items:center;
    padding-left:10px;
`;