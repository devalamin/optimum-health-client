import React, { useContext, useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../../../contexts/AuthProvider';
import MyReviewRow from './MyReviewRow';

const MyReview = () => {
    const { user } = useContext(AuthContext);
    const [emailReview, setEmailReview] = useState([])


    useEffect(() => {
        fetch(`http://localhost:5000/reviewsbyemail?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setEmailReview(data)
                console.log(data);
            })

    }, [user?.email]);

    const handleDelete = id => {
        const confirmation = window.confirm('Remove This Review?')
        if (confirmation) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success('Successfully Deleted')
                        const remaining = emailReview.filter(rvew => rvew._id !== id);
                        setEmailReview(remaining)
                    }
                    console.log(data);
                })
        }

    }



    return (
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
    );
};

export default MyReview;