import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import CategoryFields from './CategoryFields';

export default function () {
  const {register, reset, setValue, handleSubmit} = useForm();

  const [errors, setErrors] = useState({});

  const categoryFields = <CategoryFields register={register} errors={errors}/>;

  return ({
    register,
    reset,
    handleSubmit,
    categoryFields,
    setErrors,
    setValue,
  });
}
