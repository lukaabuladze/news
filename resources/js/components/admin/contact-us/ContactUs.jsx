import React, {useEffect, useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import TextInput from '../../inputs/TextInput';
import {useForm} from 'react-hook-form';
import TextArea from '../../inputs/TextArea';
import MultipleImageInput from '../../inputs/MultipleImageInput';
import ShowImages from '../../hooks/ShowImages';
import TextEditor from '../../inputs/TextEditor';

export default function () {
  const {register, reset, handleSubmit} = useForm();

  const [errors, setErrors] = useState({});
  const [redirect, setRedirect] = useState(false);

  const [id, setId] = useState(0);

  useEffect(() => {
    axios.get(`/api/admin/contact-us`, {}).then(res => {
      if (res.data.status === 'success') {
        reset(res.data.data.contactUs);
        setId(res.data.data.contactUs.id);
      }
    });
  }, []);

  const edit = formData => {
    axios.put(`/api/admin/contact-us/${id}`, formData).then(res => {
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
            <div className="card-header">კონტატქი</div>
            <form onSubmit={handleSubmit(edit)}>
              <div className="card-body">
                <div className="row">
                  <div className="col">
                    <TextInput
                      label="ტელეფონი"
                      name="phone"
                      register={register}
                      errorMessage={errors.phone}
                    />
                  </div>
                  <div className="col">
                    <TextInput
                      label="ელფოსტა"
                      name="email"
                      register={register}
                      errorMessage={errors.email}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <TextInput
                      label="მისამართი"
                      name="address"
                      register={register}
                      errorMessage={errors.address}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <TextInput
                      label="ფეისბუქი"
                      name="facebook"
                      register={register}
                      errorMessage={errors.facebook}
                    />
                  </div>
                  <div className="col">
                    <TextInput
                      label="ინსტაგრამი"
                      name="instagram"
                      register={register}
                      errorMessage={errors.instagram}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <TextInput
                      label="ტვიტერი"
                      name="twitter"
                      register={register}
                      errorMessage={errors.twitter}
                    />
                  </div>
                  <div className="col">
                    <TextInput
                      label="იუთუბი"
                      name="youtube"
                      register={register}
                      errorMessage={errors.youtube}
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
