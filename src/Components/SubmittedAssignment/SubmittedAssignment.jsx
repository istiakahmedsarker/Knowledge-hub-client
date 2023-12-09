import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Document, Page, pdfjs } from 'react-pdf';

const SubmittedAssignment = ({ assignment,onUpdate  }) => {
    const [givenMarks, setGivenMarks] = useState(0);
    const [feedback, setFeedback] = useState('');


    const { title, examineeName, marks, quickNote, _id, pdfLink } = assignment

    const handleRefresh = (event) => {
        event.preventDefault()
    };

    const handleSubmit =async (_id) => {
        const status = 'checked'
        const data = {
            status,
            givenMarks,
            feedback
        }
        axios.put(`https://online-group-study-server-side-psi.vercel.app/updateMarkedAssignment/${_id}`, data)
            .then(response => {
                document.getElementById(`my_modal_5_${_id}`).close()
                toast.success('Successfully marked the assignment!')
            })
            .then(() => {
                onUpdate(_id);
            })
            .catch(error => {
                document.getElementById(`my_modal_5_${_id}`).close()
                toast.error("Failed to mark assignment")
            });
    }

    return (
        <div>
            <div className="max-w-md  shadow-xl mx-auto bg-white rounded-md overflow-hidden mb-6">
                <div className="p-12">
                    <h3 className="text-lg font-semibold mb-2">{title}</h3>
                    <p className="text-gray-600 mb-2">Examinee: {examineeName}</p>
                    <p className="text-gray-600 mb-2">Marks: {marks}</p>
                </div>
                <div className="bg-gray-100 px-4 py-2 flex justify-end">
                    <div className="flex flex-col items-center">
                        <button className="btn btn-info mb-2" onClick={() => document.getElementById(`my_modal_5_${_id}`).showModal()}>
                            Give Marks
                        </button>


                        <dialog id={`my_modal_5_${_id}`} className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg text-center">Marks the assignment here!</h3>
                                <div className="modal-action flex flex-col items-center">
                                    <form onSubmit={handleRefresh} className="w-full max-w-md">
                                        <div className="mb-4 w-full">
                                            <label className="block mb-2 text-sm">PDF Overview</label>
                                            <div className="w-full">
                                                <div className="mb-4 w-full">
                                                    {pdfLink && (
                                                        <Document file={pdfLink}>
                                                            <Page pageNumber={1} />
                                                        </Document>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-4 w-full">
                                            <label className="block mb-2 text-sm">User quick note</label>
                                            <textarea
                                                defaultValue={quickNote}
                                                required
                                                placeholder="User quick note"
                                                className="w-full px-3 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                                                readOnly
                                            ></textarea>
                                        </div>
                                        <div className="mb-4 w-full">
                                            <label className="block mb-2 text-sm">Marks</label>
                                            <input
                                                type="number"
                                                onChange={(e) => setGivenMarks(e.target.value)}
                                                value={givenMarks}
                                                max={parseInt(marks)}
                                                required
                                                placeholder="Give Marks"
                                                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                                            />
                                        </div>

                                        <div className="mb-4 w-full">
                                            <label className="block mb-2 text-sm">Feedback</label>
                                            <textarea
                                                onChange={(e) => setFeedback(e.target.value)}
                                                required
                                                placeholder="Give feedback"
                                                className="w-full px-3 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                                            ></textarea>
                                        </div>
                                        <div className="flex justify-between w-full">
                                            <button onClick={()=>handleSubmit(_id)} type="submit" className="btn">
                                                Submit
                                            </button>
                                            <button
                                                type="button"
                                                className="btn"
                                                onClick={() => document.getElementById(`my_modal_5_${_id}`).close()}
                                            >
                                                Close
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubmittedAssignment;