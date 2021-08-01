import React from "react";
import { Navbar, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";


const Home = () => {


    return(
        <>

      <section id="header" className="d-flex align-items-center">
          <div className = "container-fluid nav_bg">
         <div className="row">

             <div className="col-10 mx-auto">
             <div className="row">
                 <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 mt-5 d-flex justify-content-center flex-column">
                     <h1> Welcome to my <strong className="brand">React App</strong></h1>
                     <p className="my-3">
                         We are performing CRUD operations using axios.<br />
                         Hope you will like it.
                     </p>
                     <div className="mt-3">
                     
                     <NavLink to="/About" className="btn btn-primary">KNOW MORE ABOUT ME</NavLink>

                     </div>
                 </div>

             <div className="col-lg-6 order-1 order-lg-2 header-img">
                 <img src="https://i.pinimg.com/736x/bd/52/e3/bd52e37006fa085dfdc011406441615e.jpg" className="img-fluid-animated" alt="home-img"  />
             </div>
             </div>
             </div>
         </div>


          </div>




      </section>


      

        </>
    );
}

export default Home;
