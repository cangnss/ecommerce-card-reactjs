import React from 'react'
import { ProductMainDiv, ProductDiv, ProductImgDiv, ProductNameDiv, ProductName, ProductCategoryName, ProductPrice, ProductDescription, ProductOperations, DecreaseButton, Quantity, IncreaseButton, Favorite, ButtonsOperationDiv, AddBasketButton, RemoveBasketButton } from '../styles/ProductStyle/ProductStyle'

function Product({ product, basket, setBasket }) {

    const addBasket = () => {
        const checkBasket = basket.find(item => item.id === product.id)
        if (checkBasket) {
            checkBasket.amount += 1
            setBasket([...basket.filter(item => item.id !== product.id), checkBasket])
        } else {
            setBasket([...basket, {
                id: product.id,
                title: product.title,
                image: product.image,
                description: product.description,
                amount: 1
            }])
        }

    }

    const deleteBasket = () => {
        const checkBasket = basket.find(item => item.id === product.id);
        checkBasket.amount -= 1;
        if (checkBasket.amount === 0) {
            setBasket([...basket.filter(item => item.id !== product.id)])
        } else {
            setBasket([...basket.filter(item => item.id !== product.id)])
        }
    }
    // const [favori, setFavori] = useState([]);
    
    const basketItem = basket.find(item => item.id === product.id);
    return (
        //Burada styled-components ile css verdim ve datafetching den dönen verileri burada listelettim.
        <ProductMainDiv>
            <ProductDiv>
                <ProductImgDiv>
                    <img src={product.image} className="img-fluid p-1" />
                </ProductImgDiv>
                <ProductNameDiv>
                    <ProductName>
                        {product.title}<ProductCategoryName>/{product.category}</ProductCategoryName>
                    </ProductName>
                </ProductNameDiv>
                <ProductPrice>
                    ${product.price}
                </ProductPrice>
                <ProductDescription>
                    {product.description}...
                </ProductDescription>
                <ProductOperations>
                    <DecreaseButton onClick={deleteBasket}>
                        <i class="fas fa-minus fa-2x"></i>
                    </DecreaseButton>
                    <Quantity>
                        {basketItem && basketItem.amount || 0}
                    </Quantity>
                    <IncreaseButton onClick={addBasket}>
                        <i class="fas fa-plus fa-2x"></i>
                    </IncreaseButton>
                    <Favorite>
                        <i class="fas fa-star fa-2x"></i>
                    </Favorite>
                </ProductOperations>
            </ProductDiv>
        </ProductMainDiv>

    )
}

export default Product;