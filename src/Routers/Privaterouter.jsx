import React, { useContext } from 'react';
import { AuthContex } from '../Provider/AuthProviders';
import { Navigate } from 'react-router-dom';

const Privaterouter = ({children}) => {
    const {user,logOut}=useContext(AuthContex);
    if(user)
    {
        return children;
    }
    return <Navigate to={'/login'} replace={true}></Navigate>;
};

export default Privaterouter;