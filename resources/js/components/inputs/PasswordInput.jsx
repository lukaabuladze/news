import React from 'react';

export default function ({label, name, register, errorMessage}) {
  return (
    <div className="form-group">
      <label>{label}</label>

      <input
        type="password"
        className={`form-control ${errorMessage && 'is-invalid'}`}
        placeholder={label}
        name={name}
        ref={register}
      />

      <div className="invalid-feedback d-block">
        {errorMessage}
      </div>
    </div>
  );
}
