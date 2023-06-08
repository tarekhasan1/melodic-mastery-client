import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../components/Login/Login";
import Signup from "../components/Signup/Signup";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
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