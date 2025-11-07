import { Link } from "react-router-dom";
import { useContext } from "react";
import { NavContext } from "./NavBarV2";
import defaultIcon from "../../assets/icons/placeholder.svg"


const NavBarButtonV2 = ({iconRef, navTo}) => {

    const baseNav =  useContext(NavContext);
    return (
        <>
            <Link className="navbar-button content-center" to={`${baseNav}/${navTo}`}>
                <img src={iconRef? iconRef:defaultIcon}/>
            </Link>
        </>
    );
}
 
export default NavBarButtonV2;