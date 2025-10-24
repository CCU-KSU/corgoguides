import { useState } from "react";

const InputSingleLine = ({type, placeholder, required, value}) => {

    const [data, setValue] = useState('')

    const handleChange = (e) => {
        const newData = e.target.value
        setValue(newData)
        value(newData)
    }

    return (
        <>
            <input type={type} value={data} className="input" placeholder={placeholder} onChange={handleChange}/>
        </>
    );
}
 
export default InputSingleLine;