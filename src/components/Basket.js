import React,{useState} from 'react'
import BasketItem from './BasketItem'


function Basket({ basket, products}) {
    return (
        <>
            {   
                basket.map(item => (
                    <BasketItem item={item} product={products.find(p => p.id === item.id)} />
                )) 
            }
        </>
    )
}

export default Basket
