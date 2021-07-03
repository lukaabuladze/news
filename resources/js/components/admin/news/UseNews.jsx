import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import NewsFields from "./NewsFields";

export default function () {
  const {register, reset, setValue, handleSubmit, control} = useForm();

  const [errors, setErrors] = useState({});

  const [data, setData] = useState({});

  const newsFields = <NewsFields register={register}
                               control={control}
                               setValue={setValue}
                               data={data}
                               setData={setData}
                               errors={errors} />

  return ({
    register,
    reset,
    handleSubmit,
    newsFields,
    setErrors,
    setValue,
    data,
    setData,
  });
}
