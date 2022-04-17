import React from 'react';
import img from '../../images/12.jpg'
import './About.css'
const About = () => {
    return (
        <div className='text-center container'>
            <h2 className='mt-5'>About Me</h2>
            <hr className='text-primary w-50 mx-auto' />
            <h4> Koushik Paul</h4>
            <img className='picture shadow' src={img} alt="" />
            <p className='w-50 mx-auto mt-4'>Hello everyone! I m Koushik Paul and I've  pursued my degree in Bachelor of CSE . I want to build my career as a web developer. My Goal is to be a good full-stack developer in 2-3 years. I am working hard with my course and doing my projects for the experience. I hope i can make it by the blessing of Almighty and through my hardwork </p>
        </div>
    );
};

export default About;