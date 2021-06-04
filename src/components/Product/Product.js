import React from 'react'
import {ProductMainDiv, ProductDiv, ProductImgDiv, ProductName, ProductCategoryName, ProductPrice, ProductDescription, ProductOperations, DecreaseButton, Quantity, IncreaseButton } from '../../styles/ProductStyle/ProductStyle'

function Product(props) {

    return (
        //Burada styled-components ile css verdim ve datafetching den dönen verileri burada listelettim.
        <ProductMainDiv>
            <ProductDiv>
                <ProductImgDiv>
                    <img src={props.image} className="img-fluid p-1" />
                </ProductImgDiv>
                <ProductName>
                    {props.title}<ProductCategoryName>/{props.category}</ProductCategoryName>
                </ProductName>
                <ProductPrice>
                    ${props.price}
                </ProductPrice>
                <ProductDescription>
                    {props.description}
                </ProductDescription>
                <ProductOperations className="p-3">
                    <DecreaseButton>
                        <i class="fas fa-minus fa-2x"></i>
                    </DecreaseButton>
                    <Quantity>
                        0
                    </Quantity>
                    <IncreaseButton>
                        <i class="fas fa-plus fa-2x"></i>
                    </IncreaseButton>
                </ProductOperations>
            </ProductDiv>
        </ProductMainDiv>
    )
}
export default Product;