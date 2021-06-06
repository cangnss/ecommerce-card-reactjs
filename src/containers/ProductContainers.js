import React, {useState,useEffect} from 'react'
import Product from '../components/Product'
import Basket from '../components/Basket'

function ProductContainers({ products, basket, setBasket }) {
    console.log('pc',basket)
    return (
        <div className="d-flex flex-wrap">
            {products.map((product)=>(
                <Product key={product.id} product={product} basket={basket} setBasket={setBasket} />
            ))}
        </div>
    )
}

export default ProductContainers
