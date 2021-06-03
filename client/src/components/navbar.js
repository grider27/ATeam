import React from 'react';

function NavBar() {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg">
      <img class="logo" src="assets/imgs/books.png" />
      <a  className = "navbar-brand"
      href = "/Menu"
      dataToggle = "tooltip"
      dataPlacement = "bottom"
      title = "Main Menu" >
           Reader-Feeder
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="/dashboard">
              Dashboard <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/ManageStudents">
              Add/Manage Student
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/rewards">
              Rewards
            </a>
          </li>
          <li className = "nav-item mr-sm-2" >
            <a className="nav-link" href="/teacherdashboard">
              Teacher Dashboard (ideas)
            </a>
          </li>
        </ul>
        <span class = "navbar-text" >
           <a className="nav-link" href="/home">
              <span class = "material-icons"
              dataToggle = "tooltip"
              dataPlacement = "bottom"
              title = "Manage Account" >
                  manage_accounts
                  </span>
            </a></span>
        <span class = "navbar-text" >
           <a className="nav-link" href="/home">
              <span class = "material-icons"
              dataToggle = "tooltip"
              dataPlacement = "bottom"
              title = "Sign Out" >
                logout
                </span>
            </a></span>
      </div>
    </nav>
  );
}

export default NavBar;
