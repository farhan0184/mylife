import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { insuranceData } from '../../staticData/data';

const Insurance = () => {
    return (
        <div className='md:w-[70%] w-[90%]'>
            <ResponsiveContainer width={'100%'} height={200}>
            <BarChart width={100} height={250} data={insuranceData}>
            <CartesianGrid strokeDasharray="1 1" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" name='insurance' fill="#19A526" />
        </BarChart>
        </ResponsiveContainer>
        </div>
        

    );
};

export default Insurance;