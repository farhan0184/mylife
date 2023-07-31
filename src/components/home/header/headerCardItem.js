import React from 'react';

const HeaderCardItem = ({item,header}) => { 
    return (
        <div  className={`flex items-center ${header ? 'text-secondary mb-10': 'text-disable mb-3 hover:text-tertiary cursor-pointer'}`}>
            <div className={`${header ?'text-4xl mr-5':' text-3xl mr-3'}`}>
                {item.tag}
            </div>
            <div>
                <h4 className='text-[16px]'>{item.title}</h4>
                {header && <p className='text-grayRegular text-[12px]'>{item.subtitle}</p>}
            </div>
        </div>
    );
};

export default HeaderCardItem;