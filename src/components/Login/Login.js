import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'

const Login = () => {
    // using useref hook 
    const emailRef = useRef('');
    const passwordRef = useRef('');

    // event handler 
    const handleSubmit = event =>{
        event.preventDefault();
        const email= emailRef.current.value;
        const password= passwordRef.current.value;
        console.log(email,password);
    }

    // Register form navigator 
    const navigate= useNavigate();
    const navigateRegister =event =>{
        navigate('/register');
    }

    return (
        <div className='form-area'>
            <form onSubmit={handleSubmit} className='login-form'>
                {/* <!-- Email input --> */}
                <div class="form-outline mb-4">
                    <input ref={emailRef} type="email" placeholder='Email address' id="form2Example1" class="form-control" required/>
                </div>

                
                <div class="form-outline mb-4">
                    <input ref={passwordRef} type="password" placeholder="Password" id="form2Example2" class="form-control" required/>
                    
                </div>
                

                
                <div class="row mb-4">
                    <div class="col d-flex justify-content-center">
                    
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="form2Example31"/>
                        <label class="form-check-label" for="form2Example31"> Remember me </label>
                    </div>
                    </div>

                    <div class="col">
                    
                    <a href="#!">Forgot password?</a>
                    </div>
                </div>

                
                <button type="submit" class="btn btn-primary btn-block mb-4">Sign in</button>

                
                <div class="text-center">
                    <p>Not a member? <b onClick={ navigateRegister} className='reg-button'>Please Register</b></p>
                    <p>or sign up with:</p>
                   

                    <button type="button" class="btn btn-primary btn-block mb-4">
                    <i class="fab fa-google"></i>    sign in with google  
                    </button>

                </div>
                </form>
        </div>
    );
};

export default Login;