import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import {UserContextProvider} from "./contexts/UserContext";
import AdminRoute from "./hooks/AdminRoute";
import Home from "./admin/dashboard/Home";
import Login from './admin/auth/Login';
import Logout from './admin/auth/Logout';
import Categories from './admin/categories/Categories';
import AddCategory from './admin/categories/AddCategory';
import EditCategory from './admin/categories/EditCategory';
import AddNews from "./admin/news/AddNews";
import EditNews from "./admin/news/EditNews";
import News from "./admin/news/News";
import AboutUs from './admin/about-us/AboutUs';
import ContactUs from './admin/contact-us/ContactUs';
import EditProfile from './admin/profile/EditProfile';


function Admin() {
  return (
    <>
        <UserContextProvider>
          <Switch>
            <Route exact path='/admin/login' component={Login} />
            <Route exact path='/admin/logout' component={Logout} />

            <AdminRoute exact path='/admin' component={Home} />
            <AdminRoute exact path='/admin/home' component={Home} />
            <AdminRoute exact path='/admin/profile' component={EditProfile} />

            <AdminRoute exact path='/admin/categories' component={Categories} />
            <AdminRoute exact path='/admin/categories/create' component={AddCategory} />
            <AdminRoute exact path='/admin/categories/:id/edit' component={EditCategory} />

            <AdminRoute exact path='/admin/posts' component={News} />
            <AdminRoute exact path='/admin/posts/create' component={AddNews} />
            <AdminRoute exact path='/admin/posts/:id/edit' component={EditNews} />

            <AdminRoute exact path='/admin/about-us' component={AboutUs} />
            <AdminRoute exact path='/admin/contact-us' component={ContactUs} />


          </Switch>
        </UserContextProvider>
    </>
  );
}

export default Admin;

if (document.getElementById('admin')) {
  ReactDOM.render(<Router><Admin/></Router>, document.getElementById('admin'));
}
