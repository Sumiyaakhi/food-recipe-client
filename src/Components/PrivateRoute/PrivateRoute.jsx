import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { ClapSpinner } from 'react-spinners-kit';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation()
    
    if(loading){
        return  <div className="flex items-center justify-center">
                       
        <ClapSpinner className="w-10 h-10"></ClapSpinner>
     </div>
    }
    if(user){
        return children
    }
    return <Navigate to='/login' replace state={{from:location}}></Navigate>
};

export default PrivateRoute;