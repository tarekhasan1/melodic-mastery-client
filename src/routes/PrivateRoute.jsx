/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";

const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    const currentLocation = useLocation();

    return user ? (
        children
    ) : (
        <Navigate
            to="/login"
            state={{ from: currentLocation.pathname }}
            replace
        />
    );
};
export default PrivateRoute;
