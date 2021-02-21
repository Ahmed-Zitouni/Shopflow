import React,{useState,useEffect} from "react"
import styled from "styled-components"
import CartDisplay from "./CartDisplay"
import CheckoutForm from "./CheckoutForm"

export default function CheckoutContent(){
    const [NumItems,updateNumItems] = useState()
    const[TotalPrice,updateTotalPrice] = useState(0)

    let url1= "https://ak1.ostkcdn.com/images/products/9273417/Becky-Cameron-Luxury-Ultra-Soft-4-piece-Bed-Sheet-Set-09df3c6e-276b-4f61-afe4-0c0328d63570_600.jpg"
    let url2="https://ak1.ostkcdn.com/images/products/9273417/Becky-Cameron-Luxury-Ultra-Soft-4-piece-Bed-Sheet-Set-09df3c6e-276b-4f61-afe4-0c0328d63570_600.jpg"
    
    const ItemArray = [
        {
            imageURL:url1,
            productName:"Black Bed sheet",
            color:"Black",
            price:99.99,
            quantity:3,
            id:0
        },
        {
            imageURL:url2,
            productName:"Blue Bed sheet",
            color:"Blue",
            price:99.99,
            quantity:1,
            id:1
        }
    ]
    //Initialize the Price and total amount of products
    useEffect(() => {
        let x = 0;
        let y = 0;
        ItemArray.map(
            (item)=>{
                x+=((item.price)*(item.quantity))
                y+=item.quantity
            }
        )
        updateTotalPrice(x)
        updateNumItems(y)
      }, []);

      //Update total price and amount of items on change
      function updateNums({newVal,id}){
        console.log(newVal)
        console.log(id)
        let x = 0;
        let y = 0;
        ItemArray[id].quantity = newVal
        ItemArray.map(
            (item)=>{
                x+=(item.price*item.quantity)
                y+=item.quantity
            }
        )
        updateTotalPrice(x)
        updateNumItems(y)
      }

    return(
        <Wrapper>
            <Container>
                <Col1>
                    <CartDisplay 
                        ItemArray={ItemArray}
                        updateNums={()=>updateNums()}
                    />
                    
                    <CheckoutForm />
                </Col1>
                <Col2>
                    <Wrap>
                        <Checkout>
                            <Top>
                                <Row>
                                    <Bold>
                                        ({NumItems})Items:
                                    </Bold>
                                    <Bold>
                                        ${TotalPrice.toFixed(2)}
                                    </Bold>
                                </Row>
                                <Row>
                                    <Text>
                                        Promotional Savings:
                                    </Text>
                                    <Red>
                                        $0
                                    </Red>
                                </Row>
                                <Row>
                                    <Bold>
                                        Subtotal After Discounts
                                    </Bold>
                                    <Bold>
                                        ${TotalPrice.toFixed(2)}
                                    </Bold>
                                </Row>
                            </Top>
                            <Bottom>
                                <Row>
                                    <Text>
                                        Shipping:
                                    </Text>
                                    <Bold>
                                        FREE
                                    </Bold>
                                </Row>
                                <Row>
                                    <Text>
                                        Estimated Tax:
                                    </Text>
                                    <Text>
                                        ${(TotalPrice*.1).toFixed(2)}
                                    </Text>
                                </Row>
                                <Button>
                                    Submit Order
                                </Button>
                            </Bottom>
                        </Checkout>
                    </Wrap>
                </Col2>
            </Container>
        </Wrapper>
    )
}

export const Wrapper = styled.div`
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
`;

export const Container = styled.div`
    width:60%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:row;
`;

export const Col1 = styled.div`
    width:60%;
`;

export const Col2 = styled.div`
    width:40%;
    height:100%;
`;

export const Wrap = styled.div`
    width:21.8%;
    height:32%;
    border: 1px solid #e7e8ea;
    margin-left:40px;
    position:fixed;
    top:183px;
`;

export const Checkout = styled.div`
    padding:25px;
    width:100%;
    height:100%;
`;

export const Top = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    border-bottom:1px solid #e7e8ea;
    
`;

export const Bottom = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

export const Row = styled.div`
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-direction:row;
    padding:10px 0;
`;

export const Text = styled.div`
    color: #2f3337;
    line-height:1.5;
`;

export const Bold = styled.div`
    font-weight:700;
    color: #2f3337;
    line-height:1.5;
`;

export const Red = styled.div`
    color:red;
    line-height:1.5;
`;

export const Button = styled.button`
    width:100%;
    background-color: #27865f;
    color: #fff;
    font-size: 18px;
    border-radius: 4px;
    outline: none;
    font-family: Helvetica,Arial,sans-serif;
    height: 44px;
    padding: 0 20px;
    border:none;
    margin: 0 20px;
`;