import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

const AddService = () => {

    const handleAddingService = (event) => {
        event.preventDefault()
        const form = event.target;
        const service_name = form.service.value;
        const image = form.photoLink.value;
        const price = form.price.value;
        const description = form.description.value;

        const newService = {
            service_name: service_name,
            price: price,
            img: image,
            description: description
        }

        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newService)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('New Service Added')
                    form.reset()
                }

            })

    }


    return (
        <div>
            <div>
                <div>
                    <ToastContainer />
                    <div className="flex-shrink-0 border-2 w-full">
                        <form onSubmit={handleAddingService} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Service Name</span>
                                </label>
                                <input name='service' type="text" placeholder="Service Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Service Price</span>
                                </label>
                                <input name='price' type="text" placeholder="Service Price" className="input input-bordered" />
                            </div>



                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Image Link</span>
                                </label>
                                <input name='photoLink' type="text" placeholder="image" className="input input-bordered" />

                                <label className="label">
                                    <span className="label-text">Description About This Service</span>
                                </label>
                                <textarea name='description' className="textarea textarea-accent" placeholder="Description"></textarea>

                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary border-0 bg-gradient-to-r from-slate-400 to-cyan-900">Add Service</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default AddService;