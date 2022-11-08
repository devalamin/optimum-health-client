import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateReview = () => {
    const { _id, review, service_name } = useLoaderData()
    return (
        <div className='my-10'>
            <div className='text-center'>
                <h1 className='text-3xl font-semibold text-teal-800'>Update Your Review for <span className='font-bold text-3xl text-cyan-700'>{service_name}</span></h1>

                <form action="">
                    <textarea className="textarea textarea-bordered w-full mt-5" placeholder="Update comments"></textarea>
                    <button className='btn bg-gradient-to-r from-cyan-800 to-gray-900 btn-wide mt-5 border-0' type="submit">Update</button>
                </form>
            </div>

        </div>
    );
};

export default UpdateReview;