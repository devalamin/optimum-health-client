import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const { service_name } = useLoaderData();
    return (
        <div>
            About this service {service_name}
        </div>
    );
};

export default ServiceDetails;