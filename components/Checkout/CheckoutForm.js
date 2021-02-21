import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import styled from 'styled-components';

export default function CheckoutForm(){

    const ReviewSchema = yup.object({
        first_name: yup.string()
        .required()
        .min(1),
        last_name: yup.string()
        .required()
        .min(1),
        address: yup.string()
        .required(),
        zip: yup.string()
        .min(5),
    })

    function autofill(){
        return(<></>)
    }
    return (
        <> 
            <Wrapper>
                <Formik
                    initialValues={{ 
                        email: '',
                        first_name:'',
                        last_name:'',
                        address: '',
                        country:'',
                        zip:'',
                        city:'',
                        state:'',
                        CC:'',
                        CVV:'',
                        month:'',
                        year:'',
                    }}
                    validationSchema={ReviewSchema}
                    validate={values => {
                        const errors = {};
                        if (!values.email) {
                        errors.email = 'Required';
                        } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                        errors.email = 'Invalid email address';
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                        }, 400);
                    }}
                >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <Form1 onSubmit={handleSubmit}>
                        <H1Div>
                            <H1>
                                Billing Address
                            </H1>
                        </H1Div>
                        <Row>
                            <Full>
                                Email Address
                            </Full>
                        </Row>
                        <Row>
                            <Input__Full
                                type="email"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                            {errors.email && touched.email && errors.email}
                        </Row>
                        <Row>
                            <Input__Title__Half>
                                First Name
                            </Input__Title__Half>
                            <Input__Title__Half>
                                Last Name
                            </Input__Title__Half>
                        </Row>
                        <Row>
                            <Input__Half
                                type="text"
                                name="first_name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.first_name}
                            />
                            {errors.first_name && touched.first_name && errors.first_name}
                            <Input__Half
                                type="text"
                                name="last_name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.last_name}
                            />
                            {errors.last_name && touched.last_name && errors.last_name}
                        </Row>
                        <Row>
                            <Full>
                                Address
                            </Full>
                        </Row>
                        <Row>
                            <Input__Full
                                type="text"
                                name="address"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.address}
                            />
                            {errors.address && touched.address && errors.address}
                        </Row>
                        <Row>
                            <Input__Title__Quarter>
                                Country
                            </Input__Title__Quarter>
                            <Input__Title__Quarter>
                                Zip Code
                            </Input__Title__Quarter>
                            <Input__Title__Quarter>
                                City
                            </Input__Title__Quarter>
                            <Input__Title__Quarter>
                                State
                            </Input__Title__Quarter>
                        </Row>
                        <Row>
                            <QSelect
                                type="select"
                                name="country"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.country}
                            >
                                <Option>
                                    United States
                                </Option>
                                <Option>
                                    Canada
                                </Option>
                            </QSelect>
                            <Input__Quarter
                                type="text"
                                name="zip"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.zip}
                            />
                            {errors.zip && touched.zip && errors.zip}
                            <Input__Quarter
                                type="text"
                                name="city"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.city}
                            />
                            {errors.city && touched.city && errors.city}
                            <QSelect
                                type="select"
                                name="state"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.state}
                            >
                                <Option>
                                    New York
                                </Option>
                                <Option>
                                    New Jersey
                                </Option>
                                <Option>
                                    California
                                </Option>
                                <Option>
                                    Pennsylvania
                                </Option>
                            </QSelect>
                        </Row>
                        <H1Div>
                            <H1>
                                Payment Information
                            </H1>
                        </H1Div>
                        <Row>
                            <Radio type="radio" id="card" value="card" name="payment"/>
                            <Label >
                                Credit/Debit Card
                                <ImageDiv>
                                    <img src="https://i.ibb.co/XS6J4PM/20150901-visa.png"/>
                                    <img src="https://i.ibb.co/gVDTzSh/20150901-mc.png"/>
                                </ImageDiv>
                            </Label>
                            <Radio type="radio" id="paypal" value="paypal" name="payment"/>
                            <Label >
                                <ImageDiv>
                                    <img src="https://i.ibb.co/DpnLXd2/20150901-paypal.png"/>
                                </ImageDiv>
                            </Label>
                        </Row>
                        <Row>
                            <Input__Title__CardNum>
                                Card Number
                            </Input__Title__CardNum>
                            <Input__Title__CVV>
                                CVV
                            </Input__Title__CVV>
                        </Row>
                        <Row>
                            <Input__CardNum
                                    type="text"
                                    name="CC"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.CC}
                                />
                            {errors.CC && touched.CC && errors.CC}
                            <Input__CVV
                                    type="text"
                                    name="CVV"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.CVV}
                                />
                            {errors.CVV && touched.CVV && errors.CVV}
                        </Row>
                        <Row>
                            <Date>
                                Expiration Date
                            </Date>
                        </Row>
                        <Row>
                            <DateSelect
                                type="select"
                                name="month"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.month}
                            >
                                <Option>
                                    01 Jan
                                </Option>
                                <Option>
                                    02 Feb
                                </Option>
                                <Option>
                                    03 Mar
                                </Option>
                                <Option>
                                    04 Apr
                                </Option>
                                <Option>
                                    05 May
                                </Option>
                                <Option>
                                    06 Jun
                                </Option>
                                <Option>
                                    07 Jul
                                </Option>
                                <Option>
                                    08 Aug
                                </Option>
                                <Option>
                                    09 Sep
                                </Option>
                                <Option>
                                    10 Oct
                                </Option>
                                <Option>
                                    11 Nov
                                </Option>
                                <Option>
                                    12 Dec
                                </Option>
                            </DateSelect>
                            <DateSelect
                                type="select"
                                name="year"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.year}
                            >
                                <Option>
                                    2021
                                </Option>
                                <Option>
                                    2022
                                </Option>
                                <Option>
                                    2023
                                </Option>
                                <Option>
                                    2024
                                </Option>
                                <Option>
                                    2025
                                </Option>
                                <Option>
                                    2026
                                </Option>
                                <Option>
                                    2027
                                </Option>
                                <Option>
                                    2028
                                </Option>
                                <Option>
                                    2029
                                </Option>
                                <Option>
                                    2030
                                </Option>
                                <Option>
                                    2031
                                </Option>
                                <Option>
                                    2032
                                </Option>
                                <Option>
                                    2033
                                </Option>
                            </DateSelect>
                        </Row>
                    </Form1>
                )}
                </Formik>
            </Wrapper>
        </>
    )
}

/*
<button type="submit" disabled={isSubmitting}>
    Submit
</button>
*/

export const Wrapper = styled.div`
    width:100%;
    height:100%;
    margin-bottom:250px;
`;

export const Form1 = styled.form`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
`;

export const H1Div = styled.div`
    width:100%100px;
    height:50px;
    background-color: #f2f3f4;
    margin:25px 0;
`;

export const H1 = styled.h1`
    height:100%;
    display:flex;
    align-items:center;
    padding-left:10px;
    font-size: 16px;
    font-weight:bold;
    font-family:Helvetica, sans-serif;
    
`;

export const Row = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
`;

export const Full = styled.h2`
    width:100%;
    font-family: Helvetica,Arial,sans-serif;
    font-weight:600;
    font-size:12px;
    padding-bottom:5px;
`;

export const Input__Full = styled.input`
    width:100%;
    padding: 7px 15px;
    background: #fff;
    color: #7b7b7b;
    font-weight: 500;
    border: 1px solid #d5d7d8;
    border-radius: 3px;
    outline: 0;
    font-size: 13px;
    vertical-align: bottom;
    margin-bottom:25px;
`;

export const Input__Title__Half = styled.h2`
    width:50%;
    font-family: Helvetica,Arial,sans-serif;
    font-weight:600;
    font-size:12px;
    padding-bottom:5px;
`;

export const Input__Half = styled.input`
    width:50%;
    padding: 7px 15px;
    background: #fff;
    color: #7b7b7b;
    font-weight: 600;
    border: 1px solid #d5d7d8;
    border-radius: 3px;
    outline: 0;
    font-size: 13px;
    vertical-align: bottom;
    margin-bottom:25px;
    margin-right:5px;
`;

export const Input__Title__Quarter = styled.h2`
    width:25%;
    font-family: Helvetica,Arial,sans-serif;
    font-weight:600;
    font-size:12px;
    padding-bottom:5px;
`;

export const Input__Quarter = styled.input`
    width:25%;
    padding: 7px 15px;
    background: #fff;
    color: #7b7b7b;
    font-weight: 500;
    border: 1px solid #d5d7d8;
    border-radius: 3px;
    outline: 0;
    font-size: 13px;
    vertical-align: bottom;
    margin-right:5px;
`;

export const QSelect = styled.select`
    width:25%;
    padding: 7px 15px;
    background: #fff;
    color: #7b7b7b;
    font-weight: 500;
    border: 1px solid #d5d7d8;
    border-radius: 3px;
    outline: 0;
    font-size: 13px;
    vertical-align: bottom;
    margin-right:5px;
`;

export const Option = styled.option`

`;

export const Radio = styled.input`
    margin-right:10px;
`;

export const Label = styled.label`
    width:50%;
    display:flex;
    flex-direction:column;
`;
export const ImageDiv = styled.div`

`;

export const Input__Title__CardNum = styled.h2`
    width:32%;
    font-family: Helvetica,Arial,sans-serif;
    font-weight:600;
    font-size:12px;
    padding-bottom:5px;
    margin-top:20px;
    margin-left:23px;
`;

export const Input__CardNum = styled.input`
    width:30%;
    padding: 7px 15px;
    background: #fff;
    color: #7b7b7b;
    font-weight: 500;
    border: 1px solid #d5d7d8;
    border-radius: 3px;
    outline: 0;
    font-size: 13px;
    vertical-align: bottom;
    margin-bottom:20px;
    margin-left:23px;
`;

export const Input__Title__CVV = styled.h2`
    width:15%;
    font-family: Helvetica,Arial,sans-serif;
    font-weight:600;
    font-size:12px;
    padding-bottom:5px;
    margin-top:20px;
`;

export const Input__CVV = styled.input`
    width:15%;
    padding: 7px 15px;
    background: #fff;
    color: #7b7b7b;
    font-weight: 500;
    border: 1px solid #d5d7d8;
    border-radius: 3px;
    outline: 0;
    font-size: 13px;
    vertical-align: bottom;
    margin-left:10px;
    margin-bottom:20px;
`;

export const DateSelect = styled.select`
    width:20%;
    padding: 7px 15px;
    background: #fff;
    color: #7b7b7b;
    font-weight: 500;
    border: 1px solid #d5d7d8;
    border-radius: 3px;
    outline: 0;
    font-size: 13px;
    vertical-align: bottom;
    margin-right:10px;
    margin-left:23px;
`;

export const Date = styled.h2`
    width:100%;
    font-family: Helvetica,Arial,sans-serif;
    font-weight:600;
    font-size:12px;
    padding-bottom:5px;
    margin-left:23px;
`;