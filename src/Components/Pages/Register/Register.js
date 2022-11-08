import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Register = () => {
    const { createNewUser } = useContext(AuthContext);



    const handleCreateAccount = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;


        createNewUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                form.reset();
            })
            .catch(error => console.log(error))
        console.log(name, email, password);

    }



    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="sm:text-5xl font-bold">Create Account</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleCreateAccount} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input name='name' type="text" placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" />

                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary bg-slate-800">Register</button>
                            </div>
                            <span>Already Have An Account? <Link to='/login' className='btn-link btn'>Log In</Link></span>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;