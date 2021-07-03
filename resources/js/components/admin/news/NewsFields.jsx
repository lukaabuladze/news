import React from 'react';
import TextInput from '../../inputs/TextInput';
import ReactSelect from '../../inputs/ReactSelectSingle';
import FileInputWithPreview from '../../inputs/FileInputWithPreview';
import TextEditor from "../../inputs/TextEditor";
import CheckBox from "../../inputs/CheckBox";

export default function ({register, control, setValue, data, errors}) {

  return (
    <>
      <div className="row">
        <div className="col">
          <TextInput
            label="სიახლის სათაური"
            name="title"
            register={register}
            errorMessage={errors.title}
          />
        </div>
        <div className="col" style={{zIndex: '999999'}}>
          <ReactSelect
            label="კატეგორია"
            name="category_id"
            register={register}
            setValue={setValue}
            errorMessage={errors.category_id}
            className={``}
            placeholder={`...`}
            closeMenuOnSelect={true}
            options={data?.categories}
            getOptionLabel={(option) => option.name}
            getOptionValue={(option) => option.id}
            value={data?.post?.category_id}
            blurInputOnSelect={false}
            borderRadius={'6px'}
            minHeight={'40px'}
            isClearable={true}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <TextEditor
            name="content"
            label="სიახლე"
            data={data?.post?.content ?? ''}
            setValue={setValue}
            register={register}
            errorMessage={errors.content}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <FileInputWithPreview
            name="photo"
            label="ფოტო"
            value={data?.post?.photo ?? ''}
            setValue={setValue}
            register={register}
            errorMessage={errors.photo}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <CheckBox
            name="is_featured"
            label="სლაიდერის პოსტი"
            register={register}
            errorMessage={errors.is_featured}
          />
        </div>
      </div>
    </>
  );
}
