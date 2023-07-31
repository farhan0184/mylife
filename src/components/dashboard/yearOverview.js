import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { chartData } from '../../staticData/data';


const YearOverview = () => {

  return (
    <ResponsiveContainer width={'100%'} height={200}>
      <LineChart width={730} height={250} data={chartData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" name='Total Revenue' dataKey="pv" stroke="#FF8500" />
        <Line type="monotone" name='Total Expense' dataKey="uv" stroke="#19A526" />
      </LineChart>
    </ResponsiveContainer>

  );
};

export default YearOverview;