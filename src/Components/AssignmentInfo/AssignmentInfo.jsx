import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const AssignmentInfo = () => {
    const { id } = useParams();
    const [assignment, setAssignment] = useState(null);
    const [pdfLink, setPdfLink] = useState('');
    const [quickNote, setQuickNote] = useState('');
    const status= 'pending'
    const {user} = useAuth()
    const email = user?.email
    const examineeName = user?.displayName

    useEffect(() => {
        axios.get(`https://online-group-study-server-side-psi.vercel.app/getAssignment/${id}`)
            .then(response => {
                setAssignment(response.data);
            })
            .catch(error => {
                console.error('Error fetching assignment details:', error);
            });
    }, [id]);


    if (!assignment) {
        return <div>Loading...</div>;
    }

    
    const { title, description, marks, thumbnailURL, difficultyLevel } = assignment[0];
    const handleSubmitAssignment = (event) => {
        event.preventDefault()
        const assignmentDetails = {
            pdfLink,
            quickNote,
            email,
            title,
            marks,
            examineeName,
            status
        }
        // Use assignmentDetails state to send assignment data to the backend
        axios.post(`https://online-group-study-server-side-psi.vercel.app/submitAssignment`, assignmentDetails)
            .then(response => {
                document.getElementById('my_modal_5').close();
                toast.success('Assignment submitted successfully!');
            })
            .catch(error => {
                document.getElementById('my_modal_5').close();
                toast.error('Failed to submit assignment.');
            });

    };

    return (
        <div className="container mx-auto mt-8">
            <Toaster position="top-center" reverseOrder={false} />

            <div className="max-w-lg mx-auto">
                <img className="w-full h-64 object-cover mb-4 rounded-lg" src={thumbnailURL} alt={title} />

                <h2 className="text-3xl font-semibold mb-2">{title}</h2>
                <p className="text-gray-600 mb-4">{description}</p>

                <div className="flex justify-between items-center mb-4">
                    <div className="flex space-x-4">
                        <span className="bg-gray-200 px-3 py-1 rounded-full text-sm font-semibold">
                            Marks: {marks}
                        </span>
                        <span className="bg-gray-200 px-3 py-1 rounded-full text-sm font-semibold">
                            Difficulty: {difficultyLevel}
                        </span>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <button className="btn btn-success mb-2 px-[88px]" onClick={() => {
                        document.getElementById('my_modal_5').showModal();
                    }}>Take Assignment</button>

                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg text-center">Submit your assignment here!</h3>
                            <div className="modal-action flex flex-col items-center">
                                <form onSubmit={handleSubmitAssignment} className="w-full max-w-md">
                                    <div className="mb-4 w-full">
                                        <label className="block mb-2 text-sm">PDF</label>
                                        <input
                                            type="text"
                                            onChange={(e) => setPdfLink(e.target.value)}
                                            required
                                            placeholder="Your PDF link"
                                            className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                                        />
                                    </div>
                                    <div className="mb-4 w-full">
                                        <label className="block mb-2 text-sm">Quick Note</label>
                                        <textarea
                                            onChange={(e) => setQuickNote(e.target.value)}
                                            required
                                            placeholder="Add any quick note"
                                            className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                                        ></textarea>
                                    </div>
                                    <div className="flex justify-between w-full">
                                        <button type="submit" className="btn">Submit</button>
                                        <button type="button" className="btn" onClick={() => document.getElementById('my_modal_5').close()}>Close</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </dialog>

                    <Link to={`/Update Assignment/${id}`} className="btn btn-primary px-20">
                        Update Assignment
                    </Link>
                </div>

            </div>
        </div>

    );
};

export default AssignmentInfo;