import { useEffect } from "react";

const Checklist = ({setHeader}) => {
    useEffect(() => {
        setHeader('Checklist');
    }, [setHeader]);
    return (
        <>

        </>
    );
}
 
export default Checklist;