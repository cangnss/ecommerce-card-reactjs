import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ProductContainers from './containers/ProductContainers';
import Navbar from './components/Navbar';
import {Route, Switch } from 'react-router-dom';
import Basket from './components/Basket';

function App() {

  const [products, setProducts] = useState([])
  const [total, setTotal] = useState(0)
  const [basket, setBasket] = useState([])

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products?limit=20') //axios paketi ile verileri çektik.
      .then(response => {
        //console.log(response);
        setProducts(response.data)
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    setTotal(
      basket.reduce((acc, item) => {
        return acc + (item.amount * (products.find(product => product.id === item.id).price))
      }, 0))
  }, [basket,products])

  return (
    <div className="App">
      <Navbar total={total} />
      <Switch>
        <Route exact path="/">
          <ProductContainers products={products} basket={basket} setBasket={setBasket}/>
        </Route>
        <Route path="/basket">
          <Basket basket={basket} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
