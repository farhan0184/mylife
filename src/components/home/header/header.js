import React from 'react';

import HeaderCard from './headerCard';
import { headerData } from '../../../staticData/data';

const Header = () => {
    
    return (
        <div className='md:w-[70%] md:mx-auto mx-0 md:my-32 my-16'>
            <div className='md:flex gap-8'>
                {
                    headerData.map(items =>
                       <HeaderCard key={items.id} items={items}/> 
                    )
                }
            </div>
        </div>
    );
};

export default Header;