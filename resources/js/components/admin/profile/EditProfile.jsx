import React, {useEffect, useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import TextInput from '../../inputs/TextInput';
import {useForm} from 'react-hook-form';

export default function () {
  const {register, reset, handleSubmit} = useForm();

  const [errors, setErrors] = useState({});

  const [redirect, setRedirect] = useState(false);

  const [id, setId] = useState(0);

  useEffect(() => {
    axios.get(`/api/admin/users/create`, {}).then(res => {
      if (res.data.status === 'success') {
        reset(res.data.user);
        setId(res.data.user.id);
      }
    });
  }, []);

  const editProfile = data => {
    axios.put('/api/admin/users/' + id, data).then(res => {
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
            <div className="card-header">პროფილის რედაქტირება</div>
            <form onSubmit={handleSubmit(editProfile)}>
              <div className="card-body">
                <div className="row">
                  <div className="col">
                    <TextInput
                      label="მომხმარებლის სახელი"
                      name="username"
                      register={register}
                      errorMessage={errors.username}
                    />
                  </div>
                  <div className="col">
                    <TextInput
                      label="ტელეფონის ნომერი"
                      name="phone"
                      register={register}
                      errorMessage={errors.phone}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <TextInput
                      label="ელფოსტა"
                      name="email"
                      register={register}
                      errorMessage={errors.email}
                    />
                  </div>
                  <div className="col">
                    <TextInput
                      label="ახალი პაროლი"
                      name="password"
                      register={register}
                      errorMessage={errors.password}
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
