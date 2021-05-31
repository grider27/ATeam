import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="wrapper">
    
    <div className="content">

        <nav className="navbar navbar-expand-lg">

            <a className="navbar-brand" href="index5.html">Reader-Feeder</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            
        </nav>

        <main className="container block">

            <section className="row">

                <div className="col-md-12">

                    <form className="block form-horizontal">

                        <h2 className="block-header">Create a new Reader-Feeder Program Administrator Account</h2>
                        <hr />

                        <div className="form-group">

                            <label htmlFor="name" className="col-sm-12 control-label">Name </label>

                            <div className="col-sm-12">
                                <input type="name" className="form-control" id="name" placeholder="Name" />
                            </div>

                        </div>

                        <div className="form-group">

                            <label for="email" className="col-sm-12 control-label">Email</label>

                            <div className="col-sm-12">
                                <input type="email" className="form-control" id="email" placeholder="Email" />
                            </div>

                        </div>

                        <div className="form-group">

                            <label for="school" className="col-sm-12 control-label">School</label>

                            <div className="col-sm-12">
                                <input type="school" className="form-control" id="school" placeholder="School Name" />
                            </div>

                        </div>

                    </form>

                    <Link to="/TeacherDashboard">
                        <button className="submit-btn">Create Account</button>
                    </Link>

                </div>

            </section>

        </main>


    </div>
    
</div>

  );
}

export default Signup
