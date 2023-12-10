import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Banner from './Banner/Banner';
import Faq from '../../Components/Faq/Faq';
import Testimonials from '../../Components/Testimonials/Testimonials';
import FeaturedCourses from './FeaturedCourses/FeaturedCourses';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedCourses></FeaturedCourses>
        </div>
    );
};

export default Home;