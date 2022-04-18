import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/light-logo.png'
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='fluid'>
                <div className="container-head fixed-top">
                    <div className="logo">
                        <img className='img-fluid logo-img' src={logo} alt="" />
                    </div>
                    <div className="nav-links">
                    <Link to="/Home">HOME</Link>
                    
                    <Link to="/Blogs">BLOGS</Link>                    
                    <Link to="/About">ABOUT</Link>
                    <Link to="/Checkout">CHECKOUT</Link>
                    <Link to="/Login">LOGIN</Link>
                    
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;