import React from 'react';
import Navbar from '../components/navbar';
import Header from '../components/home/header/header.js';
import Savings from '../components/home/showAllCards/savings';
import Subscribe from '../components/home/subscribe';
import NextTrip from '../components/home/showAllCards/nextTrip';
import Remunerative from '../components/home/remunerative';
import Footer from '../components/home/footer/footer';



const Home = () => {
    return (
        <div className=''>
            <Navbar/>
            <Header/>
            <Savings/>
            <Subscribe/>
            <NextTrip/>
            <Remunerative/>
            <Footer />
        </div>
    );
};

export default Home;