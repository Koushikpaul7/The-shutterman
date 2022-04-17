import React from 'react';

import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import google from '../../images/google.png'
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
const SocalMedia = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);



    const navigate=useNavigate();

    if(loading){
        return <Loading></Loading>
    }
        
    if(user){
        navigate('/')
    }
      return (
          <div>
             <div className='d-flex align-items-center'>
                 <div style={{height:'1px'}} className='bg-primary w-50'></div>
                 <p className='mt-2 px-2'>or</p>
                 <div style={{height:'1px'}} className='bg-primary w-50'></div>
                 </div> 
                 <div>
                <button onClick={()=>signInWithGoogle()} className='btn btn-info  d-block mx-auto my-4'> <img style={{width:'24px'}} src={google} alt="" /> <span className='px-2'>Google Sign in</span></button>
               
                </div>
          </div>
    );
};

export default SocalMedia;