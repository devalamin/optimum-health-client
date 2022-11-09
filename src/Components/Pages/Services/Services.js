import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SingleService from './SingleService';
// import 'react-photo-view/dist/react-photo-view.css';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://optimum-health-server.vercel.app/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])

    return (
        <div>
            <div className='grid sm:grid-cols-3 grid-cols-1 sm:gap-10 gap-3 sm:my-10 my-4'>
                {
                    services.map(service => <SingleService
                        key={service._id}
                        service={service}
                    ></SingleService>)
                }


            </div>
            <div className='text-center my-4 '>
                <Link to='/allservices' className=''><button className="bg-teal-900 btn sm:btn-wide">All Services</button></Link>
            </div>
        </div>
    );
};

export default Services;