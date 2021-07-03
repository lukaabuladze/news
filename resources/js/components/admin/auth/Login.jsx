import React, {useContext, useEffect, useState} from 'react';
import TextInput from "../../inputs/TextInput";
import PasswordInput from "../../inputs/PasswordInput";
import {useHistory} from "react-router";
import {useForm} from "react-hook-form";
import {UserContext} from "../../contexts/UserContext";

export default function () {
  const {register, handleSubmit} = useForm();
  const history = useHistory();
  const [errors,setErrors] = useState({});

  const context = useContext(UserContext);

  useEffect(() => {
    axios.get('/sanctum/csrf-cookie').then(response => {
    });
  }, []);

  const login = loginData => {
    axios.post('/api/admin/login',loginData).then(({data}) => {
      if(data.status === 'success') {
        context.setUser(data.user);
        if(data.user?.isAdmin) {
          window.location.replace('/admin');
        }
      } else {
        setErrors(data);
      }
    });
  }
  return (
    <div className="row justify-content-center">
      <div className="col-md-4 mt-3">
        <div className="card">
          <div className="card-header">
            <h5>ავტორიზაცია</h5>
          </div>

          <div className="card-body">
            <form onSubmit={handleSubmit(login)}>

                  <TextInput
                    label="ტელეფონი"
                    name="phone"
                    register={register}
                    errorMessage={errors.phone}
                  />

                  <PasswordInput
                    label="პაროლი"
                    name="password"
                    register={register}
                    errorMessage={errors.password}
                  />
              <button type="submit" className="btn btn-primary">ავტორიზაცია</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
