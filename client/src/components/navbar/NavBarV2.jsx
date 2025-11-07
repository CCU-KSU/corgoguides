import { createContext } from "react";

export const NavContext = createContext(null);

const NavBarV2 = ({children, baseNav}) => {
    return (
        <>
        <NavContext.Provider value={baseNav}>
            <div className="navbar">
                {children}
            </div>
        </NavContext.Provider>
        </>
    );
}
 
export default NavBarV2;