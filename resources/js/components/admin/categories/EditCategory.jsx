import React, {useEffect, useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {useParams} from 'react-router';
import UseCategory from './UseCategory';

export default function () {
  const {handleSubmit, reset, setErrors, categoryFields} = UseCategory();
  const [redirect, setRedirect] = useState(false);

  const {id} = useParams();

  useEffect(() => {
    axios.get(`/api/admin/categories/${id}/edit`, {}).then(res => {
      if (res.data.status === 'success') {
        reset(res.data.category);
      }
    });
  }, []);

  const editCategory = data => {
    axios.put('/api/admin/categories/' + id, data).then(res => {
      if (res.data.status === 'success') setRedirect(true);
      else setErrors(res.data);
    })
  }
  if (redirect) return <Redirect to='/admin/categories'/>;

  return (
    <>
      <section className="content">
        <div className="container-fluid">
          <div className="card card-primary card-outline">
            <div className="card-header"><Link to="/admin/categories/">კატეგორიები </Link> / კატეგორიის რედაქტირება
            </div>
            <form onSubmit={handleSubmit(editCategory)}>
              <div className="card-body">
                {categoryFields}
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
