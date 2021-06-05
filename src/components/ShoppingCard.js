import React from 'react'
import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import axios from 'axios'
import Product from './Product'
import Basket from './Basket';


function ShoppingCard() {

    const [products, setProducts] = useState([])
    const [basket, setBasket] = useState([])
    const [total, setTotal] = useState(0)


    useEffect(() => {
        axios.get('https://fakestoreapi.com/products?limit=20') //axios paketi ile verileri çektik.
            .then(response => {
                //console.log(response);
                setProducts(response.data)
            })
            .catch(err => {
                console.log(err);
            });

        setTotal(
            basket.reduce((acc, item) => {
                return acc + (item.amount * (products.find(product => product.id === item.id).price))
            }, 0))
    }, [basket]);
    return (
        <div>
            <Navbar price={total} />
            <div className="ms-5 mt-3">
                <span className="display-4 fw-bold">Basket:</span>
                <Basket products={products} basket={basket} />
            </div>
            <div className="d-flex flex-wrap">
                {products.map(product => (
                    <Product product={product} key={product.id} basket={basket} setBasket={setBasket} />
                ))
                }
            </div>
        </div>
    )
}

export default ShoppingCard
