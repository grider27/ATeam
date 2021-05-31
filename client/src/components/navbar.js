import React from "react";


function NavBar(props) {
  return <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="#">Reader-Feeder</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="dashboard1.html">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="manage1.html">Add/Manage Student</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="index5.html">Sign Out</a>
                    </li>
                </ul>
            </div>
        </nav>
  
}

export default NavBar;


