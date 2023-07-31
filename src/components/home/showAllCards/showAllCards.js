import React from 'react';
import ShowAll from './showAll';
import ShowAllCard from './showAllCard';

const ShowAllCards = ({title,data,isSavings}) => {
    return (
        <div  className='md:w-[70%] md:mx-auto mx-0 md:my-32 my-16'>
            <div className='md:w-full w-[90%] md:mx-0 mx-auto' >
                <ShowAll title={title} />
            </div>
            <div className={`md:flex ${isSavings ? 'md:gap-5' : 'md:gap-10'} md:justify-between`}>
                { 
                    data.map(item =>
                        <ShowAllCard  key={item.id} data={item} isSavings={isSavings}/>
                    ) 
                }
            </div>
        </div>
    );
};

export default ShowAllCards;