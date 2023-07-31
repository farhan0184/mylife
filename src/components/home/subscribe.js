import React from 'react';

const Subscribe = () => {
    return (
        <div className='bg-primary py-32 md:'> 
            <div className='md:w-[60%] w-[80%] mx-auto text-center text-white'>
                <h1 className='md:text-[42px] text-[36px]'>Get In Touch</h1>
                <p className='md:text-[20px] text-xl'>Subscribe us for new offerings and travel packages.</p>
                <form className='mt-8 rounded-[30px]   w-[65%]   mx-auto'  action="">
                    <input className='md:w-[350px] w-full  placeholder-disable text-disable px-5 py-4 text-[14px] md:rounded-r-none md:rounded-l-[30px] rounded-xl' type="email" placeholder='Your email' />
                    <button className='text-white px-5 py-[15px] md:inline block bg-tertiary md:rounded-r-[30px] md:rounded-l-none rounded-xl md:mt-0 mt-5'>Subscribe</button>
                </form>

            </div>
        </div>
    );
};

export default Subscribe;