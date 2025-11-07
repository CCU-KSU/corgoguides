import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../configs/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);

    const [loading, setLoading] = useState(true) //TODO: Remove when proper loader is implemented

    const register = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logout = () => {
        return signOut(auth);
    }

    // useEffect(() => {
    //     const observe = auth.onAuthStateChanged((user) => {
    //         setCurrentUser(user);
    //         setLoading(false); //TODO: Remove when proper loader is implemented
    //     });
    //     return observe
    // }, []);

    useEffect(() => {
        const MIN_LOADING_TIME = 1500; 
        const startTime = Date.now();

        const observe = auth.onAuthStateChanged((user) => {
            const timeElapsed = Date.now() - startTime;
            const remainingTime = MIN_LOADING_TIME - timeElapsed;
            const delay = Math.max(0, remainingTime);

            setTimeout(() => {
                setCurrentUser(user);
                setLoading(false); 
            }, delay);
            
        });//TODO: Remove when proper loader is implemented
        return observe
    }, []);

    const value = {
        currentUser,
        login,
        register,
        logout,
        loading, //TODO: Remove when proper loader is implemented
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}