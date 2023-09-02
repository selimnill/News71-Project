import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';


const PrivateRoutes = ({children}) => {

    const {user, loading } = useContext(AuthContext);

    const location = useLocation();

    if(loading){
        return <div className="text-center mt-5"><Spinner animation="grow" variant="dark" /></div>
    }

    if(!user){
        return <Navigate to='/login' state={{from: location}} replace></Navigate>;
    }

    return children;
};
export default PrivateRoutes;