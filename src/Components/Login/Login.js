import React, { useEffect, useRef } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocalMedia from '../SocialMedia/SocalMedia';
import './Login.css'

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate=useNavigate();

    const navigateRegister=()=>{
        navigate('/register')
    }
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);    

     useEffect(()=>{
        if(user){
            navigate('/')
        }
     })
      let errorElement;
      if(error){
        errorElement=<p className='text-danger'>Error: {error?.message}</p>
        console.log(error);
            }


    const handleSubmit=(event)=>{
        event.preventDefault();
        const email=emailRef.current.value;
        const password= passwordRef.current.value;
        signInWithEmailAndPassword(email,password);
    }
    return (
        <div className='w-50 mx-auto mt-5 '>
            <div className='container border  rounded p-3 mb-3'>
           <form onSubmit={handleSubmit} >

           <h3 className='mb-5'>Login</h3>
            <div className='login-form'>
                <input ref={emailRef} type="email" name="email" id="" placeholder='Username or email' required/>
                <input ref={passwordRef} type="password" name="password" id="" placeholder='Password' required />
            </div>
            <div className='d-flex align-items-center justify-content-between'>
                <div className='me-5'>
                    <input type="checkbox" name="check" id="" /> Remember me
                </div>
                <div>
                    <button className='btn btn-link'>Forget password</button>
                </div>
            </div>
            {errorElement}
            <button className='btn-dark w-100 rounded mb-3 py-2 fw-bold'>Login</button>
            <p className='text-center '>Don't have an account?  <Link onClick={navigateRegister} className='text-decoration-none' to='/register '>Create an account</Link></p>
           </form>
            
        </div>
        <SocalMedia></SocalMedia>
        </div>
    );
};

export default Login;