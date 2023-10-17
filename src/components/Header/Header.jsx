import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <nav className='header'>
            {/* <h2>This is Header</h2> */}
            <img src={logo}></img>
            {/* a*4[href=$]{$} */}
            <div>
            <a href="/shop">Shop</a>
            <a href="/order">Order</a>
            <a href="/inventory">Inventory</a>
            <a href="/login">Login</a>
            </div>

        </nav>
    );
};

export default Header;