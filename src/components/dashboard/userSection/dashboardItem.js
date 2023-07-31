import React from 'react';
import HeaderCardItem from '../../home/header/headerCardItem';

const DashboardItem = ({data}) => {
    
    const {title, item} = data
    return (
        <div className='mb-6'>
            <h1 className='text-[14px] text-disable  mb-3 tracking-[4px]'>{title}</h1>
            <div>
                {
                    item.map(item =>
                        <HeaderCardItem key={item.id} item={item} />   
                    )
                }
            </div>
        </div>
    );
};

export default DashboardItem;