import axios from 'axios';
import useAuth from '../../Hooks/useAuth'
import { useState, useEffect } from 'react'

import { Toaster, toast } from 'react-hot-toast';

const DeleteAssignment = ({ id }) => {
    const { user } = useAuth()
    const email = user?.email
    const [assignmentEmail, setAssignmentEmail] = useState([])
    const handleDelete = async() => {
        await axios.get(`https://online-group-study-server-side-psi.vercel.app/getAssignment/${id}`)
            .then(response => {
                setAssignmentEmail(response.data[0]?.email)
            }, error => {
                console.log(error)
            });

            if(email === assignmentEmail){
                axios.delete(`https://online-group-study-server-side-psi.vercel.app/deleteAssignment/${id}`)
                    .then(response => {
                        toast.success('Successfully deleted the assignment!')
                    }, error => {
                        console.log(error)
                        toast.error("Failed to delete the assignment")
                    });
            }else{
                toast.error("Failed to delete the assignment")
            }
    }
    return (
        <div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <button onClick={handleDelete} className="btn btn-error">Delete</button>
        </div>
    );
};

export default DeleteAssignment;