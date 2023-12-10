import React, { useState } from 'react';

const Faq = () => {
    const faqData = [
        {
            question: 'What courses do you offer?',
            answer: 'We offer a diverse range of courses, including web development, data science, mobile app development, and more. Explore our catalog for the full list.',
        },
        {
            question: 'How can I enroll in a course?',
            answer: 'Enrolling in a course is easy! Simply visit the course page, click on the "Enroll Now" button, and follow the registration steps.',
        },
        {
            question: 'Are the courses free?',
            answer: "No we don't offer any free course. Check the course details for information on pricing and available discounts.",
        },
    ];

    const [openIndex, setOpenIndex] = useState(null);

    // Function to toggle the open/close state of a question
    const toggleQuestion = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className="container mx-auto my-10">
            <h2 className="text-3xl font-bold mb-8 text-center">FAQ</h2>
            <div className="space-y-4">
                {faqData.map((item, index) => (
                    <div key={index} className="bg-white rounded-md shadow-md overflow-hidden">
                        <div
                            onClick={() => toggleQuestion(index)}
                            className="flex items-center justify-between cursor-pointer p-4 border-b border-gray-200"
                        >
                            <h3 className="text-lg font-bold">{item.question}</h3>
                            <span>{openIndex === index ? '▲' : '▼'}</span>
                        </div>
                        {openIndex === index && (
                            <div className="p-4">
                                <p className="text-gray-600">{item.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faq;
