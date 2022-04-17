import React from 'react';
import './Service.css'

const Service = (props) => {
    const {name,img,review,rating}=props.service;
    
    return (

        <div className='service'>
           
            
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h4>Rating: {rating}</h4>
            <p>{review}</p>
        </div>
    );
};

export default Service;