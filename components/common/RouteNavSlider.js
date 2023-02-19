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
const RouteNavSlider = (props) => (
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
    className=" py-5"
    style={{
      backgroundImage: "url(https://i.ibb.co/0hy2GWR/Rectangle-45.png)",
      backgroundSize: "cover",
      opacity: 1,
      backgroundPosition: "center",
      // height: "100vh",
    }}
  >
    <div
      className="     p-5 align-items-center flex-lg-row-reverse"
      style={{ marginTop: "100px" }}
    >
      <div className=" ">
        {/* /lc-block */}
        <div className="lc-block mb-2 text-center">
          <div editable="rich">
            <h4 className="lead text-white pb-2 fs-3 fw-bolder">
              {props?.router}
            </h4>
          </div>
        </div>
        <div className="lc-block mt-2">
          {/* <button className="d-flex align-items-center  fw-bolder btn  btn-lg text-white" style={{backgroundColor:'#E49E48'}}>Shop Now
           <AiOutlineArrowRight className="ms-2"/>
           </button> */}
        </div>
        {/* /lc-block */}
      </div>
      {/* /col */}
    </div>
  </div>
);

export default RouteNavSlider;
