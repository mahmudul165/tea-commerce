import React from "react";
import { Row, Col, Card, Image } from "react-bootstrap";
import { FaPhone, FaEnvelope } from "react-icons/fa";
function OurOffices() {
  const products = [
    {
      id: 1,
      image: "https://example.com/person1.jpg",
      name: "John Doe",
      location: "New York, NY",
      phone: "555-555-5555",
      email: "johndoe@example.com",
    },
    {
      id: 2,
      image: "https://example.com/person2.jpg",
      name: "Jane Smith",
      location: "San Francisco, CA",
      phone: "555-555-5556",
      email: "janesmith@example.com",
    },
    {
      id: 3,
      image: "https://example.com/person3.jpg",
      name: "Bob Johnson",
      location: "Los Angeles, CA",
      phone: "555-555-5557",
      email: "bobjohnson@example.com",
    },
  ];

  return (
    <div className="container">
      <Row className="align-items-center justify-content-between">
        {products.map((product) => (
          <Col xs={6} md={3} key={product.id}>
            <Card>
              <Image src={product.image} alt="text22" fluid />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.location}</Card.Text>
                <Card.Text>
                  <FaPhone /> {product.phone}
                </Card.Text>
                <Card.Text>
                  <FaEnvelope />
                  {product.email}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      ;
    </div>
  );
}

export default OurOffices;
