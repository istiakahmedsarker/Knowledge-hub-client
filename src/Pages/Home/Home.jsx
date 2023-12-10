import React from 'react';
import Banner from './Banner/Banner';
import Faq from './Faq/Faq';
import FeaturedCourses from './FeaturedCourses/FeaturedCourses';
import AboutUs from './AboutUs/AboutUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedCourses></FeaturedCourses>
            <AboutUs></AboutUs>
            <Faq></Faq>
        </div>
    );
};

export default Home;