import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../components/Login/Login";
import Signup from "../components/Signup/Signup";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";


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