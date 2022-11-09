import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const UpdateReview = () => {
    const { _id, review, service_name } = useLoaderData();
    const [updateReview, setUpdateReview] = useState({});


    const handleChange = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newReview = { ...updateReview }
        newReview[field] = value;
        setUpdateReview(newReview)
    }


    const handleUpdate = event => {
        event.preventDefault()
        const form = event.target;
        const comment = form.comment.value;

        fetch(`http://localhost:5000/reviews/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Successfully Updated Review')
                    form.reset()
                }

            })

    }


    return (
        <div className='my-10'>
            <div className='text-center'>
                <ToastContainer></ToastContainer>
                <h1 className='text-3xl font-semibold text-teal-800 mb-5'>Update Your Review for <span className='font-bold text-3xl text-cyan-700'>{service_name}</span></h1>

                <form onSubmit={handleUpdate}>
                    <textarea onChange={handleChange} name='comment' className="textarea w-full textarea-primary" placeholder="Update Your Review"></textarea>
                    <input onChange={handleChange} name='phone' type="text" placeholder="Your Phone" className="input input-bordered w-full" />
                    <button type="submit" className='btn btn-wide bg-gradient-to-r from-cyan-800 to-slate-700 border-0 mt-5'>Update</button>

                </form>
            </div>

        </div>
    );
};

export default UpdateReview;