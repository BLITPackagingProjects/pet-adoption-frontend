import { createBrowserRouter } from "react-router-dom";
// import Employee from "../employee/Employees.jsx";
import LoginForm from "../loginForm/LoginForm.jsx";
import PetList from "../components/PetList.jsx";

const router = createBrowserRouter([

    {
        path:"/",
        element:<LoginForm/>
    },
    {
        path:"/views",
        element:<PetList/>
    }

]);

export default router;