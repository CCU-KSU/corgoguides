import { useState } from "react";

const InputSingleLine = ({id, type, placeholder, required, value, label}) => {

    const [data, setValue] = useState('');

    const handleChange = (e) => {
        const newData = e.target.value;
        setValue(newData);
        value(newData);
    }

    return (
        <>
            <div className="input-bundle">
                <label htmlFor={id} className={ label ? 'input-label' : 'hide-me'} >{label}</label>
                <input id={id} name={id} type={type} value={data} className="input" placeholder={placeholder} onChange={handleChange} required={required}/>
            </div>
                
        </>
    );
}
 
export default InputSingleLine;