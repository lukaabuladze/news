import React, {useContext} from 'react';
import {Link, NavLink} from 'react-router-dom';

export default function () {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4 w-260">
      <Link to="/admin/home" className="brand-link">
        <img src="/admin_assets/images/admin.png" alt="Admin Logo" className="brand-image img-circle elevation-3"
             width="33" height="33"/>
        <span className="brand-text font-weight-light">Admin</span>
      </Link>

      <div className="sidebar">
        <div className="user-panel mt-3 pb-3 mb-3 d-flex justify-content-center">
          <div className="info">
            <a href="#" className="d-block">ადმინისტრატორი</a>
          </div>
        </div>

        <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu"
              data-accordion="false">

            <li className="nav-item">
              <NavLink to="/admin/home" className="nav-link">
                <i className="nav-icon fas fa-home"/>
                <p style={{fontSize: '15px'}}>
                  მთავარი
                </p>
              </NavLink>
            </li>

            <div className="solid mt-3 mb-3" style={{border: "2px solid white"}}> </div>

            <li className="nav-item">
              <NavLink to="/admin/posts" className="nav-link">
                <i className="nav-icon fas fa-newspaper" />
                <p className='fs-15'>
                  სიახლეები
                </p>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/admin/categories" className="nav-link">
                <i className="nav-icon fa fa-list" />
                <p className='fs-15'>
                  კატეგორიები
                </p>
              </NavLink>
            </li>

            <div className="solid mt-3 mb-3" style={{border: "2px solid white"}}> </div>

            <li className="nav-item">
              <NavLink to="/admin/about-us" className="nav-link">
                <i className="nav-icon fas fas fa-info-circle"/>
                <p className='fs-15'>
                  ჩვენს შესახებ
                </p>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/admin/contact-us" className="nav-link">
                <i className="nav-icon fas fa-id-card-alt"/>
                <p className='fs-15'>
                  კონტაქტი
                </p>
              </NavLink>
            </li>

          </ul>
        </nav>
      </div>
    </aside>
  )
}
