import React from 'react';

const InputField = ({title,type}) => {
    return (
        <div className='text-grayDark mt-2 '>
            <label className='text-[15px] '>{title}</label>
            <input className='w-full px-4 py-2 mt-2 border-[1px] rounded-lg' type={type} placeholder={title} />
        </div>
    );
};

export default InputField;