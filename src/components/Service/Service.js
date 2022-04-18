import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const {id,name,img,description,price}=props.service;
    const navigate = useNavigate();
    const navigateToCheckout = id =>{
        navigate(`/service/${id}`);
    }
    
    return (

        <div className='service col-sm-12 col-md-4'>
           
            
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h6>price: ${price} /month</h6>
            <p>{description}</p>
            <div onClick={()=> navigateToCheckout(id)} className="bg-buy-plan">
                <span  className="title4">Buy Plan</span>
            </div>
        </div>
    );
};

export default Service;