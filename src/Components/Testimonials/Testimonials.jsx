import React from 'react';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: 'Emily',
            position: 'The assignment submission process was seamless! I could easily upload my work and track its status. It made managing my tasks so much easier.',
        },
        {
            id: 2,
            name: 'Alex',
            position: 'Getting prompt feedback on my assignments was fantastic! It helped me understand where I needed improvement and boosted my confidence.',
        },
        {
            id: 3,
            name: 'Sophia',
            position: 'The marking system was transparent and fair. I appreciated the detailed feedback that helped me learn and grow academically.',
        },
    ];

    return (
        <section className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map(testimonial => (
                        <div key={testimonial.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
                            <div className="p-6">
                                <p className="text-gray-700 mb-4">{testimonial.testimonial}</p>
                                <p className="text-gray-600 font-semibold">{testimonial.name}</p>
                                <p className="text-gray-500">{testimonial.position}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
