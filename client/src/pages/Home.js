

const Home = () => {
  return  ( 
  <div className="container">

 
  
  <div className="content">
    
      <section className="landing">
        
          <div className="row"> 
              <div className="col-12" style="height: 2vh;"></div>
          </div>

          <div className="row shadow shadow-lg" style=" 
          background-image: url(assets/imgs/composition-bg.png); 
          border-top-right-radius: 50px;
          border-bottom-right-radius: 50px;
          ">
              <div className="col-2" style="height:90vh; border-left-style: solid;
          border-left-width: 80px;">

              </div>
              <div className="col-8">
                  <div className="row">
                      <div className="col-12 d-flex justify-content-end" style="height:10vh; z-index: 1">
                          <a href="signup.html">
                              <div className="shape-outer heptagon">
                                  <div className="shape-inner heptagon">
                                      <h4 style="margin-top: 35px; color:red;">ENROLL!</h4>
                                  </div>
                              </div>
                          </a>

                      </div>
                  </div>
                  <div className="row">
                      <div className="col-8 offset-2 ">
                          <div className="login" style="
                              background: white; border-radius: 100px;
                              border:solid;
                              border-width: 5px;
                              ">
                              <div className="row">
                                  <div className="col-12">

                                      <h1 className="font-weight-bold">Reader Feeder</h1>
                                  </div>
                              </div>
                              <div className="row">
                                  <div className="col-12 d-flex justify-content-center">
                                      <input type="username" className="form-control mx-5" id="code"
                                          placeholder="Student Code"
                                          style=" border-style: none; border-bottom-width: 2px; border-bottom: solid black; z-index: 1;">
                                  </div>
                              </div>
                              <br />
                              <div className="row">
                                  <div className="col-12 d-flex justify-content-center">
                                      <input type="username" className="form-control mx-5" id="email"
                                          placeholder="Administrator Email"
                                          style=" border-style: none; border-bottom-width: 2px; border-bottom: solid black; z-index: 1;">
                                  </div>
                              </div>
                              

                              <div className="row">
                                  <div className="col-12 d-flex justify-content-center">
                                      <input type="password" className="form-control mx-5" id="password"
                                          placeholder="Password"
                                          style="border-style: none; border-bottom-width: 2px; border-bottom: solid black">
                                  </div>
                              </div>
                              <br />
                              <div className="row">
                                  <div className="col-12 d-flex justify-content-around">
                                      Forgot Password
                                  </div>
                              </div>

                              <div className="row">
                                  <div className="col-12 d-flex justify-content-around">
                                      <a href="dashboard1.html"><button className="btn-danger">Log
                                              In</button></a>
                                  </div>
                              </div>

                          </div>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-12">
                          Hey
                      </div>
                  </div>

              </div>
              <div className="col-2">

              </div>

          </div>
          <div className="row">
              <div className="col-12">Hey</div>
          </div>
      </section>

  </div>
</div>



<div className="custom-shape-divider-top-1621465308">
  <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M0,0V6c0,21.6,291,111.46,741,110.26,445.39,3.6,459-88.3,459-110.26V0Z" className="shape-fill ">
      </path>
</div>

<div className="custom-shape-divider-bottom-1621466425 ">
  <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path
          d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
          className="shape-fill"></path>
  </svg>
</div>;







)}


export default Home