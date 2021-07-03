import React from 'react';

export default function ({label, name, register, list = [], errorMessage}) {
  return (
    <div className="form-group">
      <label>{label}</label>

      <select
        className={`form-control ${errorMessage && 'is-invalid'}`}
        name={name}
        ref={register}
      >
        <option value='' className="text-secondary">{label}</option>

        {list.map((item, key) => (
          <option key={key} value={item.id}>{item.name}</option>
        ))}
      </select>

      <div className="invalid-feedback d-block">
        {errorMessage}
      </div>
    </div>
  );
}
