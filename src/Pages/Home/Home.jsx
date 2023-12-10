import React from 'react';
import Banner from './Banner/Banner';
import Faq from './Faq/Faq';
import FeaturedCourses from './FeaturedCourses/FeaturedCourses';
import AboutUs from './AboutUs/AboutUs';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedCourses></FeaturedCourses>
            <AboutUs></AboutUs>
            <Faq></Faq>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;