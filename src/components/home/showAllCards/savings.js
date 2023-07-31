import React from 'react';
import Ubs from '../../../assets/image/ubs.png';
import Mirabaud from '../../../assets/image/mirabaud.png';
import Pictet from '../../../assets/image/pictet1.png';
import ShowAllCards from './showAllCards';

const Savings = () => {
    const isSavings = true;
    const data = [
        {
            id: 1,
            img: Ubs,
            time:2000
        },
        {
            id: 2,
            img: Pictet,
            time:1500
        },
        {
            id: 3,
            img: Mirabaud,
            time:1000
        },
    ]
    return (
        <ShowAllCards title={'Our Savings Deal'} data={data} isSavings={isSavings}/>

    );
};

export default Savings;