import NavBar from '../components/navbar'


const ManageStudents = () => {
 return (
    <div className="wrapper">
    
    <div className="content">
   <NavBar />
        <main className="container block">
            <section> 
                <div className="row">
                    <div className="col-12">
                        <h2>Add Student</h2>
                    </div>

                </div>
                <div className="row">

                <div className="col-6">
                    <input type="name" className="form-control" id="name" placeholder="Name" />
                </div>
                <div className="col-6">
                    <input type="email" className="form-control" id="email" placeholder="Email" />
                </div>
                </div>

            </section>
        </main>
        
  
    </div>
</div>
 );
};

export default ManageStudents