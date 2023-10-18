import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='header'>
            {/* <h2>This is Header</h2> */}
            <img src={logo}></img>
            {/* a*4[href=$]{$} */}
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
            </div>

        </nav>
    );
};

export default Header;