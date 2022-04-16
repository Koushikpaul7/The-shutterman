import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../images/Banner/banner-1.jpg'
import banner2 from '../../images/Banner/banner2.webp'
import banner3 from '../../images/Banner/banner3-new.webp'
const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
       

        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img style={{height:'500px'}}
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Engagement</h3>
                    <p>Create Moments in your Engagement </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img style={{height:'500px'}}
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption className='text-dark'>
                    <h3>Wedding</h3>
                    <p>  Save your lovely moments of your Wedding day.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img style={{height:'500px'}}
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Engagement</h3>
                    <p>
                    Save best moments of your Engagement day.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;