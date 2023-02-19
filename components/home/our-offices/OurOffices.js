import SectionTitle from "@/components/common/SectionTitle";
import React from "react";
import { Row, Col, Card, Image } from "react-bootstrap";
import { FaMapMarkerAlt,FaPhone, FaEnvelope } from "react-icons/fa";
function OurOffices() {
  const products = [
    {
      id: 1,
      image: "https://i.ibb.co/BfcgrFd/our-offices.png",
      name: "John Doe",
      location: "New York, NY",
      phone: "555-555-5555",
      email: "johndoe@example.com",
    },
    {
      id: 2,
      // image: "https://d1tm14lrsghf7q.cloudfront.net/public/media/28486/conversions/26998-thumb.jpg",
      image: "https://i.ibb.co/BfcgrFd/our-offices.png",
      name: "Jane Smith",
      location: "San Francisco, CA",
      phone: "555-555-5556",
      email: "janesmith@example.com",
    },
    {
      id: 3,
      image: "https://i.ibb.co/BfcgrFd/our-offices.png",
       
      name: "Bob Johnson",
      location: "Los Angeles, CA",
      phone: "555-555-5557",
      email: "bobjohnson@example.com",
    },
  ];

  return (
    <div className="container my-4">
      <Row className="align-items-center justify-content-between">
      <SectionTitle title='Our Offices ' />
        {products.map((product) => (
          <Col sm={12} md={4} key={product.id}>
            {/* <Card style={{ width: "22rem", height: "auto"}}> */}
              <Image src={product.image} alt="text22" fluid />
              <Card.Body className="py-2">
                <Card.Title >{product.name}</Card.Title>
                <Card.Text className="py-2 mb-1"><span ><FaMapMarkerAlt className="d-inline me-2"/></span> {product.location}</Card.Text>
                <Card.Text>
                <span className="py-2 my-2" ><FaPhone   className="d-inline me-1"/> </span>{product.phone}
                </Card.Text>
                <Card.Text className="py-2 my-2">
                   <span   ><FaEnvelope className="d-inline me-2"/></span>
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
