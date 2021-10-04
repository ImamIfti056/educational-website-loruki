import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    
    useEffect( () => {
        fetch('./mydb.JSON')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    return (
        <div>
            <div className="container mb-5">
                <h1 className="fs-1 fw-bold text-center text-uppercase my-5">Our Services</h1>
                <div className="row g-5">
                {
                    services.map(service => <Service
                    key={service.id}
                    service={service}
                    ></Service>)
                }
                </div>
            </div>
        </div>
    );
};

export default Services;