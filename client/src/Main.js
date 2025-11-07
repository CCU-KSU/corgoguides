import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from "./contexts/AuthContext";
import { LoadingProvider } from './contexts/LoadingContext';
import PrivateRoute from './utils/PrivateRoute';
import Login from './screens/Login'
import App from './screens/App';
import Register from './screens/Register';
import Onboarding from './screens/Onboarding';

const Main = () => {
    return (
        <AuthProvider>
            <LoadingProvider>
                <Router>
                    <Routes>
                        <Route path='/' element={<Navigate to="/app" replace />} />
                        <Route exact path="/login" element={<Login />} />
                        <Route exact path="/register" element={<Register />} />
                        <Route exact path="/onboarding" element={
                            <PrivateRoute>
                                <Onboarding />
                            </PrivateRoute>
                        } />
                        <Route path="/app/*" element={<App />} />
                    </Routes>
                </Router>
            </LoadingProvider>
        </AuthProvider>
    );
}
 
export default Main;