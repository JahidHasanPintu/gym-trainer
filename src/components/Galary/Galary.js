import React from 'react';
import './Galary.css';
import img1 from '../../images/img53-1.jpg';
import img2 from '../../images/img98-2.jpg';
import img3 from '../../images/img98-1.jpg';
import img4 from '../../images/img42-2.jpg';
import img5 from '../../images/img53-3.jpg';
import img6 from '../../images/img98-3.jpg';

const Galary = () => {
    return (
        <div>
            <h2 class="h1-responsive font-weight-bold text-center my-4">Results</h2>
            <div className='img-galary d-flex justify-content-center'>
            
            {/* <!-- Gallery --> */}
           
            <div class="row">
            <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                <img
                src={img1}
                class="w-100 shadow-1-strong rounded mb-4"
                alt="Boat on Calm Water"
                />

                <img
                src={img2}
                class="w-100 shadow-1-strong rounded mb-4"
                alt="Wintry Mountain Landscape"
                />
            </div>

            <div class="col-lg-4 mb-4 mb-lg-0">
                <img
                src={img3}
                class="w-100 shadow-1-strong rounded mb-4"
                alt="Mountains in the Clouds"
                />

                <img
                src={img4}
                class="w-100 shadow-1-strong rounded mb-4"
                alt="Boat on Calm Water"
                />
            </div>

            <div class="col-lg-4 mb-4 mb-lg-0">
                <img
                src={img5}
                class="w-100 shadow-1-strong rounded mb-4"
                alt="Waves at Sea"
                />

                <img
                src={img6}
                class="w-100 shadow-1-strong rounded mb-4"
                alt="Yosemite National Park"
                />
            </div>
            </div>
            {/* <!-- Gallery --> */}
                    </div>
        </div>
    );
};

export default Galary;