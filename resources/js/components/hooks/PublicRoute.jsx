import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Header from '../app/dashboard/Header';
import Footer from "../app/dashboard/Footer";

export default function ({component: Component, ...rest}) {
  return (
    <Route {...rest}
           render={(props) =>
             <>
               <Header />
               <Component {...props} />
               <Footer />
             </>
           }/>
  )
}
