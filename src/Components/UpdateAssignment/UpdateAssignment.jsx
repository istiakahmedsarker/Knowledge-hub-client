import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Toaster, toast } from 'react-hot-toast';

const UpdateAssignment = () => {
    const { id } = useParams()
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [marks, setMarks] = useState(0);
    const [thumbnail, setThumbnail] = useState('');
    const [difficultyLevel, setDifficultyLevel] = useState('');
    const [dueDate, setDueDate] = useState(new Date());

    useEffect(() => {
        axios.get(`https://online-group-study-server-side-psi.vercel.app/getAssignment/${id}`)
            .then(response => {
                setTitle(response.data[0]?.title || '');
                setDescription(response.data[0]?.description || '');
                setMarks(parseInt(response.data[0]?.marks) || 0);
                setThumbnail(response.data[0]?.thumbnailURL || '');
                setDifficultyLevel(response.data[0]?.difficultyLevel || '');
                setDueDate(response.data[0]?.dueDate ? new Date(response.data[0]?.dueDate) : new Date());
                console.log(response.data)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [])

    const handleUpdate = (e) => {
        e.preventDefault();
        const updatedData = {
            title,
            description,
            marks,
            thumbnail,
            difficultyLevel,
            dueDate,
        };

        axios.put(`https://online-group-study-server-side-psi.vercel.app/updateAssignment/${id}`, updatedData)
            .then(response => {
                toast.success('Successfully updated assignment!')
            })
            .catch(error => {

                console.error('Error posting data:', error);

                toast.error("Failed to update assignment")
            });
        console.log(updatedData)

    };

    return (
        <div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className="flex flex-col mx-auto max-w-2xl p-6 rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100">
                <form  className="space-y-12">
                    <div className="space-y-4">
                        <div>
                            <label className="block mb-2 text-sm">Title</label>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Title"
                                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm">Description</label>
                            <textarea
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
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
                                placeholder="Thumbnail"
                                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm">Difficulty</label>
                            <select
                                value={difficultyLevel}
                                onChange={(e) => setDifficultyLevel(e.target.value)}
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
                            <button onClick={handleUpdate} type="submit" className="btn btn-info w-full">
                                Update Assignment
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateAssignment;