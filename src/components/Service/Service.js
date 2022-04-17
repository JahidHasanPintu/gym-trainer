import React from 'react';
import './Service.css'

const Service = (props) => {
    const {name,img,review,rating}=props.service;
    
    return (

        <div className='service col-sm-12 col-md-4'>
           
            
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h4>Rating: {rating}</h4>
            <p>{review}</p>
            <div className="bg-buy-plan">
                <span className="title4">Buy Plan</span>
            </div>
        </div>
    );
};

export default Service;