import React from 'react';

const Features = () => {
    const features = [
        {
            id: 1,
            title: 'Assignment Submission',
            description: 'Description for Feature 1...',
        },
        {
            id: 2,
            title: 'Assignment Grading',
            description: 'Enable instructors to efficiently grade assignments and provide feedback.',
        },
        {
            id: 3,
            title: 'Multi-User Support',
            description: 'Facilitate collaboration among students and educators in group projects or study groups.',
        },
        {
            id: 4,
            title: 'Mobile Compatibility',
            description: 'Ensure seamless access to the platform from various devices for on-the-go learning.',
        },
    ];

    return (
        <section className="py-8">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-4 text-center">Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {features.map(feature => (
                        <div key={feature.id} className="bg-white shadow-md p-6 rounded-md">
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;