import React from 'react';
import { Link } from 'react-router-dom';

const NavLink = ({title,icon,time,link}) => {
    return (
        <Link data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration={time} className='flex justify-center items-center p-2 hover:text-tertiary' to={link}> <div className='text-[30px] mr-2'>{icon}</div>  <h1 className=''>{title}</h1></Link>
    );
};

export default NavLink;