import React from 'react';

const MyReviewRow = ({ singleReview }) => {
    const { service_name, user_name, review, img, phone } = singleReview;


    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
                <label>
                    <input type="checkbox" className=" mx-5 checkbox" />
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{user_name}</div>

                    </div>
                </div>
            </td>
            <td>
                <span>{service_name}</span>
            </td>
            <td>{review}</td>
            <th>
                <button className="btn btn-ghost btn-xs">{phone}</button>
            </th>
        </tr>
    );
};

export default MyReviewRow;