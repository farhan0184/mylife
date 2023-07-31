import React from 'react';

const SignButton = ({title,handleNavigate}) => {
    
    return (
        <button onClick={handleNavigate} className='text-white text-center bg-primary w-full py-4 mt-6 rounded-[30px]'>{title}</button>
    );
};

export default SignButton;