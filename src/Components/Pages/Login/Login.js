import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Login = () => {
    const { userLogin, userGoogleLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();




    const handleUserLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        userLogin(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                form.reset()
            })
            .catch(err => console.error(err))
        console.log(email, password);

    }
    const handleGoogleLogin = () => {
        userGoogleLogin(googleProvider)
            .then(result => console.log(result.user))
            .catch(error => console.error(error))
    }



    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="sm:text-5xl font-bold">Login</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleUserLogin} className="card-body">
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
                                <label className="label">
                                    <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary bg-slate-800">Login</button>
                            </div>
                            <span>Don't Have An Account? <Link to='/register' className='btn-link btn'>Create Here</Link></span>
                        </form>
                        <div className='text-center mb-5'>
                            <button onClick={handleGoogleLogin} className='btn btn-wide bg-gradient-to-r from-yellow-500 to-red-500 border-0'>Sign in with google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;