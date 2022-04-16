import React from 'react';
import Service from '../Service/Service';



const services=
[
    {
      id: 1,
      price: "$586.67",
      picture: "https://1.bp.blogspot.com/-lXWKrSM8EBU/XUHXI2vsx9I/AAAAAAAAGHg/-C7Ec37olp8cWEz25ss-NQoCUuacGQh-wCEwYBhgL/s1600/FB_IMG_1564595375848.jpg",
      name: "Engagement package",
      "description": "In this package i will cover the whole event for couples and the groups. The time will be provided in this package is 3 hours."
    },
    {
      id: 2,
      price: "$751.00",
      picture: "https://1.bp.blogspot.com/-lXWKrSM8EBU/XUHXI2vsx9I/AAAAAAAAGHg/-C7Ec37olp8cWEz25ss-NQoCUuacGQh-wCEwYBhgL/s1600/FB_IMG_1564595375848.jpg",
      name: "Wedding package",
      description: "In this package i will cover the whole event for couples and the groups. The time will be provided in this package is 6 hours"
    },
    {
      id: 3,
      price: "$712.00",
      picture: "https://1.bp.blogspot.com/-lXWKrSM8EBU/XUHXI2vsx9I/AAAAAAAAGHg/-C7Ec37olp8cWEz25ss-NQoCUuacGQh-wCEwYBhgL/s1600/FB_IMG_1564595375848.jpg",
      name: "Reception",
      description: "In this package i will cover the whole event for couples, potrait and the groups. The time will be provided in this package is 5 hours"
    }
  ]
const Services = () => {
    return (
        <div className='container'>
        <h2 className='text-primary text-center mt-5'>My Packages</h2>
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