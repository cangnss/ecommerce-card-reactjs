import React from 'react';
import { NavbarDiv, NavbarLogo, NavbarList, NavbarUl, NavbarLi } from '../styles/NavbarStyle/NavbarStyle';
import { Route, Link, Switch } from 'react-router-dom';
import Product from './Product';
import Basket from './Basket';
import ShoppingCard from './ShoppingCard';

function Navbar(props) {
    return (
        //Router yapısını burada kurdum.
        <>
                <NavbarDiv>
                    <NavbarLogo>
                        Logo
                    </NavbarLogo>
                    <NavbarList>
                        <NavbarUl>
                            <Link to='/products' style={{ textDecoration: 'none', color: 'black' }}><NavbarLi>Products</NavbarLi></Link>
                            <Link to='/basket' style={{ textDecoration: 'none', color: 'black' }}><NavbarLi>Basket</NavbarLi></Link>
                            <Link to='/favori' style={{ textDecoration: 'none', color: 'black' }}><NavbarLi>Favori</NavbarLi></Link>
                            <NavbarLi>{props.price}</NavbarLi>
                        </NavbarUl>
                    </NavbarList>
                </NavbarDiv>
                <Switch>
                    <Route path="/basket" component={Basket} />
                    {/* <Route path="/favori" exact component={Favori} /> */}
                    <Route path="/products" component={Product} />
                </Switch>
        </>
    )
}
export default Navbar;