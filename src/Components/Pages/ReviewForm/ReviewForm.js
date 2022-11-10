import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ReviewForm = ({ service_name, id }) => {

    const { user } = useContext(AuthContext);


    const handleGiveReview = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = user?.email || "Unauthorized"
        const image = form.photoLink.value;
        const phone = form.phone.value;
        const comment = form.comments.value;


        const reviewGiven = {
            service_name: service_name,
            serviceID: id,
            user_name: name,
            email: email,
            review: comment,
            img: image,
            phone: phone
        }

        fetch('https://optimum-health-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewGiven)

        })
            .then(res => res.json())
            .then(data => {

                if (data.acknowledged) {
                    toast.success('Review Submitted')
                    form.reset()
                }
            })
            .catch(error => console.error(error))

    }



    return (
        <div>
            <div>
                <div>
                    <ToastContainer />
                    <div className="flex-shrink-0 border-2 w-full">
                        <form onSubmit={handleGiveReview} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input name='name' type="text" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered" defaultValue={user?.email} readOnly />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Phone</span>
                                </label>
                                <input name='phone' type="text" placeholder="phone" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Image Link</span>
                                </label>
                                <input name='photoLink' type="text" placeholder="image" className="input input-bordered" required />

                                <label className="label">
                                    <span className="label-text">Your Comment</span>
                                </label>
                                <textarea name='comments' className="textarea textarea-accent" placeholder="Your Comment Here" required></textarea>

                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn bg-gradient-to-r from-cyan-800 to-teal-800 border-0">Submit your review</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default ReviewForm;