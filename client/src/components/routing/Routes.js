import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Alert from '../layout/Alert';
import Dashboard from '../dashboard/Dashboard';
import NotFound from '../layout/NotFound';
import PrivateRoute from '../routing/PrivateRoute';

import Classroom from '../pages/Classroom/Classroom';
import ManageStudents from '../pages/ManageStudents/ManageStudents';
import Menu from '../pages/Menu/Menu';
import Certificate from '../pages/Certificate/Certificate';

const Routes = () => {
  return (
    <section className="container">
      <Alert />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/classroom" component={Classroom} />
        <PrivateRoute exact path="/managestudents" component={ManageStudents} />
        <PrivateRoute exact path="/certificate" component={Certificate} />
        <PrivateRoute exact path="/menu" component={Menu} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
