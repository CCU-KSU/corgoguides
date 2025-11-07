import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

import Spinner from "../components/affects/Spinner"; //TODO: Remove when proper loader is implemented

const WithPrivateRoute = ({children}) => {

    const { currentUser, loading } = useAuth(); //TODO: Remove 'loading' when proper loader is implemented

    if (loading) { 
        return <Spinner/>;
    } //TODO: Remove when proper loader is implemented

    if (currentUser) {
        return children;
    }
    return ( <Navigate to={"/login"} /> );
};
 
export default WithPrivateRoute;