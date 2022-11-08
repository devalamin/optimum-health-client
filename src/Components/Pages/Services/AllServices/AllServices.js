import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleService from '../SingleService';

const AllServices = () => {

    const allservices = useLoaderData()
    return (
        <div className='grid sm:grid-cols-3 grid-cols-1 sm:gap-10 gap-3 sm:my-10 my-4'>
            {
                allservices.map(service => <SingleService
                    key={service._id}
                    service={service}
                ></SingleService>)
            }

        </div>
    );
};

export default AllServices;