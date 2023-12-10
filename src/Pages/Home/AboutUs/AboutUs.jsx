import React from 'react';

const AboutUs = () => {
    return (
        <div className="container mx-auto my-16">
            <h2 className="text-3xl font-bold mb-8 text-center">About Us</h2>
            <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between">
                <div className="lg:w-1/2 mb-6 lg:mb-0">
                    <img
                        src="team-image.jpg"
                        alt="Our Team"
                        className="w-full h-auto rounded-md shadow-md"
                    />
                </div>
                <div className="lg:w-1/2">
                    <p className="text-lg mb-4">
                        Welcome to our educational platform! At [Your Platform Name], we are passionate about providing high-quality courses
                        to help you enhance your skills and achieve your learning goals.
                    </p>
                    <p className="text-lg mb-4">
                        Our team of dedicated educators and professionals is committed to creating engaging and informative content
                        to empower learners like you on your educational journey.
                    </p>
                    <p className="text-lg">
                        Explore our courses, discover new opportunities, and embark on a learning adventure with us!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
