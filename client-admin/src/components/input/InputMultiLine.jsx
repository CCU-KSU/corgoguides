import { useState, useEffect } from "react";

const InputMultiLine = ({id, type, rows, placeholder, required, value, label, initialValue, maxlength}) => {

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
                <textarea name={label} id={id} rows={rows} maxLength={maxlength} value={data} className="input-multiline" placeholder={placeholder} onChange={handleChange} required={required}></textarea>
            </div>
        </>
    );
}
 
export default InputMultiLine;