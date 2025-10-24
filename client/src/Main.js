import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from "./contexts/AuthContext";
import LoadingOverlay from './components/affects/LoadingOverlay';
import PrivateRoute from './utils/PrivateRoute';
import Login from './screens/Login'
import App from './screens/App';
import Register from './screens/Register';

const Main = () => {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path='/' element={<Navigate to="/app" replace />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/register" element={<Register />} />
                    <Route path="/app/*" element={
                        <PrivateRoute>
                            <App />
                        </PrivateRoute>
                    } />
                </Routes>
            </Router>
        </AuthProvider>
    );
}
 
export default Main;