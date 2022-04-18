import React from 'react';

const Footer = () => {
    const today =new Date();
    const year= today.getFullYear();
    return (
        <footer className='text-center text-white bg-dark p-3 '>
           <p className='mt-3'><small> &copy; The Shutterman  {year} . All Rights Reserved </small></p>
       </footer>
    );
};

export default Footer;