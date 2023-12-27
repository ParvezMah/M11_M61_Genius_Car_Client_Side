import { useContext } from "react";
import { AuthContext } from "../Providers/Authprovider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    // console.log('location : ', location.pathname);

    if(loading){
        return (
            <div className="flex justify-center items-center">
                <progress className="progress w-56 text-center my-20"></progress>;
            </div>
        )
    }

    if(user?.email){
        return children
    }

    return <Navigate to="/login" state={location.pathname} replace></Navigate>;
};

export default PrivateRoute;