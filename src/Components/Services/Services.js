import React from 'react';
import Service from '../Service/Service';

import './Services.css'

const services=
[
    {
      id: 1,
      price: "$580.00",
      picture: "https://i.pinimg.com/originals/f9/a1/bd/f9a1bd278230d80cb44d1664bddd3041.jpg",
      name: "Engagement package",
      "description": "In this package i will cover the whole event for couples and the groups. The time will be provided in this package is 3 hours."
    },
    {
      id: 2,
      price: "$751.00",
      picture: "https://www.itl.cat/pngfile/big/54-542025_beautiful-pakistani-bridal-couples-wedding-dresses-couples-pic.jpg",
      name: "Wedding package",
      description: "In this package i will cover the whole event for couples and the groups. The time will be provided in this package is 6 hours"
    },
    {
      id: 3,
      price: "$712.00",
      picture: "https://d397bfy4gvgcdm.cloudfront.net/157358-HL_0192.jpeg",
      name: "Reception Package",
      description: "In this package i will cover the whole event for couples, potrait and the groups. The time will be provided in this package is 5 hours"
    }
  ]
const Services = () => {
    return (
        <div className='container bg-light '>
        <h2 className='text-dark text-center pt-5'>My Packages</h2>
        <div className='row'>
          {
              services.map(service=><Service
              key={service.id}
              service={service}
              ></Service>)
          }
        </div>
    </div>
    );
};

export default Services;