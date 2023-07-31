import React from 'react';
import { Link } from 'react-router-dom';

const LinkTag = ({title,tag,name}) => {
    return (
        <div className='mt-5'>
            <p className='text-grayDark text-[15px]'>{title} <Link className='text-secondary' to={tag}>{name}</Link></p>
        </div>
    );
};

export default LinkTag;