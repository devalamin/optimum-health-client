import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/AuthProvider';

const Header = () => {
    const { user, userLogOut } = useContext(AuthContext);
    const handleLogOut = () => {
        userLogOut()
            .then(result => console.log(result.user))
            .catch(error => console.error(error))
    };

    const menuItems = <>
        {
            user?.uid ? <div>
                <button className='font-bold btn-outline mr-2 px-4 py-1'><Link to='/' className=''>Home</Link></button>
                <button className='font-bold btn-outline mr-2 px-4 py-1'><Link to='/myreviews' className=''>My Reviews</Link></button>
                <button className='font-bold btn-outline mr-2 px-4 py-1'><Link className=''>Add Service</Link></button>
                <button onClick={handleLogOut} className='font-bold btn-outline mr-2 px-4 py-1'><Link className=''>Logout</Link></button>

            </div>
                :
                <div className='flex sm:flex-row flex-col'>
                    <Link className='mx-4 text-black btn-link no-underline font-bold text-xl' to='/'><li>Home</li></Link>
                    <Link className='mx-4 text-black btn-link no-underline font-bold text-xl' to='/login'><li>Login</li></Link>
                    <Link className='text-black btn-link no-underline font-bold text-xl' to='/allservices'><li>Services</li></Link>
                </div>
        }

    </>

    return (
        <div className=''>
            <div className="navbar py-5 bg-gradient-to-r from-cyan-500 to-slate-500">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link className="btn btn-ghost bg-teal-300 normal-case text-xl font-bold">DR.Daniel</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end text-center flex flex-col sm:flex-row">
                    <span className='font-bold mr-4'>{user?.email}</span>
                    <Link className="sm:btn sm:btn-info btn-link sm:mt-0 sm:mr-0 mr-10 mt-20">Appointment</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;