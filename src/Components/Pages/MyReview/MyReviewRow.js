import React from 'react';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { MdModeEditOutline } from 'react-icons/md';
import { toast, ToastContainer } from 'react-toastify';


const MyReviewRow = ({ singleReview, handleDelete }) => {
    const { service_name, user_name, review, img, phone, _id } = singleReview;


    return (
        <tr>
            <th>
                <div className='flex'>
                    <button onClick={() => handleDelete(_id)}> <RiDeleteBin6Fill className='mr-4 cursor-pointer border-2 text-black text-2xl'></RiDeleteBin6Fill></button>
                    <button><MdModeEditOutline className='cursor-pointer border-2 text-black text-2xl'></MdModeEditOutline></button>

                </div>

            </th>

            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask w-12 h-12">
                            <img className='rounded-full' src={img} alt="Avatar Tailwind CSS Component" />
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
                <button className="btn btn-ghost btn-xs">{phone ? phone : 'N/A'}</button>
            </th>
        </tr>
    );
};

export default MyReviewRow;