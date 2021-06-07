import Edit from '@material-ui/icons/Edit';

//vkh
import React, { useState, Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../../layout/Spinner';
import { getCurrentProfile } from '../../../actions/profile';
import API from '../../../utils/API';
import DeleteBtn from '../../../components/DeleteBtn';
import {
  Table,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '@material-ui/core';

const ManageStudents = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
    loadStudents();
  }, [getCurrentProfile]);

  const [formObject, setFormObject] = useState({});
  const [students, setStudents] = useState([]);

  function loadStudents() {
    API.getStudents()
      .then((res) =>
        //console.log(res.data)
        setStudents(res.data)
      )
      .catch((err) => console.log(err));
  }

  function deleteStudent(id) {
    API.deleteStudent(id)
      .then((res) => loadStudents())
      .catch((err) => console.log(err));
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.name && formObject.email) {
      API.saveStudents({
        name: formObject.name,
        stars: '0',
        email: formObject.email,
        teacherId: user.email,
      })
        .then((res) => loadStudents())
        .catch((err) => console.log(err));
    }
  }

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className="wrapper">
        <div className="content">
          <main className="container block">
            <section className="bg-light border-0 p-5 m-3">
              <div className="row">
                <div className="col-12">
                  <h1 className="font-weight-bold">
                    {user && user.firstName} {user && user.lastName}'s HOMEROOM{' '}
                    <Edit color="primary" />
                  </h1>
                </div>
              </div>
              <div className="row">
                <div className="col-12">{user && user.schoolName}</div>
              </div>
              <div className="row">
                <div className="col-12">{user && user.address}</div>
              </div>
              <div className="row">
                <div className="col-12">
                  {user && user.city}, {user && user.state}{' '}
                  {user && user.zipcode}
                </div>
              </div>
            </section>
            <section className="bg-light border-0 p-5 m-3">
              <div className="row">
                <div className="col-12">
                  <h2 className="font-weight-bold">Add Students</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-4">
                  <input
                    onChange={handleInputChange}
                    name="name"
                    type="name"
                    className="form-control"
                    id="name"
                    placeholder="Name"
                  />
                </div>
                <div className="col-4">
                  <input
                    onChange={handleInputChange}
                    name="email"
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Email"
                  />
                </div>
                <div className="col-4">
                  <button
                    type="button"
                    className="btn-primary btn-sm"
                    onClick={handleFormSubmit}
                  >
                    Add Student
                  </button>
                </div>
              </div>
            </section>
            <section className="bg-light border-0 p-5 m-3">
              <div className="row">
                <div className="col-12">
                  <h2 className="font-weight-bold">Classroom</h2>
                </div>
              </div>
              {students.length ? (
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>Student Name</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>Books Completed</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {students.map((student) => (
                      <TableRow key={student._id}>
                        <TableCell>{student.name}</TableCell>
                        <TableCell>{student.email}</TableCell>
                        <TableCell>{student.stars}</TableCell>
                        <DeleteBtn onClick={() => deleteStudent(student._id)} />
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              ) : (
                <h3>No Results to Display</h3>
              )}
            </section>
          </main>
        </div>
      </div>
    </Fragment>
  );
};

ManageStudents.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(ManageStudents);
