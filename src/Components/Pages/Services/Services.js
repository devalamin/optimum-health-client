import React, { useEffect, useState } from 'react';
import SingleService from './SingleService';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])

    return (
        <div className='grid sm:grid-cols-3 grid-cols-1 sm:gap-10 gap-3 sm:my-10 my-4'>
            {
                services.map(service => <SingleService
                    key={service._id}
                    service={service}
                ></SingleService>)
            }

        </div>
    );
};

export default Services;