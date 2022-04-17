import React from 'react';
import auth from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import google from '../../images/google.png'
import { useNavigate } from 'react-router-dom';
const SocalMedia = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);



    const navigate=useNavigate();
        if(user){
            navigate('/home')
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