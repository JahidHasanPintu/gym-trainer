import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";


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
            <nav className="navbar navbar-expand-lg navbar-light header fixed-top">
                <div className="container ">
                    
                        
                    <Link className="navbar-brand " to="/"><img className='img-fluid logo-img' src={logo} alt="" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span><img src="icons/menu-2 1.svg" alt="" /></span>
                        <FontAwesomeIcon className='text-white' icon={faBars}></FontAwesomeIcon>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link active fw-bold text-white" aria-current="page" to="/home">HOME</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active fw-bold text-white" aria-current="page" to="/Blogs">BLOGS</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link active fw-bold text-white"
                                    to="/About">ABOUT</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active fw-bold text-white"
                                    to="/Checkout">CHECKOUT</Link>
                            </li>
                    
                            <li className="nav-item">
                                {
                                    user ?
                                    <button className='logut-btn' onClick={handleSignOut}>Log out</button>
                                        :
                                        <Link className="nav-link active fw-bold text-white" to="/Login">LOGIN</Link>}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;