/* eslint-disable jsx-a11y/anchor-is-valid */

import { Link } from 'react-router-dom';

//vkh
import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../../layout/Spinner';
import { getCurrentProfile } from '../../../actions/profile';

const Menu = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className="wrapper">
        <div className="content">
          <h1 className="large text-primary">
            Welcome to your Reader Feeder DashBoard!
          </h1>
          <main className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-6">
                <div className="card">
                  <Link to="/classroom">
                    <a className="img-card">
                      <img
                        src={'./img/School_Monochromatic.png'}
                        alt="kids walking to school"
                      />
                    </a>
                  </Link>
                  <div className="card-content">
                    <h4 className="card-title">
                      <Link to="/classroom">
                        {user && user.firstName} {user && user.lastName}'s
                        Classroom{' '}
                      </Link>
                    </h4>
                    <p className="">
                      Track the progress of your students reading goals.
                    </p>
                  </div>
                  <Link to="/classroom">
                    {' '}
                    <div
                      className="card-read-more"
                      style={{ backgroundColor: 'lightskyblue' }}
                    >
                      <a href="/classroom" className="btn btn-link btn-block">
                        <span className="material-icons">forward </span>
                      </a>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6">
                <div className="card">
                  <Link to="/managestudents">
                    <a className="img-card" href="/managestudents">
                      <img
                        src="./img/Teacher_Isometric.png"
                        alt="teacher in front of class"
                      />
                    </a>
                  </Link>
                  <div className="card-content">
                    <h4 className="card-title">
                      <Link to="/managestudents">
                        {' '}
                        <a href="/managestudents">
                          {user && user.schoolName}
                        </a>{' '}
                      </Link>
                    </h4>
                    <p className="">
                      Manage your school, teachers, and rewards.
                    </p>
                  </div>
                  <Link to="/managestudents">
                    {' '}
                    <div
                      className="card-read-more"
                      style={{ backgroundColor: 'navajowhite' }}
                    >
                      <a
                        href="/managestudents"
                        className="btn btn-link btn-block "
                      >
                        <span className="material-icons">forward </span>
                      </a>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </Fragment>
  );
};

Menu.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(Menu);
