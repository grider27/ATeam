import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import Logo from '../../img/books.png';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
      <li>
        <Link to="/menu">
          <i className="fas fa-user" />
          <span className="hide-sm">Menu</span>
        </Link>
      </li>
      <li>
        <Link to="/teacherdashboard">
          <i className="fas fa-user" />{' '}
          <span className="hide-sm">Teacher Dashboard</span>
        </Link>
      </li>
      <li>
        <Link to="/managestudents">
          <i className="fas fa-user" />{' '}
          <span className="hide-sm">Manage Students</span>
        </Link>
      </li>
      <li>
        <Link to="/rewards">
          <i className="fas fa-user" />
          {''}
          <span className="hide-sm">Rewards</span>
        </Link>
      </li>
      <li>
        <Link to="/dashboard">
          <i className="fas fa-user" />{' '}
          <span className="hide-sm">Dashboard</span>
        </Link>
      </li>
      <li>
        <a onClick={logout} href="#!">
          <i className="fas fa-sign-out-alt" />{' '}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar bg-dark"> 
      <h1><img src={Logo} class="logo1" alt="books icon" />
        <Link to="/">
          <i className="fas fa-code" /> Reader Feeder
        </Link>
      </h1>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
