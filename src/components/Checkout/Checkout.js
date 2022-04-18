import React from 'react';
import { useParams } from 'react-router-dom';

const Checkout = () => {
    const {serviceID} =useParams();
    return (
        <div>
            <h1>This is cheack out root</h1>
            <h3>Welcome to service no: {serviceID}</h3>
        </div>
    );
};

export default Checkout;