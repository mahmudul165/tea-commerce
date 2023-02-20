import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
const styles = {
  container: {
    position: "relative",
    backgroundImage: `url(${"https://i.ibb.co/0hy2GWR/Rectangle-45.png"})`,
    height: "500px",
    opacity: 0.5,
  },
  text: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    color: "#fff",
    fontSize: "24px",
    fontWeight: "bold",
    // textAlign: 'center',
    padding: "10px",
  },
};
const HeaderHero = () => (
  // <header
  //   className="hero d-flex align-items-center  " style={styles.container}
  //   // style={{
  //   //   backgroundImage: "url(https://i.ibb.co/0hy2GWR/Rectangle-45.png)",
  //   //   backgroundSize: "cover",
  //   //   opacity: 0.5,
  //   //   backgroundPosition: "center",
  //   //   height: "100vh",
  //   // }}
  // >
  //   <div className="row align-items-center justify-items-center ">
  //     <div className="col-8">
  //       <div className="container text-white ">
  //         <h1 className="fs-2 fw-bolder p-2 text-white" style={styles.text}>Health Benefits Of Tea Fresh Green Tea</h1>
  //         <p className="lead py-3 my-1 text-white">Tea is Good your health.</p>
  //         <button className="d-flex align-items-center  fw-bolder btn  btn-lg text-white" style={{backgroundColor:'#E49E48'}}>Shop Now
  //         <AiOutlineArrowRight className="ms-2"/>
  //         </button>
  //       </div>
  //     </div>
  //     <div className="col-4">

  //     </div>
  //   </div>
  // </header>

  <div
    className="px-1 py-5  "
    style={{
      backgroundImage: "url(https://i.ibb.co/0hy2GWR/Rectangle-45.png)",
      backgroundSize: "cover",
      opacity: 1,
      backgroundPosition: "center",
      marginTop:'-66px',
      // height: "100vh",
    }}
  >
    <div
      className="row    p-5 align-items-center flex-lg-row-reverse"
      style={{ marginTop: "100px" }}
    >
      <div className="col-md-6 col-xl-6 mb-4 mb-lg-0 ">
        <div className="lc-block position-relative ">
          <img
            className="ms-5  w-50 img-fluid rounded shadow"
            src="https://i.ibb.co/brH8NNP/nav-header.png"
            sizes="(max-width: 3840px) 100vw, 384px"
            width={384}
            height
            alt="Photo by sultan tea"
          />
          {/* <a className="position-absolute top-50 start-50 translate-middle glightbox d-flex justify-content-center align-items-center" href="https://www.youtube.com/watch?v=BKgpLOUYZJ4"> */}
          {/* <svg xmlns="http://www.w3.org/2000/svg" width="5em" height="5em" fill="currentColor" className="text-white" viewBox="0 0 16 16" lc-helper="svg-icon">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
          </svg> */}
          {/* <img src="/nav-header.png"></img> */}
          {/* </a> */}
        </div>
      </div>
      {/* /col */}
      <div className="col-md-6 col-xl-6 ">
        <div className="lc-block mb-3 me-4">
          <div editable="rich">
            <h1 className="fw-bolder display-5  text-white ">
              Health Benefits Of Tea Fresh Green Tea
            </h1>
          </div>
        </div>
        {/* /lc-block */}
        {/* /lc-block */}
        <div className="lc-block mb-2">
          <div editable="rich">
            <p className="lead text-white pb-2">Tea is Good your health</p>
          </div>
        </div>
        <div className="lc-block mt-2">
          <button
            className="d-flex align-items-center  fw-bolder btn  btn-lg text-white"
            style={{ backgroundColor: "#E49E48" }}
          >
            Shop Now
            <AiOutlineArrowRight className="ms-2" />
          </button>
        </div>
        {/* /lc-block */}
      </div>
      {/* /col */}
    </div>
  </div>
);

export default HeaderHero;
