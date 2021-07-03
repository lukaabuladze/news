import React, {useContext, useEffect} from "react";
import {UserContext} from "../contexts/UserContext";
import {Redirect, Route, useHistory} from "react-router-dom";
import Navbar from "../admin/dashboard/Navbar";
import Menu from "../admin/dashboard/Menu";


export default function ({component: Component, ...rest}) {
  const context = useContext(UserContext);
  const history = useHistory();
  useEffect(() => {
    checkExpire();
  }, []);

  useEffect(() => {
    return history.listen(() => {
      checkExpire();
    });
  }, [history]);

  const checkExpire = () => {
    if (context.user?.expireMinutes > (new Date()).getTime()) context.setUser(context.user);
    else context.resetUser();
  };

  axios.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    if (error.response.status === 401 || error.response.status === 419) {
      context.resetUser();
    } else return Promise.reject(error);
  });

  return (
    <Route {...rest}
           render={(props) => context?.user?.name && context?.user?.isAdmin ?
             (
               <div className="wrapper">
                 <Navbar/>
                 <Menu/>
                 <div className="content-wrapper">
                   <Component {...props} />
                 </div>
               </div>
             ) : window.location.replace('/admin/login')}/>
  )
}
