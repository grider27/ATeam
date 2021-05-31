import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import TeacherDashboard from './pages/TeacherDashboard';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Rewards from './pages/Rewards';
import PasswordReset from './pages/PasswordReset';
import ManageStudents from './pages/ManageStudents';

export default function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/passwordreset">
            <PasswordReset />
          </Route>
          <Route path="/rewards">
            <Rewards />
          </Route>
          <Route path="/ManageStudents">
            <ManageStudents />
            </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/teacherdashboard">
            <TeacherDashboard />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
