import React, {useEffect, useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import UseNews from "./UseNews";

export default function () {
  const {handleSubmit, setErrors, reset, setData, newsFields} = UseNews();
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    axios.get(`/api/admin/posts/create`, {}).then(res => {
      if (res.data.status === 'success') {
        setData(res.data.data);
        reset(res.data.data);
      }
    });
  }, []);

  const addPost = data => {
    let formData = new FormData();

    Object.keys(data).map(key => formData.append(key, key === 'photo' ?
      (data[key] || "") : JSON.stringify(data[key])
    ));

    axios.post('/api/admin/posts', formData).then(res => {
      if (res.data.status === 'success') setRedirect(true);
      else setErrors(res.data);
    })
  }

  if (redirect) return <Redirect to='/admin/posts'/>;

  return (
    <>
      <section className="content">
        <div className="container-fluid">
          <div className="card card-primary card-outline">
            <div className="card-header"><Link to="/admin/posts/">სიახლეები </Link> / ავტომობილის დამატება</div>
            <form onSubmit={handleSubmit(addPost)}>
              <div className="card-body">
                {newsFields}
              </div>
              <div className="card-footer">
                <button className="btn btn-primary">დამატება</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
