import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import LoadingOverlay from "../components/affects/LoadingOverlay";
import { useLoading } from "../contexts/LoadingContext";

const WithPrivateRoute = ({children}) => {
    // const { currentUser, isLoading } = useAuth();

    const { currentUser } = useAuth();
    const { isLoading } = useLoading();

    // TODO: Replace with proper loader
    if (isLoading) {
        return <LoadingOverlay/>;
        // Origional: return <h1>Loading</h1>;
    }
    if (currentUser) {
        return children;
    }
    return ( <Navigate to={"/login"} /> );
};
 
export default WithPrivateRoute;