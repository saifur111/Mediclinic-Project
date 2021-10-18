import React from 'react';
import './Banner.css';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import banner1 from '../../images/about.jpg';
import banner2 from '../../images/about0.jpg';
import banner3 from '../../images/about1.jpg';
import b1 from '../../images/b5.png';
import b2 from '../../images/b1.png';
import b3 from '../../images/b2.png';
import b4 from '../../images/b3.png';
import b5 from '../../images/b4.png';


const Banner = () => {
    return (
        <>
            <Carousel className='mt-lg-5 pt-lg-2'>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption className='pt-0'>
                        <h1 className='banner-h1'>Web Doctors Online Treatments Here</h1>
                        <p className='banner-p'>Making it easy to see a doctor online, right now.</p>
                        <div className="dicon">
                            <img
                                className="dblock"
                                src={b1}
                                alt="First slide"
                            />
                            <img
                                className="dblock"
                                src={b2}
                                alt="First slide"
                            />
                            <img
                                className="dblock"
                                src={b3}
                                alt="First slide"
                            />
                            <img
                                className="dblock"
                                src={b4}
                                alt="First slide"
                            />
                            <img
                                className="dblock"
                                src={b5}
                                alt="First slide"
                            />
                        </div>
                        <Link className='btn btn-outline-dark m-2 p-2' to="/">CONSULT A DOCTOR NOW</Link>
                        
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption className='pt-0'>
                        <h1 className='banner-h1'>Why Online Virtual Visits are Better?</h1>
                        <p className='banner-p'>Many patients do not want to leave their home and go to a physical doctor’s office.</p>
                        <div className="dicon">
                            <img
                                className="dblock"
                                src={b1}
                                alt="First slide"
                            />
                            <img
                                className="dblock"
                                src={b2}
                                alt="First slide"
                            />
                            <img
                                className="dblock"
                                src={b3}
                                alt="First slide"
                            />
                            <img
                                className="dblock"
                                src={b4}
                                alt="First slide"
                            />
                            <img
                                className="dblock"
                                src={b5}
                                alt="First slide"
                            />
                        </div>
                        <Link className='btn btn-outline-dark m-2 p-2' to="/">CONSULT A DOCTOR NOW</Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption className='pt-0'>
                        <h1 className='banner-h1'>Board Certified Online Physicians</h1>
                        <p className='banner-p'>Join the tens of thousands of Web Doctors patients online now.</p>
                        <div className="dicon">
                            <img
                                className="dblock"
                                src={b1}
                                alt="First slide"
                            />
                            <img
                                className="dblock"
                                src={b2}
                                alt="First slide"
                            />
                            <img
                                className="dblock"
                                src={b3}
                                alt="First slide"
                            />
                            <img
                                className="dblock"
                                src={b4}
                                alt="First slide"
                            />
                            <img
                                className="dblock"
                                src={b5}
                                alt="First slide"
                            />
                        </div>
                        <Link className='btn btn-outline-dark m-2 p-2' to="/">CONSULT A DOCTOR NOW</Link>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;