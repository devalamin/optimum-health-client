import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const SingleService = ({ service }) => {
    const { img, service_name, price, description, _id } = service;
    return (
        <div>


            <div className="card bg-cyan-200">
                <figure className="sm:px-0 sm:pt-5">

                    <PhotoProvider>
                        <div>
                            <PhotoView src={img}>
                                <img src={img} alt="Shoes" className="rounded h-52" />
                            </PhotoView>
                        </div>
                    </PhotoProvider>

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