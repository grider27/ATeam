/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className="wrapper">
      <div className="content">
        <main className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <div className="card">
              <Link to="/rewards"> 
                <a className="img-card" href="/teacherdashboard">
                  <img
                    src={'./img/School_Monochromatic.png'}
                    alt="kids walking to school"
                  />
                  </a>
                  </Link>
                <div className="card-content">
                  
                  <h4 className="card-title">
                  <Link to="/rewards"> <a href="#">USER LAST NAME Classroom </a> </Link>
                  </h4>
                  <p className="">
                    Track the progress of your students reading goals.
                  </p>
                </div>
                <Link to="/rewards"> <div
                  className="card-read-more"
                  style={{ backgroundColor: 'lightskyblue' }} >
                  
                  <a
                    href="/teacherdashboard"
                    className="btn btn-link btn-block"
                  >
                    <span className="material-icons">forward </span>
                  </a>
                </div></Link>
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
                  <Link to="/managestudents"> <a href="/managestudents">SCHOOL NAME </a> </Link>
                  </h4>
                  <p className="">Manage your school, teachers, and rewards.</p>
                </div>
                <Link to="/managestudents"> <div
                  className="card-read-more"
                  style={{ backgroundColor: 'navajowhite' }}
                >
                  <a href="/managestudents" className="btn btn-link btn-block ">
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
  );
};

export default Menu;
