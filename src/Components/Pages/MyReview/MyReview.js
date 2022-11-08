import React, { useContext, useEffect, useState } from 'react';
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

    }, [user?.email])



    return (
        <div>
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
                        {
                            emailReview.map(singleReview => <MyReviewRow
                                key={singleReview._id}
                                singleReview={singleReview}

                            ></MyReviewRow>)
                        }
                    </tbody>



                </table>
            </div>

        </div>
    );
};

export default MyReview;