import React from 'react';
import {NavLink} from 'react-router-dom';

const Hotel = ({hotel}) => {
    const {hotel_title, hotel_img, hotel_details} = hotel;
    return (
        <div className='border cursor-pointer hover:shadow-lg'>
            <NavLink to={`${hotel_title}`} className="hover:no-underline">
                <img src={hotel_img} alt="hotel_img" className='w-full' />
                <div className='p-5'>
                    <h2>{hotel_title}</h2>
                    <p>{hotel_details}</p>
                </div>
            </NavLink>
        </div>
    );
};

export default Hotel;