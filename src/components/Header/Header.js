import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/light-logo.png'
import './Header.css'

const Header = () => {

    // Sign out process 
    const [user] = useAuthState(auth);

    const handleSignOut = () =>{
        signOut(auth);
    }

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
                    {
                        user ?
                        <button className='logut-btn' onClick={handleSignOut}>Log out</button>
                        :
                        <Link to="/Login">LOGIN</Link>
                    }
                    
                    
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;