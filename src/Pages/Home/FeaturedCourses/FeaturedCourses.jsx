import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedCourses = () => {
    const featuredCourses = [
        {
            id: 1,
            title: 'Web Development Fundamentals',
            description: 'Learn the basics of HTML, CSS, and JavaScript.',
            imageUrl: 'course-image-1.jpg',
            price: 49.99,
        },
        {
            id: 2,
            title: 'Advanced React Techniques',
            description: 'Master advanced concepts and best practices in React.',
            imageUrl: 'course-image-2.jpg',
            price: 79.99,
        },
        {
            id: 3,
            title: 'Data Science for Beginners',
            description: 'Explore the world of data science with hands-on projects.',
            imageUrl: 'course-image-3.jpg',
            price: 64.99,
        },
    ];

    return (
        <div className="container mx-auto my-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Featured Courses</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredCourses.map(course => (
                    <div key={course.id} className="bg-white rounded-md shadow-md overflow-hidden">
                        <img src={course.imageUrl} alt={course.title} className="w-full h-40 object-cover" />
                        <div className="p-4">
                            <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                            <p className="text-gray-600 mb-4">{course.description}</p>
                            <div className="flex justify-between items-center">
                                <span className="text-lg font-bold">${course.price}</span>
                                <button className="bg-green-500 text-white font-medium px-4 py-2 rounded-full hover:bg-green-600 transition duration-300">
                                    Enroll Now
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-8">
                <Link to="/Courses">
                    <button className="bg-green-500 text-white font-medium px-6 py-3 rounded-full hover:bg-green-600 transition duration-300">
                        Discover Courses
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default FeaturedCourses;
