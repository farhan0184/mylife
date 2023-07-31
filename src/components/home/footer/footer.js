import React from 'react';
import FooterInfoLink from './footerInfoLink';
import Logo from '../../../assets/image/Logo.png'
import GooglePlay from './googleplay';
import { FiFacebook, FiInstagram, FiLinkedin, FiYoutube } from 'react-icons/fi';

const Footer = () => {
    const footerData = [
        {
            id: 1,
            title: 'Booking',
            data: ['Add new account', 'My account', 'My savings', 'Add new cards', 'My cards']
        },
        {
            id: 2,
            title: "Insurance",
            data: ['Home insurances', 'Mobility insurance', 'Travel insurance']
        },
        {
            id: 3,
            title: 'Traveling',
            data: ['Add new booking', 'my booking', 'Plan & roots']
        },
        {
            id: 4,
            title: "More",
            data: ["About us", "Send email", "Blog", "FAQ", "Service policy"]
        }
    ]
    return (
        <div className='md:py-40 py-36 bg-blackC'>
            <div className='md:w-[80%] md:mx-auto'>
                <div className='md:flex md:gap-24'>
                    <div className='md:w-[35%] w-[60%] md:mx-0 mx-auto'>
                        <h1 className='md:text-4xl  text-3xl text-grayThin'>Need Help With <span className='text-primary'>Anything?</span></h1>
                        <p className='md:text-[22px] text-xl text-grayThin py-5'>We are here to support you! </p>
                        <button className='text-white px-7 py-4 rounded-[30px] bg-tertiary'>
                            Contact Us
                        </button>
                    </div>
                    <div className='md:w-[65%]'>
                        <FooterInfoLink footerData={footerData} />
                    </div>
                </div>
                {/* lower section */}
                <div className='mt-24 flex gap-24 md:flex-row flex-col'>
                    <div className='md:w-[35%] w-[60%] md:mx-0 mx-auto flex items-center'>
                        <img src={Logo} alt="" />
                    </div>
                    <div className='md:w-[65%] w-[60%] mx-auto md:flex md:items-center md:gap-10'>
                        <GooglePlay/>
                        <div className='text-primary  text-3xl flex gap-8 md:mt-0 mt-10'>
                            <FiFacebook className='hover:text-tertiary'/>
                            <FiInstagram className='hover:text-tertiary'/>
                            <FiLinkedin className='hover:text-tertiary'/>
                            <FiYoutube className='hover:text-tertiary'/>
                        </div>
                    </div>

                </div>

            </div>

        </div>

    );
};

export default Footer;