import React from 'react';
import River from '../../../assets/image/river.png';
import Sunrise from '../../../assets/image/sunrise.png';
import StatueOfLiberty from '../../../assets/image/statue of liberty.png';
import ShowAllCards from './showAllCards';

const NextTrip = () => {
    const isSavings = false;
    const data = [
        {
            id: 1,
            img: River,
            location: 'Germany',
            period: '15 days',
            time: 1000
        },
        {
            id: 2,
            img: Sunrise,
            location: 'Norway',
            period: '1 months',
            time: 1500
        },
        {
            id: 3,
            img: StatueOfLiberty,
            location: 'United States',
            period: '10 days',
            time: 2000
        },
    ]
    return (
        <div>
            <ShowAllCards title={'Inspiration for your next trip'} data={data} isSavings={isSavings}/>
        </div>
    );
};

export default NextTrip;