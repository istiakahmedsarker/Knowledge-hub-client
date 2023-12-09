import axios from 'axios';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Toaster, toast } from 'react-hot-toast';
import useAuth from '../../Hooks/useAuth';

const CreateAssignment = () => {
    const { user } = useAuth()
    const email = user?.email
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [marks, setMarks] = useState(0);
    const [thumbnail, setThumbnail] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [dueDate, setDueDate] = useState(new Date());

    const handleSubmit = (e) => {
        e.preventDefault();
        const assignmentData = {
            email,
            title,
            description,
            marks,
            thumbnail,
            difficulty,
            dueDate,
        };

        axios.post('https://online-group-study-server-side-psi.vercel.app/createAssignment', assignmentData)
            .then(response => {
                toast.success('Successfully Signed Up!')
            })
            .catch(error => {

                console.error('Error posting data:', error);

                toast.error("Failed to sign up")
            });
    };

    return (
        <div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className="flex flex-col mx-auto max-w-2xl p-6 rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100">
                <form onSubmit={handleSubmit} className="space-y-12">
                    <div className="space-y-4">
                        <div>
                            <label className="block mb-2 text-sm">Title</label>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                                placeholder="Title"
                                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm">Description</label>
                            <textarea
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                                placeholder="Description"
                                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                            ></textarea>
                        </div>
                        <div>
                            <label className="block mb-2 text-sm">Marks</label>
                            <input
                                type="number"
                                value={marks}
                                onChange={(e) => setMarks(e.target.value)}
                                required
                                placeholder="Marks"
                                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm">Thumbnail</label>
                            <input
                                type="text"
                                value={thumbnail}
                                onChange={(e) => setThumbnail(e.target.value)}
                                required
                                placeholder="Thumbnail"
                                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm">Difficulty</label>
                            <select
                                value={difficulty}
                                onChange={(e) => setDifficulty(e.target.value)}
                                required
                                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                            >
                                <option value="" disabled>Select Difficulty</option>
                                <option value="easy">Easy</option>
                                <option value="medium">Medium</option>
                                <option value="hard">Hard</option>
                            </select>
                        </div>
                        <div>
                            <label className="block mb-2 text-sm">Due Date</label>
                            <DatePicker
                                selected={dueDate}
                                onChange={(date) => setDueDate(date)}
                                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <button type="submit" className="btn btn-info w-full">
                                Add Assignment
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateAssignment;
