import React from 'react';
import notFoundImg from '../../images/CodePen-404-Page.gif';

const NotFound = () => {
    return (
        <div>
            <img src={notFoundImg} alt="404 not found" />
        </div>
    );
};

export default NotFound;