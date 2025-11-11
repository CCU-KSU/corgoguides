import { useState, useEffect } from "react";

const InputSingleLine = ({id, type, placeholder, required, value, label, initialValue}) => {

    const [data, setValue] = useState(initialValue || '');

    useEffect(() => {
        setValue(initialValue || '');
    }, [initialValue]);

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