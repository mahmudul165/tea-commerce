import SectionTitle from "@/components/common/SectionTitle";

import { OFFICES_ENDPOINT, useOfficesCollectionQuery } from "@/lib/hook/useApi";
import React from "react";
import { Row, Col, Card, Image } from "react-bootstrap";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
function OurOffices() {
  const { data: ourOffices, isLoading, isError } = useOfficesCollectionQuery();
  return (
    <div className="container my-4">
      <Row className="justify-content-between">
        <SectionTitle title="Our Offices " />
        {ourOffices?.map((product) => (
          <Col sm={12} md={4} key={product._id}>
            {/* <Card style={{ width: "22rem", height: "auto"}}> */}
            <div className=" my-3 ">
              <div>
                <Image
                  src={product.image}
                  alt="Office"
                  fluid
                  className="w-100 h-auto object-fit-cover border rounded"
                />
              </div>
              <div className="py-2 ">
                <p className="fs-5  fw-bold my-2">{product.name}</p>
                <div className="py-2  mb-1 cus-color-secondary fs-6 cus-fw-4">
                  <span>
                    <FaMapMarkerAlt className="d-inline me-2" />
                  </span>{" "}
                  {product.location}
                </div>
                <div className="cus-color-secondary fs-6 cus-fw-4">
                  <span className="py-2 my-2 ">
                    <FaPhoneAlt className="d-inline me-1 " />{" "}
                  </span>
                  {product.phone}
                </div>
                <div className="py-2 my-2 cus-color-secondary fs-6 cus-fw-4">
                  <span>
                    <FaEnvelope className="d-inline me-2" />
                  </span>
                  {product.email}
                </div>
              </div>
            </div>

            {/* </Card> */}
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default OurOffices;
