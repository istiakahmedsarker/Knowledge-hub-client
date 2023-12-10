import React from 'react';

const Banner = () => {
    const backgroundImageUrl = "https://i.ibb.co/ZTN6qzy/photo-1517673132405-a56a62b18caf-q-80-w-2076-auto-format-fit-crop-ixlib-rb-4-0.jpg";

    const bannerStyle = {
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <div className="relative">
            <div
                className="hero-section bg-cover bg-center flex flex-col items-center justify-center text-white h-screen z-10"
                style={bannerStyle}
            >
                <div className="headline text-5xl font-bold mb-4">Unleash Your Learning Potential</div>
                <div className="subheadline text-2xl mb-6">Explore Courses Tailored to Your Ambitions</div>
                <a href="#" className="cta-button inline-block py-4 px-8 text-lg font-bold text-white bg-green-500 rounded transition duration-300 hover:bg-green-600">
  Start Your Learning Journey
</a>


            </div>
        </div>
    );
};

export default Banner;
