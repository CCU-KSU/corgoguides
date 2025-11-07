import { Link } from "react-router-dom";

const ButtonLink = ({label, navTo}) => {
    return (
        <>
            <Link className="button-link" to={navTo}>
                {label}
            </Link>
        </>
    );
}
 
export default ButtonLink;