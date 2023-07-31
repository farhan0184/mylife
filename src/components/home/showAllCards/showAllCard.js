import React from 'react';
import { LuSwissFranc } from 'react-icons/lu';

const ShowAllCard = ({ data, isSavings }) => {
    return (
        <div >
            <div className={`md:w-full md:mb-0 mb-10 w-[90%] md:mx-0 rounded-lg mx-auto ${isSavings? 'p-5': 'p-0'} shadow-2xl   my-5 `}>
                {isSavings ?
                    <div data-aos="fade-down"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration={data.time}>
                        <div className=''>
                            <img className='' src={data.img} alt="" />
                        </div>
                        <div className='flex gap-3 text-[16px] mt-10'>
                            <div>
                                <h1 className=' text-grayRegular'>Instalment amount: </h1>
                                <h1 className=' text-grayRegular'>Duration period: </h1>
                                <h1 className=' text-grayRegular'>Interest rate: </h1>
                            </div>
                            <div >
                                <h1 className='text-blackC'>50 - 250 <LuSwissFranc className='inline' /></h1>
                                <h1 className='text-blackC'>1 - 10 years</h1>
                                <h1 className='text-blackC'>3.5 - 10 %</h1>
                            </div>
                        </div>
                        <button className='text-primary px-8 py-4 border-[1px] border-primary rounded-[30px] mt-5'>Explore</button>
                    </div>
                    :
                    <div data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration={data.time}>
                        <div className=''>
                            <img className='rounded-t-lg object-cover w-[100%]' src={data.img} alt="" />
                        </div>
                        <div className='py-5 pl-8'>
                            <h1 className='text-primary text-[22px]'>{data.location}</h1>
                            <p className='text-grayDark text-[15px]'>{data.period}</p>
                        </div>
                    </div>
                }

            </div>
        </div>
    );
};

export default ShowAllCard;