import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from '../Pages/Home/Home'
import Login from '../Pages/Login/Login'
import SignUp from '../Pages/SignUp/SignUp'
import AllAssignmentPage from "../Pages/AllAssignmentPage/AllAssignmentPage";
import CreateAssignment from "../Components/CreateAssignment/CreateAssignment";
import UpdateAssignment from "../Components/UpdateAssignment/UpdateAssignment";
import DeleteAssignment from "../Components/DeleteAssignment/DeleteAssignment";
import AssignmentInfo from "../Components/AssignmentInfo/AssignmentInfo";
import AllSubmittedAssignments from "../Components/AllSubmittedAssignments/AllSubmittedAssignments";
import PrivateRoute from '../Routes/PrivateRoute'
import MyAssignmentPage from "../Components/MyAssignmentPage/MyAssignmentPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/Home",
                element: <Home></Home>,
            },
            {
                path: "/All Assignments page",
                element: <AllAssignmentPage></AllAssignmentPage>,
            },
            {
                path: "/Create Assignment",
                element: <PrivateRoute><CreateAssignment></CreateAssignment></PrivateRoute>,
            },
            {
                path: "/Update Assignment/:id",
                element: <PrivateRoute><UpdateAssignment></UpdateAssignment></PrivateRoute>
                ,
            },
            {
                path: "/assignmentInfo/:id",
                element: <PrivateRoute><AssignmentInfo></AssignmentInfo></PrivateRoute>,
            },
            {
                path: "/All Submitted Assignments",
                element: <PrivateRoute><AllSubmittedAssignments></AllSubmittedAssignments></PrivateRoute>
            },
            {
                path: "/Delete Assignment",
                element: <PrivateRoute><DeleteAssignment></DeleteAssignment></PrivateRoute>,
            },
            {
                path: "/My Assignment Page",
                element: <PrivateRoute><MyAssignmentPage/> </PrivateRoute>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/SignUp",
                element: <SignUp></SignUp>,
            }
        ]
    },
]);

export default router;