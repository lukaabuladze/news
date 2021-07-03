import React from 'react';

export default function ({label, name, register, onChange, errorMessage}) {
    return (
        <div className="form-check pl-0">
            <input type="checkbox" className={"form-check-label mb-3"  + (errorMessage ? " is-invalid" : "")}
                   name={name} ref={register}  onChange={onChange} />  {label}
            <div className="invalid-feedback">{errorMessage}</div>
        </div>
    );
}
