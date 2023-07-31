import React from 'react';

const LeftSideImg = ({ Tree }) => {
    return (
        <div className='bg-primary md:flex justify-center items-end  hidden'>
            <img className='h-96' src={Tree} alt="" />
        </div>
    );
};

export default LeftSideImg;