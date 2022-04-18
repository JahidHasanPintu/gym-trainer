import React, { useRef } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation,useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {

    const [signInWithGoogle, user, error] = useSignInWithGoogle(auth);
    const navigate= useNavigate();
     // using useref hook 
     const emailRef = useRef('');
     const passwordRef = useRef('');
     const location = useLocation();
     let errorElement;

    
      let from = location.state?.from?.pathname || "/";
      const [
          signInWithEmailAndPassword,
          user1,
          loading,
          error1,
      ] = useSignInWithEmailAndPassword(auth);
      if (user1) {
          navigate(from, { replace: true });
      }
      if (user) {
          navigate(from, { replace: true });
      }
      if (error1) {
          errorElement = <div>
              <p className='text-danger'> {error1?.message} </p>
          </div>
      }
    // event handler 
    const handleSubmit = event =>{
        event.preventDefault();
        const email= emailRef.current.value;
        const password= passwordRef.current.value;
        signInWithEmailAndPassword(email,password);
    }

    // Register form navigator 
    
    const navigateRegister =event =>{
        navigate('/register');
    }

    return (
        <div className='form-area'>
            <form onSubmit={handleSubmit} className='login-form'>
                {/* <!-- Email input --> */}
                <h2 className='text-center'>Login</h2>
                <div class="form-outline mb-4">
                    <input ref={emailRef} type="email" placeholder='Email address' class="form-control" required/>
                </div>

                
                <div class="form-outline mb-4">
                    <input ref={passwordRef} type="password" placeholder="Password" class="form-control" required/>
                    
                </div>
                

                
                <div class="row mb-4">
                    <div class="col d-flex justify-content-center">
                    
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" />
                        <label class="form-check-label" > Remember me </label>
                    </div>
                    </div>

                    <div class="col">
                    
                    <a href="#!">Forgot password?</a>
                    </div>
                </div>

                
                <button type="submit" class="btn btn-primary btn-block mb-4">Log in</button>

                
                <div class="text-center">
                    <p>Not a member? <b onClick={ navigateRegister} className='reg-button'>Please Register</b></p>
                    <p>or sign up with:</p>
                   

                    <button onClick={() => signInWithGoogle()} type="button" class="btn btn-primary btn-block mb-4">
                    <i class="fab fa-google"></i>    sign in with google  
                    </button>

                </div>
                </form>
        </div>
    );
};

export default Login;