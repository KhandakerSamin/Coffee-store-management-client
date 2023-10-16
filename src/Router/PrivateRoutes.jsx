/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";

const PrivateRoute = ({children}) => {

    const { user, loading } = useContext(AuthContext);

    const location = useLocation();


    if (loading) {
        <span className="loading loading-dots loading-lg"></span>
        return;
    }

    if(user) {
        return children;
    }

    return <Navigate state={location.pathname} to='/signIn'></Navigate>
};

export default PrivateRoute;