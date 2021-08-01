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
                     <h1> Welcome to my <strong className="brand1">About Page</strong></h1>
                     <p className="my-3">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos.
                     </p>
                     <div className="mt-3">
                     
                     <NavLink to="/home" className="btn btn-primary">GO TO HOME</NavLink>

                     </div>
                 </div>

             <div className="col-lg-6 order-1 order-lg-2 header-img">
                 <img src="https://cdni.iconscout.com/illustration/premium/thumb/girl-relaxing-and-listening-music-2496295-2117432.png" className="img-fluid-animated" alt="home-img"  />
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
