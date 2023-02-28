import Image from "next/image";
import React from "react";
import { Card } from "react-bootstrap";
import OverViewImage2 from "/public/about-image-1.png";
function Overview1() {
  return (
    <section>
      <section className="container   ">
        <div className="row align-items-center ">
          <section className="col-md-6 col-sm-12">
            {/* <Roll left> */}
            <div className="my-2 py-2">
              <h1
                className="my-2  fs-1 fw-bolder  whileHover={{
                    scale: 1.3,
                    transition: { duration: 2 },
                  }} "
              >
                Our Chairmen
              </h1>
              <p
                className="my-2 py-2 fs-4   whileHover={{
                    scale: 1.3,
                    transition: { duration: 2 },
                  }} "
              >
                Lorem Ipsum passage, and going through the cites of the word in
                classical literature.
              </p>
              <p className="py-1 fs-5 text-justify">
                St. Augustine College Now Offers A Fully Online English Language
                Program. Learn more today. Learn English Today! Take An Online
                ESL Course For Adults Through St. Augustine College. Check
                Academic Calendar. Browse Resources. View Events.
              </p>
            </div>
            {/* </Roll> */}
          </section>
          <section className=" col-md-6 col-sm-12 d-flex justify-content-end ">
            {/* <Roll right> */}
            <div className="my-4 py-2 ">
              <Card className="border-0">
                <Image
                  className="heroImage"
                  src={OverViewImage2}
                  alt="Picture of the author"
                  width={495}
                />
              </Card>
            </div>
          </section>
        </div>
      </section>
    </section>
  );
}

export default Overview1;
