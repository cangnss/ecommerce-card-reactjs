import React from 'react'
import BasketItem from './BasketItem'

function Basket({ basket }) {
    console.log('basket',basket)
    return (
        <div className="d-flex flex-wrap">
            {basket.map((b)=>(
                <BasketItem key={b.id} b={b}  />
            ))}
        </div>
    )
}

export default Basket
