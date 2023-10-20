/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from '../Firebase/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location.pathname)
    if(loading){
        return <span className="loading loading-ring loading-lg "></span>
    }
    if(user){
        return children
    }
    return <Navigate  state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoute;