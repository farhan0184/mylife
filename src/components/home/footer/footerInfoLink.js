import React from 'react';

const FooterInfoLink = ({footerData}) => {
    return (
        <div className='md:flex md:gap-10 md:w-full  w-[60%] md:mx-0 mx-auto'>
            {
              footerData.map(item =>
                    <div className='md:w-1/4 md:mt-0 mt-10'  key={item.id}>
                        <p className='text-[12px] text-grayRegular'>{item.title}</p>
                        <hr className='border-grayRegular' />
                        <div className='mt-8'>
                        {
                            item.data.flatMap((item,idx)=>
                                <p className='cursor-pointer hover:text-primary text-disable text-[14px] py-2' key={idx}>{item}</p>
                            )
                        }
                        </div>
                    </div>
                )  
            }
        </div>
    );
};

export default FooterInfoLink;