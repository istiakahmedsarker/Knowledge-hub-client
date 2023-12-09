import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Assignment from '../../Components/Assignment/Assignment';
import { Pagination } from '@mui/material';

const cardsPerPage = 6;

const AllAssignmentPage = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [selectedDifficulty, setSelectedDifficulty] = useState('all');

    useEffect(() => {
        axios.get('https://online-group-study-server-side-psi.vercel.app/getAssignment')
            .then(response => {
                setLoading(false);
                setData(response.data);
                setFilteredData(response.data);
            })
            .catch(error => {
                setLoading(false);
                console.error('Error fetching data:', error);
            });
    }, []);

    useEffect(() => {
        filterByDifficulty();
    }, [selectedDifficulty, data]);

    const filterByDifficulty = () => {
        if (selectedDifficulty === 'all') {
            setFilteredData(data);
        } else {
            const filtered = data.filter(item => item.difficultyLevel === selectedDifficulty);
            setFilteredData(filtered);
        }
        setCurrentPage(1);
    };

    const handleChange = (event, value) => {
        setCurrentPage(value);
    };

    const handleDifficultyChange = (event) => {
        setSelectedDifficulty(event.target.value);
    };

    const indexOfLastItem = currentPage * cardsPerPage;
    const indexOfFirstItem = indexOfLastItem - cardsPerPage;
    const currentData = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <div>
            <div className='flex justify-center my-4'>
                <select
                    onChange={handleDifficultyChange}
                    value={selectedDifficulty}
                    style={{
                        padding: '8px',
                        fontSize: '16px',
                        borderRadius: '5px',
                        border: '1px solid #ccc',
                        backgroundColor: '#fff',
                        outline: 'none',
                        minWidth: '150px',
                    }}
                >
                    <option value="all">All</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
            </div>
            {loading ? (
                <div className="flex justify-center my-10">
                    <span className="loading loading-spinner text-secondary"></span>
                </div>
            ) : (
                <div>
                    <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mx-10'>
                        {currentData.map(item => (
                            <Assignment key={item._id} data={item} />
                        ))}
                    </div>
                    <div className='flex justify-center mt-4'>
                        <Pagination
                            variant="outlined" color="primary"
                            count={Math.ceil(filteredData.length / cardsPerPage)}
                            page={currentPage}
                            onChange={handleChange}
                            shape="rounded"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default AllAssignmentPage;
