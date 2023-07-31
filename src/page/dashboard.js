import React from 'react';
import Navbar from '../components/navbar';
import Total from '../components/dashboard/total';

import Card from '../components/dashboard/mycard/card';
import { myData, total, headerData, costs } from '../staticData/data';
import User from '../assets/image/user.png'
import { AiOutlinePieChart } from 'react-icons/ai';
import { LuSwissFranc } from 'react-icons/lu';
import DashboardItem from '../components/dashboard/userSection/dashboardItem';
import YearOverview from '../components/dashboard/yearOverview';
import Insurance from '../components/dashboard/insurance';



const Dashboard = () => {
    const shadow = true;

    return (
        <div>
            <Navbar shadow={shadow} />
            <div className='md:my-6 my-16    md:w-[80%] w-[90%] mx-auto md:grid md:grid-cols-5 md:gap-7'>
                {/* user section */}
                <div className='  md:block hidden border-border border-[3px] rounded-lg p-[1px]'>
                    {/* user detail */}
                    <div className='bg-[#F1FBF2] rounded-t-lg'>
                        <div className={`flex gap-3 items-center w-[80%] mx-auto py-7 `}>
                            <div className='border-[1px] border-primary rounded-[30px]'>
                                <img className='rounded-[30px] p-[1px]' src={User} alt="" />
                            </div>
                            <div>
                                <h1 className='text-secondary text-[16px]'>Martha Uilson</h1>
                                <p className='text-grayRegular text-[12px]'>uilson@email.com</p>
                            </div>
                        </div>
                    </div>
                    {/* dashboard */}
                    <div>
                        <div className={`w-[80%] mx-auto mt-7`}>
                            <div className='flex gap-3 items-center text-tertiary'>
                                <AiOutlinePieChart className='w-7 h-7' />
                                <h1 className='text-[16px]'>Dashboard</h1>
                            </div>
                            <div className='mt-5'>
                                {
                                    headerData.map(item =>
                                        <DashboardItem key={item.id} data={item} />
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className='  md:col-span-4'>
                    {/* total section */}
                    <div className='grid md:grid-cols-4 grid-cols-1 gap-5'>
                        {
                            total.map(item => <Total key={item.id} item={item} />)
                        }
                    </div>
                    {/* chart and my card */}
                    <div className='grid md:grid-cols-4 mt-5 grid-cols-1 gap-5 '>
                        {/* chart section */}
                        <div className='  md:col-span-3  flex flex-col gap-5'>
                            {/* year overview chart */}
                            <div className='border-[3px] border-border rounded-lg py-4 '>
                                <div className='w-[90%] mx-auto'>
                                    <h1 className='text-grayDark text-[18px] md:mb-6 mb-10'>This Year Overview</h1>
                                    <YearOverview />
                                </div>

                            </div>
                            {/* insurance bar chart */}
                            <div className='border-[3px] border-border rounded-lg py-4 '>
                                <div className='w-[90%] mx-auto'>
                                    <h1 className='text-grayDark text-[18px] md:mb-6 mb-10'>Insurance</h1>
                                    <div className='md:flex gap-5'>
                                        <Insurance />
                                        <div className='md:w-[40%] w-[100%]'>
                                            {
                                                costs.map(item =>
                                                    <div key={item.id} className={`mb-4 w-full ${item.id === 1 && "bg-[#F1FBF2]"} ${item.id === 2 && "bg-[#FFF4E7]"} px-2 py-4 rounded-xl`}>
                                                        <h1 className={`text-[18px] ${item.id === 1 && "text-primary"} ${item.id === 2 && "text-tertiary"} flex items-center gap-1`}><LuSwissFranc /> <span>{item.amount}</span></h1>
                                                        <p className={`text-[12px] text-grayDark`}>{item.title}</p>
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                        {/* my card section */}
                        <div className='border-[3px] border-border rounded-lg '>
                            <div className='w-[90%] mx-auto'>
                                <h1 className='text-grayDark text-xl  mt-5'>My Cards</h1>
                                <div className='mt-10'>
                                    {
                                        myData.map(item => <Card key={item.id} item={item} />)
                                    }
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;