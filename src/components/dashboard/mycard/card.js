import React from 'react';
import CardIcon from './cardIcon';
import { LuSwissFranc } from 'react-icons/lu';
// #F5FBE9
const Card = ({ item }) => {
    const { name, cardId, balance } = item
    return (
        <div  className={` mb-6 ${item.id === 1 && "text-[#986E6E]"} ${item.id === 2 && "text-[#6E7E98]"} ${item.id === 3 && "text-[#8F986E]"}`}>
            <div className={`flex justify-between px-2 py-3  ${item.id === 1 && "bg-[#FFF3F7]"} ${item.id === 2 && "bg-[#F3F8FF]"} ${item.id === 3 && "bg-[#F7FFF3]"} rounded-t-xl`}>
                <div>
                    <h1 className='text-[12px]'>{name}</h1>
                    <p className='text-[10px]'>AC: <span>{cardId}</span></p>
                </div>
                <CardIcon/>

            </div>
            <div className={` ${item.id === 1 && "bg-[#FBE9EF]"} ${item.id === 2 && "bg-[#E9F1FB]"} ${item.id === 3 && "bg-[#F5FBE9]"} px-2 py-4 rounded-b-xl`}>
                <h1 className='text-[14px] flex items-center gap-1'><LuSwissFranc/> <span>{balance}</span></h1>
                <p className='text-[10px]'>Total Balance</p>
            </div>
        </div>
    );
};

export default Card;