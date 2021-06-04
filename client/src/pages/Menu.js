/* eslint-disable jsx-a11y/anchor-is-valid */
import NavBar from '../components/navbar';

const Menu = () => {
  return (
    <div className="wrapper">
      <div className="content">
        <NavBar />
        <main className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <div className="card">
                <a className="img-card" href="/TeacherDashboard">
                  <img
                    src="assets/imgs/School_Monochromatic.png"
                    alt="kids walking to school"
                  />
                </a>
                <div className="card-content">
                  <h4 className="card-title">
                    <a href="#">USER LAST NAME Classroom </a>
                  </h4>
                  <p className="">
                    Track the progress of your students reading goals.
                  </p>
                </div>
                <div
                  className="card-read-more"
                  style={{ backgroundColor: 'lightskyblue' }}
                >
                  <a
                    href="/TeacherDashboard"
                    className="btn btn-link btn-block"
                  >
                    <span className="material-icons">forward </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6">
              <div className="card">
                <a className="img-card" href="#">
                  <img
                    src="assets/imgs/Teacher_Isometric.png"
                    alt="teacher in front of class"
                  />
                </a>
                <div className="card-content">
                  <h4 className="card-title">
                    <a href="#">SCHOOL NAME </a>
                  </h4>
                  <p className="">Manage your school, teachers, and rewards.</p>
                </div>
                <div
                  className="card-read-more"
                  style={{ backgroundColor: 'navajowhite' }}
                >
                  <a href="#l" className="btn btn-link btn-block ">
                    <span className="material-icons">forward </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Menu;
