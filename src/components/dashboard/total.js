import React from 'react';

const Total = ({item}) => {
    const {id,title, number} = item
    return (
        <div className={` shadow-lg border-[1px] p-4  border-border rounded-lg`}>
            <h1 className={`text-[22px] ${id=== 4 ? 'text-primary': 'text-tertiary'}`}>{number}</h1>
            <p className='text-[12px]'>{title}</p>
        </div>
    );
};

export default Total;