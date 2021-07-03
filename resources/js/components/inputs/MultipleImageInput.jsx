import React, {useEffect, useState} from 'react';

export default function ({label, name, register, setValue, errorMessage}) {
  const [changeLabel, setChangeLabel] = useState('');

  useEffect(() => {
    register({name: name});
  }, [register]);

  const handleChange = e => {
    const images = [...e.target.files];
    setValue(name, images);

    const count = e.target.files?.length || 0;
    setChangeLabel(count > 0 ? 'არჩეულია ' + count + ' ფოტო' : '');

  }

  return (
    <div className="form-group">
      <label>{label}</label>

      <div className="input-group">
        <div className="custom-file">
          <input type="file" accept="image/*" className="custom-file-input" multiple
                 aria-describedby="inputGroupFileAddon01"
                 onChange={e => handleChange(e)}/>
          <label className="custom-file-label" htmlFor="inputGroupFile01">{changeLabel || 'აირჩიეთ ფაილი'}</label>
        </div>
      </div>
      <div className="invalid-feedback" style={{display: 'block'}}>{errorMessage}</div>
    </div>

  )
}
