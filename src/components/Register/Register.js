
import React, { useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Register.css';
// import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Register = () => {

    const [signInWithGoogle, user1, error2] = useSignInWithGoogle(auth);
    const [error1, setError1] = useState('');
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [
        createUserWithEmailAndPassword,
        user,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    if (user) {
        navigate(from, { replace: true });
    }
    if (user1) {
        navigate(from, { replace: true });
    }




    
    

    
    
 

     
     // event handler 
    //  const handleRegister = event =>{
    //      event.preventDefault();
    //      const email= emailRef.current.value;
    //      const password= passwordRef.current.value;
    //      const name= nameRef.current.value;
    //      console.log(email,password);
    //      createUserWithEmailAndPassword(email, password);
    //  }
 
    const handleRegister = event => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password= passwordRef.current.value;      
        createUserWithEmailAndPassword(email, password);
    }
   
     const navigateLogin =event =>{
         navigate('/login');
     }

     //   Redirection to home page 
    if(user){
        navigate('/home');
    }
 
    return (
        <div className='form-area'>
            <form onSubmit={handleRegister} className='login-form'>
                {/* <!-- Email input --> */}

                <h2 className='text-center'>Register</h2>

                <div class="form-outline mb-4">
                    <input ref={nameRef} placeholder='Your Name'  class="form-control" />
                </div>
                
                <div class="form-outline mb-4">
                    <input ref={emailRef} type="email" placeholder='Email address' class="form-control" required/>
                </div>

                
                <div class="form-outline mb-4">
                    <input ref={passwordRef} type="password" placeholder="Password"  class="form-control" required/>
                    
                </div>
                

                
                <div class="row mb-4">
                    <div class="col d-flex justify-content-center">
                    
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" />
                        <label class="form-check-label" > Agree with our Term's and condition. </label>
                    </div>
                    </div>

                    {/* <div class="col">
                    
                    <a href="#!">Forgot password?</a>
                    </div> */}
                </div>

                
                <button type="submit" class="btn btn-primary btn-block mb-4">Sign UP</button>

                
                <div class="text-center">
                    <p>Already a member? <b onClick={ navigateLogin} className='reg-button'>Login Here</b></p>
                    <p>or sign up with:</p>
                   

                    <button onClick={() => signInWithGoogle()} type="button" class="btn btn-primary btn-block mb-4">
                    <i class="fab fa-google"></i>    sign in with google  
                    </button>

                </div>
                </form>
        </div>
    );
};

export default Register;