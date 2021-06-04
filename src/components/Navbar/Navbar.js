import React from 'react';
import { NavbarDiv, NavbarLogo, NavbarList, NavbarUl, NavbarLi } from '../../styles/NavbarStyle/NavbarStyle';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Product from '../Product/Product';
import Basket from '../Basket/Basket';

function Navbar() {
    return (
        //Router yapısını burada kurdum.
        <Router>
            <NavbarDiv>
                <NavbarLogo>
                    Logo
                </NavbarLogo>
                <NavbarList>
                    <NavbarUl>
                        <Link to='/products' style={{textDecoration:'none',color:'black'}}><NavbarLi>Products</NavbarLi></Link>
                        <Link to='/basket' style={{textDecoration:'none',color:'black'}}><NavbarLi>Basket</NavbarLi></Link>
                    </NavbarUl>
                </NavbarList>
            </NavbarDiv>
            <Switch>
                <Route path="/" exact component={Product} />
                <Route path="/basket" component={Basket} />
            </Switch>
        </Router>
    )
}
export default Navbar;