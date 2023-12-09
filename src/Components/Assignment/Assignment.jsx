import React from 'react';
import DeleteAssignment from '../DeleteAssignment/DeleteAssignment';
import { Link } from 'react-router-dom';

const Assignment = ({ data }) => {
    const { title, description, marks, thumbnailURL, difficultyLevel, _id } = data;

    return (
        <div className="">
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white relative">
                <img className="w-full h-48 object-cover" src={thumbnailURL} alt={title} />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{title}</div>
                    <p className="text-gray-700 text-base">{description}</p>
                </div>
                <div className="px-6 py-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        Marks: {marks}
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                        Difficulty: {difficultyLevel}
                    </span>
                </div>
                <div className="flex justify-between p-2">
                    <Link to={`/assignmentInfo/${_id}`}>
                        <button className="btn btn-info">More Info</button>
                    </Link>
                    <DeleteAssignment id={_id} />
                </div>
            </div>
        </div>
    );
};

export default Assignment;
