import React, {useEffect, useState} from 'react';
import Select from "react-select";
export default function ReactSelectOption({isClearable, className, blurInputOnSelect, label, placeholder, name, register, setValue, closeMenuOnSelect, options, getOptionLabel, getOptionValue, values, errorMessage }) {
  const [selectedValues, setSelectValues] = useState([]);

  useEffect(() => {
    if(values?.length) {
      const filtered = options.filter(item => values.includes(item.id));
      setSelectValues(filtered);
      setValue(name, values);
    }
  },[values]);

  useEffect(() => {
    register({name: name});
  }, [register]);

  const handleSelect = selected => {
    setValue(name, selected.map(item=>{
      return item.id
    }));
    setSelectValues(selected);
  }

  return (
    <>
      <label>{label}</label>
      <Select
      classNamePrefix="react-select"
      menuPlacement="auto"
      maxMenuHeight={90}
      className={`selectOption `+ className}
      placeholder={placeholder}
      onChange={handleSelect}
      closeMenuOnSelect={closeMenuOnSelect}
      options={options}
      getOptionLabel = {getOptionLabel}
      getOptionValue = {getOptionValue}
      value = {selectedValues}
      isMulti
      blurInputOnSelect={blurInputOnSelect}
      isClearable={isClearable}
      noOptionsMessage={() => " "}
    />
      <div className="invalid-feedback d-block">
        {errorMessage}
      </div>
    </>

  )
}
