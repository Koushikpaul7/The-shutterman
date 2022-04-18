import React from 'react';
import pic from '../../images/404.webp'
const Notfound = () => {
    return (
        <div className='text-center mt-5 container'>
           <h2 className='text-danger'>Oops!!</h2>
           <img className='img-fluid' src={pic} alt="" />
        </div>
    );
};

export default Notfound;