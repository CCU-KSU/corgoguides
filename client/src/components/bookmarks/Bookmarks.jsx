import { useEffect } from "react";

const Bookmarks = ({setHeader}) => {
    useEffect(() => {
        setHeader('Bookmarks');
    }, [setHeader])
    return (
        <>
            <h1>TBI</h1>
        </>
    );
}
 
export default Bookmarks;