import React from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import AppsList from './pages/AppsList';
import Checklist from './pages/Checklist';
import ContentPage from './pages/ContentPage';
import Profile from './pages/Profile';

function App() {

  return (
    <div className="app-shell">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<RequireAuth><Home/></RequireAuth>} />
        <Route path="/apps" element={<RequireAuth><AppsList/></RequireAuth>} />
        <Route path="/checklist" element={<RequireAuth><Checklist/></RequireAuth>} />
        <Route path="/content/:appId" element={<RequireAuth><ContentPage/></RequireAuth>} />
        <Route path="/profile" element={<RequireAuth><Profile/></RequireAuth>} />
        <Route path="*" element={<Navigate to='/' replace />} />
      </Routes>
    </div>
  );
}

// Simple client-side auth wrapper using localStorage
export function RequireAuth({ children }){
  const navigate = useNavigate();
  const user = localStorage.getItem('cg_user');
  React.useEffect(()=>{
    if(!user) {
      navigate('/login', { replace: true });
    }
  }, [user, navigate]);
  if(!user) return null;
  return children;
}

export default App;
