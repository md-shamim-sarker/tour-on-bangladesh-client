import React from 'react';
import {NavLink} from 'react-router-dom';

const Place = ({place}) => {
    const {place_title, place_img, place_details} = place;
    return (
        <div className='border cursor-pointer hover:shadow-lg'>
            <NavLink to={`${place_title}`} className="hover:no-underline">
                <img src={place_img} alt="place_img" className='w-full' />
                <div className='p-5'>
                    <h2>{place_title}</h2>
                    <p>{place_details}</p>
                </div>
            </NavLink>
        </div>
    );
};

export default Place;