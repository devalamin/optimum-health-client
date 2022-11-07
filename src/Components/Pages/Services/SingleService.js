import React from 'react';

const SingleService = ({ service }) => {
    const { img, service_name, price, description } = service;
    return (
        <div>
            <div className="card bg-cyan-200">
                <figure className="sm:px-2 sm:pt-5">
                    <img src={img} alt="Shoes" className="rounded h-52" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{service_name}</h2>
                    <p className='my-2'>{description.slice(0, 90)}</p>
                    <div className="card-actions">
                        <button className="btn btn-sm">checkout</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleService;