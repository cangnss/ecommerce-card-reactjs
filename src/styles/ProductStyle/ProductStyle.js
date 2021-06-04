import styled from "styled-components";

export const ProductMainDiv = styled.div`
    width:300px;
    margin-right: 20px;
`;

export const ProductDiv = styled.div`
    width: 300px;
    height: auto;
    border-radius: 15px;
    border: 1px solid black;
    margin-left: 20px;
    margin-top: 100px;
    margin-right: 10px;
    text-align: center;
    padding-bottom: 5px;
`;

export const ProductImgDiv = styled.div`
    width: auto;
    height: auto;
    img{
        border-radius: 15px;
    }
`;

export const ProductName = styled.h4`
    font-weight: bold;
`;

export const ProductCategoryName = styled.span`
    font-weight: normal;
    font-size: 14px;
`;

export const ProductPrice = styled.p`
    font-size: 24px;
    font-weight: 400;
`;

export const ProductDescription = styled.p`
    font-size: 14px;
    font-weight: normal;
`;

export const ProductOperations = styled.div`
    width: auto;
    height:auto;
    background-color: white;
    display: flex;
`;


export const DecreaseButton = styled.div`
    width: 100px;
    height: 50px;
    background-color: red;
    border-radius:15px;
    i{
        margin-top: 10px;
        color:white;
    }
`;
export const IncreaseButton = styled.div`
    width: 100px;
    height: 50px;
    background-color: green;
    border-radius:15px;
    i{
        margin-top: 10px;
        color:white;
    }
`;
export const Quantity = styled.span`
    font-size: 24px;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 10px;
`;