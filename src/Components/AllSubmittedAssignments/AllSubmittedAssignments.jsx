import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SubmittedAssignment from '../SubmittedAssignment/SubmittedAssignment';

const AllSubmittedAssignments = () => {
    const [submittedAssignments, setSubmittedAssignments] = useState([]);

    useEffect(() => {
        axios.get("https://online-group-study-server-side-psi.vercel.app/getSubmittedAssignments")
            .then((res) => {
                const pendingAssignments = res.data.filter(assignment => assignment.status === 'pending');
                setSubmittedAssignments(pendingAssignments);
            });
    }, []);


    const handleAssignmentUpdate = (updatedAssignmentId) => {
        setSubmittedAssignments(prevAssignments =>
            prevAssignments.filter(assignment => assignment._id !== updatedAssignmentId)
        );
    };

    return (
        <div className="grid gap-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {submittedAssignments.map((assignment) => (
                <SubmittedAssignment key={assignment._id} assignment={assignment} onUpdate={handleAssignmentUpdate} />
            ))}

        </div>
    );
};

export default AllSubmittedAssignments;
