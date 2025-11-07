import { createContext, useContext, useState, useCallback, useMemo } from 'react';

const LoadingContext = createContext();
export const useLoading = () => useContext(LoadingContext);

export const LoadingProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false);

    const updateLoading = useCallback((loading) => {
        setIsLoading(loading);
    }, []);

    const value = useMemo(() => ({
        isLoading,
        updateLoading,
    }), [isLoading, updateLoading]);

    return (
        <LoadingContext.Provider value={value}>
            {children}
        </LoadingContext.Provider>
    );
};