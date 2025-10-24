import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../configs/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { useLoading } from './LoadingContext';

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({children}) => {
    // const [token, setToken] = useState(null);
    const [currentUser, setCurrentUser] = useState();
    // TODO: Replace with proper loader
    // const [isLoading, setIsLoading] = useState(true)

    const { isLoading, loadingStart, loadingFinish } = useLoading();

    const register = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logout = () => {
        return signOut(auth);
    }

    useEffect(
        () => {
            loadingStart()
            const observe = auth.onAuthStateChanged((user) => {
                setCurrentUser(user);
                // TODO: Replace with proper loader
                // setIsLoading(false)
                loadingFinish()
            });
            return observe
        }, 
        []
    );

    const value = {
        currentUser,
        login,
        register,
        logout,
        // TODO: Replace with proper loader
        isLoading,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}