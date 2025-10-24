import { Children, createContext, useContext, useEffect, useState } from 'react';

const LoadingContext = createContext();
export const useLoading = () => useContext(LoadingContext);

export const LoadingProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const loadingStart = () => setIsLoading(true);
    const loadingFinish = () => setIsLoading(false);

    const value = {
        isLoading,
        loadingStart,
        loadingFinish
    }

    return (
        <LoadingContext.Provider value={value}>
            {children}
        </LoadingContext.Provider>
    );
};