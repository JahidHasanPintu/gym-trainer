import React from 'react';
import logo from '../../images/light-logo.png'
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='fluid'>
                <div className="container fixed-top">
                    <div className="logo">
                        <img className='img-fluid logo-img' src={logo} alt="" />
                    </div>
                    <div className="nav-links">
                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <a href="#">Service</a>
                        <a href="#">Product</a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;