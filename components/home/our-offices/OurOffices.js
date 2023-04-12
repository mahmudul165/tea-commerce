import SectionTitle from "@/components/common/SectionTitle";
 
import {
 OFFICES_ENDPOINT,
  
  useOfficesCollectionQuery,
} from "@/lib/hook/useApi";
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
      <Row className="align-items-center justify-content-between">
        <SectionTitle title="Our Offices " />
        {ourOffices?.map((product) => (
          <Col sm={12} md={4} key={product._id}>
            {/* <Card style={{ width: "22rem", height: "auto"}}> */}
            <Image src={product.image} alt="text22" fluid />
            <Card.Body className="py-2">
              <Card.Title>{product.name}</Card.Title>
              <Card.Text className="py-2 mb-1 cus-color-secondary">
                <span>
                  <FaMapMarkerAlt className="d-inline me-2" />
                </span>{" "}
                {product.location}
              </Card.Text>
              <Card.Text className="cus-color-secondary">
                <span className="py-2 my-2 ">
                  <FaPhoneAlt className="d-inline me-1 " />{" "}
                </span>
                {product.phone}
              </Card.Text>
              <Card.Text className="py-2 my-2 cus-color-secondary">
                <span>
                  <FaEnvelope className="d-inline me-2" />
                </span>
                {product.email}
              </Card.Text>
            </Card.Body>
            {/* </Card> */}
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default OurOffices;
