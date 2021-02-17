import React from "react"
import Styled from "styled-components"

export default function JumboSaleDisplay(props){
    return(
        <Wrapper>
            <Container>
                <SaleImg 
                    src={props.imageURL}
                />
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
    padding-top:125px;
`;

export const Container = Styled.div`
    width:95%;
    height:100%;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
`;

export const SaleImg = Styled.img`
    width:100%;
`;