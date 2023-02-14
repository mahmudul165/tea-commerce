import React from "react";
 

const HeaderHero = () => (
  <header
    className="hero d-flex align-items-center  "
    style={{
      backgroundImage: "url(https://i.ibb.co/8j9JVL9/tea-garden-2.jpg)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100vh",
    }}
  >
    <div className="row align-items-center justify-items-center ">
      <div className="col-8">         
        <div className="container text-white ">
          <h1 className="fs-2 fw-bolder p-2 text-white">Health Benefits Of Tea Fresh Green Tea</h1>
          <p className="lead py-3 my-1 text-white">Tea is Good your health.</p>
          <button className="btn btn-outline-primary btn-lg text-white">Shop Now</button>
        </div>
      </div>
      <div className="col-4">


      </div>
    </div>
  </header>
);

export default HeaderHero;
