import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../components/Login/Login";
import Signup from "../components/Signup/Signup";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import Instructor from "../pages/Instructor/Instructor";
import AllClasses from "../pages/Classes/AllClasses";
import Dashboard from "../pages/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/classes',
          element: <AllClasses></AllClasses>
        },
        {
          path: '/instructors',
          element: <Instructor></Instructor>
        },
        {
          path: '/dashboard',
          element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
          path: '/register',
          element: <Signup></Signup>
        }
      ]
    },
  ]);

  export default router;