import React from 'react';
import { LiaGreaterThanSolid, LiaLessThanSolid } from 'react-icons/lia';
import { Link } from 'react-router-dom';

const ShowAll = ({ title }) => {
    return (
        <div className='flex justify-between text-grayDark items-center '>
            <h1 className='md:text-[28px] text-xl md:w-full w-[50%]'>{title}</h1>
            <div className='flex items-center md:justify-end gap-3 md:w-[20%]'>
                <p className='md:text-[16px] hover:underline'>Show All</p>
                <div className='flex gap-3 md:text-[16px] '>
                    <div className='p-2 bg-grayThin rounded-[30px] hover:bg-tertiaryLight'>
                        <Link className='hover:text-primary'><LiaLessThanSolid /></Link>
                    </div>
                    <div className='p-2 bg-grayThin rounded-[30px] hover:bg-tertiaryLight'>
                        <Link className='hover:text-primary'><LiaGreaterThanSolid /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowAll;