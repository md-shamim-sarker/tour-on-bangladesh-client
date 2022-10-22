import React from 'react';
import {useLoaderData} from 'react-router-dom';
import Place from './Place';

const Places = () => {
    const places = useLoaderData();
    return (
        <div className='w-11/12 lg:w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4 my-10'>
            {
                places.map(place => <Place
                    key={place.place_id}
                    place={place}
                ></Place>)
            }
        </div>
    );
};

export default Places;