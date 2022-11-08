import React from 'react';

const ReviewRow = ({ singleReview }) => {
    const { service_name, user_name, email, review, img, phone } = singleReview;
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className=" w-12 h-12">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{user_name}</div>


                    </div>
                </div>
            </td>
            <td>
                <p>{review}</p>
                <br />

            </td>
            <td>{phone ? phone : 'N/A'}</td>
            <th>
                <button className="btn btn-ghost lowercase btn-xs">{email}</button>
            </th>
        </tr>
    );
};

export default ReviewRow;