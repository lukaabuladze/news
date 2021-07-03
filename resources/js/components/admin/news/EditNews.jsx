import React, {useEffect, useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {useParams} from 'react-router';
import UseNews from "./UseNews";

export default function () {
  const {handleSubmit, reset, setData, setErrors, newsFields} = UseNews();
  const [redirect, setRedirect] = useState(false);

  const {id} = useParams();

  useEffect(() => {
    axios.get(`/api/admin/posts/${id}/edit`, {}).then(res => {
      if (res.data.status === 'success') {
        setData(res.data.data);
        reset(res.data.data.post);
      }
    });
  }, []);

  const editPost = data => {
    let formData = new FormData();

    Object.keys(data).map(key => formData.append(key, key === 'photo' ?
      (data[key] || '') : JSON.stringify(data[key])
    ));

    formData.append('_method', 'PUT');

    axios.post('/api/admin/posts/' + id, formData).then(res => {
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
            <div className="card-header"><Link to="/admin/posts/">სიახლეები </Link> / სიახლის რედაქტირება
            </div>
            <form onSubmit={handleSubmit(editPost)}>
              <div className="card-body">
                {newsFields}
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
