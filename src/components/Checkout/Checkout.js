import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Checkout = () => {
    const {serviceID} =useParams();
    return (
        <div className='contact-area'> 
            
            {/* <!--Section: Contact v.2--> */}
<section class="mb-4">

    {/* <!--Section heading--> */}
    <h2 class="h1-responsive font-weight-bold text-center my-4">Checkout</h2>
    {/* <!--Section description--> */}
    <p class="text-center w-responsive mx-auto mb-5">Fill up the forms Please.</p>

    <div class="row">

        {/* <!--Grid column--> */}
        <div class="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                {/* <!--Grid row--> */}
                <div class="row">

                    {/* <!--Grid column--> */}
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="name" name="name" class="form-control"/>
                            <label for="name" class="">Your name</label>
                        </div>
                    </div>
                    {/* <!--Grid column-->

                    <!--Grid column--> */}
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="email" name="email" class="form-control"/>
                            <label for="email" class="">Your email</label>
                        </div>
                    </div>
                    {/* <!--Grid column--> */}

                </div>
                {/* <!--Grid row-->

                <!--Grid row--> */}
                <div class="row">
                    <div class="col-md-12">
                        <div class="md-form mb-0">
                            <input type="text" id="subject" name="subject" class="form-control"/>
                            <label for="subject" class="">Address</label>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="md-form mb-0">
                            <input type="text" id="subject" name="subject" class="form-control"/>
                            <label for="subject" class="">Phone Number</label>
                        </div>
                    </div>
                </div>
                {/* <!--Grid row--> */}

                {/* <!--Grid row--> */}
                <div class="row">

                    {/* <!--Grid column--> */}
                    <div class="col-md-12">

                        <div class="md-form">
                            <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                            <label for="message">Additional Information</label>
                        </div>

                    </div>
                </div>
                {/* <!--Grid row--> */}

            </form>

            <div class="text-center text-md-left">
                
                <Link to="/Greetings"><a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Complete Order</a></Link>
            </div>
            <div class="status"></div>
        </div>
        {/* <!--Grid column-->

        <!--Grid column--> */}
        
        {/* <!--Grid column--> */}

    </div>

</section>
{/* <!--Section: Contact v.2--> */}

        </div>
    );
};

export default Checkout;