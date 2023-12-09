import React from 'react';

const Faq = () => {

    return (
        <div className="mx-28 my-16">
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" checked="checked" />
                <div className="collapse-title text-xl font-medium">
                How do I submit an assignment?
                </div>
                <div className="collapse-content">
                    <p>To submit an assignment, navigate to the course page, locate the assignment, and follow the submission instructions provided by the instructor.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                How are assignments graded?
                </div>
                <div className="collapse-content">
                    <p>Assignments are graded by instructors based on predefined criteria. Feedback and grades are usually provided within a specified timeframe after submission.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                Can I access the platform on my mobile device?
                </div>
                <div className="collapse-content">
                    <p> Yes, the platform is compatible with various devices, including mobile phones and tablets. You can access course materials and features while on the go.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                Can I collaborate with others on assignments or projects?
                </div>
                <div className="collapse-content">
                    <p>Yes, the platform supports collaboration among students and educators. You can engage in group projects or study groups by using collaborative features provided.</p>
                </div>
            </div>
        </div>
    );
};

export default Faq;