import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocalMedia from '../SocialMedia/SocalMedia';

const Register = () => {
       const navigate=useNavigate();
           
    const navigateLogin=()=>{
        navigate('/login')
    }
    const navigateHome=()=>{
        navigate('/')
    }

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
      let errorElement;

      if(user){
        navigate('/')
    }


    if(error){
errorElement=<p className='text-danger'>Error: {error.message}</p>
    }

      const handleRegister=(event)=>{
        event.preventDefault();
        const name=event.target.name.value
        const email=event.target.email.value;
        const password=event.target.password.value;
        createUserWithEmailAndPassword(email,password);
        console.log(email,password);
      }



    return (
     
        <div className='w-50 mx-auto mt-5 '>
       <form onSubmit={handleRegister} >
       <div className='container border  rounded p-3 mb-3'>
        <h3 className='mb-5'>Register</h3>
        <div className='login-form'>
            <input  type="text" name="name"  placeholder='Your name' required />
            <input  type="email" name="email"  placeholder='Username or email' required />
            <input  type="password" name="password" id="" placeholder='Password' required />
        </div>
        {errorElement}
        <div className='d-flex align-items-center justify-content-between'>
            <div className='me-5'>
                <input type="checkbox" name="check"  /> Remember me
            </div>
            <div>
             <Link to='/' onClick={navigateHome}>   <button  className='btn btn-link'>Forget password</button></Link>
            </div>
        </div>
        <button className='btn-dark w-100 rounded mb-3 py-2 fw-bold'>Register</button>
        <p className='text-center'>Already registered? <Link to='/login' onClick={navigateLogin}>login now</Link></p>
        
    </div>
       </form>
       <SocalMedia></SocalMedia>
        </div>
    );
};

export default Register;