import React from 'react';
import { Link } from 'react-router-dom';

const ReviewForm = () => {
    return (
        <div className=''>
            <div className="">
                <div className="">

                    <div className="flex-shrink-0 border-2 w-full">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text" placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Service Name</span>
                                </label>
                                <input type="text" placeholder="Service Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image Link</span>
                                </label>
                                <input type="text" placeholder="image" className="input input-bordered" />

                                <label className="label">
                                    <span className="label-text">Your Comment</span>
                                </label>
                                <textarea className="textarea textarea-accent" placeholder="Bio"></textarea>

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Submit your review</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default ReviewForm;