import { useEffect } from "react";

const AppCatalog = ({setHeader}) => {
    useEffect(() => {
        setHeader('Apps');
    }, [setHeader])
    return (
        <>
            <h1>TBI</h1>
        </>
    );
}
 
export default AppCatalog;