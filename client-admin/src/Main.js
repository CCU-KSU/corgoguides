import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from './utils/PrivateRoute';

import MainBody from './components/bodies/MainBody';
import Login from './screens/Login'
import App from './screens/App';

const Main = () => {
    return (
        <AuthProvider>
            <MainBody>
                <Router>
                    <Routes>
                        <Route path='/' element={<Navigate to="/app" replace />} />
                        <Route exact path="/login" element={<Login />} />
                        <Route path="/app/*" element={
                            <PrivateRoute>
                                <App />
                            </PrivateRoute>
                        } />
                    </Routes>
                </Router>
            </MainBody>
        </AuthProvider>
    );
}
 
export default Main;