import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';
import { BsPerson } from 'react-icons/bs';
import { HiMenuAlt1, HiOutlineX } from "react-icons/hi";
import { LuPlane } from 'react-icons/lu';
import { AiOutlineSafetyCertificate } from 'react-icons/ai';
import { FiCreditCard } from 'react-icons/fi';
import Logo from '../assets/image/Logo.png'
import NavLink from './navLink';

const Navbar = ({ shadow }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [isInputOpen, setIsInputOpen] = useState(false)

    const navLinks = [
        {
            id: 1,
            title: "Banking",
            link: '#',
            time: 1600,
            icon: <FiCreditCard/>
        },
        {
            id: 2,
            title: "Insurance",
            link: '#',
            time: 1400,
            icon: <AiOutlineSafetyCertificate />
        },
        {
            id: 3,
            title: "Travel",
            link: '#',
            time: 1200,
            icon: <LuPlane/>
        },
        {
            id: 4,
            title: "My Profile",
            link: '#',
            time: 1000,
            icon: <BsPerson/>
        },
    ]
    return (
        <div className={`${shadow ? 'md:shadow-lg' : null}`}>
            <div className={`md:w-[80%] mx-auto ${isOpen ? 'bg-grayThin' : ''} md:px-0 px-4 md:flex justify-between py-3 items-center`}>

                <div className='flex md:w-[140px]   md:justify-start justify-between items-center'>
                    <div data-aos="fade-right"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <img src={Logo} alt="" />
                    </div>

                    <div className='md:hidden block text-secondary'>
                        {
                            isOpen ? <HiOutlineX onClick={() => setIsOpen(!isOpen)} className='text-2xl w-10' /> : <HiMenuAlt1 onClick={() => setIsOpen(!isOpen)} className='text-2xl w-10' />
                        }
                    </div>
                </div>

                <div className={`text-[20px] text-secondary md:flex  md:mt-0 ${isOpen ? 'mt-0 transform duration-700 ease-in' : '-mt-96 '}`}>
                    {
                        navLinks.map(item =>
                            <NavLink key={item.id} title={item.title} icon={item.icon} time={item.time} link={item.link}/>
                        )
                    }
                </div>
                <div className={`md:block  md:mt-0 ${isOpen ? 'mt-0 transform duration-700 ease-in' : '-mt-96'}`}>
                    <form  className={` border-[1px] md:flex  items-center border-secondary hover:border-tertiary  ${isInputOpen ? 'rounded-xl' : `md:rounded-[30px] ${isOpen ? 'rounded-xl flex' : 'rounded-xl flex'}`}`} action="">
                        <input className={`p-2 ${isInputOpen ? 'md:rounded-l-xl border-secondary  transform duration-700 ease-in' : `md:hidden ${isOpen ? 'block w-full rounded-xl' : ''}`} `} type="text" placeholder='Search .....' />
                        <Link data-aos="fade-right"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="800" to={'#'} onClick={() => setIsInputOpen(!isInputOpen)} className={`text-secondary py-2`}><BiSearch className='text-2xl w-10 hover:text-tertiary' /></Link>
                    </form>

                </div>

            </div>
        </div>
    );
};

export default Navbar;