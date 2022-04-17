import React from 'react';
import { Link } from 'react-router-dom';
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
                    <Link to="/home">HOME</Link>
                    
                    <Link to="/Reviews">BLOGS</Link>
                    <Link to="/Dashboard">Checkout</Link>
                    <Link to="/Blogs">ABOUT</Link>
                    <Link to="/About">Login</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;