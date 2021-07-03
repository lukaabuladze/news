import React, {useEffect, useState} from 'react';

export default function ({label, name, register, list = [], setValue, errorMessage}) {
  const [selectedValue, setSelectValue] = useState(995);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    register({name: name});
  }, [register]);

  const handleSelect = (selected) => {
    setSelectValue(selected.phone_code);
    let value = list.find(item => item.id == selected);

    setSelectValue(value.phone_code);
    setOpen(false);
  }

  const handleChange = val => {
    setValue(name, selectedValue+val);
  }

  return (
    <>
     <label>{label}</label>
      <div className="input-group mb-3">
        <div className="input-group-prepend col-12 p-0">
          <div className="col-3" style={{paddingRight: 0, paddingLeft: 0}}>
            <select
              style={{borderTopRightRadius: 0, borderBottomRightRadius: 0}}
              className={`custom-select ${errorMessage && 'is-invalid'}`}
              onChange={(e) => {
                handleSelect(e.target.value)
              }}
              onPointerDown={() => {setOpen(true)}}
              onMouseLeave={() => {setOpen(false)}}
            >
              {list.map((item, key) => (
                <option key={key} value={item.id}>
                  {open ? (item.name + ' ' + `+${item.phone_code}`) : `+${item.phone_code}`}
                </option>
              ))}
            </select>

          </div>
          <div className="col-9 p-0">
            <input
              style={{borderTopLeftRadius: 0, borderBottomLeftRadius: 0}}
              className="form-control"
              type="text"
              onChange={(e) => {handleChange(e.target.value)}}
            />
          </div>
        </div>
      </div>

      <div className="invalid-feedback d-block">
        {errorMessage}
      </div>
    </>
  );
}
