import React from 'react';
import { useLoading } from '../../contexts/LoadingContext';

const LoadingOverlay = () => {

    const { isLoading } = useLoading();
    
    if (!isLoading) {
        return null;
    }

    return (
        <>
        <div className="content-center loading-overlay">
            <div className="spinner">
                {/* TODO: Replace with Spinner */}
                <h1>Loading...</h1>
            </div>
        </div>
        </>
    );
};
 
export default LoadingOverlay;