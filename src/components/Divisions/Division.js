import React from 'react';
import {NavLink} from 'react-router-dom';

const Division = ({division}) => {
    const {division_title, division_img, division_details} = division;
    return (
        <div className='border cursor-pointer hover:shadow-lg'>
            <NavLink to={`${division_title}`} className="hover:no-underline">
                <img src={division_img} alt="division_img" className='w-full' />
                <div className='p-5'>
                    <h2>{division_title}</h2>
                    <p>{division_details}</p>
                </div>
            </NavLink>
        </div>
    );
};

export default Division;