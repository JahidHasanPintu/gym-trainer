
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
     // using useref hook 
     const emailRef = useRef('');
     const passwordRef = useRef('');
     const nameRef = useRef('');
 
     // event handler 
     const handleRegister = event =>{
         event.preventDefault();
         const email= emailRef.current.value;
         const password= passwordRef.current.value;
         const name= nameRef.current.value;
         console.log(name);
         console.log(email,password);
     }
 
     // Register form navigator 
     const navigate= useNavigate();
     const navigateLogin =event =>{
         navigate('/login');
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
                        <label class="form-check-label" > Agree with Policy </label>
                    </div>
                    </div>

                    <div class="col">
                    
                    <a href="#!">Forgot password?</a>
                    </div>
                </div>

                
                <button type="submit" class="btn btn-primary btn-block mb-4">Sign UP</button>

                
                <div class="text-center">
                    <p>Already a member? <b onClick={ navigateLogin} className='reg-button'>Login Here</b></p>
                    <p>or sign up with:</p>
                   

                    <button type="button" class="btn btn-primary btn-block mb-4">
                    <i class="fab fa-google"></i>    sign in with google  
                    </button>

                </div>
                </form>
        </div>
    );
};

export default Register;