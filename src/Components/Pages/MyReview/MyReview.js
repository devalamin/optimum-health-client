import React, { useContext, useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../../../contexts/AuthProvider';
import { useSetTitle } from '../../../hooks/useSetTitle';
import MyReviewRow from './MyReviewRow';

const MyReview = () => {
    const { user, userLogOut } = useContext(AuthContext);
    const [emailReview, setEmailReview] = useState([]);
    useSetTitle('My Review');


    useEffect(() => {
        fetch(`https://optimum-health-server.vercel.app/reviewsbyemail?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('optimumToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    userLogOut()

                }
                return res.json()
            })
            .then(data => {
                setEmailReview(data)

            })

    }, [user?.email, userLogOut]);

    const handleDelete = id => {
        const confirmation = window.confirm('Remove This Review?')
        if (confirmation) {
            fetch(`https://optimum-health-server.vercel.app/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success('Successfully Deleted')
                        const remaining = emailReview.filter(rvew => rvew._id !== id);
                        setEmailReview(remaining)
                    }

                })
        }

    }



    return (
        <div>
            {
                emailReview.length === 0 ? <div className='flex items-center justify-center sm:h-96 h-10'><span className='text-3xl font-bold text-teal-900'>You Have No Review</span></div>
                    :
                    <div className='my-10'>
                        <div className="overflow-x-auto w-full">
                            <table className="table w-full">
                                <thead>
                                    <tr>
                                        <th>
                                            <label>

                                            </label>
                                        </th>
                                        <th>Name</th>
                                        <th>Service Name</th>
                                        <th>Comment</th>
                                        <th>Phone</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <ToastContainer></ToastContainer>
                                    {
                                        emailReview.map(singleReview => <MyReviewRow
                                            key={singleReview._id}
                                            singleReview={singleReview}
                                            handleDelete={handleDelete}

                                        ></MyReviewRow>)
                                    }
                                </tbody>



                            </table>
                        </div>

                    </div>

            }

        </div>
    );
};

export default MyReview;