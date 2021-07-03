import React, {useEffect, useState} from 'react';
import DatePicker from "react-datepicker";
import moment from 'moment/moment.js'
import "react-datepicker/dist/react-datepicker.css";
import {Controller} from 'react-hook-form';

export default function ({label, name, placeholder, register, control, disabled, setValue, errorMessage, startDate }) {

    const [selected, setSelected] = useState(startDate ? moment(startDate).toDate() : null);

    useEffect(() => {
      if (startDate) {
        setSelected(startDate ? moment(startDate).toDate() : null);
      }
    }, [register]);

    const handleChange = (date, onChange) => {
        setSelected(date);
        onChange(date ? moment(date).format('YYYY-MM-DD') : null);
    };

  return (
    <Controller
      name={name}
      control={control}
      register={register}
      render={({onChange}) => (
        <div className="form-group">
          <label htmlFor={name}>{label}</label>

          <DatePicker
            selected={selected}
            onChange={(date) => handleChange(date, onChange)}
            dateFormat="dd/MM/yyyy"
            minDate={moment().toDate()}
            placeholderText={placeholder}
            className="form-control"
            wrapperClassName="d-block"
            popperPlacement="bottom-end"
            disabled={disabled}
          />

          <div className="invalid-feedback d-block">{errorMessage}</div>
        </div>
      )}
    />

  );
}
