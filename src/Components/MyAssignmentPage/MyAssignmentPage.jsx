import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';

const MyAssignmentPage = () => {
    const { user } = useAuth()
    const email = user?.email
    const [assignments, setAssignments] = useState([])
    useEffect(() => {
        axios.get(`https://online-group-study-server-side-psi.vercel.app/getAssignmentsByEmail/${email}`)
            .then((res) => {
                setAssignments(res.data)
            });
    }, []);
    console.log(assignments)

    return (
        <div className="container mx-auto my-8">
            <h1 className="text-3xl font-bold mb-4 text-center">My Assignments</h1>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {assignments.length === 0 ? (
                    <p>No assignments submitted yet.</p>
                ) : (
                    assignments.map((assignment) => (
                        <div
                            key={assignment._id}
                            className="border rounded-md p-4 bg-white shadow-md"
                        >
                            <h3 className="text-lg font-semibold mb-2">{assignment.title}</h3>
                            <p className="text-gray-600 mb-2">Assignment Status: {assignment.status}</p>
                            <p className="text-gray-600 mb-2">Assignment Marks: {assignment.marks}</p>
                            <p className="text-gray-600 mb-2">Your Obtained Marks: {assignment.givenMarks}</p>
                            {assignment.feedback && (
                                <p className="text-gray-600 mb-2">Feedback: {assignment.feedback}</p>
                            )}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default MyAssignmentPage;