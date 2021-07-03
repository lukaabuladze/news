import React, {useEffect, useState} from 'react';

export default function ({label, name, register, setValue, errorMessage, value, className = ''}) {
  const [changeLabel, setChangeLabel] = useState('');

  useEffect(() => {
    register({name: name});
  }, [register]);

  const handleChange = e => {
    setValue(name, e.target.files[0]);
    setChangeLabel(e.target.files[0]?.name || '');
  }

  return (
    <div className={`form-group ${className}`}>
      <label>{label}</label>
      <div className="custom-file">
        <input type="file" className="custom-file-input" id={name} onChange={e => handleChange(e)}/>
        <label className="custom-file-label" htmlFor={name}>{changeLabel || label}</label>
        <div className="invalid-feedback" style={{display: 'block'}}>{errorMessage}</div>
      </div>
      {value && typeof value === 'string' &&
      (
        <img src={value} alt='photo' style={{maxHeight: '250px', float: 'left'}} className='mx-auto d-block mt-2 mb-2'/>
      )
      }
    </div>
  );
}
