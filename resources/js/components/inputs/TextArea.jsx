import React from 'react';

export default function ({label, name, register, errorMessage, rows=4, className=""}) {
  return (
    <div className="form-group">
      <label>{label}</label>

      <textarea
        className={`form-control ${errorMessage && 'is-invalid'}`}
        placeholder={label}
        name={name}
        ref={register}
        rows={rows}
      />

      <div className="invalid-feedback d-block">
        {errorMessage}
      </div>
    </div>
  );
}
