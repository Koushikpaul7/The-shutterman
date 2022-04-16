import React from 'react';

const Service = ({service}) => {
    const {picture,name,description,price}=service;
    return (
        <div className='col-12 col-md-6 col-lg-4 g-5 '>
        <div className="card shadow p-3 mb-5 bg-body rounded" style={{ width: '18rem' }}>
            <img src={picture} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{price}</p>
                <p className="card-text"><small className="text-muted">{description}</small></p>
                <button className='btn-dark w-100 rounded py-2'>Book now</button>
            </div>
        </div>
    </div>
    );
};

export default Service;