import React from 'react';
import TextInput from '../../inputs/TextInput';

export default function ({register, errors}) {

  return (
    <>
      <div className="row">
        <div className="col">
          <TextInput
            label="დასახელება"
            name="name"
            register={register}
            errorMessage={errors.name}
          />
        </div>
        <div className="col">
          <TextInput
            label="ბმული"
            name="slug"
            register={register}
            errorMessage={errors.slug}
          />
        </div>
      </div>
    </>
  );
}
