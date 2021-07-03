import React, {useContext, useEffect, useState} from 'react';
import {UserContext} from '../../contexts/UserContext';
import $ from 'jquery';
import {Link, Redirect} from 'react-router-dom';
import {deleteFire} from '../../alerts/Fire';

export default function () {
  const context = useContext(UserContext);

  const [itemId, setItemId] = useState(0);

  useEffect(() => {
    const bearer = context?.user?.apiToken || '';

    let table = $('#categories').DataTable({
      'processing': true,
      'serverSide': true,
      'scrollX': true,
      'bFilter': true,
      'ajax': {
        url: '/api/admin/categories',
        method: 'GET',
        beforeSend: function (request) {
          request.setRequestHeader('Authorization', 'Bearer ' + bearer);
        },
        error: function (xhr) {
          if (xhr?.status === 401) {
            context.resetUser();
          }
        }
      },
      'columns': [
        {data: 'id', name: 'id'},
        {data: 'name', name: 'name'},
        {data: 'edit', name: 'edit'},
        {data: 'delete', name: 'delete'},
      ],
      'order': [[0, 'desc']],
    });


    table.on('click', 'button.edit', function () {
      setItemId($(this).attr('item'));
    });

    table.on('click', 'button.delete', function () {
      const id = ($(this).attr('item'));
      deleteFire({url: `/api/admin/categories/${id}`, thisObject: this});

    });

  }, []);

  if (itemId > 0) return <Redirect to={`/admin/categories/${itemId}/edit`}/>;

  return (

    <section className="content">
      <div className="container-fluid">
        <div className="card">
          <div className="card-header">კატეგორიები / <Link to="/admin/categories/create">კატეგორიის
            დამატება</Link>
          </div>
          <div className="card-body">
            <table id="categories" className="table table-bordered" style={{width: '100%'}}>
              <thead>
              <tr>
                <th>Id</th>
                <th>დასახელება</th>
                <th>ცვლილება</th>
                <th>წაშლა</th>
              </tr>
              </thead>
            </table>
          </div>
          <div className="card-footer">
          </div>
        </div>
      </div>
    </section>
  )
}
