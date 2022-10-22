import React from 'react';
import {useLoaderData} from 'react-router-dom';
import Division from './Division';

const Divisions = () => {
    const divisions = useLoaderData();
    return (
        <div className='w-11/12 lg:w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4 my-10'>
            {
                divisions.map(division => <Division
                    key={division.division_id}
                    division={division}
                ></Division>)
            }
        </div>
    );
};

export default Divisions;