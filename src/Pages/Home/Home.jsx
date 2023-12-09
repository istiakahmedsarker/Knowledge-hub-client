import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Banner from './Banner/Banner';
import Features from '../../Components/Features/Features';
import Faq from '../../Components/Faq/Faq';
import Testimonials from '../../Components/Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <Faq></Faq>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;