import { useState } from "react";
import SearchIcon from "../../assets/icons/search-svgrepo-com.svg"

const SearchBar = ( {id, value, searchItem} ) => {

    const [data, setValue] = useState('');

    const handleChange = (e) => {
        const newData = e.target.value;
        setValue(newData);
        value(newData);
    }

    return (
        <>
            <div className="search-bar">
                <div className="search-bar-icon">
                    <img src={SearchIcon} alt="" />
                </div>
                <input className="search-bar-field" id={id} type="text" value={data} placeholder={`Search ${searchItem}`} onChange={handleChange} onSubmit={(e) => {console.log(e.target.value);
                }}/>
            </div>
        </>
    );
}
 
export default SearchBar;