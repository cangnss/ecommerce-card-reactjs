import React from 'react'

function BasketItem({ b }) {
    return (

        <div class="card ms-2 mt-5 text-center" style={{ width: '18rem' }}>
            <img src={b.image} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{b.title}</h5>
                <p class="card-text">{b.description}</p>
                <p class="card-text fs-2 fw-bold">{b.amount}</p>
            </div>
        </div>

    )
}

export default BasketItem
