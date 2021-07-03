import React, {useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import UseCategory from './UseCategory';

export default function () {
  const {handleSubmit, setErrors, categoryFields} = UseCategory();
  const [redirect, setRedirect] = useState(false);

  const addCategory = data => {
    axios.post('/api/admin/categories', data).then(res => {
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
            <div className="card-header"><Link to="/admin/categories/">კატეგორიები </Link> / კატეგორიის დამატება</div>
            <form onSubmit={handleSubmit(addCategory)}>
              <div className="card-body">
                {categoryFields}
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
