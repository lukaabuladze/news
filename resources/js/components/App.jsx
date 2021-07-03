import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Redirect} from 'react-router';
import PublicRoute from './hooks/PublicRoute';
import Landing from "./app/Landing";
import FullPost from "./app/pages/FullPost";
import Category from './app/pages/Category';
import AboutUs from './app/pages/AboutUs';
import ContactUs from './app/pages/ContactUs';

function App() {
  return (
    <>
          <Switch>

            <PublicRoute exact path={'/'} component={Landing} />
            <PublicRoute exact path={'/posts/:id'} component={FullPost} />
            <PublicRoute exact path={'/category/:slug'} component={Category} />

            <PublicRoute exact path={'/about-us'} component={AboutUs} />
            <PublicRoute exact path={'/contact'} component={ContactUs} />

            <Redirect to="/" />
          </Switch>
    </>
  );
}

export default App;

if (document.getElementById('app')) {
  ReactDOM.render(<Router><App/></Router>, document.getElementById('app'));
}
