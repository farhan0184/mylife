import React from 'react';
import { Link } from 'react-router-dom';

const MediaSignButton = ({ title }) => {
    return (
        <Link to={'#'} className='w-full'>
            <div className='text-grayRegular flex py-2 justify-center items-center border-[1px]  rounded-lg'>
                <img src={require(`../../assets/image/${title}.png`)} alt="" />
                <p className='text-[14px] pl-3 '>Sign up with {title}</p>
            </div>
        </Link>
    );
};

export default MediaSignButton;