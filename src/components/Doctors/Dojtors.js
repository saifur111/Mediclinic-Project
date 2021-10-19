import React, { useEffect, useState } from 'react';
import imgbg from '../../images/doc.jpg';
import DocServices from './DocServices';

const Doctors = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./demo.json')
            .then(res => res.json())
            .then(data => {
                setServices(data);
            });
    }, [])

    return (
        <>
            <div className="">
                <img src={imgbg} className="w-100" alt="" />
            </div>
            <div className='m-lg-5 p-lg-5'>
                <h1 className="text-info text-center mt-lg-3 mb-lg-3">Our Doctors</h1>
                <div className="service-container container">
                    {
                        services.map(service => <DocServices
                            key={service.id}
                            service={service}
                        ></DocServices>)
                    }
                </div>
            </div>
        </>
    );
};

export default Doctors;