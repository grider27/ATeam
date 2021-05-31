

const Rewards= ()=> {
  return (
    <div className="wrapper" style={{backgroundColor: "#f3c613"}}>
    
    <div className="content" >
        <nav className="navbar navbar-expand-lg">
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

        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className="font-weight-bold">Hello Teacher</h1>
                </div>
            </div>
            <table className="table" style={{background: "white", borderRadius: "50px", borderTopStyle: "none" }}>
                <thead >                        
                    <tr>
                        
                        <th scope="col">Student Name</th>
                        <th scope="col"></th>
                        <th scope="col">1</th>
                        <th scope="col">2</th>
                        <th scope="col">3</th>
                        <th scope="col">4</th>
                        <th scope="col">5</th>
                        <th scope="col">6</th>
                        <th scope="col">7</th>
                        <th scope="col">8</th>
                        <th scope="col">9</th>
                        <th scope="col">10</th>
                        <th scope="col">Activate Reward</th>
                    
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row" className="font-weight-bold">Bart Simpson</th>
                        <td><button className="btn-success">Add Star</button></td>
                        <td>⭐</td>
                        <td>⭐</td>
                        <td>⭐</td>
                        <td>⭐</td>
                        <td>⚫</td>
                        <td>⚫</td>
                        <td>⚫</td>
                        <td>⚫</td>
                        <td>⚫</td>
                        <td>⚫</td>
                        <td><button className="btn-success">Issue Certificate</button></td>
                    </tr>
                    <tr>
                        <th scope="row" className="font-weight-bold">Lisa Simpson</th>
                        <td><button className="btn-success">Add Star</button></td>
                        <td>⭐</td>
                        <td>⭐</td>
                        <td>⭐</td>
                        <td>⭐</td>
                        <td>⭐</td>
                        <td>⭐</td>
                        <td>⭐</td>
                        <td>⭐</td>
                        <td>⭐</td>
                        <td>⭐</td>
                        <td><button className="btn-success">Issue Certificate</button></td>
                    </tr>
                    <tr>
                        <th scope="row" className="font-weight-bold">Nelson Muntz</th>
                        <td><button className="btn-success">Add Star</button></td>
                        <td>⭐</td>
                        <td>⚫</td>
                        <td>⚫</td>
                        <td>⚫</td>
                        <td>⚫</td>
                        <td>⚫</td>
                        <td>⚫</td>
                        <td>⚫</td>
                        <td>⚫</td>
                        <td>⚫</td>
                        <td><button className="btn-success">Issue Certificate</button></td>
                    </tr>
                    <tr>
                        <th scope="row" className="font-weight-bold">Martin Prince</th>
                        <td><button className="btn-success">Add Star</button></td>
                        <td>⭐</td>
                        <td>⭐</td>
                        <td>⭐</td>
                        <td>⭐</td>
                        <td>⚫</td>
                        <td>⚫</td>
                        <td>⚫</td>
                        <td>⚫</td>
                        <td>⚫</td>
                        <td>⚫</td>
                        <td><button className="btn-success">Issue Certificate</button></td>
                    </tr>
                    <tr>
                        <th scope="row" className="font-weight-bold">Milhouse Van Houten</th>
                        <td><button className="btn-success">Add Star</button></td>
                        <td>⭐</td>
                        <td>⭐</td>
                        <td>⭐</td>
                        <td>⭐</td>
                        <td>⭐</td>
                        <td>⭐</td>
                        <td>⭐</td>
                        <td>⚫</td>
                        <td>⚫</td>
                        <td>⚫</td>
                        <td><button className="btn-success">Issue Certificate</button></td>
                    </tr>
                    <tr>
                        <th scope="row" className="font-weight-bold">Ralph Wiggum</th>
                        <td><button className="btn-success">Add Star</button></td>
                        <td>⭐</td>
                        <td>⭐</td>
                        <td>⭐</td>
                        <td>⭐</td>
                        <td>⚫</td>
                        <td>⚫</td>
                        <td>⚫</td>
                        <td>⚫</td>
                        <td>⚫</td>
                        <td>⚫</td>
                        <td><button className="btn-success">Issue Certificate</button></td>
                    </tr>
                </tbody>
            </table>


        </div>
        
    </div>
</div>
    );
}


export default Rewards