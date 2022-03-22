import React from 'react';
import Logo from "./../../images/Logo.svg";
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='navBar'>
                <img src={Logo} alt="" />
                <div>
                    <a href="">Order</a>
                    <a href="">Order Review</a>
                    <a href="">Manage Inventory</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;