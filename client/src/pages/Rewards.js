import NavBar from '../components/navbar'

const Rewards= ()=> {
  return (
    <div className="wrapper" style={{backgroundColor: "#f3c613"}}>
    
          <div className="content" >
              <NavBar />

        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-lg-12">
                    <h1 className="font-weight-bold">Hello Teacher</h1>
                </div>
                  </div>
                  
            <div className="row">
                <div className="col-sm-2 col-lg-2">
                    Bart Simpson
                      </div>
                       <div className="col-sm-8 col-lg-8">
                          <div className="slide">
                              <input type="range" min="0" max="100" value="10" />
                              <div className="result_box">10</div></div>
                </div>
                  </div>


            <table className="table table-borderless table-hover table-responsive-sm" style={{background: "white", borderRadius: "50px"}}>
                <thead >                        
                    <tr>
                        
                        <th scope="col">Student Name</th>
                        <th scope="col"></th>
                        <th></th>
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