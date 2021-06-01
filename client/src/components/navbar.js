import React from "react";


function NavBar(props) {
  return <nav className="navbar navbar-dark navbar-expand-lg">
            <a className="navbar-brand" href="/TeacherDashboard">Reader-Feeder</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="/TeacherDashboard">Teacher Dashboard <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/ManageStudents">Add/Manage Student</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/home">Sign Out</a>
                    </li>
                </ul>
            </div>
        </nav>
  
}

export default NavBar;


