import React, {useEffect, useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import TextInput from '../../inputs/TextInput';
import {useForm} from 'react-hook-form';
import TextArea from '../../inputs/TextArea';
import MultipleImageInput from '../../inputs/MultipleImageInput';
import ShowImages from '../../hooks/ShowImages';
import TextEditor from '../../inputs/TextEditor';

export default function () {
  const {register, setValue, reset, handleSubmit} = useForm();

  const [errors, setErrors] = useState({});
  const [aboutUs, setAboutUs] = useState({});
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    axios.get(`/api/admin/about-us`, {}).then(res => {
      if (res.data.status === 'success') {
        setAboutUs(res.data.data.aboutUs);
        reset(res.data.data.aboutUs);
      }
    });
  }, []);

  const edit = formData => {
    axios.put(`/api/admin/about-us/${aboutUs.id}`, formData).then(res => {
      if (res.data.status === 'success') setRedirect(true);
      else setErrors(res.data);
    })
  }

  if (redirect) return <Redirect to='/admin/home'/>;

  return (
    <>
      <section className="content">
        <div className="container-fluid">
          <div className="card card-primary card-outline">
            <div className="card-header">ჩვენ შესახებ გვერდის რედაქტირება</div>
            <form onSubmit={handleSubmit(edit)}>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <TextEditor
                      name="text"
                      label="ტექსტი"
                      data={aboutUs.text ?? ''}
                      setValue={setValue}
                      register={register}
                      errorMessage={errors['text']}
                    />
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <button className="btn btn-primary">რედაქტირება</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
