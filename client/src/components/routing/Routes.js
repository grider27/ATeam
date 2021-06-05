import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Alert from '../layout/Alert';
import Dashboard from '../dashboard/Dashboard';
import NotFound from '../layout/NotFound';
import PrivateRoute from '../routing/PrivateRoute';

import Rewards from '../pages/Rewards/Rewards';
import ManageStudents from '../pages/ManageStudents/ManageStudents';
import TeacherDashboard from '../pages/TeacherDashboard/TeacherDashboard';
import Menu from '../pages/Menu/Menu';

const Routes = () => {
  return (
    <section className="container">
      <Alert />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/rewards" component={Rewards} />
        <PrivateRoute exact path="/managestudents" component={ManageStudents} />
        <PrivateRoute
          exact
          path="/teacherdashboard"
          component={TeacherDashboard}
        />
        <PrivateRoute exact path="/menu" component={Menu} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
