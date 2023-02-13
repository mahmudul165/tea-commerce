import Image from "next/image";
import React from "react";
import { Card } from "react-bootstrap";
 import OverViewImage2 from '/public/slider-2.jpg'
function Overview4() {
  return (
    <section>
      <section className="container   ">
        <div className="row align-items-center ">
          
          <div className=" col-md-6 col-sm-12 ">
            {/* <Roll right> */}
              <div className="my-4 py-2">
                <Card> 
                <Image src={OverViewImage2} alt="Picture of the author" />
                </Card>
              </div>
          
          </div>
          <div className="col-md-6 col-sm-12">
            {/* <Roll left> */}
            <div className="my-2 py-2">
              <h1
                className="my-2  fs-3 fw-bolder  whileHover={{
                    scale: 1.3,
                    transition: { duration: 2 },
                  }} "
              >
               Our Vision
              </h1>
              <h6
                className="my-2 py-2 fs-5 fw-bold  whileHover={{
                    scale: 1.3,
                    transition: { duration: 2 },
                  }} "
              >
             Lorem Ipsum passage, and going through the cites of the word in classical literature.
              </h6>
              <p className="py-1 fs-5">
                St. Augustine College Now Offers A Fully Online English Language
                Program. Learn more today. Learn English Today! Take An Online
                ESL Course For Adults Through St. Augustine College. Check
                Academic Calendar. Browse Resources. View Events.  
              </p>
            </div>
            {/* </Roll> */}
          </div>
        </div>
      </section>
    </section>
  );
}

export default Overview4;