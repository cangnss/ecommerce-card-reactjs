import styled from "styled-components";

export const ProductMainDiv = styled.div`
    width:350px;
    margin-right: 5px;
    margin-bottom: 20px;
    margin-left: 50px;
`;

export const ProductDiv = styled.div`
    display: flex;
    flex-direction: column;  
    border-radius: 15px;
    border: 1px solid black;
    margin-left: 20px;
    margin-top: 100px;
    text-align: center;
    padding-bottom: 5px;
`;

export const ProductImgDiv = styled.div`
    img{
        width: 200px;
        height: 200px;
        border-radius: 15px;
        margin-bottom: 20px;

    }
`;

export const ProductNameDiv = styled.div`
    width: auto;
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
    width: auto;
    font-size: 18px;
    font-weight: normal;
`;

export const ProductOperations = styled.div`
    background-color: white;
    display: flex;
    margin-left: 30px;
    margin-bottom: 10px;
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

export const Favorite = styled.div`
    
`;

