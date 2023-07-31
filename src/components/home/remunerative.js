import React from 'react';
import bank1 from '../../assets/image/efg_bank.png';
import bank2 from '../../assets/image/mirabaub bank.png';
import bank3 from '../../assets/image/ubs bank.png';
import bank4 from '../../assets/image/pictet bank.png';
import bank5 from '../../assets/image/postfinance bank.png';

const banks = [
    {
        id: 1,
        img: bank1,
        time: 1000
    },
    {
        id: 2,
        img: bank2,
        time: 1500
    },
    {
        id: 3,
        img: bank3,
        time: 2000
    },
    {
        id: 4,
        img: bank4,
        time: 2500
    },
    {
        id: 5,
        img: bank5,
        time: 3000
    },
]


const Remunerative = () => {
    return ( 
        <div className='bg-tertiaryLight py-32'>
            <div className=' w-[70%] mx-auto'>
                <h1 className='text-center md:text-4xl text-3xl text-primary mb-5 animate-fade-up animate-delay-[100ms]'>Our Remunerative <span className='text-tertiary'>Banks</span></h1>
                <div className='flex md:justify-between md:flex-nowrap flex-wrap justify-center'>
                    {
                        banks.map(item =>
                            <div data-aos="fade-down"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration={item.time}  key={item.id}>
                                <img src={item.img} alt="" />
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Remunerative;