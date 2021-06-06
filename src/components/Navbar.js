import React from 'react';
import { NavbarDiv, NavbarLogo, NavbarList, NavbarUl, NavbarLi } from '../styles/NavbarStyle/NavbarStyle';
import { Link } from 'react-router-dom';

function Navbar({total}) {
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
                        <NavbarLi>{total}</NavbarLi>
                    </NavbarUl>
                </NavbarList>
            </NavbarDiv>
        </>
    )
}
export default Navbar;