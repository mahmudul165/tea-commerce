import Image from "next/image";
import React from "react";
import { Card } from "react-bootstrap";
import { MyButton } from "@/components/common/Buttons";
import OverViewImage2 from "/public/about-image-2.png";
import { FaLongArrowAltRight } from "react-icons/fa";
function Overview2() {
  return (
    <section>
      <section className="container   ">
        <div className="row align-items-center ">
          <div className=" col-md-6 col-sm-12 ">
            {/* <Roll right> */}
            <div className="my-4 py-2">
              <Card>
                <Image
                  className="heroImage"
                  src={OverViewImage2}
                  alt="Picture of the author"
                />
              </Card>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 text-end">
            {/* <Roll left> */}
            <div className="my-2 py-2">
              {/* <h3 className="cus-color-secondary fs-4">About Us</h3> */}
              <h1
                className="my-2  fs-2 fw-bolder  whileHover={{
                    scale: 1.3,
                    transition: { duration: 2 },
                  }} "
              >
                Our Company
              </h1>

              <p className="py-1 fs-5 text-justify">
                St. Augustine College Now Offers A Fully Online English Language
                Program. Learn more today. Learn English Today! Take An Online
                ESL Course For Adults Through St. Augustine College. Check
                Academic Calendar. Browse Resources. View Events.
              </p>
            </div>

            <div className=" d-flex justify-content-end mt-5">
              <MyButton
                style={{ backgroundColor: "#E49E48" }}
                type="submit"
                size="lg"
                className=" text-white px-4 ele-center gap-2"
              >
                <span> More About Us</span> <FaLongArrowAltRight />
              </MyButton>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Overview2;
