import { useState } from "react";

const InputSelect = ({id, placeholder, required, options, value, label}) => {

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
                <select name={id} id={id} value={data} required={required} className="input" onChange={handleChange}>
                    {/* Placeholder */}
                    <option value="" disabled selected>-- {placeholder} --</option>
                    {/* Options here */}
                    {options.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                    ))}
                </select>
            </div>
                
        </>
    );
}
 
export default InputSelect;