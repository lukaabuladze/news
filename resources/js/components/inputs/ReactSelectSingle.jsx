import React, {useEffect, useState} from 'react';
import Select from "react-select";
export default function ReactSelectOption({isClearable=true, className='', blurInputOnSelect=false, label,
                                            placeholder='any', name, register, setValue,
                                            closeMenuOnSelect=true, options, getOptionLabel,
                                            getOptionValue, value, errorMessage, onChange, index, callBack }) {
  const [selectedValue, setSelectValue] = useState(null);

  useEffect(() => {
    register({name: name});
    setValue(name, value);
  }, [register]);

  useEffect(() => {
    setSelectValue(options?.filter((element) => {
      return element.id === value;
    }));
    setValue(name, value);
  },[value]);

  const handleSelect = selected => {
    setValue(name, selected?.id);
    setSelectValue(selected);
    if(onChange){
      onChange('id', index, selected?.id);
    }
  }

  return (
    <>
      <label>{label}</label>
      <Select
      classNamePrefix="react-select"
      menuPlacement="auto"
      maxMenuHeight={140}
      className={`selectOption `+ className}
      placeholder={placeholder}
      onChange={handleSelect}
      closeMenuOnSelect={closeMenuOnSelect}
      options={options}
      getOptionLabel = {getOptionLabel}
      getOptionValue = {getOptionValue}
      value = {selectedValue}
      blurInputOnSelect={blurInputOnSelect}
      isClearable={isClearable}
      isSearchable
      noOptionsMessage={() => " "}
    />
      <div className="invalid-feedback d-block">
        {errorMessage}
      </div>
    </>

  )
}
