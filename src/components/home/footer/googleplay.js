import React from 'react';
import GooglePlayIcon from '../../../assets/image/googlePlayIcon.png'

const GooglePlay = () => {
    return (
        <div className='w-[170px] bg-grayThin p-5 rounded-xl flex gap-3 font-gelasio'>
            <img width={30} src={GooglePlayIcon} alt="" />
            <div className=''>
                <p className='text-[9px]'>GET IT ON</p>
                <h1 className='text-[16px]'>Google Play</h1>
            </div>
        </div>
    );
};

export default GooglePlay;