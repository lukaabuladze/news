import React, {useEffect, useState} from 'react';

export default function ({label, name, register, setValue, watch, errorMessage, className = ""}) {
  const [changeLabel, setChangeLabel] = useState("");
  const [fileUrl, setFileUrl] = useState('');

  useEffect(() => {
    register({name: name});
  }, [register]);

  useEffect(() => {
    const file = watch(name);
    if (file && typeof file === 'string') {
      setFileUrl(file);
    } else if (fileUrl) {
      setFileUrl('');
    }
  }, [watch(name)]);

  const handleChange = e => {
    setValue(name, e.target.files[0]);

    setChangeLabel(e.target.files[0]?.name || "");
  }

  return (
    <div className={`form-group ${className}`}>
      <h5 className="col-form-label">{label}</h5>
      <div className="input-group">
        <div className="custom-file">
          <input type="file" className="custom-file-input" onChange={e => handleChange(e)}/>
          <label className="custom-file-label">{changeLabel || "ატვირთეთ ფაილი"}</label>
        </div>
      </div>

      <span className="error invalid-feedback" style={{display: 'block'}}>{errorMessage}</span>
      {fileUrl && (
        <a href={fileUrl} target="_blank">
          ფაილი
        </a>
      )}
    </div>
  )
}
