import { useContext } from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading)
    {
        return <progress className="my-24 mx-auto ms-20 md:ms-36 progress w-56"></progress>
    }
    if(user)
    {
        return children;
    }
    return <Navigate to='/login' state={location.pathname} replace></Navigate>

};

export default PrivateRoute;