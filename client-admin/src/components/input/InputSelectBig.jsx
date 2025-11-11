import { useState, useEffect } from "react";
import Select from "react-select"

const InputSelectBig = ({id, placeholder, required, options, value, initialValue, label}) => {
    const [data, setValue] = useState(initialValue || []);

    useEffect(() => {
            setValue(initialValue || []);
        }, [initialValue]);

    const handleChange = (selectedOptions) => {
        const newData = selectedOptions.map(obj => obj.value);
        setValue(newData);
        value(newData);
    }

    return (
        <>
            <div className="input-bundle">
                <label htmlFor={id} className={ label ? 'input-label' : 'hide-me'} >{label}</label>
                <Select
                    id={id}
                    placeholder={placeholder}
                    options={options.map(item => ({
                        value: item,
                        label: item
                    }))}
                    isMulti
                    closeMenuOnSelect={false}
                    required={required ? true : false}
                    onChange={handleChange}
                    value={data.map(item => ({
                        value: item,
                        label: item
                    }))}
                    classNamePrefix={'input-select-multi'}
                />
            </div>
        </>
                
    );
}
 
export default InputSelectBig;