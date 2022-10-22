import React from 'react';
import {useLoaderData} from 'react-router-dom';
import Hotel from './Hotel';

const Hotels = () => {
    const hotels = useLoaderData();
    return (
        <div className='w-11/12 lg:w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4 my-10'>
            {
                hotels.map(hotel => <Hotel
                    key={hotel.hotel_id}
                    hotel={hotel}
                ></Hotel>)
            }
        </div>
    );
};

export default Hotels;