import React from 'react';
import { Link } from 'react-router-dom';

const SingleService = ({ service }) => {
    const { img, service_name, price, description, _id } = service;
    return (
        <div>
            <div className="card bg-cyan-200">
                <figure className="sm:px-0 sm:pt-5">
                    <img src={img} alt="Shoes" className="rounded h-52" />
                </figure>
                <div className="card-body items-end text-end">
                    <h2 className="card-title text-end">{service_name}</h2>
                    <p className='my-2'>{description.slice(0, 90)}</p>
                    <p className='font-bold'>Price:${price}</p>
                    <div className="card-actions">
                        <Link to={`/services/${_id}`}> <button className="btn btn-sm">checkout</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleService;