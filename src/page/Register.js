import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import Tree from '../assets/image/tob tree.png'
import InputField from '../components/signInAndOut/inputField';
import SignButton from '../components/signInAndOut/signButton';
import LinkTag from '../components/signInAndOut/linkTag';
import MediaSignButton from '../components/signInAndOut/mediaSignButton';
import LeftSideImg from '../components/signInAndOut/leftSideImg';
import { useNavigate } from 'react-router-dom';
import '../css/register.css'

const Register = () => {
    const navigate = useNavigate();
    const [number, setNumber] = useState('us')
    const handleNavigate = () => {
        navigate('/login')
    }

    return (
        <div className=' md:grid md:grid-cols-2'>
            <LeftSideImg Tree={Tree} />
            <div className='md:w-[75%]  w-[80%] mt-10 md:ml-20 mx-auto'>
                <h1 className='text-4xl text-grayDark mb-8'>Sign Up</h1>

                <form action="">
                    <InputField title={'Email'} type={"email"} />
                    <div className='text-grayDark mt-2 flex gap-5'>
                        <InputField title={'First Name'} type={"text"} />
                        <InputField title={'Last Name'} type={"text"} />
                    </div>
                    {/* <InputField title={'Phone Number'} type={"email"} /> */}
                    <div className='text-grayDark mt-2 '>
                        <label className='text-[15px] '>Phone number</label>
                        <PhoneInput
                           containerClass="custom-container"
                           inputClass="custom-input"
                           dropdownClass="custom-dropdown"
                            country={number}
                            placeholder='Enter Phone Number'
                            onChange={phone => { setNumber(phone) }}
                            countryCodeEditable={false}
                        />
                    </div>
                    <InputField title={'Password'} type={"password"} />
                    <div className='md:flex md:items-end'>
                        <input type="checkbox" className='w-5 h-5 mt-4 border-[1px]' />
                        <label className='text-[13px] ml-2 text-grayDark'>Yes, i’m agree with the <span className='text-secondary'>Terms of conditions & Service policy</span></label>
                    </div>
                    <SignButton handleNavigate={handleNavigate} title={'Sign Up'} />
                    <LinkTag title={"Already have an account?"} tag={'/login'} name={"Login"} />
                    <div className='flex md:flex-row flex-col  gap-4 my-10'>
                        <MediaSignButton title={"Google"} />
                        <MediaSignButton title={"Facebook"} />
                    </div>
                </form>

            </div>
        </div>
    );
};

export default Register;