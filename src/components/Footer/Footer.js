import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <footer>
            <div className="footer-container btm-footer">
                <div className="row margin-btm-tp-3">
                    <div className="col-md-12 col-sm-12 col-xs-12 text-center footer-icons xs-center-text xs-margin-btm-1"> 
                        <a target="_blank" href="#"> <i className="fa fa-facebook"></i> </a> 
                        <a target="_blank" href="#"> <i className="fa fa-twitter"></i> </a> 
                        <a target="_blank" href="#"> <i className="fa fa-youtube"></i> </a> 
                        <a target="_blank" href="#"> <i className="fa fa-linkedin"></i> </a>
                    </div>
                </div>
                 <div className="row">
                    <p className="text-center">All rights reserved - 2022<a href="#">©Pintu - FitnessTrainer</a></p></div></div> 
                                                        
                </footer>
            
               
               
                                        
        </div>
    );
};

export default Footer;