import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div className="container">
        <div className="content">
          <section className="landing">
            <div className="row">
              <div
                className="col-12"
                style={{
                  height: '3vh',
                }}
              ></div>
            </div>
            <div
              id="book"
              className="row shadow shadow-lg"
              style={{
                borderTopRightRadius: '50px',
                borderBottomRightRadius: '50px',
              }}
            >
              <div className="col-2" id="spine"></div>
              <div className="col-8">
                <div className="row">
                  <div
                    className="col-sm-12 col-lg-12 d-flex justify-content-end"
                    style={{
                      height: '10vh',
                      zIndex: '1',
                    }}
                  >
                    <span class="enroll rainbow-text">
                      <Link to={'/Signup'}>ENROLL</Link>
                    </span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-8 col-lg-8 offset-lg-2 offset-sm-2 ">
                    <div className="login" id="loginBlock">
                      <div className="row">
                        <div className="col-12">
                          <img
                            class="logo"
                            src="assets/imgs/books.png"
                            alt="books icon"
                          />
                          <h1 className="font-weight-bold">Reader Feeder</h1>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 d-flex justify-content-center">
                          <input
                            type="username"
                            className="form-control mx-5"
                            id="code"
                            placeholder="Student Code"
                            style={{
                              borderStyle: 'none',
                              borderBottomWidth: '2px',
                              borderBottom: 'solid',
                              zIndex: '1',
                            }}
                          ></input>
                        </div>
                      </div>
                      <br />
                      <div className="row">
                        <div className="col-12 d-flex justify-content-center">
                          <input
                            type="username"
                            className="form-control mx-5"
                            id="email"
                            placeholder="Administrator Email"
                            style={{
                              borderStyle: 'none',
                              borderBottomWidth: '2px',
                              borderBottom: 'solid',
                              zIndex: '1',
                            }}
                          ></input>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 d-flex justify-content-center">
                          <input
                            type="password"
                            className="form-control mx-5"
                            id="password"
                            placeholder="Password"
                            style={{
                              borderStyle: 'none',
                              borderBottomWidth: '2px',
                              borderBottom: 'solid',
                              zIndex: '1',
                            }}
                          ></input>
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
                          <Link to={'/Menu'}>
                            <button className="btn-danger">Log In </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12"></div>
                </div>
              </div>
              <div className="col-sm-2 col-lg-2 d-flex justify-content-start"></div>
            </div>
            <div className="row">
              <div className="col-12"></div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
