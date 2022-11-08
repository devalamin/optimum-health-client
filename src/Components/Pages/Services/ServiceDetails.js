import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import ReviewForm from '../ReviewForm/ReviewForm';
import ReviewRow from './UserReview/ReviewRow';

const ServiceDetails = () => {
    const { user } = useContext(AuthContext)
    const [reviews, setReviews] = useState([])
    const { service_name, price, description, _id, img } = useLoaderData();


    useEffect(() => {
        fetch(`http://localhost:5000/reviews?service_name=${service_name}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })

    }, [service_name])


    return (
        <div className='sm:my-10'>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${img})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-start text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 sm:text-5xl sm:font-bold">{service_name}</h1>
                        <p className="mb-5">{description}</p>
                        <button className="btn btn-warning ">$ {price}</button>
                        <button className="btn btn-wide sm:ml-10 mt-4 bg-teal-800">Get An Appointment</button>
                    </div>
                </div>
            </div>
            <div className='my-10'>
                <h1 className='my-5 text-center text-2xl font-bold text-teal-900'>User's reviews-</h1>


                <div>
                    <div className="overflow-x-auto w-full">
                        <table className="table w-full">

                            <thead>
                                <tr>

                                    <th>Name</th>
                                    <th>Comments</th>
                                    <th>Phone</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    reviews.map(singleReview => <ReviewRow
                                        key={singleReview._id}
                                        singleReview={singleReview}

                                    ></ReviewRow>)
                                }

                            </tbody>



                        </table>
                    </div>
                </div>
            </div>
            <div>
                {
                    user?.uid ? <ReviewForm
                        service_name={service_name}
                        id={_id}

                    ></ReviewForm>
                        :
                        <span>Please <Link to='/login' className='btn btn-link'>log in</Link> to submit your review </span>
                }
            </div>
        </div>
    );
};

export default ServiceDetails;