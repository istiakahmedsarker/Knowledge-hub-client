import React from 'react';

const Banner = () => {
    return (
        <div className="relative">
            <img
                src="https://i.ibb.co/ZTN6qzy/photo-1517673132405-a56a62b18caf-q-80-w-2076-auto-format-fit-crop-ixlib-rb-4-0.jpg"
                alt="Banner"
                className="w-full h-auto rounded-md shadow-md"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 text-white flex justify-center items-center">
                <h1 className="sm:text-4xl md:text-4xl lg:text-5xl font-bold uppercase text-center">
                Knowledge Hub <br /> Uniting Minds for Learning Adventures
                </h1>
            </div>
        </div>
    );
};

export default Banner;
