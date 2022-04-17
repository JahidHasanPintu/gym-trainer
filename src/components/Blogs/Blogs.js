import React from 'react';

import firbaseServiceImg from '../../images/firebaseServices.jpg';

import './Blogs.css'

const Blogs = () => {
    return (
        <div className='row blog-area'>
            <div className="common-des first-ques col-sm-12 col-md-6">
                <h2>Authentication vs. authorization</h2>
                <p>
                    Authenctication is a simple process which can verify someone's identity. On the otherhand, in authorization process it verifies the specific application ,files, and data  a user can access or not. We can compare it like an airplane. At first airlines company have to check the identity of the passengers for being sure who are they actually. After determining the passengers identity, secondly they cheack if this passenger has any special service like vip lounge or first class seat.
                    <br />
                    In the world of modern technology these kinds of works is done by authorization and authenctication. Authentication confirms the real identity of a person actually who they are. After confirming the identity authorization process is start to cheack if the user have permission to access the different level of that application and commits specific task depending on the role.     
                </p>
                

            </div>
            <div className="common-des first-img col-sm-12 col-md-6">
                <img src="https://www.okta.com/sites/default/files/styles/1640w_scaled/public/media/image/2020-10/Authentication_vs_Authorization.png?itok=uBFRCfww" alt="" />
            </div>
            <div className="common-des sec-img col-sm-12 col-md-6">
                <img src="https://miro.medium.com/max/1400/1*JbDo7U0l62vYMfm1WxnA1g.png" alt="" />
            </div>
            <div className="common-des second-Ques col-sm-12 col-md-6">
            <h2>Why i am using firebase?</h2>
                <p>
                    I use firebase because 
                    Firebase Authentication makes it easier to get my users signed-in without having to understand the complexities behind implementing my own authentication system.
                    <br />
                    Most apps need to know the identity of a user. Knowing a user's identity allows an app to securely save user data in the cloud and provide the same personalized experience across all of the user's devices.
                    Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
                </p>
                <h4>Other options to implement authentication</h4>
                <p>
                    <ul>
                        <li>Local Authentication</li>
                        <li>Auth0</li>
                        <li>Okta</li>
                        <li>Amazon Cognito</li>
                        <li>Keycloak</li>
                        <li>PassportJS</li>
                        <li>Grant</li>
                    </ul>
                </p>
            </div>

            <div className="common-des last-ques col-sm-12 col-md-6">
                <h2>Other Services provided by firebase</h2>
                <p>
                Firebase is a full package that can help in developing your mobile or web applications faster with fewer resources and more efficiency. Now, let's look at some of the services and use of it.

                There are many services which Firebase provides, Most useful of them are:
                    <ul>
                        <li>Cloud Firestore</li>
                        <li>Cloud Functions</li>
                        <li>Authentication</li>
                        <li>Hosting</li>
                        <li>Cloud Storage</li>
                        <li>Google Analytics</li>
                        <li>Predictions</li>
                        <li>Cloud Messaging</li>
                        <li>Dynamic Links</li>
                        <li>Remote Config</li>
                    </ul>

                    Firebase is a full package that can help in developing your mobile or web applications faster with fewer resources and more efficiency. Now, let's look at some of the services and use of it.
                </p>
            </div>
            <div className="common-des last-img col-sm-12 col-md-6">
                <img src={firbaseServiceImg} alt="" />
            </div>
        </div>
    );
};

export default Blogs;