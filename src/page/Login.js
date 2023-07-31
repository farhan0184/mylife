import React from 'react';
import Tree from '../assets/image/tob tree.png'
import LeftSideImg from '../components/signInAndOut/leftSideImg';
import InputField from '../components/signInAndOut/inputField';
import SignButton from '../components/signInAndOut/signButton';
import LinkTag from '../components/signInAndOut/linkTag';
import MediaSignButton from '../components/signInAndOut/mediaSignButton';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate();
    const handleNavigate = () =>{
        navigate('/dashboard')
    }
    
    return (
        <div className=' md:grid md:grid-cols-2'>
             <LeftSideImg Tree={Tree}/>
            <div className='md:w-[75%] md:h-[100vh]  w-[80%] pt-10 md:ml-20 mx-auto'>
                <h1 className='text-4xl text-grayDark mb-8'>Sign Up</h1>

                <form action="">
                    <InputField title={'Email'} type={"email"} />
                    <InputField title={'Password'} type={"password"} />
                    <p className='mt-5 text-secondary text-[14px]'>Forgot password?</p>
                    <SignButton handleNavigate={handleNavigate}  title={'Login'} />
                    <LinkTag title={"Already have an account?"} tag={'/register'} name={"Create a New Account"} />
                    <div className='flex md:flex-row flex-col gap-4 my-10'>
                        <MediaSignButton title={"Google"} />
                        <MediaSignButton title={"Facebook"} />
                    </div>
                </form>

            </div>
        </div>
    );
};

export default Login;