import SectionTitle from "@/components/common/SectionTitle";
import React from "react";
import { Row, Col, Card, Image } from "react-bootstrap";
import { FaPhone, FaEnvelope } from "react-icons/fa";
function OurOffices() {
  const products = [
    {
      id: 1,
      image: "https://picture.liquidspace.com/Index?emptyImageUrl=https%3A%2F%2Fcontent.liquidspace.com%2FImages%2Fliquid-holder.jpg%3Fv%3Dff1a777e91&etag=jNy%2FQlinhOmOgaw3O3gGiA%3D%3D&crop=true&aux=ZtIUst8gU7uZ26VYJr51KgtI3b6VcVvZvl4Jp9lAAo6yNwb%2FfQKzvDXF4wob0nkKRvj1g5cXt9tE3plPiHK1Nw%3D%3D",
      name: "John Doe",
      location: "New York, NY",
      phone: "555-555-5555",
      email: "johndoe@example.com",
    },
    {
      id: 2,
      image: "https://i1.wp.com/bizbd.net/wp-content/uploads/2020/09/tea-business-in-bangladesh-01.jpg?fit=1024%2C640&ssl=1",
      name: "Jane Smith",
      location: "San Francisco, CA",
      phone: "555-555-5556",
      email: "janesmith@example.com",
    },
    {
      id: 3,
      image: "https://d1tm14lrsghf7q.cloudfront.net/public/media/28486/conversions/26998-thumb.jpg",
      name: "Bob Johnson",
      location: "Los Angeles, CA",
      phone: "555-555-5557",
      email: "bobjohnson@example.com",
    },
  ];

  return (
    <div className="container">
      <Row className="align-items-center justify-content-between">
      <SectionTitle title='Our Offices'/>
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
